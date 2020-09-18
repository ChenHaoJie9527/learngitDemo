function merge(target, ...oters) {
    if (oters.length > 0) {
        return oters.reduce((pre, cur) => {
            return pre = Object.assign(pre, cur);
        }, target);
    }
}
;
let newIO = merge({ x: 1 }, { y: 2 }, { z: [1, 2, 3, 4, 5] });
console.log(newIO);
