/**
 * TS的对象解构与JS的对象解构相似
 */
interface ns {
    name: string,
    gender: string
}
let person: ns = {
    name: "Semlinker",
    gender: "Male",
};

let { name: newname, gender: newgender } = person;
console.log(newname, newgender);