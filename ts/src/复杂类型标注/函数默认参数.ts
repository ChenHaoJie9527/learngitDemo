/**
 * 函数参数设置默认值：
 *      1. 有默认值的参数也是可选的
 *      2. 设置了默认值的参数可以根据值进行类型推导
 */
function store(items: Array<number>, order = "desc"){
    return {
        items,
        order
    }
};
console.log(store([1,2,3,4]));