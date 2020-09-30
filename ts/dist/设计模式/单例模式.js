/**
 * 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。
            要如何才能保证一个类仅有一个实例呐？
            要做到这一点，就需要构造函数具备判断自己是否已经创建过一个实例的能力。
 */
//简式单例模式
class ToolBarComponent_1 {
    static getInstance() {
        if (!(this.instance)) {
            this.instance = new ToolBarComponent_1;
        }
        return this.instance;
    }
}
const tool_1 = ToolBarComponent_1.getInstance();
const tool_2 = ToolBarComponent_1.getInstance();
console.log(tool_1 == tool_2); // true
//但是这样做还是差了点，比如用户仍然可以通过instance属性直接获取单例，或者通过new的方式创建单例，那我们可以这样做：
class ToolBarComponent_2 {
    constructor() { }
    ;
    static getInstance() {
        if (!(this.instance)) {
            this.instance = new ToolBarComponent_2;
        }
        return this.instance;
    }
}
;
const tool_3 = ToolBarComponent_2.getInstance();
const tool_4 = ToolBarComponent_2.getInstance();
console.log(tool_3 == tool_4); // 取消new的方式创建单例，通过类的私有方法进行实例创建单例
