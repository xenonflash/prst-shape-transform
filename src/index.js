const fs = require('fs')
const rs = require('path').resolve
const _get = require('lodash/get')
const _isEmpty = require('lodash/isEmpty')
var convert = require('xml-js');
var beautify = require('js-beautify').js

const xml = fs.readFileSync(rs('src/presetShapeDefinitions.xml'))
// const xml = fs.readFileSync(rs('src/simple.xml'))
var options = {
  ignoreComment: true,
  // alwaysChildren: true,
  compact: false,
  attributesKey: 'attrs',
  elementsKey: 'children',
};
var result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
fs.writeFileSync('./tmp/result.json', JSON.stringify(result))
const shapeDefs = result.children[0].children

const helperFunctions = `
import arcToPathA from './arcToPathA'

const cos = Math.cos.bind(Math)
const sin = Math.sin.bind(Math)
const abs = Math.abs.bind(Math)
const atan = Math.atan.bind(Math)
const tan = Math.tan.bind(Math)
const atan2 = Math.atan2.bind(Math)
const max = Math.max.bind(Math)
const min = Math.min.bind(Math)
const sqrt = Math.sqrt.bind(Math)
const pi = Math.PI

function getCommonVal(w, h) {
  const ss = w < h ? w : h
  const ssd6 = ss / 6
  const ssd8 = ss / 8
  const ssd32 = ss / 32
  const ssd16 = ss / 16
  return {
    l: 0,
    t: 0,
    r: w,
    b: h,
    wd2: w / 2,
    wd3: w / 3,
    wd4: w / 4,
    wd6: w / 6,
    wd8: w / 8,
    wd32: w / 32,
    hd2: h / 2,
    hd3: h / 3,
    hd4: h / 4,
    hd6: h / 6,
    vc: h / 2,
    hc: w / 2,
    ss,
    ssd6,
    ssd8,
    ssd32,
    ssd16,
  }
}
`
let functionTexts = ""
const CD_REG = /(\d*)cd(\d*)/i

for (let shapeDef of shapeDefs) {
  if (functionTexts.includes(`function ${shapeDef.name} `)) {
    console.log('重复定义')
    continue
  }
  let res = `export function ${shapeDef.name} (w,h,`
  // 解析一条
  const { avLst, gdLst, ahLst, cxnLst, rect, pathLst } = shapeDef.children.reduce((accum, item) => {
    accum[item.name] = item
    return accum

  }, {})
  const params = parseAhList(ahLst)
  res += params
  res += '){\n'
  const defaultParams = parseAvList(avLst, params)
  res += defaultParams
  res += `
    const { l, t, r, b, wd2, wd3, wd4, wd6, wd8, wd32, hd2, hd3, hd4, hd6, vc, hc, ss, ssd6, ssd8, ssd32, ssd16, } = getCommonVal(w, h)
  `
  const logic = parseGuides(gdLst)
  res += logic
  const path = parsePath(pathLst)
  res += `\n ${path}\n`
  res += '}\n'
  functionTexts += res
}
fs.writeFileSync('./tmp/index.js', beautify(helperFunctions + functionTexts))
/**
 * 返回 参数列表
 */
function parseAhList(ahList) {
  const list = _get(ahList, 'children', [])
  const res = []
  for (let ah of list) {
    switch (ah.name) {
      case 'ahXY':
        ah.attrs.gdRefX && res.push(ah.attrs.gdRefX)
        ah.attrs.gdRefY && res.push(ah.attrs.gdRefY)
        break
      case 'ahPolar':
        ah.attrs.gdRefAng && res.push(ah.attrs.gdRefAng)
        ah.attrs.gdRefR && res.push(ah.attrs.gdRefR)
        break

    }
  }
  return res.join(',')
}

