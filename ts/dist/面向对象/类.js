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
        //可以省略初始化赋值
        this.username = username;
        this.age = age;
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
class Vip extends Ponits {
    constructor(username, age, scroe = 0) {
        super(username, age);
        this.scroe = scroe;
    }
    postChart(title, content, file) {
        super.postChart(title, content);
        if (typeof file === "string") {
            this.postAtta(file);
        }
    }
    ;
    postAtta(file) {
        console.log(`${this.username} 上传了一个附件： ${file}`);
    }
}
let vip1 = new Vip("张三", 18, 20);
vip1.postChart("标题", "内容", "xxx.png");
/**
 * 修饰符: ts提供了四种修饰符，方便我们对类的属性方法进行一定的访问控制
 *  1. public: 公有，默认是公有
 *  2. protected: 受保护
 *  3. private: 私有
 *  4. readony: 只读
 * 每个修饰符的访问级别也不一样：
 *  1. public:
 *          a. 自身
 *          b. 子类
 *          c. 类外
 *  2. protected:
 *          a. 自身
 *          b. 子类
 *  3. private:
 *          a. 自身
 *  4. readonly:
 *          a. 自身
 *          b. 子类
 *          c. 类外
 *  readonly只读修饰符只能针对成员属性使用，且必须在声明时或构造函数里被初始化
 */
class Init {
    constructor(
    // 可以访问，但是一旦确定下来无法修改
    id, 
    //  可以访问，但是外部不能更改
    username, 
    //  外部包括子类不能访问，也不能修改
    password, 
    // 外部，子类，自身都可以访问
    sorce) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.sorce = sorce;
    }
}
let init = new Init(10, "张三", "123", "用户");
// init.id = 123; // error 只能访问，不可修改
// init.username = "李四"; // error 外部实例无法访问，只能在类中使用
init.sorce = "管理员";
// init.password = "1231231"; // error 私有属性，只能在类中使用
/**
 * 寄存器：
 *      寄存器可以使我们在对类成员属性进行更加细腻的控制
 *      通过寄存器可以对类成员属性进行拦截和控制，更好的设置访问便捷
 * 分两种：
 *      getter
 *          - getter是访问控制器，在访问指定成员属性时调用
 *      setter
 *          - setter组件：
 *            设置控制器，当设置指定成员属性时调用
 *              1. 函数式组件
 *              2. 类式组件
 *              3. props与state
 *              4. 组件通信
 *              5. 表单与受控组件
 *
 */
class Prox {
    constructor(_id, _username, _password) {
        this._id = _id;
        this._username = _username;
        this._password = _password;
    }
    ;
    set password(password) {
        if (password.length >= 6) {
            this._password = password;
        }
    }
    ;
    get getPassword() {
        if (typeof this._password !== "undefined") {
            return this._password;
        }
        return undefined;
    }
}
;
// let prox = new Prox(10, "chj", "123");
// let dialog = prox.getPassword;
// if (typeof dialog === "undefined") {
//     alert("当前密码为空")
// } else if (typeof dialog === "string") {
//     alert(dialog)
// }
/**
 * 静态属性：指的是给；类本身添加成员，并且只能使用类去访问该属性
 * 关键字 static 声明静态属性，并且还可以结合其余四种修饰符进行修饰属性成员
 * 注意：
 *      1. 类的静态成员是属于类的，不能通过实例对象来进行访问，而是直接通过类名访问
 *      2. 静态成员也可以通过访问修饰符进行修饰
 *      3. 静态成员属性一般约定为全大写
 */
// type ALL = "png" | "gif" | "jpg" | "jpeg";
// class Npx extends Prox {
//     static readonly ALLOW: Array<ALL> = ["png", "gif", "jpg", "jpeg"];
//     constructor(
//         id: number,
//         username: string,
//         private _allowFile: Array<ALL>
//     ) {
//         super(id, username);
//     };
//     init() {
//         //  Npx类型用户允许上传所有类型的一种
//         console.log(Npx.ALLOW);
//         // 实例化永华上传类型只能是一种
//         console.log(this._allowFile);
//     }
// };
// let npx1 = new Npx(10, "张三", ["jpeg", "gif"]);
// console.log(npx1);
// console.log(Npx.ALLOW);
// npx1.init();
