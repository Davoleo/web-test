/********************
 *  Coded By Davoleo
 ********************/

//DIFFERENT KINDS OF VARIABLES

//let createpes a variable with a sco restricted to the nearest code block
let strictVar = 10;

//const creates a final variable (AKA Constant) that cannot change in time
const constant = "banana";

//let creates a GLOBAL variable also accessible out of the code block which it's declared in
var glovalVar = true;

//It's undefined but doesn't output an error
document.write("global var: " + test + "<br><br>");
//Outputs an error
//alert(test2);
if (true)
{
    var test = "EHEHEEHHEEH";
    let test2 = 12930;
}
//---------------------------------------------------------------------------------------------
//TEMPLATE LITERALS
//You can use this syntax to insert variables into strings
//the variable is enclosed into this structure ${varIdentifier}
//Note: backticks (`) are not an optional, template literals NEED to be enclosed into backticks
let name = "Davoleo";
let greetings = `Greetings ${name}!`;
document.write(greetings + "<br><br>");
//---------------------------------------------------------------------------------------------
//FOR ... IN ... loops
//This loop should be used to iterate over objects fields, NOT over iterable objects (like Arrays or Lists)

let obj = {a: 1, b: 2, c:3};
for (let prop in obj)
    document.write(prop);
document.write("<br>");

//FOR ... OF ... loops
//This loop should be used to iterate over iterable objects like arrays and lists

let list = ['h', 'j', 'f'];
for (let char of list)
    document.write(char);
document.write("<br><br>");

//---------------------------------------------------------------------------------------------
//NEW FUNCTIONS SYNTAX (Arrow Functions)

//old version
function addOld(x, y) {
    let sum = x + y;
    console.log(sum);
}

//const functionName = (param1, param2) => {function body}
//if the function has no params put an empty pair of brackets
//if the body of the function consists of one statement you can omit curly braces
//new version
const addNew = (x, y) => {
    let sum = x + y;
    console.log(sum);
};
const greet = x => "Welcome " + x;

list.forEach(el => console.log(el));


 circleAreaArrow = (r) => {
    return Math.PI * r * r;
};

console.log("Circle area is " + circleAreaArrow(7));

//---------------------------------------------------------------------------------------------
//DEAFAULT PARAMETERS
//You can assign default value to a function parameter
function addABC(a, b = 3, c = 111) {
    return a + b + c;
}

//--------------------------

/**
 * Example tree object
 * height is a PROPERTY (color too) - a field of the object that can be accessed this way: object.fieldName
 * grow() is a METHOD - a method is a function of an object that can be called this way: object.methodName()
 * @type {{grow(): void, color: string, height: number}}
 */
let tree = {
    height: 10,
    color: "green",
    grow() {
        this.height +=2;
    }
};

//Computed Properties Objects
let prop = "name";
let id = 1234;
let mobile = "08923";

let user = {
    [prop]: 'Jack',
    [`user_${id}`]: `${mobile}`
};

//--------------------------------------------------------------------
//Object.assign(): to assign the properties of an object to another one
let person = {
    name: "Jack",
    age: "18",
    sex: "male"
};
let student = {
    name: "Bob",
    age: "20",
    xp: "222"
};

//Object duplication (NON-DEEP)
let newStudentPerson = Object.assign({}, student, person);
console.log(newStudentPerson);

//duplicates person without references to the original object
let newPerson = Object.assign({}, person);
//let newPerson = person;

//Array Destructuring
let sampleArray = [1, 2, 3, 4];
let [one, two, three, four] = sampleArray;
document.write(one + " " + two + " " + three + " " + four + " <br>");

//Array Destructuring
let arr = {h: 100, s: true};
let {h, s} = arr;
document.write(h + " " + s + "<br><br>");

//Rest Parameters
//Takes an array of parameters || multiple parameters
function addAll(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++)
        sum += nums[i];
    return sum;
}

//Spread Operataor
function addThreeNums(a, b, c) {
    console.log(a + b + c);
    return a + b + c;
}

