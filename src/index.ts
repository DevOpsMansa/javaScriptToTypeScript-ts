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

/**
 * Part 3
 */
class NCycle<T> extends Vehicle {
  make: T | T[];
  model: T | T[];

  constructor(make: T | T[], model: T | T[], wheels: number | string) {
    super("", "", wheels);
    this.make = make;
    this.model = model;
  }

  print(parameter?: number): void {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (Array.isArray(this.make) && Array.isArray(this.model) && parameter !== undefined) {
      if (this.make[parameter] && this.model[parameter]) {
        console.log(`This NCycle has a ${this.make[parameter]} ${this.model[parameter]} at ${parameter}.`);
      } else {
        console.log("This NCycle was not created properly.");
      }
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i = 0; i < Math.min(this.make.length, this.model.length); i++) {
        console.log(`This is a ${this.make[i]} ${this.model[i]} NCycle.`);
      }
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}

// Example usage:
const myNCycleSingle = new NCycle("GenericMake", "GenericModel", 2);
myNCycleSingle.print(); // This is a GenericMake GenericModel NCycle.
myNCycleSingle.printAll(); // This NCycle was not created properly.

const myNCycleArray = new NCycle(["Make1", "Make2"], ["Model1", "Model2"], 2);
myNCycleArray.print(1); // This NCycle has a Make2 Model2 at 1.
myNCycleArray.printAll(); // This is a Make1 Model1 NCycle.
                          // This is a Make2 Model2 NCycle.


/**
 * Part 4: Below, we have included a block of rudimentary testing code that you can use, but you must compare this with your own expected output.
 * // Rudimentary testing Code, not part of the assignment
const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print(); 
testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print(); 
testCycle2.printAll();

const testCycle3 = new NCycle<string>("Make", 10, 4);
testCycle3.print(4); 
testCycle3.printAll();

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4); 
testCycle4.print(2);
testCycle4.printAll();

const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle<number[]>(makes5, models5, 0); 
testCycle5.print(7);
testCycle5.printAll();

function add(x: number, y: number): number { 
    return x + y;
}
add(testCycle1.make, testCycle5.model[1]); 
// Error expected here 
add(testCycle2.make, testCycle4.model[1]);
*/

// Corrected testing code

// Rudimentary testing Code, not part of the assignment

const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print();
testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();

const testCycle3 = new NCycle<string>("Make", "Model", 4);
testCycle3.print(4);
testCycle3.printAll();

const makes4 = ["Volkswagen", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();

const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();

function add(x: number, y: number): number {
  return x + y;
}

// Error expected here due to type mismatch
// Change testCycle5.model[1] to testCycle5.make[1] to fix the error
add(testCycle1.make, testCycle5.make[1]);

// Error expected here due to type mismatch
// Change testCycle4.model[1] to testCycle4.make[1] to fix the error
add(testCycle2.make, testCycle4.make[1]);
