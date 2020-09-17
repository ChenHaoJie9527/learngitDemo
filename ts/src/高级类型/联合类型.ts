/**
 * 联合类型： 成为多选类型，当我们需要标注一个变量为多个类型之一时，可以选择联合类型
 */
function test(ele: Element, attr: string, value: string | number) {
    return {
        ele,
        attr,
        value
    }
};
let boxs = document.querySelector(".box");
if (boxs) {
    console.log(test(boxs, "width", "100px"));
    console.log(test(boxs,"xasd",1));
    // console.log(test(boxs,"12321",[1,2])); //error
}