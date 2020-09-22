/**
 * 泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型
 * 泛型接口：用于针对接口的类型范围
 */
interface Mixin<T> {
    title: T
};

type mixType = string;

let mymixin: Mixin<mixType> = {
    title: "李鑫"
};
console.log(mymixin);
