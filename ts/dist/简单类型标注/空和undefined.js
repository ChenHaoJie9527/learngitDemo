/***
 * null和undefined这两种类型有且只有一种类型，在一个变量或者参数为null或者undefined类型后，就不能修改了
 * 默认的情况下null和undefined是所有类型的子类型，就是说可以把null和undefined赋给其他类型
 * 然而，一个变量声明了类型但未赋值，那么该变量的值默认为undefined
 * 如果一个变量既不声明变量，也不赋值，那么默认该变量的类型为any类型，any类型又称为顶级类型，可以赋值任何类型
 * 由于null和undefined都是其他类型的子类型，在默认的情况下会有一些隐藏的小问题需要注意
 */
// let n:null;
// let u:undefined;
// let b:string = "kkb";
// b = null;
// b = undefined;
// let a:number; //默认undefined
// let e; //类型是any
// let c:number;
// c = null;
// c.toFixed(1); // error: 编译器不会报错，但是实际运行代码会报错;
let ele = document.querySelector("div");
ele && (ele.style.display = "none");
