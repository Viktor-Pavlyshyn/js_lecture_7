// 1. Write a TypeScript function that takes an array of objects with different properties, 
// but each object must have a "name" property of type string. The function should 
// return an array of only the "name" properties. Use generics to ensure that the 
// function works with arrays of any object type.

interface UserProfile {
    name: string;
    age?: number;
    description?: string;
}

const personArr: Array<UserProfile> = new Array(
    { name: "Ivan", age: 25 },
    { name: "Olena", description: "developer" }
);

function getAllNameFromUserProfile<T extends UserProfile>(personArr: Array<T>): Array<string> {

    return personArr.map(item => item.name);
}


console.log('Task 1');

console.log(getAllNameFromUserProfile(personArr));

console.log('-----------------------------------------');

// 2. Create a TypeScript enum called "Size" that has values for "Small", "Medium", 
// and "Large". Write a function that takes a "Size" value and returns an object 
// with properties for width, height, and color, based on the size value.

enum Size {
    Smal,
    Medium,
    Large
}

function getBySize(size: Size) {

    switch (size) {
        case Size.Smal: return { width: 3, height: 3, color: "yellow" };
        case Size.Medium: return { width: 6, height: 6, color: "green" };
        case Size.Large: return { width: 9, height: 9, color: "red" };
        default: throw new Error();
    }
}

console.log('Task 2');

console.log(getBySize(Size.Medium));

console.log('-----------------------------------------');

// 3. Create a TypeScript class (with additional private, readable and protected 
// modifiers) called "Vehicle" that has properties for make, model, and year, as well as 
// a method called "start" that logs a message to the console. Create a second class 
// called "Car" that extends the "Vehicle" class and has an additional property for 
// color, as well as a method called "drive" that logs a message to the console. 
// Instantiate the "Car" class and call the "start" and "drive" methods.

class Vehicle {

    readonly model: string;
    private make: string;
    protected year: string;

    constructor(model: string, make: string, year: string) {
        this.model = model,
            this.make = make,
            this.year = year
    }

    start() {
        console.log(`Vehicl - make: ${this.make}, year: ${this.year}`);
    }

}
class Car extends Vehicle {

    color: string;

    constructor(model: string, make: string, year: string, color: string) {
        super(model, make, year);
        this.color = color;

    }

    drive() {
        console.log(`Car - color: ${this.color}, year: ${this.year}`);
    }

}

const car: Car = new Car("Nissan", "Nissan Motor Co", "2015", "green");

console.log('Task 3');

car.start();
car.drive();

console.log('-----------------------------------------');