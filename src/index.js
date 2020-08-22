const fs = require('fs')
const rs = require('path').resolve
const _get = require('lodash/get')
const _isEmpty = require('lodash/isEmpty')
var convert = require('xml-js');
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
fs.writeFileSync('./result.json', JSON.stringify(result))
const shapeDefs = result.children[0].children

let functionTexts = ""
for (let shapeDef of shapeDefs) {
    let res = `function ${shapeDef.name}(w,h,l,r,t,b,`
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
    res += '\n'
    const logic = parseGuides(gdLst)
    res += logic
    const paths = parsePath(pathLst)
    res += `\nreturn [${paths.toString()}]\n`
    res += '}\n'
    functionTexts += res
}
fs.writeFileSync('./shape-functions.js', beautify(functionTexts))
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
    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    `
    const expressions = gds.map(gd => {
        const { name, fmla } = gd.attrs
        let exp = `var ${name} = ${parseFmla(fmla)}`
        return exp
    })
    return res + expressions.join('\n')
}
function parsePath(pathList) {
    const paths = _get(pathList, 'children', [])
    const res = paths.map(path => {
        let pathStr = ""
        path.children.forEach(directive => {
            switch (directive.name) {
                case 'moveTo': {
                    const { x, y } = directive.children[0].attrs
                    pathStr += `M\$\{${x}\},\$\{${y}\}`
                    break
                }
                case 'lnTo': {
                    const { x, y } = directive.children[0].attrs
                    pathStr += `L\$\{${x}\},\$\{${y}\}`
                    break
                }
                case 'arcTo': {
                    console.log('arc', directive)
                    // const { wR, hR, stAng, swAng } = path.attrs
                    // TODO 转换
                    // pathStr += `A${},${y},${},${},${},${}`
                    break
                }
                case 'quadBezTo': {
                    console.log('not supported', directive)
                }
                case 'cubicBezTo': {
                    console.log('not suppored', directive)
                }
                case 'close': {
                    pathStr += 'Z'
                    break
                }
                default:
                    console.log('not supported', directive)
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
    const [op, x, y, z] = fmlaStr.split(' ')
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
function arrailize(obj) {
    if (obj === undefined || obj === null) return []
    if (!Array.isArray(obj)) return [obj]
    return obj
}