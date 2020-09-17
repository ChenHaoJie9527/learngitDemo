/***
 * 数组类型：在TS中数组存储的类型必须一致，所以在标注数组类型的时候，同时也要对数组中存储的数据进行类型标注
 * 1.使用泛型标注
 * 2.使用简单标注
 */

//  泛型标注数组 <>
let arr: Array<number> = [1,2,3,4,5];
let as: Array<string> = ["1","2","3"];
arr.push(10);
arr.forEach(item => {
    console.log(item);
});

// 简单类型标注
let arr1: string[] = ["1","2"];
let arr2: number[] = [1,2,3,4,5];

