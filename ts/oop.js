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
//# sourceMappingURL=oop.js.map