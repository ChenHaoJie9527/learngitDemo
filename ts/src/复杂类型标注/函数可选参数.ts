/**
 * 函数可选参数是通过添加?来标注该参数是可选
 */
interface volid {
    (name: string, age?: number): string | number | undefined
};
let Volid: volid = function (name,age) {
    return name
};
Volid("张三");