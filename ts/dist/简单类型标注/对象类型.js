/***
 * 在JS中，有许多内置对象，Obejct Array Date...，我们可以通过对象的构造器或者类来进行标注
 * 另一种情况，在许多时候，也需要自定义结构的对象
 * 通常有：
 *      字面量标注
 *      接口
 *      定义类或者构造函数
 */
/***
 * 字面量标注：
 *  优点：方便，直接
 *  缺点：不利于扩展和维护
 */
let a = {
    name: "zz",
    age: 1
};
/***
 * 接口标注：
 *      优点：复用性高
 *      缺点：只能作为一种类型标注使用，抽象结构的定义，并不是实体,没有具体功能的实现
 */
// interface Person {
//     name: string,
//     age: number,
//     gender?: string
// };
// let n: Person = {
//     name: "xx",
//     age: 10,
//     gender: "aa"
// };
/***
 * 类与构造器标注：
 *      优点：不仅可以作为一种标注类型使用，同时能将实例化类作为具体的功能使用
 *      缺点：相对比较复杂，如果只想约束某个函数的参数结构，没必要去定义一个类，使用接口更好
 *
 */
// class Person1 {
//     constructor(public name: string, public age: number){
//     }
// }
// let b: Person1 = new Person1("xx",10);
// interface Notify {
//     name: string,
//     age: number
// };
// function ajax(opts: Notify) {
// };
// ajax({
//     name: "10",
//     age: 20
// });
/**
 * 拓展：包装对象
 * 包装对象指的是js中内置的对象，String Number Boolean等；
 * 注意：字符串对象包含普通字符串，但是普通字符串不包含字符串对象
 * 因此在类型标志显示一直的情况下，请字符串对象生产的字符串赋值给普通字符串类型的变量是不允许的
 * 这是一种包含与被包含的关系
 */
// let str: string;
// str = new String("1"); // error 不能将字符串对象赋值给普通字符串
// let str: String;
// str = "10"; // 允许
