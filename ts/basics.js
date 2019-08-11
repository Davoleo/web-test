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
//Constants declaration
var PI = 3.14159;
//# sourceMappingURL=basics.js.map