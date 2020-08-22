/**
 * 将 office 的arc 转换为 A指令， 依赖前一个指令来计算圆弧起点位置
 */
export default function arcToPathA(wR, hR, startAng, endAng, prevDir) {
    // TODO 根据 startAng 和 swingAng 计算 圆弧参数
    // 1. 计算 椭圆线段 开始的 x1 y1 和结束的 x2 y2
    // 2. 计算 x1 y1 处切线角度
    // 3. 根据切线角度对椭圆以椭圆中心为原点进行 旋转变换
    // 4. 根据旋转后的 x1 和 y1，对椭圆进行平移变换，使 x1 y1 和 起点重合（起点为上一个指令的结束点 或者 0 0 ， 如果上一个指令是圆弧？？？）
    // 5. 得到平移变换后 x2 y2 的坐标，赋值给endX， endY
}