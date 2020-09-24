/**
 * ！非空断言操作符
 * 在上下文中，当类型检测器无法断定类型时，一个新的后缀表达式操作符!可以用于断言操作对象是非null和非undefined类型
 * 具体点讲，就是在类型声明中排出null和undefined类型
 */
// 1.1 忽略undefined和null类型
// function myFunc1(maybeString: string | undefined | null) {
//     // Type 'string | null | undefined' is not assignable to type 'string'.
//     // Type 'undefined' is not assignable to type 'string'. 
//     // const onlyString: string = maybeString; // Error 无法断定到底是不是string类型
//     const ignoreUndefinedAndNull: string = maybeString!; // Ok 排除null和undefined
// }

// 1.2 调用函数时忽略undefined 
type NumGenerator = () => number;

function myFunc2(numGenerator: NumGenerator | undefined) {
    // Object is possibly 'undefined'.(2532)
    // Cannot invoke an object which is possibly 'undefined'.(2722)
    // const num1 = numGenerator(); // Error
    const num2 = numGenerator!(); //OK
}
