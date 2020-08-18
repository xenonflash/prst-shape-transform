const fs = require('fs')
const rs = require('path').resolve
const _get = require('lodash/get')
const _isEmpty = require('lodash/isEmpty')
var convert = require('xml-js');
// const xml = fs.readFileSync(rs('src/round-rect.xml'))
const xml = fs.readFileSync(rs('src/presetShapeDefinitions.xml'))
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
    let res = `function ${shapeDef.name}(w, h, l, r, t, b`
    // 解析一条
    const { avLst, gdLst, ahLst, cxnLst, rect, pathLst } =  shapeDef.children.reduce((accum, item) => {
        accum[item.name] = item
        return accum
    }, {})
    const params = parseAhList(ahLst)
    res += params
    res += ') {\n'
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
        const [ op, x, y, z ] = fmla.split(' ')
        let exp = `var ${name} = `
        switch(op) {
            case 'pin':
                exp +=`${y} < ${x} ? ${x} : (${y} > ${z} ? ${z} : ${y})`
                break;
            case '*/':
            case '+-':
                exp += `${x} ${op[0]} ${y} ${op[1]} ${z}`
                break
            case '?:':
                exp += `${x} > 0 ? ${y} : ${z}`
                break
            case 'abs':
                exp += `abs(${x})`
                break
            case 'at2':
                exp += `atan2(${x}, ${y})` //TODO 可能有问题
                break
            case 'cat2':
                exp += `${x} * (cos(atan(${z} / ${y}))`
                break;
            case 'cos':
                exp += `max(${x}, ${y})`
                break;
            case 'cos':
                exp += `min(${x}, ${y})`
                break;
            case 'mod':
                exp += `sqrt(${x} * ${x} + ${y} * ${y} + ${z} * ${z})`
                break;
            case 'sat2':
                exp += `${x} * sin(atan(${z} / ${y}))`
                break;
            case 'sin':
                exp += `${x} * sin(${y})`
                break;
            case 'sqrt':
                exp += `sqrt(${x})`
                break;
            case 'tan':
                exp += `${x} * tan(${y})`
                break;
            case 'val':
                exp += `${x}`
                break
            default:
                console.log('not supported op', op, x, y, z)      
        }
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

function arrailize(obj) {
    if (obj === undefined || obj === null) return []
    if (!Array.isArray(obj)) return [obj]
    return obj
}