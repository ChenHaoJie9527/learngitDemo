/**
 * 可辨识联合：又称为标签联合类型，具有三个特点
 *      1. 可辨识
 *      2. 联合类型
 *      3. 类型守卫
 * 这种类型的本质是结合联合类型和字面量类型的一种类型保护方法。
 * 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么久利用这个公共属性
 * 来创建不同的类型保护区块
 */

// 1.可辨识: 要求联合类型的每个元素都含有一个公共单例属性，比如
enum CarTran {
    AUTM = 200,
    MANS = 100
};
interface Motor {
    vType: "motor",
    make: number
};
interface Car {
    vType: "car",
    tranmisson: CarTran
};
interface Truck {
    vType: "truck",
    capacity: number
};
//我们分别定义了 Motorcycle、 Car 和 Truck 三个接口，
// 在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。

//然后可以根据三个不同接口来通过类型联合来进行别名
type Vehicle = Motor | Car | Truck;

//类型守卫
const EVALUATION_FACTOR = Math.PI; 
function evaluatePrice(vehicle: Vehicle) {
    switch (vehicle.vType) {
        case "motor":
            return vehicle.make * EVALUATION_FACTOR;
        case "car":
            console.log(vehicle.tranmisson );
            return vehicle.tranmisson * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
    }
};
const myTruck: Car = {
    vType: "car",
    tranmisson: 10
};
console.log(evaluatePrice(myTruck));