/********************
 *  Coded By Davoleo
 ********************/

//DOM (Document Object Model) It represents the structure of the HTML doc elements
//The document is an extremely big JS Object made of all the data that is stored in HTML
//a tag below you in hierarchy is called "child"
//a tag above you in hierarchy is called "parent"
//tags that are on the same level in hierarchy are called "siblings"

/*
 * element.childNodes: returns an array of all the child nodes for the element
 * element.firstChild: returns the first child node of the element
 * element.lastChild: returns the last child node of the element
 * element.hasChildNodes: returns wether the element has child nodes or not
 * element.nextSibling: returns the next node of the same level of element
 * element.previousSibling: returns the previous node of the same level of element
 * element.parentNode: returns the parent node of the element
 */


//the property "innerHTML" is used to access the content of an element (the things between the tags)
//document.body.innerHTML = "Some sample text";

//document.URL (returns the url of the page)
//document.links (returns an HTMLCollection object of  all the links on the page)
//document.body (returns the body's HTML)
//document.head (returns the head's HTML)

//DOM SELECTORS  ------------------------------------------------------------
//Addresses the element that has the given id
let elemFromId = document.getElementById("testHeader");

//Addresses all the elements assigned to the given class (Node List of html elements)
let elemFromClass = document.getElementsByClassName("Main");

//Addresses all the <p> (paragraph) elements (Node List of html elements)
let elemFromTag = document.getElementsByTagName("P");

//Uses CSS-styled selectors to define elements
//if there are multiple elements it returns the first matching one
//While querySelectorAll returns a Node List of all the matching html elements
let querySelectedItem = document.querySelector("h1");
let highlightedText = document.querySelector("#highlight");
highlightedText.style.backgroundColor = "#FFFF00";

var isBlue = false;
setInterval(function () {
    if (isBlue)
        querySelectedItem.style.color = "#000000";
    else
        querySelectedItem.style.color = "#3498db";
    isBlue = !isBlue;
}, 500);


function changeElements() {
    //This will show all the content of the body
    alert(elemFromClass[0].innerHTML);
    
    //Change elements' text content (does not include html tags)
    elemFromTag[0].textContent = "AYYY";
    elemFromId.textContent = "Hola!";

    //classList is not an actual Array
    //A fusion of classList.add and classList.remove
    //Add a class to an HTML element if it doesn't have it
    //if it has a class with that name it removes the class
    elemFromId.classList.toggle("SampleClass");

    var googleLink = document.querySelector("a");

    //Getter and Setter for HTML Attributes
    console.log(googleLink.getAttribute("href"));
    googleLink.setAttribute("href", "https://davoleo.github.io");
}

function createElements() {
    let div = document.getElementById("container");

    //Attach some node to another
    let paragraph = document.createElement("p");
    let node = document.createTextNode("Example text node generated automatically using javascript");
    paragraph.appendChild(node);
    div.appendChild(paragraph);

    //insertBefore(): Inserts the first argument's node before the second argument's node
    let buttonCreate = document.getElementById("buttonCreate");
    document.insertBefore(paragraph, buttonCreate)

}

function removeElements() {
    let child = document.getElementById("testHeader");
    //Removes testHeader (The child element of the first paragraph)
    child.parentNode.removeChild(child);
}

function replaceElements() {
    let testText = document.createTextNode("REPLACED TEXT");
    let child = document.getElementById("testHeader");

    child.parentNode.replaceChild(testText, child);
}

//DOM EVENTS
//element.addEventListener(type, functionToCall);
var goodbyeTitle = document.getElementById("goodbye");
goodbyeTitle.addEventListener("click", function () {
    goodbyeTitle.style.backgroundColor = "#578472"
});

document.querySelector("ul").addEventListener("click", function () {
    console.log("UL WAS FUCKiNG CLiCKED");
    document.body.classList.toggle("Pink")
});

// Score Keeper ---------------------------------
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var resetButton = document.querySelector("#reset-button");

var span1 = document.getElementById("score1");
var span2 = document.getElementById("score2");

var gameOver;
var limitBox = document.querySelector("input");
var limit = Number(limitBox.value);
document.querySelector("p>span").textContent = limit;

var score1 = 0;
var score2 = 0;

button1.addEventListener("click", function () {
    if (!gameOver) {
        score1++;
        if (score1 === limit) {
            gameOver = true;
            span1.classList.add("Winner");
        }
        span1.textContent = score1.toString();
    }
});

button2.addEventListener("click", function () {
    if (!gameOver) {
        score2++;
        if (score2 === limit) {
            gameOver = true;
            span2.classList.add("Winner");
        }
        span2.textContent = score2.toString();
    }
});

resetButton.addEventListener("click", reset);

function reset() {
    score1 = 0;
    score2 = 0;
    span1.textContent = "0";
    span2.textContent = "0";
    span1.classList.remove("Winner");
    span2.classList.remove("Winner");
    gameOver = false;
}

limitBox.addEventListener("change", function () {
    document.querySelector("p>span").textContent = this.value;
    limit = Number(this.value);
    reset();
});