function accentBorderCallout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 112500
    adj4 = adj4 || -38333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}`]
}

function accentBorderCallout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 112500
    adj6 = adj6 || -46667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}

function accentBorderCallout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 100000
    adj6 = adj6 || -16667
    adj7 = adj7 || 112963
    adj8 = adj8 || -8333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    var y4 = h * adj7 / 100000
    var x4 = w * adj8 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}

function accentCallout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 112500
    adj4 = adj4 || -38333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}`]
}

function accentCallout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 112500
    adj6 = adj6 || -46667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}

function accentCallout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 100000
    adj6 = adj6 || -16667
    adj7 = adj7 || 112963
    adj8 = adj8 || -8333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    var y4 = h * adj7 / 100000
    var x4 = w * adj8 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${t}ZL${x1},${b}`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}

function actionButtonBackPrevious(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${vc}L${g12},${g9}L${g12},${g10}Z`, `M${g11},${vc}L${g12},${g9}L${g12},${g10}Z`, `M${g11},${vc}L${g12},${g9}L${g12},${g10}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonBeginning(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    var g13 = ss * 3 / 4
    var g14 = g13 * 1 / 8
    var g15 = g13 * 1 / 4
    var g16 = g11 + g14 - 0
    var g17 = g11 + g15 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g17},${vc}L${g12},${g9}L${g12},${g10}ZM${g16},${g9}L${g11},${g9}L${g11},${g10}L${g16},${g10}Z`, `M${g17},${vc}L${g12},${g9}L${g12},${g10}ZM${g16},${g9}L${g11},${g9}L${g11},${g10}L${g16},${g10}Z`, `M${g17},${vc}L${g12},${g9}L${g12},${g10}ZM${g16},${g9}L${g16},${g10}L${g11},${g10}L${g11},${g9}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonBlank(w, h, l, r, t, b, ) {

    // no guides
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonDocument(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var dx1 = ss * 9 / 32
    var g11 = hc + 0 - dx1
    var g12 = hc + dx1 - 0
    var g13 = ss * 3 / 16
    var g14 = g12 + 0 - g13
    var g15 = g9 + g13 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${g9}L${g14},${g9}L${g12},${g15}L${g12},${g10}L${g11},${g10}Z`, `M${g11},${g9}L${g14},${g9}L${g14},${g15}L${g12},${g15}L${g12},${g10}L${g11},${g10}Z`, `M${g14},${g9}L${g14},${g15}L${g12},${g15}Z`, `M${g11},${g9}L${g14},${g9}L${g12},${g15}L${g12},${g10}L${g11},${g10}ZM${g12},${g15}L${g14},${g15}L${g14},${g9}`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonEnd(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    var g13 = ss * 3 / 4
    var g14 = g13 * 3 / 4
    var g15 = g13 * 7 / 8
    var g16 = g11 + g14 - 0
    var g17 = g11 + g15 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g16},${vc}L${g11},${g9}L${g11},${g10}ZM${g17},${g9}L${g12},${g9}L${g12},${g10}L${g17},${g10}Z`, `M${g16},${vc}L${g11},${g9}L${g11},${g10}ZM${g17},${g9}L${g12},${g9}L${g12},${g10}L${g17},${g10}Z`, `M${g16},${vc}L${g11},${g10}L${g11},${g9}ZM${g17},${g9}L${g12},${g9}L${g12},${g10}L${g17},${g10}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonForwardNext(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g12},${vc}L${g11},${g9}L${g11},${g10}Z`, `M${g12},${vc}L${g11},${g9}L${g11},${g10}Z`, `M${g12},${vc}L${g11},${g10}L${g11},${g9}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonHelp(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g11 = hc + 0 - dx2
    var g13 = ss * 3 / 4
    var g14 = g13 * 1 / 7
    var g15 = g13 * 3 / 14
    var g16 = g13 * 2 / 7
    var g19 = g13 * 3 / 7
    var g20 = g13 * 4 / 7
    var g21 = g13 * 17 / 28
    var g23 = g13 * 21 / 28
    var g24 = g13 * 11 / 14
    var g27 = g9 + g16 - 0
    var g29 = g9 + g21 - 0
    var g30 = g9 + g23 - 0
    var g31 = g9 + g24 - 0
    var g33 = g11 + g15 - 0
    var g36 = g11 + g19 - 0
    var g37 = g11 + g20 - 0
    var g41 = g13 * 1 / 14
    var g42 = g13 * 3 / 28
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g33},${g27}L${g37},${g30}L${g36},${g30}L${g36},${g29}ZM${hc},${g31}Z`, `M${g33},${g27}L${g37},${g30}L${g36},${g30}L${g36},${g29}ZM${hc},${g31}Z`, `M${g33},${g27}L${g37},${g30}L${g36},${g30}L${g36},${g29}ZM${hc},${g31}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonHome(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    var g13 = ss * 3 / 4
    var g14 = g13 * 1 / 16
    var g15 = g13 * 1 / 8
    var g16 = g13 * 3 / 16
    var g17 = g13 * 5 / 16
    var g18 = g13 * 7 / 16
    var g19 = g13 * 9 / 16
    var g20 = g13 * 11 / 16
    var g21 = g13 * 3 / 4
    var g22 = g13 * 13 / 16
    var g23 = g13 * 7 / 8
    var g24 = g9 + g14 - 0
    var g25 = g9 + g16 - 0
    var g26 = g9 + g17 - 0
    var g27 = g9 + g21 - 0
    var g28 = g11 + g15 - 0
    var g29 = g11 + g18 - 0
    var g30 = g11 + g19 - 0
    var g31 = g11 + g20 - 0
    var g32 = g11 + g22 - 0
    var g33 = g11 + g23 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${hc},${g9}L${g11},${vc}L${g28},${vc}L${g28},${g10}L${g33},${g10}L${g33},${vc}L${g12},${vc}L${g32},${g26}L${g32},${g24}L${g31},${g24}L${g31},${g25}Z`, `M${g32},${g26}L${g32},${g24}L${g31},${g24}L${g31},${g25}ZM${g28},${vc}L${g28},${g10}L${g29},${g10}L${g29},${g27}L${g30},${g27}L${g30},${g10}L${g33},${g10}L${g33},${vc}Z`, `M${hc},${g9}L${g11},${vc}L${g12},${vc}ZM${g29},${g27}L${g30},${g27}L${g30},${g10}L${g29},${g10}Z`, `M${hc},${g9}L${g31},${g25}L${g31},${g24}L${g32},${g24}L${g32},${g26}L${g12},${vc}L${g33},${vc}L${g33},${g10}L${g28},${g10}L${g28},${vc}L${g11},${vc}ZM${g31},${g25}L${g32},${g26}M${g33},${vc}L${g28},${vc}M${g29},${g10}L${g29},${g27}L${g30},${g27}L${g30},${g10}`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonInformation(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g11 = hc + 0 - dx2
    var g13 = ss * 3 / 4
    var g14 = g13 * 1 / 32
    var g17 = g13 * 5 / 16
    var g18 = g13 * 3 / 8
    var g19 = g13 * 13 / 32
    var g20 = g13 * 19 / 32
    var g22 = g13 * 11 / 16
    var g23 = g13 * 13 / 16
    var g24 = g13 * 7 / 8
    var g25 = g9 + g14 - 0
    var g28 = g9 + g17 - 0
    var g29 = g9 + g18 - 0
    var g30 = g9 + g23 - 0
    var g31 = g9 + g24 - 0
    var g32 = g11 + g17 - 0
    var g34 = g11 + g19 - 0
    var g35 = g11 + g20 - 0
    var g37 = g11 + g22 - 0
    var g38 = g13 * 3 / 32
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${hc},${g9}Z`, `M${hc},${g9}ZM${hc},${g25}M${g32},${g28}L${g32},${g29}L${g34},${g29}L${g34},${g30}L${g32},${g30}L${g32},${g31}L${g37},${g31}L${g37},${g30}L${g35},${g30}L${g35},${g28}Z`, `M${hc},${g25}M${g32},${g28}L${g35},${g28}L${g35},${g30}L${g37},${g30}L${g37},${g31}L${g32},${g31}L${g32},${g30}L${g34},${g30}L${g34},${g29}L${g32},${g29}Z`, `M${hc},${g9}ZM${hc},${g25}M${g32},${g28}L${g35},${g28}L${g35},${g30}L${g37},${g30}L${g37},${g31}L${g32},${g31}L${g32},${g30}L${g34},${g30}L${g34},${g29}L${g32},${g29}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonMovie(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    var g13 = ss * 3 / 4
    var g14 = g13 * 1455 / 21600
    var g15 = g13 * 1905 / 21600
    var g16 = g13 * 2325 / 21600
    var g17 = g13 * 16155 / 21600
    var g18 = g13 * 17010 / 21600
    var g19 = g13 * 19335 / 21600
    var g20 = g13 * 19725 / 21600
    var g21 = g13 * 20595 / 21600
    var g22 = g13 * 5280 / 21600
    var g23 = g13 * 5730 / 21600
    var g24 = g13 * 6630 / 21600
    var g25 = g13 * 7492 / 21600
    var g26 = g13 * 9067 / 21600
    var g27 = g13 * 9555 / 21600
    var g28 = g13 * 13342 / 21600
    var g29 = g13 * 14580 / 21600
    var g30 = g13 * 15592 / 21600
    var g31 = g11 + g14 - 0
    var g32 = g11 + g15 - 0
    var g33 = g11 + g16 - 0
    var g34 = g11 + g17 - 0
    var g35 = g11 + g18 - 0
    var g36 = g11 + g19 - 0
    var g37 = g11 + g20 - 0
    var g38 = g11 + g21 - 0
    var g39 = g9 + g22 - 0
    var g40 = g9 + g23 - 0
    var g41 = g9 + g24 - 0
    var g42 = g9 + g25 - 0
    var g43 = g9 + g26 - 0
    var g44 = g9 + g27 - 0
    var g45 = g9 + g28 - 0
    var g46 = g9 + g29 - 0
    var g47 = g9 + g30 - 0
    var g48 = g9 + g31 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${g39}L${g11},${g44}L${g31},${g44}L${g32},${g43}L${g33},${g43}L${g33},${g47}L${g35},${g47}L${g35},${g45}L${g36},${g45}L${g38},${g46}L${g12},${g46}L${g12},${g41}L${g38},${g41}L${g37},${g42}L${g35},${g42}L${g35},${g41}L${g34},${g40}L${g32},${g40}L${g31},${g39}Z`, `M${g11},${g39}L${g11},${g44}L${g31},${g44}L${g32},${g43}L${g33},${g43}L${g33},${g47}L${g35},${g47}L${g35},${g45}L${g36},${g45}L${g38},${g46}L${g12},${g46}L${g12},${g41}L${g38},${g41}L${g37},${g42}L${g35},${g42}L${g35},${g41}L${g34},${g40}L${g32},${g40}L${g31},${g39}Z`, `M${g11},${g39}L${g31},${g39}L${g32},${g40}L${g34},${g40}L${g35},${g41}L${g35},${g42}L${g37},${g42}L${g38},${g41}L${g12},${g41}L${g12},${g46}L${g38},${g46}L${g36},${g45}L${g35},${g45}L${g35},${g47}L${g33},${g47}L${g33},${g43}L${g32},${g43}L${g31},${g44}L${g11},${g44}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonReturn(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    var g13 = ss * 3 / 4
    var g14 = g13 * 7 / 8
    var g15 = g13 * 3 / 4
    var g16 = g13 * 5 / 8
    var g17 = g13 * 3 / 8
    var g18 = g13 * 1 / 4
    var g19 = g9 + g15 - 0
    var g20 = g9 + g16 - 0
    var g21 = g9 + g18 - 0
    var g22 = g11 + g14 - 0
    var g23 = g11 + g15 - 0
    var g24 = g11 + g16 - 0
    var g25 = g11 + g17 - 0
    var g26 = g11 + g18 - 0
    var g27 = g13 * 1 / 8
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g12},${g21}L${g23},${g9}L${hc},${g21}L${g24},${g21}L${g24},${g20}L${g25},${g19}L${g26},${g21}L${g11},${g21}L${g11},${g20}L${hc},${g10}L${g22},${g21}Z`, `M${g12},${g21}L${g23},${g9}L${hc},${g21}L${g24},${g21}L${g24},${g20}L${g25},${g19}L${g26},${g21}L${g11},${g21}L${g11},${g20}L${hc},${g10}L${g22},${g21}Z`, `M${g12},${g21}L${g22},${g21}L${g22},${g20}L${g25},${g10}L${g11},${g21}L${g26},${g21}L${g26},${g20}L${hc},${g19}L${g24},${g21}L${hc},${g21}L${g23},${g9}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function actionButtonSound(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx2 = ss * 3 / 8
    var g9 = vc + 0 - dx2
    var g10 = vc + dx2 - 0
    var g11 = hc + 0 - dx2
    var g12 = hc + dx2 - 0
    var g13 = ss * 3 / 4
    var g14 = g13 * 1 / 8
    var g15 = g13 * 5 / 16
    var g16 = g13 * 5 / 8
    var g17 = g13 * 11 / 16
    var g18 = g13 * 3 / 4
    var g19 = g13 * 7 / 8
    var g20 = g9 + g14 - 0
    var g21 = g9 + g15 - 0
    var g22 = g9 + g17 - 0
    var g23 = g9 + g19 - 0
    var g24 = g11 + g15 - 0
    var g25 = g11 + g16 - 0
    var g26 = g11 + g18 - 0
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${g11},${g21}L${g11},${g22}L${g24},${g22}L${g25},${g10}L${g25},${g9}L${g24},${g21}Z`, `M${g11},${g21}L${g11},${g22}L${g24},${g22}L${g25},${g10}L${g25},${g9}L${g24},${g21}Z`, `M${g11},${g21}L${g24},${g21}L${g25},${g9}L${g25},${g10}L${g24},${g22}L${g11},${g22}ZM${g26},${g21}L${g12},${g20}M${g26},${vc}L${g12},${vc}M${g26},${g22}L${g12},${g23}`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function arc(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 16200000
    adj2 = adj2 || 0


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var stAng = adj1 < 0 ? 0 : (adj1 > 21599999 ? 21599999 : adj1)
    var enAng = adj2 < 0 ? 0 : (adj2 > 21599999 ? 21599999 : adj2)
    var sw11 = enAng + 0 - stAng
    var sw12 = sw11 + 21600000 - 0
    var swAng = sw11 > 0 ? sw11 : sw12
    var wt1 = wd2 * sin(stAng)
    var ht1 = max(hd2, stAng)
    var dx1 = wd2 * (cos(atan(wt1 / ht1)))
    var dy1 = hd2 * sin(atan(wt1 / ht1))
    var wt2 = wd2 * sin(enAng)
    var ht2 = max(hd2, enAng)
    var dx2 = wd2 * (cos(atan(wt2 / ht2)))
    var dy2 = hd2 * sin(atan(wt2 / ht2))
    var x1 = hc + dx1 - 0
    var y1 = vc + dy1 - 0
    var x2 = hc + dx2 - 0
    var y2 = vc + dy2 - 0
    var sw0 = 21600000 + 0 - stAng
    var da1 = swAng + 0 - sw0
    var g1 = max(x1, x2)
    var ir = da1 > 0 ? r : g1
    var sw1 = cd4 + 0 - stAng
    var sw2 = 27000000 + 0 - stAng
    var sw3 = sw1 > 0 ? sw1 : sw2
    var da2 = swAng + 0 - sw3
    var g5 = max(y1, y2)
    var ib = da2 > 0 ? b : g5
    var sw4 = cd2 + 0 - stAng
    var sw5 = 32400000 + 0 - stAng
    var sw6 = sw4 > 0 ? sw4 : sw5
    var da3 = swAng + 0 - sw6
    var g9 = min(x1, x2)
    var il = da3 > 0 ? l : g9
    var sw7 = 3 cd4 + 0 - stAng
    var sw8 = 37800000 + 0 - stAng
    var sw9 = sw7 > 0 ? sw7 : sw8
    var da4 = swAng + 0 - sw9
    var g13 = min(y1, y2)
    var it = da4 > 0 ? t : g13
    var cang1 = stAng + 0 - cd4
    var cang2 = enAng + cd4 - 0
    var cang3 = cang1 + cang2 / 2
    return [`M${x1},${y1}L${hc},${vc}Z`, `M${x1},${y1}`]
}

function bentArrow(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 43750


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var a3 = adj3 < 0 ? 0 : (adj3 > 50000 ? 50000 : adj3)
    var th = ss * a1 / 100000
    var aw2 = ss * a2 / 100000
    var th2 = th * 1 / 2
    var dh2 = aw2 + 0 - th2
    var ah = ss * a3 / 100000
    var bw = r + 0 - ah
    var bh = b + 0 - dh2
    var bs = min(bw, bh)
    var maxAdj4 = 100000 * bs / ss
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var bd = ss * a4 / 100000
    var bd3 = bd + 0 - th
    var bd2 = max(bd3, 0)
    var x3 = th + bd2 - 0
    var x4 = r + 0 - ah
    var y3 = dh2 + th - 0
    var y4 = y3 + dh2 - 0
    var y5 = dh2 + bd - 0
    var y6 = y3 + bd2 - 0
    return [`M${l},${b}L${l},${y5}L${x4},${dh2}L${x4},${t}L${r},${aw2}L${x4},${y4}L${x4},${y3}L${x3},${y3}L${th},${b}Z`]
}

function bentConnector2(w, h, l, r, t, b, ) {

    // no guides
    return [`M${l},${t}L${r},${t}L${r},${b}`]
}

function bentConnector3(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x1 = w * adj1 / 100000
    return [`M${l},${t}L${x1},${t}L${x1},${b}L${r},${b}`]
}

function bentConnector4(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x1 = w * adj1 / 100000
    var x2 = x1 + r / 2
    var y2 = h * adj2 / 100000
    var y1 = t + y2 / 2
    return [`M${l},${t}L${x1},${t}L${x1},${y2}L${r},${y2}L${r},${b}`]
}

function bentConnector5(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000
    adj3 = adj3 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x1 = w * adj1 / 100000
    var x3 = w * adj3 / 100000
    var x2 = x1 + x3 / 2
    var y2 = h * adj2 / 100000
    var y1 = t + y2 / 2
    var y3 = b + y2 / 2
    return [`M${l},${t}L${x1},${t}L${x1},${y2}L${x3},${y2}L${x3},${b}L${r},${b}`]
}

function bentUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var a3 = adj3 < 0 ? 0 : (adj3 > 50000 ? 50000 : adj3)
    var y1 = ss * a3 / 100000
    var dx1 = ss * a2 / 50000
    var x1 = r + 0 - dx1
    var dx3 = ss * a2 / 100000
    var x3 = r + 0 - dx3
    var dx2 = ss * a1 / 200000
    var x2 = x3 + 0 - dx2
    var x4 = x3 + dx2 - 0
    var dy2 = ss * a1 / 100000
    var y2 = b + 0 - dy2
    var x0 = x4 * 1 / 2
    var y3 = y2 + b / 2
    var y15 = y1 + b / 2
    return [`M${l},${y2}L${x2},${y2}L${x2},${y1}L${x1},${y1}L${x3},${t}L${r},${y1}L${x4},${y1}L${x4},${b}L${l},${b}Z`]
}

function bevel(w, h, l, r, t, b, adj) {
    adj = adj || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var y2 = b + 0 - x1
    return [`M${x1},${x1}L${x2},${x1}L${x2},${y2}L${x1},${y2}Z`, `M${l},${t}L${r},${t}L${x2},${x1}L${x1},${x1}Z`, `M${l},${b}L${x1},${y2}L${x2},${y2}L${r},${b}Z`, `M${l},${t}L${x1},${x1}L${x1},${y2}L${l},${b}Z`, `M${r},${t}L${r},${b}L${x2},${y2}L${x2},${x1}Z`, `M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${x1},${x1}L${x2},${x1}L${x2},${y2}L${x1},${y2}ZM${l},${t}L${x1},${x1}M${l},${b}L${x1},${y2}M${r},${t}L${x2},${x1}M${r},${b}L${x2},${y2}`]
}

function blockArc(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 10800000
    adj2 = adj2 || 0
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var stAng = adj1 < 0 ? 0 : (adj1 > 21599999 ? 21599999 : adj1)
    var istAng = adj2 < 0 ? 0 : (adj2 > 21599999 ? 21599999 : adj2)
    var a3 = adj3 < 0 ? 0 : (adj3 > 50000 ? 50000 : adj3)
    var sw11 = istAng + 0 - stAng
    var sw12 = sw11 + 21600000 - 0
    var swAng = sw11 > 0 ? sw11 : sw12
    var iswAng = 0 + 0 - swAng
    var wt1 = wd2 * sin(stAng)
    var ht1 = max(hd2, stAng)
    var wt3 = wd2 * sin(istAng)
    var ht3 = max(hd2, istAng)
    var dx1 = wd2 * (cos(atan(wt1 / ht1)))
    var dy1 = hd2 * sin(atan(wt1 / ht1))
    var dx3 = wd2 * (cos(atan(wt3 / ht3)))
    var dy3 = hd2 * sin(atan(wt3 / ht3))
    var x1 = hc + dx1 - 0
    var y1 = vc + dy1 - 0
    var x3 = hc + dx3 - 0
    var y3 = vc + dy3 - 0
    var dr = ss * a3 / 100000
    var iwd2 = wd2 + 0 - dr
    var ihd2 = hd2 + 0 - dr
    var wt2 = iwd2 * sin(istAng)
    var ht2 = max(ihd2, istAng)
    var wt4 = iwd2 * sin(stAng)
    var ht4 = max(ihd2, stAng)
    var dx2 = iwd2 * (cos(atan(wt2 / ht2)))
    var dy2 = ihd2 * sin(atan(wt2 / ht2))
    var dx4 = iwd2 * (cos(atan(wt4 / ht4)))
    var dy4 = ihd2 * sin(atan(wt4 / ht4))
    var x2 = hc + dx2 - 0
    var y2 = vc + dy2 - 0
    var x4 = hc + dx4 - 0
    var y4 = vc + dy4 - 0
    var sw0 = 21600000 + 0 - stAng
    var da1 = swAng + 0 - sw0
    var g1 = max(x1, x2)
    var g2 = max(x3, x4)
    var g3 = max(g1, g2)
    var ir = da1 > 0 ? r : g3
    var sw1 = cd4 + 0 - stAng
    var sw2 = 27000000 + 0 - stAng
    var sw3 = sw1 > 0 ? sw1 : sw2
    var da2 = swAng + 0 - sw3
    var g5 = max(y1, y2)
    var g6 = max(y3, y4)
    var g7 = max(g5, g6)
    var ib = da2 > 0 ? b : g7
    var sw4 = cd2 + 0 - stAng
    var sw5 = 32400000 + 0 - stAng
    var sw6 = sw4 > 0 ? sw4 : sw5
    var da3 = swAng + 0 - sw6
    var g9 = min(x1, x2)
    var g10 = min(x3, x4)
    var g11 = min(g9, g10)
    var il = da3 > 0 ? l : g11
    var sw7 = 3 cd4 + 0 - stAng
    var sw8 = 37800000 + 0 - stAng
    var sw9 = sw7 > 0 ? sw7 : sw8
    var da4 = swAng + 0 - sw9
    var g13 = min(y1, y2)
    var g14 = min(y3, y4)
    var g15 = min(g13, g14)
    var it = da4 > 0 ? t : g15
    var x5 = x1 + x4 / 2
    var y5 = y1 + y4 / 2
    var x6 = x3 + x2 / 2
    var y6 = y3 + y2 / 2
    var cang1 = stAng + 0 - cd4
    var cang2 = istAng + cd4 - 0
    var cang3 = cang1 + cang2 / 2
    return [`M${x1},${y1}L${x2},${y2}Z`]
}

function borderCallout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 112500
    adj4 = adj4 || -38333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}`]
}

function borderCallout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 112500
    adj6 = adj6 || -46667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}

function borderCallout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 100000
    adj6 = adj6 || -16667
    adj7 = adj7 || 112963
    adj8 = adj8 || -8333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    var y4 = h * adj7 / 100000
    var x4 = w * adj8 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}

function bracePair(w, h, l, r, t, b, adj) {
    adj = adj || 8333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 25000 ? 25000 : adj)
    var x1 = ss * a / 100000
    var x2 = ss * a / 50000
    var x3 = r + 0 - x2
    var x4 = r + 0 - x1
    var y2 = vc + 0 - x1
    var y3 = vc + x1 - 0
    var y4 = b + 0 - x1
    var it = x1 * 29289 / 100000
    var il = x1 + it - 0
    var ir = r + 0 - il
    var ib = b + 0 - it
    return [`M${x2},${b}L${x1},${y3}L${x1},${x1}L${x3},${t}L${x4},${y2}L${x4},${y4}Z`, `M${x2},${b}L${x1},${y3}L${x1},${x1}M${x3},${t}L${x4},${y2}L${x4},${y4}`]
}

function bracketPair(w, h, l, r, t, b, adj) {
    adj = adj || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var y2 = b + 0 - x1
    var il = x1 * 29289 / 100000
    var ir = r + 0 - il
    var ib = b + 0 - il
    return [`M${l},${x1}L${x2},${t}L${r},${y2}L${x1},${b}Z`, `M${x1},${b}L${l},${x1}M${x2},${t}L${r},${y2}`]
}

function callout1(w, h, l, r, t, b, adj2, adj1, adj4, adj3) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 112500
    adj4 = adj4 || -38333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}`]
}

