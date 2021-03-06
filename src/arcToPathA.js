import { applyToPoint, translate, rotate, compose } from 'transformation-matrix'

/**
 * 将 office 的arc 转换为 A指令， 依赖前一个指令来计算圆弧起点位置
 */
export default function arcToPathA(wR, hR, startAng, swAng, preX, preY) {
    // TODO 根据 startAng 和 swingAng 计算 圆弧参数
    // 1. 计算 椭圆线段 开始的 x1 y1 和结束的 x2 y2
    let { start, end } = genArcPoint(wR, hR, startAng, swAng)
    // 2. 计算 x1 y1 处切线角度
    // 3. 根据切线角度对椭圆以椭圆中心为原点进行 旋转变换(根据选取的线段角度判断 旋转方向)
    // 4. 根据旋转后的 x1 和 y1，对椭圆进行平移变换，使 x1 y1 和 起点重合（起点为上一个指令的结束点 或者 0 0 ， 如果上一个指令是圆弧？？？）
    const matrix = translate(preX - start.x, preY - start.y)
    end = applyToPoint(matrix, end)
    start = applyToPoint(matrix, start)
    // 5. 得到平移变换后 x2 y2 的坐标，赋值给endX， endY
    let path = ''
    if (swAng == 60000 * 360) {
        let { end:halfEnd } = genArcPoint(wR, hR, startAng, 60000 * 180)
        halfEnd = applyToPoint(matrix, halfEnd)
        path = `A${wR},${hR},0,1,0,${halfEnd.x.toFixed(2)},${halfEnd.y.toFixed(2)}A${wR},${hR},0,0,0,${start.x.toFixed(2)},${start.y.toFixed(2)}`
        console.log(path)
    } else if (swAng > 60000 * 180) {
        path = `A${wR},${hR},0,1,1,${end.x.toFixed(2)},${end.y.toFixed(2)}`
    } else if (swAng < 0) {
        path = `A${wR},${hR},0,0,0,${end.x.toFixed(2)},${end.y.toFixed(2)}`
    }else {
        path = `A${wR},${hR},0,0,1,${end.x.toFixed(2)},${end.y.toFixed(2)}`
    }
    return {
        path,
        start,
        end
    }

}

function genArcPoint(wr, hr, stAng, swAng) {
    const r = deg => Math.PI * (deg / 60000 / 180)
    let start = stAng
    let end = start + swAng
    return {
        start: {
            x: wr * Math.cos(r(start)),
            y: hr * Math.sin(r(start))
        },
        end: {
            x: wr * Math.cos(r(end)),
            y: hr * Math.sin(r(end))
        }
    }
}