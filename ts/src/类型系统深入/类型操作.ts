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

//如果是type 会把“string”作为类型
type myTp = typeof str1;

let str2: myTp = "123";
let str3: typeof str1 = "12312";

//keyof
// 获取类型的所有key集合
interface Personter {
    name: string,
    age: number
}
type personKey = keyof Personter; // type personkey = "name" | "age"

let p1s = {
    name: "zmouns",
    age: 10
}
function getPersonvalue(k: personKey) {
    return p1s[k]
};
getPersonvalue("age")

// in 针对类型进行操作的话 内部会使用fro...in对类型进行遍历
//注意： in后面的值类型必须是string或者number或者symbol
interface Persontor {
    name: string,
    age: number
}
type persontor = keyof Personter;
type newPersontor = {
    [k in persontor]: number;
    /**
     * 等同于 [k in "name"|"age"]: number
     * 也可以写成
     * [k in keyof Person]: number
     */
}

//类型兼容
class X1 {
    name: string
    age: number
}
class X2 {
    name: string
    age: number
}
function Uit(p: X1) {
    p.name
};
let xiaohong = new X2();
//因为X2类型的结构与X1类型的结构相似，索引它们是兼容的
Uit(xiaohong);