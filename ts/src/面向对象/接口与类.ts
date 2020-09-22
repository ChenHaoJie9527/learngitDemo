/**
 * 接口可以为对象定义一种解构和契约，将接口与类进行结合，通过接口，让类去强制符合某种契约
 * 从某个方面来讲，当一个抽象类中只有抽象的时候，他与接口没有太大区别
 * 因此更推荐通过接口的方式去定义契约。
 * 抽象类编译后悔产生实体代码，而接口不会
 * TS只支持单继承，一个子类只能继承一个父类，但是一个类可以实现多个接口
 * 接口不能有实现，但是抽象类可以
 * 但是类如何使用接口呐？
 * @implements关键字
 *  在一个类中使用接口并不是使用extends关键字，而是implements
 *  与接口相似，如果一个类implements一个接口，那么久必须实现接口定义的契约
 *  如果使用多个implements接口，就要用,分割
 *  implements与extends可同时存在
 */
interface ILog {
    getInfo(): string;
};
interface IStorage extends ILog {
    save(data: Array<number>): void;
}
interface ImyComponentPros {
    title: string;
}
interface ImyComponentState {
    val: number;
}

class Component<T1, T2> {
    public state: T2
    constructor(
        public props: T1
    ) {
        // ...
    }
    public render() { };
}

class MyComponent extends Component<ImyComponentPros, ImyComponentState> implements ILog,IStorage {
    constructor(props: ImyComponentPros) {
        super(props);
        this.state = {
            val: 1
        }
    };
    render() {
        this.props.title;
        this.state.val;
        return `<div>组件</div>`;
    };
    getInfo() {
        return `组件：MyComponent props: ${this.props} state: ${this.state}`;
    }
    save(data: Array<any>){
        //存储
        console.log(data);
    }
};
let cmp = new MyComponent({ title: "张三" });

cmp.save([1,2,3])




// interface Zoom {
//     title: string
// };

// type Ze = "张三" | "李四";
// interface Attrs {
//     render(): any
// }
// class Myzoom<T> implements Attrs{
//     constructor(public username: T) {

//     }
//     render(){

//     }
// };

// let myzoom = new Myzoom<Ze>("张三");
// console.log(myzoom);

// interface Name {
//     name: string,
//     age: number
//     getName(): any;
// }

// type strName = string | number;

// class Myname<T> implements Name {
//     constructor(
//         public name,
//         public age
//     ) {

//     }
//     getName() {

//     }
// };
// let myname = new Myname<strName>("张三", 19);
// console.log(myname);

