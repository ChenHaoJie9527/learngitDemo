/**
 * 数组解构：需要根据数组类型来声明相同类型的变量进行解构
 */
// let _a: number,
//     _b: number,
//     _c: number;
// let five_array = [1, 2, 3];
// [_a, _b, _c] = five_array;
// console.log(_a, _b, _c);

// let _x: string,
//     _y: string,
//     _w: string;
// let str_arr = ["1", "23", "123"];
// [_x, _y, _w] = str_arr;
// console.log(_x, _y, _w);

//元组类型
let _p: Array<any> = [function () { }, { a: 10 }, [1, 2, 3], null, undefined];
let _x,
    _y,
    _z,
    _d;
[_x, _y, _z, ..._d] = _p;
console.log(_x, _y, _z, _d);