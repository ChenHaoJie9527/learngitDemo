/**
 * 函数的标注包含：
 *      1. 参数
 *      2. 返回值
 */
// 构造函数
function fna(a) {
    //如果没有显示标注返回类型，默认返回void
    return a;
}
;
//字面量创建函数
let fnb = function (b) {
    return b;
};
let fncb = function (c) {
    if (typeof c === "string") {
        return c;
    }
    ;
};
;
let interFC = function (a) {
    if (typeof a === "number") {
        return a;
    }
    ;
};
