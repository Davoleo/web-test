
var myName: string = "Davoleo";
var myAge: number = 17;
var sampleBoolean: boolean = true;

//Flexible data type

var anything: any = "cat";
anything = 2;

//A variable that is not assigned to anything is by default "undefined"
//THAT IS different from assigning a null value to a variable
document.getElementById("TSStuff").innerHTML = "My name is " + myName;

document.write("myName is a " + typeof(myName) + "<br>");
document.write("myAge is a " + typeof(myAge) + "<br>");
document.write("sampleBoolean is a " + typeof(sampleBoolean) + "<br>");

//Converting numbers to strings and strings to numbers
var stringToNum: number = parseInt("5");
var numToString: number = 5;
document.write("numToString is a " + typeof(numToString.toString()));
document.write("<br><br>");

//Constants declaration
const PI = 3.14159;

//Creating Complex Data types (Interfaces)
interface Anime {
    title: String;
    score: Number;
    releaseYear: Number;
}

var mhaS1: Anime = {
    title: "My Hero Academia",
    score: 6.0,
    releaseYear: 2016
};

document.write(mhaS1.title + " aired in " + mhaS1.releaseYear);
document.write("<br><br>");

//Arrays
var OSs: string[] = ["Windows", "Mac OSX", "Linux"];
OSs.push("Android");
document.write(OSs.toString() + "<br><br>");

var animes: Anime[] = [];
animes.push({
    title: "My Hero Academia",
    score: 6.0,
    releaseYear: 2016
});
animes.push({
    title: "Food Wars! The Third Plate",
    score: 7.5,
    releaseYear: 2017
});

document.write(animes[1].title + " aired in " + animes[1].releaseYear);

//Math
document.write("5 + 4 = " + (5 + 4) + "<br>");
document.write("5 - 4 = " + (5 - 4) + "<br>");
document.write("5 * 4 = " + (5 * 4) + "<br>");
document.write("5 + 4 = " + (5 + 4) + "<br>");
document.write("5 % 4 = " + (5 % 4) + "<br>");

var randNumber: number = 1;

document.write("randNumber++ = " + randNumber++ + "<br>");
document.write("++randNumber = " + ++randNumber + "<br>");
document.write("randNumber-- = " + randNumber-- + "<br>");
document.write("--randNumber = " + --randNumber + "<br>");
document.write("<br>");
/*
* Conditional Operators:
* - If, Switch and Ternary work identically to JS
* - Let  -> Exactly like ES6 restricts the variable access to "block-scope"
*/
let sampLet = 123;
if (true) {
    let sampLet = 456;
}

document.write("sampLet: " + sampLet + "<br>");
document.write("<br>");
/*
* Looping:
* for and while work identically to JS
*
*/

var randArray = [5, 6, 7, 8];

//Prints out the indexes of the array
for (var val in randArray) {
    document.write(val + "<br>")
}

document.write("<br>");

//Prints out the values of the array
var strArray = randArray.map(String);
for (var val of strArray) {
    document.write(val + "<br>")
}
document.write("<br>");
//----------------------------------
//Functions
var getSum = function (num1: number, num2: number): number {
    return num1 + num2;
};

var sum1: number = getSum(5, 8);
document.write("5 + 8 = " + sum1 + "<br>");

//Default values in function declaration - and optional parameters (represented with '?')
var getDifference = function (num1: number, num2 = 2, num3?: number): number {
    if (typeof num3 != "undefined")
        return num1 - num2 - num3;
    return num1 - num2;
};

document.write("5 - 2 = " + getDifference(5) + "<br>");
document.write("5 - 2 - 3 = " + getDifference(5, 2, 3) + "<br>");

//Void functions | REST parameters (AKA varargs)
var sumAll = function (...nums: number[]): void {
    var sum = nums.reduce((a, b) => a + b, 0); // b default value is 0
    document.write("Sum: " + sum + "<br>");
};

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

//Arrow Functions
var incrementByOne = (x) => x + 1;
document.write("++1 = " + incrementByOne(1) + "<br>");
