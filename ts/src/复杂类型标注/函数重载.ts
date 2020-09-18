/**
 * 有时候，同一个函数会接受不同类型的参数，返回不同类型的返回值
 * 我们可以使用函数重载来实现
 * 实现条件：
 *      
 */
function showOrhide(ele: HTMLDivElement, attr: string, value: 'block' | 'none' | number) {
    if (attr === "display") {
        ele.style.display = `${value}`;
    }
    if (attr === "opacity") {
        ele.style.display = `block`
        ele.style.opacity = `${value}`;
    }

};
let div = document.querySelector("div");
if (div) {
    // showOrhide(div, "display", "none");
    showOrhide(div, "opacity", 1)
}