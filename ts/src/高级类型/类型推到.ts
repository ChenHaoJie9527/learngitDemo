/**
 * 类型推导是TS中国特有的机制，TS编译器会根据当前上下文自动的推导出对应的类型标注
 * 这个过程会发生在：
 *      1. 初始化变量
 *      2. 设置函数参数的默认值
 *      3. 函数返回值
 */
// 初始化变量
let x = 1;
function fnc(val = 10){
    return val;
};
fnc(100);