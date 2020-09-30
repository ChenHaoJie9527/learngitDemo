/**
 * 正则表达式，要么匹配字符，要么匹配位置。
 * 内容：
 *      1.两种模糊匹配: 横向模糊匹配，纵向模糊匹配
 *      2.字符组
 *      3.量词
 *      4.分支结构
 *      5.案例分析
 */
//精确匹配
// var regex: RegExp = /hello/;
// console.log(regex.test("hello"));
// => true
/**
 * 横向模糊匹配: 一个正则可匹配的字符串的长度不是固定的，可以是多种情况
 * 其实现的方式是量词，比如{m,n}，花括号，表示连续出现最少m次，最多n次
 * 比如正则/ab{2,5}c/,表示匹配这样的一个字符：第一个字符"a",接下来是{2,5}个b，最后是c
 */
// const reg = /ab{2,5}c/g;
// const Reg = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
// console.log(Reg.match(reg)); 
// tips:  g 是正则的一个修饰符。表示全局匹配，即，在目 标字符串中按顺序找到满足匹配模式的所有子串，强调的是“所有”，而不只是"第一个"
/**
 * 纵向模糊匹配：一个正则匹配的字符串，具体到某一位字符时，可以不必是某个确定的字符，可以有多种可能
 * 其实现方式是使用字符组[], 譬如[abc]，表示该字符是可以字符a b c其中任何一个
 * 比如/a[123]bc/可以匹配 a1bc a2bc a3bc
 * 字符组范围表示法：
 *          如果字符组里的字符特别多的话，怎么办？可以使用字符组范围表示法
 *          比如[123456abcdefgHJIKOI],可以写成 [1-6a-gH-I] 使用连字符 - 来省略或者简写
 *          因为连字符有特殊用途，那么要匹配 "a"、"-"、"z" 这三者中任意一个字符，该怎么做呢？
 *          不能写成 [a-z]，因为其表示小写字符中的任何一个字符。
 *          可以写成如下的方式：[-az] 或 [az-] 或 [a\-z]。
 *          即要么放在开头，要么放在结尾，要么转义。总之不会让引擎认为是范围表示法就行了。
 * 字符组排除法：
 *          纵向模糊匹配，还有一种情形就是，某位字符可以是任何东西，但就不能是 "a"、"b"、"c"。
 *          此时就是排除字符组（反义字符组）的概念。例如 [^abc]，表示是一个除 "a"、"b"、"c"之外的任意一个字 符。字符组的第一位放 ^（脱字符），表示求反的概念。
 */
// const reg = /a[123]b/g;
// const RegStr = "a0b a1b a2b a3b a4b";
// console.log(RegStr.match(reg)); // ["a1b", "a2b", "a3b"]
// const reg = /[a-zA-Z]\d/g;
// console.log(reg.test("asdqwrwqdfdsfjoliad12314132112312312321321321312312321321312321222222"));
// const reg = /[^abc]/g;
// const RegStr = "a123132";
// console.log(reg.test(RegStr));
// const reg = /\d/; // 任意数字 [0-9]
// console.log(reg.test("10000000000000000000000000000000"));
// const reg = /\D/; //除数字以外任意字符
// console.log(reg.test("asdadssa"));
// const reg = /\w/; //表示数字，大小写字母和下划线
// console.log(reg.test("123034-sad"));
// const reg = /\W/; //非单词字符
// console.log(reg.test("&^^%$^%$^5"));
// const reg = /\s/; //空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页 符。
// console.log(reg.test(" "));
// const reg = /\S/; //非空白符
// console.log(reg.test(" "));
//如果要匹配任意字符怎么办？可以使用 [\d\D]、[\w\W]、[\s\S] 和 [^] 中任何的一个。
/**
 * 量词：
 *      也称重复。掌握 {m,n} 的准确含义后，只需要记住一些简写形式。
 *      1. {m,}: 表示至少出现m次
 *      2. {m}: 表示出现m次
 *      3. ?: 等价于 {0,1}，表示出现或者不出现。记忆方式：问号的意思表示，有吗？
 *      4. +: 等价于 {1,}，表示出现至少一次。 记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。
 *      5. *: 等价于 {0,}，表示出现任意次，有可能不出现。
 */
/**
 * 贪婪匹配：
 *         1. 会尽可能多的匹配，只要在能力范围内，越多越好
 *          //["123", "1234", "12345", "12345"]其中正则 /\d{2,5}/，表示数字连续出现 2 到 5 次。会匹配 2 位、3 位、4 位、5 位连续数字。
            // 但是其是贪婪的，它会尽可能多的匹配。你能给我 6 个，我就要 5 个。你能给我 3 个，我就要 3 个。
            // 反正只要在能力范围内，越多越好。
    贪婪量词：
            1. {m,n}
            2. {m,}
            3. ?
            4. +
            5. *
 */
// const reg = /\d{2,5}/g;
// const RegStr = "1 12 123 1234 12345 123456";
// console.log(RegStr.match(reg)); 
/**
 * 惰性匹配：
 *          1. 通过在量词后面加个问号就能实现惰性匹配，因此所有惰性匹配情形如下：
 * 惰性量词：
 *          2. {m,n}?
 *          3. {m,}?
 *          4. ??
 *          5. +?
 *          6. *?
 */
// const reg = /\d{2,5}?/g;
// const RegStr = "1 12 123 12345";
// console.log(RegStr.match(reg)); //["12", "12", "12", "34"]
/**
 * 多选分支：
 *      一个模式可以实现横向和纵向模糊匹配，而多选分支可以支持多个子模式任选其一。
 *      (p1|p2|p3),其中p1 p2 p3是子模式，用|管道符分隔，表示其中任何质疑
 *      注意：分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。
 */
// const reg = /goodbye|good/g;
// const RegStr = "goodbye idea, nice try";
// console.log(RegStr.match(reg)); // [goodbye]
//案例分析：匹配16进制颜色
/**
 * 要求匹配：
 *      #ffbbad
        #Fc01DF
        #FFF
        #ffE
 */
// const reg = /[0-9a-fA-F]{6}|[9-9a-fA-F]{3}/g;
// const RegStr = "#ffbbad #Fc01ed #fff";
// console.log(RegStr.match(reg));
// 以24小时制为例
/**
 * 要求匹配：
 *      23：59
 *      02：07
 */
const reg = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
