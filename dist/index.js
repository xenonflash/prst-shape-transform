const cos = Math.cos.bind(Math)
const sin = Math.sin.bind(Math)
const abs = Math.abs.bind(Math)
const atan = Math.atan.bind(Math)
const atan2 = Math.atan2.bind(Math)
const max = Math.max.bind(Math)
const min = Math.min.bind(Math)
const sqrt = Math.sqrt.bind(Math)
export function roundRect(w, h, l, r, t, b, adj) {
    adj = adj || 16667

    const ss = w < h ? w : h
    const a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    const x1 = ss * a / 100000
    const x2 = r + 0 - x1
    const y2 = b + 0 - x1
    const il = x1 * 29289 / 100000
    const ir = r + 0 - il
    const ib = b + 0 - il
    return [`M${l},${x1}L${x2},${t}L${r},${y2}L${x1},${b}Z`]
}