
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
document.write("<br>");

//Arrays