function parseGuides(gdList) {
  let gds = _get(gdList, 'children')
  if (_isEmpty(gds)) return '// no guides'
  let res = `
    
    `
  const expressions = []
  gds.map(gd => {
    let { name, fmla } = gd.attrs
    if (/^\d/.test(name)) name = '_' + name
    expressions.push({
      reAssign: !!expressions.find(item => item.valName === name),
      valName: name,
      exp: parseFmla(fmla)
    })
  })
  return res + expressions.map(item => {
    let code = `${item.valName} = ${item.exp}`
    if (!item.reAssign) {
      code = 'let ' + code
    }
    return code
  }).join('\n')
}
function parsePath(pathList) {
  const paths = _get(pathList, 'children', [])
  const helperCode = []
  let arcCounter = 0
  const res = paths.map(path => {
    let pathData = []
    const { w: wRatio, h: hRatio } = path.attrs || {}
    while (path.children.length) {
      const directive = path.children.shift()
      switch (directive.name) {
        case 'moveTo': {
          let { x, y } = directive.children[0].attrs
          if (wRatio) {
            x = x == 0 ? 0 : `${x} * w / ${wRatio}`
          }
          if (hRatio) {
            y = y == 0 ? 0 : `${y} * w / ${hRatio}`
          }
          pathData.push(`M\$\{${x}\},\$\{${y}\}`)
          break
        }
        case 'lnTo': {
          let { x, y } = directive.children[0].attrs
          if (wRatio) {
            x = x === 0 ? 0 : `${x} * w / ${wRatio}`
          }
          if (hRatio) {
            y = y === 0 ? 0 : `${y} * w / ${hRatio}`
          }
          pathData.push(`L\$\{${x}\},\$\{${y}\}`)
          break
        }
        case 'arcTo': {
          let { wR, hR, stAng, swAng } = directive.attrs
          if (wRatio) {
            wR = wR === 0 ? 0 : `${wR} * w / ${wRatio}`
          }
          if (hRatio) {
            hR = hR === 0 ? 0 : `${hR} * w / ${hRatio}`
          }
          let prev = {
            x: 0,
            y: 0
          }
          if (pathData.length) {
            prev = getPreEndPoint(pathData.slice(-1)[0])
          } else {
            console.log('arc 为第一点')
          }
          // 只考虑了前一点是  lineto 或者 moveto 情况
          const varName = `arc_${arcCounter++}`
          helperCode.push(`const ${varName} = arcToPathA(${wR}, ${hR}, ${normalizeAng(stAng)}, ${normalizeAng(swAng)}, ${prev.x}, ${prev.y})`)
          pathData.push(`\$\{${varName}.path\}`)
          break
        }
        case 'quadBezTo': {
          const [p1, p2] = directive.children.map(child => {
            let { x, y } = child.attrs
            if (wRatio) {
              x = x === 0 ? 0 : `${x} * w / ${wRatio}`
            }
            if (hRatio) {
              y = y === 0 ? 0 : `${y} * w / ${hRatio}`
            }
            return { x, y }
          })
          // TODO 这里估计有问题， T的前面 只有同样是 T 或者 Q 才能简化
          // const prev = pathData[pathData.length - 1]
          // if ((prev.startsWith('Q') || prev.startsWith('T')) && p2 === undefined) {
          if (p2 === undefined) {
            pathData.push(`T \$\{${p1.x}\} \$\{${p1.y}\}`)
          } else {
            pathData.push(`Q \$\{${p1.x}\} \$\{${p1.y}\},\${${p2.x}\} \$\{${p2.y}\}`)
          }
          // console.log('not supported', directive)
          break
        }
        case 'cubicBezTo': {
          // 前两个为控制点，最后一个为终点
          const [p1, p2, p3] = directive.children.map(child => {
            let { x, y } = child.attrs
            if (wRatio) {
              x = x === 0 ? 0 : `${x} * w / ${wRatio}`
            }
            if (hRatio) {
              y = y === 0 ? 0 : `${y} * w / ${hRatio}`
            }
            return { x, y }
          })
          // TODO 这里估计有问题， S 的前面 只有同样是 S 或者 C 才能简化
          // const prev = pathData[pathData.length - 1]
          // if ((prev.startsWith('C') || prev.startsWith('S')) && p3 === undefined) {
          if (p3 === undefined) {
            pathData.push(`S \$\{${p1.x}\} \$\{${p1.y}\},\$\{${p2.x}\} \$\{${p2.y}\}`)
          } else {
            pathData.push(`C \$\{${p1.x}\} \$\{${p1.y}\},\$\{${p2.x}\} \$\{${p2.y}\},\${${p3.x}\} \$\{${p3.y}\}`)
          }
          break
          // console.log('not suppored', directive)
        }
        case 'close': {
          if (path.children.length === 0) {
            pathData.push('Z')
            // const prev = getPreEndPoint(pathData.slice(-2)[0])
            // pathData.push(`M\$\{${prev.x}\},\$\{${prev.y}\}`)
          }
          break
        }
        default:
          console.log('not supported', directive)
          break
      }
    }
    return '`' + pathData.join(' ') + '`'
  })
  return `
    ${helperCode.join('\n')}
    return [${res.toString()}]
  `
}
function parseAvList(avList, paramList) {
  const list = _get(avList, 'children', [])
  let res = ''
  for (let defParam of list) {
    const varName = defParam.attrs.name
    if (paramList.includes(varName)) {
      res += `${varName} = ${varName} || ${parseFmla(defParam.attrs.fmla)}\n`
    } else {
      res += `const ${varName} = ${parseFmla(defParam.attrs.fmla)}\n`
    }
  }
  return res
}

