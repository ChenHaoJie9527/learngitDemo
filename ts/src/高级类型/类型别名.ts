/**
 * 类型别名：有时候类型别名比较复杂，这个时候可以给类型标注起一个相对简单的名字
 * 除此之外，可以使用类型别名来定义函数类型，这与？interface定义函数类型作用是一样的
 * 这里需要注意一下，如果使用type来定义函数类型，和接口有点不太相同
 */
type opt = 'left' | 'top' | 'bottom' | 'right';
function setOptions(ele: Element, dir: opt) {
    return {
        ele,
        dir
    }
};

// 类型别名
type callback = (name: string) => string;
let callBackFC: callback = function (name): string {
    return name;
};
// type callback = (age: number) => number; //error type重复
callBackFC("callback")
//接口
interface CallBack {
    (name: string): string
};
let cl: CallBack = function(name){
    return name;
};
cl("hello")
/**
 * 使用interface与type的区别
 * interface:
 *  1. 只能用于描述object | class | function
 *  2. 同名的interface自动合并，有利于拓展类型标注    
 * type:
 *  1.不能重名
 *  2. 能描述所有数据类型
 */


