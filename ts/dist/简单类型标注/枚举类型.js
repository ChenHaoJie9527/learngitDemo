/**
 * 枚举类型：枚举的最庸组织收集一组关联数据的方式，通过枚举我们可以给一组有关联意义的数据赋予一些友好的名字
 * 注意事项：
 *          key不能是数字
 *          value可以是数组，称为数字类型枚举
 *          value可以是字符串，称为字符串类型枚举
 *          value不能是其他类型值，默认是数字：0
 *          枚举值可以省略。如果省略，则：
 *              1. 第一个枚举值默认是：0
 *              2. 非第一个枚举值是上一个数字枚举值 +1
 */
// 数字枚举
var OURS;
(function (OURS) {
    OURS[OURS["NAME"] = 3] = "NAME";
    OURS[OURS["AGE"] = 4] = "AGE";
    OURS[OURS["RUL"] = 5] = "RUL"; //+2
})(OURS || (OURS = {}));
;
let dir = OURS.NAME;
let rul = OURS.RUL;
let age = OURS.AGE;
console.log(dir, age, rul);
//字符串枚举 使用常亮const 将不会被编译
var LI;
(function (LI) {
    LI["NORTH"] = "NORTH";
    LI["SOUTH"] = "SOUTH";
    LI["EAST"] = "EAST";
    LI["WEST"] = "WEST";
})(LI || (LI = {}));
;
console.log(LI["NORTH"] == LI.NORTH);
//异构枚举 成员值是字符串和数字组成
var PY;
(function (PY) {
    PY[PY["A"] = 0] = "A";
    PY[PY["B"] = 1] = "B";
    PY["C"] = "C";
    PY["D"] = "D";
    PY[PY["E"] = 10] = "E";
    PY[PY["F"] = 11] = "F";
})(PY || (PY = {}));
;
console.log(PY.A, PY[0]);
