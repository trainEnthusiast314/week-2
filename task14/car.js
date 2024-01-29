import MotorVehicle from "./motorvehicle.js";
class Car extends MotorVehicle {
  constructor(make, model, engineSize, doors, satNav = false, wheels) {
    super(make, model, (wheels = 4), engineSize);
    this.doors = doors;
    this.satNav = satNav;
  }
}

export default Car;
