const fs = require('fs')
const rs = require('path').resolve
const _get = require('lodash/get')
const _isEmpty = require('lodash/isEmpty')
var convert = require('xml-js');
const { normalize } = require('path');
var beautify = require('js-beautify').js


const xml = fs.readFileSync(rs('src/presetShapeDefinitions.xml'))
// const xml = fs.readFileSync(rs('src/round-rect.xml'))
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
const atan2 = Math.atan2.bind(Math)
const max = Math.max.bind(Math)
const min = Math.min.bind(Math)
const sqrt = Math.sqrt.bind(Math)
`
let functionTexts = ""
const CD_REG = /(\d*)cd(\d*)/i
for (let shapeDef of shapeDefs) {
    let res = `export function ${shapeDef.name}(w,h,l,r,t,b,`
    // 解析一条
    const { avLst, gdLst, ahLst, cxnLst, rect, pathLst } = shapeDef.children.reduce((accum, item) => {
        accum[item.name] = item
        return accum

    }, {})
    const params = parseAhList(ahLst)
    res += params
    res += '){\n'
    const defaultParams = parseAvList(avLst)
    res += defaultParams
    const logic = parseGuides(gdLst)
    res += logic
    const paths = parsePath(pathLst)
    res += `\nreturn [${paths.toString()}]\n`
    res += '}\n'
    functionTexts += res
}
fs.writeFileSync('./dist/index.js', beautify(helperFunctions + functionTexts))
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
    const ss = w < h ? w : h
    `
    const expressions = gds.map(gd => {
        let { name, fmla } = gd.attrs
        if (/^\d/.test(name)) name = '_' + name
        let exp = `const ${name} = ${parseFmla(fmla)}`
        return exp
    })
    return res + expressions.join('\n')
}
function parsePath(pathList) {
    const paths = _get(pathList, 'children', [])
    
    const res = paths.map(path => {
        let pathStr = ""
        const { w: wRatio, h: hRatio } = path.attrs || {}
        path.children.forEach(directive => {
            switch (directive.name) {
                case 'moveTo': {
                    let { x, y } = directive.children[0].attrs
                    if (wRatio) {
                        x = x == 0 ? 0 : `${x} * w / ${wRatio}`
                    }
                    if (hRatio) {
                        y = y == 0 ? 0 : `${y} * w / ${hRatio}`
                    }
                    pathStr += `M\$\{${x}\},\$\{${y}\}`
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
                    pathStr += `L\$\{${x}\},\$\{${y}\}`
                    break
                }
                case 'arcTo': {
                    let { wR, hR, stAng, swAng } = directive.attrs
                    pathStr += `\$\{arcToPathA(${wR}, ${hR}, ${normalizeAng(stAng)}, ${normalizeAng(swAng)})\}`
                    break
                }
                case 'quadBezTo': {
                    // console.log('not supported', directive)
                }
                case 'cubicBezTo': {
                    // console.log('not suppored', directive)
                }
                case 'close': {
                    pathStr += 'Z'
                    break
                }
                default:
                    // console.log('not supported', directive)
                    break
            }
        })
        return '`' + pathStr + '`'
    })
    return res
}
function parseAvList(avList) {
    const list = _get(avList, 'children', [])
    let res = ''
    for (let defParam of list) {
        res += `${defParam.attrs.name} = ${defParam.attrs.name} || ${parseFmla(defParam.attrs.fmla)}\n`
    }
    return res
}

// 解析一条 公式
function parseFmla(fmlaStr) {
    let [op, x, y, z] = fmlaStr.split(' ')
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
            return `atan2(${x}, ${y})` //TODO 可能有问题
        case 'cat2':
            return `${x} * (cos(atan(${z} / ${y})))`
        case 'cos':
            return `max(${x}, ${y})`
        case 'cos':
            return `min(${x}, ${y})`
        case 'mod':
            return `sqrt(${x} * ${x} + ${y} * ${y} + ${z} * ${z})`
        case 'sat2':
            return `${x} * sin(atan(${z} / ${y}))`
        case 'sin':
            return `${x} * sin(${y})`
        case 'sqrt':
            return `sqrt(${x})`
        case 'tan':
            return `${x} * tan(${y})`
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
        let [ _, times, ratio ] = str.match(CD_REG)
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