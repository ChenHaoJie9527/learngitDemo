/**
 * Never类型表示的是那些用不存在的类型，例如是那些总是会抛出异常或根本就不会有返回值的函数表达式
 * 或者箭头函数表达式的返回值类型
 * 返回nerver的函数必须是无法到达的终点
 */
// 抛出异常
// function fcError(message: string): never {
//     throw Error(message)
// }



// /**
//  * 然而他忘记同时修改 controlFlowAnalysisWithNever 方法中的控制流程，这时候 else 分支的 foo 类型会被收窄为 boolean 类型，导致无法赋值给 never 类型，
//  * 这时就会产生一个编译错误。通过这个方式，我们可以确保controlFlowAnalysisWithNever 方法总是穷尽了 Foo 的所有可能类型。 
//  * 通过这个示例，我们可以得出一个结论：
//  *        使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码
//  */
// type Foo = string | number | boolean;
// function FC(foo: Foo){
//     if(typeof foo == "string"){
//         //执行string逻辑
//     }else if(typeof foo == "number"){
//         //执行number逻辑
//     }else{
//         //foo 到这里是nerver
//         let uk: never = foo;
//     }
// }