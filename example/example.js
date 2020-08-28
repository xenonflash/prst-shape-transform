import * as prstShape from 'prst-shape-transform'
const shapeNames = Object.keys(prstShape)

const svgs = []
for(let shape of shapeNames) {
    let svg = `<div style="text-align: center; margin: 15px; padding: 5px;display:inline-block"><svg width=100 height=100>`
    const paths = prstShape[shape](100, 100)
    paths.forEach(path => {
        svg += `<path d=${path}></path>`
    })
    svg += `</svg><p style="font-size: 12px">${shape}</p></div>`
    svgs.push(svg)
}
console.log(svgs[0])
document.documentElement.innerHTML = svgs.slice(0).join('')
