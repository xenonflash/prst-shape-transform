const fs = require('fs')
const rs = require('path').resolve
const _get = require('lodash/get')
const _isEmpty = require('lodash/isEmpty')
var convert = require('xml-js');
const xml = fs.readFileSync(rs('src/round-rect.xml'))
// const xml = fs.readFileSync(rs('src/presetShapeDefinitions.xml'))
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
for (let shapeDef of shapeDefs) {
    let res = `function ${shapeDef.name}(w, h, l, r, t, b,`
    // 解析一条
    const { avLst, gdLst, ahLst, cxnLst, rect, pathLst } = shapeDef.children.reduce((accum, item) => {
        accum[item.name] = item
        return accum
    }, {})
    const params = parseAhList(ahLst)
    res += params
    res += ') {\n'
    const defaultParams = parseAvList(avLst)
    res += defaultParams
    res += '\n'
    const logic = parseGuides(gdLst)
    res += logic
    const svgGen = parsePath(pathLst)
    res += `\nreturn \`${svgGen}\`\n`
    res += '}'
    console.log(res)
}
/**
 * 返回 参数列表
 */
function parseAhList(ahList) {
    const res = []
    for (let ah of ahList.children) {
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
    const paths = pathList.children.find(p => p.name === 'path').children
    if (!paths) return '// no path'
    let res = ""
    paths.forEach(path => {
        switch (path.name) {
            case 'moveTo': {
                const { x, y } = path.children[0].attrs
                res += `M\$\{${x}\},\$\{${y}\}`
                break
            }
            case 'lnTo': {
                const { x, y } = path.children[0].attrs
                res += `L\$\{${x}\},\$\{${y}\}`
                break
            }
            case 'arcTo': {
                const { wR, hR, stAng, swAng } = path.attrs
                // TODO 转换
                // res += `A${},${y},${},${},${},${}`
                break
            }
            case 'close': {
                res += 'Z'
                break
            }
            default:
                console.log('not supported', path)
                break
        }
    })
    return res
}
function parseAvList(avList) {
    let res = ''
    for (let defParam of avList.children) {
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
            return `${x} ${op[0]} ${y} ${op[1]} ${z}`
        case '?:':
            return `${x} > 0 ? ${y} : ${z}`
        case 'abs':
            return `abs(${x})`
        case 'at2':
            return `atan2(${x}, ${y})` //TODO 可能有问题
        case 'cat2':
            return `${x} * (cos(atan(${z} / ${y}))`
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