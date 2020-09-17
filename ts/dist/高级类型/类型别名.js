function setOptions(ele, dir) {
    return {
        ele,
        dir
    };
}
;
let callBackFC = function (name) {
    return name;
};
// type callback = (age: number) => number; //error type重复
callBackFC("callback");
;
let cl = function (name) {
    return name;
};
cl("hello");
/**
 * 使用interface与type的区别
 * interface:
 *  1. 只能用于描述object | class | function
 *  2. 同名的interface自动合并，有利于拓展类型标注
 * type:
 *  1.不能重名
 *  2. 能描述所有数据类型
 */
