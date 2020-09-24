/**
 * 如果说类型保护是用于识别类型，那么类型操作就是将类型作为使用，在程序执行阶段发挥作用
 * 但是需要注意的是，类型数据只能作为类型来使用，而不能作为程序中的数据，这是两种不同的数据，一个用在编译检测阶段，一个用于程序执行阶段
 * 类型操作关键字：
 *      1. typeof: 获取数据类型和捕获数据类型
 */
//typeof
let str1 = "adsa";
//如果是let 会把"string"作为值
let t = typeof str1;
let str2 = "123";
let str3 = "12312";
let p1s = {
    name: "zmouns",
    age: 10
};
function getPersonvalue(k) {
    return p1s[k];
}
;
getPersonvalue("age");
//类型兼容
class X1 {
}
class X2 {
}
function Uit(p) {
    p.name;
}
;
let xiaohong = new X2();
//因为X2类型的结构与X1类型的结构相似，索引它们是兼容的
Uit(xiaohong);
