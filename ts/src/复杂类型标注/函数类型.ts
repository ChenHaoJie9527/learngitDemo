/**
 * 在JS中，函数是非常重要的一等公民，在TS中也是如此，同样的函数也有自己的类型标注
 *  1. 参数
 *  2. 返回值
 *  3. 函数重载
 */
interface IFunc {
    (y: number, x?: string): string | number,
};
let fn: IFunc = (y, x = "hello") => {
    console.log(this);
    return y;
};
console.log(fn(10));

interface Combinable {
    a: number,
    b: string
}


