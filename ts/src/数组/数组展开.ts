/**
 * TS数组展开与JS数组展开相同，根据数组的顺序进行展开
 */
let colors: Array<number> = [1, 2, 3, 4, 5];
let ovl: Array<object> = [
    {
        name: "张三",
        age: 10
    }
]
let new_arr = [...colors, "number", "string", ...ovl];
console.log(new_arr);