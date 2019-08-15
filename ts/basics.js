var myName = "Davoleo";
var myAge = 17;
var sampleBoolean = true;
//Flexible data type
var anything = "cat";
anything = 2;
//A variable that is not assigned to anything is by default "undefined"
//THAT IS different from assigning a null value to a variable
document.getElementById("TSStuff").innerHTML = "My name is " + myName;
document.write("myName is a " + typeof (myName) + "<br>");
document.write("myAge is a " + typeof (myAge) + "<br>");
document.write("sampleBoolean is a " + typeof (sampleBoolean) + "<br>");
//Converting numbers to strings and strings to numbers
var stringToNum = parseInt("5");
var numToString = 5;
document.write("numToString is a " + typeof (numToString.toString()));
document.write("<br><br>");
//Constants declaration
var PI = 3.14159;
var mhaS1 = {
    title: "My Hero Academia",
    score: 6.0,
    releaseYear: 2016
};
document.write(mhaS1.title + " aired in " + mhaS1.releaseYear);
document.write("<br><br>");
//Arrays
var OSs = ["Windows", "Mac OSX", "Linux"];
OSs.push("Android");
document.write(OSs.toString() + "<br><br>");
var animes = [];
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
var randNumber = 1;
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
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
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
    document.write(val + "<br>");
}
document.write("<br>");
//Prints out the values of the array
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br>");
}
document.write("<br>");
//----------------------------------
//Functions
var getSum = function (num1, num2) {
    return num1 + num2;
};
var sum1 = getSum(5, 8);
document.write("5 + 8 = " + sum1 + "<br>");
//Default values in function declaration - and optional parameters (represented with '?')
var getDifference = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 != "undefined")
        return num1 - num2 - num3;
    return num1 - num2;
};
document.write("5 - 2 = " + getDifference(5) + "<br>");
document.write("5 - 2 - 3 = " + getDifference(5, 2, 3) + "<br>");
//Void functions | REST parameters (AKA varargs)
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0); // b default value is 0
    document.write("Sum: " + sum + "<br>");
};
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
//Arrow Functions
var incrementByOne = function (x) { return x + 1; };
document.write("++1 = " + incrementByOne(1) + "<br>");
//# sourceMappingURL=basics.js.map