/***
 * unknow: 属于安全办的any，但是unknow只能复制给unknow和any类型，并且没有任何属性和方法
 * 但是所有类型都能够复制给unknow
 */
let value;
value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK
// unknow类型不具有任何的属性和方法
// value.foo.bar; // Error
// value.trim(); // Error
// value(); // Error
// new value(); // Error
// value[0][1]; // Error
//对 value 变量的所有赋值都被认为是类型正确的。
// 但是，当我们尝试将类型为 unknown 的值赋值给其他类型的变量时会发生什么？
let value1 = value; //true
// let value2: string = value; // error
// let value3: number = value; //error
// let value3: Array<number> = value; // error
// let value4: boolean = value; // error
let value5 = value; //true
// let value6: object = value;
// let value7: Function = value;
/**
 * 结论： unknown 类型只能被赋值给 any 类型和 unknown 类型本身。
 *
 */
