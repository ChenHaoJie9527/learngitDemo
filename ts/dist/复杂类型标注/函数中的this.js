/**
 * 无论是JS还是TS，函数中的this都是核心，那函数中的this的类型该如何进行标注呢？
 *  1. 普通函数的this
 *  2. 箭头函数的this
 * 对于普通函数而言，this是会随着调用环境的变化而变化的，所以在默认的情况下，普通函数中的
 * this会被标注为any类型，但我们可以在函数的第一个参数位上显示的标注this的类型
 */
;
let objT1 = {
    a: 10,
    fn(x) {
        // console.log("默认any", this); //默认any类型，只向当前对象objT1
        return x;
    }
};
let objT2 = {
    a: 20,
    fn(x) {
        //通过第一个参数位标注this的类型，它不会对实际参数造成影响,指向当前对象objT2
        // console.log("this被显示修改了", this);
    }
};
objT1.fn("张三");
objT2.fn("李四");
;
let objY1 = {
    a: 100,
    fn() {
        return () => {
            console.log(this); //指向当前作用域 => 当前对象
        };
    }
};
objY1.fn("张三")();
// let sm = (this: T)=>{ //error
// }
let oderly = function (x) {
    return () => {
        console.log(this); //指向全局作用window对象
    };
};
oderly(10)();
