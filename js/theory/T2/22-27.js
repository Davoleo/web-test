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