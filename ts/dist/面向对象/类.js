/**
 * 类：当我们使用面向对象的方式进行编程时，通常会首先去分析具体要实现的功能，把特性相似的
 * 抽象成一个个的类，然后通过这些实例化出来的具体对象来完成具体业务需求。
 * 在类的基础中，有下面几个核心的知识点，也是TS和ES5+在类方面共有的特性
 *      1. class关键字
 *      2. 构造函数constructor
 *      3. 成员属性定义
 *      4. 成员方法
 *      5. this关键字
 * 除了上述的共同特性以外，在TS中还有许多ES没有的，或许当前还不支持的一些特性，如抽象
 *
 * construtor构造函数：
 *      1. 默认情况下，构造函数是一个空函数
 *      2. 我们自定义的构造函数会覆盖默认的构造函数
 *      3. 构造函数在类被new关键字实例化的时候调用
 *      4. 如果是实例化一个类的时候无需传入参数，则可以省略()
 *      5. 构造函数construtor不允许有return和返回值类型标注
 * 通常情况下，我们会把一个类实例化的时候的初始化相关代码写在构造函数中
 * 比如类成员属性的初始值18802074443
 *
 */
// class描述和组织一个类的结构，语法：
// class Ponits {
//     //类的特征定义在 {} 内部
//     //constructor构造函数，通过new关键字实例化类会返回一个具体对象，能够实例化的原因是
//     //  类本身具有construtor构造函数
//     constructor() {
//         console.log("实例化");
//     }
// }
//成员属性与方法定义
// 在类的内部，我们可以通过this关键字来访问类的成员属性和方法
// class Ponits {
//     id: number;
//     username: string;
//     constructor(id: number, username: string) {
//         this.id = id;
//         this.username = username;
//     }
//     postChart(title: string, content?: string | undefined) {
//         console.log("发表了一篇文章:" + title);
//     }
// };
// let pon1 = new Ponits(1, "asd");
// pon1.postChart("<庄周>");
//构造函数参数属性简写，类成员属性进行传参赋值初始化是一个比较常见的场景，
// 所以可以通过修饰符来直接生成成员属性
class Ponits {
    constructor(username, age) {
        this.username = username;
        this.age = age;
        //可以省略初始化赋值
    }
    ;
    postChart(title, content) {
        console.log(`${this.username}发表了一篇文章：${title}`);
    }
}
;
// let pon1 = new Ponits("张三", 10);
// /**
//  * @extends 继承父类;
//  * @super() 引用父类:
//  *  
//  *  
//  */
// class Vip extends Ponits {
//     constructor(
//         vipName: string,
//         vipAge: number
//     ) {
//         super(vipName, vipAge);
//     }
// };
// let pon2 = new Vip("李四", 30);
// console.log(pon2);
//方法的重写与重载
// 默认情况下，子类继承父类的属性和方法，但是子类也可以对它们进行重写和重载
// class Vip extends Ponits {
//     constructor(
//         username: string,
//         age: number,
//         public score = 0
//     ) {
//         super(username, age);
//     };
//     postChart(title: string, content?: string) {
//         this.score++;
//         console.log(`${this.username} 发表了一篇文章：${title}`);
//     }
// };
// let vip1 = new Vip("李四", 10);
// vip1.postChart("《背影》");
