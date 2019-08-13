
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

