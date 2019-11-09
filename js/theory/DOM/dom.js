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