function callout2(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 112500
    adj6 = adj6 || -46667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}`]
}

function callout3(w, h, l, r, t, b, adj2, adj1, adj4, adj3, adj6, adj5, adj8, adj7) {
    adj1 = adj1 || 18750
    adj2 = adj2 || -8333
    adj3 = adj3 || 18750
    adj4 = adj4 || -16667
    adj5 = adj5 || 100000
    adj6 = adj6 || -16667
    adj7 = adj7 || 112963
    adj8 = adj8 || -8333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * adj1 / 100000
    var x1 = w * adj2 / 100000
    var y2 = h * adj3 / 100000
    var x2 = w * adj4 / 100000
    var y3 = h * adj5 / 100000
    var x3 = w * adj6 / 100000
    var y4 = h * adj7 / 100000
    var x4 = w * adj8 / 100000
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`, `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}`]
}

function can(w, h, l, r, t, b, adj) {
    adj = adj || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 50000 * h / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var y1 = ss * a / 200000
    var y2 = y1 + y1 - 0
    var y3 = b + 0 - y1
    return [`M${l},${y1}L${r},${y3}Z`, `M${l},${y1}Z`, `M${r},${y1}L${r},${y3}L${l},${y1}`]
}

function chartPlus(w, h, l, r, t, b, ) {

    // no guides
    return [`M${5},${0}L${5},${10}M${0},${5}L${10},${5}`, `M${0},${0}L${0},${10}L${10},${10}L${10},${0}Z`]
}

function chartStar(w, h, l, r, t, b, ) {

    // no guides
    return [`M${0},${0}L${10},${10}M${0},${10}L${10},${0}M${5},${0}L${5},${10}`, `M${0},${0}L${0},${10}L${10},${10}L${10},${0}Z`]
}

function chartX(w, h, l, r, t, b, ) {

    // no guides
    return [`M${0},${0}L${10},${10}M${0},${10}L${10},${0}`, `M${0},${0}L${0},${10}L${10},${10}L${10},${0}Z`]
}

function chevron(w, h, l, r, t, b, adj) {
    adj = adj || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 100000 * w / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var x3 = x2 * 1 / 2
    var dx = x2 + 0 - x1
    var il = dx > 0 ? x1 : l
    var ir = dx > 0 ? x2 : r
    return [`M${l},${t}L${x2},${t}L${r},${vc}L${x2},${b}L${l},${b}L${x1},${vc}Z`]
}

function chord(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 2700000
    adj2 = adj2 || 16200000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var stAng = adj1 < 0 ? 0 : (adj1 > 21599999 ? 21599999 : adj1)
    var enAng = adj2 < 0 ? 0 : (adj2 > 21599999 ? 21599999 : adj2)
    var sw1 = enAng + 0 - stAng
    var sw2 = sw1 + 21600000 - 0
    var swAng = sw1 > 0 ? sw1 : sw2
    var wt1 = wd2 * sin(stAng)
    var ht1 = max(hd2, stAng)
    var dx1 = wd2 * (cos(atan(wt1 / ht1)))
    var dy1 = hd2 * sin(atan(wt1 / ht1))
    var wt2 = wd2 * sin(enAng)
    var ht2 = max(hd2, enAng)
    var dx2 = wd2 * (cos(atan(wt2 / ht2)))
    var dy2 = hd2 * sin(atan(wt2 / ht2))
    var x1 = hc + dx1 - 0
    var y1 = vc + dy1 - 0
    var x2 = hc + dx2 - 0
    var y2 = vc + dy2 - 0
    var x3 = x1 + x2 / 2
    var y3 = y1 + y2 / 2
    var midAng0 = swAng * 1 / 2
    var midAng = stAng + midAng0 - cd2
    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${x1},${y1}Z`]
}

function circularArrow(w, h, l, r, t, b, adj2, adj4, adj3, adj1, adj5) {
    adj1 = adj1 || 12500
    adj2 = adj2 || 1142319
    adj3 = adj3 || 20457681
    adj4 = adj4 || 10800000
    adj5 = adj5 || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a5 = adj5 < 0 ? 0 : (adj5 > 25000 ? 25000 : adj5)
    var maxAdj1 = a5 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var enAng = adj3 < 1 ? 1 : (adj3 > 21599999 ? 21599999 : adj3)
    var stAng = adj4 < 0 ? 0 : (adj4 > 21599999 ? 21599999 : adj4)
    var th = ss * a1 / 100000
    var thh = ss * a5 / 100000
    var th2 = th * 1 / 2
    var rw1 = wd2 + th2 - thh
    var rh1 = hd2 + th2 - thh
    var rw2 = rw1 + 0 - th
    var rh2 = rh1 + 0 - th
    var rw3 = rw2 + th2 - 0
    var rh3 = rh2 + th2 - 0
    var wtH = rw3 * sin(enAng)
    var htH = max(rh3, enAng)
    var dxH = rw3 * (cos(atan(wtH / htH)))
    var dyH = rh3 * sin(atan(wtH / htH))
    var xH = hc + dxH - 0
    var yH = vc + dyH - 0
    var rI = min(rw2, rh2)
    var u1 = dxH * dxH / 1
    var u2 = dyH * dyH / 1
    var u3 = rI * rI / 1
    var u4 = u1 + 0 - u3
    var u5 = u2 + 0 - u3
    var u6 = u4 * u5 / u1
    var u7 = u6 * 1 / u2
    var u8 = 1 + 0 - u7
    var u9 = sqrt(u8)
    var u10 = u4 * 1 / dxH
    var u11 = u10 * 1 / dyH
    var u12 = 1 + u9 / u11
    var u13 = atan2(1, u12)
    var u14 = u13 + 21600000 - 0
    var u15 = u13 > 0 ? u13 : u14
    var u16 = u15 + 0 - enAng
    var u17 = u16 + 21600000 - 0
    var u18 = u16 > 0 ? u16 : u17
    var u19 = u18 + 0 - cd2
    var u20 = u18 + 0 - 21600000
    var u21 = u19 > 0 ? u20 : u18
    var maxAng = abs(u21)
    var aAng = adj2 < 0 ? 0 : (adj2 > maxAng ? maxAng : adj2)
    var ptAng = enAng + aAng - 0
    var wtA = rw3 * sin(ptAng)
    var htA = max(rh3, ptAng)
    var dxA = rw3 * (cos(atan(wtA / htA)))
    var dyA = rh3 * sin(atan(wtA / htA))
    var xA = hc + dxA - 0
    var yA = vc + dyA - 0
    var wtE = rw1 * sin(stAng)
    var htE = max(rh1, stAng)
    var dxE = rw1 * (cos(atan(wtE / htE)))
    var dyE = rh1 * sin(atan(wtE / htE))
    var xE = hc + dxE - 0
    var yE = vc + dyE - 0
    var dxG = max(thh, ptAng)
    var dyG = thh * sin(ptAng)
    var xG = xH + dxG - 0
    var yG = yH + dyG - 0
    var dxB = max(thh, ptAng)
    var dyB = thh * sin(ptAng)
    var xB = xH + 0 - dxB
    var yB = yH + 0 - dyB
    var sx1 = xB + 0 - hc
    var sy1 = yB + 0 - vc
    var sx2 = xG + 0 - hc
    var sy2 = yG + 0 - vc
    var rO = min(rw1, rh1)
    var x1O = sx1 * rO / rw1
    var y1O = sy1 * rO / rh1
    var x2O = sx2 * rO / rw1
    var y2O = sy2 * rO / rh1
    var dxO = x2O + 0 - x1O
    var dyO = y2O + 0 - y1O
    var dO = sqrt(dxO * dxO + dyO * dyO + 0 * 0)
    var q1 = x1O * y2O / 1
    var q2 = x2O * y1O / 1
    var DO = q1 + 0 - q2
    var q3 = rO * rO / 1
    var q4 = dO * dO / 1
    var q5 = q3 * q4 / 1
    var q6 = DO * DO / 1
    var q7 = q5 + 0 - q6
    var q8 = max(q7, 0)
    var sdelO = sqrt(q8)
    var ndyO = dyO * -1 / 1
    var sdyO = ndyO > 0 ? -1 : 1
    var q9 = sdyO * dxO / 1
    var q10 = q9 * sdelO / 1
    var q11 = DO * dyO / 1
    var dxF1 = q11 + q10 / q4
    var q12 = q11 + 0 - q10
    var dxF2 = q12 * 1 / q4
    var adyO = abs(dyO)
    var q13 = adyO * sdelO / 1
    var q14 = DO * dxO / -1
    var dyF1 = q14 + q13 / q4
    var q15 = q14 + 0 - q13
    var dyF2 = q15 * 1 / q4
    var q16 = x2O + 0 - dxF1
    var q17 = x2O + 0 - dxF2
    var q18 = y2O + 0 - dyF1
    var q19 = y2O + 0 - dyF2
    var q20 = sqrt(q16 * q16 + q18 * q18 + 0 * 0)
    var q21 = sqrt(q17 * q17 + q19 * q19 + 0 * 0)
    var q22 = q21 + 0 - q20
    var dxF = q22 > 0 ? dxF1 : dxF2
    var dyF = q22 > 0 ? dyF1 : dyF2
    var sdxF = dxF * rw1 / rO
    var sdyF = dyF * rh1 / rO
    var xF = hc + sdxF - 0
    var yF = vc + sdyF - 0
    var x1I = sx1 * rI / rw2
    var y1I = sy1 * rI / rh2
    var x2I = sx2 * rI / rw2
    var y2I = sy2 * rI / rh2
    var dxI = x2I + 0 - x1I
    var dyI = y2I + 0 - y1I
    var dI = sqrt(dxI * dxI + dyI * dyI + 0 * 0)
    var v1 = x1I * y2I / 1
    var v2 = x2I * y1I / 1
    var DI = v1 + 0 - v2
    var v3 = rI * rI / 1
    var v4 = dI * dI / 1
    var v5 = v3 * v4 / 1
    var v6 = DI * DI / 1
    var v7 = v5 + 0 - v6
    var v8 = max(v7, 0)
    var sdelI = sqrt(v8)
    var v9 = sdyO * dxI / 1
    var v10 = v9 * sdelI / 1
    var v11 = DI * dyI / 1
    var dxC1 = v11 + v10 / v4
    var v12 = v11 + 0 - v10
    var dxC2 = v12 * 1 / v4
    var adyI = abs(dyI)
    var v13 = adyI * sdelI / 1
    var v14 = DI * dxI / -1
    var dyC1 = v14 + v13 / v4
    var v15 = v14 + 0 - v13
    var dyC2 = v15 * 1 / v4
    var v16 = x1I + 0 - dxC1
    var v17 = x1I + 0 - dxC2
    var v18 = y1I + 0 - dyC1
    var v19 = y1I + 0 - dyC2
    var v20 = sqrt(v16 * v16 + v18 * v18 + 0 * 0)
    var v21 = sqrt(v17 * v17 + v19 * v19 + 0 * 0)
    var v22 = v21 + 0 - v20
    var dxC = v22 > 0 ? dxC1 : dxC2
    var dyC = v22 > 0 ? dyC1 : dyC2
    var sdxC = dxC * rw2 / rI
    var sdyC = dyC * rh2 / rI
    var xC = hc + sdxC - 0
    var yC = vc + sdyC - 0
    var ist0 = atan2(sdxC, sdyC)
    var ist1 = ist0 + 21600000 - 0
    var istAng = ist0 > 0 ? ist0 : ist1
    var isw1 = stAng + 0 - istAng
    var isw2 = isw1 + 0 - 21600000
    var iswAng = isw1 > 0 ? isw2 : isw1
    var p1 = xF + 0 - xC
    var p2 = yF + 0 - yC
    var p3 = sqrt(p1 * p1 + p2 * p2 + 0 * 0)
    var p4 = p3 * 1 / 2
    var p5 = p4 + 0 - thh
    var xGp = p5 > 0 ? xF : xG
    var yGp = p5 > 0 ? yF : yG
    var xBp = p5 > 0 ? xC : xB
    var yBp = p5 > 0 ? yC : yB
    var en0 = atan2(sdxF, sdyF)
    var en1 = en0 + 21600000 - 0
    var en2 = en0 > 0 ? en0 : en1
    var sw0 = en2 + 0 - stAng
    var sw1 = sw0 + 21600000 - 0
    var swAng = sw0 > 0 ? sw0 : sw1
    var wtI = rw3 * sin(stAng)
    var htI = max(rh3, stAng)
    var dxI = rw3 * (cos(atan(wtI / htI)))
    var dyI = rh3 * sin(atan(wtI / htI))
    var xI = hc + dxI - 0
    var yI = vc + dyI - 0
    var aI = stAng + 0 - cd4
    var aA = ptAng + cd4 - 0
    var aB = ptAng + cd2 - 0
    var idx = max(rw1, 2700000)
    var idy = rh1 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${xE},${yE}L${xGp},${yGp}L${xA},${yA}L${xBp},${yBp}L${xC},${yC}Z`]
}

function cloud(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var il = w * 2977 / 21600
    var it = h * 3262 / 21600
    var ir = w * 17087 / 21600
    var ib = h * 17337 / 21600
    var g27 = w * 67 / 21600
    var g28 = h * 21577 / 21600
    var g29 = w * 21582 / 21600
    var g30 = h * 1235 / 21600
    return [`M${3900},${14370}Z`, `M${4693},${26177}M${6928},${34899}M${16478},${39090}M${28827},${34751}M${34129},${22954}M${41798},${15354}M${38324},${5426}M${29078},${3952}M${22141},${4720}M${14000},${5192}M${4127},${15789}`]
}

function cloudCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || 62500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dxPos = w * adj1 / 100000
    var dyPos = h * adj2 / 100000
    var xPos = hc + dxPos - 0
    var yPos = vc + dyPos - 0
    var ht = hd2 * (cos(atan(dyPos / dxPos)))
    var wt = wd2 * sin(atan(dyPos / dxPos))
    var g2 = wd2 * (cos(atan(wt / ht)))
    var g3 = hd2 * sin(atan(wt / ht))
    var g4 = hc + g2 - 0
    var g5 = vc + g3 - 0
    var g6 = g4 + 0 - xPos
    var g7 = g5 + 0 - yPos
    var g8 = sqrt(g6 * g6 + g7 * g7 + 0 * 0)
    var g9 = ss * 6600 / 21600
    var g10 = g8 + 0 - g9
    var g11 = g10 * 1 / 3
    var g12 = ss * 1800 / 21600
    var g13 = g11 + g12 - 0
    var g14 = g13 * g6 / g8
    var g15 = g13 * g7 / g8
    var g16 = g14 + xPos - 0
    var g17 = g15 + yPos - 0
    var g18 = ss * 4800 / 21600
    var g19 = g11 * 2 / 1
    var g20 = g18 + g19 - 0
    var g21 = g20 * g6 / g8
    var g22 = g20 * g7 / g8
    var g23 = g21 + xPos - 0
    var g24 = g22 + yPos - 0
    var g25 = ss * 1200 / 21600
    var g26 = ss * 600 / 21600
    var x23 = xPos + g26 - 0
    var x24 = g16 + g25 - 0
    var x25 = g23 + g12 - 0
    var il = w * 2977 / 21600
    var it = h * 3262 / 21600
    var ir = w * 17087 / 21600
    var ib = h * 17337 / 21600
    var g27 = w * 67 / 21600
    var g28 = h * 21577 / 21600
    var g29 = w * 21582 / 21600
    var g30 = h * 1235 / 21600
    var pang = atan2(dxPos, dyPos)
    return [`M${3900},${14370}Z`, `M${x23},${yPos}Z`, `M${x24},${g17}Z`, `M${x25},${g24}Z`, `M${4693},${26177}M${6928},${34899}M${16478},${39090}M${28827},${34751}M${34129},${22954}M${41798},${15354}M${38324},${5426}M${29078},${3952}M${22141},${4720}M${14000},${5192}M${4127},${15789}`]
}

function corner(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj1 = 100000 * h / ss
    var maxAdj2 = 100000 * w / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var x1 = ss * a2 / 100000
    var dy1 = ss * a1 / 100000
    var y1 = b + 0 - dy1
    var cx1 = x1 * 1 / 2
    var cy1 = y1 + b / 2
    var d = w + 0 - h
    var it = d > 0 ? y1 : t
    var ir = d > 0 ? r : x1
    return [`M${l},${t}L${x1},${t}L${x1},${y1}L${r},${y1}L${r},${b}L${l},${b}Z`]
}

function cornerTabs(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var md = sqrt(w * w + h * h + 0 * 0)
    var dx = 1 * md / 20
    var y1 = 0 + b - dx
    var x1 = 0 + r - dx
    return [`M${l},${t}L${dx},${t}L${l},${dx}Z`, `M${l},${y1}L${dx},${b}L${l},${b}Z`, `M${x1},${t}L${r},${t}L${r},${dx}Z`, `M${r},${y1}L${r},${b}L${x1},${b}Z`]
}

function cube(w, h, l, r, t, b, adj) {
    adj = adj || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 100000 ? 100000 : adj)
    var y1 = ss * a / 100000
    var y4 = b + 0 - y1
    var y2 = y4 * 1 / 2
    var y3 = y1 + b / 2
    var x4 = r + 0 - y1
    var x2 = x4 * 1 / 2
    var x3 = y1 + r / 2
    return [`M${l},${y1}L${x4},${y1}L${x4},${b}L${l},${b}Z`, `M${x4},${y1}L${r},${t}L${r},${y4}L${x4},${b}Z`, `M${l},${y1}L${y1},${t}L${r},${t}L${x4},${y1}Z`, `M${l},${y1}L${y1},${t}L${r},${t}L${r},${y4}L${x4},${b}L${l},${b}ZM${l},${y1}L${x4},${y1}L${r},${t}M${x4},${y1}L${x4},${b}`]
}

function curvedConnector2(w, h, l, r, t, b, ) {

    // no guides
    return [`M${l},${t}Z`]
}

function curvedConnector3(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * adj1 / 100000
    var x1 = l + x2 / 2
    var x3 = r + x2 / 2
    var y3 = h * 3 / 4
    return [`M${l},${t}ZZ`]
}

function curvedConnector4(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * adj1 / 100000
    var x1 = l + x2 / 2
    var x3 = r + x2 / 2
    var x4 = x2 + x3 / 2
    var x5 = x3 + r / 2
    var y4 = h * adj2 / 100000
    var y1 = t + y4 / 2
    var y2 = t + y1 / 2
    var y3 = y1 + y4 / 2
    var y5 = b + y4 / 2
    return [`M${l},${t}ZZZ`]
}

function curvedConnector5(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000
    adj3 = adj3 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x3 = w * adj1 / 100000
    var x6 = w * adj3 / 100000
    var x1 = x3 + x6 / 2
    var x2 = l + x3 / 2
    var x4 = x3 + x1 / 2
    var x5 = x6 + x1 / 2
    var x7 = x6 + r / 2
    var y4 = h * adj2 / 100000
    var y1 = t + y4 / 2
    var y2 = t + y1 / 2
    var y3 = y1 + y4 / 2
    var y5 = b + y4 / 2
    var y6 = y5 + y4 / 2
    var y7 = y5 + b / 2
    return [`M${l},${t}ZZZZ`]
}

function curvedDownArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 50000
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * w / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var th = ss * a1 / 100000
    var aw = ss * a2 / 100000
    var q1 = th + aw / 4
    var wR = wd2 + 0 - q1
    var q7 = wR * 2 / 1
    var q8 = q7 * q7 / 1
    var q9 = th * th / 1
    var q10 = q8 + 0 - q9
    var q11 = sqrt(q10)
    var idy = q11 * h / q7
    var maxAdj3 = 100000 * idy / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var ah = ss * adj3 / 100000
    var x3 = wR + th - 0
    var q2 = h * h / 1
    var q3 = ah * ah / 1
    var q4 = q2 + 0 - q3
    var q5 = sqrt(q4)
    var dx = q5 * wR / h
    var x5 = wR + dx - 0
    var x7 = x3 + dx - 0
    var q6 = aw + 0 - th
    var dh = q6 * 1 / 2
    var x4 = x5 + 0 - dh
    var x8 = x7 + dh - 0
    var aw2 = aw * 1 / 2
    var x6 = r + 0 - aw2
    var y1 = b + 0 - ah
    var swAng = atan2(ah, dx)
    var mswAng = 0 + 0 - swAng
    var iy = b + 0 - idy
    var ix = wR + x3 / 2
    var q12 = th * 1 / 2
    var dang2 = atan2(idy, q12)
    var stAng = 3 cd4 + swAng - 0
    var stAng2 = 3 cd4 + 0 - dang2
    var swAng2 = dang2 + 0 - cd4
    var swAng3 = cd4 + dang2 - 0
    return [`M${x6},${b}L${x4},${y1}L${x5},${y1}L${x3},${t}L${x8},${y1}Z`, `M${ix},${iy}L${l},${b}Z`, `M${ix},${iy}L${l},${b}L${x3},${t}L${x8},${y1}L${x6},${b}L${x4},${y1}L${x5},${y1}`]
}

function curvedLeftArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 50000
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * h / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var a1 = adj1 < 0 ? 0 : (adj1 > a2 ? a2 : adj1)
    var th = ss * a1 / 100000
    var aw = ss * a2 / 100000
    var q1 = th + aw / 4
    var hR = hd2 + 0 - q1
    var q7 = hR * 2 / 1
    var q8 = q7 * q7 / 1
    var q9 = th * th / 1
    var q10 = q8 + 0 - q9
    var q11 = sqrt(q10)
    var idx = q11 * w / q7
    var maxAdj3 = 100000 * idx / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var ah = ss * a3 / 100000
    var y3 = hR + th - 0
    var q2 = w * w / 1
    var q3 = ah * ah / 1
    var q4 = q2 + 0 - q3
    var q5 = sqrt(q4)
    var dy = q5 * hR / w
    var y5 = hR + dy - 0
    var y7 = y3 + dy - 0
    var q6 = aw + 0 - th
    var dh = q6 * 1 / 2
    var y4 = y5 + 0 - dh
    var y8 = y7 + dh - 0
    var aw2 = aw * 1 / 2
    var y6 = b + 0 - aw2
    var x1 = l + ah - 0
    var swAng = atan2(ah, dy)
    var mswAng = 0 + 0 - swAng
    var ix = l + idx - 0
    var iy = hR + y3 / 2
    var q12 = th * 1 / 2
    var dang2 = atan2(idx, q12)
    var swAng2 = dang2 + 0 - swAng
    var swAng3 = swAng + dang2 - 0
    var stAng3 = 0 + 0 - dang2
    return [`M${l},${y6}L${x1},${y4}L${x1},${y5}L${x1},${y8}Z`, `M${r},${y3}L${l},${t}Z`, `M${r},${y3}L${l},${t}L${r},${y3}L${x1},${y8}L${l},${y6}L${x1},${y4}L${x1},${y5}`]
}

function curvedRightArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 50000
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * h / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var a1 = adj1 < 0 ? 0 : (adj1 > a2 ? a2 : adj1)
    var th = ss * a1 / 100000
    var aw = ss * a2 / 100000
    var q1 = th + aw / 4
    var hR = hd2 + 0 - q1
    var q7 = hR * 2 / 1
    var q8 = q7 * q7 / 1
    var q9 = th * th / 1
    var q10 = q8 + 0 - q9
    var q11 = sqrt(q10)
    var idx = q11 * w / q7
    var maxAdj3 = 100000 * idx / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var ah = ss * a3 / 100000
    var y3 = hR + th - 0
    var q2 = w * w / 1
    var q3 = ah * ah / 1
    var q4 = q2 + 0 - q3
    var q5 = sqrt(q4)
    var dy = q5 * hR / w
    var y5 = hR + dy - 0
    var y7 = y3 + dy - 0
    var q6 = aw + 0 - th
    var dh = q6 * 1 / 2
    var y4 = y5 + 0 - dh
    var y8 = y7 + dh - 0
    var aw2 = aw * 1 / 2
    var y6 = b + 0 - aw2
    var x1 = r + 0 - ah
    var swAng = atan2(ah, dy)
    var stAng = cd2 + 0 - swAng
    var mswAng = 0 + 0 - swAng
    var ix = r + 0 - idx
    var iy = hR + y3 / 2
    var q12 = th * 1 / 2
    var dang2 = atan2(idx, q12)
    var swAng2 = dang2 + 0 - cd4
    var swAng3 = cd4 + dang2 - 0
    var stAng3 = cd2 + 0 - dang2
    return [`M${l},${hR}L${x1},${y4}L${r},${y6}L${x1},${y8}L${x1},${y7}Z`, `M${r},${th}Z`, `M${l},${hR}L${x1},${y4}L${r},${y6}L${x1},${y8}L${x1},${y7}L${l},${hR}L${r},${th}`]
}

function curvedUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 50000
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * w / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var th = ss * a1 / 100000
    var aw = ss * a2 / 100000
    var q1 = th + aw / 4
    var wR = wd2 + 0 - q1
    var q7 = wR * 2 / 1
    var q8 = q7 * q7 / 1
    var q9 = th * th / 1
    var q10 = q8 + 0 - q9
    var q11 = sqrt(q10)
    var idy = q11 * h / q7
    var maxAdj3 = 100000 * idy / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var ah = ss * adj3 / 100000
    var x3 = wR + th - 0
    var q2 = h * h / 1
    var q3 = ah * ah / 1
    var q4 = q2 + 0 - q3
    var q5 = sqrt(q4)
    var dx = q5 * wR / h
    var x5 = wR + dx - 0
    var x7 = x3 + dx - 0
    var q6 = aw + 0 - th
    var dh = q6 * 1 / 2
    var x4 = x5 + 0 - dh
    var x8 = x7 + dh - 0
    var aw2 = aw * 1 / 2
    var x6 = r + 0 - aw2
    var y1 = t + ah - 0
    var swAng = atan2(ah, dx)
    var mswAng = 0 + 0 - swAng
    var iy = t + idy - 0
    var ix = wR + x3 / 2
    var q12 = th * 1 / 2
    var dang2 = atan2(idy, q12)
    var swAng2 = dang2 + 0 - swAng
    var mswAng2 = 0 + 0 - swAng2
    var stAng3 = cd4 + 0 - swAng
    var swAng3 = swAng + dang2 - 0
    var stAng2 = cd4 + 0 - dang2
    return [`M${x6},${t}L${x8},${y1}L${x7},${y1}L${x4},${y1}Z`, `M${wR},${b}L${th},${t}Z`, `M${ix},${iy}L${x4},${y1}L${x6},${t}L${x8},${y1}L${x7},${y1}L${wR},${b}L${th},${t}`]
}

function decagon(w, h, l, r, t, b, ) {
    vf = vf || 105146


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var shd2 = hd2 * vf / 100000
    var dx1 = max(wd2, 2160000)
    var dx2 = max(wd2, 4320000)
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var dy1 = shd2 * sin(4320000)
    var dy2 = shd2 * sin(2160000)
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    var y4 = vc + dy1 - 0
    return [`M${l},${vc}L${x1},${y2}L${x2},${y1}L${x3},${y1}L${x4},${y2}L${r},${vc}L${x4},${y3}L${x3},${y4}L${x2},${y4}L${x1},${y3}Z`]
}

function diagStripe(w, h, l, r, t, b, adj) {
    adj = adj || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 100000 ? 100000 : adj)
    var x2 = w * a / 100000
    var x1 = x2 * 1 / 2
    var x3 = x2 + r / 2
    var y2 = h * a / 100000
    var y1 = y2 * 1 / 2
    var y3 = y2 + b / 2
    return [`M${l},${y2}L${x2},${t}L${r},${t}L${l},${b}Z`]
}

function diamond(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var ir = w * 3 / 4
    var ib = h * 3 / 4
    return [`M${l},${vc}L${hc},${t}L${r},${vc}L${hc},${b}Z`]
}

function dodecagon(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x1 = w * 2894 / 21600
    var x2 = w * 7906 / 21600
    var x3 = w * 13694 / 21600
    var x4 = w * 18706 / 21600
    var y1 = h * 2894 / 21600
    var y2 = h * 7906 / 21600
    var y3 = h * 13694 / 21600
    var y4 = h * 18706 / 21600
    return [`M${l},${y2}L${x1},${y1}L${x2},${t}L${x3},${t}L${x4},${y1}L${r},${y2}L${r},${y3}L${x4},${y4}L${x3},${b}L${x2},${b}L${x1},${y4}L${l},${y3}Z`]
}

function donut(w, h, l, r, t, b, adj) {
    adj = adj || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dr = ss * a / 100000
    var iwd2 = wd2 + 0 - dr
    var ihd2 = hd2 + 0 - dr
    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${vc}ZM${dr},${vc}Z`]
}

function doubleWave(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 6250
    adj2 = adj2 || 0


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 12500 ? 12500 : adj1)
    var a2 = adj2 < -10000 ? -10000 : (adj2 > 10000 ? 10000 : adj2)
    var y1 = h * a1 / 100000
    var dy2 = y1 * 10 / 3
    var y2 = y1 + 0 - dy2
    var y3 = y1 + dy2 - 0
    var y4 = b + 0 - y1
    var y5 = y4 + 0 - dy2
    var y6 = y4 + dy2 - 0
    var dx1 = w * a2 / 100000
    var of2 = w * a2 / 50000
    var x1 = abs(dx1)
    var dx2 = of2 > 0 ? 0 : of2
    var x2 = l + 0 - dx2
    var dx8 = of2 > 0 ? of2 : 0
    var x8 = r + 0 - dx8
    var dx3 = dx2 + x8 / 6
    var x3 = x2 + dx3 - 0
    var dx4 = dx2 + x8 / 3
    var x4 = x2 + dx4 - 0
    var x5 = x2 + x8 / 2
    var x6 = x5 + dx3 - 0
    var x7 = x6 + x8 / 2
    var x9 = l + dx8 - 0
    var x15 = r + dx2 - 0
    var x10 = x9 + dx3 - 0
    var x11 = x9 + dx4 - 0
    var x12 = x9 + x15 / 2
    var x13 = x12 + dx3 - 0
    var x14 = x13 + x15 / 2
    var x16 = r + 0 - x1
    var xAdj = hc + dx1 - 0
    var il = max(x2, x9)
    var ir = min(x8, x15)
    var it = h * a1 / 50000
    var ib = b + 0 - it
    return [`M${x2},${y1}ZZL${x15},${y4}ZZZ`]
}

function downArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 100000 * h / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var dy1 = ss * a2 / 100000
    var y1 = b + 0 - dy1
    var dx1 = w * a1 / 200000
    var x1 = hc + 0 - dx1
    var x2 = hc + dx1 - 0
    var dy2 = x1 * dy1 / wd2
    var y2 = y1 + dy2 - 0
    return [`M${l},${y1}L${x1},${y1}L${x1},${t}L${x2},${t}L${x2},${y1}L${r},${y1}L${hc},${b}Z`]
}

function downArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 64977


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * w / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 100000 * h / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q2 = a3 * ss / h
    var maxAdj4 = 100000 + 0 - q2
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var dx1 = ss * a2 / 100000
    var dx2 = ss * a1 / 200000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var dy3 = ss * a3 / 100000
    var y3 = b + 0 - dy3
    var y2 = h * a4 / 100000
    var y1 = y2 * 1 / 2
    return [`M${l},${t}L${r},${t}L${r},${y2}L${x3},${y2}L${x3},${y3}L${x4},${y3}L${hc},${b}L${x1},${y3}L${x2},${y3}L${x2},${y2}L${l},${y2}Z`]
}

function ellipse(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${vc}Z`]
}

function ellipseRibbon(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 50000
    adj3 = adj3 || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 25000 ? 25000 : (adj2 > 75000 ? 75000 : adj2)
    var q10 = 100000 + 0 - a1
    var q11 = q10 * 1 / 2
    var q12 = a1 + 0 - q11
    var minAdj3 = max(0, q12)
    var a3 = adj3 < minAdj3 ? minAdj3 : (adj3 > a1 ? a1 : adj3)
    var dx2 = w * a2 / 200000
    var x2 = hc + 0 - dx2
    var x3 = x2 + wd8 - 0
    var x4 = r + 0 - x3
    var x5 = r + 0 - x2
    var x6 = r + 0 - wd8
    var dy1 = h * a3 / 100000
    var f1 = 4 * dy1 / w
    var q1 = x3 * x3 / w
    var q2 = x3 + 0 - q1
    var y1 = f1 * q2 / 1
    var cx1 = x3 * 1 / 2
    var cy1 = f1 * cx1 / 1
    var cx2 = r + 0 - cx1
    var q1 = h * a1 / 100000
    var dy3 = q1 + 0 - dy1
    var q3 = x2 * x2 / w
    var q4 = x2 + 0 - q3
    var q5 = f1 * q4 / 1
    var y3 = q5 + dy3 - 0
    var q6 = dy1 + dy3 - y3
    var q7 = q6 + dy1 - 0
    var cy3 = q7 + dy3 - 0
    var rh = b + 0 - q1
    var q8 = dy1 * 14 / 16
    var y2 = q8 + rh / 2
    var y5 = q5 + rh - 0
    var y6 = y3 + rh - 0
    var cx4 = x2 * 1 / 2
    var q9 = f1 * cx4 / 1
    var cy4 = q9 + rh - 0
    var cx5 = r + 0 - cx4
    var cy6 = cy3 + rh - 0
    var y7 = y1 + dy3 - 0
    var cy7 = q1 + q1 - y7
    var y8 = b + 0 - dy1
    return [`M${l},${t}ZL${x2},${y3}ZL${x4},${y1}ZL${x6},${y2}L${r},${rh}ZL${x5},${y6}ZL${x2},${y5}ZL${wd8},${y2}Z`, `M${x3},${y7}L${x3},${y1}L${x2},${y3}ZL${x4},${y1}L${x4},${y7}ZZ`, `M${l},${t}ZL${x2},${y3}ZL${x4},${y1}ZL${x6},${y2}L${r},${rh}ZL${x5},${y6}ZL${x2},${y5}ZL${wd8},${y2}ZM${x2},${y5}L${x2},${y3}M${x5},${y3}L${x5},${y5}M${x3},${y1}L${x3},${y7}M${x4},${y7}L${x4},${y1}`]
}

function ellipseRibbon2(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 50000
    adj3 = adj3 || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 25000 ? 25000 : (adj2 > 75000 ? 75000 : adj2)
    var q10 = 100000 + 0 - a1
    var q11 = q10 * 1 / 2
    var q12 = a1 + 0 - q11
    var minAdj3 = max(0, q12)
    var a3 = adj3 < minAdj3 ? minAdj3 : (adj3 > a1 ? a1 : adj3)
    var dx2 = w * a2 / 200000
    var x2 = hc + 0 - dx2
    var x3 = x2 + wd8 - 0
    var x4 = r + 0 - x3
    var x5 = r + 0 - x2
    var x6 = r + 0 - wd8
    var dy1 = h * a3 / 100000
    var f1 = 4 * dy1 / w
    var q1 = x3 * x3 / w
    var q2 = x3 + 0 - q1
    var u1 = f1 * q2 / 1
    var y1 = b + 0 - u1
    var cx1 = x3 * 1 / 2
    var cu1 = f1 * cx1 / 1
    var cy1 = b + 0 - cu1
    var cx2 = r + 0 - cx1
    var q1 = h * a1 / 100000
    var dy3 = q1 + 0 - dy1
    var q3 = x2 * x2 / w
    var q4 = x2 + 0 - q3
    var q5 = f1 * q4 / 1
    var u3 = q5 + dy3 - 0
    var y3 = b + 0 - u3
    var q6 = dy1 + dy3 - u3
    var q7 = q6 + dy1 - 0
    var cu3 = q7 + dy3 - 0
    var cy3 = b + 0 - cu3
    var rh = b + 0 - q1
    var q8 = dy1 * 14 / 16
    var u2 = q8 + rh / 2
    var y2 = b + 0 - u2
    var u5 = q5 + rh - 0
    var y5 = b + 0 - u5
    var u6 = u3 + rh - 0
    var y6 = b + 0 - u6
    var cx4 = x2 * 1 / 2
    var q9 = f1 * cx4 / 1
    var cu4 = q9 + rh - 0
    var cy4 = b + 0 - cu4
    var cx5 = r + 0 - cx4
    var cu6 = cu3 + rh - 0
    var cy6 = b + 0 - cu6
    var u7 = u1 + dy3 - 0
    var y7 = b + 0 - u7
    var cu7 = q1 + q1 - u7
    var cy7 = b + 0 - cu7
    return [`M${l},${b}ZL${x2},${y3}ZL${x4},${y1}ZL${x6},${y2}L${r},${q1}ZL${x5},${y6}ZL${x2},${y5}ZL${wd8},${y2}Z`, `M${x3},${y7}L${x3},${y1}L${x2},${y3}ZL${x4},${y1}L${x4},${y7}ZZ`, `M${l},${b}L${wd8},${y2}L${l},${q1}ZL${x2},${y6}ZL${x5},${y5}ZL${x6},${y2}L${r},${b}ZL${x5},${y3}ZL${x3},${y1}ZZM${x2},${y3}L${x2},${y5}M${x5},${y5}L${x5},${y3}M${x3},${y7}L${x3},${y1}M${x4},${y1}L${x4},${y7}`]
}

function flowChartAlternateProcess(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = r + 0 - ssd6
    var y2 = b + 0 - ssd6
    var il = ssd6 * 29289 / 100000
    var ir = r + 0 - il
    var ib = b + 0 - il
    return [`M${l},${ssd6}L${x2},${t}L${r},${y2}L${ssd6},${b}Z`]
}

function flowChartCollate(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var ir = w * 3 / 4
    var ib = h * 3 / 4
    return [`M${0},${0}L${2},${0}L${1},${1}L${2},${2}L${0},${2}L${1},${1}Z`]
}

function flowChartConnector(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${vc}Z`]
}

function flowChartDecision(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var ir = w * 3 / 4
    var ib = h * 3 / 4
    return [`M${0},${1}L${1},${0}L${2},${1}L${1},${2}Z`]
}

function flowChartDelay(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${t}L${hc},${t}L${l},${b}Z`]
}

function flowChartDisplay(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 5 / 6
    return [`M${0},${3}L${1},${0}L${5},${0}L${1},${6}Z`]
}

function flowChartDocument(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * 17322 / 21600
    var y2 = h * 20172 / 21600
    return [`M${0},${0}L${21600},${0}L${21600},${17322}ZZ`]
}

function flowChartExtract(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 3 / 4
    return [`M${0},${2}L${1},${0}L${2},${2}Z`]
}

function flowChartInputOutput(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x3 = w * 2 / 5
    var x4 = w * 3 / 5
    var x5 = w * 4 / 5
    var x6 = w * 9 / 10
    return [`M${0},${5}L${1},${0}L${5},${0}L${4},${5}Z`]
}

function flowChartInternalStorage(w, h, l, r, t, b, ) {

    // no guides
    return [`M${0},${0}L${1},${0}L${1},${1}L${0},${1}Z`, `M${1},${0}L${1},${8}M${0},${1}L${8},${1}`, `M${0},${0}L${1},${0}L${1},${1}L${0},${1}Z`]
}

function flowChartMagneticDisk(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y3 = h * 5 / 6
    return [`M${0},${1}L${6},${5}Z`, `M${6},${1}`, `M${0},${1}L${6},${5}Z`]
}

function flowChartMagneticDrum(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 2 / 3
    return [`M${1},${0}L${5},${0}L${1},${6}Z`, `M${5},${6}`, `M${1},${0}L${5},${0}L${1},${6}Z`]
}

function flowChartMagneticTape(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    var ang1 = atan2(w, h)
    return [`M${hc},${b}L${r},${ib}L${r},${b}Z`]
}

function flowChartManualInput(w, h, l, r, t, b, ) {

    // no guides
    return [`M${0},${1}L${5},${0}L${5},${5}L${0},${5}Z`]
}

function flowChartManualOperation(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x3 = w * 4 / 5
    var x4 = w * 9 / 10
    return [`M${0},${0}L${5},${0}L${4},${5}L${1},${5}Z`]
}

function flowChartMerge(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 3 / 4
    return [`M${0},${0}L${2},${0}L${1},${2}Z`]
}

function flowChartMultidocument(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y2 = h * 3675 / 21600
    var y8 = h * 20782 / 21600
    var x3 = w * 9298 / 21600
    var x4 = w * 12286 / 21600
    var x5 = w * 18595 / 21600
    return [`M${0},${20782}ZL${18595},${3675}L${0},${3675}ZM${1532},${3675}L${1532},${1815}L${20000},${1815}L${20000},${16252}ZL${18595},${3675}ZM${2972},${1815}L${2972},${0}L${21600},${0}L${21600},${14392}ZL${20000},${1815}Z`, `M${0},${3675}L${18595},${3675}L${18595},${18022}ZZM${1532},${3675}L${1532},${1815}L${20000},${1815}L${20000},${16252}ZM${2972},${1815}L${2972},${0}L${21600},${0}L${21600},${14392}Z`, `M${0},${20782}ZL${18595},${16352}ZL${20000},${14467}ZL${21600},${0}L${2972},${0}L${2972},${1815}L${1532},${1815}L${1532},${3675}L${0},${3675}Z`]
}

function flowChartOfflineStorage(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x4 = w * 3 / 4
    return [`M${0},${0}L${2},${0}L${1},${2}Z`, `M${2},${4}L${3},${4}`, `M${0},${0}L${2},${0}L${1},${2}Z`]
}

function flowChartOffpageConnector(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y1 = h * 4 / 5
    return [`M${0},${0}L${10},${0}L${10},${8}L${5},${10}L${0},${8}Z`]
}

function flowChartOnlineStorage(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 5 / 6
    return [`M${1},${0}L${6},${0}L${1},${6}Z`]
}

function flowChartOr(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${vc}Z`, `M${hc},${t}L${hc},${b}M${l},${vc}L${r},${vc}`, `M${l},${vc}Z`]
}

function flowChartPredefinedProcess(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 7 / 8
    return [`M${0},${0}L${1},${0}L${1},${1}L${0},${1}Z`, `M${1},${0}L${1},${8}M${7},${0}L${7},${8}`, `M${0},${0}L${1},${0}L${1},${1}L${0},${1}Z`]
}

function flowChartPreparation(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 4 / 5
    return [`M${0},${5}L${2},${0}L${8},${0}L${10},${5}L${8},${10}L${2},${10}Z`]
}

function flowChartProcess(w, h, l, r, t, b, ) {

    // no guides
    return [`M${0},${0}L${1},${0}L${1},${1}L${0},${1}Z`]
}

function flowChartPunchedCard(w, h, l, r, t, b, ) {

    // no guides
    return [`M${0},${1}L${1},${0}L${5},${0}L${5},${5}L${0},${5}Z`]
}

function flowChartPunchedTape(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var y2 = h * 9 / 10
    var ib = h * 4 / 5
    return [`M${0},${2}L${20},${18}Z`]
}

function flowChartSort(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var ir = w * 3 / 4
    var ib = h * 3 / 4
    return [`M${0},${1}L${1},${0}L${2},${1}L${1},${2}Z`, `M${0},${1}L${2},${1}`, `M${0},${1}L${1},${0}L${2},${1}L${1},${2}Z`]
}

function flowChartSummingJunction(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${vc}Z`, `M${il},${it}L${ir},${ib}M${ir},${it}L${il},${ib}`, `M${l},${vc}Z`]
}

function flowChartTerminator(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var il = w * 1018 / 21600
    var ir = w * 20582 / 21600
    var it = h * 3163 / 21600
    var ib = h * 18437 / 21600
    return [`M${3475},${0}L${18125},${0}L${3475},${21600}Z`]
}

function foldedCorner(w, h, l, r, t, b, adj) {
    adj = adj || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dy2 = ss * a / 100000
    var dy1 = dy2 * 1 / 5
    var x1 = r + 0 - dy2
    var x2 = x1 + dy1 - 0
    var y2 = b + 0 - dy2
    var y1 = y2 + dy1 - 0
    return [`M${l},${t}L${r},${t}L${r},${y2}L${x1},${b}L${l},${b}Z`, `M${x1},${b}L${x2},${y1}L${r},${y2}Z`, `M${x1},${b}L${x2},${y1}L${r},${y2}L${x1},${b}L${l},${b}L${l},${t}L${r},${t}L${r},${y2}`]
}

