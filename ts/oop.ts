import instantiate = WebAssembly.instantiate;

document.write("<br>");

// Classes
class Animal {

    public favouriteFood: string;
    private _weight: number;

    static count: number = 0;

    constructor(private name: string, private owner: string){
        Animal.count++;
    }

    ownerInfo() {
        document.write(this.name + " is  owned by " + this.owner + "<br>");
    }

    static animalsCount(): number {
        return Animal.count;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }
}

var spot = new Animal("Spot", "Henry");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's Weight is " + spot.weight + "<br>");
document.write("# of Animals : " + Animal.count + "<br>");

class Cat extends Animal {

    constructor(name: string, owner: string) {
        super(name, owner);
        Cat.count++;
    }

}

var botolo = new Cat("Botolo", "Jack");
document.write("# of Animals : " + Animal.animalsCount() + "<br>");
document.write("Is a Cat an Animal : " + (botolo instanceof Animal) + "<br>");
document.write("Does Botolo have a name : " + ('name' in botolo) + "<br>");
document.write("<br>");

//Interfaces!   ------
interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {

    constructor(private wheels: number){}

    drive(): void {
        document.write("The car drives with " + this.wheels + " wheels <br>")
    }
}

class Bycicle implements Vehicle {

    constructor(private wheels: number){}

    drive(): void {
        document.write("The bycicle drives with " + this.wheels + " wheels <br>")
    }
}

var car = new Car(4);
var bike = new Bycicle(2);

car.drive();
bike.drive();
document.write("<br>");

//Generic Functions ------
function getType<T>(val: T): string {
    return typeof(val)
}

var aString = "A String";
var aNum = 10;
document.write(getType(aString) + "<br>");
document.write(getType(aNum) + "<br>");

function getWheels<W extends Vehicle>(vehicle: W): number {
    return vehicle.drive();
}

getWheels(car);
getWheels(bike);
document.write("<br>");

//Generic Classes ------
class GenericNumber<T> {
    add: (val1: T, val2: T) => T;
}

// --- Numbers ---
var num = new GenericNumber<number>();
num.add = function (x, y) {return x + y};
document.write("5 + 4 = " + num.add(5, 4) + "<br>");

// --- Strings ---
var string = new GenericNumber<string>();
string.add = function (x, y) {return String(Number(x) + Number(y))};
document.write("5 + 6 = " + string.add("5", "6") + "<br>");

//  --- Destructuring ---
var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;
document.write("Normal Order: " + x + y + z + "<br>");

//Flipping an array :thonk:
[x, y, z] = [z, y, x];
document.write("Reverse: " + x + y + z + "<br>");

//Template Strings
var multilineString = `I'm a beautiful
multiline string that is very very 
very crazy tasty and long`;
document.write(multilineString + "<br>");
document.write(`<b>${multilineString}</b>`); //Epic Interpolation :o

//The Spread Operator   (Not Working yay)
function printSum(x, y, z): void {
    document.write("Sum : " + (x + y + z) + "<br>");
}

var args = [4, 5, 6];
//printSum(...args);