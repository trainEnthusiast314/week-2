import MotorVehicle from "./motorvehicle.js";

class MotorBike extends MotorVehicle {
  constructor(make, model, engineSize, driveType, wheels) {
    super(make, model, (wheels = 2), engineSize);
    this.driveType = driveType;
  }
  accelerate(time) {
    this._speed = this._speed + ((0.5 * this.engineSize) / this.wheels) * time;
  }
}

export default MotorBike;