let nums = [3, 4, 5];
addThreeNums(...nums);
// Spreads the array into 3 vars

//-----------------------------------------
/**
 * A class allows you to create multiple objects with the same structure
 *
 * Example Rectangle class:
 */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(5,5);
const windowS = new Rectangle(3, 6);
console.log("the window area is: " + windowS.area);

/**
 * Example Point class with a static method
 */
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    logCoordinates() {
        console.log("X : " + this.x + " | Y : " + this.y)
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log("distance from p1 and p2 is: " + Point.distance(p1, p2));

//-----------------------------------------
//Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a noise")
    }
}

class Dog extends Animal{
    speak() {
        console.log(this.name + " barks")
    }
}

let dog = new Dog("Matpac");
dog.speak();


/**
 * ES6 Map
 * Used to store pairs of key and value
 * - Keys can be of any type (functions, objects, primitives)
 * - You can get the size of a Map
 * - You can directly iterate over a Map
 * - Better performance in case you need to dinamically insert and remove keys and values
 */
let map = new Map([['k1', 'v1'], ['k2','v2']]);
console.log(map.size); //2

/**
 * Methods:
 * set(key, value) - Adds a new pair
 * get(key) - gets the corresponding value to the given key
 * has(key) - true if the key exists
 * delete(key) - Removes the pair with a given key
 * clear() - Empties the map
 * keys() - returns an iterator of all the keys
 * values() - returns an iterator of all the values
 * entries() - returns an iterator of arrays [key, value]
 */
let map2 = new Map();

map2.set('k1', 'v1').set('k2','v2');

console.log(map2.get('k1')); //v1
console.log(map2.has('k2')); //true
for (let entry of map2.entries()) {
    console.log(entry[0] + ' : ' + entry[1])
}

/**
 * ES6 Set
 * @type {Set<number>}
 */
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set.size);

let set2 = new Set();
set2.add(5).add(9).add(59).add(9);
for (let v of set.values()) {
    console.log(v);
}


/**
 * ES6 Promises
 * Asynchronous work (?)
 */

new Promise(function (resolve, reject) {

    // if (success)
    //     resolve(result);
    // else
    //     reject(Error("failure"));
});

/**
 * Iterators & Generators (?)
 */
let iterableObj = {
    [Symbol.iterator] : function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};
console.log(iterableObj);

//Example Generator Function
//Functions with checkpoints, that can be controlled by the coder
function* sampleGenerator() {
    yield 'apples'; //means pause
    yield 'oranges';
    console.log('line after oranges...');
    yield 'corn';
}


let sample = sampleGenerator();

// .next() means: run the gen function until the next yield statement
// Returns an object with 2 internal properties:
// 1: Value: Contains the yield value
// 2: Done: true, if the function has finished running
console.log(sample.next()); // Contains 'apples' and 'false'
console.log(sample.next().value);   //Contains 'oranges' and 'false'
console.log(sample.next());         //Contains 'corn' and 'false'
console.log(sample.next());         //Contains 'undefined' and 'true'

console.log('---------------------');

function* getNextId() {
    let id = 0;
    while(id < 3)
        yield id++;
}

let createUser = getNextId();
console.log(createUser.next().value);

console.log('---------------------');


/**
 * ES6 Modules (Namespaces...?)
 */
//import * as math from "lib/math"
//console.log(`2p = + ${math.sum(math.pi, math.pi)}`);

/***
 * ES6 built-in methods
 */

//filter() :
[4, 5, 1, 8, 2, 0].filter(function (x) {
    return x > 3;
});

//find() :
[4, 5, 1, 8, 2, 0].find(x => x > 3);

[4, 5, 1, 8, 2, 0].findIndex(x => x > 3);

//repeat() : Repeats a string a certain amount of times
console.log("oof".repeat(3));


console.log("Davoleo".startsWith("Davo", 0)); //true
console.log("Davoleo".endsWith("Davo", 4)); //true
console.log("Davoleo".includes("vole")); //true
console.log("Davoleo".includes("avo", 1)); //true
console.log("Davoleo".includes("avo", 2)); //false