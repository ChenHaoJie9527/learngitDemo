/**
 * 在使用TS定义一个类的时候，同时定义了两个不同的类型
 *  1.类类型
 *      - 类类型是什么？JS中的类和TS中的类本质上还是一个函数，也被成为构造函数constructor
 *        这个类或者构造函数本身也是有类型的，那么这个类型就是类的类型
 *  2.对象类型
 *      - new实例化的具体对象，成为对象类型
 */
class Isperson {
    // 类的构造函数也是属于类
    constructor(name, age, gender = '男') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
    }
}
// 属于类
Isperson.type = "人";
let per1 = new Isperson("张三", 10, "男");
/**
 * 上面例子中，有两个不同的数据
 *      Isperson类（构造函数）
 *      通过Isperson实例化出来的对象per1
 * 对应也有不同的类型
 *      实例的类型 Isperson
 *      构造函数的类型 typeof Isperson
 */
// interface IsLit {
//     name: string,
//     age: number,
//     gender: string,
//     aet(): void
// };
// interface IsLitConstructor {
//     //new 表示它是一个函数
//     new (name: string, age: number, gender: "男" | "女"): 
// }
