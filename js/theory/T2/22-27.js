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
        console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars")
    else
        console.log("You haven't watched " + movies[i].title + " - " + movies[i].rating + " stars")
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