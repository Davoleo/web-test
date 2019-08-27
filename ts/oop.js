var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var instantiate = WebAssembly.instantiate;
document.write("<br>");
// Classes
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.count++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is  owned by " + this.owner + "<br>");
    };
    Animal.animalsCount = function () {
        return Animal.count;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: true,
        configurable: true
    });
    Animal.count = 0;
    return Animal;
}());
var spot = new Animal("Spot", "Henry");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's Weight is " + spot.weight + "<br>");
document.write("# of Animals : " + Animal.count + "<br>");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Cat.count++;
        return _this;
    }
    return Cat;
}(Animal));
var botolo = new Cat("Botolo", "Jack");
document.write("# of Animals : " + Animal.animalsCount() + "<br>");
document.write("Is a Cat an Animal : " + (botolo instanceof Animal) + "<br>");
document.write("Does Botolo have a name : " + ('name' in botolo) + "<br>");
document.write("<br>");
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("The car drives with " + this.wheels + " wheels <br>");
    };
    return Car;
}());
var Bycicle = /** @class */ (function () {
    function Bycicle(wheels) {
        this.wheels = wheels;
    }
    Bycicle.prototype.drive = function () {
        document.write("The bycicle drives with " + this.wheels + " wheels <br>");
    };
    return Bycicle;
}());
var car = new Car(4);
var bike = new Bycicle(2);
car.drive();
bike.drive();
document.write("<br>");
//Generic Functions ------
function getType(val) {
    return typeof (val);
}
var aString = "A String";
var aNum = 10;
document.write(getType(aString) + "<br>");
document.write(getType(aNum) + "<br>");
function getWheels(vehicle) {
    return vehicle.drive();
}
getWheels(car);
getWheels(bike);
document.write("<br>");
//Generic Classes ------
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// --- Numbers ---
var num = new GenericNumber();
num.add = function (x, y) { return x + y; };
document.write("5 + 4 = " + num.add(5, 4) + "<br>");
// --- Strings ---
var string = new GenericNumber();
string.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write("5 + 6 = " + string.add("5", "6") + "<br>");
//  --- Destructuring ---
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write("Normal Order: " + x + y + z + "<br>");
//Flipping an array :thonk:
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write("Reverse: " + x + y + z + "<br>");
//Template Strings
var multilineString = "I'm a beautiful\nmultiline string that is very very \nvery crazy tasty and long";
document.write(multilineString + "<br>");
document.write("<b>" + multilineString + "</b>"); //Epic Interpolation :o
//The Spread Operator
function printSum(x, y, z) {
    document.write("Sum : " + (x + y + z) + "<br>");
}
var args = [4, 5, 6];
// @ts-ignore
printSum.apply(void 0, args);
//# sourceMappingURL=oop.js.map