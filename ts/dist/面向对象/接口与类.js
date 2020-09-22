;
class Component {
    constructor(props) {
        this.props = props;
        // ...
    }
    render() { }
    ;
}
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1
        };
    }
    ;
    render() {
        this.props.title;
        this.state.val;
        return `<div>组件</div>`;
    }
    ;
    getInfo() {
        return `组件：MyComponent props: ${this.props} state: ${this.state}`;
    }
    save(data) {
        //存储
        console.log(data);
    }
}
;
let cmp = new MyComponent({ title: "张三" });
cmp.save([1, 2, 3]);
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
