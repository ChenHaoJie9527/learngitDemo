/**
 * 接口interface会对复杂的对象类型进行标注，针对对象属性进行类型标注和对象属性的值进行类型标注
 * 接口只是提供了一种抽象结构的类型，不具体实体作用，并不能作为某个值使用
 * 接口提供了几种属性：
 *          1. 可选属性
 *          2. 只读属性
 *          3. 任意属性
 * 接口interface不仅可以用来给对象进行标注，也可以用来对函数进行类型标注
 * 接口可以进行合并：
 *      1. 合并的接口必须同名，并且要确保类型一致，否则编译报错
 *      2. 接口中的同名函数则是采用重载
 * 
 */
interface Point {
    x: number,
    y: number
};
let p1: Point = {
    x: 10,
    y: 10
};

// 可选属性 通过 ? 对某个属性进行可选选项
interface Fcinit {
    x: string,
    y: number,
    r?: boolean //该属性可选
};
let f1: Fcinit = {
    x: "1",
    y: 10,
    r: false
};

//只读属性 readonly 来标注属性为只读,当标记为只读属性后，除了初始化以外，是不能被再次赋值
interface Read {
    readonly x: number,
    readonly y: string
};

// 任意属性： 可以通过属性索引类型来实现 []; 包括数字类型索引和字符串类型索引
// 数字类型索引
interface NumInit {
    x: number,
    y: number,
    [prop: number]: number
};
// let n: NumInit = {
//     x: 10,
//     y: 10
// };
// n[1] = 10;
// console.log(n);

//字符串类型索引
// 注意： 数字哦索引是字符串索引的子类型
// interface StrInit {
//     x: number,
//     y: number,
//     [prop: string]: number
// };
// let s: StrInit = {
//     x: 10,
//     y: 20,
// };
// s["foo"] = 10;
// console.log(s);

// 索引签名参数类型必须为string或者number之一，但两者可以同时出现
// 当同时存在数字类型索引和字符串类型索引的时候
// 数字类型的值类型必须是字符串类型的值类型或子类型
interface Yesl {
    [prop: string]: string,
    [prop: number]: string
    // [prop: number]: number // error
}
interface Yesl1 {
    [prop: string]: object,
    [prop: number]: Date
}

interface Box {
    width: number,
    height: number
};
interface Box {
    elixe: number,
};
let box: Box = {width: 10, height: 10, elixe: 20};


