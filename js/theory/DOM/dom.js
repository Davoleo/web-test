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

//The style object can be used to set simple things (will set style attribute inline)
//Also can't be used as a getter unless you want to get in-line styles
var isBlue = false;
setInterval(function () {
    if (isBlue)
        querySelectedItem.style.color = "#000000";
    else
        querySelectedItem.style.color = "#3498db";
    isBlue = !isBlue;
}, 500);

//This Method allows to retrieve the Computed Style declaration for a specific element, 
//which means JS will be able to get all the styles even the ones applied externally
window.getComputedStyle(highlightedText);

//Traversing the DOM Tree
//Get the parent of the element
querySelectedItem.parentElement;

//The number of children of a given element
highlightedText.childElementCount;
//an HTML Collection of children elements
highlightedText.children;

//and previous / Returns the html element adjacent next or previous to this element
highlightedText.nextElementSibling;

//Return "Text Nodes" which are weird text stuff the browser uses to organize whitespace (same thing for childNodes)
highlightedText.nextSibling;

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
    //Using getAttribute and setAttribute will work with the exact content of attributes in HTML
    //While using the javascript property will pass through the DOM objects meaning they could have different results
    console.log(googleLink.getAttribute("href"));
    googleLink.setAttribute("href", "https://davoleo.github.io");
    //googleLink.href = "https://davoleo.net"
}

function createElements() {
    let div = document.getElementById("container");

    //Steps
    //Create the element and store it
    let paragraph = document.createElement("p");

    //To add inner text content you can also used innerText/TextContent and all those properties instead of creating Text nodes
    //Fill it with attributes and content / information
    let node = document.createTextNode("Example text node generated automatically using javascript");
    //Attach the newly created text node to the paragraph
    paragraph.appendChild(node);

    //append() and prepend() are just like appendChild and insertBefore but they are more flexible to use with more than 1 elements and with text
    //They don't work in IE though

    //You can also use insertAdjacentElement (see MDN)

    //Append the paragraf to the div on the page
    div.appendChild(paragraph);

    //Using .after() inserts nodes after another element (no IE)
    //Using .before() inserts nodes before another element (no IE)

    //insertBefore(): Inserts the first argument's node before the second argument's node
    let buttonCreate = document.getElementById("buttonCreate");
    document.insertBefore(paragraph, buttonCreate)

}

function removeElements() {
    let child = document.getElementById("testHeader");
    //Removes testHeader (The child element of the first paragraph)
    //Yep, it needs to be called on the parent ._.
    child.parentNode.removeChild(child);

    //.remove() removes the same node the method is called on (no IE)
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
const resetButton = document.querySelector("#reset-button");
let gameOver;
const limitBox = document.querySelector("input");
const limitSpan = document.querySelector("p>span");
let limit = Number(limitBox.value);
limitSpan.textContent = limit;


let players = [
    {
        button: document.getElementById("button1"),
        scoreSpan: document.getElementById("score1"),
        score: 0
    },
    {
        button: document.getElementById("button2"),
        scoreSpan: document.getElementById("score2"),
        score: 0
    }
]

players.forEach((player, index) => player.button.addEventListener("click", () => increaseScore(index)));

function increaseScore(playerIndex) {
    let player = players[playerIndex];
    player.score++;
    player.scoreSpan.textContent = player.score.toString();
    checkGameOver();
}

function checkGameOver() {
    
    if (players[0].score === limit) {
        players[0].scoreSpan.classList.add("Winner");
        players[1].scoreSpan.classList.add("Loser");
        gameOver = true;
    }
    else if (players[1].score === limit) {
        players[1].scoreSpan.classList.add("Winner");
        players[0].scoreSpan.classList.add("Loser");
        gameOver = true;
    }

    if (gameOver) {
        players[0].button.disabled = true;
        players[1].button.disabled = true;
    }
}


resetButton.addEventListener("click", reset);

function reset() {
    players.forEach(player => {
        player.score = 0;
        player.scoreSpan.textContent = "0";
        player.scoreSpan.classList.value = "";
        player.button.disabled = false;
    });
    gameOver = false;
}

//the 'this' keyword in functions passed to the addEventListener method refers to the object where the event is handled
limitBox.addEventListener("change", function () {
    document.querySelector("p>span").textContent = this.value;
    limit = Number(this.value);
    reset();
});