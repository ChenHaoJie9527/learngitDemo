/**
 * 数组遍历： 遍历语法与JS相同
 */
let new_array = ["red", 123, null, true, { a: 10, b: 20 }];
let delteo = function (val) {
    for (const key in val) {
        if (Object.prototype.hasOwnProperty.call(val, key)) {
            return {
                key: val[key]
            };
        }
    }
};
for (const key of new_array) {
    if (typeof key === "object" && key !== null) {
        let set = delteo(key);
        console.log(set);
    }
}
