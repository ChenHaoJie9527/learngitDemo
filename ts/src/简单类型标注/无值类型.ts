/**
 * 无值类型：表示没有任何数据的类型，通常用于标注无返回值函数的返回值类型，函数默认标注类型为void
 * 注意：
 *      当配置项strictNullChecks为false的情况下，undefined和null都可以赋值给void
 *      但是当strictNullChecks为true的情况下，只有undefined才可以赋值给void
 */
function fc(){
     //没有return 或者 return undefined 默认void
 }