function frame(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var x1 = ss * a1 / 100000
    var x4 = r + 0 - x1
    var y4 = b + 0 - x1
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}ZM${x1},${x1}L${x1},${y4}L${x4},${y4}L${x4},${x1}Z`]
}

function funnel(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var d = ss * 1 / 20
    var rw2 = wd2 + 0 - d
    var rh2 = hd4 + 0 - d
    var t1 = max(wd2, 480000)
    var t2 = hd4 * sin(480000)
    var da = atan2(t1, t2)
    var 2 da = da * 2 / 1
    var stAng1 = cd2 + 0 - da
    var swAng1 = cd2 + 2 da - 0
    var swAng3 = cd2 + 0 - 2 da
    var rw3 = wd2 * 1 / 4
    var rh3 = hd4 * 1 / 4
    var ct1 = max(hd4, stAng1)
    var st1 = wd2 * sin(stAng1)
    var m1 = sqrt(ct1 * ct1 + st1 * st1 + 0 * 0)
    var n1 = wd2 * hd4 / m1
    var dx1 = max(n1, stAng1)
    var dy1 = n1 * sin(stAng1)
    var x1 = hc + dx1 - 0
    var y1 = hd4 + dy1 - 0
    var ct3 = max(rh3, da)
    var st3 = rw3 * sin(da)
    var m3 = sqrt(ct3 * ct3 + st3 * st3 + 0 * 0)
    var n3 = rw3 * rh3 / m3
    var dx3 = max(n3, da)
    var dy3 = n3 * sin(da)
    var x3 = hc + dx3 - 0
    var vc3 = b + 0 - rh3
    var y2 = vc3 + dy3 - 0
    var x2 = wd2 + 0 - rw2
    var cd = cd2 * 2 / 1
    return [`M${x1},${y1}L${x3},${y2}ZM${x2},${hd4}Z`]
}

function gear6(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 15000
    adj2 = adj2 || 3526


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 20000 ? 20000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 5358 ? 5358 : adj2)
    var th = ss * a1 / 100000
    var lFD = ss * a2 / 100000
    var th2 = th * 1 / 2
    var l2 = lFD * 1 / 2
    var l3 = th2 + l2 - 0
    var rh = hd2 + 0 - th
    var rw = wd2 + 0 - th
    var dr = rw + 0 - rh
    var maxr = dr > 0 ? rh : rw
    var ha = atan2(maxr, l3)
    var aA1 = 19800000 + 0 - ha
    var aD1 = 19800000 + ha - 0
    var ta11 = max(rw, aA1)
    var ta12 = rh * sin(aA1)
    var bA1 = atan2(ta11, ta12)
    var cta1 = max(rh, bA1)
    var sta1 = rw * sin(bA1)
    var ma1 = sqrt(cta1 * cta1 + sta1 * sta1 + 0 * 0)
    var na1 = rw * rh / ma1
    var dxa1 = max(na1, bA1)
    var dya1 = na1 * sin(bA1)
    var xA1 = hc + dxa1 - 0
    var yA1 = vc + dya1 - 0
    var td11 = max(rw, aD1)
    var td12 = rh * sin(aD1)
    var bD1 = atan2(td11, td12)
    var ctd1 = max(rh, bD1)
    var std1 = rw * sin(bD1)
    var md1 = sqrt(ctd1 * ctd1 + std1 * std1 + 0 * 0)
    var nd1 = rw * rh / md1
    var dxd1 = max(nd1, bD1)
    var dyd1 = nd1 * sin(bD1)
    var xD1 = hc + dxd1 - 0
    var yD1 = vc + dyd1 - 0
    var xAD1 = xA1 + 0 - xD1
    var yAD1 = yA1 + 0 - yD1
    var lAD1 = sqrt(xAD1 * xAD1 + yAD1 * yAD1 + 0 * 0)
    var a1 = atan2(yAD1, xAD1)
    var dxF1 = lFD * sin(a1)
    var dyF1 = max(lFD, a1)
    var xF1 = xD1 + dxF1 - 0
    var yF1 = yD1 + dyF1 - 0
    var xE1 = xA1 + 0 - dxF1
    var yE1 = yA1 + 0 - dyF1
    var yC1t = th * sin(a1)
    var xC1t = max(th, a1)
    var yC1 = yF1 + yC1t - 0
    var xC1 = xF1 + 0 - xC1t
    var yB1 = yE1 + yC1t - 0
    var xB1 = xE1 + 0 - xC1t
    var aD6 = 3 cd4 + ha - 0
    var td61 = max(rw, aD6)
    var td62 = rh * sin(aD6)
    var bD6 = atan2(td61, td62)
    var ctd6 = max(rh, bD6)
    var std6 = rw * sin(bD6)
    var md6 = sqrt(ctd6 * ctd6 + std6 * std6 + 0 * 0)
    var nd6 = rw * rh / md6
    var dxd6 = max(nd6, bD6)
    var dyd6 = nd6 * sin(bD6)
    var xD6 = hc + dxd6 - 0
    var yD6 = vc + dyd6 - 0
    var xA6 = hc + 0 - dxd6
    var xF6 = xD6 + 0 - lFD
    var xE6 = xA6 + lFD - 0
    var yC6 = yD6 + 0 - th
    var swAng1 = bA1 + 0 - bD6
    var aA2 = 1800000 + 0 - ha
    var aD2 = 1800000 + ha - 0
    var ta21 = max(rw, aA2)
    var ta22 = rh * sin(aA2)
    var bA2 = atan2(ta21, ta22)
    var yA2 = h + 0 - yD1
    var td21 = max(rw, aD2)
    var td22 = rh * sin(aD2)
    var bD2 = atan2(td21, td22)
    var yD2 = h + 0 - yA1
    var yC2 = h + 0 - yB1
    var yB2 = h + 0 - yC1
    var xB2 = xC1
    var swAng2 = bA2 + 0 - bD1
    var aD3 = cd4 + ha - 0
    var td31 = max(rw, aD3)
    var td32 = rh * sin(aD3)
    var bD3 = atan2(td31, td32)
    var yD3 = h + 0 - yD6
    var yB3 = h + 0 - yC6
    var aD4 = 9000000 + ha - 0
    var td41 = max(rw, aD4)
    var td42 = rh * sin(aD4)
    var bD4 = atan2(td41, td42)
    var xD4 = w + 0 - xD1
    var xC4 = w + 0 - xC1
    var xB4 = w + 0 - xB1
    var aD5 = 12600000 + ha - 0
    var td51 = max(rw, aD5)
    var td52 = rh * sin(aD5)
    var bD5 = atan2(td51, td52)
    var xD5 = w + 0 - xA1
    var xC5 = w + 0 - xB1
    var xB5 = w + 0 - xC1
    var xCxn1 = xB1 + xC1 / 2
    var yCxn1 = yB1 + yC1 / 2
    var yCxn2 = b + 0 - yCxn1
    var xCxn4 = r + 0 / xCxn1
    return [`M${xA1},${yA1}L${xB1},${yB1}L${xC1},${yC1}L${xD1},${yD1}L${xC1},${yB2}L${xB1},${yC2}L${xA1},${yD2}L${xF6},${yB3}L${xE6},${yB3}L${xA6},${yD3}L${xB4},${yC2}L${xC4},${yB2}L${xD4},${yA2}L${xB5},${yC1}L${xC5},${yB1}L${xD5},${yA1}L${xE6},${yC6}L${xF6},${yC6}L${xD6},${yD6}Z`]
}

function gear9(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 10000
    adj2 = adj2 || 1763


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 20000 ? 20000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 2679 ? 2679 : adj2)
    var th = ss * a1 / 100000
    var lFD = ss * a2 / 100000
    var th2 = th * 1 / 2
    var l2 = lFD * 1 / 2
    var l3 = th2 + l2 - 0
    var rh = hd2 + 0 - th
    var rw = wd2 + 0 - th
    var dr = rw + 0 - rh
    var maxr = dr > 0 ? rh : rw
    var ha = atan2(maxr, l3)
    var aA1 = 18600000 + 0 - ha
    var aD1 = 18600000 + ha - 0
    var ta11 = max(rw, aA1)
    var ta12 = rh * sin(aA1)
    var bA1 = atan2(ta11, ta12)
    var cta1 = max(rh, bA1)
    var sta1 = rw * sin(bA1)
    var ma1 = sqrt(cta1 * cta1 + sta1 * sta1 + 0 * 0)
    var na1 = rw * rh / ma1
    var dxa1 = max(na1, bA1)
    var dya1 = na1 * sin(bA1)
    var xA1 = hc + dxa1 - 0
    var yA1 = vc + dya1 - 0
    var td11 = max(rw, aD1)
    var td12 = rh * sin(aD1)
    var bD1 = atan2(td11, td12)
    var ctd1 = max(rh, bD1)
    var std1 = rw * sin(bD1)
    var md1 = sqrt(ctd1 * ctd1 + std1 * std1 + 0 * 0)
    var nd1 = rw * rh / md1
    var dxd1 = max(nd1, bD1)
    var dyd1 = nd1 * sin(bD1)
    var xD1 = hc + dxd1 - 0
    var yD1 = vc + dyd1 - 0
    var xAD1 = xA1 + 0 - xD1
    var yAD1 = yA1 + 0 - yD1
    var lAD1 = sqrt(xAD1 * xAD1 + yAD1 * yAD1 + 0 * 0)
    var a1 = atan2(yAD1, xAD1)
    var dxF1 = lFD * sin(a1)
    var dyF1 = max(lFD, a1)
    var xF1 = xD1 + dxF1 - 0
    var yF1 = yD1 + dyF1 - 0
    var xE1 = xA1 + 0 - dxF1
    var yE1 = yA1 + 0 - dyF1
    var yC1t = th * sin(a1)
    var xC1t = max(th, a1)
    var yC1 = yF1 + yC1t - 0
    var xC1 = xF1 + 0 - xC1t
    var yB1 = yE1 + yC1t - 0
    var xB1 = xE1 + 0 - xC1t
    var aA2 = 21000000 + 0 - ha
    var aD2 = 21000000 + ha - 0
    var ta21 = max(rw, aA2)
    var ta22 = rh * sin(aA2)
    var bA2 = atan2(ta21, ta22)
    var cta2 = max(rh, bA2)
    var sta2 = rw * sin(bA2)
    var ma2 = sqrt(cta2 * cta2 + sta2 * sta2 + 0 * 0)
    var na2 = rw * rh / ma2
    var dxa2 = max(na2, bA2)
    var dya2 = na2 * sin(bA2)
    var xA2 = hc + dxa2 - 0
    var yA2 = vc + dya2 - 0
    var td21 = max(rw, aD2)
    var td22 = rh * sin(aD2)
    var bD2 = atan2(td21, td22)
    var ctd2 = max(rh, bD2)
    var std2 = rw * sin(bD2)
    var md2 = sqrt(ctd2 * ctd2 + std2 * std2 + 0 * 0)
    var nd2 = rw * rh / md2
    var dxd2 = max(nd2, bD2)
    var dyd2 = nd2 * sin(bD2)
    var xD2 = hc + dxd2 - 0
    var yD2 = vc + dyd2 - 0
    var xAD2 = xA2 + 0 - xD2
    var yAD2 = yA2 + 0 - yD2
    var lAD2 = sqrt(xAD2 * xAD2 + yAD2 * yAD2 + 0 * 0)
    var a2 = atan2(yAD2, xAD2)
    var dxF2 = lFD * sin(a2)
    var dyF2 = max(lFD, a2)
    var xF2 = xD2 + dxF2 - 0
    var yF2 = yD2 + dyF2 - 0
    var xE2 = xA2 + 0 - dxF2
    var yE2 = yA2 + 0 - dyF2
    var yC2t = th * sin(a2)
    var xC2t = max(th, a2)
    var yC2 = yF2 + yC2t - 0
    var xC2 = xF2 + 0 - xC2t
    var yB2 = yE2 + yC2t - 0
    var xB2 = xE2 + 0 - xC2t
    var swAng1 = bA2 + 0 - bD1
    var aA3 = 1800000 + 0 - ha
    var aD3 = 1800000 + ha - 0
    var ta31 = max(rw, aA3)
    var ta32 = rh * sin(aA3)
    var bA3 = atan2(ta31, ta32)
    var cta3 = max(rh, bA3)
    var sta3 = rw * sin(bA3)
    var ma3 = sqrt(cta3 * cta3 + sta3 * sta3 + 0 * 0)
    var na3 = rw * rh / ma3
    var dxa3 = max(na3, bA3)
    var dya3 = na3 * sin(bA3)
    var xA3 = hc + dxa3 - 0
    var yA3 = vc + dya3 - 0
    var td31 = max(rw, aD3)
    var td32 = rh * sin(aD3)
    var bD3 = atan2(td31, td32)
    var ctd3 = max(rh, bD3)
    var std3 = rw * sin(bD3)
    var md3 = sqrt(ctd3 * ctd3 + std3 * std3 + 0 * 0)
    var nd3 = rw * rh / md3
    var dxd3 = max(nd3, bD3)
    var dyd3 = nd3 * sin(bD3)
    var xD3 = hc + dxd3 - 0
    var yD3 = vc + dyd3 - 0
    var xAD3 = xA3 + 0 - xD3
    var yAD3 = yA3 + 0 - yD3
    var lAD3 = sqrt(xAD3 * xAD3 + yAD3 * yAD3 + 0 * 0)
    var a3 = atan2(yAD3, xAD3)
    var dxF3 = lFD * sin(a3)
    var dyF3 = max(lFD, a3)
    var xF3 = xD3 + dxF3 - 0
    var yF3 = yD3 + dyF3 - 0
    var xE3 = xA3 + 0 - dxF3
    var yE3 = yA3 + 0 - dyF3
    var yC3t = th * sin(a3)
    var xC3t = max(th, a3)
    var yC3 = yF3 + yC3t - 0
    var xC3 = xF3 + 0 - xC3t
    var yB3 = yE3 + yC3t - 0
    var xB3 = xE3 + 0 - xC3t
    var swAng2 = bA3 + 0 - bD2
    var aA4 = 4200000 + 0 - ha
    var aD4 = 4200000 + ha - 0
    var ta41 = max(rw, aA4)
    var ta42 = rh * sin(aA4)
    var bA4 = atan2(ta41, ta42)
    var cta4 = max(rh, bA4)
    var sta4 = rw * sin(bA4)
    var ma4 = sqrt(cta4 * cta4 + sta4 * sta4 + 0 * 0)
    var na4 = rw * rh / ma4
    var dxa4 = max(na4, bA4)
    var dya4 = na4 * sin(bA4)
    var xA4 = hc + dxa4 - 0
    var yA4 = vc + dya4 - 0
    var td41 = max(rw, aD4)
    var td42 = rh * sin(aD4)
    var bD4 = atan2(td41, td42)
    var ctd4 = max(rh, bD4)
    var std4 = rw * sin(bD4)
    var md4 = sqrt(ctd4 * ctd4 + std4 * std4 + 0 * 0)
    var nd4 = rw * rh / md4
    var dxd4 = max(nd4, bD4)
    var dyd4 = nd4 * sin(bD4)
    var xD4 = hc + dxd4 - 0
    var yD4 = vc + dyd4 - 0
    var xAD4 = xA4 + 0 - xD4
    var yAD4 = yA4 + 0 - yD4
    var lAD4 = sqrt(xAD4 * xAD4 + yAD4 * yAD4 + 0 * 0)
    var a4 = atan2(yAD4, xAD4)
    var dxF4 = lFD * sin(a4)
    var dyF4 = max(lFD, a4)
    var xF4 = xD4 + dxF4 - 0
    var yF4 = yD4 + dyF4 - 0
    var xE4 = xA4 + 0 - dxF4
    var yE4 = yA4 + 0 - dyF4
    var yC4t = th * sin(a4)
    var xC4t = max(th, a4)
    var yC4 = yF4 + yC4t - 0
    var xC4 = xF4 + 0 - xC4t
    var yB4 = yE4 + yC4t - 0
    var xB4 = xE4 + 0 - xC4t
    var swAng3 = bA4 + 0 - bD3
    var aA5 = 6600000 + 0 - ha
    var aD5 = 6600000 + ha - 0
    var ta51 = max(rw, aA5)
    var ta52 = rh * sin(aA5)
    var bA5 = atan2(ta51, ta52)
    var td51 = max(rw, aD5)
    var td52 = rh * sin(aD5)
    var bD5 = atan2(td51, td52)
    var xD5 = w + 0 - xA4
    var xC5 = w + 0 - xB4
    var xB5 = w + 0 - xC4
    var swAng4 = bA5 + 0 - bD4
    var aD6 = 9000000 + ha - 0
    var td61 = max(rw, aD6)
    var td62 = rh * sin(aD6)
    var bD6 = atan2(td61, td62)
    var xD6 = w + 0 - xA3
    var xC6 = w + 0 - xB3
    var xB6 = w + 0 - xC3
    var aD7 = 11400000 + ha - 0
    var td71 = max(rw, aD7)
    var td72 = rh * sin(aD7)
    var bD7 = atan2(td71, td72)
    var xD7 = w + 0 - xA2
    var xC7 = w + 0 - xB2
    var xB7 = w + 0 - xC2
    var aD8 = 13800000 + ha - 0
    var td81 = max(rw, aD8)
    var td82 = rh * sin(aD8)
    var bD8 = atan2(td81, td82)
    var xA8 = w + 0 - xD1
    var xD8 = w + 0 - xA1
    var xC8 = w + 0 - xB1
    var xB8 = w + 0 - xC1
    var aA9 = 3 cd4 + 0 - ha
    var aD9 = 3 cd4 + ha - 0
    var td91 = max(rw, aD9)
    var td92 = rh * sin(aD9)
    var bD9 = atan2(td91, td92)
    var ctd9 = max(rh, bD9)
    var std9 = rw * sin(bD9)
    var md9 = sqrt(ctd9 * ctd9 + std9 * std9 + 0 * 0)
    var nd9 = rw * rh / md9
    var dxd9 = max(nd9, bD9)
    var dyd9 = nd9 * sin(bD9)
    var xD9 = hc + dxd9 - 0
    var yD9 = vc + dyd9 - 0
    var ta91 = max(rw, aA9)
    var ta92 = rh * sin(aA9)
    var bA9 = atan2(ta91, ta92)
    var xA9 = hc + 0 - dxd9
    var xF9 = xD9 + 0 - lFD
    var xE9 = xA9 + lFD - 0
    var yC9 = yD9 + 0 - th
    var swAng5 = bA9 + 0 - bD8
    var xCxn1 = xB1 + xC1 / 2
    var yCxn1 = yB1 + yC1 / 2
    var xCxn2 = xB2 + xC2 / 2
    var yCxn2 = yB2 + yC2 / 2
    var xCxn3 = xB3 + xC3 / 2
    var yCxn3 = yB3 + yC3 / 2
    var xCxn4 = xB4 + xC4 / 2
    var yCxn4 = yB4 + yC4 / 2
    var xCxn5 = r + 0 / xCxn4
    var xCxn6 = r + 0 / xCxn3
    var xCxn7 = r + 0 / xCxn2
    var xCxn8 = r + 0 / xCxn1
    return [`M${xA1},${yA1}L${xB1},${yB1}L${xC1},${yC1}L${xD1},${yD1}L${xB2},${yB2}L${xC2},${yC2}L${xD2},${yD2}L${xB3},${yB3}L${xC3},${yC3}L${xD3},${yD3}L${xB4},${yB4}L${xC4},${yC4}L${xD4},${yD4}L${xB5},${yC4}L${xC5},${yB4}L${xD5},${yA4}L${xB6},${yC3}L${xC6},${yB3}L${xD6},${yA3}L${xB7},${yC2}L${xC7},${yB2}L${xD7},${yA2}L${xB8},${yC1}L${xC8},${yB1}L${xD8},${yA1}L${xE9},${yC9}L${xF9},${yC9}L${xD9},${yD9}Z`]
}

function halfFrame(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 33333
    adj2 = adj2 || 33333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 100000 * w / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var x1 = ss * a2 / 100000
    var g1 = h * x1 / w
    var g2 = h + 0 - g1
    var maxAdj1 = 100000 * g2 / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var y1 = ss * a1 / 100000
    var dx2 = y1 * w / h
    var x2 = r + 0 - dx2
    var dy2 = x1 * h / w
    var y2 = b + 0 - dy2
    var cx1 = x1 * 1 / 2
    var cy1 = y2 + b / 2
    var cx2 = x2 + r / 2
    var cy2 = y1 * 1 / 2
    return [`M${l},${t}L${r},${t}L${x2},${y1}L${x1},${y1}L${x1},${y2}L${l},${b}Z`]
}

function heart(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dx1 = w * 49 / 48
    var dx2 = w * 10 / 48
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var y1 = t + 0 - hd3
    var il = w * 1 / 6
    var ir = w * 5 / 6
    var ib = h * 2 / 3
    return [`M${hc},${hd4}ZZZ`]
}

function heptagon(w, h, l, r, t, b, ) {
    hf = hf || 102572
    vf = vf || 105210


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var swd2 = wd2 * hf / 100000
    var shd2 = hd2 * vf / 100000
    var svc = vc * / vf
    var dx1 = swd2 * 97493 / 100000
    var dx2 = swd2 * 78183 / 100000
    var dx3 = swd2 * 43388 / 100000
    var dy1 = shd2 * 62349 / 100000
    var dy2 = shd2 * 22252 / 100000
    var dy3 = shd2 * 90097 / 100000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + 0 - dx3
    var x4 = hc + dx3 - 0
    var x5 = hc + dx2 - 0
    var x6 = hc + dx1 - 0
    var y1 = svc + 0 - dy1
    var y2 = svc + dy2 - 0
    var y3 = svc + dy3 - 0
    var ib = b + 0 - y1
    return [`M${x1},${y2}L${x2},${y1}L${hc},${t}L${x5},${y1}L${x6},${y2}L${x4},${y3}L${x3},${y3}Z`]
}

function hexagon(w, h, l, r, t, b, adj) {
    adj = adj || 25000
    vf = vf || 115470


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 50000 * w / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var shd2 = hd2 * vf / 100000
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var dy1 = shd2 * sin(3600000)
    var y1 = vc + 0 - dy1
    var y2 = vc + dy1 - 0
    var q1 = maxAdj * -1 / 2
    var q2 = a + q1 - 0
    var q3 = q2 > 0 ? 4 : 2
    var q4 = q2 > 0 ? 3 : 2
    var q5 = q2 > 0 ? q1 : 0
    var q6 = a + q5 / q1
    var q7 = q6 * q4 / -1
    var q8 = q3 + q7 - 0
    var il = w * q8 / 24
    var it = h * q8 / 24
    var ir = r + 0 - il
    var ib = b + 0 - it
    return [`M${l},${vc}L${x1},${y1}L${x2},${y1}L${r},${vc}L${x2},${y2}L${x1},${y2}Z`]
}

function homePlate(w, h, l, r, t, b, adj) {
    adj = adj || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 100000 * w / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var dx1 = ss * a / 100000
    var x1 = r + 0 - dx1
    var ir = x1 + r / 2
    var x2 = x1 * 1 / 2
    return [`M${l},${t}L${x1},${t}L${r},${vc}L${x1},${b}L${l},${b}Z`]
}

function horizontalScroll(w, h, l, r, t, b, adj) {
    adj = adj || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 25000 ? 25000 : adj)
    var ch = ss * a / 100000
    var ch2 = ch * 1 / 2
    var ch4 = ch * 1 / 4
    var y3 = ch + ch2 - 0
    var y4 = ch + ch - 0
    var y6 = b + 0 - ch
    var y7 = b + 0 - ch2
    var y5 = y6 + 0 - ch2
    var x3 = r + 0 - ch
    var x4 = r + 0 - ch2
    return [`M${r},${ch2}L${x4},${ch2}L${x3},${ch}L${ch2},${ch}L${l},${y7}L${ch},${y6}L${x4},${y6}ZM${ch2},${y4}Z`, `M${ch2},${y4}ZM${x4},${ch}Z`, `M${l},${y3}L${x3},${ch}L${x3},${ch2}L${r},${y5}L${ch},${y6}L${ch},${y7}ZM${x3},${ch}L${x4},${ch}M${x4},${ch}L${x4},${ch2}M${ch2},${y4}L${ch2},${y3}M${ch},${y3}L${ch},${y6}`]
}

function irregularSeal1(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x5 = w * 4627 / 21600
    var x12 = w * 8485 / 21600
    var x21 = w * 16702 / 21600
    var x24 = w * 14522 / 21600
    var y3 = h * 6320 / 21600
    var y6 = h * 8615 / 21600
    var y9 = h * 13937 / 21600
    var y18 = h * 13290 / 21600
    return [`M${10800},${5800}L${14522},${0}L${14155},${5325}L${18380},${4457}L${16702},${7315}L${21097},${8137}L${17607},${10475}L${21600},${13290}L${16837},${12942}L${18145},${18095}L${14020},${14457}L${13247},${19737}L${10532},${14935}L${8485},${21600}L${7715},${15627}L${4762},${17617}L${5667},${13937}L${135},${14587}L${3722},${11775}L${0},${8615}L${4627},${7617}L${370},${2295}L${7312},${6320}L${8352},${2295}Z`]
}

function irregularSeal2(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x2 = w * 9722 / 21600
    var x5 = w * 5372 / 21600
    var x16 = w * 11612 / 21600
    var x19 = w * 14640 / 21600
    var y2 = h * 1887 / 21600
    var y3 = h * 6382 / 21600
    var y8 = h * 12877 / 21600
    var y14 = h * 19712 / 21600
    var y16 = h * 18842 / 21600
    var y17 = h * 15935 / 21600
    var y24 = h * 6645 / 21600
    return [`M${11462},${4342}L${14790},${0}L${14525},${5777}L${18007},${3172}L${16380},${6532}L${21600},${6645}L${16985},${9402}L${18270},${11290}L${16380},${12310}L${18877},${15632}L${14640},${14350}L${14942},${17370}L${12180},${15935}L${11612},${18842}L${9872},${17370}L${8700},${19712}L${7527},${18125}L${4917},${21600}L${4805},${18240}L${1285},${17825}L${3330},${15370}L${0},${12877}L${3935},${11592}L${1172},${8270}L${5372},${7817}L${4502},${3625}L${8550},${6382}L${9722},${1887}Z`]
}

function leftArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 100000 * w / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var dx2 = ss * a2 / 100000
    var x2 = l + dx2 - 0
    var dy1 = h * a1 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + dy1 - 0
    var dx1 = y1 * dx2 / hd2
    var x1 = x2 + -0
    return [`M${l},${vc}L${x2},${t}L${x2},${y1}L${r},${y1}L${r},${y2}L${x2},${y2}L${x2},${b}Z`]
}

function leftArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 64977


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * h / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 100000 * w / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q2 = a3 * ss / w
    var maxAdj4 = 100000 + 0 - q2
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var dy1 = ss * a2 / 100000
    var dy2 = ss * a1 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    var y4 = vc + dy1 - 0
    var x1 = ss * a3 / 100000
    var dx2 = w * a4 / 100000
    var x2 = r + 0 - dx2
    var x3 = x2 + r / 2
    return [`M${l},${vc}L${x1},${y1}L${x1},${y2}L${x2},${y2}L${x2},${t}L${r},${t}L${r},${b}L${x2},${b}L${x2},${y3}L${x1},${y3}L${x1},${y4}Z`]
}

function leftBrace(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 8333
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 100000 ? 100000 : adj2)
    var q1 = 100000 + 0 - a2
    var q2 = min(q1, a2)
    var q3 = q2 * 1 / 2
    var maxAdj1 = q3 * h / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var y1 = ss * a1 / 100000
    var y3 = h * a2 / 100000
    var y4 = y3 + y1 - 0
    var dx1 = max(wd2, 2700000)
    var dy1 = y1 * sin(2700000)
    var il = r + 0 - dx1
    var it = y1 + 0 - dy1
    var ib = b + dy1 - y1
    return [`M${r},${b}L${hc},${y4}L${hc},${y1}Z`, `M${r},${b}L${hc},${y4}L${hc},${y1}`]
}

function leftBracket(w, h, l, r, t, b, adj) {
    adj = adj || 8333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 50000 * h / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var y1 = ss * a / 100000
    var y2 = b + 0 - y1
    var dx1 = max(w, 2700000)
    var dy1 = y1 * sin(2700000)
    var il = r + 0 - dx1
    var it = y1 + 0 - dy1
    var ib = b + dy1 - y1
    return [`M${r},${b}L${l},${y1}Z`, `M${r},${b}L${l},${y1}`]
}

function leftCircularArrow(w, h, l, r, t, b, adj2, adj4, adj3, adj1, adj5) {
    adj1 = adj1 || 12500
    adj2 = adj2 || -1142319
    adj3 = adj3 || 1142319
    adj4 = adj4 || 10800000
    adj5 = adj5 || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a5 = adj5 < 0 ? 0 : (adj5 > 25000 ? 25000 : adj5)
    var maxAdj1 = a5 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var enAng = adj3 < 1 ? 1 : (adj3 > 21599999 ? 21599999 : adj3)
    var stAng = adj4 < 0 ? 0 : (adj4 > 21599999 ? 21599999 : adj4)
    var th = ss * a1 / 100000
    var thh = ss * a5 / 100000
    var th2 = th * 1 / 2
    var rw1 = wd2 + th2 - thh
    var rh1 = hd2 + th2 - thh
    var rw2 = rw1 + 0 - th
    var rh2 = rh1 + 0 - th
    var rw3 = rw2 + th2 - 0
    var rh3 = rh2 + th2 - 0
    var wtH = rw3 * sin(enAng)
    var htH = max(rh3, enAng)
    var dxH = rw3 * (cos(atan(wtH / htH)))
    var dyH = rh3 * sin(atan(wtH / htH))
    var xH = hc + dxH - 0
    var yH = vc + dyH - 0
    var rI = min(rw2, rh2)
    var u1 = dxH * dxH / 1
    var u2 = dyH * dyH / 1
    var u3 = rI * rI / 1
    var u4 = u1 + 0 - u3
    var u5 = u2 + 0 - u3
    var u6 = u4 * u5 / u1
    var u7 = u6 * 1 / u2
    var u8 = 1 + 0 - u7
    var u9 = sqrt(u8)
    var u10 = u4 * 1 / dxH
    var u11 = u10 * 1 / dyH
    var u12 = 1 + u9 / u11
    var u13 = atan2(1, u12)
    var u14 = u13 + 21600000 - 0
    var u15 = u13 > 0 ? u13 : u14
    var u16 = u15 + 0 - enAng
    var u17 = u16 + 21600000 - 0
    var u18 = u16 > 0 ? u16 : u17
    var u19 = u18 + 0 - cd2
    var u20 = u18 + 0 - 21600000
    var u21 = u19 > 0 ? u20 : u18
    var u22 = abs(u21)
    var minAng = u22 * -1 / 1
    var u23 = abs(adj2)
    var a2 = u23 * -1 / 1
    var aAng = a2 < minAng ? minAng : (a2 > 0 ? 0 : a2)
    var ptAng = enAng + aAng - 0
    var wtA = rw3 * sin(ptAng)
    var htA = max(rh3, ptAng)
    var dxA = rw3 * (cos(atan(wtA / htA)))
    var dyA = rh3 * sin(atan(wtA / htA))
    var xA = hc + dxA - 0
    var yA = vc + dyA - 0
    var wtE = rw1 * sin(stAng)
    var htE = max(rh1, stAng)
    var dxE = rw1 * (cos(atan(wtE / htE)))
    var dyE = rh1 * sin(atan(wtE / htE))
    var xE = hc + dxE - 0
    var yE = vc + dyE - 0
    var wtD = rw2 * sin(stAng)
    var htD = max(rh2, stAng)
    var dxD = rw2 * (cos(atan(wtD / htD)))
    var dyD = rh2 * sin(atan(wtD / htD))
    var xD = hc + dxD - 0
    var yD = vc + dyD - 0
    var dxG = max(thh, ptAng)
    var dyG = thh * sin(ptAng)
    var xG = xH + dxG - 0
    var yG = yH + dyG - 0
    var dxB = max(thh, ptAng)
    var dyB = thh * sin(ptAng)
    var xB = xH + 0 - dxB
    var yB = yH + 0 - dyB
    var sx1 = xB + 0 - hc
    var sy1 = yB + 0 - vc
    var sx2 = xG + 0 - hc
    var sy2 = yG + 0 - vc
    var rO = min(rw1, rh1)
    var x1O = sx1 * rO / rw1
    var y1O = sy1 * rO / rh1
    var x2O = sx2 * rO / rw1
    var y2O = sy2 * rO / rh1
    var dxO = x2O + 0 - x1O
    var dyO = y2O + 0 - y1O
    var dO = sqrt(dxO * dxO + dyO * dyO + 0 * 0)
    var q1 = x1O * y2O / 1
    var q2 = x2O * y1O / 1
    var DO = q1 + 0 - q2
    var q3 = rO * rO / 1
    var q4 = dO * dO / 1
    var q5 = q3 * q4 / 1
    var q6 = DO * DO / 1
    var q7 = q5 + 0 - q6
    var q8 = max(q7, 0)
    var sdelO = sqrt(q8)
    var ndyO = dyO * -1 / 1
    var sdyO = ndyO > 0 ? -1 : 1
    var q9 = sdyO * dxO / 1
    var q10 = q9 * sdelO / 1
    var q11 = DO * dyO / 1
    var dxF1 = q11 + q10 / q4
    var q12 = q11 + 0 - q10
    var dxF2 = q12 * 1 / q4
    var adyO = abs(dyO)
    var q13 = adyO * sdelO / 1
    var q14 = DO * dxO / -1
    var dyF1 = q14 + q13 / q4
    var q15 = q14 + 0 - q13
    var dyF2 = q15 * 1 / q4
    var q16 = x2O + 0 - dxF1
    var q17 = x2O + 0 - dxF2
    var q18 = y2O + 0 - dyF1
    var q19 = y2O + 0 - dyF2
    var q20 = sqrt(q16 * q16 + q18 * q18 + 0 * 0)
    var q21 = sqrt(q17 * q17 + q19 * q19 + 0 * 0)
    var q22 = q21 + 0 - q20
    var dxF = q22 > 0 ? dxF1 : dxF2
    var dyF = q22 > 0 ? dyF1 : dyF2
    var sdxF = dxF * rw1 / rO
    var sdyF = dyF * rh1 / rO
    var xF = hc + sdxF - 0
    var yF = vc + sdyF - 0
    var x1I = sx1 * rI / rw2
    var y1I = sy1 * rI / rh2
    var x2I = sx2 * rI / rw2
    var y2I = sy2 * rI / rh2
    var dxI = x2I + 0 - x1I
    var dyI = y2I + 0 - y1I
    var dI = sqrt(dxI * dxI + dyI * dyI + 0 * 0)
    var v1 = x1I * y2I / 1
    var v2 = x2I * y1I / 1
    var DI = v1 + 0 - v2
    var v3 = rI * rI / 1
    var v4 = dI * dI / 1
    var v5 = v3 * v4 / 1
    var v6 = DI * DI / 1
    var v7 = v5 + 0 - v6
    var v8 = max(v7, 0)
    var sdelI = sqrt(v8)
    var v9 = sdyO * dxI / 1
    var v10 = v9 * sdelI / 1
    var v11 = DI * dyI / 1
    var dxC1 = v11 + v10 / v4
    var v12 = v11 + 0 - v10
    var dxC2 = v12 * 1 / v4
    var adyI = abs(dyI)
    var v13 = adyI * sdelI / 1
    var v14 = DI * dxI / -1
    var dyC1 = v14 + v13 / v4
    var v15 = v14 + 0 - v13
    var dyC2 = v15 * 1 / v4
    var v16 = x1I + 0 - dxC1
    var v17 = x1I + 0 - dxC2
    var v18 = y1I + 0 - dyC1
    var v19 = y1I + 0 - dyC2
    var v20 = sqrt(v16 * v16 + v18 * v18 + 0 * 0)
    var v21 = sqrt(v17 * v17 + v19 * v19 + 0 * 0)
    var v22 = v21 + 0 - v20
    var dxC = v22 > 0 ? dxC1 : dxC2
    var dyC = v22 > 0 ? dyC1 : dyC2
    var sdxC = dxC * rw2 / rI
    var sdyC = dyC * rh2 / rI
    var xC = hc + sdxC - 0
    var yC = vc + sdyC - 0
    var ist0 = atan2(sdxC, sdyC)
    var ist1 = ist0 + 21600000 - 0
    var istAng0 = ist0 > 0 ? ist0 : ist1
    var isw1 = stAng + 0 - istAng0
    var isw2 = isw1 + 21600000 - 0
    var iswAng0 = isw1 > 0 ? isw1 : isw2
    var istAng = istAng0 + iswAng0 - 0
    var iswAng = 0 + 0 - iswAng0
    var p1 = xF + 0 - xC
    var p2 = yF + 0 - yC
    var p3 = sqrt(p1 * p1 + p2 * p2 + 0 * 0)
    var p4 = p3 * 1 / 2
    var p5 = p4 + 0 - thh
    var xGp = p5 > 0 ? xF : xG
    var yGp = p5 > 0 ? yF : yG
    var xBp = p5 > 0 ? xC : xB
    var yBp = p5 > 0 ? yC : yB
    var en0 = atan2(sdxF, sdyF)
    var en1 = en0 + 21600000 - 0
    var en2 = en0 > 0 ? en0 : en1
    var sw0 = en2 + 0 - stAng
    var sw1 = sw0 + 0 - 21600000
    var swAng = sw0 > 0 ? sw1 : sw0
    var stAng0 = stAng + swAng - 0
    var swAng0 = 0 + 0 - swAng
    var wtI = rw3 * sin(stAng)
    var htI = max(rh3, stAng)
    var dxI = rw3 * (cos(atan(wtI / htI)))
    var dyI = rh3 * sin(atan(wtI / htI))
    var xI = hc + dxI - 0
    var yI = vc + dyI - 0
    var aI = stAng + cd4 - 0
    var aA = ptAng + 0 - cd4
    var aB = ptAng + cd2 - 0
    var idx = max(rw1, 2700000)
    var idy = rh1 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${xE},${yE}L${xD},${yD}L${xBp},${yBp}L${xA},${yA}L${xGp},${yGp}L${xF},${yF}Z`]
}

function leftRightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * w / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var x2 = ss * a2 / 100000
    var x3 = r + 0 - x2
    var dy = h * a1 / 200000
    var y1 = vc + 0 - dy
    var y2 = vc + dy - 0
    var dx1 = y1 * x2 / hd2
    var x1 = x2 + 0 - dx1
    var x4 = x3 + dx1 - 0
    return [`M${l},${vc}L${x2},${t}L${x2},${y1}L${x3},${y1}L${x3},${t}L${r},${vc}L${x3},${b}L${x3},${y2}L${x2},${y2}L${x2},${b}Z`]
}

function leftRightArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 48123


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * h / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 50000 * w / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q2 = a3 * ss / wd2
    var maxAdj4 = 100000 + 0 - q2
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var dy1 = ss * a2 / 100000
    var dy2 = ss * a1 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    var y4 = vc + dy1 - 0
    var x1 = ss * a3 / 100000
    var x4 = r + 0 - x1
    var dx2 = w * a4 / 200000
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    return [`M${l},${vc}L${x1},${y1}L${x1},${y2}L${x2},${y2}L${x2},${t}L${x3},${t}L${x3},${y2}L${x4},${y2}L${x4},${y1}L${r},${vc}L${x4},${y4}L${x4},${y3}L${x3},${y3}L${x3},${b}L${x2},${b}L${x2},${y3}L${x1},${y3}L${x1},${y4}Z`]
}

function leftRightCircularArrow(w, h, l, r, t, b, adj2, adj4, adj3, adj1, adj5) {
    adj1 = adj1 || 12500
    adj2 = adj2 || 1142319
    adj3 = adj3 || 20457681
    adj4 = adj4 || 11942319
    adj5 = adj5 || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a5 = adj5 < 0 ? 0 : (adj5 > 25000 ? 25000 : adj5)
    var maxAdj1 = a5 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var enAng = adj3 < 1 ? 1 : (adj3 > 21599999 ? 21599999 : adj3)
    var stAng = adj4 < 0 ? 0 : (adj4 > 21599999 ? 21599999 : adj4)
    var th = ss * a1 / 100000
    var thh = ss * a5 / 100000
    var th2 = th * 1 / 2
    var rw1 = wd2 + th2 - thh
    var rh1 = hd2 + th2 - thh
    var rw2 = rw1 + 0 - th
    var rh2 = rh1 + 0 - th
    var rw3 = rw2 + th2 - 0
    var rh3 = rh2 + th2 - 0
    var wtH = rw3 * sin(enAng)
    var htH = max(rh3, enAng)
    var dxH = rw3 * (cos(atan(wtH / htH)))
    var dyH = rh3 * sin(atan(wtH / htH))
    var xH = hc + dxH - 0
    var yH = vc + dyH - 0
    var rI = min(rw2, rh2)
    var u1 = dxH * dxH / 1
    var u2 = dyH * dyH / 1
    var u3 = rI * rI / 1
    var u4 = u1 + 0 - u3
    var u5 = u2 + 0 - u3
    var u6 = u4 * u5 / u1
    var u7 = u6 * 1 / u2
    var u8 = 1 + 0 - u7
    var u9 = sqrt(u8)
    var u10 = u4 * 1 / dxH
    var u11 = u10 * 1 / dyH
    var u12 = 1 + u9 / u11
    var u13 = atan2(1, u12)
    var u14 = u13 + 21600000 - 0
    var u15 = u13 > 0 ? u13 : u14
    var u16 = u15 + 0 - enAng
    var u17 = u16 + 21600000 - 0
    var u18 = u16 > 0 ? u16 : u17
    var u19 = u18 + 0 - cd2
    var u20 = u18 + 0 - 21600000
    var u21 = u19 > 0 ? u20 : u18
    var maxAng = abs(u21)
    var aAng = adj2 < 0 ? 0 : (adj2 > maxAng ? maxAng : adj2)
    var ptAng = enAng + aAng - 0
    var wtA = rw3 * sin(ptAng)
    var htA = max(rh3, ptAng)
    var dxA = rw3 * (cos(atan(wtA / htA)))
    var dyA = rh3 * sin(atan(wtA / htA))
    var xA = hc + dxA - 0
    var yA = vc + dyA - 0
    var dxG = max(thh, ptAng)
    var dyG = thh * sin(ptAng)
    var xG = xH + dxG - 0
    var yG = yH + dyG - 0
    var dxB = max(thh, ptAng)
    var dyB = thh * sin(ptAng)
    var xB = xH + 0 - dxB
    var yB = yH + 0 - dyB
    var sx1 = xB + 0 - hc
    var sy1 = yB + 0 - vc
    var sx2 = xG + 0 - hc
    var sy2 = yG + 0 - vc
    var rO = min(rw1, rh1)
    var x1O = sx1 * rO / rw1
    var y1O = sy1 * rO / rh1
    var x2O = sx2 * rO / rw1
    var y2O = sy2 * rO / rh1
    var dxO = x2O + 0 - x1O
    var dyO = y2O + 0 - y1O
    var dO = sqrt(dxO * dxO + dyO * dyO + 0 * 0)
    var q1 = x1O * y2O / 1
    var q2 = x2O * y1O / 1
    var DO = q1 + 0 - q2
    var q3 = rO * rO / 1
    var q4 = dO * dO / 1
    var q5 = q3 * q4 / 1
    var q6 = DO * DO / 1
    var q7 = q5 + 0 - q6
    var q8 = max(q7, 0)
    var sdelO = sqrt(q8)
    var ndyO = dyO * -1 / 1
    var sdyO = ndyO > 0 ? -1 : 1
    var q9 = sdyO * dxO / 1
    var q10 = q9 * sdelO / 1
    var q11 = DO * dyO / 1
    var dxF1 = q11 + q10 / q4
    var q12 = q11 + 0 - q10
    var dxF2 = q12 * 1 / q4
    var adyO = abs(dyO)
    var q13 = adyO * sdelO / 1
    var q14 = DO * dxO / -1
    var dyF1 = q14 + q13 / q4
    var q15 = q14 + 0 - q13
    var dyF2 = q15 * 1 / q4
    var q16 = x2O + 0 - dxF1
    var q17 = x2O + 0 - dxF2
    var q18 = y2O + 0 - dyF1
    var q19 = y2O + 0 - dyF2
    var q20 = sqrt(q16 * q16 + q18 * q18 + 0 * 0)
    var q21 = sqrt(q17 * q17 + q19 * q19 + 0 * 0)
    var q22 = q21 + 0 - q20
    var dxF = q22 > 0 ? dxF1 : dxF2
    var dyF = q22 > 0 ? dyF1 : dyF2
    var sdxF = dxF * rw1 / rO
    var sdyF = dyF * rh1 / rO
    var xF = hc + sdxF - 0
    var yF = vc + sdyF - 0
    var x1I = sx1 * rI / rw2
    var y1I = sy1 * rI / rh2
    var x2I = sx2 * rI / rw2
    var y2I = sy2 * rI / rh2
    var dxI = x2I + 0 - x1I
    var dyI = y2I + 0 - y1I
    var dI = sqrt(dxI * dxI + dyI * dyI + 0 * 0)
    var v1 = x1I * y2I / 1
    var v2 = x2I * y1I / 1
    var DI = v1 + 0 - v2
    var v3 = rI * rI / 1
    var v4 = dI * dI / 1
    var v5 = v3 * v4 / 1
    var v6 = DI * DI / 1
    var v7 = v5 + 0 - v6
    var v8 = max(v7, 0)
    var sdelI = sqrt(v8)
    var v9 = sdyO * dxI / 1
    var v10 = v9 * sdelI / 1
    var v11 = DI * dyI / 1
    var dxC1 = v11 + v10 / v4
    var v12 = v11 + 0 - v10
    var dxC2 = v12 * 1 / v4
    var adyI = abs(dyI)
    var v13 = adyI * sdelI / 1
    var v14 = DI * dxI / -1
    var dyC1 = v14 + v13 / v4
    var v15 = v14 + 0 - v13
    var dyC2 = v15 * 1 / v4
    var v16 = x1I + 0 - dxC1
    var v17 = x1I + 0 - dxC2
    var v18 = y1I + 0 - dyC1
    var v19 = y1I + 0 - dyC2
    var v20 = sqrt(v16 * v16 + v18 * v18 + 0 * 0)
    var v21 = sqrt(v17 * v17 + v19 * v19 + 0 * 0)
    var v22 = v21 + 0 - v20
    var dxC = v22 > 0 ? dxC1 : dxC2
    var dyC = v22 > 0 ? dyC1 : dyC2
    var sdxC = dxC * rw2 / rI
    var sdyC = dyC * rh2 / rI
    var xC = hc + sdxC - 0
    var yC = vc + sdyC - 0
    var wtI = rw3 * sin(stAng)
    var htI = max(rh3, stAng)
    var dxI = rw3 * (cos(atan(wtI / htI)))
    var dyI = rh3 * sin(atan(wtI / htI))
    var xI = hc + dxI - 0
    var yI = vc + dyI - 0
    var lptAng = stAng + 0 - aAng
    var wtL = rw3 * sin(lptAng)
    var htL = max(rh3, lptAng)
    var dxL = rw3 * (cos(atan(wtL / htL)))
    var dyL = rh3 * sin(atan(wtL / htL))
    var xL = hc + dxL - 0
    var yL = vc + dyL - 0
    var dxK = max(thh, lptAng)
    var dyK = thh * sin(lptAng)
    var xK = xI + dxK - 0
    var yK = yI + dyK - 0
    var dxJ = max(thh, lptAng)
    var dyJ = thh * sin(lptAng)
    var xJ = xI + 0 - dxJ
    var yJ = yI + 0 - dyJ
    var p1 = xF + 0 - xC
    var p2 = yF + 0 - yC
    var p3 = sqrt(p1 * p1 + p2 * p2 + 0 * 0)
    var p4 = p3 * 1 / 2
    var p5 = p4 + 0 - thh
    var xGp = p5 > 0 ? xF : xG
    var yGp = p5 > 0 ? yF : yG
    var xBp = p5 > 0 ? xC : xB
    var yBp = p5 > 0 ? yC : yB
    var en0 = atan2(sdxF, sdyF)
    var en1 = en0 + 21600000 - 0
    var en2 = en0 > 0 ? en0 : en1
    var od0 = en2 + 0 - enAng
    var od1 = od0 + 21600000 - 0
    var od2 = od0 > 0 ? od0 : od1
    var st0 = stAng + 0 - od2
    var st1 = st0 + 21600000 - 0
    var st2 = st0 > 0 ? st0 : st1
    var sw0 = en2 + 0 - st2
    var sw1 = sw0 + 21600000 - 0
    var swAng = sw0 > 0 ? sw0 : sw1
    var ist0 = atan2(sdxC, sdyC)
    var ist1 = ist0 + 21600000 - 0
    var istAng = ist0 > 0 ? ist0 : ist1
    var id0 = istAng + 0 - enAng
    var id1 = id0 + 0 - 21600000
    var id2 = id0 > 0 ? id1 : id0
    var ien0 = stAng + 0 - id2
    var ien1 = ien0 + 0 - 21600000
    var ien2 = ien1 > 0 ? ien1 : ien0
    var isw1 = ien2 + 0 - istAng
    var isw2 = isw1 + 0 - 21600000
    var iswAng = isw1 > 0 ? isw2 : isw1
    var wtE = rw1 * sin(st2)
    var htE = max(rh1, st2)
    var dxE = rw1 * (cos(atan(wtE / htE)))
    var dyE = rh1 * sin(atan(wtE / htE))
    var xE = hc + dxE - 0
    var yE = vc + dyE - 0
    var wtD = rw2 * sin(ien2)
    var htD = max(rh2, ien2)
    var dxD = rw2 * (cos(atan(wtD / htD)))
    var dyD = rh2 * sin(atan(wtD / htD))
    var xD = hc + dxD - 0
    var yD = vc + dyD - 0
    var xKp = p5 > 0 ? xE : xK
    var yKp = p5 > 0 ? yE : yK
    var xJp = p5 > 0 ? xD : xJ
    var yJp = p5 > 0 ? yD : yJ
    var aL = lptAng + 0 - cd4
    var aA = ptAng + cd4 - 0
    var aB = ptAng + cd2 - 0
    var aJ = lptAng + cd2 - 0
    var idx = max(rw1, 2700000)
    var idy = rh1 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${xL},${yL}L${xKp},${yKp}L${xE},${yE}L${xGp},${yGp}L${xA},${yA}L${xBp},${yBp}L${xC},${yC}L${xJp},${yJp}Z`]
}

function leftRightRibbon(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000
    adj3 = adj3 || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a3 = adj3 < 0 ? 0 : (adj3 > 33333 ? 33333 : adj3)
    var maxAdj1 = 100000 + 0 - a3
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var w1 = wd2 + 0 - wd32
    var maxAdj2 = 100000 * w1 / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var x1 = ss * a2 / 100000
    var x4 = r + 0 - x1
    var dy1 = h * a1 / 200000
    var dy2 = h * a3 / -200000
    var ly1 = vc + dy2 - dy1
    var ry4 = vc + dy1 - dy2
    var ly2 = ly1 + dy1 - 0
    var ry3 = b + 0 - ly2
    var ly4 = ly2 * 2 / 1
    var ry1 = b + 0 - ly4
    var ly3 = ly4 + 0 - ly1
    var ry2 = b + 0 - ly3
    var hR = a3 * ss / 400000
    var x2 = hc + 0 - wd32
    var x3 = hc + wd32 - 0
    var y1 = ly1 + hR - 0
    var y2 = ry2 + 0 - hR
    return [`M${l},${ly2}L${x1},${t}L${x1},${ly1}L${hc},${ly1}L${x4},${ry2}L${x4},${ry1}L${r},${ry3}L${x4},${b}L${x4},${ry4}L${hc},${ry4}L${x2},${ly3}L${x1},${ly3}L${x1},${ly4}Z`, `M${x3},${y1}L${x3},${ry2}Z`, `M${l},${ly2}L${x1},${t}L${x1},${ly1}L${hc},${ly1}L${x4},${ry2}L${x4},${ry1}L${r},${ry3}L${x4},${b}L${x4},${ry4}L${hc},${ry4}L${x2},${ly3}L${x1},${ly3}L${x1},${ly4}ZM${x3},${y1}L${x3},${ry2}M${x2},${y2}L${x2},${ly3}`]
}

function leftRightUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var q1 = 100000 + 0 - maxAdj1
    var maxAdj3 = q1 * 1 / 2
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var x1 = ss * a3 / 100000
    var dx2 = ss * a2 / 100000
    var x2 = hc + 0 - dx2
    var x5 = hc + dx2 - 0
    var dx3 = ss * a1 / 200000
    var x3 = hc + 0 - dx3
    var x4 = hc + dx3 - 0
    var x6 = r + 0 - x1
    var dy2 = ss * a2 / 50000
    var y2 = b + 0 - dy2
    var y4 = b + 0 - dx2
    var y3 = y4 + 0 - dx3
    var y5 = y4 + dx3 - 0
    var il = dx3 * x1 / dx2
    var ir = r + 0 - il
    return [`M${l},${y4}L${x1},${y2}L${x1},${y3}L${x3},${y3}L${x3},${x1}L${x2},${x1}L${hc},${t}L${x5},${x1}L${x4},${x1}L${x4},${y3}L${x6},${y3}L${x6},${y2}L${r},${y4}L${x6},${b}L${x6},${y5}L${x1},${y5}L${x1},${b}Z`]
}

function leftUpArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 100000 + 0 - maxAdj1
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var x1 = ss * a3 / 100000
    var dx2 = ss * a2 / 50000
    var x2 = r + 0 - dx2
    var y2 = b + 0 - dx2
    var dx4 = ss * a2 / 100000
    var x4 = r + 0 - dx4
    var y4 = b + 0 - dx4
    var dx3 = ss * a1 / 200000
    var x3 = x4 + 0 - dx3
    var x5 = x4 + dx3 - 0
    var y3 = y4 + 0 - dx3
    var y5 = y4 + dx3 - 0
    var il = dx3 * x1 / dx4
    var cx1 = x1 + x5 / 2
    var cy1 = x1 + y5 / 2
    return [`M${l},${y4}L${x1},${y2}L${x1},${y3}L${x3},${y3}L${x3},${x1}L${x2},${x1}L${x4},${t}L${r},${x1}L${x5},${x1}L${x5},${y5}L${x1},${y5}L${x1},${b}Z`]
}

function lightningBolt(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var x1 = w * 5022 / 21600
    var x3 = w * 8472 / 21600
    var x4 = w * 8757 / 21600
    var x5 = w * 10012 / 21600
    var x8 = w * 12860 / 21600
    var x9 = w * 13917 / 21600
    var x11 = w * 16577 / 21600
    var y1 = h * 3890 / 21600
    var y2 = h * 6080 / 21600
    var y4 = h * 7437 / 21600
    var y6 = h * 9705 / 21600
    var y7 = h * 12007 / 21600
    var y10 = h * 14277 / 21600
    var y11 = h * 14915 / 21600
    return [`M${8472},${0}L${12860},${6080}L${11050},${6797}L${16577},${12007}L${14767},${12877}L${21600},${21600}L${10012},${14915}L${12222},${13987}L${5022},${9705}L${7602},${8382}L${0},${3890}Z`]
}

function line(w, h, l, r, t, b, ) {

    // no guides
    return [`M${l},${t}L${r},${b}`]
}

function lineInv(w, h, l, r, t, b, ) {

    // no guides
    return [`M${l},${b}L${r},${t}`]
}

function mathDivide(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 23520
    adj2 = adj2 || 5880
    adj3 = adj3 || 11760


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 1000 ? 1000 : (adj1 > 36745 ? 36745 : adj1)
    var ma1 = 0 + 0 - a1
    var ma3h = 73490 + ma1 / 4
    var ma3w = 36745 * w / h
    var maxAdj3 = min(ma3h, ma3w)
    var a3 = adj3 < 1000 ? 1000 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var m4a3 = -4 * a3 / 1
    var maxAdj2 = 73490 + m4a3 - a1
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var dy1 = h * a1 / 200000
    var yg = h * a2 / 100000
    var rad = h * a3 / 100000
    var dx1 = w * 73490 / 200000
    var y3 = vc + 0 - dy1
    var y4 = vc + dy1 - 0
    var a = yg + rad - 0
    var y2 = y3 + 0 - a
    var y1 = y2 + 0 - rad
    var y5 = b + 0 - y1
    var x1 = hc + 0 - dx1
    var x3 = hc + dx1 - 0
    var x2 = hc + 0 - rad
    return [`M${hc},${y1}ZM${hc},${y5}ZM${x1},${y3}L${x3},${y3}L${x3},${y4}L${x1},${y4}Z`]
}

function mathEqual(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 23520
    adj2 = adj2 || 11760


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 36745 ? 36745 : adj1)
    var 2 a1 = a1 * 2 / 1
    var mAdj2 = 100000 + 0 - 2 a1
    var a2 = adj2 < 0 ? 0 : (adj2 > mAdj2 ? mAdj2 : adj2)
    var dy1 = h * a1 / 100000
    var dy2 = h * a2 / 200000
    var dx1 = w * 73490 / 200000
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    var y1 = y2 + 0 - dy1
    var y4 = y3 + dy1 - 0
    var x1 = hc + 0 - dx1
    var x2 = hc + dx1 - 0
    var yC1 = y1 + y2 / 2
    var yC2 = y3 + y4 / 2
    return [`M${x1},${y1}L${x2},${y1}L${x2},${y2}L${x1},${y2}ZM${x1},${y3}L${x2},${y3}L${x2},${y4}L${x1},${y4}Z`]
}

function mathMinus(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || 23520


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var dy1 = h * a1 / 200000
    var dx1 = w * 73490 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + dy1 - 0
    var x1 = hc + 0 - dx1
    var x2 = hc + dx1 - 0
    return [`M${x1},${y1}L${x2},${y1}L${x2},${y2}L${x1},${y2}Z`]
}

function mathMultiply(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || 23520


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 51965 ? 51965 : adj1)
    var th = ss * a1 / 100000
    var a = atan2(w, h)
    var sa = 1 * sin(a)
    var ca = max(1, a)
    var ta = 1 * tan(a)
    var dl = sqrt(w * w + h * h + 0 * 0)
    var rw = dl * 51965 / 100000
    var lM = dl + 0 - rw
    var xM = ca * lM / 2
    var yM = sa * lM / 2
    var dxAM = sa * th / 2
    var dyAM = ca * th / 2
    var xA = xM + 0 - dxAM
    var yA = yM + dyAM - 0
    var xB = xM + dxAM - 0
    var yB = yM + 0 - dyAM
    var xBC = hc + 0 - xB
    var yBC = xBC * ta / 1
    var yC = yBC + yB - 0
    var xD = r + 0 - xB
    var xE = r + 0 - xA
    var yFE = vc + 0 - yA
    var xFE = yFE * 1 / ta
    var xF = xE + 0 - xFE
    var xL = xA + xFE - 0
    var yG = b + 0 - yA
    var yH = b + 0 - yB
    var yI = b + 0 - yC
    var xC2 = r + 0 - xM
    var yC3 = b + 0 - yM
    return [`M${xA},${yA}L${xB},${yB}L${hc},${yC}L${xD},${yB}L${xE},${yA}L${xF},${vc}L${xE},${yG}L${xD},${yH}L${hc},${yI}L${xB},${yH}L${xA},${yG}L${xL},${vc}Z`]
}

function mathNotEqual(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 23520
    adj2 = adj2 || 6600000
    adj3 = adj3 || 11760


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var crAng = adj2 < 4200000 ? 4200000 : (adj2 > 6600000 ? 6600000 : adj2)
    var 2 a1 = a1 * 2 / 1
    var maxAdj3 = 100000 + 0 - 2 a1
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var dy1 = h * a1 / 100000
    var dy2 = h * a3 / 200000
    var dx1 = w * 73490 / 200000
    var x1 = hc + 0 - dx1
    var x8 = hc + dx1 - 0
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    var y1 = y2 + 0 - dy1
    var y4 = y3 + dy1 - 0
    var cadj2 = crAng + 0 - cd4
    var xadj2 = hd2 * tan(cadj2)
    var len = sqrt(xadj2 * xadj2 + hd2 * hd2 + 0 * 0)
    var bhw = len * dy1 / hd2
    var bhw2 = bhw * 1 / 2
    var x7 = hc + xadj2 - bhw2
    var dx67 = xadj2 * y1 / hd2
    var x6 = x7 + 0 - dx67
    var dx57 = xadj2 * y2 / hd2
    var x5 = x7 + 0 - dx57
    var dx47 = xadj2 * y3 / hd2
    var x4 = x7 + 0 - dx47
    var dx37 = xadj2 * y4 / hd2
    var x3 = x7 + 0 - dx37
    var dx27 = xadj2 * 2 / 1
    var x2 = x7 + 0 - dx27
    var rx7 = x7 + bhw - 0
    var rx6 = x6 + bhw - 0
    var rx5 = x5 + bhw - 0
    var rx4 = x4 + bhw - 0
    var rx3 = x3 + bhw - 0
    var rx2 = x2 + bhw - 0
    var dx7 = dy1 * hd2 / len
    var rxt = x7 + dx7 - 0
    var lxt = rx7 + 0 - dx7
    var rx = cadj2 > 0 ? rxt : rx7
    var lx = cadj2 > 0 ? x7 : lxt
    var dy3 = dy1 * xadj2 / len
    var dy4 = 0 + 0 - dy3
    var ry = cadj2 > 0 ? dy3 : t
    var ly = cadj2 > 0 ? t : dy4
    var dlx = w + 0 - rx
    var drx = w + 0 - lx
    var dly = h + 0 - ry
    var dry = h + 0 - ly
    var xC1 = rx + lx / 2
    var xC2 = drx + dlx / 2
    var yC1 = ry + ly / 2
    var yC2 = y1 + y2 / 2
    var yC3 = y3 + y4 / 2
    var yC4 = dry + dly / 2
    return [`M${x1},${y1}L${x6},${y1}L${lx},${ly}L${rx},${ry}L${rx6},${y1}L${x8},${y1}L${x8},${y2}L${rx5},${y2}L${rx4},${y3}L${x8},${y3}L${x8},${y4}L${rx3},${y4}L${drx},${dry}L${dlx},${dly}L${x3},${y4}L${x1},${y4}L${x1},${y3}L${x4},${y3}L${x5},${y2}L${x1},${y2}Z`]
}

function mathPlus(w, h, l, r, t, b, adj1) {
    adj1 = adj1 || 23520


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 73490 ? 73490 : adj1)
    var dx1 = w * 73490 / 200000
    var dy1 = h * 73490 / 200000
    var dx2 = ss * a1 / 200000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dx2
    var y3 = vc + dx2 - 0
    var y4 = vc + dy1 - 0
    return [`M${x1},${y2}L${x2},${y2}L${x2},${y1}L${x3},${y1}L${x3},${y2}L${x4},${y2}L${x4},${y3}L${x3},${y3}L${x3},${y4}L${x2},${y4}L${x2},${y3}L${x1},${y3}Z`]
}

function moon(w, h, l, r, t, b, adj) {
    adj = adj || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 87500 ? 87500 : adj)
    var g0 = ss * a / 100000
    var g0w = g0 * w / ss
    var g1 = ss + 0 - g0
    var g2 = g0 * g0 / g1
    var g3 = ss * ss / g1
    var g4 = g3 * 2 / 1
    var g5 = g4 + 0 - g2
    var g6 = g5 + 0 - g0
    var g6w = g6 * w / ss
    var g7 = g5 * 1 / 2
    var g8 = g7 + 0 - g0
    var dy1 = g8 * hd2 / ss
    var g10h = vc + 0 - dy1
    var g11h = vc + dy1 - 0
    var g12 = g0 * 9598 / 32768
    var g12w = g12 * w / ss
    var g13 = ss + 0 - g12
    var q1 = ss * ss / 1
    var q2 = g13 * g13 / 1
    var q3 = q1 + 0 - q2
    var q4 = sqrt(q3)
    var dy4 = q4 * hd2 / ss
    var g15h = vc + 0 - dy4
    var g16h = vc + dy4 - 0
    var g17w = g6w + 0 - g0w
    var g18w = g17w * 1 / 2
    var dx2p = g0w + g18w - w
    var dx2 = dx2p * -1 / 1
    var dy2 = hd2 * -1 / 1
    var stAng1 = atan2(dx2, dy2)
    var enAngp1 = atan2(dx2, hd2)
    var enAng1 = enAngp1 + 0 - 21600000
    var swAng1 = enAng1 + 0 - stAng1
    return [`M${r},${b}Z`]
}

function nonIsoscelesTrapezoid(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 50000 * w / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj ? maxAdj : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj ? maxAdj : adj2)
    var x1 = ss * a1 / 200000
    var x2 = ss * a1 / 100000
    var dx3 = ss * a2 / 100000
    var x3 = r + 0 - dx3
    var x4 = r + x3 / 2
    var il = wd3 * a1 / maxAdj
    var adjm = max(a1, a2)
    var it = hd3 * adjm / maxAdj
    var irt = wd3 * a2 / maxAdj
    var ir = r + 0 - irt
    return [`M${l},${b}L${x2},${t}L${x3},${t}L${r},${b}Z`]
}

function noSmoking(w, h, l, r, t, b, adj) {
    adj = adj || 18750


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dr = ss * a / 100000
    var iwd2 = wd2 + 0 - dr
    var ihd2 = hd2 + 0 - dr
    var ang = atan2(w, h)
    var ct = max(ihd2, ang)
    var st = iwd2 * sin(ang)
    var m = sqrt(ct * ct + st * st + 0 * 0)
    var n = iwd2 * ihd2 / m
    var drd2 = dr * 1 / 2
    var dang = atan2(n, drd2)
    var 2 dang = dang * 2 / 1
    var swAng = -10800000 + 2 dang - 0
    var t3 = atan2(w, h)
    var stAng1 = t3 + 0 - dang
    var stAng2 = stAng1 + 0 - cd2
    var ct1 = max(ihd2, stAng1)
    var st1 = iwd2 * sin(stAng1)
    var m1 = sqrt(ct1 * ct1 + st1 * st1 + 0 * 0)
    var n1 = iwd2 * ihd2 / m1
    var dx1 = max(n1, stAng1)
    var dy1 = n1 * sin(stAng1)
    var x1 = hc + dx1 - 0
    var y1 = vc + dy1 - 0
    var x2 = hc + 0 - dx1
    var y2 = vc + 0 - dy1
    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${vc}ZM${x1},${y1}ZM${x2},${y2}Z`]
}

function notchedRightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 100000 * w / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var dx2 = ss * a2 / 100000
    var x2 = r + 0 - dx2
    var dy1 = h * a1 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + dy1 - 0
    var x1 = dy1 * dx2 / hd2
    var x3 = r + 0 - x1
    return [`M${l},${y1}L${x2},${y1}L${x2},${t}L${r},${vc}L${x2},${b}L${x2},${y2}L${l},${y2}L${x1},${vc}Z`]
}

function octagon(w, h, l, r, t, b, adj) {
    adj = adj || 29289


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var y2 = b + 0 - x1
    var il = x1 * 1 / 2
    var ir = r + 0 - il
    var ib = b + 0 - il
    return [`M${l},${x1}L${x1},${t}L${x2},${t}L${r},${x1}L${r},${y2}L${x2},${b}L${x1},${b}L${l},${y2}Z`]
}

function parallelogram(w, h, l, r, t, b, adj) {
    adj = adj || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 100000 * w / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var x1 = ss * a / 200000
    var x2 = ss * a / 100000
    var x6 = r + 0 - x1
    var x5 = r + 0 - x2
    var x3 = x5 * 1 / 2
    var x4 = r + 0 - x3
    var il = wd2 * a / maxAdj
    var q1 = 5 * a / maxAdj
    var q2 = 1 + q1 / 12
    var il = q2 * w / 1
    var it = q2 * h / 1
    var ir = r + 0 - il
    var ib = b + 0 - it
    var q3 = h * hc / x2
    var y1 = q3 < 0 ? 0 : (q3 > h ? h : q3)
    var y2 = b + 0 - y1
    return [`M${l},${b}L${x2},${t}L${r},${t}L${x5},${b}Z`]
}

function pentagon(w, h, l, r, t, b, ) {
    hf = hf || 105146
    vf = vf || 110557


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var swd2 = wd2 * hf / 100000
    var shd2 = hd2 * vf / 100000
    var svc = vc * / vf
    var dx1 = max(swd2, 1080000)
    var dx2 = max(swd2, 18360000)
    var dy1 = shd2 * sin(1080000)
    var dy2 = shd2 * sin(18360000)
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var y1 = svc + 0 - dy1
    var y2 = svc + 0 - dy2
    var it = y1 * dx2 / dx1
    return [`M${x1},${y1}L${hc},${t}L${x4},${y1}L${x3},${y2}L${x2},${y2}Z`]
}

