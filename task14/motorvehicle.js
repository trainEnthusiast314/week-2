class MotorVehicle {
  constructor(make, model, wheels, engineSize) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.engineSize = engineSize;
    this._speed = 0;
  }
  accelerate(time) {
    this._speed = this._speed + ((0.25 * this.engineSize) / this.wheels) * time;
  }
  brake(time) {
    this._speed =
      this._speed - ((0.3 * this.engineSize) / this.wheels) * time > 0
        ? this._speed - ((0.3 * this.engineSize) / this.wheels) * time
        : 0;
  }
}

export default MotorVehicle;
