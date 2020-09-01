import * as prstShape from 'prst-shape-transform'
const shapeNames = Object.keys(prstShape)

const svgs = []
for(let shape of shapeNames) {
    // if(shape !== 'heart') continue
    let svg = `<div style="text-align: center; margin: 15px; padding: 5px;display:inline-block;overflow:visible"><svg width=100 style="overflow: visible">`
    const paths = prstShape[shape](100, 100)
    paths.forEach(path => {
        svg += `<path stroke="#666" fill-opacity="${/Z$/.test(path) ? 0.5 : 0}" fill="rgba(100, 100, 100)" d="${path}"></path>`
    })
    svg += `</svg><p style="font-size: 12px">${shape}</p></div>`
    svgs.push(svg)
}
console.log(svgs[0])
document.documentElement.innerHTML = svgs.slice(0).join('')
