/**
 * 有的时候，我们在使用类型标注的时候，希望能把类型限制在一定的范围，提供更加精确的类型标注
 */
//img的类型是Element，然而Element类型其实只是元素类型的通用类型，如果我们去访问这个变量的src属性
// 是不存在的，因此需要更为精确的类型标注，把范围缩小，因此可以使用类型断言
// 注意：断言只是一种预判机制，并不会对数据本身造成实际作用，类似转换，并非真的转换了
let img = document.querySelector(".img") as HTMLImageElement;
console.log(img.tagName);

//尖括号
let someValue: any = "a1qedas";
let strleng: number = (someValue as string).length;