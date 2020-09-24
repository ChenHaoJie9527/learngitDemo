/**
 * ?.可选链运算符 我们编写代码时如果遇到 null 或 undefined 就可以立即停止某些表达式的运行
 *  可选链只能用于验证对象是否为null或者undefined，对于0或者字符串来说，并不会出现短路
 */
//可算的访问属性
// let _a = null;
// let ns = 10;
// // const vals = _a?._b;
// // console.log(vals);
// const val = _a?.ns;
//可选参数访问
function tryGetArrayElement(arr, index = 0) {
    return arr === null || arr === void 0 ? void 0 : arr[index];
}
// //可选链与函数调用
// const objs = {
//     name: "zczx",
//     age: 10
// }
// let result = objs.customMethod?.();
