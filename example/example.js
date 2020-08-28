import * as prstShape from 'prst-shape-transform'
const shapeNames = Object.keys(prstShape)
for(let shape of shapeNames) {
    const path = prstShape[shape](100, 100)
    console.log(path.length, path)
}