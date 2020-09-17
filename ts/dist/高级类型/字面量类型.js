/**
 * 有时候，我们希望标注的不是某个类型，而是一个固定的值，就可以使用字面量类型，配合联合类型更有用
 */
function serList(ele, attr) {
    return {
        ele,
        attr
    };
}
;
const li = document.querySelector(".li");
li && console.log(serList(li, "top"));
;
