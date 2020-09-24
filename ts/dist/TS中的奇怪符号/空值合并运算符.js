var _a, _b, _c, _e, _f;
/**
 *空值合并运算符?? 当左侧操作数为null或undefined时，其返回右侧操作符 否则返回左侧操作符
 */
const foo = null !== null && null !== void 0 ? null : 'default string';
console.log(foo); // 输出："default string"
const baz = 0 !== null && 0 !== void 0 ? 0 : 42;
console.log(baz); // 输出：0
/**
 * 短路：
 *      当空值合并运算符的左表达式不为null或者undefined时，不会对右边表达式进行求值
 */
function A() {
    console.log('A was called');
    return undefined;
}
function B() {
    console.log('B was called');
    return false;
}
function C() {
    console.log('C was called');
    return "foo";
}
console.log((_a = A()) !== null && _a !== void 0 ? _a : C());
console.log((_b = B()) !== null && _b !== void 0 ? _b : C());
/**
 * 注意：
 *      若空值合并运算符 ?? 直接与 AND（&&）和 OR（||）操作符组合使用 ?? 是不行的。这种情况下会抛出 SyntaxError。
 *      如果一定要使用，必须使用括号抱起来，表明优先级
 */
// '||' and '??' operations cannot be mixed without parentheses.(5076)
(_c = (null || undefined)) !== null && _c !== void 0 ? _c : "foo"; // raises a SyntaxError
// '&&' and '??' operations cannot be mixed without parentheses.(5076)
(_e = (true && undefined)) !== null && _e !== void 0 ? _e : "foo"; // raises a SyntaxError
let customer = {
    name: "Semlinker"
};
//先判断对象customer是否为null或者undefined 在判断是否有city属性 如果没有就执行右侧
let customerCity = (_f = customer === null || customer === void 0 ? void 0 : customer.city) !== null && _f !== void 0 ? _f : "Unknown city";
console.log(customerCity);
