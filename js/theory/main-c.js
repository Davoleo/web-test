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

//Will run one time after 3000 milliseconds
setTimeout(() => {
    document.write("Delayed Thiing!<br>");
}, 3000);

//Calls the printTime function every 1000 milliseconds (gives an id corresponding to the interval)
const intervalId = setInterval(printTime, 1000);
//Stops the interval timer that was previously started
//clearInterval(intervalId);  

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

/**
 * Functions in functions
 * The inner function has access to the outer scope function local variables
 * you always need to call inner functions to be executed anyways
 */
function outerFunc() {
    const test = ["con", "fet", "ti"];
    function innerFunc() {
        document.write(test.join("") + " are really poggers!<br>")
    }
    innerFunc();
}

outerFunc();

/**
 * Function that calls a function twice
 * @param fun the function to be executed
 */
function higherOrderFuncExample(fun) {
    fun();
    fun();
}
function rollDice() {
    const roll = Math.floor((Math.random() * 6) + 1);
    document.write("Roll is: " + roll + "<br>")
}
higherOrderFuncExample(rollDice);

/**
 * Function that returns a function to test if a number is between min and max
 * @returns {function(number)} that tests wether the number is between min and max
 */
function makeBetweenFunc(min, max) {
    return function (num) {
        return num > min && num <= max;
    }
}
makeBetweenFunc(50, 100)(40);

console.log("This is: " + this)

//Catch Errors from any line of could that could cause the script to crash
//Protects the program and gives the user a reasonable error message
try {
    nonExistingThing.toUpperCase();
}
catch (e) {
    document.write("I caught an error :o<br>")
    //console.log(e.name);
}