function pie(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 0
    adj2 = adj2 || 16200000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var stAng = adj1 < 0 ? 0 : (adj1 > 21599999 ? 21599999 : adj1)
    var enAng = adj2 < 0 ? 0 : (adj2 > 21599999 ? 21599999 : adj2)
    var sw1 = enAng + 0 - stAng
    var sw2 = sw1 + 21600000 - 0
    var swAng = sw1 > 0 ? sw1 : sw2
    var wt1 = wd2 * sin(stAng)
    var ht1 = max(hd2, stAng)
    var dx1 = wd2 * (cos(atan(wt1 / ht1)))
    var dy1 = hd2 * sin(atan(wt1 / ht1))
    var x1 = hc + dx1 - 0
    var y1 = vc + dy1 - 0
    var wt2 = wd2 * sin(enAng)
    var ht2 = max(hd2, enAng)
    var dx2 = wd2 * (cos(atan(wt2 / ht2)))
    var dy2 = hd2 * sin(atan(wt2 / ht2))
    var x2 = hc + dx2 - 0
    var y2 = vc + dy2 - 0
    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${x1},${y1}L${hc},${vc}Z`]
}

function pieWedge(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var g1 = max(w, 13500000)
    var g2 = h * sin(13500000)
    var x1 = r + g1 - 0
    var y1 = b + g2 - 0
    return [`M${l},${b}L${r},${b}Z`]
}

function plaque(w, h, l, r, t, b, adj) {
    adj = adj || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var y2 = b + 0 - x1
    var il = x1 * 70711 / 100000
    var ir = r + 0 - il
    var ib = b + 0 - il
    return [`M${l},${x1}L${x2},${t}L${r},${y2}L${x1},${b}Z`]
}

function plaqueTabs(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var md = sqrt(w * w + h * h + 0 * 0)
    var dx = 1 * md / 20
    var y1 = 0 + b - dx
    var x1 = 0 + r - dx
    return [`M${l},${t}L${dx},${t}Z`, `M${l},${y1}L${l},${b}Z`, `M${r},${t}L${r},${dx}Z`, `M${x1},${b}L${r},${b}Z`]
}

function plus(w, h, l, r, t, b, adj) {
    adj = adj || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var y2 = b + 0 - x1
    var d = w + 0 - h
    var il = d > 0 ? l : x1
    var ir = d > 0 ? r : x2
    var it = d > 0 ? x1 : t
    var ib = d > 0 ? y2 : b
    return [`M${l},${x1}L${x1},${x1}L${x1},${t}L${x2},${t}L${x2},${x1}L${r},${x1}L${r},${y2}L${x2},${y2}L${x2},${b}L${x1},${b}L${x1},${y2}L${l},${y2}Z`]
}

function quadArrow(w, h, l, r, t, b, adj1, adj2, adj3) {
    adj1 = adj1 || 22500
    adj2 = adj2 || 22500
    adj3 = adj3 || 22500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var q1 = 100000 + 0 - maxAdj1
    var maxAdj3 = q1 * 1 / 2
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var x1 = ss * a3 / 100000
    var dx2 = ss * a2 / 100000
    var x2 = hc + 0 - dx2
    var x5 = hc + dx2 - 0
    var dx3 = ss * a1 / 200000
    var x3 = hc + 0 - dx3
    var x4 = hc + dx3 - 0
    var x6 = r + 0 - x1
    var y2 = vc + 0 - dx2
    var y5 = vc + dx2 - 0
    var y3 = vc + 0 - dx3
    var y4 = vc + dx3 - 0
    var y6 = b + 0 - x1
    var il = dx3 * x1 / dx2
    var ir = r + 0 - il
    return [`M${l},${vc}L${x1},${y2}L${x1},${y3}L${x3},${y3}L${x3},${x1}L${x2},${x1}L${hc},${t}L${x5},${x1}L${x4},${x1}L${x4},${y3}L${x6},${y3}L${x6},${y2}L${r},${vc}L${x6},${y5}L${x6},${y4}L${x4},${y4}L${x4},${y6}L${x5},${y6}L${hc},${b}L${x2},${y6}L${x3},${y6}L${x3},${y4}L${x1},${y4}L${x1},${y5}Z`]
}

function quadArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 18515
    adj2 = adj2 || 18515
    adj3 = adj3 || 18515
    adj4 = adj4 || 48123


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 50000 + 0 - a2
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q2 = a3 * 2 / 1
    var maxAdj4 = 100000 + 0 - q2
    var a4 = adj4 < a1 ? a1 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var dx2 = ss * a2 / 100000
    var dx3 = ss * a1 / 200000
    var ah = ss * a3 / 100000
    var dx1 = w * a4 / 200000
    var dy1 = h * a4 / 200000
    var x8 = r + 0 - ah
    var x2 = hc + 0 - dx1
    var x7 = hc + dx1 - 0
    var x3 = hc + 0 - dx2
    var x6 = hc + dx2 - 0
    var x4 = hc + 0 - dx3
    var x5 = hc + dx3 - 0
    var y8 = b + 0 - ah
    var y2 = vc + 0 - dy1
    var y7 = vc + dy1 - 0
    var y3 = vc + 0 - dx2
    var y6 = vc + dx2 - 0
    var y4 = vc + 0 - dx3
    var y5 = vc + dx3 - 0
    return [`M${l},${vc}L${ah},${y3}L${ah},${y4}L${x2},${y4}L${x2},${y2}L${x4},${y2}L${x4},${ah}L${x3},${ah}L${hc},${t}L${x6},${ah}L${x5},${ah}L${x5},${y2}L${x7},${y2}L${x7},${y4}L${x8},${y4}L${x8},${y3}L${r},${vc}L${x8},${y6}L${x8},${y5}L${x7},${y5}L${x7},${y7}L${x5},${y7}L${x5},${y8}L${x6},${y8}L${hc},${b}L${x3},${y8}L${x4},${y8}L${x4},${y7}L${x2},${y7}L${x2},${y5}L${ah},${y5}L${ah},${y6}Z`]
}

function rect(w, h, l, r, t, b, ) {

    // no guides
    return [`M${l},${t}L${r},${t}L${r},${b}L${l},${b}Z`]
}

function ribbon(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 16667
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 33333 ? 33333 : adj1)
    var a2 = adj2 < 25000 ? 25000 : (adj2 > 75000 ? 75000 : adj2)
    var x10 = r + 0 - wd8
    var dx2 = w * a2 / 200000
    var x2 = hc + 0 - dx2
    var x9 = hc + dx2 - 0
    var x3 = x2 + wd32 - 0
    var x8 = x9 + 0 - wd32
    var x5 = x2 + wd8 - 0
    var x6 = x9 + 0 - wd8
    var x4 = x5 + 0 - wd32
    var x7 = x6 + wd32 - 0
    var y1 = h * a1 / 200000
    var y2 = h * a1 / 100000
    var y4 = b + 0 - y2
    var y3 = y4 * 1 / 2
    var hR = h * a1 / 400000
    var y5 = b + 0 - hR
    var y6 = y2 + 0 - hR
    return [`M${l},${t}L${x4},${t}L${x3},${y1}L${x8},${y2}L${x7},${y1}L${r},${t}L${x10},${y3}L${r},${y4}L${x9},${y4}L${x9},${y5}L${x3},${b}L${x2},${y4}L${l},${y4}L${wd8},${y3}Z`, `M${x5},${hR}L${x3},${y1}L${x5},${y2}ZM${x6},${hR}L${x8},${y1}L${x6},${y2}Z`, `M${l},${t}L${x4},${t}L${x3},${y1}L${x8},${y2}L${x7},${y1}L${r},${t}L${x10},${y3}L${r},${y4}L${x9},${y4}L${x9},${y5}L${x3},${b}L${x2},${y4}L${l},${y4}L${wd8},${y3}ZM${x5},${hR}L${x5},${y2}M${x6},${y2}L${x6},${hR}M${x2},${y4}L${x2},${y6}M${x9},${y6}L${x9},${y4}`]
}

function ribbon2(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 16667
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 33333 ? 33333 : adj1)
    var a2 = adj2 < 25000 ? 25000 : (adj2 > 75000 ? 75000 : adj2)
    var x10 = r + 0 - wd8
    var dx2 = w * a2 / 200000
    var x2 = hc + 0 - dx2
    var x9 = hc + dx2 - 0
    var x3 = x2 + wd32 - 0
    var x8 = x9 + 0 - wd32
    var x5 = x2 + wd8 - 0
    var x6 = x9 + 0 - wd8
    var x4 = x5 + 0 - wd32
    var x7 = x6 + wd32 - 0
    var dy1 = h * a1 / 200000
    var y1 = b + 0 - dy1
    var dy2 = h * a1 / 100000
    var y2 = b + 0 - dy2
    var y4 = t + dy2 - 0
    var y3 = y4 + b / 2
    var hR = h * a1 / 400000
    var y6 = b + 0 - hR
    var y7 = y1 + 0 - hR
    return [`M${l},${b}L${x4},${b}L${x3},${y1}L${x8},${y2}L${x7},${y1}L${r},${b}L${x10},${y3}L${r},${y4}L${x9},${y4}L${x9},${hR}L${x3},${t}L${x2},${y4}L${l},${y4}L${wd8},${y3}Z`, `M${x5},${y6}L${x3},${y1}L${x5},${y2}ZM${x6},${y6}L${x8},${y1}L${x6},${y2}Z`, `M${l},${b}L${wd8},${y3}L${l},${y4}L${x2},${y4}L${x2},${hR}L${x8},${t}L${x9},${y4}L${x9},${y4}L${r},${y4}L${x10},${y3}L${r},${b}L${x7},${b}L${x8},${y1}L${x3},${y2}L${x4},${y1}ZM${x5},${y2}L${x5},${y6}M${x6},${y6}L${x6},${y2}M${x2},${y7}L${x2},${y4}M${x9},${y4}L${x9},${y7}`]
}

function rightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 100000 * w / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var dx1 = ss * a2 / 100000
    var x1 = r + 0 - dx1
    var dy1 = h * a1 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + dy1 - 0
    var dx2 = y1 * dx1 / hd2
    var x2 = x1 + dx2 - 0
    return [`M${l},${y1}L${x1},${y1}L${x1},${t}L${r},${vc}L${x1},${b}L${x1},${y2}L${l},${y2}Z`]
}

function rightArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 64977


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * h / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 100000 * w / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q2 = a3 * ss / w
    var maxAdj4 = 100000 + 0 - q2
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var dy1 = ss * a2 / 100000
    var dy2 = ss * a1 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    var y4 = vc + dy1 - 0
    var dx3 = ss * a3 / 100000
    var x3 = r + 0 - dx3
    var x2 = w * a4 / 100000
    var x1 = x2 * 1 / 2
    return [`M${l},${t}L${x2},${t}L${x2},${y2}L${x3},${y2}L${x3},${y1}L${r},${vc}L${x3},${y4}L${x3},${y3}L${x2},${y3}L${x2},${b}L${l},${b}Z`]
}

function rightBrace(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 8333
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 100000 ? 100000 : adj2)
    var q1 = 100000 + 0 - a2
    var q2 = min(q1, a2)
    var q3 = q2 * 1 / 2
    var maxAdj1 = q3 * h / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var y1 = ss * a1 / 100000
    var y3 = h * a2 / 100000
    var y2 = y3 + 0 - y1
    var y4 = b + 0 - y1
    var dx1 = max(wd2, 2700000)
    var dy1 = y1 * sin(2700000)
    var ir = l + dx1 - 0
    var it = y1 + 0 - dy1
    var ib = b + dy1 - y1
    return [`M${l},${t}L${hc},${y2}L${hc},${y4}Z`, `M${l},${t}L${hc},${y2}L${hc},${y4}`]
}

function rightBracket(w, h, l, r, t, b, adj) {
    adj = adj || 8333


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 50000 * h / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var y1 = ss * a / 100000
    var y2 = b + 0 - y1
    var dx1 = max(w, 2700000)
    var dy1 = y1 * sin(2700000)
    var ir = l + dx1 - 0
    var it = y1 + 0 - dy1
    var ib = b + dy1 - y1
    return [`M${l},${t}L${r},${y2}Z`, `M${l},${t}L${r},${y2}`]
}

function round1Rect(w, h, l, r, t, b, adj) {
    adj = adj || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dx1 = ss * a / 100000
    var x1 = r + 0 - dx1
    var idx = dx1 * 29289 / 100000
    var ir = r + 0 - idx
    return [`M${l},${t}L${x1},${t}L${r},${b}L${l},${b}Z`]
}

function round2DiagRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 16667
    adj2 = adj2 || 0


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var x1 = ss * a1 / 100000
    var y1 = b + 0 - x1
    var a = ss * a2 / 100000
    var x2 = r + 0 - a
    var y2 = b + 0 - a
    var dx1 = x1 * 29289 / 100000
    var dx2 = a * 29289 / 100000
    var d = dx1 + 0 - dx2
    var dx = d > 0 ? dx1 : dx2
    var ir = r + 0 - dx
    var ib = b + 0 - dx
    return [`M${x1},${t}L${x2},${t}L${r},${y1}L${a},${b}L${l},${x1}Z`]
}

function round2SameRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 16667
    adj2 = adj2 || 0


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var tx1 = ss * a1 / 100000
    var tx2 = r + 0 - tx1
    var bx1 = ss * a2 / 100000
    var bx2 = r + 0 - bx1
    var by1 = b + 0 - bx1
    var d = tx1 + 0 - bx1
    var tdx = tx1 * 29289 / 100000
    var bdx = bx1 * 29289 / 100000
    var il = d > 0 ? tdx : bdx
    var ir = r + 0 - il
    var ib = b + 0 - bdx
    return [`M${tx1},${t}L${tx2},${t}L${r},${by1}L${bx1},${b}L${l},${tx1}Z`]
}

function roundRect(w, h, l, r, t, b, adj) {
    adj = adj || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var x1 = ss * a / 100000
    var x2 = r + 0 - x1
    var y2 = b + 0 - x1
    var il = x1 * 29289 / 100000
    var ir = r + 0 - il
    var ib = b + 0 - il
    return [`M${l},${x1}L${x2},${t}L${r},${y2}L${x1},${b}Z`]
}

function rtTriangle(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var it = h * 7 / 12
    var ir = w * 7 / 12
    var ib = h * 11 / 12
    return [`M${l},${b}L${l},${t}L${r},${b}Z`]
}

function smileyFace(w, h, l, r, t, b, adj) {
    adj = adj || 4653


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < -4653 ? -4653 : (adj > 4653 ? 4653 : adj)
    var x1 = w * 4969 / 21699
    var x2 = w * 6215 / 21600
    var x3 = w * 13135 / 21600
    var x4 = w * 16640 / 21600
    var y1 = h * 7570 / 21600
    var y3 = h * 16515 / 21600
    var dy2 = h * a / 100000
    var y2 = y3 + 0 - dy2
    var y4 = y3 + dy2 - 0
    var dy3 = h * a / 50000
    var y5 = y4 + dy3 - 0
    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    var wR = w * 1125 / 21600
    var hR = h * 1125 / 21600
    return [`M${l},${vc}Z`, `M${x2},${y1}M${x3},${y1}`, `M${x1},${y2}Z`, `M${l},${vc}Z`]
}

function snip1Rect(w, h, l, r, t, b, adj) {
    adj = adj || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dx1 = ss * a / 100000
    var x1 = r + 0 - dx1
    var it = dx1 * 1 / 2
    var ir = x1 + r / 2
    return [`M${l},${t}L${x1},${t}L${r},${dx1}L${r},${b}L${l},${b}Z`]
}

function snip2DiagRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 0
    adj2 = adj2 || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var lx1 = ss * a1 / 100000
    var lx2 = r + 0 - lx1
    var ly1 = b + 0 - lx1
    var rx1 = ss * a2 / 100000
    var rx2 = r + 0 - rx1
    var ry1 = b + 0 - rx1
    var d = lx1 + 0 - rx1
    var dx = d > 0 ? lx1 : rx1
    var il = dx * 1 / 2
    var ir = r + 0 - il
    var ib = b + 0 - il
    return [`M${lx1},${t}L${rx2},${t}L${r},${rx1}L${r},${ly1}L${lx2},${b}L${rx1},${b}L${l},${ry1}L${l},${lx1}Z`]
}

function snip2SameRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 16667
    adj2 = adj2 || 0


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var tx1 = ss * a1 / 100000
    var tx2 = r + 0 - tx1
    var bx1 = ss * a2 / 100000
    var bx2 = r + 0 - bx1
    var by1 = b + 0 - bx1
    var d = tx1 + 0 - bx1
    var dx = d > 0 ? tx1 : bx1
    var il = dx * 1 / 2
    var ir = r + 0 - il
    var it = tx1 * 1 / 2
    var ib = by1 + b / 2
    return [`M${tx1},${t}L${tx2},${t}L${r},${tx1}L${r},${by1}L${bx2},${b}L${bx1},${b}L${l},${by1}L${l},${tx1}Z`]
}

function snipRoundRect(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 16667
    adj2 = adj2 || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 50000 ? 50000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > 50000 ? 50000 : adj2)
    var x1 = ss * a1 / 100000
    var dx2 = ss * a2 / 100000
    var x2 = r + 0 - dx2
    var il = x1 * 29289 / 100000
    var ir = x2 + r / 2
    return [`M${x1},${t}L${x2},${t}L${r},${dx2}L${r},${b}L${l},${b}L${l},${x1}Z`]
}

function squareTabs(w, h, l, r, t, b, ) {


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var md = sqrt(w * w + h * h + 0 * 0)
    var dx = 1 * md / 20
    var y1 = 0 + b - dx
    var x1 = 0 + r - dx
    return [`M${l},${t}L${dx},${t}L${dx},${dx}L${l},${dx}Z`, `M${l},${y1}L${dx},${y1}L${dx},${b}L${l},${b}Z`, `M${x1},${t}L${r},${t}L${r},${dx}L${x1},${dx}Z`, `M${x1},${y1}L${r},${y1}L${r},${b}L${x1},${b}Z`]
}

function star10(w, h, l, r, t, b, adj) {
    adj = adj || 42533
    hf = hf || 105146


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var swd2 = wd2 * hf / 100000
    var dx1 = swd2 * 95106 / 100000
    var dx2 = swd2 * 58779 / 100000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var dy1 = hd2 * 80902 / 100000
    var dy2 = hd2 * 30902 / 100000
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    var y4 = vc + dy1 - 0
    var iwd2 = swd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx1 = iwd2 * 80902 / 100000
    var sdx2 = iwd2 * 30902 / 100000
    var sdy1 = ihd2 * 95106 / 100000
    var sdy2 = ihd2 * 58779 / 100000
    var sx1 = hc + 0 - iwd2
    var sx2 = hc + 0 - sdx1
    var sx3 = hc + 0 - sdx2
    var sx4 = hc + sdx2 - 0
    var sx5 = hc + sdx1 - 0
    var sx6 = hc + iwd2 - 0
    var sy1 = vc + 0 - sdy1
    var sy2 = vc + 0 - sdy2
    var sy3 = vc + sdy2 - 0
    var sy4 = vc + sdy1 - 0
    var yAdj = vc + 0 - ihd2
    return [`M${x1},${y2}L${sx2},${sy2}L${x2},${y1}L${sx3},${sy1}L${hc},${t}L${sx4},${sy1}L${x3},${y1}L${sx5},${sy2}L${x4},${y2}L${sx6},${vc}L${x4},${y3}L${sx5},${sy3}L${x3},${y4}L${sx4},${sy4}L${hc},${b}L${sx3},${sy4}L${x2},${y4}L${sx2},${sy3}L${x1},${y3}L${sx1},${vc}Z`]
}

function star12(w, h, l, r, t, b, adj) {
    adj = adj || 37500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dx1 = max(wd2, 1800000)
    var dy1 = hd2 * sin(3600000)
    var x1 = hc + 0 - dx1
    var x3 = w * 3 / 4
    var x4 = hc + dx1 - 0
    var y1 = vc + 0 - dy1
    var y3 = h * 3 / 4
    var y4 = vc + dy1 - 0
    var iwd2 = wd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx1 = max(iwd2, 900000)
    var sdx2 = max(iwd2, 2700000)
    var sdx3 = max(iwd2, 4500000)
    var sdy1 = ihd2 * sin(4500000)
    var sdy2 = ihd2 * sin(2700000)
    var sdy3 = ihd2 * sin(900000)
    var sx1 = hc + 0 - sdx1
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + 0 - sdx3
    var sx4 = hc + sdx3 - 0
    var sx5 = hc + sdx2 - 0
    var sx6 = hc + sdx1 - 0
    var sy1 = vc + 0 - sdy1
    var sy2 = vc + 0 - sdy2
    var sy3 = vc + 0 - sdy3
    var sy4 = vc + sdy3 - 0
    var sy5 = vc + sdy2 - 0
    var sy6 = vc + sdy1 - 0
    var yAdj = vc + 0 - ihd2
    return [`M${l},${vc}L${sx1},${sy3}L${x1},${hd4}L${sx2},${sy2}L${wd4},${y1}L${sx3},${sy1}L${hc},${t}L${sx4},${sy1}L${x3},${y1}L${sx5},${sy2}L${x4},${hd4}L${sx6},${sy3}L${r},${vc}L${sx6},${sy4}L${x4},${y3}L${sx5},${sy5}L${x3},${y4}L${sx4},${sy6}L${hc},${b}L${sx3},${sy6}L${wd4},${y4}L${sx2},${sy5}L${x1},${y3}L${sx1},${sy4}Z`]
}

function star16(w, h, l, r, t, b, adj) {
    adj = adj || 37500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dx1 = wd2 * 92388 / 100000
    var dx2 = wd2 * 70711 / 100000
    var dx3 = wd2 * 38268 / 100000
    var dy1 = hd2 * 92388 / 100000
    var dy2 = hd2 * 70711 / 100000
    var dy3 = hd2 * 38268 / 100000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + 0 - dx3
    var x4 = hc + dx3 - 0
    var x5 = hc + dx2 - 0
    var x6 = hc + dx1 - 0
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + 0 - dy3
    var y4 = vc + dy3 - 0
    var y5 = vc + dy2 - 0
    var y6 = vc + dy1 - 0
    var iwd2 = wd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx1 = iwd2 * 98079 / 100000
    var sdx2 = iwd2 * 83147 / 100000
    var sdx3 = iwd2 * 55557 / 100000
    var sdx4 = iwd2 * 19509 / 100000
    var sdy1 = ihd2 * 98079 / 100000
    var sdy2 = ihd2 * 83147 / 100000
    var sdy3 = ihd2 * 55557 / 100000
    var sdy4 = ihd2 * 19509 / 100000
    var sx1 = hc + 0 - sdx1
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + 0 - sdx3
    var sx4 = hc + 0 - sdx4
    var sx5 = hc + sdx4 - 0
    var sx6 = hc + sdx3 - 0
    var sx7 = hc + sdx2 - 0
    var sx8 = hc + sdx1 - 0
    var sy1 = vc + 0 - sdy1
    var sy2 = vc + 0 - sdy2
    var sy3 = vc + 0 - sdy3
    var sy4 = vc + 0 - sdy4
    var sy5 = vc + sdy4 - 0
    var sy6 = vc + sdy3 - 0
    var sy7 = vc + sdy2 - 0
    var sy8 = vc + sdy1 - 0
    var idx = max(iwd2, 2700000)
    var idy = ihd2 * sin(2700000)
    var il = hc + 0 - idx
    var it = vc + 0 - idy
    var ir = hc + idx - 0
    var ib = vc + idy - 0
    var yAdj = vc + 0 - ihd2
    return [`M${l},${vc}L${sx1},${sy4}L${x1},${y3}L${sx2},${sy3}L${x2},${y2}L${sx3},${sy2}L${x3},${y1}L${sx4},${sy1}L${hc},${t}L${sx5},${sy1}L${x4},${y1}L${sx6},${sy2}L${x5},${y2}L${sx7},${sy3}L${x6},${y3}L${sx8},${sy4}L${r},${vc}L${sx8},${sy5}L${x6},${y4}L${sx7},${sy6}L${x5},${y5}L${sx6},${sy7}L${x4},${y6}L${sx5},${sy8}L${hc},${b}L${sx4},${sy8}L${x3},${y6}L${sx3},${sy7}L${x2},${y5}L${sx2},${sy6}L${x1},${y4}L${sx1},${sy5}Z`]
}

function star24(w, h, l, r, t, b, adj) {
    adj = adj || 37500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dx1 = max(wd2, 900000)
    var dx2 = max(wd2, 1800000)
    var dx3 = max(wd2, 2700000)
    var dx4 = wd4
    var dx5 = max(wd2, 4500000)
    var dy1 = hd2 * sin(4500000)
    var dy2 = hd2 * sin(3600000)
    var dy3 = hd2 * sin(2700000)
    var dy4 = hd4
    var dy5 = hd2 * sin(900000)
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + 0 - dx3
    var x4 = hc + 0 - dx4
    var x5 = hc + 0 - dx5
    var x6 = hc + dx5 - 0
    var x7 = hc + dx4 - 0
    var x8 = hc + dx3 - 0
    var x9 = hc + dx2 - 0
    var x10 = hc + dx1 - 0
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + 0 - dy3
    var y4 = vc + 0 - dy4
    var y5 = vc + 0 - dy5
    var y6 = vc + dy5 - 0
    var y7 = vc + dy4 - 0
    var y8 = vc + dy3 - 0
    var y9 = vc + dy2 - 0
    var y10 = vc + dy1 - 0
    var iwd2 = wd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx1 = iwd2 * 99144 / 100000
    var sdx2 = iwd2 * 92388 / 100000
    var sdx3 = iwd2 * 79335 / 100000
    var sdx4 = iwd2 * 60876 / 100000
    var sdx5 = iwd2 * 38268 / 100000
    var sdx6 = iwd2 * 13053 / 100000
    var sdy1 = ihd2 * 99144 / 100000
    var sdy2 = ihd2 * 92388 / 100000
    var sdy3 = ihd2 * 79335 / 100000
    var sdy4 = ihd2 * 60876 / 100000
    var sdy5 = ihd2 * 38268 / 100000
    var sdy6 = ihd2 * 13053 / 100000
    var sx1 = hc + 0 - sdx1
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + 0 - sdx3
    var sx4 = hc + 0 - sdx4
    var sx5 = hc + 0 - sdx5
    var sx6 = hc + 0 - sdx6
    var sx7 = hc + sdx6 - 0
    var sx8 = hc + sdx5 - 0
    var sx9 = hc + sdx4 - 0
    var sx10 = hc + sdx3 - 0
    var sx11 = hc + sdx2 - 0
    var sx12 = hc + sdx1 - 0
    var sy1 = vc + 0 - sdy1
    var sy2 = vc + 0 - sdy2
    var sy3 = vc + 0 - sdy3
    var sy4 = vc + 0 - sdy4
    var sy5 = vc + 0 - sdy5
    var sy6 = vc + 0 - sdy6
    var sy7 = vc + sdy6 - 0
    var sy8 = vc + sdy5 - 0
    var sy9 = vc + sdy4 - 0
    var sy10 = vc + sdy3 - 0
    var sy11 = vc + sdy2 - 0
    var sy12 = vc + sdy1 - 0
    var idx = max(iwd2, 2700000)
    var idy = ihd2 * sin(2700000)
    var il = hc + 0 - idx
    var it = vc + 0 - idy
    var ir = hc + idx - 0
    var ib = vc + idy - 0
    var yAdj = vc + 0 - ihd2
    return [`M${l},${vc}L${sx1},${sy6}L${x1},${y5}L${sx2},${sy5}L${x2},${y4}L${sx3},${sy4}L${x3},${y3}L${sx4},${sy3}L${x4},${y2}L${sx5},${sy2}L${x5},${y1}L${sx6},${sy1}L${hc},${t}L${sx7},${sy1}L${x6},${y1}L${sx8},${sy2}L${x7},${y2}L${sx9},${sy3}L${x8},${y3}L${sx10},${sy4}L${x9},${y4}L${sx11},${sy5}L${x10},${y5}L${sx12},${sy6}L${r},${vc}L${sx12},${sy7}L${x10},${y6}L${sx11},${sy8}L${x9},${y7}L${sx10},${sy9}L${x8},${y8}L${sx9},${sy10}L${x7},${y9}L${sx8},${sy11}L${x6},${y10}L${sx7},${sy12}L${hc},${b}L${sx6},${sy12}L${x5},${y10}L${sx5},${sy11}L${x4},${y9}L${sx4},${sy10}L${x3},${y8}L${sx3},${sy9}L${x2},${y7}L${sx2},${sy8}L${x1},${y6}L${sx1},${sy7}Z`]
}

function star32(w, h, l, r, t, b, adj) {
    adj = adj || 37500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dx1 = wd2 * 98079 / 100000
    var dx2 = wd2 * 92388 / 100000
    var dx3 = wd2 * 83147 / 100000
    var dx4 = max(wd2, 2700000)
    var dx5 = wd2 * 55557 / 100000
    var dx6 = wd2 * 38268 / 100000
    var dx7 = wd2 * 19509 / 100000
    var dy1 = hd2 * 98079 / 100000
    var dy2 = hd2 * 92388 / 100000
    var dy3 = hd2 * 83147 / 100000
    var dy4 = hd2 * sin(2700000)
    var dy5 = hd2 * 55557 / 100000
    var dy6 = hd2 * 38268 / 100000
    var dy7 = hd2 * 19509 / 100000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + 0 - dx3
    var x4 = hc + 0 - dx4
    var x5 = hc + 0 - dx5
    var x6 = hc + 0 - dx6
    var x7 = hc + 0 - dx7
    var x8 = hc + dx7 - 0
    var x9 = hc + dx6 - 0
    var x10 = hc + dx5 - 0
    var x11 = hc + dx4 - 0
    var x12 = hc + dx3 - 0
    var x13 = hc + dx2 - 0
    var x14 = hc + dx1 - 0
    var y1 = vc + 0 - dy1
    var y2 = vc + 0 - dy2
    var y3 = vc + 0 - dy3
    var y4 = vc + 0 - dy4
    var y5 = vc + 0 - dy5
    var y6 = vc + 0 - dy6
    var y7 = vc + 0 - dy7
    var y8 = vc + dy7 - 0
    var y9 = vc + dy6 - 0
    var y10 = vc + dy5 - 0
    var y11 = vc + dy4 - 0
    var y12 = vc + dy3 - 0
    var y13 = vc + dy2 - 0
    var y14 = vc + dy1 - 0
    var iwd2 = wd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx1 = iwd2 * 99518 / 100000
    var sdx2 = iwd2 * 95694 / 100000
    var sdx3 = iwd2 * 88192 / 100000
    var sdx4 = iwd2 * 77301 / 100000
    var sdx5 = iwd2 * 63439 / 100000
    var sdx6 = iwd2 * 47140 / 100000
    var sdx7 = iwd2 * 29028 / 100000
    var sdx8 = iwd2 * 9802 / 100000
    var sdy1 = ihd2 * 99518 / 100000
    var sdy2 = ihd2 * 95694 / 100000
    var sdy3 = ihd2 * 88192 / 100000
    var sdy4 = ihd2 * 77301 / 100000
    var sdy5 = ihd2 * 63439 / 100000
    var sdy6 = ihd2 * 47140 / 100000
    var sdy7 = ihd2 * 29028 / 100000
    var sdy8 = ihd2 * 9802 / 100000
    var sx1 = hc + 0 - sdx1
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + 0 - sdx3
    var sx4 = hc + 0 - sdx4
    var sx5 = hc + 0 - sdx5
    var sx6 = hc + 0 - sdx6
    var sx7 = hc + 0 - sdx7
    var sx8 = hc + 0 - sdx8
    var sx9 = hc + sdx8 - 0
    var sx10 = hc + sdx7 - 0
    var sx11 = hc + sdx6 - 0
    var sx12 = hc + sdx5 - 0
    var sx13 = hc + sdx4 - 0
    var sx14 = hc + sdx3 - 0
    var sx15 = hc + sdx2 - 0
    var sx16 = hc + sdx1 - 0
    var sy1 = vc + 0 - sdy1
    var sy2 = vc + 0 - sdy2
    var sy3 = vc + 0 - sdy3
    var sy4 = vc + 0 - sdy4
    var sy5 = vc + 0 - sdy5
    var sy6 = vc + 0 - sdy6
    var sy7 = vc + 0 - sdy7
    var sy8 = vc + 0 - sdy8
    var sy9 = vc + sdy8 - 0
    var sy10 = vc + sdy7 - 0
    var sy11 = vc + sdy6 - 0
    var sy12 = vc + sdy5 - 0
    var sy13 = vc + sdy4 - 0
    var sy14 = vc + sdy3 - 0
    var sy15 = vc + sdy2 - 0
    var sy16 = vc + sdy1 - 0
    var idx = max(iwd2, 2700000)
    var idy = ihd2 * sin(2700000)
    var il = hc + 0 - idx
    var it = vc + 0 - idy
    var ir = hc + idx - 0
    var ib = vc + idy - 0
    var yAdj = vc + 0 - ihd2
    return [`M${l},${vc}L${sx1},${sy8}L${x1},${y7}L${sx2},${sy7}L${x2},${y6}L${sx3},${sy6}L${x3},${y5}L${sx4},${sy5}L${x4},${y4}L${sx5},${sy4}L${x5},${y3}L${sx6},${sy3}L${x6},${y2}L${sx7},${sy2}L${x7},${y1}L${sx8},${sy1}L${hc},${t}L${sx9},${sy1}L${x8},${y1}L${sx10},${sy2}L${x9},${y2}L${sx11},${sy3}L${x10},${y3}L${sx12},${sy4}L${x11},${y4}L${sx13},${sy5}L${x12},${y5}L${sx14},${sy6}L${x13},${y6}L${sx15},${sy7}L${x14},${y7}L${sx16},${sy8}L${r},${vc}L${sx16},${sy9}L${x14},${y8}L${sx15},${sy10}L${x13},${y9}L${sx14},${sy11}L${x12},${y10}L${sx13},${sy12}L${x11},${y11}L${sx12},${sy13}L${x10},${y12}L${sx11},${sy14}L${x9},${y13}L${sx10},${sy15}L${x8},${y14}L${sx9},${sy16}L${hc},${b}L${sx8},${sy16}L${x7},${y14}L${sx7},${sy15}L${x6},${y13}L${sx6},${sy14}L${x5},${y12}L${sx5},${sy13}L${x4},${y11}L${sx4},${sy12}L${x3},${y10}L${sx3},${sy11}L${x2},${y9}L${sx2},${sy10}L${x1},${y8}L${sx1},${sy9}Z`]
}

function star4(w, h, l, r, t, b, adj) {
    adj = adj || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var iwd2 = wd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx = max(iwd2, 2700000)
    var sdy = ihd2 * sin(2700000)
    var sx1 = hc + 0 - sdx
    var sx2 = hc + sdx - 0
    var sy1 = vc + 0 - sdy
    var sy2 = vc + sdy - 0
    var yAdj = vc + 0 - ihd2
    return [`M${l},${vc}L${sx1},${sy1}L${hc},${t}L${sx2},${sy1}L${r},${vc}L${sx2},${sy2}L${hc},${b}L${sx1},${sy2}Z`]
}

function star5(w, h, l, r, t, b, adj) {
    adj = adj || 19098
    hf = hf || 105146
    vf = vf || 110557


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var swd2 = wd2 * hf / 100000
    var shd2 = hd2 * vf / 100000
    var svc = vc * / vf
    var dx1 = max(swd2, 1080000)
    var dx2 = max(swd2, 18360000)
    var dy1 = shd2 * sin(1080000)
    var dy2 = shd2 * sin(18360000)
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var y1 = svc + 0 - dy1
    var y2 = svc + 0 - dy2
    var iwd2 = swd2 * a / 50000
    var ihd2 = shd2 * a / 50000
    var sdx1 = max(iwd2, 20520000)
    var sdx2 = max(iwd2, 3240000)
    var sdy1 = ihd2 * sin(3240000)
    var sdy2 = ihd2 * sin(20520000)
    var sx1 = hc + 0 - sdx1
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + sdx2 - 0
    var sx4 = hc + sdx1 - 0
    var sy1 = svc + 0 - sdy1
    var sy2 = svc + 0 - sdy2
    var sy3 = svc + ihd2 - 0
    var yAdj = svc + 0 - ihd2
    return [`M${x1},${y1}L${sx2},${sy1}L${hc},${t}L${sx3},${sy1}L${x4},${y1}L${sx4},${sy2}L${x3},${y2}L${hc},${sy3}L${x2},${y2}L${sx1},${sy2}Z`]
}

function star6(w, h, l, r, t, b, adj) {
    adj = adj || 28868
    hf = hf || 115470


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var swd2 = wd2 * hf / 100000
    var dx1 = max(swd2, 1800000)
    var x1 = hc + 0 - dx1
    var x2 = hc + dx1 - 0
    var y2 = vc + hd4 - 0
    var iwd2 = swd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx2 = iwd2 * 1 / 2
    var sx1 = hc + 0 - iwd2
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + sdx2 - 0
    var sx4 = hc + iwd2 - 0
    var sdy1 = ihd2 * sin(3600000)
    var sy1 = vc + 0 - sdy1
    var sy2 = vc + sdy1 - 0
    var yAdj = vc + 0 - ihd2
    return [`M${x1},${hd4}L${sx2},${sy1}L${hc},${t}L${sx3},${sy1}L${x2},${hd4}L${sx4},${vc}L${x2},${y2}L${sx3},${sy2}L${hc},${b}L${sx2},${sy2}L${x1},${y2}L${sx1},${vc}Z`]
}

function star7(w, h, l, r, t, b, adj) {
    adj = adj || 34601
    hf = hf || 102572
    vf = vf || 105210


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var swd2 = wd2 * hf / 100000
    var shd2 = hd2 * vf / 100000
    var svc = vc * / vf
    var dx1 = swd2 * 97493 / 100000
    var dx2 = swd2 * 78183 / 100000
    var dx3 = swd2 * 43388 / 100000
    var dy1 = shd2 * 62349 / 100000
    var dy2 = shd2 * 22252 / 100000
    var dy3 = shd2 * 90097 / 100000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + 0 - dx3
    var x4 = hc + dx3 - 0
    var x5 = hc + dx2 - 0
    var x6 = hc + dx1 - 0
    var y1 = svc + 0 - dy1
    var y2 = svc + dy2 - 0
    var y3 = svc + dy3 - 0
    var iwd2 = swd2 * a / 50000
    var ihd2 = shd2 * a / 50000
    var sdx1 = iwd2 * 97493 / 100000
    var sdx2 = iwd2 * 78183 / 100000
    var sdx3 = iwd2 * 43388 / 100000
    var sx1 = hc + 0 - sdx1
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + 0 - sdx3
    var sx4 = hc + sdx3 - 0
    var sx5 = hc + sdx2 - 0
    var sx6 = hc + sdx1 - 0
    var sdy1 = ihd2 * 90097 / 100000
    var sdy2 = ihd2 * 22252 / 100000
    var sdy3 = ihd2 * 62349 / 100000
    var sy1 = svc + 0 - sdy1
    var sy2 = svc + 0 - sdy2
    var sy3 = svc + sdy3 - 0
    var sy4 = svc + ihd2 - 0
    var yAdj = svc + 0 - ihd2
    return [`M${x1},${y2}L${sx1},${sy2}L${x2},${y1}L${sx3},${sy1}L${hc},${t}L${sx4},${sy1}L${x5},${y1}L${sx6},${sy2}L${x6},${y2}L${sx5},${sy3}L${x4},${y3}L${hc},${sy4}L${x3},${y3}L${sx2},${sy3}Z`]
}

function star8(w, h, l, r, t, b, adj) {
    adj = adj || 37500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 50000 ? 50000 : adj)
    var dx1 = max(wd2, 2700000)
    var x1 = hc + 0 - dx1
    var x2 = hc + dx1 - 0
    var dy1 = hd2 * sin(2700000)
    var y1 = vc + 0 - dy1
    var y2 = vc + dy1 - 0
    var iwd2 = wd2 * a / 50000
    var ihd2 = hd2 * a / 50000
    var sdx1 = iwd2 * 92388 / 100000
    var sdx2 = iwd2 * 38268 / 100000
    var sdy1 = ihd2 * 92388 / 100000
    var sdy2 = ihd2 * 38268 / 100000
    var sx1 = hc + 0 - sdx1
    var sx2 = hc + 0 - sdx2
    var sx3 = hc + sdx2 - 0
    var sx4 = hc + sdx1 - 0
    var sy1 = vc + 0 - sdy1
    var sy2 = vc + 0 - sdy2
    var sy3 = vc + sdy2 - 0
    var sy4 = vc + sdy1 - 0
    var yAdj = vc + 0 - ihd2
    return [`M${l},${vc}L${sx1},${sy2}L${x1},${y1}L${sx2},${sy1}L${hc},${t}L${sx3},${sy1}L${x2},${y1}L${sx4},${sy2}L${r},${vc}L${sx4},${sy3}L${x2},${y2}L${sx3},${sy4}L${hc},${b}L${sx2},${sy4}L${x1},${y2}L${sx1},${sy3}Z`]
}

function straightConnector1(w, h, l, r, t, b, ) {

    // no guides
    return [`M${l},${t}L${r},${b}`]
}

function stripedRightArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 84375 * w / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var x4 = ss * 5 / 32
    var dx5 = ss * a2 / 100000
    var x5 = r + 0 - dx5
    var dy1 = h * a1 / 200000
    var y1 = vc + 0 - dy1
    var y2 = vc + dy1 - 0
    var dx6 = dy1 * dx5 / hd2
    var x6 = r + 0 - dx6
    return [`M${l},${y1}L${ssd32},${y1}L${ssd32},${y2}L${l},${y2}ZM${ssd16},${y1}L${ssd8},${y1}L${ssd8},${y2}L${ssd16},${y2}ZM${x4},${y1}L${x5},${y1}L${x5},${t}L${r},${vc}L${x5},${b}L${x5},${y2}L${x4},${y2}Z`]
}

function sun(w, h, l, r, t, b, adj) {
    adj = adj || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 12500 ? 12500 : (adj > 46875 ? 46875 : adj)
    var g0 = 50000 + 0 - a
    var g1 = g0 * 30274 / 32768
    var g2 = g0 * 12540 / 32768
    var g3 = g1 + 50000 - 0
    var g4 = g2 + 50000 - 0
    var g5 = 50000 + 0 - g1
    var g6 = 50000 + 0 - g2
    var g7 = g0 * 23170 / 32768
    var g8 = 50000 + g7 - 0
    var g9 = 50000 + 0 - g7
    var g10 = g5 * 3 / 4
    var g11 = g6 * 3 / 4
    var g12 = g10 + 3662 - 0
    var g13 = g11 + 3662 - 0
    var g14 = g11 + 12500 - 0
    var g15 = 100000 + 0 - g10
    var g16 = 100000 + 0 - g12
    var g17 = 100000 + 0 - g13
    var g18 = 100000 + 0 - g14
    var ox1 = w * 18436 / 21600
    var oy1 = h * 3163 / 21600
    var ox2 = w * 3163 / 21600
    var oy2 = h * 18436 / 21600
    var x8 = w * g8 / 100000
    var x9 = w * g9 / 100000
    var x10 = w * g10 / 100000
    var x12 = w * g12 / 100000
    var x13 = w * g13 / 100000
    var x14 = w * g14 / 100000
    var x15 = w * g15 / 100000
    var x16 = w * g16 / 100000
    var x17 = w * g17 / 100000
    var x18 = w * g18 / 100000
    var x19 = w * a / 100000
    var wR = w * g0 / 100000
    var hR = h * g0 / 100000
    var y8 = h * g8 / 100000
    var y9 = h * g9 / 100000
    var y10 = h * g10 / 100000
    var y12 = h * g12 / 100000
    var y13 = h * g13 / 100000
    var y14 = h * g14 / 100000
    var y15 = h * g15 / 100000
    var y16 = h * g16 / 100000
    var y17 = h * g17 / 100000
    var y18 = h * g18 / 100000
    return [`M${r},${vc}L${x15},${y18}L${x15},${y14}ZM${ox1},${oy1}L${x16},${y13}L${x17},${y12}ZM${hc},${t}L${x18},${y10}L${x14},${y10}ZM${ox2},${oy1}L${x13},${y12}L${x12},${y13}ZM${l},${vc}L${x10},${y14}L${x10},${y18}ZM${ox2},${oy2}L${x12},${y17}L${x13},${y16}ZM${hc},${b}L${x14},${y15}L${x18},${y15}ZM${ox1},${oy2}L${x17},${y16}L${x16},${y17}ZM${x19},${vc}Z`]
}

function swooshArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 1 ? 1 : (adj1 > 75000 ? 75000 : adj1)
    var maxAdj2 = 70000 * w / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var ad1 = h * a1 / 100000
    var ad2 = ss * a2 / 100000
    var xB = r + 0 - ad2
    var yB = t + ssd8 - 0
    var alfa = cd4 * 1 / 14
    var dx0 = ssd8 * tan(alfa)
    var xC = xB + 0 - dx0
    var dx1 = ad1 * tan(alfa)
    var yF = yB + ad1 - 0
    var xF = xB + dx1 - 0
    var xE = xF + dx0 - 0
    var yE = yF + ssd8 - 0
    var dy2 = yE + 0 - t
    var dy22 = dy2 * 1 / 2
    var dy3 = h * 1 / 20
    var yD = t + dy22 - dy3
    var dy4 = hd6 * 1 / 1
    var yP1 = hd6 + dy4 - 0
    var xP1 = wd6
    var dy5 = hd6 * 1 / 2
    var yP2 = yF + dy5 - 0
    var xP2 = wd4
    return [`M${l},${b}ZL${xC},${t}L${r},${yD}L${xE},${yE}L${xF},${yF}ZZ`]
}

function teardrop(w, h, l, r, t, b, adj) {
    adj = adj || 100000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 200000 ? 200000 : adj)
    var r2 = sqrt(2)
    var tw = wd2 * r2 / 1
    var th = hd2 * r2 / 1
    var sw = tw * a / 100000
    var sh = th * a / 100000
    var dx1 = max(sw, 2700000)
    var dy1 = sh * sin(2700000)
    var x1 = hc + dx1 - 0
    var y1 = vc + 0 - dy1
    var x2 = hc + x1 / 2
    var y2 = vc + y1 / 2
    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${l},${vc}ZZZ`]
}

