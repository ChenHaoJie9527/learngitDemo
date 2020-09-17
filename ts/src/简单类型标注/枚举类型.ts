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
enum OURS {
    NAME = 3, //3 ‘默认是0
    AGE, //+1
    RUL //+2
};
let dir: OURS = OURS.NAME;
let rul: OURS = OURS.RUL;
let age: OURS = OURS.AGE;
console.log(dir, age, rul);

//字符串枚举 使用常亮const 将不会被编译
enum LI {
    NORTH = "NORTH",
    SOUTH = "SOUTH",
    EAST = "EAST",
    WEST = "WEST",
};
console.log(LI["NORTH"] == LI.NORTH);

//异构枚举 成员值是字符串和数字组成
enum PY {
    A,
    B,
    C = "C",
    D = "D",
    E = 10,
    F,
};
console.log(PY.A,PY[0]);



