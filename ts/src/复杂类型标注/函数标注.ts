/**
 * 函数的标注包含：
 *      1. 参数
 *      2. 返回值
 */
// 构造函数
function fna(a: string): string {
    //如果没有显示标注返回类型，默认返回void
    return a
};
//字面量创建函数
let fnb: (b: number) => number = function (b) {
    return b;
};

// 使用类型别名给函数参数进行类型标注
type cb = (c: string) => string | undefined;
let fncb: cb = function(c){
    if(typeof c === "string"){
        return c
    };
}

//使用interface接口给函数参数进行标注
interface cb1 {
    (a: number): number | undefined
};
let interFC: cb1 = function(a){
    if(typeof a === "number"){
        return a;
    };
}
