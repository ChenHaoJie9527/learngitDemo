/**
 * 对象的展开运算符
 */
let personlow = {
  name: "Semlinker",
  gender: "Male",
  address: "Xiamen",
};

// 组装对象
let personWithAge = { ...personlow, age: 33 };

// 获取除了某些项外的其它项
let { name: personlowName, ...rest } = personlow;
console.log(personlowName, rest);

interface GetNum {
  one: number
}

function getNumber({ one }: GetNum): number {
  return one;
}

const one = getNumber({ one: 1 });

type Lady = { name: string, age: Number };

const xiaoJieJies: Array<Lady> = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];






