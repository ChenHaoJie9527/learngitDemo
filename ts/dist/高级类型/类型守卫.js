/**
 * 类型守卫，通常是用来针对不同类型标注的元素进行保护处理，
 * 这是基于复杂类型进行处理的类型守卫白虎机制
 * 通过判断不同的类型来进行相应的处理，
 * 通常用 关键字 in typeof instanceof 以及自定义类型保护的类型谓词
 */
// in关键字 通过in来判断是否是该接口的属性成员
// interface Admin {
//     name: string,
//     password: string
// };
// interface Email {
//     name: string,
//     date: Date
// };
// type ukone = Admin | Email;
// function User(val: ukone) {
//     if ("password" in val) {
//         console.log("password" + val.password);
//     } else if ("date" in val) {
//         console.log("date" + val.date);
//     } else {
//         const n: never = val;
//     }
// };
// User({
//     name: "123",
//     password: "mima",
//     // date: new Date()
// })
//typeof关键字 通过判断该元素的类型标注来处理相关逻辑
// typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，
// "typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 
// 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
// interface Init {
//     (name: string, password: string | number, rePassword?: boolean | symbol): string | number
// };
// let Plit: Init = (name, password) => {
//     if (typeof password === "string") {
//         console.log(1);
//         return password + name
//     }
//     if (typeof password === "number") {
//         console.log(2);
//         return Array(password + 1).join("") + name;
//     }
//     throw new Error(`Expected string or number, got '${password}'.`)
// };
// console.log(Plit("张三",10));
//自定义类型保护的类型谓词 is
function isNumber(x) {
    return typeof x === "number";
}
function isString(y) {
    return typeof y === "string";
}
console.log(isNumber(10));
console.log(isString("aa"));
