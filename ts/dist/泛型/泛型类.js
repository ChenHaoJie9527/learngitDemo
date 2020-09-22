class GenHoby {
}
;
let genhoby = new GenHoby();
genhoby.zror = 10;
genhoby.add = (x, y) => {
    return x + y;
};
console.log(genhoby.add(10, 20));
let ben = (title, content) => {
    return title + content;
};
console.log(ben("主题", "我和我的家乡"));
