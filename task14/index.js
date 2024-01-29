import MotorVehicle from "./motorvehicle.js";
import Car from "./car.js";
import MotorBike from "./motorbike.js";
const myMotor = new MotorVehicle("myMake", "myModel", 4, 2000);

// console.log(myMotor);
// myMotor.accelerate(10);
// console.log(myMotor._speed);
// myMotor.brake(5);
// console.log(myMotor._speed);
// myMotor.brake(5);
// console.log(myMotor._speed);

const myCar = new Car("myCar", "myModel", 4000, 4, false);
console.log(myCar.wheels);

const myBike = new MotorBike("cool", "honda", 2000, "forward");
myBike.accelerate(1);
console.log(myBike._speed);
