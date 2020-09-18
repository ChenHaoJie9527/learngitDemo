/**
 * 剩余参数是一个数组，所以标注的时候一定要注意
 */
interface IO {
    [key: string]: any;
}
function merge(target: IO, ...oters: Array<IO>) {
    if (oters.length > 0) {
        return oters.reduce((pre, cur) => {
            return pre = Object.assign(pre, cur);
        }, target)
    }
};
let newIO = merge({ x: 1 }, { y: 2 }, {z: [1,2,3,4,5]});
console.log(newIO);