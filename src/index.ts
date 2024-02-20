// @ts-check

/**
 * Added type annotations for properties in the Vehicle class.
class Vehicle {
  status = "stopped";
*/
  class Vehicle {
    status: "started" | "stopped" = "stopped";
    make: string;
    model: string;
    wheels: number;

/**
 *Added a union type for the status property in the Vehicle class.
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
*/
  constructor(make: string, model: string, wheels: number | string) {
    this.make = make;
    this.model = model;
    this.wheels = typeof wheels === "number" ? wheels : parseInt(wheels);
  }
/**
 * added : void to status check
 *  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}
 */
 
start(): void {
  this.status = "started";
}

stop(): void {
  this.status = "stopped";
}
}

/**
 * Adjusted the Car and MotorCycle classes to match the constructor signature of the Vehicle class.

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, "four");
  }
}

class MotorCycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}
*/
class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

/**
 * 
 * @param vehicle Changed the printStatus function parameter type to Vehicle.
 * 
function printStatus(vehicle) {
  if (vehicle.status === "running") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}
 */
function printStatus(vehicle: Vehicle): void {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

/**
 * Corrected the method name in console.log(myHarley.make.toUpperCase()); to use toUpperCase() instead of toUppercase().
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUppercase());
*/
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase()); // Note the corrected method name "toUpperCase"

/**
 * Corrected the property name in console.log(myBuick.model); to use the correct property name "model".
 
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.mdl);
*/
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model); // Note the corrected property name "model"
