/**
 * 泛型变量是TS的一种约定好的规范，也就是说使用大写字母A-Z定义的类型变量都属于泛型
 *  1. T： 表示一个TypeScript类型
 *  2. K： 表示对象中的键类型
 *  3. V： 表示对象中的值类型
 *  4. E： 表示元素类型
 * 
 * 泛型工具：
 *      1. typeof操作符可以用来获取一个变量声明或者对象的类型
 *      2. keyof操作符用来获取对象的key值，针对的是接口
 *      3. in 用来遍历枚举类型
 *      4. infer 在条件类型语句中，infer声明一个类型变量并且使用
 *      5. extends 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束
 *      6. Partial的作用就是将某个类型的属性变成可选属性
 */
// typeof
interface Meger {
    name: string,
    age: number
}
const sem: Meger = {
    name: "张三",
    age: 10
}
type Sem = typeof sem; // Meger类型

function Todo(x: number): Array<number> {
    return [x];
}
type Funce = typeof Todo;
let sefsad: number = 10;
let esaxz = typeof sefsad;

//keyof
interface pres {
    name: string,
    age: number
}
const Prejects: pres = {
    name: "张三",
    age: 10
}
type presjects = keyof pres

// in遍历可枚举类型
type HTTP = 'a' | 'b' | 'c'
type Objs = {
    [p in HTTP]: string
}
function Lib(x: Objs) {
    return x;
};
Lib({
    a: "张三",
    b: "李四",
    c: "王五"
})

//infer
type Inter = 'sufe' | 'jeck' | 'mrke';
function Inster <T>(x: T){
    
};
Inster<Inter>("mrke")

//extends
// interface Islog {
//     lenght: number
// }
type Islog = string;

function Loger<T extends Islog>(val: T){
    console.log(val.length);
    return val
};
Loger("qweadadsa")

/**
 * Partial<Todo>:
 *      {
   title?: string | undefined;
   description?: string | undefined;
}

 */
interface Todo {
    title: string,
    despreter: string
}
function updateTodo(todo: Todo, filesUpdate: Partial<Todo>){
    return {
        todo,
        filesUpdate
    }
};
const res = updateTodo({
    title: "1231",
    despreter: "123123"
},{
    
});
console.log(res);

