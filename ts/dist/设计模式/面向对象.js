/**
 * 面向对象是一个非常重要的抽象概念
 * 在熟悉继承中，还是要记住这三点：
    子类拥有父类非 private 的所有属性和方法
    子类具有自己的属性和功能
    子类可以以自己的方式实现父类的功能
 */
//对于不需要实例化的类，可以定义为抽象类
/**
 * 抽象类：
 *       1. 抽象类不能被实例化
 *       2. 抽象方法必须要被子类重写
 *       3. 如果类中含有抽象方法，那么该类必须是个抽象类
 *      相对于抽象类，接口则完全不包含成员的实现，或者从某一方面来说：
 *          1. 抽象类是对类的抽象
 *          2. 接口是对行为的抽象
 */
class Messages {
}
class Notifications extends Messages {
    info(msg) {
        console.warn(msg);
    }
}
class Toals extends Messages {
    info(msg) {
        var _a;
        let msgNode = document.createElement('span');
        let textNode = document.createTextNode(`提示：${msg}`);
        msgNode.appendChild(textNode);
        (_a = document.getElementById('container')) === null || _a === void 0 ? void 0 : _a.appendChild(msgNode);
    }
}