// 解析一条 公式
function parseFmla(fmlaStr) {
  let [op, x, y, z] = fmlaStr.split(/\s+/)
  if (/^\d+[a-z]/.test(x)) x = '_' + x
  if (/^\d+[a-z]/.test(y)) y = '_' + y
  if (/^\d+[a-z]/.test(z)) z = '_' + z
  x = normalizeAng(x)
  y = normalizeAng(y)
  z = normalizeAng(z)
  switch (op) {
    case 'pin':
      return `${y} < ${x} ? ${x} : (${y} > ${z} ? ${z} : ${y})`
    case '*/':
    case '+-':
    case '+/':
      return `${x} ${op[0]} ${y} ${op[1]} ${z}`
    case '?:':
      return `${x} > 0 ? ${y} : ${z}`
    case 'abs':
      return `abs(${x})`
    case 'at2':
      return `atan2(${x}, ${y})`
    case 'cat2':
      return `${x} * (cos(atan2(${y}, ${z})))`
    case 'mod':
      return `sqrt(${x} * ${x} + ${y} * ${y} + ${z} * ${z})`
    case 'sat2':
      return `${x} * sin(atan2(${y}, ${z}))`
    case 'sin':
      return `${x} * sin(${y} / 60000 / 180 * pi)`
    case 'cos':
      return `${x} * cos(${y} / 60000 / 180 * pi)`
    case 'sqrt':
      return `sqrt(${x})`
    case 'tan':
      return `${x} * tan(${y} / 60000 / 180 * pi)`
    case 'min':
      return `min(${x}, ${y})`
    case 'max':
      return `max(${x}, ${y})`
    case 'val':
      return x
    default:
      console.log('not supported op', op, x, y, z)
      return ''
  }
}
function normalizeAng(str) {
  if (CD_REG.test(str)) {
    let [_, times, ratio] = str.match(CD_REG)
    times = times || 1
    ratio = ratio || 1
    return 360 / ratio * times * 60000
  } return str
}
function arrailize(obj) {
  if (obj === undefined || obj === null) return []
  if (!Array.isArray(obj)) return [obj]
  return obj
}

// 获取路径中，某一点的前一个路径指令的终点坐标
function getPreEndPoint(prevPoint) {
  const prev = {
    x: 0,
    y: 0
  }
  if (/^[ML]/.test(prevPoint)) {
    const [_, x, y] = prevPoint.match(/\${([\w\d\+\-\*\s\/]+)},\${([\w\d\+\-\*\s\/]*)}/)
    prev.x = x
    prev.y = y
  } else if (/^[QTSC]/.test(prevPoint)) {
    const [_, x, y] = prevPoint.match(/,\${([^,]+)}\s+\${([^,]+)}$/)
    prev.x = x
    prev.y = y
  } else if (/arc_/.test(prevPoint)) {
    // 拿到 前一点的helper code 变量名
    const [_, prevArcVarName] = prevPoint.match(/(arc_\d+)\./)
    prev.x = `${prevArcVarName}.end.x`
    prev.y = `${prevArcVarName}.end.y`
  } else {
    console.log('不支持的前一点', prevPoint)
  }
  return prev
}