type hobyType = number;
class GenHoby<T> {
    zror: T;
    add: (x: T, y: T) => T
};
let genhoby = new GenHoby<hobyType>();
genhoby.zror = 10;
genhoby.add = (x, y) => {
    return x + y;
};
console.log(genhoby.add(10, 20));

interface Ben<T> {
    (title: T, content: T): T
}
let ben: Ben<string> = (title,content)=>{
    return title + content;
};
console.log(ben("主题","我和我的家乡"));
