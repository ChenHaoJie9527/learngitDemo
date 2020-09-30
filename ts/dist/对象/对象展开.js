var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * 对象的展开运算符
 */
let personlow = {
    name: "Semlinker",
    gender: "Male",
    address: "Xiamen",
};
// 组装对象
let personWithAge = Object.assign(Object.assign({}, personlow), { age: 33 });
// 获取除了某些项外的其它项
let { name: personlowName } = personlow, rest = __rest(personlow, ["name"]);
console.log(personlowName, rest);
function getNumber({ one }) {
    return one;
}
const one = getNumber({ one: 1 });
const xiaoJieJies = [
    { name: "刘英", age: 18 },
    { name: "谢大脚", age: 28 },
];
