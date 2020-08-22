const cos = Math.cos.bind(Math)
const sin = Math.sin.bind(Math)
const abs = Math.abs.bind(Math)
const atan = Math.atan.bind(Math)
const atan2 = Math.atan2.bind(Math)
const max = Math.max.bind(Math)
const min = Math.min.bind(Math)
const sqrt = Math.sqrt.bind(Math)
export function accentBorderCallout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _112500
    adj4 = adj4 || -38333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}`]
}
export function accentBorderCallout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _112500
    adj6 = adj6 || -46667

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}
export function accentBorderCallout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _100000
    adj6 = adj6 || -16667
    adj7 = adj7 || _112963
    adj8 = adj8 || -8333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    const y4 = h * adj7 / _100000
    const x4 = w * adj8 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}
export function accentCallout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _112500
    adj4 = adj4 || -38333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}`]
}
export function accentCallout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _112500
    adj6 = adj6 || -46667

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}
export function accentCallout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _100000
    adj6 = adj6 || -16667
    adj7 = adj7 || _112963
    adj8 = adj8 || -8333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    const y4 = h * adj7 / _100000
    const x4 = w * adj8 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}
export function actionButtonBackPrevious(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${vc}L${g12},${g9}L${g12},${g10}Z`, `M${g11},${vc}L${g12},${g9}L${g12},${g10}Z`, `M${g11},${vc}L${g12},${g9}L${g12},${g10}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonBeginning(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    const g13 = ss * _3 / _4
    const g14 = g13 * _1 / _8
    const g15 = g13 * _1 / _4
    const g16 = g11 + g14 - _0
    const g17 = g11 + g15 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g17},${vc}L${g12},${g9}L${g12},${g10}ZM${g16},${g9}L${g11},${g9}L${g11},${g10}L${g16},${g10}Z`, `M${g17},${vc}L${g12},${g9}L${g12},${g10}ZM${g16},${g9}L${g11},${g9}L${g11},${g10}L${g16},${g10}Z`, `M${g17},${vc}L${g12},${g9}L${g12},${g10}ZM${g16},${g9}L${g16},${g10}L${g11},${g10}L${g11},${g9}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonBlank(w, h, l, r, t, b, ) {
    // no guides
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonDocument(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const dx1 = ss * _9 / _32
    const g11 = hc + _0 - dx1
    const g12 = hc + dx1 - _0
    const g13 = ss * _3 / _16
    const g14 = g12 + _0 - g13
    const g15 = g9 + g13 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${g9}L${g14},${g9}L${g12},${g15}L${g12},${g10}L${g11},${g10}Z`, `M${g11},${g9}L${g14},${g9}L${g14},${g15}L${g12},${g15}L${g12},${g10}L${g11},${g10}Z`, `M${g14},${g9}L${g14},${g15}L${g12},${g15}Z`, `M${g11},${g9}L${g14},${g9}L${g12},${g15}L${g12},${g10}L${g11},${g10}ZM${g12},${g15}L${g14},${g15}L${g14},${g9}`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonEnd(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    const g13 = ss * _3 / _4
    const g14 = g13 * _3 / _4
    const g15 = g13 * _7 / _8
    const g16 = g11 + g14 - _0
    const g17 = g11 + g15 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g16},${vc}L${g11},${g9}L${g11},${g10}ZM${g17},${g9}L${g12},${g9}L${g12},${g10}L${g17},${g10}Z`, `M${g16},${vc}L${g11},${g9}L${g11},${g10}ZM${g17},${g9}L${g12},${g9}L${g12},${g10}L${g17},${g10}Z`, `M${g16},${vc}L${g11},${g10}L${g11},${g9}ZM${g17},${g9}L${g12},${g9}L${g12},${g10}L${g17},${g10}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonForwardNext(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g12},${vc}L${g11},${g9}L${g11},${g10}Z`, `M${g12},${vc}L${g11},${g9}L${g11},${g10}Z`, `M${g12},${vc}L${g11},${g10}L${g11},${g9}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonHelp(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g11 = hc + _0 - dx2
    const g13 = ss * _3 / _4
    const g14 = g13 * _1 / _7
    const g15 = g13 * _3 / _14
    const g16 = g13 * _2 / _7
    const g19 = g13 * _3 / _7
    const g20 = g13 * _4 / _7
    const g21 = g13 * _17 / _28
    const g23 = g13 * _21 / _28
    const g24 = g13 * _11 / _14
    const g27 = g9 + g16 - _0
    const g29 = g9 + g21 - _0
    const g30 = g9 + g23 - _0
    const g31 = g9 + g24 - _0
    const g33 = g11 + g15 - _0
    const g36 = g11 + g19 - _0
    const g37 = g11 + g20 - _0
    const g41 = g13 * _1 / _14
    const g42 = g13 * _3 / _28
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g33},${g27}A${g16},${g16},0,0,1,${},${}A${g14},${g15},0,0,1,${},${}A${g41},${g42},0,0,1,${},${}L${g37},${g30}L${g36},${g30}L${g36},${g29}A${g14},${g15},0,0,1,${},${}A${g41},${g42},0,0,1,${},${}A${g14},${g14},0,0,1,${},${}ZM${hc},${g31}A${g42},${g42},0,0,1,${},${}Z`, `M${g33},${g27}A${g16},${g16},0,0,1,${},${}A${g14},${g15},0,0,1,${},${}A${g41},${g42},0,0,1,${},${}L${g37},${g30}L${g36},${g30}L${g36},${g29}A${g14},${g15},0,0,1,${},${}A${g41},${g42},0,0,1,${},${}A${g14},${g14},0,0,1,${},${}ZM${hc},${g31}A${g42},${g42},0,0,1,${},${}Z`, `M${g33},${g27}A${g16},${g16},0,0,1,${},${}A${g14},${g15},0,0,1,${},${}A${g41},${g42},0,0,1,${},${}L${g37},${g30}L${g36},${g30}L${g36},${g29}A${g14},${g15},0,0,1,${},${}A${g41},${g42},0,0,1,${},${}A${g14},${g14},0,0,1,${},${}ZM${hc},${g31}A${g42},${g42},0,0,1,${},${}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonHome(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    const g13 = ss * _3 / _4
    const g14 = g13 * _1 / _16
    const g15 = g13 * _1 / _8
    const g16 = g13 * _3 / _16
    const g17 = g13 * _5 / _16
    const g18 = g13 * _7 / _16
    const g19 = g13 * _9 / _16
    const g20 = g13 * _11 / _16
    const g21 = g13 * _3 / _4
    const g22 = g13 * _13 / _16
    const g23 = g13 * _7 / _8
    const g24 = g9 + g14 - _0
    const g25 = g9 + g16 - _0
    const g26 = g9 + g17 - _0
    const g27 = g9 + g21 - _0
    const g28 = g11 + g15 - _0
    const g29 = g11 + g18 - _0
    const g30 = g11 + g19 - _0
    const g31 = g11 + g20 - _0
    const g32 = g11 + g22 - _0
    const g33 = g11 + g23 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${hc},${g9}L${g11},${vc}L${g28},${vc}L${g28},${g10}L${g33},${g10}L${g33},${vc}L${g12},${vc}L${g32},${g26}L${g32},${g24}L${g31},${g24}L${g31},${g25}Z`, `M${g32},${g26}L${g32},${g24}L${g31},${g24}L${g31},${g25}ZM${g28},${vc}L${g28},${g10}L${g29},${g10}L${g29},${g27}L${g30},${g27}L${g30},${g10}L${g33},${g10}L${g33},${vc}Z`, `M${hc},${g9}L${g11},${vc}L${g12},${vc}ZM${g29},${g27}L${g30},${g27}L${g30},${g10}L${g29},${g10}Z`, `M${hc},${g9}L${g31},${g25}L${g31},${g24}L${g32},${g24}L${g32},${g26}L${g12},${vc}L${g33},${vc}L${g33},${g10}L${g28},${g10}L${g28},${vc}L${g11},${vc}ZM${g31},${g25}L${g32},${g26}M${g33},${vc}L${g28},${vc}M${g29},${g10}L${g29},${g27}L${g30},${g27}L${g30},${g10}`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonInformation(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g11 = hc + _0 - dx2
    const g13 = ss * _3 / _4
    const g14 = g13 * _1 / _32
    const g17 = g13 * _5 / _16
    const g18 = g13 * _3 / _8
    const g19 = g13 * _13 / _32
    const g20 = g13 * _19 / _32
    const g22 = g13 * _11 / _16
    const g23 = g13 * _13 / _16
    const g24 = g13 * _7 / _8
    const g25 = g9 + g14 - _0
    const g28 = g9 + g17 - _0
    const g29 = g9 + g18 - _0
    const g30 = g9 + g23 - _0
    const g31 = g9 + g24 - _0
    const g32 = g11 + g17 - _0
    const g34 = g11 + g19 - _0
    const g35 = g11 + g20 - _0
    const g37 = g11 + g22 - _0
    const g38 = g13 * _3 / _32
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${hc},${g9}A${dx2},${dx2},0,0,1,${},${}Z`, `M${hc},${g9}A${dx2},${dx2},0,0,1,${},${}ZM${hc},${g25}A${g38},${g38},0,0,1,${},${}M${g32},${g28}L${g32},${g29}L${g34},${g29}L${g34},${g30}L${g32},${g30}L${g32},${g31}L${g37},${g31}L${g37},${g30}L${g35},${g30}L${g35},${g28}Z`, `M${hc},${g25}A${g38},${g38},0,0,1,${},${}M${g32},${g28}L${g35},${g28}L${g35},${g30}L${g37},${g30}L${g37},${g31}L${g32},${g31}L${g32},${g30}L${g34},${g30}L${g34},${g29}L${g32},${g29}Z`, `M${hc},${g9}A${dx2},${dx2},0,0,1,${},${}ZM${hc},${g25}A${g38},${g38},0,0,1,${},${}M${g32},${g28}L${g35},${g28}L${g35},${g30}L${g37},${g30}L${g37},${g31}L${g32},${g31}L${g32},${g30}L${g34},${g30}L${g34},${g29}L${g32},${g29}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonMovie(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    const g13 = ss * _3 / _4
    const g14 = g13 * _1455 / _21600
    const g15 = g13 * _1905 / _21600
    const g16 = g13 * _2325 / _21600
    const g17 = g13 * _16155 / _21600
    const g18 = g13 * _17010 / _21600
    const g19 = g13 * _19335 / _21600
    const g20 = g13 * _19725 / _21600
    const g21 = g13 * _20595 / _21600
    const g22 = g13 * _5280 / _21600
    const g23 = g13 * _5730 / _21600
    const g24 = g13 * _6630 / _21600
    const g25 = g13 * _7492 / _21600
    const g26 = g13 * _9067 / _21600
    const g27 = g13 * _9555 / _21600
    const g28 = g13 * _13342 / _21600
    const g29 = g13 * _14580 / _21600
    const g30 = g13 * _15592 / _21600
    const g31 = g11 + g14 - _0
    const g32 = g11 + g15 - _0
    const g33 = g11 + g16 - _0
    const g34 = g11 + g17 - _0
    const g35 = g11 + g18 - _0
    const g36 = g11 + g19 - _0
    const g37 = g11 + g20 - _0
    const g38 = g11 + g21 - _0
    const g39 = g9 + g22 - _0
    const g40 = g9 + g23 - _0
    const g41 = g9 + g24 - _0
    const g42 = g9 + g25 - _0
    const g43 = g9 + g26 - _0
    const g44 = g9 + g27 - _0
    const g45 = g9 + g28 - _0
    const g46 = g9 + g29 - _0
    const g47 = g9 + g30 - _0
    const g48 = g9 + g31 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${g39}L${g11},${g44}L${g31},${g44}L${g32},${g43}L${g33},${g43}L${g33},${g47}L${g35},${g47}L${g35},${g45}L${g36},${g45}L${g38},${g46}L${g12},${g46}L${g12},${g41}L${g38},${g41}L${g37},${g42}L${g35},${g42}L${g35},${g41}L${g34},${g40}L${g32},${g40}L${g31},${g39}Z`, `M${g11},${g39}L${g11},${g44}L${g31},${g44}L${g32},${g43}L${g33},${g43}L${g33},${g47}L${g35},${g47}L${g35},${g45}L${g36},${g45}L${g38},${g46}L${g12},${g46}L${g12},${g41}L${g38},${g41}L${g37},${g42}L${g35},${g42}L${g35},${g41}L${g34},${g40}L${g32},${g40}L${g31},${g39}Z`, `M${g11},${g39}L${g31},${g39}L${g32},${g40}L${g34},${g40}L${g35},${g41}L${g35},${g42}L${g37},${g42}L${g38},${g41}L${g12},${g41}L${g12},${g46}L${g38},${g46}L${g36},${g45}L${g35},${g45}L${g35},${g47}L${g33},${g47}L${g33},${g43}L${g32},${g43}L${g31},${g44}L${g11},${g44}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonReturn(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    const g13 = ss * _3 / _4
    const g14 = g13 * _7 / _8
    const g15 = g13 * _3 / _4
    const g16 = g13 * _5 / _8
    const g17 = g13 * _3 / _8
    const g18 = g13 * _1 / _4
    const g19 = g9 + g15 - _0
    const g20 = g9 + g16 - _0
    const g21 = g9 + g18 - _0
    const g22 = g11 + g14 - _0
    const g23 = g11 + g15 - _0
    const g24 = g11 + g16 - _0
    const g25 = g11 + g17 - _0
    const g26 = g11 + g18 - _0
    const g27 = g13 * _1 / _8
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g12},${g21}L${g23},${g9}L${hc},${g21}L${g24},${g21}L${g24},${g20}A${g27},${g27},0,0,1,${},${}L${g25},${g19}A${g27},${g27},0,0,1,${},${}L${g26},${g21}L${g11},${g21}L${g11},${g20}A${g17},${g17},0,0,1,${},${}L${hc},${g10}A${g17},${g17},0,0,1,${},${}L${g22},${g21}Z`, `M${g12},${g21}L${g23},${g9}L${hc},${g21}L${g24},${g21}L${g24},${g20}A${g27},${g27},0,0,1,${},${}L${g25},${g19}A${g27},${g27},0,0,1,${},${}L${g26},${g21}L${g11},${g21}L${g11},${g20}A${g17},${g17},0,0,1,${},${}L${hc},${g10}A${g17},${g17},0,0,1,${},${}L${g22},${g21}Z`, `M${g12},${g21}L${g22},${g21}L${g22},${g20}A${g17},${g17},0,0,1,${},${}L${g25},${g10}A${g17},${g17},0,0,1,${},${}L${g11},${g21}L${g26},${g21}L${g26},${g20}A${g27},${g27},0,0,1,${},${}L${hc},${g19}A${g27},${g27},0,0,1,${},${}L${g24},${g21}L${hc},${g21}L${g23},${g9}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function actionButtonSound(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx2 = ss * _3 / _8
    const g9 = vc + _0 - dx2
    const g10 = vc + dx2 - _0
    const g11 = hc + _0 - dx2
    const g12 = hc + dx2 - _0
    const g13 = ss * _3 / _4
    const g14 = g13 * _1 / _8
    const g15 = g13 * _5 / _16
    const g16 = g13 * _5 / _8
    const g17 = g13 * _11 / _16
    const g18 = g13 * _3 / _4
    const g19 = g13 * _7 / _8
    const g20 = g9 + g14 - _0
    const g21 = g9 + g15 - _0
    const g22 = g9 + g17 - _0
    const g23 = g9 + g19 - _0
    const g24 = g11 + g15 - _0
    const g25 = g11 + g16 - _0
    const g26 = g11 + g18 - _0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${g21}L${g11},${g22}L${g24},${g22}L${g25},${g10}L${g25},${g9}L${g24},${g21}Z`, `M${g11},${g21}L${g11},${g22}L${g24},${g22}L${g25},${g10}L${g25},${g9}L${g24},${g21}Z`, `M${g11},${g21}L${g24},${g21}L${g25},${g9}L${g25},${g10}L${g24},${g22}L${g11},${g22}ZM${g26},${g21}L${g12},${g20}M${g26},${vc}L${g12},${vc}M${g26},${g22}L${g12},${g23}`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function arc(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _16200000
    adj2 = adj2 || _0

    const ss = w < h ? w : h
    const stAng = adj1 < _0 ? _0 : (adj1 > _21599999 ? _21599999 : adj1)
    const enAng = adj2 < _0 ? _0 : (adj2 > _21599999 ? _21599999 : adj2)
    const sw11 = enAng + _0 - stAng
    const sw12 = sw11 + _21600000 - _0
    const swAng = sw11 > 0 ? sw11 : sw12
    const wt1 = wd2 * sin(stAng)
    const ht1 = max(hd2, stAng)
    const dx1 = wd2 * (cos(atan(wt1 / ht1)))
    const dy1 = hd2 * sin(atan(wt1 / ht1))
    const wt2 = wd2 * sin(enAng)
    const ht2 = max(hd2, enAng)
    const dx2 = wd2 * (cos(atan(wt2 / ht2)))
    const dy2 = hd2 * sin(atan(wt2 / ht2))
    const x1 = hc + dx1 - _0
    const y1 = vc + dy1 - _0
    const x2 = hc + dx2 - _0
    const y2 = vc + dy2 - _0
    const sw0 = _21600000 + _0 - stAng
    const da1 = swAng + _0 - sw0
    const g1 = max(x1, x2)
    const ir = da1 > 0 ? r : g1
    const sw1 = cd4 + _0 - stAng
    const sw2 = _27000000 + _0 - stAng
    const sw3 = sw1 > 0 ? sw1 : sw2
    const da2 = swAng + _0 - sw3
    const g5 = max(y1, y2)
    const ib = da2 > 0 ? b : g5
    const sw4 = cd2 + _0 - stAng
    const sw5 = _32400000 + _0 - stAng
    const sw6 = sw4 > 0 ? sw4 : sw5
    const da3 = swAng + _0 - sw6
    const g9 = min(x1, x2)
    const il = da3 > 0 ? l : g9
    const sw7 = _3cd4 + _0 - stAng
    const sw8 = _37800000 + _0 - stAng
    const sw9 = sw7 > 0 ? sw7 : sw8
    const da4 = swAng + _0 - sw9
    const g13 = min(y1, y2)
    const it = da4 > 0 ? t : g13
    const cang1 = stAng + _0 - cd4
    const cang2 = enAng + cd4 - _0
    const cang3 = cang1 + cang2 / _2
    return [`M${x1},${y1}A${wd2},${hd2},0,0,1,${},${}L${hc},${vc}Z`, `M${x1},${y1}A${wd2},${hd2},0,0,1,${},${}`]
}
export function bentArrow(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _43750

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const a3 = adj3 < _0 ? _0 : (adj3 > _50000 ? _50000 : adj3)
    const th = ss * a1 / _100000
    const aw2 = ss * a2 / _100000
    const th2 = th * _1 / _2
    const dh2 = aw2 + _0 - th2
    const ah = ss * a3 / _100000
    const bw = r + _0 - ah
    const bh = b + _0 - dh2
    const bs = min(bw, bh)
    const maxAdj4 = _100000 * bs / ss
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const bd = ss * a4 / _100000
    const bd3 = bd + _0 - th
    const bd2 = max(bd3, _0)
    const x3 = th + bd2 - _0
    const x4 = r + _0 - ah
    const y3 = dh2 + th - _0
    const y4 = y3 + dh2 - _0
    const y5 = dh2 + bd - _0
    const y6 = y3 + bd2 - _0
    return [`M${l},${b}L${l},${y5}A${bd},${bd},0,0,1,${},${}L${x4},${dh2}L${x4},${t}L${r},${aw2}L${x4},${y4}L${x4},${y3}L${x3},${y3}A${bd2},${bd2},0,0,1,${},${}L${th},${b}Z`]
}
export function bentConnector2(w, h, l, r, t, b, ) {
    // no guides
    return [`M${l},${t}L${r},${t}L${r},${b}`]
}
export function bentConnector3(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || _50000

    const ss = w < h ? w : h
    const x1 = w * adj1 / _100000
    return [`M${l},${t}L${x1},${t}L${x1},${b}L${r},${b}`]
}
export function bentConnector4(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const x1 = w * adj1 / _100000
    const x2 = x1 + r / _2
    const y2 = h * adj2 / _100000
    const y1 = t + y2 / _2
    return [`M${l},${t}L${x1},${t}L${x1},${y2}L${r},${y2}L${r},${b}`]
}
export function bentConnector5(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000
    adj3 = adj3 || _50000

    const ss = w < h ? w : h
    const x1 = w * adj1 / _100000
    const x3 = w * adj3 / _100000
    const x2 = x1 + x3 / _2
    const y2 = h * adj2 / _100000
    const y1 = t + y2 / _2
    const y3 = b + y2 / _2
    return [`M${l},${t}L${x1},${t}L${x1},${y2}L${x3},${y2}L${x3},${b}L${r},${b}`]
}
export function bentUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const a3 = adj3 < _0 ? _0 : (adj3 > _50000 ? _50000 : adj3)
    const y1 = ss * a3 / _100000
    const dx1 = ss * a2 / _50000
    const x1 = r + _0 - dx1
    const dx3 = ss * a2 / _100000
    const x3 = r + _0 - dx3
    const dx2 = ss * a1 / _200000
    const x2 = x3 + _0 - dx2
    const x4 = x3 + dx2 - _0
    const dy2 = ss * a1 / _100000
    const y2 = b + _0 - dy2
    const x0 = x4 * _1 / _2
    const y3 = y2 + b / _2
    const y15 = y1 + b / _2
    return [`M${l},${y2}L${x2},${y2}L${x2},${y1}L${x1},${y1}L${x3},${t}L${r},${y1}L${x4},${y1}L${x4},${b}L${l},${b}Z`]
}
export function bevel(w, h, l, r, t, b, adj) {
    adj = adj || _12500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const y2 = b + _0 - x1
    return [`M${x1},${x1}L${x2},${x1}L${x2},${y2}L${x1},${y2}Z`, `M${l},${t}L${r},${t}L${x2},${x1}L${x1},${x1}Z`, `M${l},${b}L${x1},${y2}L${x2},${y2}L${r},${b}Z`, `M${l},${t}L${x1},${x1}L${x1},${y2}L${l},${b}Z`, `M${r},${t}L${r},${b}L${x2},${y2}L${x2},${x1}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${x1},${x1}L${x2},${x1}L${x2},${y2}L${x1},${y2}ZM${l},${t}L${x1},${x1}M${l},${b}L${x1},${y2}M${r},${t}L${x2},${x1}M${r},${b}L${x2},${y2}`]
}
export function blockArc(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _10800000
    adj2 = adj2 || _0
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const stAng = adj1 < _0 ? _0 : (adj1 > _21599999 ? _21599999 : adj1)
    const istAng = adj2 < _0 ? _0 : (adj2 > _21599999 ? _21599999 : adj2)
    const a3 = adj3 < _0 ? _0 : (adj3 > _50000 ? _50000 : adj3)
    const sw11 = istAng + _0 - stAng
    const sw12 = sw11 + _21600000 - _0
    const swAng = sw11 > 0 ? sw11 : sw12
    const iswAng = _0 + _0 - swAng
    const wt1 = wd2 * sin(stAng)
    const ht1 = max(hd2, stAng)
    const wt3 = wd2 * sin(istAng)
    const ht3 = max(hd2, istAng)
    const dx1 = wd2 * (cos(atan(wt1 / ht1)))
    const dy1 = hd2 * sin(atan(wt1 / ht1))
    const dx3 = wd2 * (cos(atan(wt3 / ht3)))
    const dy3 = hd2 * sin(atan(wt3 / ht3))
    const x1 = hc + dx1 - _0
    const y1 = vc + dy1 - _0
    const x3 = hc + dx3 - _0
    const y3 = vc + dy3 - _0
    const dr = ss * a3 / _100000
    const iwd2 = wd2 + _0 - dr
    const ihd2 = hd2 + _0 - dr
    const wt2 = iwd2 * sin(istAng)
    const ht2 = max(ihd2, istAng)
    const wt4 = iwd2 * sin(stAng)
    const ht4 = max(ihd2, stAng)
    const dx2 = iwd2 * (cos(atan(wt2 / ht2)))
    const dy2 = ihd2 * sin(atan(wt2 / ht2))
    const dx4 = iwd2 * (cos(atan(wt4 / ht4)))
    const dy4 = ihd2 * sin(atan(wt4 / ht4))
    const x2 = hc + dx2 - _0
    const y2 = vc + dy2 - _0
    const x4 = hc + dx4 - _0
    const y4 = vc + dy4 - _0
    const sw0 = _21600000 + _0 - stAng
    const da1 = swAng + _0 - sw0
    const g1 = max(x1, x2)
    const g2 = max(x3, x4)
    const g3 = max(g1, g2)
    const ir = da1 > 0 ? r : g3
    const sw1 = cd4 + _0 - stAng
    const sw2 = _27000000 + _0 - stAng
    const sw3 = sw1 > 0 ? sw1 : sw2
    const da2 = swAng + _0 - sw3
    const g5 = max(y1, y2)
    const g6 = max(y3, y4)
    const g7 = max(g5, g6)
    const ib = da2 > 0 ? b : g7
    const sw4 = cd2 + _0 - stAng
    const sw5 = _32400000 + _0 - stAng
    const sw6 = sw4 > 0 ? sw4 : sw5
    const da3 = swAng + _0 - sw6
    const g9 = min(x1, x2)
    const g10 = min(x3, x4)
    const g11 = min(g9, g10)
    const il = da3 > 0 ? l : g11
    const sw7 = _3cd4 + _0 - stAng
    const sw8 = _37800000 + _0 - stAng
    const sw9 = sw7 > 0 ? sw7 : sw8
    const da4 = swAng + _0 - sw9
    const g13 = min(y1, y2)
    const g14 = min(y3, y4)
    const g15 = min(g13, g14)
    const it = da4 > 0 ? t : g15
    const x5 = x1 + x4 / _2
    const y5 = y1 + y4 / _2
    const x6 = x3 + x2 / _2
    const y6 = y3 + y2 / _2
    const cang1 = stAng + _0 - cd4
    const cang2 = istAng + cd4 - _0
    const cang3 = cang1 + cang2 / _2
    return [`M${x1},${y1}A${wd2},${hd2},0,0,1,${},${}L${x2},${y2}A${iwd2},${ihd2},0,0,1,${},${}Z`]
}
export function borderCallout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _112500
    adj4 = adj4 || -38333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}`]
}
export function borderCallout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _112500
    adj6 = adj6 || -46667

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}
export function borderCallout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _100000
    adj6 = adj6 || -16667
    adj7 = adj7 || _112963
    adj8 = adj8 || -8333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    const y4 = h * adj7 / _100000
    const x4 = w * adj8 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}
export function bracePair(w, h, l, r, t, b, adj) {
    adj = adj || _8333

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _25000 ? _25000 : adj)
    const x1 = ss * a / _100000
    const x2 = ss * a / _50000
    const x3 = r + _0 - x2
    const x4 = r + _0 - x1
    const y2 = vc + _0 - x1
    const y3 = vc + x1 - _0
    const y4 = b + _0 - x1
    const it = x1 * _29289 / _100000
    const il = x1 + it - _0
    const ir = r + _0 - il
    const ib = b + _0 - it
    return [`M${x2},${b}A${x1},${x1},0,0,1,${},${}L${x1},${y3}A${x1},${x1},0,0,1,${},${}A${x1},${x1},0,0,1,${},${}L${x1},${x1}A${x1},${x1},0,0,1,${},${}L${x3},${t}A${x1},${x1},0,0,1,${},${}L${x4},${y2}A${x1},${x1},0,0,1,${},${}A${x1},${x1},0,0,1,${},${}L${x4},${y4}A${x1},${x1},0,0,1,${},${}Z`, `M${x2},${b}A${x1},${x1},0,0,1,${},${}L${x1},${y3}A${x1},${x1},0,0,1,${},${}A${x1},${x1},0,0,1,${},${}L${x1},${x1}A${x1},${x1},0,0,1,${},${}M${x3},${t}A${x1},${x1},0,0,1,${},${}L${x4},${y2}A${x1},${x1},0,0,1,${},${}A${x1},${x1},0,0,1,${},${}L${x4},${y4}A${x1},${x1},0,0,1,${},${}`]
}
export function bracketPair(w, h, l, r, t, b, adj) {
    adj = adj || _16667

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const y2 = b + _0 - x1
    const il = x1 * _29289 / _100000
    const ir = r + _0 - il
    const ib = b + _0 - il
    return [`M${l},${x1}A${x1},${x1},0,0,1,${},${}L${x2},${t}A${x1},${x1},0,0,1,${},${}L${r},${y2}A${x1},${x1},0,0,1,${},${}L${x1},${b}A${x1},${x1},0,0,1,${},${}Z`, `M${x1},${b}A${x1},${x1},0,0,1,${},${}L${l},${x1}A${x1},${x1},0,0,1,${},${}M${x2},${t}A${x1},${x1},0,0,1,${},${}L${r},${y2}A${x1},${x1},0,0,1,${},${}`]
}
export function callout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _112500
    adj4 = adj4 || -38333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}`]
}
export function callout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _112500
    adj6 = adj6 || -46667

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}
export function callout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || _18750
    adj2 = adj2 || -8333
    adj3 = adj3 || _18750
    adj4 = adj4 || -16667
    adj5 = adj5 || _100000
    adj6 = adj6 || -16667
    adj7 = adj7 || _112963
    adj8 = adj8 || -8333

    const ss = w < h ? w : h
    const y1 = h * adj1 / _100000
    const x1 = w * adj2 / _100000
    const y2 = h * adj3 / _100000
    const x2 = w * adj4 / _100000
    const y3 = h * adj5 / _100000
    const x3 = w * adj6 / _100000
    const y4 = h * adj7 / _100000
    const x4 = w * adj8 / _100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}
export function can(w, h, l, r, t, b, adj) {
    adj = adj || _25000

    const ss = w < h ? w : h
    const maxAdj = _50000 * h / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const y1 = ss * a / _200000
    const y2 = y1 + y1 - _0
    const y3 = b + _0 - y1
    return [`M${l},${y1}A${wd2},${y1},0,0,1,${},${}L${r},${y3}A${wd2},${y1},0,0,1,${},${}Z`, `M${l},${y1}A${wd2},${y1},0,0,1,${},${}A${wd2},${y1},0,0,1,${},${}Z`, `M${r},${y1}A${wd2},${y1},0,0,1,${},${}A${wd2},${y1},0,0,1,${},${}L${r},${y3}A${wd2},${y1},0,0,1,${},${}L${l},${y1}`]
}
export function chartPlus(w, h, l, r, t, b, ) {
    // no guides
    return [`M${5 * w / 10},${0}L${5 * w / 10},${10 * w / 10}M${0},${5 * w / 10}L${10 * w / 10},${5 * w / 10}`, `M${0},${0}L${0 * w / 10},${10 * w / 10}L${10 * w / 10},${10 * w / 10}L${10 * w / 10},${0 * w / 10}Z`]
}
export function chartStar(w, h, l, r, t, b, ) {
    // no guides
    return [`M${0},${0}L${10 * w / 10},${10 * w / 10}M${0},${10 * w / 10}L${10 * w / 10},${0 * w / 10}M${5 * w / 10},${0}L${5 * w / 10},${10 * w / 10}`, `M${0},${0}L${0 * w / 10},${10 * w / 10}L${10 * w / 10},${10 * w / 10}L${10 * w / 10},${0 * w / 10}Z`]
}
export function chartX(w, h, l, r, t, b, ) {
    // no guides
    return [`M${0},${0}L${10 * w / 10},${10 * w / 10}M${0},${10 * w / 10}L${10 * w / 10},${0 * w / 10}`, `M${0},${0}L${0 * w / 10},${10 * w / 10}L${10 * w / 10},${10 * w / 10}L${10 * w / 10},${0 * w / 10}Z`]
}
export function chevron(w, h, l, r, t, b, adj) {
    adj = adj || _50000

    const ss = w < h ? w : h
    const maxAdj = _100000 * w / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const x3 = x2 * _1 / _2
    const dx = x2 + _0 - x1
    const il = dx > 0 ? x1 : l
    const ir = dx > 0 ? x2 : r
    return [`M${l},${t}L${x2},${t}L${r},${vc}L${x2},${b}L${l},${b}L${x1},${vc}Z`]
}
export function chord(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _2700000
    adj2 = adj2 || _16200000

    const ss = w < h ? w : h
    const stAng = adj1 < _0 ? _0 : (adj1 > _21599999 ? _21599999 : adj1)
    const enAng = adj2 < _0 ? _0 : (adj2 > _21599999 ? _21599999 : adj2)
    const sw1 = enAng + _0 - stAng
    const sw2 = sw1 + _21600000 - _0
    const swAng = sw1 > 0 ? sw1 : sw2
    const wt1 = wd2 * sin(stAng)
    const ht1 = max(hd2, stAng)
    const dx1 = wd2 * (cos(atan(wt1 / ht1)))
    const dy1 = hd2 * sin(atan(wt1 / ht1))
    const wt2 = wd2 * sin(enAng)
    const ht2 = max(hd2, enAng)
    const dx2 = wd2 * (cos(atan(wt2 / ht2)))
    const dy2 = hd2 * sin(atan(wt2 / ht2))
    const x1 = hc + dx1 - _0
    const y1 = vc + dy1 - _0
    const x2 = hc + dx2 - _0
    const y2 = vc + dy2 - _0
    const x3 = x1 + x2 / _2
    const y3 = y1 + y2 / _2
    const midAng0 = swAng * _1 / _2
    const midAng = stAng + midAng0 - cd2
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${x1},${y1}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function circularArrow(w, h, l, r, t, b, adj2, adj4, adj3, adj1, adj5) {
    adj1 = adj1 || _12500
    adj2 = adj2 || _1142319
    adj3 = adj3 || _20457681
    adj4 = adj4 || _10800000
    adj5 = adj5 || _12500

    const ss = w < h ? w : h
    const a5 = adj5 < _0 ? _0 : (adj5 > _25000 ? _25000 : adj5)
    const maxAdj1 = a5 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const enAng = adj3 < _1 ? _1 : (adj3 > _21599999 ? _21599999 : adj3)
    const stAng = adj4 < _0 ? _0 : (adj4 > _21599999 ? _21599999 : adj4)
    const th = ss * a1 / _100000
    const thh = ss * a5 / _100000
    const th2 = th * _1 / _2
    const rw1 = wd2 + th2 - thh
    const rh1 = hd2 + th2 - thh
    const rw2 = rw1 + _0 - th
    const rh2 = rh1 + _0 - th
    const rw3 = rw2 + th2 - _0
    const rh3 = rh2 + th2 - _0
    const wtH = rw3 * sin(enAng)
    const htH = max(rh3, enAng)
    const dxH = rw3 * (cos(atan(wtH / htH)))
    const dyH = rh3 * sin(atan(wtH / htH))
    const xH = hc + dxH - _0
    const yH = vc + dyH - _0
    const rI = min(rw2, rh2)
    const u1 = dxH * dxH / _1
    const u2 = dyH * dyH / _1
    const u3 = rI * rI / _1
    const u4 = u1 + _0 - u3
    const u5 = u2 + _0 - u3
    const u6 = u4 * u5 / u1
    const u7 = u6 * _1 / u2
    const u8 = _1 + _0 - u7
    const u9 = sqrt(u8)
    const u10 = u4 * _1 / dxH
    const u11 = u10 * _1 / dyH
    const u12 = _1 + u9 / u11
    const u13 = atan2(_1, u12)
    const u14 = u13 + _21600000 - _0
    const u15 = u13 > 0 ? u13 : u14
    const u16 = u15 + _0 - enAng
    const u17 = u16 + _21600000 - _0
    const u18 = u16 > 0 ? u16 : u17
    const u19 = u18 + _0 - cd2
    const u20 = u18 + _0 - _21600000
    const u21 = u19 > 0 ? u20 : u18
    const maxAng = abs(u21)
    const aAng = adj2 < _0 ? _0 : (adj2 > maxAng ? maxAng : adj2)
    const ptAng = enAng + aAng - _0
    const wtA = rw3 * sin(ptAng)
    const htA = max(rh3, ptAng)
    const dxA = rw3 * (cos(atan(wtA / htA)))
    const dyA = rh3 * sin(atan(wtA / htA))
    const xA = hc + dxA - _0
    const yA = vc + dyA - _0
    const wtE = rw1 * sin(stAng)
    const htE = max(rh1, stAng)
    const dxE = rw1 * (cos(atan(wtE / htE)))
    const dyE = rh1 * sin(atan(wtE / htE))
    const xE = hc + dxE - _0
    const yE = vc + dyE - _0
    const dxG = max(thh, ptAng)
    const dyG = thh * sin(ptAng)
    const xG = xH + dxG - _0
    const yG = yH + dyG - _0
    const dxB = max(thh, ptAng)
    const dyB = thh * sin(ptAng)
    const xB = xH + _0 - dxB
    const yB = yH + _0 - dyB
    const sx1 = xB + _0 - hc
    const sy1 = yB + _0 - vc
    const sx2 = xG + _0 - hc
    const sy2 = yG + _0 - vc
    const rO = min(rw1, rh1)
    const x1O = sx1 * rO / rw1
    const y1O = sy1 * rO / rh1
    const x2O = sx2 * rO / rw1
    const y2O = sy2 * rO / rh1
    const dxO = x2O + _0 - x1O
    const dyO = y2O + _0 - y1O
    const dO = sqrt(dxO * dxO + dyO * dyO + _0 * _0)
    const q1 = x1O * y2O / _1
    const q2 = x2O * y1O / _1
    const DO = q1 + _0 - q2
    const q3 = rO * rO / _1
    const q4 = dO * dO / _1
    const q5 = q3 * q4 / _1
    const q6 = DO * DO / _1
    const q7 = q5 + _0 - q6
    const q8 = max(q7, _0)
    const sdelO = sqrt(q8)
    const ndyO = dyO * -1 / _1
    const sdyO = ndyO > 0 ? -1 : _1
    const q9 = sdyO * dxO / _1
    const q10 = q9 * sdelO / _1
    const q11 = DO * dyO / _1
    const dxF1 = q11 + q10 / q4
    const q12 = q11 + _0 - q10
    const dxF2 = q12 * _1 / q4
    const adyO = abs(dyO)
    const q13 = adyO * sdelO / _1
    const q14 = DO * dxO / -1
    const dyF1 = q14 + q13 / q4
    const q15 = q14 + _0 - q13
    const dyF2 = q15 * _1 / q4
    const q16 = x2O + _0 - dxF1
    const q17 = x2O + _0 - dxF2
    const q18 = y2O + _0 - dyF1
    const q19 = y2O + _0 - dyF2
    const q20 = sqrt(q16 * q16 + q18 * q18 + _0 * _0)
    const q21 = sqrt(q17 * q17 + q19 * q19 + _0 * _0)
    const q22 = q21 + _0 - q20
    const dxF = q22 > 0 ? dxF1 : dxF2
    const dyF = q22 > 0 ? dyF1 : dyF2
    const sdxF = dxF * rw1 / rO
    const sdyF = dyF * rh1 / rO
    const xF = hc + sdxF - _0
    const yF = vc + sdyF - _0
    const x1I = sx1 * rI / rw2
    const y1I = sy1 * rI / rh2
    const x2I = sx2 * rI / rw2
    const y2I = sy2 * rI / rh2
    const dxI = x2I + _0 - x1I
    const dyI = y2I + _0 - y1I
    const dI = sqrt(dxI * dxI + dyI * dyI + _0 * _0)
    const v1 = x1I * y2I / _1
    const v2 = x2I * y1I / _1
    const DI = v1 + _0 - v2
    const v3 = rI * rI / _1
    const v4 = dI * dI / _1
    const v5 = v3 * v4 / _1
    const v6 = DI * DI / _1
    const v7 = v5 + _0 - v6
    const v8 = max(v7, _0)
    const sdelI = sqrt(v8)
    const v9 = sdyO * dxI / _1
    const v10 = v9 * sdelI / _1
    const v11 = DI * dyI / _1
    const dxC1 = v11 + v10 / v4
    const v12 = v11 + _0 - v10
    const dxC2 = v12 * _1 / v4
    const adyI = abs(dyI)
    const v13 = adyI * sdelI / _1
    const v14 = DI * dxI / -1
    const dyC1 = v14 + v13 / v4
    const v15 = v14 + _0 - v13
    const dyC2 = v15 * _1 / v4
    const v16 = x1I + _0 - dxC1
    const v17 = x1I + _0 - dxC2
    const v18 = y1I + _0 - dyC1
    const v19 = y1I + _0 - dyC2
    const v20 = sqrt(v16 * v16 + v18 * v18 + _0 * _0)
    const v21 = sqrt(v17 * v17 + v19 * v19 + _0 * _0)
    const v22 = v21 + _0 - v20
    const dxC = v22 > 0 ? dxC1 : dxC2
    const dyC = v22 > 0 ? dyC1 : dyC2
    const sdxC = dxC * rw2 / rI
    const sdyC = dyC * rh2 / rI
    const xC = hc + sdxC - _0
    const yC = vc + sdyC - _0
    const ist0 = atan2(sdxC, sdyC)
    const ist1 = ist0 + _21600000 - _0
    const istAng = ist0 > 0 ? ist0 : ist1
    const isw1 = stAng + _0 - istAng
    const isw2 = isw1 + _0 - _21600000
    const iswAng = isw1 > 0 ? isw2 : isw1
    const p1 = xF + _0 - xC
    const p2 = yF + _0 - yC
    const p3 = sqrt(p1 * p1 + p2 * p2 + _0 * _0)
    const p4 = p3 * _1 / _2
    const p5 = p4 + _0 - thh
    const xGp = p5 > 0 ? xF : xG
    const yGp = p5 > 0 ? yF : yG
    const xBp = p5 > 0 ? xC : xB
    const yBp = p5 > 0 ? yC : yB
    const en0 = atan2(sdxF, sdyF)
    const en1 = en0 + _21600000 - _0
    const en2 = en0 > 0 ? en0 : en1
    const sw0 = en2 + _0 - stAng
    const sw1 = sw0 + _21600000 - _0
    const swAng = sw0 > 0 ? sw0 : sw1
    const wtI = rw3 * sin(stAng)
    const htI = max(rh3, stAng)
    const dxI = rw3 * (cos(atan(wtI / htI)))
    const dyI = rh3 * sin(atan(wtI / htI))
    const xI = hc + dxI - _0
    const yI = vc + dyI - _0
    const aI = stAng + _0 - cd4
    const aA = ptAng + cd4 - _0
    const aB = ptAng + cd2 - _0
    const idx = max(rw1, _2700000)
    const idy = rh1 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${xE},${yE}A${rw1},${rh1},0,0,1,${},${}L${xGp},${yGp}L${xA},${yA}L${xBp},${yBp}L${xC},${yC}A${rw2},${rh2},0,0,1,${},${}Z`]
}
export function cloud(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const il = w * _2977 / _21600
    const it = h * _3262 / _21600
    const ir = w * _17087 / _21600
    const ib = h * _17337 / _21600
    const g27 = w * _67 / _21600
    const g28 = h * _21577 / _21600
    const g29 = w * _21582 / _21600
    const g30 = h * _1235 / _21600
    return [`M${3900 * w / 43200},${14370 * w / 43200}A${6753},${9190},0,0,1,${},${}A${5333},${7267},0,0,1,${},${}A${4365},${5945},0,0,1,${},${}A${4857},${6595},0,0,1,${},${}A${5333},${7273},0,0,1,${},${}A${6775},${9220},0,0,1,${},${}A${5785},${7867},0,0,1,${},${}A${6752},${9215},0,0,1,${},${}A${7720},${10543},0,0,1,${},${}A${4360},${5918},0,0,1,${},${}A${4345},${5945},0,0,1,${},${}Z`, `M${4693 * w / 43200},${26177 * w / 43200}A${4345},${5945},0,0,1,${},${}M${6928 * w / 43200},${34899 * w / 43200}A${4360},${5918},0,0,1,${},${}M${16478 * w / 43200},${39090 * w / 43200}A${6752},${9215},0,0,1,${},${}M${28827 * w / 43200},${34751 * w / 43200}A${6752},${9215},0,0,1,${},${}M${34129 * w / 43200},${22954 * w / 43200}A${5785},${7867},0,0,1,${},${}M${41798 * w / 43200},${15354 * w / 43200}A${5333},${7273},0,0,1,${},${}M${38324 * w / 43200},${5426 * w / 43200}A${4857},${6595},0,0,1,${},${}M${29078 * w / 43200},${3952 * w / 43200}A${4857},${6595},0,0,1,${},${}M${22141 * w / 43200},${4720 * w / 43200}A${4365},${5945},0,0,1,${},${}M${14000 * w / 43200},${5192 * w / 43200}A${6753},${9190},0,0,1,${},${}M${4127 * w / 43200},${15789 * w / 43200}A${6753},${9190},0,0,1,${},${}`]
}
export function cloudCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || _62500

    const ss = w < h ? w : h
    const dxPos = w * adj1 / _100000
    const dyPos = h * adj2 / _100000
    const xPos = hc + dxPos - _0
    const yPos = vc + dyPos - _0
    const ht = hd2 * (cos(atan(dyPos / dxPos)))
    const wt = wd2 * sin(atan(dyPos / dxPos))
    const g2 = wd2 * (cos(atan(wt / ht)))
    const g3 = hd2 * sin(atan(wt / ht))
    const g4 = hc + g2 - _0
    const g5 = vc + g3 - _0
    const g6 = g4 + _0 - xPos
    const g7 = g5 + _0 - yPos
    const g8 = sqrt(g6 * g6 + g7 * g7 + _0 * _0)
    const g9 = ss * _6600 / _21600
    const g10 = g8 + _0 - g9
    const g11 = g10 * _1 / _3
    const g12 = ss * _1800 / _21600
    const g13 = g11 + g12 - _0
    const g14 = g13 * g6 / g8
    const g15 = g13 * g7 / g8
    const g16 = g14 + xPos - _0
    const g17 = g15 + yPos - _0
    const g18 = ss * _4800 / _21600
    const g19 = g11 * _2 / _1
    const g20 = g18 + g19 - _0
    const g21 = g20 * g6 / g8
    const g22 = g20 * g7 / g8
    const g23 = g21 + xPos - _0
    const g24 = g22 + yPos - _0
    const g25 = ss * _1200 / _21600
    const g26 = ss * _600 / _21600
    const x23 = xPos + g26 - _0
    const x24 = g16 + g25 - _0
    const x25 = g23 + g12 - _0
    const il = w * _2977 / _21600
    const it = h * _3262 / _21600
    const ir = w * _17087 / _21600
    const ib = h * _17337 / _21600
    const g27 = w * _67 / _21600
    const g28 = h * _21577 / _21600
    const g29 = w * _21582 / _21600
    const g30 = h * _1235 / _21600
    const pang = atan2(dxPos, dyPos)
    return [`M${3900 * w / 43200},${14370 * w / 43200}A${6753},${9190},0,0,1,${},${}A${5333},${7267},0,0,1,${},${}A${4365},${5945},0,0,1,${},${}A${4857},${6595},0,0,1,${},${}A${5333},${7273},0,0,1,${},${}A${6775},${9220},0,0,1,${},${}A${5785},${7867},0,0,1,${},${}A${6752},${9215},0,0,1,${},${}A${7720},${10543},0,0,1,${},${}A${4360},${5918},0,0,1,${},${}A${4345},${5945},0,0,1,${},${}Z`, `M${x23},${yPos}A${g26},${g26},0,0,1,${},${}Z`, `M${x24},${g17}A${g25},${g25},0,0,1,${},${}Z`, `M${x25},${g24}A${g12},${g12},0,0,1,${},${}Z`, `M${4693 * w / 43200},${26177 * w / 43200}A${4345},${5945},0,0,1,${},${}M${6928 * w / 43200},${34899 * w / 43200}A${4360},${5918},0,0,1,${},${}M${16478 * w / 43200},${39090 * w / 43200}A${6752},${9215},0,0,1,${},${}M${28827 * w / 43200},${34751 * w / 43200}A${6752},${9215},0,0,1,${},${}M${34129 * w / 43200},${22954 * w / 43200}A${5785},${7867},0,0,1,${},${}M${41798 * w / 43200},${15354 * w / 43200}A${5333},${7273},0,0,1,${},${}M${38324 * w / 43200},${5426 * w / 43200}A${4857},${6595},0,0,1,${},${}M${29078 * w / 43200},${3952 * w / 43200}A${4857},${6595},0,0,1,${},${}M${22141 * w / 43200},${4720 * w / 43200}A${4365},${5945},0,0,1,${},${}M${14000 * w / 43200},${5192 * w / 43200}A${6753},${9190},0,0,1,${},${}M${4127 * w / 43200},${15789 * w / 43200}A${6753},${9190},0,0,1,${},${}`]
}
export function corner(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj1 = _100000 * h / ss
    const maxAdj2 = _100000 * w / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const x1 = ss * a2 / _100000
    const dy1 = ss * a1 / _100000
    const y1 = b + _0 - dy1
    const cx1 = x1 * _1 / _2
    const cy1 = y1 + b / _2
    const d = w + _0 - h
    const it = d > 0 ? y1 : t
    const ir = d > 0 ? r : x1
    return [`M${l},${t}L${x1},${t}L${x1},${y1}L${r},${y1}L${r},${b}L${l},${b}Z`]
}
export function cornerTabs(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const md = sqrt(w * w + h * h + _0 * _0)
    const dx = _1 * md / _20
    const y1 = _0 + b - dx
    const x1 = _0 + r - dx
    return [`M${l},${t}L${dx},${t}L${l},${dx}Z`, `M${l},${y1}L${dx},${b}L${l},${b}Z`, `M${x1},${t}L${r},${t}L${r},${dx}Z`, `M${r},${y1}L${r},${b}L${x1},${b}Z`]
}
export function cube(w, h, l, r, t, b, adj) {
    adj = adj || _25000

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _100000 ? _100000 : adj)
    const y1 = ss * a / _100000
    const y4 = b + _0 - y1
    const y2 = y4 * _1 / _2
    const y3 = y1 + b / _2
    const x4 = r + _0 - y1
    const x2 = x4 * _1 / _2
    const x3 = y1 + r / _2
    return [`M${l},${y1}L${x4},${y1}L${x4},${b}L${l},${b}Z`, `M${x4},${y1}L${r},${t}L${r},${y4}L${x4},${b}Z`, `M${l},${y1}L${y1},${t}L${r},${t}L${x4},${y1}Z`, `M${l},${y1}L${y1},${t}L${r},${t}L${r},${y4}L${x4},${b}L${l},${b}ZM${l},${y1}L${x4},${y1}L${r},${t}M${x4},${y1}L${x4},${b}`]
}
export function curvedConnector2(w, h, l, r, t, b, ) {
    // no guides
    return [`M${l},${t}Z`]
}
export function curvedConnector3(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || _50000

    const ss = w < h ? w : h
    const x2 = w * adj1 / _100000
    const x1 = l + x2 / _2
    const x3 = r + x2 / _2
    const y3 = h * _3 / _4
    return [`M${l},${t}ZZ`]
}
export function curvedConnector4(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const x2 = w * adj1 / _100000
    const x1 = l + x2 / _2
    const x3 = r + x2 / _2
    const x4 = x2 + x3 / _2
    const x5 = x3 + r / _2
    const y4 = h * adj2 / _100000
    const y1 = t + y4 / _2
    const y2 = t + y1 / _2
    const y3 = y1 + y4 / _2
    const y5 = b + y4 / _2
    return [`M${l},${t}ZZZ`]
}
export function curvedConnector5(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000
    adj3 = adj3 || _50000

    const ss = w < h ? w : h
    const x3 = w * adj1 / _100000
    const x6 = w * adj3 / _100000
    const x1 = x3 + x6 / _2
    const x2 = l + x3 / _2
    const x4 = x3 + x1 / _2
    const x5 = x6 + x1 / _2
    const x7 = x6 + r / _2
    const y4 = h * adj2 / _100000
    const y1 = t + y4 / _2
    const y2 = t + y1 / _2
    const y3 = y1 + y4 / _2
    const y5 = b + y4 / _2
    const y6 = y5 + y4 / _2
    const y7 = y5 + b / _2
    return [`M${l},${t}ZZZZ`]
}
export function curvedDownArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _50000
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * w / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const th = ss * a1 / _100000
    const aw = ss * a2 / _100000
    const q1 = th + aw / _4
    const wR = wd2 + _0 - q1
    const q7 = wR * _2 / _1
    const q8 = q7 * q7 / _1
    const q9 = th * th / _1
    const q10 = q8 + _0 - q9
    const q11 = sqrt(q10)
    const idy = q11 * h / q7
    const maxAdj3 = _100000 * idy / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const ah = ss * adj3 / _100000
    const x3 = wR + th - _0
    const q2 = h * h / _1
    const q3 = ah * ah / _1
    const q4 = q2 + _0 - q3
    const q5 = sqrt(q4)
    const dx = q5 * wR / h
    const x5 = wR + dx - _0
    const x7 = x3 + dx - _0
    const q6 = aw + _0 - th
    const dh = q6 * _1 / _2
    const x4 = x5 + _0 - dh
    const x8 = x7 + dh - _0
    const aw2 = aw * _1 / _2
    const x6 = r + _0 - aw2
    const y1 = b + _0 - ah
    const swAng = atan2(ah, dx)
    const mswAng = _0 + _0 - swAng
    const iy = b + _0 - idy
    const ix = wR + x3 / _2
    const q12 = th * _1 / _2
    const dang2 = atan2(idy, q12)
    const stAng = _3cd4 + swAng - _0
    const stAng2 = _3cd4 + _0 - dang2
    const swAng2 = dang2 + _0 - cd4
    const swAng3 = cd4 + dang2 - _0
    return [`M${x6},${b}L${x4},${y1}L${x5},${y1}A${wR},${h},0,0,1,${},${}L${x3},${t}A${wR},${h},0,0,1,${},${}L${x8},${y1}Z`, `M${ix},${iy}A${wR},${h},0,0,1,${},${}L${l},${b}A${wR},${h},0,0,1,${},${}Z`, `M${ix},${iy}A${wR},${h},0,0,1,${},${}L${l},${b}A${wR},${h},0,0,1,${},${}L${x3},${t}A${wR},${h},0,0,1,${},${}L${x8},${y1}L${x6},${b}L${x4},${y1}L${x5},${y1}A${wR},${h},0,0,1,${},${}`]
}
export function curvedLeftArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _50000
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * h / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const a1 = adj1 < _0 ? _0 : (adj1 > a2 ? a2 : adj1)
    const th = ss * a1 / _100000
    const aw = ss * a2 / _100000
    const q1 = th + aw / _4
    const hR = hd2 + _0 - q1
    const q7 = hR * _2 / _1
    const q8 = q7 * q7 / _1
    const q9 = th * th / _1
    const q10 = q8 + _0 - q9
    const q11 = sqrt(q10)
    const idx = q11 * w / q7
    const maxAdj3 = _100000 * idx / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const ah = ss * a3 / _100000
    const y3 = hR + th - _0
    const q2 = w * w / _1
    const q3 = ah * ah / _1
    const q4 = q2 + _0 - q3
    const q5 = sqrt(q4)
    const dy = q5 * hR / w
    const y5 = hR + dy - _0
    const y7 = y3 + dy - _0
    const q6 = aw + _0 - th
    const dh = q6 * _1 / _2
    const y4 = y5 + _0 - dh
    const y8 = y7 + dh - _0
    const aw2 = aw * _1 / _2
    const y6 = b + _0 - aw2
    const x1 = l + ah - _0
    const swAng = atan2(ah, dy)
    const mswAng = _0 + _0 - swAng
    const ix = l + idx - _0
    const iy = hR + y3 / _2
    const q12 = th * _1 / _2
    const dang2 = atan2(idx, q12)
    const swAng2 = dang2 + _0 - swAng
    const swAng3 = swAng + dang2 - _0
    const stAng3 = _0 + _0 - dang2
    return [`M${l},${y6}L${x1},${y4}L${x1},${y5}A${w},${hR},0,0,1,${},${}A${w},${hR},0,0,1,${},${}L${x1},${y8}Z`, `M${r},${y3}A${w},${hR},0,0,1,${},${}L${l},${t}A${w},${hR},0,0,1,${},${}Z`, `M${r},${y3}A${w},${hR},0,0,1,${},${}L${l},${t}A${w},${hR},0,0,1,${},${}L${r},${y3}A${w},${hR},0,0,1,${},${}L${x1},${y8}L${l},${y6}L${x1},${y4}L${x1},${y5}A${w},${hR},0,0,1,${},${}`]
}
export function curvedRightArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _50000
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * h / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const a1 = adj1 < _0 ? _0 : (adj1 > a2 ? a2 : adj1)
    const th = ss * a1 / _100000
    const aw = ss * a2 / _100000
    const q1 = th + aw / _4
    const hR = hd2 + _0 - q1
    const q7 = hR * _2 / _1
    const q8 = q7 * q7 / _1
    const q9 = th * th / _1
    const q10 = q8 + _0 - q9
    const q11 = sqrt(q10)
    const idx = q11 * w / q7
    const maxAdj3 = _100000 * idx / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const ah = ss * a3 / _100000
    const y3 = hR + th - _0
    const q2 = w * w / _1
    const q3 = ah * ah / _1
    const q4 = q2 + _0 - q3
    const q5 = sqrt(q4)
    const dy = q5 * hR / w
    const y5 = hR + dy - _0
    const y7 = y3 + dy - _0
    const q6 = aw + _0 - th
    const dh = q6 * _1 / _2
    const y4 = y5 + _0 - dh
    const y8 = y7 + dh - _0
    const aw2 = aw * _1 / _2
    const y6 = b + _0 - aw2
    const x1 = r + _0 - ah
    const swAng = atan2(ah, dy)
    const stAng = cd2 + _0 - swAng
    const mswAng = _0 + _0 - swAng
    const ix = r + _0 - idx
    const iy = hR + y3 / _2
    const q12 = th * _1 / _2
    const dang2 = atan2(idx, q12)
    const swAng2 = dang2 + _0 - cd4
    const swAng3 = cd4 + dang2 - _0
    const stAng3 = cd2 + _0 - dang2
    return [`M${l},${hR}A${w},${hR},0,0,1,${},${}L${x1},${y4}L${r},${y6}L${x1},${y8}L${x1},${y7}A${w},${hR},0,0,1,${},${}Z`, `M${r},${th}A${w},${hR},0,0,1,${},${}A${w},${hR},0,0,1,${},${}Z`, `M${l},${hR}A${w},${hR},0,0,1,${},${}L${x1},${y4}L${r},${y6}L${x1},${y8}L${x1},${y7}A${w},${hR},0,0,1,${},${}L${l},${hR}A${w},${hR},0,0,1,${},${}L${r},${th}A${w},${hR},0,0,1,${},${}`]
}
export function curvedUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _50000
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * w / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const th = ss * a1 / _100000
    const aw = ss * a2 / _100000
    const q1 = th + aw / _4
    const wR = wd2 + _0 - q1
    const q7 = wR * _2 / _1
    const q8 = q7 * q7 / _1
    const q9 = th * th / _1
    const q10 = q8 + _0 - q9
    const q11 = sqrt(q10)
    const idy = q11 * h / q7
    const maxAdj3 = _100000 * idy / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const ah = ss * adj3 / _100000
    const x3 = wR + th - _0
    const q2 = h * h / _1
    const q3 = ah * ah / _1
    const q4 = q2 + _0 - q3
    const q5 = sqrt(q4)
    const dx = q5 * wR / h
    const x5 = wR + dx - _0
    const x7 = x3 + dx - _0
    const q6 = aw + _0 - th
    const dh = q6 * _1 / _2
    const x4 = x5 + _0 - dh
    const x8 = x7 + dh - _0
    const aw2 = aw * _1 / _2
    const x6 = r + _0 - aw2
    const y1 = t + ah - _0
    const swAng = atan2(ah, dx)
    const mswAng = _0 + _0 - swAng
    const iy = t + idy - _0
    const ix = wR + x3 / _2
    const q12 = th * _1 / _2
    const dang2 = atan2(idy, q12)
    const swAng2 = dang2 + _0 - swAng
    const mswAng2 = _0 + _0 - swAng2
    const stAng3 = cd4 + _0 - swAng
    const swAng3 = swAng + dang2 - _0
    const stAng2 = cd4 + _0 - dang2
    return [`M${x6},${t}L${x8},${y1}L${x7},${y1}A${wR},${h},0,0,1,${},${}A${wR},${h},0,0,1,${},${}L${x4},${y1}Z`, `M${wR},${b}A${wR},${h},0,0,1,${},${}L${th},${t}A${wR},${h},0,0,1,${},${}Z`, `M${ix},${iy}A${wR},${h},0,0,1,${},${}L${x4},${y1}L${x6},${t}L${x8},${y1}L${x7},${y1}A${wR},${h},0,0,1,${},${}L${wR},${b}A${wR},${h},0,0,1,${},${}L${th},${t}A${wR},${h},0,0,1,${},${}`]
}
export function decagon(w, h, l, r, t, b, ) {
    vf = vf || _105146

    const ss = w < h ? w : h
    const shd2 = hd2 * vf / _100000
    const dx1 = max(wd2, _2160000)
    const dx2 = max(wd2, _4320000)
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const dy1 = shd2 * sin(_4320000)
    const dy2 = shd2 * sin(_2160000)
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    const y4 = vc + dy1 - _0
    return [`M${l},${vc}L${x1},${y2}L${x2},${y1}L${x3},${y1}L${x4},${y2}L${r},${vc}L${x4},${y3}L${x3},${y4}L${x2},${y4}L${x1},${y3}Z`]
}
export function diagStripe(w, h, l, r, t, b, adj) {
    adj = adj || _50000

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _100000 ? _100000 : adj)
    const x2 = w * a / _100000
    const x1 = x2 * _1 / _2
    const x3 = x2 + r / _2
    const y2 = h * a / _100000
    const y1 = y2 * _1 / _2
    const y3 = y2 + b / _2
    return [`M${l},${y2}L${x2},${t}L${r},${t}L${l},${b}Z`]
}
export function diamond(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const ir = w * _3 / _4
    const ib = h * _3 / _4
    return [`M${l},${vc}L${hc},${t}L${r},${vc}L${hc},${b}Z`]
}
export function dodecagon(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x1 = w * _2894 / _21600
    const x2 = w * _7906 / _21600
    const x3 = w * _13694 / _21600
    const x4 = w * _18706 / _21600
    const y1 = h * _2894 / _21600
    const y2 = h * _7906 / _21600
    const y3 = h * _13694 / _21600
    const y4 = h * _18706 / _21600
    return [`M${l},${y2}L${x1},${y1}L${x2},${t}L${x3},${t}L${x4},${y1}L${r},${y2}L${r},${y3}L${x4},${y4}L${x3},${b}L${x2},${b}L${x1},${y4}L${l},${y3}Z`]
}
export function donut(w, h, l, r, t, b, adj) {
    adj = adj || _25000

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dr = ss * a / _100000
    const iwd2 = wd2 + _0 - dr
    const ihd2 = hd2 + _0 - dr
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}ZM${dr},${vc}A${iwd2},${ihd2},0,0,1,${},${}A${iwd2},${ihd2},0,0,1,${},${}A${iwd2},${ihd2},0,0,1,${},${}A${iwd2},${ihd2},0,0,1,${},${}Z`]
}
export function doubleWave(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _6250
    adj2 = adj2 || _0

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _12500 ? _12500 : adj1)
    const a2 = adj2 < -10000 ? -10000 : (adj2 > _10000 ? _10000 : adj2)
    const y1 = h * a1 / _100000
    const dy2 = y1 * _10 / _3
    const y2 = y1 + _0 - dy2
    const y3 = y1 + dy2 - _0
    const y4 = b + _0 - y1
    const y5 = y4 + _0 - dy2
    const y6 = y4 + dy2 - _0
    const dx1 = w * a2 / _100000
    const of2 = w * a2 / _50000
    const x1 = abs(dx1)
    const dx2 = of2 > 0 ? _0 : of2
    const x2 = l + _0 - dx2
    const dx8 = of2 > 0 ? of2 : _0
    const x8 = r + _0 - dx8
    const dx3 = dx2 + x8 / _6
    const x3 = x2 + dx3 - _0
    const dx4 = dx2 + x8 / _3
    const x4 = x2 + dx4 - _0
    const x5 = x2 + x8 / _2
    const x6 = x5 + dx3 - _0
    const x7 = x6 + x8 / _2
    const x9 = l + dx8 - _0
    const x15 = r + dx2 - _0
    const x10 = x9 + dx3 - _0
    const x11 = x9 + dx4 - _0
    const x12 = x9 + x15 / _2
    const x13 = x12 + dx3 - _0
    const x14 = x13 + x15 / _2
    const x16 = r + _0 - x1
    const xAdj = hc + dx1 - _0
    const il = max(x2, x9)
    const ir = min(x8, x15)
    const it = h * a1 / _50000
    const ib = b + _0 - it
    return [`M${x2},${y1}ZZL${x15},${y4}ZZZ`]
}
export function downArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _100000 * h / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const dy1 = ss * a2 / _100000
    const y1 = b + _0 - dy1
    const dx1 = w * a1 / _200000
    const x1 = hc + _0 - dx1
    const x2 = hc + dx1 - _0
    const dy2 = x1 * dy1 / wd2
    const y2 = y1 + dy2 - _0
    return [`M${l},${y1}L${x1},${y1}L${x1},${t}L${x2},${t}L${x2},${y1}L${r},${y1}L${hc},${b}Z`]
}
export function downArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _64977

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * w / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _100000 * h / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q2 = a3 * ss / h
    const maxAdj4 = _100000 + _0 - q2
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const dx1 = ss * a2 / _100000
    const dx2 = ss * a1 / _200000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const dy3 = ss * a3 / _100000
    const y3 = b + _0 - dy3
    const y2 = h * a4 / _100000
    const y1 = y2 * _1 / _2
    return [`M${l},${t}L${r},${t}L${r},${y2}L${x3},${y2}L${x3},${y3}L${x4},${y3}L${hc},${b}L${x1},${y3}L${x2},${y3}L${x2},${y2}L${l},${y2}Z`]
}
export function ellipse(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function ellipseRibbon(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _50000
    adj3 = adj3 || _12500

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _25000 ? _25000 : (adj2 > _75000 ? _75000 : adj2)
    const q10 = _100000 + _0 - a1
    const q11 = q10 * _1 / _2
    const q12 = a1 + _0 - q11
    const minAdj3 = max(_0, q12)
    const a3 = adj3 < minAdj3 ? minAdj3 : (adj3 > a1 ? a1 : adj3)
    const dx2 = w * a2 / _200000
    const x2 = hc + _0 - dx2
    const x3 = x2 + wd8 - _0
    const x4 = r + _0 - x3
    const x5 = r + _0 - x2
    const x6 = r + _0 - wd8
    const dy1 = h * a3 / _100000
    const f1 = _4 * dy1 / w
    const q1 = x3 * x3 / w
    const q2 = x3 + _0 - q1
    const y1 = f1 * q2 / _1
    const cx1 = x3 * _1 / _2
    const cy1 = f1 * cx1 / _1
    const cx2 = r + _0 - cx1
    const q1 = h * a1 / _100000
    const dy3 = q1 + _0 - dy1
    const q3 = x2 * x2 / w
    const q4 = x2 + _0 - q3
    const q5 = f1 * q4 / _1
    const y3 = q5 + dy3 - _0
    const q6 = dy1 + dy3 - y3
    const q7 = q6 + dy1 - _0
    const cy3 = q7 + dy3 - _0
    const rh = b + _0 - q1
    const q8 = dy1 * _14 / _16
    const y2 = q8 + rh / _2
    const y5 = q5 + rh - _0
    const y6 = y3 + rh - _0
    const cx4 = x2 * _1 / _2
    const q9 = f1 * cx4 / _1
    const cy4 = q9 + rh - _0
    const cx5 = r + _0 - cx4
    const cy6 = cy3 + rh - _0
    const y7 = y1 + dy3 - _0
    const cy7 = q1 + q1 - y7
    const y8 = b + _0 - dy1
    return [`M${l},${t}ZL${x2},${y3}ZL${x4},${y1}ZL${x6},${y2}L${r},${rh}ZL${x5},${y6}ZL${x2},${y5}ZL${wd8},${y2}Z`, `M${x3},${y7}L${x3},${y1}L${x2},${y3}ZL${x4},${y1}L${x4},${y7}ZZ`, `M${l},${t}ZL${x2},${y3}ZL${x4},${y1}ZL${x6},${y2}L${r},${rh}ZL${x5},${y6}ZL${x2},${y5}ZL${wd8},${y2}ZM${x2},${y5}L${x2},${y3}M${x5},${y3}L${x5},${y5}M${x3},${y1}L${x3},${y7}M${x4},${y7}L${x4},${y1}`]
}
export function ellipseRibbon2(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _50000
    adj3 = adj3 || _12500

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _25000 ? _25000 : (adj2 > _75000 ? _75000 : adj2)
    const q10 = _100000 + _0 - a1
    const q11 = q10 * _1 / _2
    const q12 = a1 + _0 - q11
    const minAdj3 = max(_0, q12)
    const a3 = adj3 < minAdj3 ? minAdj3 : (adj3 > a1 ? a1 : adj3)
    const dx2 = w * a2 / _200000
    const x2 = hc + _0 - dx2
    const x3 = x2 + wd8 - _0
    const x4 = r + _0 - x3
    const x5 = r + _0 - x2
    const x6 = r + _0 - wd8
    const dy1 = h * a3 / _100000
    const f1 = _4 * dy1 / w
    const q1 = x3 * x3 / w
    const q2 = x3 + _0 - q1
    const u1 = f1 * q2 / _1
    const y1 = b + _0 - u1
    const cx1 = x3 * _1 / _2
    const cu1 = f1 * cx1 / _1
    const cy1 = b + _0 - cu1
    const cx2 = r + _0 - cx1
    const q1 = h * a1 / _100000
    const dy3 = q1 + _0 - dy1
    const q3 = x2 * x2 / w
    const q4 = x2 + _0 - q3
    const q5 = f1 * q4 / _1
    const u3 = q5 + dy3 - _0
    const y3 = b + _0 - u3
    const q6 = dy1 + dy3 - u3
    const q7 = q6 + dy1 - _0
    const cu3 = q7 + dy3 - _0
    const cy3 = b + _0 - cu3
    const rh = b + _0 - q1
    const q8 = dy1 * _14 / _16
    const u2 = q8 + rh / _2
    const y2 = b + _0 - u2
    const u5 = q5 + rh - _0
    const y5 = b + _0 - u5
    const u6 = u3 + rh - _0
    const y6 = b + _0 - u6
    const cx4 = x2 * _1 / _2
    const q9 = f1 * cx4 / _1
    const cu4 = q9 + rh - _0
    const cy4 = b + _0 - cu4
    const cx5 = r + _0 - cx4
    const cu6 = cu3 + rh - _0
    const cy6 = b + _0 - cu6
    const u7 = u1 + dy3 - _0
    const y7 = b + _0 - u7
    const cu7 = q1 + q1 - u7
    const cy7 = b + _0 - cu7
    return [`M${l},${b}ZL${x2},${y3}ZL${x4},${y1}ZL${x6},${y2}L${r},${q1}ZL${x5},${y6}ZL${x2},${y5}ZL${wd8},${y2}Z`, `M${x3},${y7}L${x3},${y1}L${x2},${y3}ZL${x4},${y1}L${x4},${y7}ZZ`, `M${l},${b}L${wd8},${y2}L${l},${q1}ZL${x2},${y6}ZL${x5},${y5}ZL${x6},${y2}L${r},${b}ZL${x5},${y3}ZL${x3},${y1}ZZM${x2},${y3}L${x2},${y5}M${x5},${y5}L${x5},${y3}M${x3},${y7}L${x3},${y1}M${x4},${y1}L${x4},${y7}`]
}
export function flowChartAlternateProcess(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = r + _0 - ssd6
    const y2 = b + _0 - ssd6
    const il = ssd6 * _29289 / _100000
    const ir = r + _0 - il
    const ib = b + _0 - il
    return [`M${l},${ssd6}A${ssd6},${ssd6},0,0,1,${},${}L${x2},${t}A${ssd6},${ssd6},0,0,1,${},${}L${r},${y2}A${ssd6},${ssd6},0,0,1,${},${}L${ssd6},${b}A${ssd6},${ssd6},0,0,1,${},${}Z`]
}
export function flowChartCollate(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const ir = w * _3 / _4
    const ib = h * _3 / _4
    return [`M${0},${0}L${2 * w / 2},${0 * w / 2}L${1 * w / 2},${1 * w / 2}L${2 * w / 2},${2 * w / 2}L${0 * w / 2},${2 * w / 2}L${1 * w / 2},${1 * w / 2}Z`]
}
export function flowChartConnector(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function flowChartDecision(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const ir = w * _3 / _4
    const ib = h * _3 / _4
    return [`M${0},${1 * w / 2}L${1 * w / 2},${0 * w / 2}L${2 * w / 2},${1 * w / 2}L${1 * w / 2},${2 * w / 2}Z`]
}
export function flowChartDelay(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${t}L${hc},${t}A${wd2},${hd2},0,0,1,${},${}L${l},${b}Z`]
}
export function flowChartDisplay(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _5 / _6
    return [`M${0},${3 * w / 6}L${1 * w / 6},${0 * w / 6}L${5 * w / 6},${0 * w / 6}A${1},${3},0,0,1,${},${}L${1 * w / 6},${6 * w / 6}Z`]
}
export function flowChartDocument(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const y1 = h * _17322 / _21600
    const y2 = h * _20172 / _21600
    return [`M${0},${0}L${21600 * w / 21600},${0 * w / 21600}L${21600 * w / 21600},${17322 * w / 21600}ZZ`]
}
export function flowChartExtract(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _3 / _4
    return [`M${0},${2 * w / 2}L${1 * w / 2},${0 * w / 2}L${2 * w / 2},${2 * w / 2}Z`]
}
export function flowChartInputOutput(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x3 = w * _2 / _5
    const x4 = w * _3 / _5
    const x5 = w * _4 / _5
    const x6 = w * _9 / _10
    return [`M${0},${5 * w / 5}L${1 * w / 5},${0 * w / 5}L${5 * w / 5},${0 * w / 5}L${4 * w / 5},${5 * w / 5}Z`]
}
export function flowChartInternalStorage(w, h, l, r, t, b, ) {
    // no guides
    return [`M${0},${0}L${1 * w / 1},${0 * w / 1}L${1 * w / 1},${1 * w / 1}L${0 * w / 1},${1 * w / 1}Z`, `M${1 * w / 8},${0}L${1 * w / 8},${8 * w / 8}M${0},${1 * w / 8}L${8 * w / 8},${1 * w / 8}`, `M${0},${0}L${1 * w / 1},${0 * w / 1}L${1 * w / 1},${1 * w / 1}L${0 * w / 1},${1 * w / 1}Z`]
}
export function flowChartMagneticDisk(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const y3 = h * _5 / _6
    return [`M${0},${1 * w / 6}A${3},${1},0,0,1,${},${}L${6 * w / 6},${5 * w / 6}A${3},${1},0,0,1,${},${}Z`, `M${6 * w / 6},${1 * w / 6}A${3},${1},0,0,1,${},${}`, `M${0},${1 * w / 6}A${3},${1},0,0,1,${},${}L${6 * w / 6},${5 * w / 6}A${3},${1},0,0,1,${},${}Z`]
}
export function flowChartMagneticDrum(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _2 / _3
    return [`M${1 * w / 6},${0}L${5 * w / 6},${0 * w / 6}A${1},${3},0,0,1,${},${}L${1 * w / 6},${6 * w / 6}A${1},${3},0,0,1,${},${}Z`, `M${5 * w / 6},${6 * w / 6}A${1},${3},0,0,1,${},${}`, `M${1 * w / 6},${0}L${5 * w / 6},${0 * w / 6}A${1},${3},0,0,1,${},${}L${1 * w / 6},${6 * w / 6}A${1},${3},0,0,1,${},${}Z`]
}
export function flowChartMagneticTape(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    const ang1 = atan2(w, h)
    return [`M${hc},${b}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}L${r},${ib}L${r},${b}Z`]
}
export function flowChartManualInput(w, h, l, r, t, b, ) {
    // no guides
    return [`M${0},${1 * w / 5}L${5 * w / 5},${0 * w / 5}L${5 * w / 5},${5 * w / 5}L${0 * w / 5},${5 * w / 5}Z`]
}
export function flowChartManualOperation(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x3 = w * _4 / _5
    const x4 = w * _9 / _10
    return [`M${0},${0}L${5 * w / 5},${0 * w / 5}L${4 * w / 5},${5 * w / 5}L${1 * w / 5},${5 * w / 5}Z`]
}
export function flowChartMerge(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _3 / _4
    return [`M${0},${0}L${2 * w / 2},${0 * w / 2}L${1 * w / 2},${2 * w / 2}Z`]
}
export function flowChartMultidocument(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const y2 = h * _3675 / _21600
    const y8 = h * _20782 / _21600
    const x3 = w * _9298 / _21600
    const x4 = w * _12286 / _21600
    const x5 = w * _18595 / _21600
    return [`M${0},${20782 * w / 21600}ZL${18595 * w / 21600},${3675 * w / 21600}L${0 * w / 21600},${3675 * w / 21600}ZM${1532 * w / 21600},${3675 * w / 21600}L${1532 * w / 21600},${1815 * w / 21600}L${20000 * w / 21600},${1815 * w / 21600}L${20000 * w / 21600},${16252 * w / 21600}ZL${18595 * w / 21600},${3675 * w / 21600}ZM${2972 * w / 21600},${1815 * w / 21600}L${2972 * w / 21600},${0 * w / 21600}L${21600 * w / 21600},${0 * w / 21600}L${21600 * w / 21600},${14392 * w / 21600}ZL${20000 * w / 21600},${1815 * w / 21600}Z`, `M${0},${3675 * w / 21600}L${18595 * w / 21600},${3675 * w / 21600}L${18595 * w / 21600},${18022 * w / 21600}ZZM${1532 * w / 21600},${3675 * w / 21600}L${1532 * w / 21600},${1815 * w / 21600}L${20000 * w / 21600},${1815 * w / 21600}L${20000 * w / 21600},${16252 * w / 21600}ZM${2972 * w / 21600},${1815 * w / 21600}L${2972 * w / 21600},${0 * w / 21600}L${21600 * w / 21600},${0 * w / 21600}L${21600 * w / 21600},${14392 * w / 21600}Z`, `M${0},${20782 * w / 21600}ZL${18595 * w / 21600},${16352 * w / 21600}ZL${20000 * w / 21600},${14467 * w / 21600}ZL${21600 * w / 21600},${0 * w / 21600}L${2972 * w / 21600},${0 * w / 21600}L${2972 * w / 21600},${1815 * w / 21600}L${1532 * w / 21600},${1815 * w / 21600}L${1532 * w / 21600},${3675 * w / 21600}L${0 * w / 21600},${3675 * w / 21600}Z`]
}
export function flowChartOfflineStorage(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x4 = w * _3 / _4
    return [`M${0},${0}L${2 * w / 2},${0 * w / 2}L${1 * w / 2},${2 * w / 2}Z`, `M${2 * w / 5},${4 * w / 5}L${3 * w / 5},${4 * w / 5}`, `M${0},${0}L${2 * w / 2},${0 * w / 2}L${1 * w / 2},${2 * w / 2}Z`]
}
export function flowChartOffpageConnector(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const y1 = h * _4 / _5
    return [`M${0},${0}L${10 * w / 10},${0 * w / 10}L${10 * w / 10},${8 * w / 10}L${5 * w / 10},${10 * w / 10}L${0 * w / 10},${8 * w / 10}Z`]
}
export function flowChartOnlineStorage(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _5 / _6
    return [`M${1 * w / 6},${0}L${6 * w / 6},${0 * w / 6}A${1},${3},0,0,1,${},${}L${1 * w / 6},${6 * w / 6}A${1},${3},0,0,1,${},${}Z`]
}
export function flowChartOr(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}Z`, `M${hc},${t}L${hc},${b}M${l},${vc}L${r},${vc}`, `M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function flowChartPredefinedProcess(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _7 / _8
    return [`M${0},${0}L${1 * w / 1},${0 * w / 1}L${1 * w / 1},${1 * w / 1}L${0 * w / 1},${1 * w / 1}Z`, `M${1 * w / 8},${0}L${1 * w / 8},${8 * w / 8}M${7 * w / 8},${0}L${7 * w / 8},${8 * w / 8}`, `M${0},${0}L${1 * w / 1},${0 * w / 1}L${1 * w / 1},${1 * w / 1}L${0 * w / 1},${1 * w / 1}Z`]
}
export function flowChartPreparation(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _4 / _5
    return [`M${0},${5 * w / 10}L${2 * w / 10},${0 * w / 10}L${8 * w / 10},${0 * w / 10}L${10 * w / 10},${5 * w / 10}L${8 * w / 10},${10 * w / 10}L${2 * w / 10},${10 * w / 10}Z`]
}
export function flowChartProcess(w, h, l, r, t, b, ) {
    // no guides
    return [`M${0},${0}L${1 * w / 1},${0 * w / 1}L${1 * w / 1},${1 * w / 1}L${0 * w / 1},${1 * w / 1}Z`]
}
export function flowChartPunchedCard(w, h, l, r, t, b, ) {
    // no guides
    return [`M${0},${1 * w / 5}L${1 * w / 5},${0 * w / 5}L${5 * w / 5},${0 * w / 5}L${5 * w / 5},${5 * w / 5}L${0 * w / 5},${5 * w / 5}Z`]
}
export function flowChartPunchedTape(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const y2 = h * _9 / _10
    const ib = h * _4 / _5
    return [`M${0},${2 * w / 20}A${5},${2},0,0,1,${},${}A${5},${2},0,0,1,${},${}L${20 * w / 20},${18 * w / 20}A${5},${2},0,0,1,${},${}A${5},${2},0,0,1,${},${}Z`]
}
export function flowChartSort(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const ir = w * _3 / _4
    const ib = h * _3 / _4
    return [`M${0},${1 * w / 2}L${1 * w / 2},${0 * w / 2}L${2 * w / 2},${1 * w / 2}L${1 * w / 2},${2 * w / 2}Z`, `M${0},${1 * w / 2}L${2 * w / 2},${1 * w / 2}`, `M${0},${1 * w / 2}L${1 * w / 2},${0 * w / 2}L${2 * w / 2},${1 * w / 2}L${1 * w / 2},${2 * w / 2}Z`]
}
export function flowChartSummingJunction(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}Z`, `M${il},${it}L${ir},${ib}M${ir},${it}L${il},${ib}`, `M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function flowChartTerminator(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const il = w * _1018 / _21600
    const ir = w * _20582 / _21600
    const it = h * _3163 / _21600
    const ib = h * _18437 / _21600
    return [`M${3475 * w / 21600},${0}L${18125 * w / 21600},${0 * w / 21600}A${3475},${10800},0,0,1,${},${}L${3475 * w / 21600},${21600 * w / 21600}A${3475},${10800},0,0,1,${},${}Z`]
}
export function foldedCorner(w, h, l, r, t, b, adj) {
    adj = adj || _16667

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dy2 = ss * a / _100000
    const dy1 = dy2 * _1 / _5
    const x1 = r + _0 - dy2
    const x2 = x1 + dy1 - _0
    const y2 = b + _0 - dy2
    const y1 = y2 + dy1 - _0
    return [`M${l},${t}L${r},${t}L${r},${y2}L${x1},${b}L${l},${b}Z`, `M${x1},${b}L${x2},${y1}L${r},${y2}Z`, `M${x1},${b}L${x2},${y1}L${r},${y2}L${x1},${b}L${l},${b}L${l},${t}L${r},${t}L${r},${y2}`]
}
export function frame(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || _12500

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const x1 = ss * a1 / _100000
    const x4 = r + _0 - x1
    const y4 = b + _0 - x1
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${x1},${x1}L${x1},${y4}L${x4},${y4}L${x4},${x1}Z`]
}
export function funnel(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const d = ss * _1 / _20
    const rw2 = wd2 + _0 - d
    const rh2 = hd4 + _0 - d
    const t1 = max(wd2, _480000)
    const t2 = hd4 * sin(_480000)
    const da = atan2(t1, t2)
    const _2da = da * _2 / _1
    const stAng1 = cd2 + _0 - da
    const swAng1 = cd2 + _2da - _0
    const swAng3 = cd2 + _0 - _2da
    const rw3 = wd2 * _1 / _4
    const rh3 = hd4 * _1 / _4
    const ct1 = max(hd4, stAng1)
    const st1 = wd2 * sin(stAng1)
    const m1 = sqrt(ct1 * ct1 + st1 * st1 + _0 * _0)
    const n1 = wd2 * hd4 / m1
    const dx1 = max(n1, stAng1)
    const dy1 = n1 * sin(stAng1)
    const x1 = hc + dx1 - _0
    const y1 = hd4 + dy1 - _0
    const ct3 = max(rh3, da)
    const st3 = rw3 * sin(da)
    const m3 = sqrt(ct3 * ct3 + st3 * st3 + _0 * _0)
    const n3 = rw3 * rh3 / m3
    const dx3 = max(n3, da)
    const dy3 = n3 * sin(da)
    const x3 = hc + dx3 - _0
    const vc3 = b + _0 - rh3
    const y2 = vc3 + dy3 - _0
    const x2 = wd2 + _0 - rw2
    const cd = cd2 * _2 / _1
    return [`M${x1},${y1}A${wd2},${hd4},0,0,1,${},${}L${x3},${y2}A${rw3},${rh3},0,0,1,${},${}ZM${x2},${hd4}A${rw2},${rh2},0,0,1,${},${}Z`]
}
export function gear6(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _15000
    adj2 = adj2 || _3526

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _20000 ? _20000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _5358 ? _5358 : adj2)
    const th = ss * a1 / _100000
    const lFD = ss * a2 / _100000
    const th2 = th * _1 / _2
    const l2 = lFD * _1 / _2
    const l3 = th2 + l2 - _0
    const rh = hd2 + _0 - th
    const rw = wd2 + _0 - th
    const dr = rw + _0 - rh
    const maxr = dr > 0 ? rh : rw
    const ha = atan2(maxr, l3)
    const aA1 = _19800000 + _0 - ha
    const aD1 = _19800000 + ha - _0
    const ta11 = max(rw, aA1)
    const ta12 = rh * sin(aA1)
    const bA1 = atan2(ta11, ta12)
    const cta1 = max(rh, bA1)
    const sta1 = rw * sin(bA1)
    const ma1 = sqrt(cta1 * cta1 + sta1 * sta1 + _0 * _0)
    const na1 = rw * rh / ma1
    const dxa1 = max(na1, bA1)
    const dya1 = na1 * sin(bA1)
    const xA1 = hc + dxa1 - _0
    const yA1 = vc + dya1 - _0
    const td11 = max(rw, aD1)
    const td12 = rh * sin(aD1)
    const bD1 = atan2(td11, td12)
    const ctd1 = max(rh, bD1)
    const std1 = rw * sin(bD1)
    const md1 = sqrt(ctd1 * ctd1 + std1 * std1 + _0 * _0)
    const nd1 = rw * rh / md1
    const dxd1 = max(nd1, bD1)
    const dyd1 = nd1 * sin(bD1)
    const xD1 = hc + dxd1 - _0
    const yD1 = vc + dyd1 - _0
    const xAD1 = xA1 + _0 - xD1
    const yAD1 = yA1 + _0 - yD1
    const lAD1 = sqrt(xAD1 * xAD1 + yAD1 * yAD1 + _0 * _0)
    const a1 = atan2(yAD1, xAD1)
    const dxF1 = lFD * sin(a1)
    const dyF1 = max(lFD, a1)
    const xF1 = xD1 + dxF1 - _0
    const yF1 = yD1 + dyF1 - _0
    const xE1 = xA1 + _0 - dxF1
    const yE1 = yA1 + _0 - dyF1
    const yC1t = th * sin(a1)
    const xC1t = max(th, a1)
    const yC1 = yF1 + yC1t - _0
    const xC1 = xF1 + _0 - xC1t
    const yB1 = yE1 + yC1t - _0
    const xB1 = xE1 + _0 - xC1t
    const aD6 = _3cd4 + ha - _0
    const td61 = max(rw, aD6)
    const td62 = rh * sin(aD6)
    const bD6 = atan2(td61, td62)
    const ctd6 = max(rh, bD6)
    const std6 = rw * sin(bD6)
    const md6 = sqrt(ctd6 * ctd6 + std6 * std6 + _0 * _0)
    const nd6 = rw * rh / md6
    const dxd6 = max(nd6, bD6)
    const dyd6 = nd6 * sin(bD6)
    const xD6 = hc + dxd6 - _0
    const yD6 = vc + dyd6 - _0
    const xA6 = hc + _0 - dxd6
    const xF6 = xD6 + _0 - lFD
    const xE6 = xA6 + lFD - _0
    const yC6 = yD6 + _0 - th
    const swAng1 = bA1 + _0 - bD6
    const aA2 = _1800000 + _0 - ha
    const aD2 = _1800000 + ha - _0
    const ta21 = max(rw, aA2)
    const ta22 = rh * sin(aA2)
    const bA2 = atan2(ta21, ta22)
    const yA2 = h + _0 - yD1
    const td21 = max(rw, aD2)
    const td22 = rh * sin(aD2)
    const bD2 = atan2(td21, td22)
    const yD2 = h + _0 - yA1
    const yC2 = h + _0 - yB1
    const yB2 = h + _0 - yC1
    const xB2 = xC1
    const swAng2 = bA2 + _0 - bD1
    const aD3 = cd4 + ha - _0
    const td31 = max(rw, aD3)
    const td32 = rh * sin(aD3)
    const bD3 = atan2(td31, td32)
    const yD3 = h + _0 - yD6
    const yB3 = h + _0 - yC6
    const aD4 = _9000000 + ha - _0
    const td41 = max(rw, aD4)
    const td42 = rh * sin(aD4)
    const bD4 = atan2(td41, td42)
    const xD4 = w + _0 - xD1
    const xC4 = w + _0 - xC1
    const xB4 = w + _0 - xB1
    const aD5 = _12600000 + ha - _0
    const td51 = max(rw, aD5)
    const td52 = rh * sin(aD5)
    const bD5 = atan2(td51, td52)
    const xD5 = w + _0 - xA1
    const xC5 = w + _0 - xB1
    const xB5 = w + _0 - xC1
    const xCxn1 = xB1 + xC1 / _2
    const yCxn1 = yB1 + yC1 / _2
    const yCxn2 = b + _0 - yCxn1
    const xCxn4 = r + _0 / xCxn1
    return [`M${xA1},${yA1}L${xB1},${yB1}L${xC1},${yC1}L${xD1},${yD1}A${rw},${rh},0,0,1,${},${}L${xC1},${yB2}L${xB1},${yC2}L${xA1},${yD2}A${rw},${rh},0,0,1,${},${}L${xF6},${yB3}L${xE6},${yB3}L${xA6},${yD3}A${rw},${rh},0,0,1,${},${}L${xB4},${yC2}L${xC4},${yB2}L${xD4},${yA2}A${rw},${rh},0,0,1,${},${}L${xB5},${yC1}L${xC5},${yB1}L${xD5},${yA1}A${rw},${rh},0,0,1,${},${}L${xE6},${yC6}L${xF6},${yC6}L${xD6},${yD6}A${rw},${rh},0,0,1,${},${}Z`]
}
export function gear9(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _10000
    adj2 = adj2 || _1763

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _20000 ? _20000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _2679 ? _2679 : adj2)
    const th = ss * a1 / _100000
    const lFD = ss * a2 / _100000
    const th2 = th * _1 / _2
    const l2 = lFD * _1 / _2
    const l3 = th2 + l2 - _0
    const rh = hd2 + _0 - th
    const rw = wd2 + _0 - th
    const dr = rw + _0 - rh
    const maxr = dr > 0 ? rh : rw
    const ha = atan2(maxr, l3)
    const aA1 = _18600000 + _0 - ha
    const aD1 = _18600000 + ha - _0
    const ta11 = max(rw, aA1)
    const ta12 = rh * sin(aA1)
    const bA1 = atan2(ta11, ta12)
    const cta1 = max(rh, bA1)
    const sta1 = rw * sin(bA1)
    const ma1 = sqrt(cta1 * cta1 + sta1 * sta1 + _0 * _0)
    const na1 = rw * rh / ma1
    const dxa1 = max(na1, bA1)
    const dya1 = na1 * sin(bA1)
    const xA1 = hc + dxa1 - _0
    const yA1 = vc + dya1 - _0
    const td11 = max(rw, aD1)
    const td12 = rh * sin(aD1)
    const bD1 = atan2(td11, td12)
    const ctd1 = max(rh, bD1)
    const std1 = rw * sin(bD1)
    const md1 = sqrt(ctd1 * ctd1 + std1 * std1 + _0 * _0)
    const nd1 = rw * rh / md1
    const dxd1 = max(nd1, bD1)
    const dyd1 = nd1 * sin(bD1)
    const xD1 = hc + dxd1 - _0
    const yD1 = vc + dyd1 - _0
    const xAD1 = xA1 + _0 - xD1
    const yAD1 = yA1 + _0 - yD1
    const lAD1 = sqrt(xAD1 * xAD1 + yAD1 * yAD1 + _0 * _0)
    const a1 = atan2(yAD1, xAD1)
    const dxF1 = lFD * sin(a1)
    const dyF1 = max(lFD, a1)
    const xF1 = xD1 + dxF1 - _0
    const yF1 = yD1 + dyF1 - _0
    const xE1 = xA1 + _0 - dxF1
    const yE1 = yA1 + _0 - dyF1
    const yC1t = th * sin(a1)
    const xC1t = max(th, a1)
    const yC1 = yF1 + yC1t - _0
    const xC1 = xF1 + _0 - xC1t
    const yB1 = yE1 + yC1t - _0
    const xB1 = xE1 + _0 - xC1t
    const aA2 = _21000000 + _0 - ha
    const aD2 = _21000000 + ha - _0
    const ta21 = max(rw, aA2)
    const ta22 = rh * sin(aA2)
    const bA2 = atan2(ta21, ta22)
    const cta2 = max(rh, bA2)
    const sta2 = rw * sin(bA2)
    const ma2 = sqrt(cta2 * cta2 + sta2 * sta2 + _0 * _0)
    const na2 = rw * rh / ma2
    const dxa2 = max(na2, bA2)
    const dya2 = na2 * sin(bA2)
    const xA2 = hc + dxa2 - _0
    const yA2 = vc + dya2 - _0
    const td21 = max(rw, aD2)
    const td22 = rh * sin(aD2)
    const bD2 = atan2(td21, td22)
    const ctd2 = max(rh, bD2)
    const std2 = rw * sin(bD2)
    const md2 = sqrt(ctd2 * ctd2 + std2 * std2 + _0 * _0)
    const nd2 = rw * rh / md2
    const dxd2 = max(nd2, bD2)
    const dyd2 = nd2 * sin(bD2)
    const xD2 = hc + dxd2 - _0
    const yD2 = vc + dyd2 - _0
    const xAD2 = xA2 + _0 - xD2
    const yAD2 = yA2 + _0 - yD2
    const lAD2 = sqrt(xAD2 * xAD2 + yAD2 * yAD2 + _0 * _0)
    const a2 = atan2(yAD2, xAD2)
    const dxF2 = lFD * sin(a2)
    const dyF2 = max(lFD, a2)
    const xF2 = xD2 + dxF2 - _0
    const yF2 = yD2 + dyF2 - _0
    const xE2 = xA2 + _0 - dxF2
    const yE2 = yA2 + _0 - dyF2
    const yC2t = th * sin(a2)
    const xC2t = max(th, a2)
    const yC2 = yF2 + yC2t - _0
    const xC2 = xF2 + _0 - xC2t
    const yB2 = yE2 + yC2t - _0
    const xB2 = xE2 + _0 - xC2t
    const swAng1 = bA2 + _0 - bD1
    const aA3 = _1800000 + _0 - ha
    const aD3 = _1800000 + ha - _0
    const ta31 = max(rw, aA3)
    const ta32 = rh * sin(aA3)
    const bA3 = atan2(ta31, ta32)
    const cta3 = max(rh, bA3)
    const sta3 = rw * sin(bA3)
    const ma3 = sqrt(cta3 * cta3 + sta3 * sta3 + _0 * _0)
    const na3 = rw * rh / ma3
    const dxa3 = max(na3, bA3)
    const dya3 = na3 * sin(bA3)
    const xA3 = hc + dxa3 - _0
    const yA3 = vc + dya3 - _0
    const td31 = max(rw, aD3)
    const td32 = rh * sin(aD3)
    const bD3 = atan2(td31, td32)
    const ctd3 = max(rh, bD3)
    const std3 = rw * sin(bD3)
    const md3 = sqrt(ctd3 * ctd3 + std3 * std3 + _0 * _0)
    const nd3 = rw * rh / md3
    const dxd3 = max(nd3, bD3)
    const dyd3 = nd3 * sin(bD3)
    const xD3 = hc + dxd3 - _0
    const yD3 = vc + dyd3 - _0
    const xAD3 = xA3 + _0 - xD3
    const yAD3 = yA3 + _0 - yD3
    const lAD3 = sqrt(xAD3 * xAD3 + yAD3 * yAD3 + _0 * _0)
    const a3 = atan2(yAD3, xAD3)
    const dxF3 = lFD * sin(a3)
    const dyF3 = max(lFD, a3)
    const xF3 = xD3 + dxF3 - _0
    const yF3 = yD3 + dyF3 - _0
    const xE3 = xA3 + _0 - dxF3
    const yE3 = yA3 + _0 - dyF3
    const yC3t = th * sin(a3)
    const xC3t = max(th, a3)
    const yC3 = yF3 + yC3t - _0
    const xC3 = xF3 + _0 - xC3t
    const yB3 = yE3 + yC3t - _0
    const xB3 = xE3 + _0 - xC3t
    const swAng2 = bA3 + _0 - bD2
    const aA4 = _4200000 + _0 - ha
    const aD4 = _4200000 + ha - _0
    const ta41 = max(rw, aA4)
    const ta42 = rh * sin(aA4)
    const bA4 = atan2(ta41, ta42)
    const cta4 = max(rh, bA4)
    const sta4 = rw * sin(bA4)
    const ma4 = sqrt(cta4 * cta4 + sta4 * sta4 + _0 * _0)
    const na4 = rw * rh / ma4
    const dxa4 = max(na4, bA4)
    const dya4 = na4 * sin(bA4)
    const xA4 = hc + dxa4 - _0
    const yA4 = vc + dya4 - _0
    const td41 = max(rw, aD4)
    const td42 = rh * sin(aD4)
    const bD4 = atan2(td41, td42)
    const ctd4 = max(rh, bD4)
    const std4 = rw * sin(bD4)
    const md4 = sqrt(ctd4 * ctd4 + std4 * std4 + _0 * _0)
    const nd4 = rw * rh / md4
    const dxd4 = max(nd4, bD4)
    const dyd4 = nd4 * sin(bD4)
    const xD4 = hc + dxd4 - _0
    const yD4 = vc + dyd4 - _0
    const xAD4 = xA4 + _0 - xD4
    const yAD4 = yA4 + _0 - yD4
    const lAD4 = sqrt(xAD4 * xAD4 + yAD4 * yAD4 + _0 * _0)
    const a4 = atan2(yAD4, xAD4)
    const dxF4 = lFD * sin(a4)
    const dyF4 = max(lFD, a4)
    const xF4 = xD4 + dxF4 - _0
    const yF4 = yD4 + dyF4 - _0
    const xE4 = xA4 + _0 - dxF4
    const yE4 = yA4 + _0 - dyF4
    const yC4t = th * sin(a4)
    const xC4t = max(th, a4)
    const yC4 = yF4 + yC4t - _0
    const xC4 = xF4 + _0 - xC4t
    const yB4 = yE4 + yC4t - _0
    const xB4 = xE4 + _0 - xC4t
    const swAng3 = bA4 + _0 - bD3
    const aA5 = _6600000 + _0 - ha
    const aD5 = _6600000 + ha - _0
    const ta51 = max(rw, aA5)
    const ta52 = rh * sin(aA5)
    const bA5 = atan2(ta51, ta52)
    const td51 = max(rw, aD5)
    const td52 = rh * sin(aD5)
    const bD5 = atan2(td51, td52)
    const xD5 = w + _0 - xA4
    const xC5 = w + _0 - xB4
    const xB5 = w + _0 - xC4
    const swAng4 = bA5 + _0 - bD4
    const aD6 = _9000000 + ha - _0
    const td61 = max(rw, aD6)
    const td62 = rh * sin(aD6)
    const bD6 = atan2(td61, td62)
    const xD6 = w + _0 - xA3
    const xC6 = w + _0 - xB3
    const xB6 = w + _0 - xC3
    const aD7 = _11400000 + ha - _0
    const td71 = max(rw, aD7)
    const td72 = rh * sin(aD7)
    const bD7 = atan2(td71, td72)
    const xD7 = w + _0 - xA2
    const xC7 = w + _0 - xB2
    const xB7 = w + _0 - xC2
    const aD8 = _13800000 + ha - _0
    const td81 = max(rw, aD8)
    const td82 = rh * sin(aD8)
    const bD8 = atan2(td81, td82)
    const xA8 = w + _0 - xD1
    const xD8 = w + _0 - xA1
    const xC8 = w + _0 - xB1
    const xB8 = w + _0 - xC1
    const aA9 = _3cd4 + _0 - ha
    const aD9 = _3cd4 + ha - _0
    const td91 = max(rw, aD9)
    const td92 = rh * sin(aD9)
    const bD9 = atan2(td91, td92)
    const ctd9 = max(rh, bD9)
    const std9 = rw * sin(bD9)
    const md9 = sqrt(ctd9 * ctd9 + std9 * std9 + _0 * _0)
    const nd9 = rw * rh / md9
    const dxd9 = max(nd9, bD9)
    const dyd9 = nd9 * sin(bD9)
    const xD9 = hc + dxd9 - _0
    const yD9 = vc + dyd9 - _0
    const ta91 = max(rw, aA9)
    const ta92 = rh * sin(aA9)
    const bA9 = atan2(ta91, ta92)
    const xA9 = hc + _0 - dxd9
    const xF9 = xD9 + _0 - lFD
    const xE9 = xA9 + lFD - _0
    const yC9 = yD9 + _0 - th
    const swAng5 = bA9 + _0 - bD8
    const xCxn1 = xB1 + xC1 / _2
    const yCxn1 = yB1 + yC1 / _2
    const xCxn2 = xB2 + xC2 / _2
    const yCxn2 = yB2 + yC2 / _2
    const xCxn3 = xB3 + xC3 / _2
    const yCxn3 = yB3 + yC3 / _2
    const xCxn4 = xB4 + xC4 / _2
    const yCxn4 = yB4 + yC4 / _2
    const xCxn5 = r + _0 / xCxn4
    const xCxn6 = r + _0 / xCxn3
    const xCxn7 = r + _0 / xCxn2
    const xCxn8 = r + _0 / xCxn1
    return [`M${xA1},${yA1}L${xB1},${yB1}L${xC1},${yC1}L${xD1},${yD1}A${rw},${rh},0,0,1,${},${}L${xB2},${yB2}L${xC2},${yC2}L${xD2},${yD2}A${rw},${rh},0,0,1,${},${}L${xB3},${yB3}L${xC3},${yC3}L${xD3},${yD3}A${rw},${rh},0,0,1,${},${}L${xB4},${yB4}L${xC4},${yC4}L${xD4},${yD4}A${rw},${rh},0,0,1,${},${}L${xB5},${yC4}L${xC5},${yB4}L${xD5},${yA4}A${rw},${rh},0,0,1,${},${}L${xB6},${yC3}L${xC6},${yB3}L${xD6},${yA3}A${rw},${rh},0,0,1,${},${}L${xB7},${yC2}L${xC7},${yB2}L${xD7},${yA2}A${rw},${rh},0,0,1,${},${}L${xB8},${yC1}L${xC8},${yB1}L${xD8},${yA1}A${rw},${rh},0,0,1,${},${}L${xE9},${yC9}L${xF9},${yC9}L${xD9},${yD9}A${rw},${rh},0,0,1,${},${}Z`]
}
export function halfFrame(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _33333
    adj2 = adj2 || _33333

    const ss = w < h ? w : h
    const maxAdj2 = _100000 * w / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const x1 = ss * a2 / _100000
    const g1 = h * x1 / w
    const g2 = h + _0 - g1
    const maxAdj1 = _100000 * g2 / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const y1 = ss * a1 / _100000
    const dx2 = y1 * w / h
    const x2 = r + _0 - dx2
    const dy2 = x1 * h / w
    const y2 = b + _0 - dy2
    const cx1 = x1 * _1 / _2
    const cy1 = y2 + b / _2
    const cx2 = x2 + r / _2
    const cy2 = y1 * _1 / _2
    return [`M${l},${t}L${r},${t}L${x2},${y1}L${x1},${y1}L${x1},${y2}L${l},${b}Z`]
}
export function heart(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const dx1 = w * _49 / _48
    const dx2 = w * _10 / _48
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const y1 = t + _0 - hd3
    const il = w * _1 / _6
    const ir = w * _5 / _6
    const ib = h * _2 / _3
    return [`M${hc},${hd4}ZZZ`]
}
export function heptagon(w, h, l, r, t, b, ) {
    hf = hf || _102572
    vf = vf || _105210

    const ss = w < h ? w : h
    const swd2 = wd2 * hf / _100000
    const shd2 = hd2 * vf / _100000
    const svc = vc * / vf
    const dx1 = swd2 * _97493 / _100000
    const dx2 = swd2 * _78183 / _100000
    const dx3 = swd2 * _43388 / _100000
    const dy1 = shd2 * _62349 / _100000
    const dy2 = shd2 * _22252 / _100000
    const dy3 = shd2 * _90097 / _100000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + _0 - dx3
    const x4 = hc + dx3 - _0
    const x5 = hc + dx2 - _0
    const x6 = hc + dx1 - _0
    const y1 = svc + _0 - dy1
    const y2 = svc + dy2 - _0
    const y3 = svc + dy3 - _0
    const ib = b + _0 - y1
    return [`M${x1},${y2}L${x2},${y1}L${hc},${t}L${x5},${y1}L${x6},${y2}L${x4},${y3}L${x3},${y3}Z`]
}
export function hexagon(w, h, l, r, t, b, adj) {
    adj = adj || _25000
    vf = vf || _115470

    const ss = w < h ? w : h
    const maxAdj = _50000 * w / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const shd2 = hd2 * vf / _100000
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const dy1 = shd2 * sin(_3600000)
    const y1 = vc + _0 - dy1
    const y2 = vc + dy1 - _0
    const q1 = maxAdj * -1 / _2
    const q2 = a + q1 - _0
    const q3 = q2 > 0 ? _4 : _2
    const q4 = q2 > 0 ? _3 : _2
    const q5 = q2 > 0 ? q1 : _0
    const q6 = a + q5 / q1
    const q7 = q6 * q4 / -1
    const q8 = q3 + q7 - _0
    const il = w * q8 / _24
    const it = h * q8 / _24
    const ir = r + _0 - il
    const ib = b + _0 - it
    return [`M${l},${vc}L${x1},${y1}L${x2},${y1}L${r},${vc}L${x2},${y2}L${x1},${y2}Z`]
}
export function homePlate(w, h, l, r, t, b, adj) {
    adj = adj || _50000

    const ss = w < h ? w : h
    const maxAdj = _100000 * w / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const dx1 = ss * a / _100000
    const x1 = r + _0 - dx1
    const ir = x1 + r / _2
    const x2 = x1 * _1 / _2
    return [`M${l},${t}L${x1},${t}L${r},${vc}L${x1},${b}L${l},${b}Z`]
}
export function horizontalScroll(w, h, l, r, t, b, adj) {
    adj = adj || _12500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _25000 ? _25000 : adj)
    const ch = ss * a / _100000
    const ch2 = ch * _1 / _2
    const ch4 = ch * _1 / _4
    const y3 = ch + ch2 - _0
    const y4 = ch + ch - _0
    const y6 = b + _0 - ch
    const y7 = b + _0 - ch2
    const y5 = y6 + _0 - ch2
    const x3 = r + _0 - ch
    const x4 = r + _0 - ch2
    return [`M${r},${ch2}A${ch2},${ch2},0,0,1,${},${}L${x4},${ch2}A${ch4},${ch4},0,0,1,${},${}L${x3},${ch}L${ch2},${ch}A${ch2},${ch2},0,0,1,${},${}L${l},${y7}A${ch2},${ch2},0,0,1,${},${}L${ch},${y6}L${x4},${y6}A${ch2},${ch2},0,0,1,${},${}ZM${ch2},${y4}A${ch2},${ch2},0,0,1,${},${}A${ch4},${ch4},0,0,1,${},${}Z`, `M${ch2},${y4}A${ch2},${ch2},0,0,1,${},${}A${ch4},${ch4},0,0,1,${},${}ZM${x4},${ch}A${ch2},${ch2},0,0,1,${},${}A${ch4},${ch4},0,0,1,${},${}Z`, `M${l},${y3}A${ch2},${ch2},0,0,1,${},${}L${x3},${ch}L${x3},${ch2}A${ch2},${ch2},0,0,1,${},${}L${r},${y5}A${ch2},${ch2},0,0,1,${},${}L${ch},${y6}L${ch},${y7}A${ch2},${ch2},0,0,1,${},${}ZM${x3},${ch}L${x4},${ch}A${ch2},${ch2},0,0,1,${},${}M${x4},${ch}L${x4},${ch2}A${ch4},${ch4},0,0,1,${},${}M${ch2},${y4}L${ch2},${y3}A${ch4},${ch4},0,0,1,${},${}A${ch2},${ch2},0,0,1,${},${}M${ch},${y3}L${ch},${y6}`]
}
export function irregularSeal1(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x5 = w * _4627 / _21600
    const x12 = w * _8485 / _21600
    const x21 = w * _16702 / _21600
    const x24 = w * _14522 / _21600
    const y3 = h * _6320 / _21600
    const y6 = h * _8615 / _21600
    const y9 = h * _13937 / _21600
    const y18 = h * _13290 / _21600
    return [`M${10800 * w / 21600},${5800 * w / 21600}L${14522 * w / 21600},${0 * w / 21600}L${14155 * w / 21600},${5325 * w / 21600}L${18380 * w / 21600},${4457 * w / 21600}L${16702 * w / 21600},${7315 * w / 21600}L${21097 * w / 21600},${8137 * w / 21600}L${17607 * w / 21600},${10475 * w / 21600}L${21600 * w / 21600},${13290 * w / 21600}L${16837 * w / 21600},${12942 * w / 21600}L${18145 * w / 21600},${18095 * w / 21600}L${14020 * w / 21600},${14457 * w / 21600}L${13247 * w / 21600},${19737 * w / 21600}L${10532 * w / 21600},${14935 * w / 21600}L${8485 * w / 21600},${21600 * w / 21600}L${7715 * w / 21600},${15627 * w / 21600}L${4762 * w / 21600},${17617 * w / 21600}L${5667 * w / 21600},${13937 * w / 21600}L${135 * w / 21600},${14587 * w / 21600}L${3722 * w / 21600},${11775 * w / 21600}L${0 * w / 21600},${8615 * w / 21600}L${4627 * w / 21600},${7617 * w / 21600}L${370 * w / 21600},${2295 * w / 21600}L${7312 * w / 21600},${6320 * w / 21600}L${8352 * w / 21600},${2295 * w / 21600}Z`]
}
export function irregularSeal2(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x2 = w * _9722 / _21600
    const x5 = w * _5372 / _21600
    const x16 = w * _11612 / _21600
    const x19 = w * _14640 / _21600
    const y2 = h * _1887 / _21600
    const y3 = h * _6382 / _21600
    const y8 = h * _12877 / _21600
    const y14 = h * _19712 / _21600
    const y16 = h * _18842 / _21600
    const y17 = h * _15935 / _21600
    const y24 = h * _6645 / _21600
    return [`M${11462 * w / 21600},${4342 * w / 21600}L${14790 * w / 21600},${0 * w / 21600}L${14525 * w / 21600},${5777 * w / 21600}L${18007 * w / 21600},${3172 * w / 21600}L${16380 * w / 21600},${6532 * w / 21600}L${21600 * w / 21600},${6645 * w / 21600}L${16985 * w / 21600},${9402 * w / 21600}L${18270 * w / 21600},${11290 * w / 21600}L${16380 * w / 21600},${12310 * w / 21600}L${18877 * w / 21600},${15632 * w / 21600}L${14640 * w / 21600},${14350 * w / 21600}L${14942 * w / 21600},${17370 * w / 21600}L${12180 * w / 21600},${15935 * w / 21600}L${11612 * w / 21600},${18842 * w / 21600}L${9872 * w / 21600},${17370 * w / 21600}L${8700 * w / 21600},${19712 * w / 21600}L${7527 * w / 21600},${18125 * w / 21600}L${4917 * w / 21600},${21600 * w / 21600}L${4805 * w / 21600},${18240 * w / 21600}L${1285 * w / 21600},${17825 * w / 21600}L${3330 * w / 21600},${15370 * w / 21600}L${0 * w / 21600},${12877 * w / 21600}L${3935 * w / 21600},${11592 * w / 21600}L${1172 * w / 21600},${8270 * w / 21600}L${5372 * w / 21600},${7817 * w / 21600}L${4502 * w / 21600},${3625 * w / 21600}L${8550 * w / 21600},${6382 * w / 21600}L${9722 * w / 21600},${1887 * w / 21600}Z`]
}
export function leftArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _100000 * w / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const dx2 = ss * a2 / _100000
    const x2 = l + dx2 - _0
    const dy1 = h * a1 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + dy1 - _0
    const dx1 = y1 * dx2 / hd2
    const x1 = x2 + -_0
    return [`M${l},${vc}L${x2},${t}L${x2},${y1}L${r},${y1}L${r},${y2}L${x2},${y2}L${x2},${b}Z`]
}
export function leftArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _64977

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * h / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _100000 * w / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q2 = a3 * ss / w
    const maxAdj4 = _100000 + _0 - q2
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const dy1 = ss * a2 / _100000
    const dy2 = ss * a1 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    const y4 = vc + dy1 - _0
    const x1 = ss * a3 / _100000
    const dx2 = w * a4 / _100000
    const x2 = r + _0 - dx2
    const x3 = x2 + r / _2
    return [`M${l},${vc}L${x1},${y1}L${x1},${y2}L${x2},${y2}L${x2},${t}L${r},${t}L${r},${b}L${x2},${b}L${x2},${y3}L${x1},${y3}L${x1},${y4}Z`]
}
export function leftBrace(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _8333
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _100000 ? _100000 : adj2)
    const q1 = _100000 + _0 - a2
    const q2 = min(q1, a2)
    const q3 = q2 * _1 / _2
    const maxAdj1 = q3 * h / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const y1 = ss * a1 / _100000
    const y3 = h * a2 / _100000
    const y4 = y3 + y1 - _0
    const dx1 = max(wd2, _2700000)
    const dy1 = y1 * sin(_2700000)
    const il = r + _0 - dx1
    const it = y1 + _0 - dy1
    const ib = b + dy1 - y1
    return [`M${r},${b}A${wd2},${y1},0,0,1,${},${}L${hc},${y4}A${wd2},${y1},0,0,1,${},${}A${wd2},${y1},0,0,1,${},${}L${hc},${y1}A${wd2},${y1},0,0,1,${},${}Z`, `M${r},${b}A${wd2},${y1},0,0,1,${},${}L${hc},${y4}A${wd2},${y1},0,0,1,${},${}A${wd2},${y1},0,0,1,${},${}L${hc},${y1}A${wd2},${y1},0,0,1,${},${}`]
}
export function leftBracket(w, h, l, r, t, b, adj) {
    adj = adj || _8333

    const ss = w < h ? w : h
    const maxAdj = _50000 * h / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const y1 = ss * a / _100000
    const y2 = b + _0 - y1
    const dx1 = max(w, _2700000)
    const dy1 = y1 * sin(_2700000)
    const il = r + _0 - dx1
    const it = y1 + _0 - dy1
    const ib = b + dy1 - y1
    return [`M${r},${b}A${w},${y1},0,0,1,${},${}L${l},${y1}A${w},${y1},0,0,1,${},${}Z`, `M${r},${b}A${w},${y1},0,0,1,${},${}L${l},${y1}A${w},${y1},0,0,1,${},${}`]
}
export function leftCircularArrow(w, h, l, r, t, b, adj2, adj4, adj3, adj1, adj5) {
    adj1 = adj1 || _12500
    adj2 = adj2 || -1142319
    adj3 = adj3 || _1142319
    adj4 = adj4 || _10800000
    adj5 = adj5 || _12500

    const ss = w < h ? w : h
    const a5 = adj5 < _0 ? _0 : (adj5 > _25000 ? _25000 : adj5)
    const maxAdj1 = a5 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const enAng = adj3 < _1 ? _1 : (adj3 > _21599999 ? _21599999 : adj3)
    const stAng = adj4 < _0 ? _0 : (adj4 > _21599999 ? _21599999 : adj4)
    const th = ss * a1 / _100000
    const thh = ss * a5 / _100000
    const th2 = th * _1 / _2
    const rw1 = wd2 + th2 - thh
    const rh1 = hd2 + th2 - thh
    const rw2 = rw1 + _0 - th
    const rh2 = rh1 + _0 - th
    const rw3 = rw2 + th2 - _0
    const rh3 = rh2 + th2 - _0
    const wtH = rw3 * sin(enAng)
    const htH = max(rh3, enAng)
    const dxH = rw3 * (cos(atan(wtH / htH)))
    const dyH = rh3 * sin(atan(wtH / htH))
    const xH = hc + dxH - _0
    const yH = vc + dyH - _0
    const rI = min(rw2, rh2)
    const u1 = dxH * dxH / _1
    const u2 = dyH * dyH / _1
    const u3 = rI * rI / _1
    const u4 = u1 + _0 - u3
    const u5 = u2 + _0 - u3
    const u6 = u4 * u5 / u1
    const u7 = u6 * _1 / u2
    const u8 = _1 + _0 - u7
    const u9 = sqrt(u8)
    const u10 = u4 * _1 / dxH
    const u11 = u10 * _1 / dyH
    const u12 = _1 + u9 / u11
    const u13 = atan2(_1, u12)
    const u14 = u13 + _21600000 - _0
    const u15 = u13 > 0 ? u13 : u14
    const u16 = u15 + _0 - enAng
    const u17 = u16 + _21600000 - _0
    const u18 = u16 > 0 ? u16 : u17
    const u19 = u18 + _0 - cd2
    const u20 = u18 + _0 - _21600000
    const u21 = u19 > 0 ? u20 : u18
    const u22 = abs(u21)
    const minAng = u22 * -1 / _1
    const u23 = abs(adj2)
    const a2 = u23 * -1 / _1
    const aAng = a2 < minAng ? minAng : (a2 > _0 ? _0 : a2)
    const ptAng = enAng + aAng - _0
    const wtA = rw3 * sin(ptAng)
    const htA = max(rh3, ptAng)
    const dxA = rw3 * (cos(atan(wtA / htA)))
    const dyA = rh3 * sin(atan(wtA / htA))
    const xA = hc + dxA - _0
    const yA = vc + dyA - _0
    const wtE = rw1 * sin(stAng)
    const htE = max(rh1, stAng)
    const dxE = rw1 * (cos(atan(wtE / htE)))
    const dyE = rh1 * sin(atan(wtE / htE))
    const xE = hc + dxE - _0
    const yE = vc + dyE - _0
    const wtD = rw2 * sin(stAng)
    const htD = max(rh2, stAng)
    const dxD = rw2 * (cos(atan(wtD / htD)))
    const dyD = rh2 * sin(atan(wtD / htD))
    const xD = hc + dxD - _0
    const yD = vc + dyD - _0
    const dxG = max(thh, ptAng)
    const dyG = thh * sin(ptAng)
    const xG = xH + dxG - _0
    const yG = yH + dyG - _0
    const dxB = max(thh, ptAng)
    const dyB = thh * sin(ptAng)
    const xB = xH + _0 - dxB
    const yB = yH + _0 - dyB
    const sx1 = xB + _0 - hc
    const sy1 = yB + _0 - vc
    const sx2 = xG + _0 - hc
    const sy2 = yG + _0 - vc
    const rO = min(rw1, rh1)
    const x1O = sx1 * rO / rw1
    const y1O = sy1 * rO / rh1
    const x2O = sx2 * rO / rw1
    const y2O = sy2 * rO / rh1
    const dxO = x2O + _0 - x1O
    const dyO = y2O + _0 - y1O
    const dO = sqrt(dxO * dxO + dyO * dyO + _0 * _0)
    const q1 = x1O * y2O / _1
    const q2 = x2O * y1O / _1
    const DO = q1 + _0 - q2
    const q3 = rO * rO / _1
    const q4 = dO * dO / _1
    const q5 = q3 * q4 / _1
    const q6 = DO * DO / _1
    const q7 = q5 + _0 - q6
    const q8 = max(q7, _0)
    const sdelO = sqrt(q8)
    const ndyO = dyO * -1 / _1
    const sdyO = ndyO > 0 ? -1 : _1
    const q9 = sdyO * dxO / _1
    const q10 = q9 * sdelO / _1
    const q11 = DO * dyO / _1
    const dxF1 = q11 + q10 / q4
    const q12 = q11 + _0 - q10
    const dxF2 = q12 * _1 / q4
    const adyO = abs(dyO)
    const q13 = adyO * sdelO / _1
    const q14 = DO * dxO / -1
    const dyF1 = q14 + q13 / q4
    const q15 = q14 + _0 - q13
    const dyF2 = q15 * _1 / q4
    const q16 = x2O + _0 - dxF1
    const q17 = x2O + _0 - dxF2
    const q18 = y2O + _0 - dyF1
    const q19 = y2O + _0 - dyF2
    const q20 = sqrt(q16 * q16 + q18 * q18 + _0 * _0)
    const q21 = sqrt(q17 * q17 + q19 * q19 + _0 * _0)
    const q22 = q21 + _0 - q20
    const dxF = q22 > 0 ? dxF1 : dxF2
    const dyF = q22 > 0 ? dyF1 : dyF2
    const sdxF = dxF * rw1 / rO
    const sdyF = dyF * rh1 / rO
    const xF = hc + sdxF - _0
    const yF = vc + sdyF - _0
    const x1I = sx1 * rI / rw2
    const y1I = sy1 * rI / rh2
    const x2I = sx2 * rI / rw2
    const y2I = sy2 * rI / rh2
    const dxI = x2I + _0 - x1I
    const dyI = y2I + _0 - y1I
    const dI = sqrt(dxI * dxI + dyI * dyI + _0 * _0)
    const v1 = x1I * y2I / _1
    const v2 = x2I * y1I / _1
    const DI = v1 + _0 - v2
    const v3 = rI * rI / _1
    const v4 = dI * dI / _1
    const v5 = v3 * v4 / _1
    const v6 = DI * DI / _1
    const v7 = v5 + _0 - v6
    const v8 = max(v7, _0)
    const sdelI = sqrt(v8)
    const v9 = sdyO * dxI / _1
    const v10 = v9 * sdelI / _1
    const v11 = DI * dyI / _1
    const dxC1 = v11 + v10 / v4
    const v12 = v11 + _0 - v10
    const dxC2 = v12 * _1 / v4
    const adyI = abs(dyI)
    const v13 = adyI * sdelI / _1
    const v14 = DI * dxI / -1
    const dyC1 = v14 + v13 / v4
    const v15 = v14 + _0 - v13
    const dyC2 = v15 * _1 / v4
    const v16 = x1I + _0 - dxC1
    const v17 = x1I + _0 - dxC2
    const v18 = y1I + _0 - dyC1
    const v19 = y1I + _0 - dyC2
    const v20 = sqrt(v16 * v16 + v18 * v18 + _0 * _0)
    const v21 = sqrt(v17 * v17 + v19 * v19 + _0 * _0)
    const v22 = v21 + _0 - v20
    const dxC = v22 > 0 ? dxC1 : dxC2
    const dyC = v22 > 0 ? dyC1 : dyC2
    const sdxC = dxC * rw2 / rI
    const sdyC = dyC * rh2 / rI
    const xC = hc + sdxC - _0
    const yC = vc + sdyC - _0
    const ist0 = atan2(sdxC, sdyC)
    const ist1 = ist0 + _21600000 - _0
    const istAng0 = ist0 > 0 ? ist0 : ist1
    const isw1 = stAng + _0 - istAng0
    const isw2 = isw1 + _21600000 - _0
    const iswAng0 = isw1 > 0 ? isw1 : isw2
    const istAng = istAng0 + iswAng0 - _0
    const iswAng = _0 + _0 - iswAng0
    const p1 = xF + _0 - xC
    const p2 = yF + _0 - yC
    const p3 = sqrt(p1 * p1 + p2 * p2 + _0 * _0)
    const p4 = p3 * _1 / _2
    const p5 = p4 + _0 - thh
    const xGp = p5 > 0 ? xF : xG
    const yGp = p5 > 0 ? yF : yG
    const xBp = p5 > 0 ? xC : xB
    const yBp = p5 > 0 ? yC : yB
    const en0 = atan2(sdxF, sdyF)
    const en1 = en0 + _21600000 - _0
    const en2 = en0 > 0 ? en0 : en1
    const sw0 = en2 + _0 - stAng
    const sw1 = sw0 + _0 - _21600000
    const swAng = sw0 > 0 ? sw1 : sw0
    const stAng0 = stAng + swAng - _0
    const swAng0 = _0 + _0 - swAng
    const wtI = rw3 * sin(stAng)
    const htI = max(rh3, stAng)
    const dxI = rw3 * (cos(atan(wtI / htI)))
    const dyI = rh3 * sin(atan(wtI / htI))
    const xI = hc + dxI - _0
    const yI = vc + dyI - _0
    const aI = stAng + cd4 - _0
    const aA = ptAng + _0 - cd4
    const aB = ptAng + cd2 - _0
    const idx = max(rw1, _2700000)
    const idy = rh1 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${xE},${yE}L${xD},${yD}A${rw2},${rh2},0,0,1,${},${}L${xBp},${yBp}L${xA},${yA}L${xGp},${yGp}L${xF},${yF}A${rw1},${rh1},0,0,1,${},${}Z`]
}
export function leftRightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * w / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const x2 = ss * a2 / _100000
    const x3 = r + _0 - x2
    const dy = h * a1 / _200000
    const y1 = vc + _0 - dy
    const y2 = vc + dy - _0
    const dx1 = y1 * x2 / hd2
    const x1 = x2 + _0 - dx1
    const x4 = x3 + dx1 - _0
    return [`M${l},${vc}L${x2},${t}L${x2},${y1}L${x3},${y1}L${x3},${t}L${r},${vc}L${x3},${b}L${x3},${y2}L${x2},${y2}L${x2},${b}Z`]
}
export function leftRightArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _48123

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * h / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _50000 * w / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q2 = a3 * ss / wd2
    const maxAdj4 = _100000 + _0 - q2
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const dy1 = ss * a2 / _100000
    const dy2 = ss * a1 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    const y4 = vc + dy1 - _0
    const x1 = ss * a3 / _100000
    const x4 = r + _0 - x1
    const dx2 = w * a4 / _200000
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    return [`M${l},${vc}L${x1},${y1}L${x1},${y2}L${x2},${y2}L${x2},${t}L${x3},${t}L${x3},${y2}L${x4},${y2}L${x4},${y1}L${r},${vc}L${x4},${y4}L${x4},${y3}L${x3},${y3}L${x3},${b}L${x2},${b}L${x2},${y3}L${x1},${y3}L${x1},${y4}Z`]
}
export function leftRightCircularArrow(w, h, l, r, t, b, adj2, adj4, adj3, adj1, adj5) {
    adj1 = adj1 || _12500
    adj2 = adj2 || _1142319
    adj3 = adj3 || _20457681
    adj4 = adj4 || _11942319
    adj5 = adj5 || _12500

    const ss = w < h ? w : h
    const a5 = adj5 < _0 ? _0 : (adj5 > _25000 ? _25000 : adj5)
    const maxAdj1 = a5 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const enAng = adj3 < _1 ? _1 : (adj3 > _21599999 ? _21599999 : adj3)
    const stAng = adj4 < _0 ? _0 : (adj4 > _21599999 ? _21599999 : adj4)
    const th = ss * a1 / _100000
    const thh = ss * a5 / _100000
    const th2 = th * _1 / _2
    const rw1 = wd2 + th2 - thh
    const rh1 = hd2 + th2 - thh
    const rw2 = rw1 + _0 - th
    const rh2 = rh1 + _0 - th
    const rw3 = rw2 + th2 - _0
    const rh3 = rh2 + th2 - _0
    const wtH = rw3 * sin(enAng)
    const htH = max(rh3, enAng)
    const dxH = rw3 * (cos(atan(wtH / htH)))
    const dyH = rh3 * sin(atan(wtH / htH))
    const xH = hc + dxH - _0
    const yH = vc + dyH - _0
    const rI = min(rw2, rh2)
    const u1 = dxH * dxH / _1
    const u2 = dyH * dyH / _1
    const u3 = rI * rI / _1
    const u4 = u1 + _0 - u3
    const u5 = u2 + _0 - u3
    const u6 = u4 * u5 / u1
    const u7 = u6 * _1 / u2
    const u8 = _1 + _0 - u7
    const u9 = sqrt(u8)
    const u10 = u4 * _1 / dxH
    const u11 = u10 * _1 / dyH
    const u12 = _1 + u9 / u11
    const u13 = atan2(_1, u12)
    const u14 = u13 + _21600000 - _0
    const u15 = u13 > 0 ? u13 : u14
    const u16 = u15 + _0 - enAng
    const u17 = u16 + _21600000 - _0
    const u18 = u16 > 0 ? u16 : u17
    const u19 = u18 + _0 - cd2
    const u20 = u18 + _0 - _21600000
    const u21 = u19 > 0 ? u20 : u18
    const maxAng = abs(u21)
    const aAng = adj2 < _0 ? _0 : (adj2 > maxAng ? maxAng : adj2)
    const ptAng = enAng + aAng - _0
    const wtA = rw3 * sin(ptAng)
    const htA = max(rh3, ptAng)
    const dxA = rw3 * (cos(atan(wtA / htA)))
    const dyA = rh3 * sin(atan(wtA / htA))
    const xA = hc + dxA - _0
    const yA = vc + dyA - _0
    const dxG = max(thh, ptAng)
    const dyG = thh * sin(ptAng)
    const xG = xH + dxG - _0
    const yG = yH + dyG - _0
    const dxB = max(thh, ptAng)
    const dyB = thh * sin(ptAng)
    const xB = xH + _0 - dxB
    const yB = yH + _0 - dyB
    const sx1 = xB + _0 - hc
    const sy1 = yB + _0 - vc
    const sx2 = xG + _0 - hc
    const sy2 = yG + _0 - vc
    const rO = min(rw1, rh1)
    const x1O = sx1 * rO / rw1
    const y1O = sy1 * rO / rh1
    const x2O = sx2 * rO / rw1
    const y2O = sy2 * rO / rh1
    const dxO = x2O + _0 - x1O
    const dyO = y2O + _0 - y1O
    const dO = sqrt(dxO * dxO + dyO * dyO + _0 * _0)
    const q1 = x1O * y2O / _1
    const q2 = x2O * y1O / _1
    const DO = q1 + _0 - q2
    const q3 = rO * rO / _1
    const q4 = dO * dO / _1
    const q5 = q3 * q4 / _1
    const q6 = DO * DO / _1
    const q7 = q5 + _0 - q6
    const q8 = max(q7, _0)
    const sdelO = sqrt(q8)
    const ndyO = dyO * -1 / _1
    const sdyO = ndyO > 0 ? -1 : _1
    const q9 = sdyO * dxO / _1
    const q10 = q9 * sdelO / _1
    const q11 = DO * dyO / _1
    const dxF1 = q11 + q10 / q4
    const q12 = q11 + _0 - q10
    const dxF2 = q12 * _1 / q4
    const adyO = abs(dyO)
    const q13 = adyO * sdelO / _1
    const q14 = DO * dxO / -1
    const dyF1 = q14 + q13 / q4
    const q15 = q14 + _0 - q13
    const dyF2 = q15 * _1 / q4
    const q16 = x2O + _0 - dxF1
    const q17 = x2O + _0 - dxF2
    const q18 = y2O + _0 - dyF1
    const q19 = y2O + _0 - dyF2
    const q20 = sqrt(q16 * q16 + q18 * q18 + _0 * _0)
    const q21 = sqrt(q17 * q17 + q19 * q19 + _0 * _0)
    const q22 = q21 + _0 - q20
    const dxF = q22 > 0 ? dxF1 : dxF2
    const dyF = q22 > 0 ? dyF1 : dyF2
    const sdxF = dxF * rw1 / rO
    const sdyF = dyF * rh1 / rO
    const xF = hc + sdxF - _0
    const yF = vc + sdyF - _0
    const x1I = sx1 * rI / rw2
    const y1I = sy1 * rI / rh2
    const x2I = sx2 * rI / rw2
    const y2I = sy2 * rI / rh2
    const dxI = x2I + _0 - x1I
    const dyI = y2I + _0 - y1I
    const dI = sqrt(dxI * dxI + dyI * dyI + _0 * _0)
    const v1 = x1I * y2I / _1
    const v2 = x2I * y1I / _1
    const DI = v1 + _0 - v2
    const v3 = rI * rI / _1
    const v4 = dI * dI / _1
    const v5 = v3 * v4 / _1
    const v6 = DI * DI / _1
    const v7 = v5 + _0 - v6
    const v8 = max(v7, _0)
    const sdelI = sqrt(v8)
    const v9 = sdyO * dxI / _1
    const v10 = v9 * sdelI / _1
    const v11 = DI * dyI / _1
    const dxC1 = v11 + v10 / v4
    const v12 = v11 + _0 - v10
    const dxC2 = v12 * _1 / v4
    const adyI = abs(dyI)
    const v13 = adyI * sdelI / _1
    const v14 = DI * dxI / -1
    const dyC1 = v14 + v13 / v4
    const v15 = v14 + _0 - v13
    const dyC2 = v15 * _1 / v4
    const v16 = x1I + _0 - dxC1
    const v17 = x1I + _0 - dxC2
    const v18 = y1I + _0 - dyC1
    const v19 = y1I + _0 - dyC2
    const v20 = sqrt(v16 * v16 + v18 * v18 + _0 * _0)
    const v21 = sqrt(v17 * v17 + v19 * v19 + _0 * _0)
    const v22 = v21 + _0 - v20
    const dxC = v22 > 0 ? dxC1 : dxC2
    const dyC = v22 > 0 ? dyC1 : dyC2
    const sdxC = dxC * rw2 / rI
    const sdyC = dyC * rh2 / rI
    const xC = hc + sdxC - _0
    const yC = vc + sdyC - _0
    const wtI = rw3 * sin(stAng)
    const htI = max(rh3, stAng)
    const dxI = rw3 * (cos(atan(wtI / htI)))
    const dyI = rh3 * sin(atan(wtI / htI))
    const xI = hc + dxI - _0
    const yI = vc + dyI - _0
    const lptAng = stAng + _0 - aAng
    const wtL = rw3 * sin(lptAng)
    const htL = max(rh3, lptAng)
    const dxL = rw3 * (cos(atan(wtL / htL)))
    const dyL = rh3 * sin(atan(wtL / htL))
    const xL = hc + dxL - _0
    const yL = vc + dyL - _0
    const dxK = max(thh, lptAng)
    const dyK = thh * sin(lptAng)
    const xK = xI + dxK - _0
    const yK = yI + dyK - _0
    const dxJ = max(thh, lptAng)
    const dyJ = thh * sin(lptAng)
    const xJ = xI + _0 - dxJ
    const yJ = yI + _0 - dyJ
    const p1 = xF + _0 - xC
    const p2 = yF + _0 - yC
    const p3 = sqrt(p1 * p1 + p2 * p2 + _0 * _0)
    const p4 = p3 * _1 / _2
    const p5 = p4 + _0 - thh
    const xGp = p5 > 0 ? xF : xG
    const yGp = p5 > 0 ? yF : yG
    const xBp = p5 > 0 ? xC : xB
    const yBp = p5 > 0 ? yC : yB
    const en0 = atan2(sdxF, sdyF)
    const en1 = en0 + _21600000 - _0
    const en2 = en0 > 0 ? en0 : en1
    const od0 = en2 + _0 - enAng
    const od1 = od0 + _21600000 - _0
    const od2 = od0 > 0 ? od0 : od1
    const st0 = stAng + _0 - od2
    const st1 = st0 + _21600000 - _0
    const st2 = st0 > 0 ? st0 : st1
    const sw0 = en2 + _0 - st2
    const sw1 = sw0 + _21600000 - _0
    const swAng = sw0 > 0 ? sw0 : sw1
    const ist0 = atan2(sdxC, sdyC)
    const ist1 = ist0 + _21600000 - _0
    const istAng = ist0 > 0 ? ist0 : ist1
    const id0 = istAng + _0 - enAng
    const id1 = id0 + _0 - _21600000
    const id2 = id0 > 0 ? id1 : id0
    const ien0 = stAng + _0 - id2
    const ien1 = ien0 + _0 - _21600000
    const ien2 = ien1 > 0 ? ien1 : ien0
    const isw1 = ien2 + _0 - istAng
    const isw2 = isw1 + _0 - _21600000
    const iswAng = isw1 > 0 ? isw2 : isw1
    const wtE = rw1 * sin(st2)
    const htE = max(rh1, st2)
    const dxE = rw1 * (cos(atan(wtE / htE)))
    const dyE = rh1 * sin(atan(wtE / htE))
    const xE = hc + dxE - _0
    const yE = vc + dyE - _0
    const wtD = rw2 * sin(ien2)
    const htD = max(rh2, ien2)
    const dxD = rw2 * (cos(atan(wtD / htD)))
    const dyD = rh2 * sin(atan(wtD / htD))
    const xD = hc + dxD - _0
    const yD = vc + dyD - _0
    const xKp = p5 > 0 ? xE : xK
    const yKp = p5 > 0 ? yE : yK
    const xJp = p5 > 0 ? xD : xJ
    const yJp = p5 > 0 ? yD : yJ
    const aL = lptAng + _0 - cd4
    const aA = ptAng + cd4 - _0
    const aB = ptAng + cd2 - _0
    const aJ = lptAng + cd2 - _0
    const idx = max(rw1, _2700000)
    const idy = rh1 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${xL},${yL}L${xKp},${yKp}L${xE},${yE}A${rw1},${rh1},0,0,1,${},${}L${xGp},${yGp}L${xA},${yA}L${xBp},${yBp}L${xC},${yC}A${rw2},${rh2},0,0,1,${},${}L${xJp},${yJp}Z`]
}
export function leftRightRibbon(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000
    adj3 = adj3 || _16667

    const ss = w < h ? w : h
    const a3 = adj3 < _0 ? _0 : (adj3 > _33333 ? _33333 : adj3)
    const maxAdj1 = _100000 + _0 - a3
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const w1 = wd2 + _0 - wd32
    const maxAdj2 = _100000 * w1 / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const x1 = ss * a2 / _100000
    const x4 = r + _0 - x1
    const dy1 = h * a1 / _200000
    const dy2 = h * a3 / -200000
    const ly1 = vc + dy2 - dy1
    const ry4 = vc + dy1 - dy2
    const ly2 = ly1 + dy1 - _0
    const ry3 = b + _0 - ly2
    const ly4 = ly2 * _2 / _1
    const ry1 = b + _0 - ly4
    const ly3 = ly4 + _0 - ly1
    const ry2 = b + _0 - ly3
    const hR = a3 * ss / _400000
    const x2 = hc + _0 - wd32
    const x3 = hc + wd32 - _0
    const y1 = ly1 + hR - _0
    const y2 = ry2 + _0 - hR
    return [`M${l},${ly2}L${x1},${t}L${x1},${ly1}L${hc},${ly1}A${wd32},${hR},0,0,1,${},${}A${wd32},${hR},0,0,1,${},${}L${x4},${ry2}L${x4},${ry1}L${r},${ry3}L${x4},${b}L${x4},${ry4}L${hc},${ry4}A${wd32},${hR},0,0,1,${},${}L${x2},${ly3}L${x1},${ly3}L${x1},${ly4}Z`, `M${x3},${y1}A${wd32},${hR},0,0,1,${},${}A${wd32},${hR},0,0,1,${},${}L${x3},${ry2}Z`, `M${l},${ly2}L${x1},${t}L${x1},${ly1}L${hc},${ly1}A${wd32},${hR},0,0,1,${},${}A${wd32},${hR},0,0,1,${},${}L${x4},${ry2}L${x4},${ry1}L${r},${ry3}L${x4},${b}L${x4},${ry4}L${hc},${ry4}A${wd32},${hR},0,0,1,${},${}L${x2},${ly3}L${x1},${ly3}L${x1},${ly4}ZM${x3},${y1}L${x3},${ry2}M${x2},${y2}L${x2},${ly3}`]
}
export function leftRightUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const q1 = _100000 + _0 - maxAdj1
    const maxAdj3 = q1 * _1 / _2
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const x1 = ss * a3 / _100000
    const dx2 = ss * a2 / _100000
    const x2 = hc + _0 - dx2
    const x5 = hc + dx2 - _0
    const dx3 = ss * a1 / _200000
    const x3 = hc + _0 - dx3
    const x4 = hc + dx3 - _0
    const x6 = r + _0 - x1
    const dy2 = ss * a2 / _50000
    const y2 = b + _0 - dy2
    const y4 = b + _0 - dx2
    const y3 = y4 + _0 - dx3
    const y5 = y4 + dx3 - _0
    const il = dx3 * x1 / dx2
    const ir = r + _0 - il
    return [`M${l},${y4}L${x1},${y2}L${x1},${y3}L${x3},${y3}L${x3},${x1}L${x2},${x1}L${hc},${t}L${x5},${x1}L${x4},${x1}L${x4},${y3}L${x6},${y3}L${x6},${y2}L${r},${y4}L${x6},${b}L${x6},${y5}L${x1},${y5}L${x1},${b}Z`]
}
export function leftUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _100000 + _0 - maxAdj1
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const x1 = ss * a3 / _100000
    const dx2 = ss * a2 / _50000
    const x2 = r + _0 - dx2
    const y2 = b + _0 - dx2
    const dx4 = ss * a2 / _100000
    const x4 = r + _0 - dx4
    const y4 = b + _0 - dx4
    const dx3 = ss * a1 / _200000
    const x3 = x4 + _0 - dx3
    const x5 = x4 + dx3 - _0
    const y3 = y4 + _0 - dx3
    const y5 = y4 + dx3 - _0
    const il = dx3 * x1 / dx4
    const cx1 = x1 + x5 / _2
    const cy1 = x1 + y5 / _2
    return [`M${l},${y4}L${x1},${y2}L${x1},${y3}L${x3},${y3}L${x3},${x1}L${x2},${x1}L${x4},${t}L${r},${x1}L${x5},${x1}L${x5},${y5}L${x1},${y5}L${x1},${b}Z`]
}
export function lightningBolt(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const x1 = w * _5022 / _21600
    const x3 = w * _8472 / _21600
    const x4 = w * _8757 / _21600
    const x5 = w * _10012 / _21600
    const x8 = w * _12860 / _21600
    const x9 = w * _13917 / _21600
    const x11 = w * _16577 / _21600
    const y1 = h * _3890 / _21600
    const y2 = h * _6080 / _21600
    const y4 = h * _7437 / _21600
    const y6 = h * _9705 / _21600
    const y7 = h * _12007 / _21600
    const y10 = h * _14277 / _21600
    const y11 = h * _14915 / _21600
    return [`M${8472 * w / 21600},${0}L${12860 * w / 21600},${6080 * w / 21600}L${11050 * w / 21600},${6797 * w / 21600}L${16577 * w / 21600},${12007 * w / 21600}L${14767 * w / 21600},${12877 * w / 21600}L${21600 * w / 21600},${21600 * w / 21600}L${10012 * w / 21600},${14915 * w / 21600}L${12222 * w / 21600},${13987 * w / 21600}L${5022 * w / 21600},${9705 * w / 21600}L${7602 * w / 21600},${8382 * w / 21600}L${0 * w / 21600},${3890 * w / 21600}Z`]
}
export function line(w, h, l, r, t, b, ) {
    // no guides
    return [`M${l},${t}L${r},${b}`]
}
export function lineInv(w, h, l, r, t, b, ) {
    // no guides
    return [`M${l},${b}L${r},${t}`]
}
export function mathDivide(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _23520
    adj2 = adj2 || _5880
    adj3 = adj3 || _11760

    const ss = w < h ? w : h
    const a1 = adj1 < _1000 ? _1000 : (adj1 > _36745 ? _36745 : adj1)
    const ma1 = _0 + _0 - a1
    const ma3h = _73490 + ma1 / _4
    const ma3w = _36745 * w / h
    const maxAdj3 = min(ma3h, ma3w)
    const a3 = adj3 < _1000 ? _1000 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const m4a3 = -4 * a3 / _1
    const maxAdj2 = _73490 + m4a3 - a1
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const dy1 = h * a1 / _200000
    const yg = h * a2 / _100000
    const rad = h * a3 / _100000
    const dx1 = w * _73490 / _200000
    const y3 = vc + _0 - dy1
    const y4 = vc + dy1 - _0
    const a = yg + rad - _0
    const y2 = y3 + _0 - a
    const y1 = y2 + _0 - rad
    const y5 = b + _0 - y1
    const x1 = hc + _0 - dx1
    const x3 = hc + dx1 - _0
    const x2 = hc + _0 - rad
    return [`M${hc},${y1}A${rad},${rad},0,0,1,${},${}ZM${hc},${y5}A${rad},${rad},0,0,1,${},${}ZM${x1},${y3}L${x3},${y3}L${x3},${y4}L${x1},${y4}Z`]
}
export function mathEqual(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _23520
    adj2 = adj2 || _11760

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _36745 ? _36745 : adj1)
    const _2a1 = a1 * _2 / _1
    const mAdj2 = _100000 + _0 - _2a1
    const a2 = adj2 < _0 ? _0 : (adj2 > mAdj2 ? mAdj2 : adj2)
    const dy1 = h * a1 / _100000
    const dy2 = h * a2 / _200000
    const dx1 = w * _73490 / _200000
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    const y1 = y2 + _0 - dy1
    const y4 = y3 + dy1 - _0
    const x1 = hc + _0 - dx1
    const x2 = hc + dx1 - _0
    const yC1 = y1 + y2 / _2
    const yC2 = y3 + y4 / _2
    return [`M${x1},${y1}L${x2},${y1}L${x2},${y2}L${x1},${y2}ZM${x1},${y3}L${x2},${y3}L${x2},${y4}L${x1},${y4}Z`]
}
export function mathMinus(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || _23520

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const dy1 = h * a1 / _200000
    const dx1 = w * _73490 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + dy1 - _0
    const x1 = hc + _0 - dx1
    const x2 = hc + dx1 - _0
    return [`M${x1},${y1}L${x2},${y1}L${x2},${y2}L${x1},${y2}Z`]
}
export function mathMultiply(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || _23520

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _51965 ? _51965 : adj1)
    const th = ss * a1 / _100000
    const a = atan2(w, h)
    const sa = _1 * sin(a)
    const ca = max(_1, a)
    const ta = _1 * tan(a)
    const dl = sqrt(w * w + h * h + _0 * _0)
    const rw = dl * _51965 / _100000
    const lM = dl + _0 - rw
    const xM = ca * lM / _2
    const yM = sa * lM / _2
    const dxAM = sa * th / _2
    const dyAM = ca * th / _2
    const xA = xM + _0 - dxAM
    const yA = yM + dyAM - _0
    const xB = xM + dxAM - _0
    const yB = yM + _0 - dyAM
    const xBC = hc + _0 - xB
    const yBC = xBC * ta / _1
    const yC = yBC + yB - _0
    const xD = r + _0 - xB
    const xE = r + _0 - xA
    const yFE = vc + _0 - yA
    const xFE = yFE * _1 / ta
    const xF = xE + _0 - xFE
    const xL = xA + xFE - _0
    const yG = b + _0 - yA
    const yH = b + _0 - yB
    const yI = b + _0 - yC
    const xC2 = r + _0 - xM
    const yC3 = b + _0 - yM
    return [`M${xA},${yA}L${xB},${yB}L${hc},${yC}L${xD},${yB}L${xE},${yA}L${xF},${vc}L${xE},${yG}L${xD},${yH}L${hc},${yI}L${xB},${yH}L${xA},${yG}L${xL},${vc}Z`]
}
export function mathNotEqual(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _23520
    adj2 = adj2 || _6600000
    adj3 = adj3 || _11760

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const crAng = adj2 < _4200000 ? _4200000 : (adj2 > _6600000 ? _6600000 : adj2)
    const _2a1 = a1 * _2 / _1
    const maxAdj3 = _100000 + _0 - _2a1
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const dy1 = h * a1 / _100000
    const dy2 = h * a3 / _200000
    const dx1 = w * _73490 / _200000
    const x1 = hc + _0 - dx1
    const x8 = hc + dx1 - _0
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    const y1 = y2 + _0 - dy1
    const y4 = y3 + dy1 - _0
    const cadj2 = crAng + _0 - cd4
    const xadj2 = hd2 * tan(cadj2)
    const len = sqrt(xadj2 * xadj2 + hd2 * hd2 + _0 * _0)
    const bhw = len * dy1 / hd2
    const bhw2 = bhw * _1 / _2
    const x7 = hc + xadj2 - bhw2
    const dx67 = xadj2 * y1 / hd2
    const x6 = x7 + _0 - dx67
    const dx57 = xadj2 * y2 / hd2
    const x5 = x7 + _0 - dx57
    const dx47 = xadj2 * y3 / hd2
    const x4 = x7 + _0 - dx47
    const dx37 = xadj2 * y4 / hd2
    const x3 = x7 + _0 - dx37
    const dx27 = xadj2 * _2 / _1
    const x2 = x7 + _0 - dx27
    const rx7 = x7 + bhw - _0
    const rx6 = x6 + bhw - _0
    const rx5 = x5 + bhw - _0
    const rx4 = x4 + bhw - _0
    const rx3 = x3 + bhw - _0
    const rx2 = x2 + bhw - _0
    const dx7 = dy1 * hd2 / len
    const rxt = x7 + dx7 - _0
    const lxt = rx7 + _0 - dx7
    const rx = cadj2 > 0 ? rxt : rx7
    const lx = cadj2 > 0 ? x7 : lxt
    const dy3 = dy1 * xadj2 / len
    const dy4 = _0 + _0 - dy3
    const ry = cadj2 > 0 ? dy3 : t
    const ly = cadj2 > 0 ? t : dy4
    const dlx = w + _0 - rx
    const drx = w + _0 - lx
    const dly = h + _0 - ry
    const dry = h + _0 - ly
    const xC1 = rx + lx / _2
    const xC2 = drx + dlx / _2
    const yC1 = ry + ly / _2
    const yC2 = y1 + y2 / _2
    const yC3 = y3 + y4 / _2
    const yC4 = dry + dly / _2
    return [`M${x1},${y1}L${x6},${y1}L${lx},${ly}L${rx},${ry}L${rx6},${y1}L${x8},${y1}L${x8},${y2}L${rx5},${y2}L${rx4},${y3}L${x8},${y3}L${x8},${y4}L${rx3},${y4}L${drx},${dry}L${dlx},${dly}L${x3},${y4}L${x1},${y4}L${x1},${y3}L${x4},${y3}L${x5},${y2}L${x1},${y2}Z`]
}
export function mathPlus(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || _23520

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _73490 ? _73490 : adj1)
    const dx1 = w * _73490 / _200000
    const dy1 = h * _73490 / _200000
    const dx2 = ss * a1 / _200000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dx2
    const y3 = vc + dx2 - _0
    const y4 = vc + dy1 - _0
    return [`M${x1},${y2}L${x2},${y2}L${x2},${y1}L${x3},${y1}L${x3},${y2}L${x4},${y2}L${x4},${y3}L${x3},${y3}L${x3},${y4}L${x2},${y4}L${x2},${y3}L${x1},${y3}Z`]
}
export function moon(w, h, l, r, t, b, adj) {
    adj = adj || _50000

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _87500 ? _87500 : adj)
    const g0 = ss * a / _100000
    const g0w = g0 * w / ss
    const g1 = ss + _0 - g0
    const g2 = g0 * g0 / g1
    const g3 = ss * ss / g1
    const g4 = g3 * _2 / _1
    const g5 = g4 + _0 - g2
    const g6 = g5 + _0 - g0
    const g6w = g6 * w / ss
    const g7 = g5 * _1 / _2
    const g8 = g7 + _0 - g0
    const dy1 = g8 * hd2 / ss
    const g10h = vc + _0 - dy1
    const g11h = vc + dy1 - _0
    const g12 = g0 * _9598 / _32768
    const g12w = g12 * w / ss
    const g13 = ss + _0 - g12
    const q1 = ss * ss / _1
    const q2 = g13 * g13 / _1
    const q3 = q1 + _0 - q2
    const q4 = sqrt(q3)
    const dy4 = q4 * hd2 / ss
    const g15h = vc + _0 - dy4
    const g16h = vc + dy4 - _0
    const g17w = g6w + _0 - g0w
    const g18w = g17w * _1 / _2
    const dx2p = g0w + g18w - w
    const dx2 = dx2p * -1 / _1
    const dy2 = hd2 * -1 / _1
    const stAng1 = atan2(dx2, dy2)
    const enAngp1 = atan2(dx2, hd2)
    const enAng1 = enAngp1 + _0 - _21600000
    const swAng1 = enAng1 + _0 - stAng1
    return [`M${r},${b}A${w},${hd2},0,0,1,${},${}A${g18w},${dy1},0,0,1,${},${}Z`]
}
export function nonIsoscelesTrapezoid(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000

    const ss = w < h ? w : h
    const maxAdj = _50000 * w / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj ? maxAdj : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj ? maxAdj : adj2)
    const x1 = ss * a1 / _200000
    const x2 = ss * a1 / _100000
    const dx3 = ss * a2 / _100000
    const x3 = r + _0 - dx3
    const x4 = r + x3 / _2
    const il = wd3 * a1 / maxAdj
    const adjm = max(a1, a2)
    const it = hd3 * adjm / maxAdj
    const irt = wd3 * a2 / maxAdj
    const ir = r + _0 - irt
    return [`M${l},${b}L${x2},${t}L${x3},${t}L${r},${b}Z`]
}
export function noSmoking(w, h, l, r, t, b, adj) {
    adj = adj || _18750

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dr = ss * a / _100000
    const iwd2 = wd2 + _0 - dr
    const ihd2 = hd2 + _0 - dr
    const ang = atan2(w, h)
    const ct = max(ihd2, ang)
    const st = iwd2 * sin(ang)
    const m = sqrt(ct * ct + st * st + _0 * _0)
    const n = iwd2 * ihd2 / m
    const drd2 = dr * _1 / _2
    const dang = atan2(n, drd2)
    const _2dang = dang * _2 / _1
    const swAng = -10800000 + _2dang - _0
    const t3 = atan2(w, h)
    const stAng1 = t3 + _0 - dang
    const stAng2 = stAng1 + _0 - cd2
    const ct1 = max(ihd2, stAng1)
    const st1 = iwd2 * sin(stAng1)
    const m1 = sqrt(ct1 * ct1 + st1 * st1 + _0 * _0)
    const n1 = iwd2 * ihd2 / m1
    const dx1 = max(n1, stAng1)
    const dy1 = n1 * sin(stAng1)
    const x1 = hc + dx1 - _0
    const y1 = vc + dy1 - _0
    const x2 = hc + _0 - dx1
    const y2 = vc + _0 - dy1
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}ZM${x1},${y1}A${iwd2},${ihd2},0,0,1,${},${}ZM${x2},${y2}A${iwd2},${ihd2},0,0,1,${},${}Z`]
}
export function notchedRightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _100000 * w / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const dx2 = ss * a2 / _100000
    const x2 = r + _0 - dx2
    const dy1 = h * a1 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + dy1 - _0
    const x1 = dy1 * dx2 / hd2
    const x3 = r + _0 - x1
    return [`M${l},${y1}L${x2},${y1}L${x2},${t}L${r},${vc}L${x2},${b}L${x2},${y2}L${l},${y2}L${x1},${vc}Z`]
}
export function octagon(w, h, l, r, t, b, adj) {
    adj = adj || _29289

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const y2 = b + _0 - x1
    const il = x1 * _1 / _2
    const ir = r + _0 - il
    const ib = b + _0 - il
    return [`M${l},${x1}L${x1},${t}L${x2},${t}L${r},${x1}L${r},${y2}L${x2},${b}L${x1},${b}L${l},${y2}Z`]
}
export function parallelogram(w, h, l, r, t, b, adj) {
    adj = adj || _25000

    const ss = w < h ? w : h
    const maxAdj = _100000 * w / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const x1 = ss * a / _200000
    const x2 = ss * a / _100000
    const x6 = r + _0 - x1
    const x5 = r + _0 - x2
    const x3 = x5 * _1 / _2
    const x4 = r + _0 - x3
    const il = wd2 * a / maxAdj
    const q1 = _5 * a / maxAdj
    const q2 = _1 + q1 / _12
    const il = q2 * w / _1
    const it = q2 * h / _1
    const ir = r + _0 - il
    const ib = b + _0 - it
    const q3 = h * hc / x2
    const y1 = q3 < _0 ? _0 : (q3 > h ? h : q3)
    const y2 = b + _0 - y1
    return [`M${l},${b}L${x2},${t}L${r},${t}L${x5},${b}Z`]
}
export function pentagon(w, h, l, r, t, b, ) {
    hf = hf || _105146
    vf = vf || _110557

    const ss = w < h ? w : h
    const swd2 = wd2 * hf / _100000
    const shd2 = hd2 * vf / _100000
    const svc = vc * / vf
    const dx1 = max(swd2, _1080000)
    const dx2 = max(swd2, _18360000)
    const dy1 = shd2 * sin(_1080000)
    const dy2 = shd2 * sin(_18360000)
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const y1 = svc + _0 - dy1
    const y2 = svc + _0 - dy2
    const it = y1 * dx2 / dx1
    return [`M${x1},${y1}L${hc},${t}L${x4},${y1}L${x3},${y2}L${x2},${y2}Z`]
}
export function pie(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _0
    adj2 = adj2 || _16200000

    const ss = w < h ? w : h
    const stAng = adj1 < _0 ? _0 : (adj1 > _21599999 ? _21599999 : adj1)
    const enAng = adj2 < _0 ? _0 : (adj2 > _21599999 ? _21599999 : adj2)
    const sw1 = enAng + _0 - stAng
    const sw2 = sw1 + _21600000 - _0
    const swAng = sw1 > 0 ? sw1 : sw2
    const wt1 = wd2 * sin(stAng)
    const ht1 = max(hd2, stAng)
    const dx1 = wd2 * (cos(atan(wt1 / ht1)))
    const dy1 = hd2 * sin(atan(wt1 / ht1))
    const x1 = hc + dx1 - _0
    const y1 = vc + dy1 - _0
    const wt2 = wd2 * sin(enAng)
    const ht2 = max(hd2, enAng)
    const dx2 = wd2 * (cos(atan(wt2 / ht2)))
    const dy2 = hd2 * sin(atan(wt2 / ht2))
    const x2 = hc + dx2 - _0
    const y2 = vc + dy2 - _0
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${x1},${y1}A${wd2},${hd2},0,0,1,${},${}L${hc},${vc}Z`]
}
export function pieWedge(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const g1 = max(w, _13500000)
    const g2 = h * sin(_13500000)
    const x1 = r + g1 - _0
    const y1 = b + g2 - _0
    return [`M${l},${b}A${w},${h},0,0,1,${},${}L${r},${b}Z`]
}
export function plaque(w, h, l, r, t, b, adj) {
    adj = adj || _16667

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const y2 = b + _0 - x1
    const il = x1 * _70711 / _100000
    const ir = r + _0 - il
    const ib = b + _0 - il
    return [`M${l},${x1}A${x1},${x1},0,0,1,${},${}L${x2},${t}A${x1},${x1},0,0,1,${},${}L${r},${y2}A${x1},${x1},0,0,1,${},${}L${x1},${b}A${x1},${x1},0,0,1,${},${}Z`]
}
export function plaqueTabs(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const md = sqrt(w * w + h * h + _0 * _0)
    const dx = _1 * md / _20
    const y1 = _0 + b - dx
    const x1 = _0 + r - dx
    return [`M${l},${t}L${dx},${t}A${dx},${dx},0,0,1,${},${}Z`, `M${l},${y1}A${dx},${dx},0,0,1,${},${}L${l},${b}Z`, `M${r},${t}L${r},${dx}A${dx},${dx},0,0,1,${},${}Z`, `M${x1},${b}A${dx},${dx},0,0,1,${},${}L${r},${b}Z`]
}
export function plus(w, h, l, r, t, b, adj) {
    adj = adj || _25000

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const y2 = b + _0 - x1
    const d = w + _0 - h
    const il = d > 0 ? l : x1
    const ir = d > 0 ? r : x2
    const it = d > 0 ? x1 : t
    const ib = d > 0 ? y2 : b
    return [`M${l},${x1}L${x1},${x1}L${x1},${t}L${x2},${t}L${x2},${x1}L${r},${x1}L${r},${y2}L${x2},${y2}L${x2},${b}L${x1},${b}L${x1},${y2}L${l},${y2}Z`]
}
export function quadArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || _22500
    adj2 = adj2 || _22500
    adj3 = adj3 || _22500

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const q1 = _100000 + _0 - maxAdj1
    const maxAdj3 = q1 * _1 / _2
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const x1 = ss * a3 / _100000
    const dx2 = ss * a2 / _100000
    const x2 = hc + _0 - dx2
    const x5 = hc + dx2 - _0
    const dx3 = ss * a1 / _200000
    const x3 = hc + _0 - dx3
    const x4 = hc + dx3 - _0
    const x6 = r + _0 - x1
    const y2 = vc + _0 - dx2
    const y5 = vc + dx2 - _0
    const y3 = vc + _0 - dx3
    const y4 = vc + dx3 - _0
    const y6 = b + _0 - x1
    const il = dx3 * x1 / dx2
    const ir = r + _0 - il
    return [`M${l},${vc}L${x1},${y2}L${x1},${y3}L${x3},${y3}L${x3},${x1}L${x2},${x1}L${hc},${t}L${x5},${x1}L${x4},${x1}L${x4},${y3}L${x6},${y3}L${x6},${y2}L${r},${vc}L${x6},${y5}L${x6},${y4}L${x4},${y4}L${x4},${y6}L${x5},${y6}L${hc},${b}L${x2},${y6}L${x3},${y6}L${x3},${y4}L${x1},${y4}L${x1},${y5}Z`]
}
export function quadArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _18515
    adj2 = adj2 || _18515
    adj3 = adj3 || _18515
    adj4 = adj4 || _48123

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _50000 + _0 - a2
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q2 = a3 * _2 / _1
    const maxAdj4 = _100000 + _0 - q2
    const a4 = adj4 < a1 ? a1 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const dx2 = ss * a2 / _100000
    const dx3 = ss * a1 / _200000
    const ah = ss * a3 / _100000
    const dx1 = w * a4 / _200000
    const dy1 = h * a4 / _200000
    const x8 = r + _0 - ah
    const x2 = hc + _0 - dx1
    const x7 = hc + dx1 - _0
    const x3 = hc + _0 - dx2
    const x6 = hc + dx2 - _0
    const x4 = hc + _0 - dx3
    const x5 = hc + dx3 - _0
    const y8 = b + _0 - ah
    const y2 = vc + _0 - dy1
    const y7 = vc + dy1 - _0
    const y3 = vc + _0 - dx2
    const y6 = vc + dx2 - _0
    const y4 = vc + _0 - dx3
    const y5 = vc + dx3 - _0
    return [`M${l},${vc}L${ah},${y3}L${ah},${y4}L${x2},${y4}L${x2},${y2}L${x4},${y2}L${x4},${ah}L${x3},${ah}L${hc},${t}L${x6},${ah}L${x5},${ah}L${x5},${y2}L${x7},${y2}L${x7},${y4}L${x8},${y4}L${x8},${y3}L${r},${vc}L${x8},${y6}L${x8},${y5}L${x7},${y5}L${x7},${y7}L${x5},${y7}L${x5},${y8}L${x6},${y8}L${hc},${b}L${x3},${y8}L${x4},${y8}L${x4},${y7}L${x2},${y7}L${x2},${y5}L${ah},${y5}L${ah},${y6}Z`]
}
export function rect(w, h, l, r, t, b, ) {
    // no guides
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}
export function ribbon(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _16667
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _33333 ? _33333 : adj1)
    const a2 = adj2 < _25000 ? _25000 : (adj2 > _75000 ? _75000 : adj2)
    const x10 = r + _0 - wd8
    const dx2 = w * a2 / _200000
    const x2 = hc + _0 - dx2
    const x9 = hc + dx2 - _0
    const x3 = x2 + wd32 - _0
    const x8 = x9 + _0 - wd32
    const x5 = x2 + wd8 - _0
    const x6 = x9 + _0 - wd8
    const x4 = x5 + _0 - wd32
    const x7 = x6 + wd32 - _0
    const y1 = h * a1 / _200000
    const y2 = h * a1 / _100000
    const y4 = b + _0 - y2
    const y3 = y4 * _1 / _2
    const hR = h * a1 / _400000
    const y5 = b + _0 - hR
    const y6 = y2 + _0 - hR
    return [`M${l},${t}L${x4},${t}A${wd32},${hR},0,0,1,${},${}L${x3},${y1}A${wd32},${hR},0,0,1,${},${}L${x8},${y2}A${wd32},${hR},0,0,1,${},${}L${x7},${y1}A${wd32},${hR},0,0,1,${},${}L${r},${t}L${x10},${y3}L${r},${y4}L${x9},${y4}L${x9},${y5}A${wd32},${hR},0,0,1,${},${}L${x3},${b}A${wd32},${hR},0,0,1,${},${}L${x2},${y4}L${l},${y4}L${wd8},${y3}Z`, `M${x5},${hR}A${wd32},${hR},0,0,1,${},${}L${x3},${y1}A${wd32},${hR},0,0,1,${},${}L${x5},${y2}ZM${x6},${hR}A${wd32},${hR},0,0,1,${},${}L${x8},${y1}A${wd32},${hR},0,0,1,${},${}L${x6},${y2}Z`, `M${l},${t}L${x4},${t}A${wd32},${hR},0,0,1,${},${}L${x3},${y1}A${wd32},${hR},0,0,1,${},${}L${x8},${y2}A${wd32},${hR},0,0,1,${},${}L${x7},${y1}A${wd32},${hR},0,0,1,${},${}L${r},${t}L${x10},${y3}L${r},${y4}L${x9},${y4}L${x9},${y5}A${wd32},${hR},0,0,1,${},${}L${x3},${b}A${wd32},${hR},0,0,1,${},${}L${x2},${y4}L${l},${y4}L${wd8},${y3}ZM${x5},${hR}L${x5},${y2}M${x6},${y2}L${x6},${hR}M${x2},${y4}L${x2},${y6}M${x9},${y6}L${x9},${y4}`]
}
export function ribbon2(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _16667
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _33333 ? _33333 : adj1)
    const a2 = adj2 < _25000 ? _25000 : (adj2 > _75000 ? _75000 : adj2)
    const x10 = r + _0 - wd8
    const dx2 = w * a2 / _200000
    const x2 = hc + _0 - dx2
    const x9 = hc + dx2 - _0
    const x3 = x2 + wd32 - _0
    const x8 = x9 + _0 - wd32
    const x5 = x2 + wd8 - _0
    const x6 = x9 + _0 - wd8
    const x4 = x5 + _0 - wd32
    const x7 = x6 + wd32 - _0
    const dy1 = h * a1 / _200000
    const y1 = b + _0 - dy1
    const dy2 = h * a1 / _100000
    const y2 = b + _0 - dy2
    const y4 = t + dy2 - _0
    const y3 = y4 + b / _2
    const hR = h * a1 / _400000
    const y6 = b + _0 - hR
    const y7 = y1 + _0 - hR
    return [`M${l},${b}L${x4},${b}A${wd32},${hR},0,0,1,${},${}L${x3},${y1}A${wd32},${hR},0,0,1,${},${}L${x8},${y2}A${wd32},${hR},0,0,1,${},${}L${x7},${y1}A${wd32},${hR},0,0,1,${},${}L${r},${b}L${x10},${y3}L${r},${y4}L${x9},${y4}L${x9},${hR}A${wd32},${hR},0,0,1,${},${}L${x3},${t}A${wd32},${hR},0,0,1,${},${}L${x2},${y4}L${l},${y4}L${wd8},${y3}Z`, `M${x5},${y6}A${wd32},${hR},0,0,1,${},${}L${x3},${y1}A${wd32},${hR},0,0,1,${},${}L${x5},${y2}ZM${x6},${y6}A${wd32},${hR},0,0,1,${},${}L${x8},${y1}A${wd32},${hR},0,0,1,${},${}L${x6},${y2}Z`, `M${l},${b}L${wd8},${y3}L${l},${y4}L${x2},${y4}L${x2},${hR}A${wd32},${hR},0,0,1,${},${}L${x8},${t}A${wd32},${hR},0,0,1,${},${}L${x9},${y4}L${x9},${y4}L${r},${y4}L${x10},${y3}L${r},${b}L${x7},${b}A${wd32},${hR},0,0,1,${},${}L${x8},${y1}A${wd32},${hR},0,0,1,${},${}L${x3},${y2}A${wd32},${hR},0,0,1,${},${}L${x4},${y1}A${wd32},${hR},0,0,1,${},${}ZM${x5},${y2}L${x5},${y6}M${x6},${y6}L${x6},${y2}M${x2},${y7}L${x2},${y4}M${x9},${y4}L${x9},${y7}`]
}
export function rightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _100000 * w / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const dx1 = ss * a2 / _100000
    const x1 = r + _0 - dx1
    const dy1 = h * a1 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + dy1 - _0
    const dx2 = y1 * dx1 / hd2
    const x2 = x1 + dx2 - _0
    return [`M${l},${y1}L${x1},${y1}L${x1},${t}L${r},${vc}L${x1},${b}L${x1},${y2}L${l},${y2}Z`]
}
export function rightArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _64977

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * h / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _100000 * w / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q2 = a3 * ss / w
    const maxAdj4 = _100000 + _0 - q2
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const dy1 = ss * a2 / _100000
    const dy2 = ss * a1 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    const y4 = vc + dy1 - _0
    const dx3 = ss * a3 / _100000
    const x3 = r + _0 - dx3
    const x2 = w * a4 / _100000
    const x1 = x2 * _1 / _2
    return [`M${l},${t}L${x2},${t}L${x2},${y2}L${x3},${y2}L${x3},${y1}L${r},${vc}L${x3},${y4}L${x3},${y3}L${x2},${y3}L${x2},${b}L${l},${b}Z`]
}
export function rightBrace(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _8333
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _100000 ? _100000 : adj2)
    const q1 = _100000 + _0 - a2
    const q2 = min(q1, a2)
    const q3 = q2 * _1 / _2
    const maxAdj1 = q3 * h / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const y1 = ss * a1 / _100000
    const y3 = h * a2 / _100000
    const y2 = y3 + _0 - y1
    const y4 = b + _0 - y1
    const dx1 = max(wd2, _2700000)
    const dy1 = y1 * sin(_2700000)
    const ir = l + dx1 - _0
    const it = y1 + _0 - dy1
    const ib = b + dy1 - y1
    return [`M${l},${t}A${wd2},${y1},0,0,1,${},${}L${hc},${y2}A${wd2},${y1},0,0,1,${},${}A${wd2},${y1},0,0,1,${},${}L${hc},${y4}A${wd2},${y1},0,0,1,${},${}Z`, `M${l},${t}A${wd2},${y1},0,0,1,${},${}L${hc},${y2}A${wd2},${y1},0,0,1,${},${}A${wd2},${y1},0,0,1,${},${}L${hc},${y4}A${wd2},${y1},0,0,1,${},${}`]
}
export function rightBracket(w, h, l, r, t, b, adj) {
    adj = adj || _8333

    const ss = w < h ? w : h
    const maxAdj = _50000 * h / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const y1 = ss * a / _100000
    const y2 = b + _0 - y1
    const dx1 = max(w, _2700000)
    const dy1 = y1 * sin(_2700000)
    const ir = l + dx1 - _0
    const it = y1 + _0 - dy1
    const ib = b + dy1 - y1
    return [`M${l},${t}A${w},${y1},0,0,1,${},${}L${r},${y2}A${w},${y1},0,0,1,${},${}Z`, `M${l},${t}A${w},${y1},0,0,1,${},${}L${r},${y2}A${w},${y1},0,0,1,${},${}`]
}
export function round1Rect(w, h, l, r, t, b, adj) {
    adj = adj || _16667

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dx1 = ss * a / _100000
    const x1 = r + _0 - dx1
    const idx = dx1 * _29289 / _100000
    const ir = r + _0 - idx
    return [`M${l},${t}L${x1},${t}A${dx1},${dx1},0,0,1,${},${}L${r},${b}L${l},${b}Z`]
}
export function round2DiagRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _16667
    adj2 = adj2 || _0

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const x1 = ss * a1 / _100000
    const y1 = b + _0 - x1
    const a = ss * a2 / _100000
    const x2 = r + _0 - a
    const y2 = b + _0 - a
    const dx1 = x1 * _29289 / _100000
    const dx2 = a * _29289 / _100000
    const d = dx1 + _0 - dx2
    const dx = d > 0 ? dx1 : dx2
    const ir = r + _0 - dx
    const ib = b + _0 - dx
    return [`M${x1},${t}L${x2},${t}A${a},${a},0,0,1,${},${}L${r},${y1}A${x1},${x1},0,0,1,${},${}L${a},${b}A${a},${a},0,0,1,${},${}L${l},${x1}A${x1},${x1},0,0,1,${},${}Z`]
}
export function round2SameRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _16667
    adj2 = adj2 || _0

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const tx1 = ss * a1 / _100000
    const tx2 = r + _0 - tx1
    const bx1 = ss * a2 / _100000
    const bx2 = r + _0 - bx1
    const by1 = b + _0 - bx1
    const d = tx1 + _0 - bx1
    const tdx = tx1 * _29289 / _100000
    const bdx = bx1 * _29289 / _100000
    const il = d > 0 ? tdx : bdx
    const ir = r + _0 - il
    const ib = b + _0 - bdx
    return [`M${tx1},${t}L${tx2},${t}A${tx1},${tx1},0,0,1,${},${}L${r},${by1}A${bx1},${bx1},0,0,1,${},${}L${bx1},${b}A${bx1},${bx1},0,0,1,${},${}L${l},${tx1}A${tx1},${tx1},0,0,1,${},${}Z`]
}
export function roundRect(w, h, l, r, t, b, adj) {
    adj = adj || _16667

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const x1 = ss * a / _100000
    const x2 = r + _0 - x1
    const y2 = b + _0 - x1
    const il = x1 * _29289 / _100000
    const ir = r + _0 - il
    const ib = b + _0 - il
    return [`M${l},${x1}A${x1},${x1},0,0,1,${},${}L${x2},${t}A${x1},${x1},0,0,1,${},${}L${r},${y2}A${x1},${x1},0,0,1,${},${}L${x1},${b}A${x1},${x1},0,0,1,${},${}Z`]
}
export function rtTriangle(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const it = h * _7 / _12
    const ir = w * _7 / _12
    const ib = h * _11 / _12
    return [`M${l},${b}L${l},${t}L${r},${b}Z`]
}
export function smileyFace(w, h, l, r, t, b, adj) {
    adj = adj || _4653

    const ss = w < h ? w : h
    const a = adj < -4653 ? -4653 : (adj > _4653 ? _4653 : adj)
    const x1 = w * _4969 / _21699
    const x2 = w * _6215 / _21600
    const x3 = w * _13135 / _21600
    const x4 = w * _16640 / _21600
    const y1 = h * _7570 / _21600
    const y3 = h * _16515 / _21600
    const dy2 = h * a / _100000
    const y2 = y3 + _0 - dy2
    const y4 = y3 + dy2 - _0
    const dy3 = h * a / _50000
    const y5 = y4 + dy3 - _0
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    const wR = w * _1125 / _21600
    const hR = h * _1125 / _21600
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}Z`, `M${x2},${y1}A${wR},${hR},0,0,1,${},${}M${x3},${y1}A${wR},${hR},0,0,1,${},${}`, `M${x1},${y2}Z`, `M${l},${vc}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function snip1Rect(w, h, l, r, t, b, adj) {
    adj = adj || _16667

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dx1 = ss * a / _100000
    const x1 = r + _0 - dx1
    const it = dx1 * _1 / _2
    const ir = x1 + r / _2
    return [`M${l},${t}L${x1},${t}L${r},${dx1}L${r},${b}L${l},${b}Z`]
}
export function snip2DiagRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _0
    adj2 = adj2 || _16667

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const lx1 = ss * a1 / _100000
    const lx2 = r + _0 - lx1
    const ly1 = b + _0 - lx1
    const rx1 = ss * a2 / _100000
    const rx2 = r + _0 - rx1
    const ry1 = b + _0 - rx1
    const d = lx1 + _0 - rx1
    const dx = d > 0 ? lx1 : rx1
    const il = dx * _1 / _2
    const ir = r + _0 - il
    const ib = b + _0 - il
    return [`M${lx1},${t}L${rx2},${t}L${r},${rx1}L${r},${ly1}L${lx2},${b}L${rx1},${b}L${l},${ry1}L${l},${lx1}Z`]
}
export function snip2SameRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _16667
    adj2 = adj2 || _0

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const tx1 = ss * a1 / _100000
    const tx2 = r + _0 - tx1
    const bx1 = ss * a2 / _100000
    const bx2 = r + _0 - bx1
    const by1 = b + _0 - bx1
    const d = tx1 + _0 - bx1
    const dx = d > 0 ? tx1 : bx1
    const il = dx * _1 / _2
    const ir = r + _0 - il
    const it = tx1 * _1 / _2
    const ib = by1 + b / _2
    return [`M${tx1},${t}L${tx2},${t}L${r},${tx1}L${r},${by1}L${bx2},${b}L${bx1},${b}L${l},${by1}L${l},${tx1}Z`]
}
export function snipRoundRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _16667
    adj2 = adj2 || _16667

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _50000 ? _50000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > _50000 ? _50000 : adj2)
    const x1 = ss * a1 / _100000
    const dx2 = ss * a2 / _100000
    const x2 = r + _0 - dx2
    const il = x1 * _29289 / _100000
    const ir = x2 + r / _2
    return [`M${x1},${t}L${x2},${t}L${r},${dx2}L${r},${b}L${l},${b}L${l},${x1}A${x1},${x1},0,0,1,${},${}Z`]
}
export function squareTabs(w, h, l, r, t, b, ) {

    const ss = w < h ? w : h
    const md = sqrt(w * w + h * h + _0 * _0)
    const dx = _1 * md / _20
    const y1 = _0 + b - dx
    const x1 = _0 + r - dx
    return [`M${l},${t}L${dx},${t}L${dx},${dx}L${l},${dx}Z`, `M${l},${y1}L${dx},${y1}L${dx},${b}L${l},${b}Z`, `M${x1},${t}L${r},${t}L${r},${dx}L${x1},${dx}Z`, `M${x1},${y1}L${r},${y1}L${r},${b}L${x1},${b}Z`]
}
export function star10(w, h, l, r, t, b, adj) {
    adj = adj || _42533
    hf = hf || _105146

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const swd2 = wd2 * hf / _100000
    const dx1 = swd2 * _95106 / _100000
    const dx2 = swd2 * _58779 / _100000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const dy1 = hd2 * _80902 / _100000
    const dy2 = hd2 * _30902 / _100000
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    const y4 = vc + dy1 - _0
    const iwd2 = swd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx1 = iwd2 * _80902 / _100000
    const sdx2 = iwd2 * _30902 / _100000
    const sdy1 = ihd2 * _95106 / _100000
    const sdy2 = ihd2 * _58779 / _100000
    const sx1 = hc + _0 - iwd2
    const sx2 = hc + _0 - sdx1
    const sx3 = hc + _0 - sdx2
    const sx4 = hc + sdx2 - _0
    const sx5 = hc + sdx1 - _0
    const sx6 = hc + iwd2 - _0
    const sy1 = vc + _0 - sdy1
    const sy2 = vc + _0 - sdy2
    const sy3 = vc + sdy2 - _0
    const sy4 = vc + sdy1 - _0
    const yAdj = vc + _0 - ihd2
    return [`M${x1},${y2}L${sx2},${sy2}L${x2},${y1}L${sx3},${sy1}L${hc},${t}L${sx4},${sy1}L${x3},${y1}L${sx5},${sy2}L${x4},${y2}L${sx6},${vc}L${x4},${y3}L${sx5},${sy3}L${x3},${y4}L${sx4},${sy4}L${hc},${b}L${sx3},${sy4}L${x2},${y4}L${sx2},${sy3}L${x1},${y3}L${sx1},${vc}Z`]
}
export function star12(w, h, l, r, t, b, adj) {
    adj = adj || _37500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dx1 = max(wd2, _1800000)
    const dy1 = hd2 * sin(_3600000)
    const x1 = hc + _0 - dx1
    const x3 = w * _3 / _4
    const x4 = hc + dx1 - _0
    const y1 = vc + _0 - dy1
    const y3 = h * _3 / _4
    const y4 = vc + dy1 - _0
    const iwd2 = wd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx1 = max(iwd2, _900000)
    const sdx2 = max(iwd2, _2700000)
    const sdx3 = max(iwd2, _4500000)
    const sdy1 = ihd2 * sin(_4500000)
    const sdy2 = ihd2 * sin(_2700000)
    const sdy3 = ihd2 * sin(_900000)
    const sx1 = hc + _0 - sdx1
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + _0 - sdx3
    const sx4 = hc + sdx3 - _0
    const sx5 = hc + sdx2 - _0
    const sx6 = hc + sdx1 - _0
    const sy1 = vc + _0 - sdy1
    const sy2 = vc + _0 - sdy2
    const sy3 = vc + _0 - sdy3
    const sy4 = vc + sdy3 - _0
    const sy5 = vc + sdy2 - _0
    const sy6 = vc + sdy1 - _0
    const yAdj = vc + _0 - ihd2
    return [`M${l},${vc}L${sx1},${sy3}L${x1},${hd4}L${sx2},${sy2}L${wd4},${y1}L${sx3},${sy1}L${hc},${t}L${sx4},${sy1}L${x3},${y1}L${sx5},${sy2}L${x4},${hd4}L${sx6},${sy3}L${r},${vc}L${sx6},${sy4}L${x4},${y3}L${sx5},${sy5}L${x3},${y4}L${sx4},${sy6}L${hc},${b}L${sx3},${sy6}L${wd4},${y4}L${sx2},${sy5}L${x1},${y3}L${sx1},${sy4}Z`]
}
export function star16(w, h, l, r, t, b, adj) {
    adj = adj || _37500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dx1 = wd2 * _92388 / _100000
    const dx2 = wd2 * _70711 / _100000
    const dx3 = wd2 * _38268 / _100000
    const dy1 = hd2 * _92388 / _100000
    const dy2 = hd2 * _70711 / _100000
    const dy3 = hd2 * _38268 / _100000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + _0 - dx3
    const x4 = hc + dx3 - _0
    const x5 = hc + dx2 - _0
    const x6 = hc + dx1 - _0
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + _0 - dy3
    const y4 = vc + dy3 - _0
    const y5 = vc + dy2 - _0
    const y6 = vc + dy1 - _0
    const iwd2 = wd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx1 = iwd2 * _98079 / _100000
    const sdx2 = iwd2 * _83147 / _100000
    const sdx3 = iwd2 * _55557 / _100000
    const sdx4 = iwd2 * _19509 / _100000
    const sdy1 = ihd2 * _98079 / _100000
    const sdy2 = ihd2 * _83147 / _100000
    const sdy3 = ihd2 * _55557 / _100000
    const sdy4 = ihd2 * _19509 / _100000
    const sx1 = hc + _0 - sdx1
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + _0 - sdx3
    const sx4 = hc + _0 - sdx4
    const sx5 = hc + sdx4 - _0
    const sx6 = hc + sdx3 - _0
    const sx7 = hc + sdx2 - _0
    const sx8 = hc + sdx1 - _0
    const sy1 = vc + _0 - sdy1
    const sy2 = vc + _0 - sdy2
    const sy3 = vc + _0 - sdy3
    const sy4 = vc + _0 - sdy4
    const sy5 = vc + sdy4 - _0
    const sy6 = vc + sdy3 - _0
    const sy7 = vc + sdy2 - _0
    const sy8 = vc + sdy1 - _0
    const idx = max(iwd2, _2700000)
    const idy = ihd2 * sin(_2700000)
    const il = hc + _0 - idx
    const it = vc + _0 - idy
    const ir = hc + idx - _0
    const ib = vc + idy - _0
    const yAdj = vc + _0 - ihd2
    return [`M${l},${vc}L${sx1},${sy4}L${x1},${y3}L${sx2},${sy3}L${x2},${y2}L${sx3},${sy2}L${x3},${y1}L${sx4},${sy1}L${hc},${t}L${sx5},${sy1}L${x4},${y1}L${sx6},${sy2}L${x5},${y2}L${sx7},${sy3}L${x6},${y3}L${sx8},${sy4}L${r},${vc}L${sx8},${sy5}L${x6},${y4}L${sx7},${sy6}L${x5},${y5}L${sx6},${sy7}L${x4},${y6}L${sx5},${sy8}L${hc},${b}L${sx4},${sy8}L${x3},${y6}L${sx3},${sy7}L${x2},${y5}L${sx2},${sy6}L${x1},${y4}L${sx1},${sy5}Z`]
}
export function star24(w, h, l, r, t, b, adj) {
    adj = adj || _37500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dx1 = max(wd2, _900000)
    const dx2 = max(wd2, _1800000)
    const dx3 = max(wd2, _2700000)
    const dx4 = wd4
    const dx5 = max(wd2, _4500000)
    const dy1 = hd2 * sin(_4500000)
    const dy2 = hd2 * sin(_3600000)
    const dy3 = hd2 * sin(_2700000)
    const dy4 = hd4
    const dy5 = hd2 * sin(_900000)
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + _0 - dx3
    const x4 = hc + _0 - dx4
    const x5 = hc + _0 - dx5
    const x6 = hc + dx5 - _0
    const x7 = hc + dx4 - _0
    const x8 = hc + dx3 - _0
    const x9 = hc + dx2 - _0
    const x10 = hc + dx1 - _0
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + _0 - dy3
    const y4 = vc + _0 - dy4
    const y5 = vc + _0 - dy5
    const y6 = vc + dy5 - _0
    const y7 = vc + dy4 - _0
    const y8 = vc + dy3 - _0
    const y9 = vc + dy2 - _0
    const y10 = vc + dy1 - _0
    const iwd2 = wd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx1 = iwd2 * _99144 / _100000
    const sdx2 = iwd2 * _92388 / _100000
    const sdx3 = iwd2 * _79335 / _100000
    const sdx4 = iwd2 * _60876 / _100000
    const sdx5 = iwd2 * _38268 / _100000
    const sdx6 = iwd2 * _13053 / _100000
    const sdy1 = ihd2 * _99144 / _100000
    const sdy2 = ihd2 * _92388 / _100000
    const sdy3 = ihd2 * _79335 / _100000
    const sdy4 = ihd2 * _60876 / _100000
    const sdy5 = ihd2 * _38268 / _100000
    const sdy6 = ihd2 * _13053 / _100000
    const sx1 = hc + _0 - sdx1
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + _0 - sdx3
    const sx4 = hc + _0 - sdx4
    const sx5 = hc + _0 - sdx5
    const sx6 = hc + _0 - sdx6
    const sx7 = hc + sdx6 - _0
    const sx8 = hc + sdx5 - _0
    const sx9 = hc + sdx4 - _0
    const sx10 = hc + sdx3 - _0
    const sx11 = hc + sdx2 - _0
    const sx12 = hc + sdx1 - _0
    const sy1 = vc + _0 - sdy1
    const sy2 = vc + _0 - sdy2
    const sy3 = vc + _0 - sdy3
    const sy4 = vc + _0 - sdy4
    const sy5 = vc + _0 - sdy5
    const sy6 = vc + _0 - sdy6
    const sy7 = vc + sdy6 - _0
    const sy8 = vc + sdy5 - _0
    const sy9 = vc + sdy4 - _0
    const sy10 = vc + sdy3 - _0
    const sy11 = vc + sdy2 - _0
    const sy12 = vc + sdy1 - _0
    const idx = max(iwd2, _2700000)
    const idy = ihd2 * sin(_2700000)
    const il = hc + _0 - idx
    const it = vc + _0 - idy
    const ir = hc + idx - _0
    const ib = vc + idy - _0
    const yAdj = vc + _0 - ihd2
    return [`M${l},${vc}L${sx1},${sy6}L${x1},${y5}L${sx2},${sy5}L${x2},${y4}L${sx3},${sy4}L${x3},${y3}L${sx4},${sy3}L${x4},${y2}L${sx5},${sy2}L${x5},${y1}L${sx6},${sy1}L${hc},${t}L${sx7},${sy1}L${x6},${y1}L${sx8},${sy2}L${x7},${y2}L${sx9},${sy3}L${x8},${y3}L${sx10},${sy4}L${x9},${y4}L${sx11},${sy5}L${x10},${y5}L${sx12},${sy6}L${r},${vc}L${sx12},${sy7}L${x10},${y6}L${sx11},${sy8}L${x9},${y7}L${sx10},${sy9}L${x8},${y8}L${sx9},${sy10}L${x7},${y9}L${sx8},${sy11}L${x6},${y10}L${sx7},${sy12}L${hc},${b}L${sx6},${sy12}L${x5},${y10}L${sx5},${sy11}L${x4},${y9}L${sx4},${sy10}L${x3},${y8}L${sx3},${sy9}L${x2},${y7}L${sx2},${sy8}L${x1},${y6}L${sx1},${sy7}Z`]
}
export function star32(w, h, l, r, t, b, adj) {
    adj = adj || _37500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dx1 = wd2 * _98079 / _100000
    const dx2 = wd2 * _92388 / _100000
    const dx3 = wd2 * _83147 / _100000
    const dx4 = max(wd2, _2700000)
    const dx5 = wd2 * _55557 / _100000
    const dx6 = wd2 * _38268 / _100000
    const dx7 = wd2 * _19509 / _100000
    const dy1 = hd2 * _98079 / _100000
    const dy2 = hd2 * _92388 / _100000
    const dy3 = hd2 * _83147 / _100000
    const dy4 = hd2 * sin(_2700000)
    const dy5 = hd2 * _55557 / _100000
    const dy6 = hd2 * _38268 / _100000
    const dy7 = hd2 * _19509 / _100000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + _0 - dx3
    const x4 = hc + _0 - dx4
    const x5 = hc + _0 - dx5
    const x6 = hc + _0 - dx6
    const x7 = hc + _0 - dx7
    const x8 = hc + dx7 - _0
    const x9 = hc + dx6 - _0
    const x10 = hc + dx5 - _0
    const x11 = hc + dx4 - _0
    const x12 = hc + dx3 - _0
    const x13 = hc + dx2 - _0
    const x14 = hc + dx1 - _0
    const y1 = vc + _0 - dy1
    const y2 = vc + _0 - dy2
    const y3 = vc + _0 - dy3
    const y4 = vc + _0 - dy4
    const y5 = vc + _0 - dy5
    const y6 = vc + _0 - dy6
    const y7 = vc + _0 - dy7
    const y8 = vc + dy7 - _0
    const y9 = vc + dy6 - _0
    const y10 = vc + dy5 - _0
    const y11 = vc + dy4 - _0
    const y12 = vc + dy3 - _0
    const y13 = vc + dy2 - _0
    const y14 = vc + dy1 - _0
    const iwd2 = wd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx1 = iwd2 * _99518 / _100000
    const sdx2 = iwd2 * _95694 / _100000
    const sdx3 = iwd2 * _88192 / _100000
    const sdx4 = iwd2 * _77301 / _100000
    const sdx5 = iwd2 * _63439 / _100000
    const sdx6 = iwd2 * _47140 / _100000
    const sdx7 = iwd2 * _29028 / _100000
    const sdx8 = iwd2 * _9802 / _100000
    const sdy1 = ihd2 * _99518 / _100000
    const sdy2 = ihd2 * _95694 / _100000
    const sdy3 = ihd2 * _88192 / _100000
    const sdy4 = ihd2 * _77301 / _100000
    const sdy5 = ihd2 * _63439 / _100000
    const sdy6 = ihd2 * _47140 / _100000
    const sdy7 = ihd2 * _29028 / _100000
    const sdy8 = ihd2 * _9802 / _100000
    const sx1 = hc + _0 - sdx1
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + _0 - sdx3
    const sx4 = hc + _0 - sdx4
    const sx5 = hc + _0 - sdx5
    const sx6 = hc + _0 - sdx6
    const sx7 = hc + _0 - sdx7
    const sx8 = hc + _0 - sdx8
    const sx9 = hc + sdx8 - _0
    const sx10 = hc + sdx7 - _0
    const sx11 = hc + sdx6 - _0
    const sx12 = hc + sdx5 - _0
    const sx13 = hc + sdx4 - _0
    const sx14 = hc + sdx3 - _0
    const sx15 = hc + sdx2 - _0
    const sx16 = hc + sdx1 - _0
    const sy1 = vc + _0 - sdy1
    const sy2 = vc + _0 - sdy2
    const sy3 = vc + _0 - sdy3
    const sy4 = vc + _0 - sdy4
    const sy5 = vc + _0 - sdy5
    const sy6 = vc + _0 - sdy6
    const sy7 = vc + _0 - sdy7
    const sy8 = vc + _0 - sdy8
    const sy9 = vc + sdy8 - _0
    const sy10 = vc + sdy7 - _0
    const sy11 = vc + sdy6 - _0
    const sy12 = vc + sdy5 - _0
    const sy13 = vc + sdy4 - _0
    const sy14 = vc + sdy3 - _0
    const sy15 = vc + sdy2 - _0
    const sy16 = vc + sdy1 - _0
    const idx = max(iwd2, _2700000)
    const idy = ihd2 * sin(_2700000)
    const il = hc + _0 - idx
    const it = vc + _0 - idy
    const ir = hc + idx - _0
    const ib = vc + idy - _0
    const yAdj = vc + _0 - ihd2
    return [`M${l},${vc}L${sx1},${sy8}L${x1},${y7}L${sx2},${sy7}L${x2},${y6}L${sx3},${sy6}L${x3},${y5}L${sx4},${sy5}L${x4},${y4}L${sx5},${sy4}L${x5},${y3}L${sx6},${sy3}L${x6},${y2}L${sx7},${sy2}L${x7},${y1}L${sx8},${sy1}L${hc},${t}L${sx9},${sy1}L${x8},${y1}L${sx10},${sy2}L${x9},${y2}L${sx11},${sy3}L${x10},${y3}L${sx12},${sy4}L${x11},${y4}L${sx13},${sy5}L${x12},${y5}L${sx14},${sy6}L${x13},${y6}L${sx15},${sy7}L${x14},${y7}L${sx16},${sy8}L${r},${vc}L${sx16},${sy9}L${x14},${y8}L${sx15},${sy10}L${x13},${y9}L${sx14},${sy11}L${x12},${y10}L${sx13},${sy12}L${x11},${y11}L${sx12},${sy13}L${x10},${y12}L${sx11},${sy14}L${x9},${y13}L${sx10},${sy15}L${x8},${y14}L${sx9},${sy16}L${hc},${b}L${sx8},${sy16}L${x7},${y14}L${sx7},${sy15}L${x6},${y13}L${sx6},${sy14}L${x5},${y12}L${sx5},${sy13}L${x4},${y11}L${sx4},${sy12}L${x3},${y10}L${sx3},${sy11}L${x2},${y9}L${sx2},${sy10}L${x1},${y8}L${sx1},${sy9}Z`]
}
export function star4(w, h, l, r, t, b, adj) {
    adj = adj || _12500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const iwd2 = wd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx = max(iwd2, _2700000)
    const sdy = ihd2 * sin(_2700000)
    const sx1 = hc + _0 - sdx
    const sx2 = hc + sdx - _0
    const sy1 = vc + _0 - sdy
    const sy2 = vc + sdy - _0
    const yAdj = vc + _0 - ihd2
    return [`M${l},${vc}L${sx1},${sy1}L${hc},${t}L${sx2},${sy1}L${r},${vc}L${sx2},${sy2}L${hc},${b}L${sx1},${sy2}Z`]
}
export function star5(w, h, l, r, t, b, adj) {
    adj = adj || _19098
    hf = hf || _105146
    vf = vf || _110557

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const swd2 = wd2 * hf / _100000
    const shd2 = hd2 * vf / _100000
    const svc = vc * / vf
    const dx1 = max(swd2, _1080000)
    const dx2 = max(swd2, _18360000)
    const dy1 = shd2 * sin(_1080000)
    const dy2 = shd2 * sin(_18360000)
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const y1 = svc + _0 - dy1
    const y2 = svc + _0 - dy2
    const iwd2 = swd2 * a / _50000
    const ihd2 = shd2 * a / _50000
    const sdx1 = max(iwd2, _20520000)
    const sdx2 = max(iwd2, _3240000)
    const sdy1 = ihd2 * sin(_3240000)
    const sdy2 = ihd2 * sin(_20520000)
    const sx1 = hc + _0 - sdx1
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + sdx2 - _0
    const sx4 = hc + sdx1 - _0
    const sy1 = svc + _0 - sdy1
    const sy2 = svc + _0 - sdy2
    const sy3 = svc + ihd2 - _0
    const yAdj = svc + _0 - ihd2
    return [`M${x1},${y1}L${sx2},${sy1}L${hc},${t}L${sx3},${sy1}L${x4},${y1}L${sx4},${sy2}L${x3},${y2}L${hc},${sy3}L${x2},${y2}L${sx1},${sy2}Z`]
}
export function star6(w, h, l, r, t, b, adj) {
    adj = adj || _28868
    hf = hf || _115470

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const swd2 = wd2 * hf / _100000
    const dx1 = max(swd2, _1800000)
    const x1 = hc + _0 - dx1
    const x2 = hc + dx1 - _0
    const y2 = vc + hd4 - _0
    const iwd2 = swd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx2 = iwd2 * _1 / _2
    const sx1 = hc + _0 - iwd2
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + sdx2 - _0
    const sx4 = hc + iwd2 - _0
    const sdy1 = ihd2 * sin(_3600000)
    const sy1 = vc + _0 - sdy1
    const sy2 = vc + sdy1 - _0
    const yAdj = vc + _0 - ihd2
    return [`M${x1},${hd4}L${sx2},${sy1}L${hc},${t}L${sx3},${sy1}L${x2},${hd4}L${sx4},${vc}L${x2},${y2}L${sx3},${sy2}L${hc},${b}L${sx2},${sy2}L${x1},${y2}L${sx1},${vc}Z`]
}
export function star7(w, h, l, r, t, b, adj) {
    adj = adj || _34601
    hf = hf || _102572
    vf = vf || _105210

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const swd2 = wd2 * hf / _100000
    const shd2 = hd2 * vf / _100000
    const svc = vc * / vf
    const dx1 = swd2 * _97493 / _100000
    const dx2 = swd2 * _78183 / _100000
    const dx3 = swd2 * _43388 / _100000
    const dy1 = shd2 * _62349 / _100000
    const dy2 = shd2 * _22252 / _100000
    const dy3 = shd2 * _90097 / _100000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + _0 - dx3
    const x4 = hc + dx3 - _0
    const x5 = hc + dx2 - _0
    const x6 = hc + dx1 - _0
    const y1 = svc + _0 - dy1
    const y2 = svc + dy2 - _0
    const y3 = svc + dy3 - _0
    const iwd2 = swd2 * a / _50000
    const ihd2 = shd2 * a / _50000
    const sdx1 = iwd2 * _97493 / _100000
    const sdx2 = iwd2 * _78183 / _100000
    const sdx3 = iwd2 * _43388 / _100000
    const sx1 = hc + _0 - sdx1
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + _0 - sdx3
    const sx4 = hc + sdx3 - _0
    const sx5 = hc + sdx2 - _0
    const sx6 = hc + sdx1 - _0
    const sdy1 = ihd2 * _90097 / _100000
    const sdy2 = ihd2 * _22252 / _100000
    const sdy3 = ihd2 * _62349 / _100000
    const sy1 = svc + _0 - sdy1
    const sy2 = svc + _0 - sdy2
    const sy3 = svc + sdy3 - _0
    const sy4 = svc + ihd2 - _0
    const yAdj = svc + _0 - ihd2
    return [`M${x1},${y2}L${sx1},${sy2}L${x2},${y1}L${sx3},${sy1}L${hc},${t}L${sx4},${sy1}L${x5},${y1}L${sx6},${sy2}L${x6},${y2}L${sx5},${sy3}L${x4},${y3}L${hc},${sy4}L${x3},${y3}L${sx2},${sy3}Z`]
}
export function star8(w, h, l, r, t, b, adj) {
    adj = adj || _37500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _50000 ? _50000 : adj)
    const dx1 = max(wd2, _2700000)
    const x1 = hc + _0 - dx1
    const x2 = hc + dx1 - _0
    const dy1 = hd2 * sin(_2700000)
    const y1 = vc + _0 - dy1
    const y2 = vc + dy1 - _0
    const iwd2 = wd2 * a / _50000
    const ihd2 = hd2 * a / _50000
    const sdx1 = iwd2 * _92388 / _100000
    const sdx2 = iwd2 * _38268 / _100000
    const sdy1 = ihd2 * _92388 / _100000
    const sdy2 = ihd2 * _38268 / _100000
    const sx1 = hc + _0 - sdx1
    const sx2 = hc + _0 - sdx2
    const sx3 = hc + sdx2 - _0
    const sx4 = hc + sdx1 - _0
    const sy1 = vc + _0 - sdy1
    const sy2 = vc + _0 - sdy2
    const sy3 = vc + sdy2 - _0
    const sy4 = vc + sdy1 - _0
    const yAdj = vc + _0 - ihd2
    return [`M${l},${vc}L${sx1},${sy2}L${x1},${y1}L${sx2},${sy1}L${hc},${t}L${sx3},${sy1}L${x2},${y1}L${sx4},${sy2}L${r},${vc}L${sx4},${sy3}L${x2},${y2}L${sx3},${sy4}L${hc},${b}L${sx2},${sy4}L${x1},${y2}L${sx1},${sy3}Z`]
}
export function straightConnector1(w, h, l, r, t, b, ) {
    // no guides
    return [`M${l},${t}L${r},${b}`]
}
export function stripedRightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _84375 * w / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const x4 = ss * _5 / _32
    const dx5 = ss * a2 / _100000
    const x5 = r + _0 - dx5
    const dy1 = h * a1 / _200000
    const y1 = vc + _0 - dy1
    const y2 = vc + dy1 - _0
    const dx6 = dy1 * dx5 / hd2
    const x6 = r + _0 - dx6
    return [`M${l},${y1}L${ssd32},${y1}L${ssd32},${y2}L${l},${y2}ZM${ssd16},${y1}L${ssd8},${y1}L${ssd8},${y2}L${ssd16},${y2}ZM${x4},${y1}L${x5},${y1}L${x5},${t}L${r},${vc}L${x5},${b}L${x5},${y2}L${x4},${y2}Z`]
}
export function sun(w, h, l, r, t, b, adj) {
    adj = adj || _25000

    const ss = w < h ? w : h
    const a = adj < _12500 ? _12500 : (adj > _46875 ? _46875 : adj)
    const g0 = _50000 + _0 - a
    const g1 = g0 * _30274 / _32768
    const g2 = g0 * _12540 / _32768
    const g3 = g1 + _50000 - _0
    const g4 = g2 + _50000 - _0
    const g5 = _50000 + _0 - g1
    const g6 = _50000 + _0 - g2
    const g7 = g0 * _23170 / _32768
    const g8 = _50000 + g7 - _0
    const g9 = _50000 + _0 - g7
    const g10 = g5 * _3 / _4
    const g11 = g6 * _3 / _4
    const g12 = g10 + _3662 - _0
    const g13 = g11 + _3662 - _0
    const g14 = g11 + _12500 - _0
    const g15 = _100000 + _0 - g10
    const g16 = _100000 + _0 - g12
    const g17 = _100000 + _0 - g13
    const g18 = _100000 + _0 - g14
    const ox1 = w * _18436 / _21600
    const oy1 = h * _3163 / _21600
    const ox2 = w * _3163 / _21600
    const oy2 = h * _18436 / _21600
    const x8 = w * g8 / _100000
    const x9 = w * g9 / _100000
    const x10 = w * g10 / _100000
    const x12 = w * g12 / _100000
    const x13 = w * g13 / _100000
    const x14 = w * g14 / _100000
    const x15 = w * g15 / _100000
    const x16 = w * g16 / _100000
    const x17 = w * g17 / _100000
    const x18 = w * g18 / _100000
    const x19 = w * a / _100000
    const wR = w * g0 / _100000
    const hR = h * g0 / _100000
    const y8 = h * g8 / _100000
    const y9 = h * g9 / _100000
    const y10 = h * g10 / _100000
    const y12 = h * g12 / _100000
    const y13 = h * g13 / _100000
    const y14 = h * g14 / _100000
    const y15 = h * g15 / _100000
    const y16 = h * g16 / _100000
    const y17 = h * g17 / _100000
    const y18 = h * g18 / _100000
    return [`M${r},${vc}L${x15},${y18}L${x15},${y14}ZM${ox1},${oy1}L${x16},${y13}L${x17},${y12}ZM${hc},${t}L${x18},${y10}L${x14},${y10}ZM${ox2},${oy1}L${x13},${y12}L${x12},${y13}ZM${l},${vc}L${x10},${y14}L${x10},${y18}ZM${ox2},${oy2}L${x12},${y17}L${x13},${y16}ZM${hc},${b}L${x14},${y15}L${x18},${y15}ZM${ox1},${oy2}L${x17},${y16}L${x16},${y17}ZM${x19},${vc}A${wR},${hR},0,0,1,${},${}Z`]
}
export function swooshArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _16667

    const ss = w < h ? w : h
    const a1 = adj1 < _1 ? _1 : (adj1 > _75000 ? _75000 : adj1)
    const maxAdj2 = _70000 * w / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const ad1 = h * a1 / _100000
    const ad2 = ss * a2 / _100000
    const xB = r + _0 - ad2
    const yB = t + ssd8 - _0
    const alfa = cd4 * _1 / _14
    const dx0 = ssd8 * tan(alfa)
    const xC = xB + _0 - dx0
    const dx1 = ad1 * tan(alfa)
    const yF = yB + ad1 - _0
    const xF = xB + dx1 - _0
    const xE = xF + dx0 - _0
    const yE = yF + ssd8 - _0
    const dy2 = yE + _0 - t
    const dy22 = dy2 * _1 / _2
    const dy3 = h * _1 / _20
    const yD = t + dy22 - dy3
    const dy4 = hd6 * _1 / _1
    const yP1 = hd6 + dy4 - _0
    const xP1 = wd6
    const dy5 = hd6 * _1 / _2
    const yP2 = yF + dy5 - _0
    const xP2 = wd4
    return [`M${l},${b}ZL${xC},${t}L${r},${yD}L${xE},${yE}L${xF},${yF}ZZ`]
}
export function teardrop(w, h, l, r, t, b, adj) {
    adj = adj || _100000

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _200000 ? _200000 : adj)
    const r2 = sqrt(_2)
    const tw = wd2 * r2 / _1
    const th = hd2 * r2 / _1
    const sw = tw * a / _100000
    const sh = th * a / _100000
    const dx1 = max(sw, _2700000)
    const dy1 = sh * sin(_2700000)
    const x1 = hc + dx1 - _0
    const y1 = vc + _0 - dy1
    const x2 = hc + x1 / _2
    const y2 = vc + y1 / _2
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${l},${vc}A${wd2},${hd2},0,0,1,${},${}ZZA${wd2},${hd2},0,0,1,${},${}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function trapezoid(w, h, l, r, t, b, adj) {
    adj = adj || _25000

    const ss = w < h ? w : h
    const maxAdj = _50000 * w / ss
    const a = adj < _0 ? _0 : (adj > maxAdj ? maxAdj : adj)
    const x1 = ss * a / _200000
    const x2 = ss * a / _100000
    const x3 = r + _0 - x2
    const x4 = r + _0 - x1
    const il = wd3 * a / maxAdj
    const it = hd3 * a / maxAdj
    const ir = r + _0 - il
    return [`M${l},${b}L${x2},${t}L${x3},${t}L${r},${b}Z`]
}
export function triangle(w, h, l, r, t, b, adj) {
    adj = adj || _50000

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _100000 ? _100000 : adj)
    const x1 = w * a / _200000
    const x2 = w * a / _100000
    const x3 = x1 + wd2 - _0
    return [`M${l},${b}L${x2},${t}L${r},${b}Z`]
}
export function upArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _64977

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * w / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _100000 * h / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q2 = a3 * ss / h
    const maxAdj4 = _100000 + _0 - q2
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const dx1 = ss * a2 / _100000
    const dx2 = ss * a1 / _200000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const y1 = ss * a3 / _100000
    const dy2 = h * a4 / _100000
    const y2 = b + _0 - dy2
    const y3 = y2 + b / _2
    return [`M${l},${y2}L${x2},${y2}L${x2},${y1}L${x1},${y1}L${hc},${t}L${x4},${y1}L${x3},${y1}L${x3},${y2}L${r},${y2}L${r},${b}L${l},${b}Z`]
}
export function upDownArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * h / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const y2 = ss * a2 / _100000
    const y3 = b + _0 - y2
    const dx1 = w * a1 / _200000
    const x1 = hc + _0 - dx1
    const x2 = hc + dx1 - _0
    const dy1 = x1 * y2 / wd2
    const y1 = y2 + _0 - dy1
    const y4 = y3 + dy1 - _0
    return [`M${l},${y2}L${hc},${t}L${r},${y2}L${x2},${y2}L${x2},${y3}L${r},${y3}L${hc},${b}L${l},${y3}L${x1},${y3}L${x1},${y2}Z`]
}
export function upDownArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _50000
    adj2 = adj2 || _50000

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * h / ss
    const a1 = adj1 < _0 ? _0 : (adj1 > _100000 ? _100000 : adj1)
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const y2 = ss * a2 / _100000
    const y3 = b + _0 - y2
    const dx1 = w * a1 / _200000
    const x1 = hc + _0 - dx1
    const x2 = hc + dx1 - _0
    const dy1 = x1 * y2 / wd2
    const y1 = y2 + _0 - dy1
    const y4 = y3 + dy1 - _0
    return [`M${l},${y2}L${hc},${t}L${r},${y2}L${x2},${y2}L${x2},${y3}L${r},${y3}L${hc},${b}L${l},${y3}L${x1},${y3}L${x1},${y2}Z`]
}
export function upDownArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _48123

    const ss = w < h ? w : h
    const maxAdj2 = _50000 * w / ss
    const a2 = adj2 < _0 ? _0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const maxAdj3 = _50000 * h / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q2 = a3 * ss / hd2
    const maxAdj4 = _100000 + _0 - q2
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const dx1 = ss * a2 / _100000
    const dx2 = ss * a1 / _200000
    const x1 = hc + _0 - dx1
    const x2 = hc + _0 - dx2
    const x3 = hc + dx2 - _0
    const x4 = hc + dx1 - _0
    const y1 = ss * a3 / _100000
    const y4 = b + _0 - y1
    const dy2 = h * a4 / _200000
    const y2 = vc + _0 - dy2
    const y3 = vc + dy2 - _0
    return [`M${l},${y2}L${x2},${y2}L${x2},${y1}L${x1},${y1}L${hc},${t}L${x4},${y1}L${x3},${y1}L${x3},${y2}L${r},${y2}L${r},${y3}L${x3},${y3}L${x3},${y4}L${x4},${y4}L${hc},${b}L${x1},${y4}L${x2},${y4}L${x2},${y3}L${l},${y3}Z`]
}
export function uturnArrow(w, h, l, r, t, b, adj1, adj2, adj3, adj4, adj5) {
    adj1 = adj1 || _25000
    adj2 = adj2 || _25000
    adj3 = adj3 || _25000
    adj4 = adj4 || _43750
    adj5 = adj5 || _75000

    const ss = w < h ? w : h
    const a2 = adj2 < _0 ? _0 : (adj2 > _25000 ? _25000 : adj2)
    const maxAdj1 = a2 * _2 / _1
    const a1 = adj1 < _0 ? _0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    const q2 = a1 * ss / h
    const q3 = _100000 + _0 - q2
    const maxAdj3 = q3 * h / ss
    const a3 = adj3 < _0 ? _0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    const q1 = a3 + a1 - _0
    const minAdj5 = q1 * ss / h
    const a5 = adj5 < minAdj5 ? minAdj5 : (adj5 > _100000 ? _100000 : adj5)
    const th = ss * a1 / _100000
    const aw2 = ss * a2 / _100000
    const th2 = th * _1 / _2
    const dh2 = aw2 + _0 - th2
    const y5 = h * a5 / _100000
    const ah = ss * a3 / _100000
    const y4 = y5 + _0 - ah
    const x9 = r + _0 - dh2
    const bw = x9 * _1 / _2
    const bs = min(bw, y4)
    const maxAdj4 = bs * _100000 / ss
    const a4 = adj4 < _0 ? _0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    const bd = ss * a4 / _100000
    const bd3 = bd + _0 - th
    const bd2 = max(bd3, _0)
    const x3 = th + bd2 - _0
    const x8 = r + _0 - aw2
    const x6 = x8 + _0 - aw2
    const x7 = x6 + dh2 - _0
    const x4 = x9 + _0 - bd
    const x5 = x7 + _0 - bd2
    const cx = th + x7 / _2
    return [`M${l},${b}L${l},${bd}A${bd},${bd},0,0,1,${},${}L${x4},${t}A${bd},${bd},0,0,1,${},${}L${x9},${y4}L${r},${y4}L${x8},${y5}L${x6},${y4}L${x7},${y4}L${x7},${x3}A${bd2},${bd2},0,0,1,${},${}L${x3},${th}A${bd2},${bd2},0,0,1,${},${}L${th},${b}Z`]
}
export function verticalScroll(w, h, l, r, t, b, adj) {
    adj = adj || _12500

    const ss = w < h ? w : h
    const a = adj < _0 ? _0 : (adj > _25000 ? _25000 : adj)
    const ch = ss * a / _100000
    const ch2 = ch * _1 / _2
    const ch4 = ch * _1 / _4
    const x3 = ch + ch2 - _0
    const x4 = ch + ch - _0
    const x6 = r + _0 - ch
    const x7 = r + _0 - ch2
    const x5 = x6 + _0 - ch2
    const y3 = b + _0 - ch
    const y4 = b + _0 - ch2
    return [`M${ch2},${b}A${ch2},${ch2},0,0,1,${},${}L${ch2},${y4}A${ch4},${ch4},0,0,1,${},${}L${ch},${y3}L${ch},${ch2}A${ch2},${ch2},0,0,1,${},${}L${x7},${t}A${ch2},${ch2},0,0,1,${},${}L${x6},${ch}L${x6},${y4}A${ch2},${ch2},0,0,1,${},${}ZM${x4},${ch2}A${ch2},${ch2},0,0,1,${},${}A${ch4},${ch4},0,0,1,${},${}Z`, `M${x4},${ch2}A${ch2},${ch2},0,0,1,${},${}A${ch4},${ch4},0,0,1,${},${}ZM${ch},${y4}A${ch2},${ch2},0,0,1,${},${}A${ch4},${ch4},0,0,1,${},${}Z`, `M${ch},${y3}L${ch},${ch2}A${ch2},${ch2},0,0,1,${},${}L${x7},${t}A${ch2},${ch2},0,0,1,${},${}L${x6},${ch}L${x6},${y4}A${ch2},${ch2},0,0,1,${},${}L${ch2},${b}A${ch2},${ch2},0,0,1,${},${}ZM${x3},${t}A${ch2},${ch2},0,0,1,${},${}A${ch4},${ch4},0,0,1,${},${}L${x4},${ch2}M${x6},${ch}L${x3},${ch}M${ch2},${y3}A${ch4},${ch4},0,0,1,${},${}L${ch},${y4}M${ch2},${b}A${ch2},${ch2},0,0,1,${},${}L${ch},${y3}`]
}
export function wave(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || _12500
    adj2 = adj2 || _0

    const ss = w < h ? w : h
    const a1 = adj1 < _0 ? _0 : (adj1 > _20000 ? _20000 : adj1)
    const a2 = adj2 < -10000 ? -10000 : (adj2 > _10000 ? _10000 : adj2)
    const y1 = h * a1 / _100000
    const dy2 = y1 * _10 / _3
    const y2 = y1 + _0 - dy2
    const y3 = y1 + dy2 - _0
    const y4 = b + _0 - y1
    const y5 = y4 + _0 - dy2
    const y6 = y4 + dy2 - _0
    const dx1 = w * a2 / _100000
    const of2 = w * a2 / _50000
    const x1 = abs(dx1)
    const dx2 = of2 > 0 ? _0 : of2
    const x2 = l + _0 - dx2
    const dx5 = of2 > 0 ? of2 : _0
    const x5 = r + _0 - dx5
    const dx3 = dx2 + x5 / _3
    const x3 = x2 + dx3 - _0
    const x4 = x3 + x5 / _2
    const x6 = l + dx5 - _0
    const x10 = r + dx2 - _0
    const x7 = x6 + dx3 - _0
    const x8 = x7 + x10 / _2
    const x9 = r + _0 - x1
    const xAdj = hc + dx1 - _0
    const xAdj2 = hc + _0 - dx1
    const il = max(x2, x6)
    const ir = min(x5, x10)
    const it = h * a1 / _50000
    const ib = b + _0 - it
    return [`M${x2},${y1}ZL${x10},${y4}ZZ`]
}
export function wedgeEllipseCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || _62500

    const ss = w < h ? w : h
    const dxPos = w * adj1 / _100000
    const dyPos = h * adj2 / _100000
    const xPos = hc + dxPos - _0
    const yPos = vc + dyPos - _0
    const sdx = dxPos * h / _1
    const sdy = dyPos * w / _1
    const pang = atan2(sdx, sdy)
    const stAng = pang + _660000 - _0
    const enAng = pang + _0 - _660000
    const dx1 = max(wd2, stAng)
    const dy1 = hd2 * sin(stAng)
    const x1 = hc + dx1 - _0
    const y1 = vc + dy1 - _0
    const dx2 = max(wd2, enAng)
    const dy2 = hd2 * sin(enAng)
    const x2 = hc + dx2 - _0
    const y2 = vc + dy2 - _0
    const stAng1 = atan2(dx1, dy1)
    const enAng1 = atan2(dx2, dy2)
    const swAng1 = enAng1 + _0 - stAng1
    const swAng2 = swAng1 + _21600000 - _0
    const swAng = swAng1 > 0 ? swAng1 : swAng2
    const idx = max(wd2, _2700000)
    const idy = hd2 * sin(_2700000)
    const il = hc + _0 - idx
    const ir = hc + idx - _0
    const it = vc + _0 - idy
    const ib = vc + idy - _0
    return [`M${xPos},${yPos}L${x1},${y1}A${wd2},${hd2},0,0,1,${},${}Z`]
}
export function wedgeRectCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || _62500

    const ss = w < h ? w : h
    const dxPos = w * adj1 / _100000
    const dyPos = h * adj2 / _100000
    const xPos = hc + dxPos - _0
    const yPos = vc + dyPos - _0
    const dx = xPos + _0 - hc
    const dy = yPos + _0 - vc
    const dq = dxPos * h / w
    const ady = abs(dyPos)
    const adq = abs(dq)
    const dz = ady + _0 - adq
    const xg1 = dxPos > 0 ? _7 : _2
    const xg2 = dxPos > 0 ? _10 : _5
    const x1 = w * xg1 / _12
    const x2 = w * xg2 / _12
    const yg1 = dyPos > 0 ? _7 : _2
    const yg2 = dyPos > 0 ? _10 : _5
    const y1 = h * yg1 / _12
    const y2 = h * yg2 / _12
    const t1 = dxPos > 0 ? l : xPos
    const xl = dz > 0 ? l : t1
    const t2 = dyPos > 0 ? x1 : xPos
    const xt = dz > 0 ? t2 : x1
    const t3 = dxPos > 0 ? xPos : r
    const xr = dz > 0 ? r : t3
    const t4 = dyPos > 0 ? xPos : x1
    const xb = dz > 0 ? t4 : x1
    const t5 = dxPos > 0 ? y1 : yPos
    const yl = dz > 0 ? y1 : t5
    const t6 = dyPos > 0 ? t : yPos
    const yt = dz > 0 ? t6 : t
    const t7 = dxPos > 0 ? yPos : y1
    const yr = dz > 0 ? y1 : t7
    const t8 = dyPos > 0 ? yPos : b
    const yb = dz > 0 ? t8 : b
    return [`M${l},${t}L${x1},${t}L${xt},${yt}L${x2},${t}L${r},${t}L${r},${y1}L${xr},${yr}L${r},${y2}L${r},${b}L${x2},${b}L${xb},${yb}L${x1},${b}L${l},${b}L${l},${y2}L${xl},${yl}L${l},${y1}Z`]
}
export function wedgeRoundRectCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || _62500
    adj3 = adj3 || _16667

    const ss = w < h ? w : h
    const dxPos = w * adj1 / _100000
    const dyPos = h * adj2 / _100000
    const xPos = hc + dxPos - _0
    const yPos = vc + dyPos - _0
    const dq = dxPos * h / w
    const ady = abs(dyPos)
    const adq = abs(dq)
    const dz = ady + _0 - adq
    const xg1 = dxPos > 0 ? _7 : _2
    const xg2 = dxPos > 0 ? _10 : _5
    const x1 = w * xg1 / _12
    const x2 = w * xg2 / _12
    const yg1 = dyPos > 0 ? _7 : _2
    const yg2 = dyPos > 0 ? _10 : _5
    const y1 = h * yg1 / _12
    const y2 = h * yg2 / _12
    const t1 = dxPos > 0 ? l : xPos
    const xl = dz > 0 ? l : t1
    const t2 = dyPos > 0 ? x1 : xPos
    const xt = dz > 0 ? t2 : x1
    const t3 = dxPos > 0 ? xPos : r
    const xr = dz > 0 ? r : t3
    const t4 = dyPos > 0 ? xPos : x1
    const xb = dz > 0 ? t4 : x1
    const t5 = dxPos > 0 ? y1 : yPos
    const yl = dz > 0 ? y1 : t5
    const t6 = dyPos > 0 ? t : yPos
    const yt = dz > 0 ? t6 : t
    const t7 = dxPos > 0 ? yPos : y1
    const yr = dz > 0 ? y1 : t7
    const t8 = dyPos > 0 ? yPos : b
    const yb = dz > 0 ? t8 : b
    const u1 = ss * adj3 / _100000
    const u2 = r + _0 - u1
    const v2 = b + _0 - u1
    const il = u1 * _29289 / _100000
    const ir = r + _0 - il
    const ib = b + _0 - il
    return [`M${l},${u1}A${u1},${u1},0,0,1,${},${}L${x1},${t}L${xt},${yt}L${x2},${t}L${u2},${t}A${u1},${u1},0,0,1,${},${}L${r},${y1}L${xr},${yr}L${r},${y2}L${r},${v2}A${u1},${u1},0,0,1,${},${}L${x2},${b}L${xb},${yb}L${x1},${b}L${u1},${b}A${u1},${u1},0,0,1,${},${}L${l},${y2}L${xl},${yl}L${l},${y1}Z`]
}