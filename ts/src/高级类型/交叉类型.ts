/**
 * 交叉类型： 又被成为合并类型，可以把多种类型合并到一起成为一种新的类型，是并且的关系
 */
interface x1 {
    x: number,
    y: number
};
interface x2 {
    x: number,
    p: boolean
};
type opts = x1 & x2;
let obj: opts = Object.assign({}, {
    x: 10,
    y: 10
}, { p: false,z: "10" });

