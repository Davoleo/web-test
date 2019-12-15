/********************
 *  Coded By Davoleo
 ********************/

document.write("<br><br>");

//The Math Class

//Mathematical constants
document.write(Math.PI + "<br>");
document.write(Math.E + "<br><br>");

//Mathematical methods
let n = prompt("Enter a number", "");
document.write("The Square Root of " + n + " is: " + Math.sqrt(n) + "<br><br>");

//------------------------------------------

//updates the time in the textbox on the HTML page
function printTime() {
    let now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let seconds = now.getSeconds();
    document.getElementById("date").setAttribute("value", hours + ":" + mins + ":" + seconds)
}

//Calls the printTime function every 1000 milliseconds
setInterval("printTime()", 1000);

document.write("<br><br>" + "--------------------------------------------------------------------------------------" + "<br><br>");


/**
 * document.forms: The array that stores the various forms on the html page
 * We get the length of the form zero (which means we get the number of elements the first form on the page stores)
 * @type {number}
 */
let formElements  = document.forms[0].length;
document.write("Form Elements: " + formElements + "<br>");

/**
 * We get the second element from the elements array of the form that has the name attribute of 'secondForm'
 * we store the name attribute in the variable 'animal'
 *
 * You can use the name attribute of a form or a form element instead of the array and the index of the element
 */
let animal = document.secondForm.elements[1].name;
document.write(animal + "<br>");

function validate() {
    if (document.secondForm.checkbox.checked)
        alert("the checkbox is checked");
    else
        alert("the checkbox is not checked");
}