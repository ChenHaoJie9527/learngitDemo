/**
 * 有时候，同一个函数会接受不同类型的参数，返回不同类型的返回值
 * 我们可以使用函数重载来实现
 * 实现条件：
 *      
 */
// class Calculator {
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
//     add(a: string, b: number): string;
//     add(a: number, b: string): string;
//     add(a: Combinable, b: Combinable) {
//       if (typeof a === "string" || typeof b === "string") {
//         return a.toString() + b.toString();
//       }
//       return a + b;
//     }
//   }
  
//   const calculator = new Calculator();
//   const result = calculator.add("Semlinker", " Kakuqo");
  