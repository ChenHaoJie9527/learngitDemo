/**
 * 类型保护关键字：
 *          1. typeof
 *          2. instanceof
 *          3. in
 *          4. 字面量类型保护
 *          5. 自定义类型保护
 * 根据判断逻辑的结果，缩小类型范围，这种特性被称为类型保护
 * 通常用于条件语句块 if else elseif
 * 特殊的一些关键字：typeof instanceof in
 */
// typeof 在判断语句块中能够推断出适合的类型
function Fnceintace(a) {
    // a.substring // error 无法保证a就是字符串类型
    if (typeof a === "string") {
        a.substring(1);
    }
    else {
        a.toFixed(1);
    }
}
// instanceof 也可以识别类型保护
function FnceOf(a) {
    if (a instanceof Array) {
        a.push(1);
    }
    else {
        a.getFullYear();
    }
}
;
function Fnceits(arg) {
    if ("x" in arg) {
        console.log(arg.x);
        // arg.a // 找不到属性a
    }
    else {
        console.log(arg.a);
        // console.log(arg.y); //找不到该属性
    }
}
function FnT(arg) {
    if (arg.type === "T1") {
        console.log(arg.x);
    }
    if (arg.type === "T2") {
        console.log(arg.a);
    }
}