function trapezoid(w, h, l, r, t, b, adj) {
    adj = adj || 25000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj = 50000 * w / ss
    var a = adj < 0 ? 0 : (adj > maxAdj ? maxAdj : adj)
    var x1 = ss * a / 200000
    var x2 = ss * a / 100000
    var x3 = r + 0 - x2
    var x4 = r + 0 - x1
    var il = wd3 * a / maxAdj
    var it = hd3 * a / maxAdj
    var ir = r + 0 - il
    return [`M${l},${b}L${x2},${t}L${x3},${t}L${r},${b}Z`]
}

function triangle(w, h, l, r, t, b, adj) {
    adj = adj || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 100000 ? 100000 : adj)
    var x1 = w * a / 200000
    var x2 = w * a / 100000
    var x3 = x1 + wd2 - 0
    return [`M${l},${b}L${x2},${t}L${r},${b}Z`]
}

function upArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 64977


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * w / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 100000 * h / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q2 = a3 * ss / h
    var maxAdj4 = 100000 + 0 - q2
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var dx1 = ss * a2 / 100000
    var dx2 = ss * a1 / 200000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var y1 = ss * a3 / 100000
    var dy2 = h * a4 / 100000
    var y2 = b + 0 - dy2
    var y3 = y2 + b / 2
    return [`M${l},${y2}L${x2},${y2}L${x2},${y1}L${x1},${y1}L${hc},${t}L${x4},${y1}L${x3},${y1}L${x3},${y2}L${r},${y2}L${r},${b}L${l},${b}Z`]
}

function upDownArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * h / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var y2 = ss * a2 / 100000
    var y3 = b + 0 - y2
    var dx1 = w * a1 / 200000
    var x1 = hc + 0 - dx1
    var x2 = hc + dx1 - 0
    var dy1 = x1 * y2 / wd2
    var y1 = y2 + 0 - dy1
    var y4 = y3 + dy1 - 0
    return [`M${l},${y2}L${hc},${t}L${r},${y2}L${x2},${y2}L${x2},${y3}L${r},${y3}L${hc},${b}L${l},${y3}L${x1},${y3}L${x1},${y2}Z`]
}

function upDownArrow(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 50000
    adj2 = adj2 || 50000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * h / ss
    var a1 = adj1 < 0 ? 0 : (adj1 > 100000 ? 100000 : adj1)
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var y2 = ss * a2 / 100000
    var y3 = b + 0 - y2
    var dx1 = w * a1 / 200000
    var x1 = hc + 0 - dx1
    var x2 = hc + dx1 - 0
    var dy1 = x1 * y2 / wd2
    var y1 = y2 + 0 - dy1
    var y4 = y3 + dy1 - 0
    return [`M${l},${y2}L${hc},${t}L${r},${y2}L${x2},${y2}L${x2},${y3}L${r},${y3}L${hc},${b}L${l},${y3}L${x1},${y3}L${x1},${y2}Z`]
}

function upDownArrowCallout(w, h, l, r, t, b, adj1, adj2, adj3, adj4) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 48123


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var maxAdj2 = 50000 * w / ss
    var a2 = adj2 < 0 ? 0 : (adj2 > maxAdj2 ? maxAdj2 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var maxAdj3 = 50000 * h / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q2 = a3 * ss / hd2
    var maxAdj4 = 100000 + 0 - q2
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var dx1 = ss * a2 / 100000
    var dx2 = ss * a1 / 200000
    var x1 = hc + 0 - dx1
    var x2 = hc + 0 - dx2
    var x3 = hc + dx2 - 0
    var x4 = hc + dx1 - 0
    var y1 = ss * a3 / 100000
    var y4 = b + 0 - y1
    var dy2 = h * a4 / 200000
    var y2 = vc + 0 - dy2
    var y3 = vc + dy2 - 0
    return [`M${l},${y2}L${x2},${y2}L${x2},${y1}L${x1},${y1}L${hc},${t}L${x4},${y1}L${x3},${y1}L${x3},${y2}L${r},${y2}L${r},${y3}L${x3},${y3}L${x3},${y4}L${x4},${y4}L${hc},${b}L${x1},${y4}L${x2},${y4}L${x2},${y3}L${l},${y3}Z`]
}

function uturnArrow(w, h, l, r, t, b, adj1, adj2, adj3, adj4, adj5) {
    adj1 = adj1 || 25000
    adj2 = adj2 || 25000
    adj3 = adj3 || 25000
    adj4 = adj4 || 43750
    adj5 = adj5 || 75000


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a2 = adj2 < 0 ? 0 : (adj2 > 25000 ? 25000 : adj2)
    var maxAdj1 = a2 * 2 / 1
    var a1 = adj1 < 0 ? 0 : (adj1 > maxAdj1 ? maxAdj1 : adj1)
    var q2 = a1 * ss / h
    var q3 = 100000 + 0 - q2
    var maxAdj3 = q3 * h / ss
    var a3 = adj3 < 0 ? 0 : (adj3 > maxAdj3 ? maxAdj3 : adj3)
    var q1 = a3 + a1 - 0
    var minAdj5 = q1 * ss / h
    var a5 = adj5 < minAdj5 ? minAdj5 : (adj5 > 100000 ? 100000 : adj5)
    var th = ss * a1 / 100000
    var aw2 = ss * a2 / 100000
    var th2 = th * 1 / 2
    var dh2 = aw2 + 0 - th2
    var y5 = h * a5 / 100000
    var ah = ss * a3 / 100000
    var y4 = y5 + 0 - ah
    var x9 = r + 0 - dh2
    var bw = x9 * 1 / 2
    var bs = min(bw, y4)
    var maxAdj4 = bs * 100000 / ss
    var a4 = adj4 < 0 ? 0 : (adj4 > maxAdj4 ? maxAdj4 : adj4)
    var bd = ss * a4 / 100000
    var bd3 = bd + 0 - th
    var bd2 = max(bd3, 0)
    var x3 = th + bd2 - 0
    var x8 = r + 0 - aw2
    var x6 = x8 + 0 - aw2
    var x7 = x6 + dh2 - 0
    var x4 = x9 + 0 - bd
    var x5 = x7 + 0 - bd2
    var cx = th + x7 / 2
    return [`M${l},${b}L${l},${bd}L${x4},${t}L${x9},${y4}L${r},${y4}L${x8},${y5}L${x6},${y4}L${x7},${y4}L${x7},${x3}L${x3},${th}L${th},${b}Z`]
}

function verticalScroll(w, h, l, r, t, b, adj) {
    adj = adj || 12500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a = adj < 0 ? 0 : (adj > 25000 ? 25000 : adj)
    var ch = ss * a / 100000
    var ch2 = ch * 1 / 2
    var ch4 = ch * 1 / 4
    var x3 = ch + ch2 - 0
    var x4 = ch + ch - 0
    var x6 = r + 0 - ch
    var x7 = r + 0 - ch2
    var x5 = x6 + 0 - ch2
    var y3 = b + 0 - ch
    var y4 = b + 0 - ch2
    return [`M${ch2},${b}L${ch2},${y4}L${ch},${y3}L${ch},${ch2}L${x7},${t}L${x6},${ch}L${x6},${y4}ZM${x4},${ch2}Z`, `M${x4},${ch2}ZM${ch},${y4}Z`, `M${ch},${y3}L${ch},${ch2}L${x7},${t}L${x6},${ch}L${x6},${y4}L${ch2},${b}ZM${x3},${t}L${x4},${ch2}M${x6},${ch}L${x3},${ch}M${ch2},${y3}L${ch},${y4}M${ch2},${b}L${ch},${y3}`]
}

function wave(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || 12500
    adj2 = adj2 || 0


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var a1 = adj1 < 0 ? 0 : (adj1 > 20000 ? 20000 : adj1)
    var a2 = adj2 < -10000 ? -10000 : (adj2 > 10000 ? 10000 : adj2)
    var y1 = h * a1 / 100000
    var dy2 = y1 * 10 / 3
    var y2 = y1 + 0 - dy2
    var y3 = y1 + dy2 - 0
    var y4 = b + 0 - y1
    var y5 = y4 + 0 - dy2
    var y6 = y4 + dy2 - 0
    var dx1 = w * a2 / 100000
    var of2 = w * a2 / 50000
    var x1 = abs(dx1)
    var dx2 = of2 > 0 ? 0 : of2
    var x2 = l + 0 - dx2
    var dx5 = of2 > 0 ? of2 : 0
    var x5 = r + 0 - dx5
    var dx3 = dx2 + x5 / 3
    var x3 = x2 + dx3 - 0
    var x4 = x3 + x5 / 2
    var x6 = l + dx5 - 0
    var x10 = r + dx2 - 0
    var x7 = x6 + dx3 - 0
    var x8 = x7 + x10 / 2
    var x9 = r + 0 - x1
    var xAdj = hc + dx1 - 0
    var xAdj2 = hc + 0 - dx1
    var il = max(x2, x6)
    var ir = min(x5, x10)
    var it = h * a1 / 50000
    var ib = b + 0 - it
    return [`M${x2},${y1}ZL${x10},${y4}ZZ`]
}

function wedgeEllipseCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || 62500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dxPos = w * adj1 / 100000
    var dyPos = h * adj2 / 100000
    var xPos = hc + dxPos - 0
    var yPos = vc + dyPos - 0
    var sdx = dxPos * h / 1
    var sdy = dyPos * w / 1
    var pang = atan2(sdx, sdy)
    var stAng = pang + 660000 - 0
    var enAng = pang + 0 - 660000
    var dx1 = max(wd2, stAng)
    var dy1 = hd2 * sin(stAng)
    var x1 = hc + dx1 - 0
    var y1 = vc + dy1 - 0
    var dx2 = max(wd2, enAng)
    var dy2 = hd2 * sin(enAng)
    var x2 = hc + dx2 - 0
    var y2 = vc + dy2 - 0
    var stAng1 = atan2(dx1, dy1)
    var enAng1 = atan2(dx2, dy2)
    var swAng1 = enAng1 + 0 - stAng1
    var swAng2 = swAng1 + 21600000 - 0
    var swAng = swAng1 > 0 ? swAng1 : swAng2
    var idx = max(wd2, 2700000)
    var idy = hd2 * sin(2700000)
    var il = hc + 0 - idx
    var ir = hc + idx - 0
    var it = vc + 0 - idy
    var ib = vc + idy - 0
    return [`M${xPos},${yPos}L${x1},${y1}Z`]
}

function wedgeRectCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || 62500


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dxPos = w * adj1 / 100000
    var dyPos = h * adj2 / 100000
    var xPos = hc + dxPos - 0
    var yPos = vc + dyPos - 0
    var dx = xPos + 0 - hc
    var dy = yPos + 0 - vc
    var dq = dxPos * h / w
    var ady = abs(dyPos)
    var adq = abs(dq)
    var dz = ady + 0 - adq
    var xg1 = dxPos > 0 ? 7 : 2
    var xg2 = dxPos > 0 ? 10 : 5
    var x1 = w * xg1 / 12
    var x2 = w * xg2 / 12
    var yg1 = dyPos > 0 ? 7 : 2
    var yg2 = dyPos > 0 ? 10 : 5
    var y1 = h * yg1 / 12
    var y2 = h * yg2 / 12
    var t1 = dxPos > 0 ? l : xPos
    var xl = dz > 0 ? l : t1
    var t2 = dyPos > 0 ? x1 : xPos
    var xt = dz > 0 ? t2 : x1
    var t3 = dxPos > 0 ? xPos : r
    var xr = dz > 0 ? r : t3
    var t4 = dyPos > 0 ? xPos : x1
    var xb = dz > 0 ? t4 : x1
    var t5 = dxPos > 0 ? y1 : yPos
    var yl = dz > 0 ? y1 : t5
    var t6 = dyPos > 0 ? t : yPos
    var yt = dz > 0 ? t6 : t
    var t7 = dxPos > 0 ? yPos : y1
    var yr = dz > 0 ? y1 : t7
    var t8 = dyPos > 0 ? yPos : b
    var yb = dz > 0 ? t8 : b
    return [`M${l},${t}L${x1},${t}L${xt},${yt}L${x2},${t}L${r},${t}L${r},${y1}L${xr},${yr}L${r},${y2}L${r},${b}L${x2},${b}L${xb},${yb}L${x1},${b}L${l},${b}L${l},${y2}L${xl},${yl}L${l},${y1}Z`]
}

function wedgeRoundRectCallout(w, h, l, r, t, b, adj1, adj2) {
    adj1 = adj1 || -20833
    adj2 = adj2 || 62500
    adj3 = adj3 || 16667


    var cos = Math.cos.bind(Math)
    var sin = Math.sin.bind(Math)
    var abs = Math.abs.bind(Math)
    var atan = Math.atan.bind(Math)
    var atan2 = Math.atan2.bind(Math)
    var max = Math.max.bind(Math)
    var min = Math.min.bind(Math)
    var sqrt = Math.sqrt.bind(Math)
    var ss = w < h ? w : h

    var dxPos = w * adj1 / 100000
    var dyPos = h * adj2 / 100000
    var xPos = hc + dxPos - 0
    var yPos = vc + dyPos - 0
    var dq = dxPos * h / w
    var ady = abs(dyPos)
    var adq = abs(dq)
    var dz = ady + 0 - adq
    var xg1 = dxPos > 0 ? 7 : 2
    var xg2 = dxPos > 0 ? 10 : 5
    var x1 = w * xg1 / 12
    var x2 = w * xg2 / 12
    var yg1 = dyPos > 0 ? 7 : 2
    var yg2 = dyPos > 0 ? 10 : 5
    var y1 = h * yg1 / 12
    var y2 = h * yg2 / 12
    var t1 = dxPos > 0 ? l : xPos
    var xl = dz > 0 ? l : t1
    var t2 = dyPos > 0 ? x1 : xPos
    var xt = dz > 0 ? t2 : x1
    var t3 = dxPos > 0 ? xPos : r
    var xr = dz > 0 ? r : t3
    var t4 = dyPos > 0 ? xPos : x1
    var xb = dz > 0 ? t4 : x1
    var t5 = dxPos > 0 ? y1 : yPos
    var yl = dz > 0 ? y1 : t5
    var t6 = dyPos > 0 ? t : yPos
    var yt = dz > 0 ? t6 : t
    var t7 = dxPos > 0 ? yPos : y1
    var yr = dz > 0 ? y1 : t7
    var t8 = dyPos > 0 ? yPos : b
    var yb = dz > 0 ? t8 : b
    var u1 = ss * adj3 / 100000
    var u2 = r + 0 - u1
    var v2 = b + 0 - u1
    var il = u1 * 29289 / 100000
    var ir = r + 0 - il
    var ib = b + 0 - il
    return [`M${l},${u1}L${x1},${t}L${xt},${yt}L${x2},${t}L${u2},${t}L${r},${y1}L${xr},${yr}L${r},${y2}L${r},${v2}L${x2},${b}L${xb},${yb}L${x1},${b}L${u1},${b}L${l},${y2}L${xl},${yl}L${l},${y1}Z`]
}