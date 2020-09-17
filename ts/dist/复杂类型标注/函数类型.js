;
let fn = (y, x = "hello") => {
    console.log(this);
    return y;
};
console.log(fn(10));
