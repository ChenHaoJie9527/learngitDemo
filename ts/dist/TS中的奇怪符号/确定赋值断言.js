/**
 * 确定赋值断言，允许在实例属性和变量声明后面放置一个!号
 * 从而告诉TS该属性被明确赋值了
 */
let mi; //通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。
initialize();
// 很明显该异常信息是说变量 x 在赋值前被使用了，要解决该问题，我们可以使用确定赋值断言：
// Variable 'x' is used before being assigned.(2454)
console.log(2 * mi); // Error
function initialize() {
    mi = 10;
}
