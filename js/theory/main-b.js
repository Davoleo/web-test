/********************
 *  Coded By Davoleo
 ********************/

//Gets called by the event handler "onmouseover"
function onHover() {
    alert('lololol');
}

function onLoad() {
    alert("yes babe, your ma babe, babe, don't you babe?")
}

/**
 *  OOP: Object Oriented Programming
 *  Properties, methods
 *
 *  write() is a method
 *  document is an object
 *  lenght is a property of tuna
 */
let tuna = "Hey I'm a tuna fish!";
document.write("<br><br>tuna lenght is: " + tuna.length);

/**
 * Creating custom Objects
 *
 * 1: Constructor function (the blueprint for the object)
 * 2: Creating an instance of the object
 */
//OOP is usually located into the <head> of the HTML page
function Person(name, age) {
    this.name = name;
    this.age = age;

    //Assigns function to an object
    this.yearsLeft = yearsLeft;
}

let davoleo = new Person("Leonardo", 17);
let ithurtslikehell = new Person("Emanuele D'Angelo", 17);

let literalObject = {
    count: 2,
    wireless: true,
    age: 4,
    name: "Galaxy"
};

let emptyObject = {};

//things that do stuff <body>
document.write("<br>" + davoleo.name);
document.write("<br>" + davoleo.age);
document.write("<br>" + ithurtslikehell.name);
document.write("<br>" + ithurtslikehell.age);

/**
 * Creating custom Objects
 *
 * 1: Object initializer (faster method than the constructor function)
 */
pier = {name: "Pierluigi Altimari", age:17};

document.write("<br>" + pier.name);
document.write("<br>" + pier.age);

//Nested Objects and Arrays
//An Array of objects that could contain an array as a property
var posts = [
    {
        title: "Dogs are mediocre",
        author: "Davoleo",
        comments: ["Awesome Post", "Terrible Post"]
    },
    {
        title: "AI Will Conquer the world",
        author: "MrComputer101",
        comments: ["Yeah, me too", "Dude ur username is shit"]
    }
];

//Title - rating - haswatched;
var movies = [
    {
        title: "I, Robot",
        rating: "4",
        hasWatched: true
    },
    {
        title: "Glass",
        rating: "3",
        hasWatched: false
    },
    {
        title: "Zombieland",
        rating: "3",
        hasWatched: false
    },
    {
        title: "Maleficent: Mistress of Evil",
        rating: "2",
        hasWatched: false
    }
];

for (let i = 0; i < movies.length; i++) {
    if (movies[i].hasWatched)
        console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
    else
        console.log("You haven't watched " + movies[i].title + " - " + movies[i].rating + " stars");
}

/**
 * Adding methods to custom objects
 *
 * 1: Object initializer (faster method than the constructor function)
 */
//<head>
function yearsLeft() {
    return 65 - this.age;
}

function changeCase() {
    // TODO Fix this fucking function
    let line = document.getElementById("sampleLine");

    if (line.innerHTML.charAt(0) < 97)
        line.innerHTML.toLowerCase();
    else
        line.innerHTML.toUpperCase();
}

//<body>
document.write("<br>" + davoleo.yearsLeft());

document.write("<br><br>" + "--------------------------------------------------------------------------------------" + "<br><br>");

/**
 * Arrays, a list of items linked to a single variable
 * Inits the array with the items already in it
 * Arrays can contain any kind of data
 * @type {string[]}
 */
let people = ["Davoleo", "ItHurtsLikeHell", "PierKnight", "EpicSquid", "Coded", "HellFirePVP"];

let emptyArray1 = [];
let emptyArray2 = new Array();  //Uncommon

//Inits an empty array of a specific size
let initials = new Array(6);
initials[0] = 'D';
initials[1] = 'I';
initials[2] = 'P';
initials[3] = 'E';
initials[4] = 'C';
initials[5] = 'H';

//Inits an empty array of an undefined size
let ids = [];
ids[0] = 3;
ids[0] = NaN;
ids[0] = NaN;
ids[0] = 12;
ids[0] = 6;
ids[0] = 59;


//prints out the element of the arrays stored with index between []
document.write(people[0] + "<br><br>");

//LENGTH: returns the number of elements of an array
document.write(people.length + "<br><br>");

//CONCAT: returns a new concatenated array from 2 different arrays
let concatArray = initials.concat(people);
document.write(concatArray[11] + "<br><br>");

//JOIN: takes all the items of an array and converts them into a string
let joinedArray = people.join(" - ");
document.write(joinedArray  + "<br><br>");

//POP: removes the last element from an array
let poppedArray = people.slice();
document.write("Array Lenght: " +  people.length + "<br>");
poppedArray.pop();
document.write("Array Lenght: " + poppedArray.length + "<br><br>");

//REVERSE: reverses the order of the item in the array
document.write(people.reverse() + "<br>");
document.write(people.reverse() + "<br><br>");

//PUSH: adds an item at the end of the array
let pushedArray = people.slice();
document.write(pushedArray + "<br>");
pushedArray.push("GianPiero");
document.write(pushedArray + "<br><br>");
//^ To restore the original array

//UNSHIFT: adds an item at the beginnin of the array
let shiftedArray = people.slice();
shiftedArray.unshift("Jesus");
document.write(shiftedArray + "<br>");
//SHIFT: removes an item from the beginning of the array
shiftedArray.shift();
document.write(shiftedArray + "<br><br>");

//SORT: sorts the elements of the array in alphabetical order
let sortedArray = people.slice();
document.write(sortedArray + "<br>");
sortedArray.sort();
document.write(sortedArray + "<br><br>");

//INDEXOF: returns the index of the first occurrence of the item you pass as argument : if it doesn't find any item it'll return -1
document.write(people + "<br>");
document.write(people.indexOf("Davoleo") + "<br>");    //0
document.write(people.indexOf("EpicSquid") + "<br>");  //3

document.write(people.indexOf("Mcjty") + "<br><br>");      //-1

//SLICE: copies a portion of an array - lower bound (inclusive) - upper bound (exclusive)
var stossoTeam = people.slice(0, 3);
document.write("Stosso Team: " + stossoTeam + "<br><br>");

//Prompts --------------------------------------------------

let name = prompt("Enter your name: ", "");
document.write("Hello " + name + "!<br>");

let faveFoods = new Array(3);

for (i = 0; i < 3; i++)
{
    faveFoods[i] = prompt("Enter fave food (" + i + " of 3)", "");
}
document.write("Favourite foods: " + faveFoods + "<br><br>");

//Associative Arrays --------------------------------------
var associativeArray = [];
associativeArray["color"] = "green";
associativeArray["food"] = "pizza";
document.write( "Food = " + associativeArray["food"] + "<br><br>");

//When the whole page is loaded
window.onload = () => ("JESUS likes you");

// Iterating over arrays ------------------------
for (var i = 0; i < people.length; i++) {
    document.write(people[i] + "<br/>");
}
document.write("<br/>");

people.forEach(value => {
    document.write(value + "<br/>");
});
document.write("<br/>");