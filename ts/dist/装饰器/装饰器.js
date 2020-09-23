/**
 * 装饰器是什么？
 *      1. 装饰器是一个表达式
 *      2. 该表达式被执行后，会返回一个函数
 *      3. 函数的入参分别是target name descrtptor
 *      4. 执行该函数后，可能返回descriptor对象，用于配置target对象
 * 装饰器的分类？
 *      1. 类装饰器 Class decorators
 *      2. 属性装饰器 Property decorators
 *      3. 方法装饰器 Method decorators
 *      4. 参数装饰器 Parameter decorators
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 类装饰器
 * 类装饰器是用来装饰类的，它接受一个参数：
 *     target: TFunts (被装饰的类)
 * 1.   普通装饰器
 * 2.   工厂函数装饰器
 */
//普通函数
// function Logper(params: any) {
//     console.log(params); // 当前构造函数HttpClinet
//     //params是当前类
//     params.prototype.apiUrl = function(){
//         console.log("调用方法");
//     }
//     params.prototype.run = "在选材的"
// }
// @Logper
// class HttpClinet {
//     constructor(){}
//     getData(){}
// }
// let http: any = new HttpClinet();
// http.apiUrl()
// console.log(http.run);
// 工厂函数装饰器
// function Logers(params: string) {
//     return function (target: any) {
//         console.log(target); //构造函数HttpClient
//         console.log(params); //调用装饰器传参 http://www.abc.com
//         target.prototype.apiUrl = params;
//     }
// }
// @Logers("http://www.abc.com")
// class HttpClient {
//     constructor() { }
//     getData() { }
// };
// let http: any = new HttpClient();
// console.log(http.apiUrl);
//普通装饰器
// function Greet(params: any) {
//     params.prototype.greets = function () {
//         console.log("hello-ts");
//     }
// }
// @Greet
// class Greeting {
//     constructor() {
//     }
// };
// let myGreeting: any = new Greeting();
// myGreeting.greets();
// function Greeter(greeting: string) {
//     //greeting传过来的值
//     return function (target: any) {
//         console.log(target); //构造函数
//         target.prototype.greet = function (): void {
//             console.log(greeting);
//         };
//     };
// }
// @Greeter("Hello TS!")
// class Greeting {
//     constructor() {
//         // 内部实现
//     }
// }
// let myGreeting: any = new Greeting();
// myGreeting.greet(); // console output: 'Hello TS!';
//重载构造函数: 类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其一的参数
// 如果类构造器返回一个值，那么会将提供的构造函数替换类的声明
// function LogClass(target: any){
//     return class extends target {
//         apiUrl = "修改的apiUrl";
//         getData(){
//             this.apiUrl = this.apiUrl+"1111=====";
//             console.log(this.apiUrl);
//         }
//     }
// }
// @LogClass
// class HttpClient {
//     constructor(
//         public apiUrl: string | undefined
//     ){
//         this.apiUrl = "构造函数的Url"
//     }
//     getData(){
//         console.log(this.apiUrl);
//     }
// };
// let http: any = new HttpClient("12312321321");
// http.getData()
/**
 * 属性装饰器：
 *      属性装饰器表达式会在运行时当做函数来调用，传入两个参数
 *          1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
 *          2. 成员名字
 */
// function LogPrototypes(params: string | undefined) {
//     console.log(params); //传的参数 12312312321
//         return function(target: any, attr: any){
//             console.log(target); //由于是对于静态成员，所以是类的构造函数
//             console.log(attr); // 静态成员的名字
//             target[attr] = params;
//         }
// };
// class HttpClient {
//     @LogPrototypes("12312312321")
//     public url: string | undefined
//     constructor(){}
//     getData(){
//         console.log(this.url);
//     }
// };
// let http = new HttpClient();
// console.log(http);
// function LogSuper(params: string){
//     console.log(params);
//     return function(target: any, attr: any){
//         console.log(target);
//         console.log(attr);
//         target[attr] = params
//     }
// }
// class Supers {
//     @LogSuper("qweqwewq")
//     public name:string
//     constructor(
//         name: string
//     ){
//         this.name = name;
//     }
// };
// let supers = new Supers("张三");
// supers.name = "12312321321321"
/**
 * 方法装饰器：通常被应用到方法的属性描述符上，也可以用来监视，修改和替换原来的方法
 * 该方法接受三个参数：
 *                  1. 于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *                  2. 成员的名字
 *                  3. 成员的属性描述符
 */
// function get(params: string) {
//     return function (target: any, methodName: any, desc: any) {
//         console.log(target); //原型对象
//         console.log(methodName); // 方法名称
//         console.log(desc); // 类的方法 value
//         target.url = params + "11111111111111";
//         target.getDatas = function () {
//             console.log(this.url + "重载");
//         }
//     }
// }
// class GetList {
//     public url: string | undefined
//     constructor() {
//     }
//     @get("http://360.org")
//     getData() {
//         console.log(this.url);
//     }
// }
// let http: any = new GetList();
// console.log(http.url);
// http.getDatas()
/**
 * 方法参数装饰器：方法参数装饰器表达式会在运行时被调用，可以使用参数装饰器为类的原型增加一些元素，传入下列3个参数：
 *      1. 对于静态成员来说类是构造函数，对于实例成员来说是原型对象
 *      2. 参数的明珠
 *      3. 参数在函数参数列表中的索引
 */
// function LogClient(params: any) {
//     return function (target: any, paramsName: any, paramsIndex: any) {
//         console.log(target);
//         console.log(paramsName);
//         console.log(paramsIndex);
//         target.apiUrl = params;
//     }
// }
// class HttpClient {
//     constructor(
//         public url?: any | undefined
//     ) {
//     }
//     getData(
//         @LogClient("hello") id: number
//     ) {
//         console.log(id);
//     }
// }
// let http: any = new HttpClient();
// http.getData(123);
// console.log(http.apiUrl);
/**
 * 装饰器的执行顺序：属性>方法>方法参数>类，如果有多个同样的装饰器，先执行后面的
 */
function logClass1(params) {
    return function (target) {
        console.log("装饰器1");
    };
}
function logClass2(params) {
    return function (target) {
        console.log("装饰器2");
    };
}
function logAttribute(params) {
    return function (target, attrName) {
        console.log("属性装饰器");
    };
}
function logMethod(params) {
    return function (target, attrName, desc) {
        console.log("方法装饰器");
    };
}
function logParams1(params) {
    return function (target, attrName, desc) {
        console.log("方法参数装饰器1");
    };
}
function logParams2(params) {
    return function (target, attrName, desc) {
        console.log("方法参数装饰器1=2");
    };
}
let HttpClient = class HttpClient {
    constructor() { }
    getData() {
        return true;
    }
    setData(attr1, attr2) {
    }
};
__decorate([
    logAttribute()
], HttpClient.prototype, "apiUrl", void 0);
__decorate([
    logMethod()
], HttpClient.prototype, "getData", null);
__decorate([
    __param(0, logParams1()), __param(1, logParams2())
], HttpClient.prototype, "setData", null);
HttpClient = __decorate([
    logClass2("aaa"),
    logClass2("xxx")
], HttpClient);
var http = new HttpClient();
//属性装饰器
//方法装饰器
//方法参数装饰器2
//方法参数装饰器1
//类装饰器2
//类装饰器1
