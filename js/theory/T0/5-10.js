/********************
 *  Coded By Davoleo
 ********************/

/**
 * Functions are introduced by the keyword 'function'
 * Followed by the identifier of the function
 * Followed by the parameters' parenthesis
 * Followed by the curly brackets (AKA body AKA declaration of the function)
 * Inside the body is the code that gets run once the function is called
 *
 * Calling a function: exampleFunction();
 */
function exampleFunction()
{
    //The alert function makes a popup come up on the page when called
    //It takes one argument as parameter (The message of the popup)
    alert("Ouch!!!");
}

function exampleFunction2(x) {
    alert("I love " + x);
}

exampleFunction2("bacon");
exampleFunction2("arte");
exampleFunction2("JAVASCRIPT! jk I hate it");

/**
 * Multi-Parameter Function
 * @param one (First Parameter)
 * @param two (Second Parameter)
 */
function apples(one, two) {
    document.write("<br>" + one + " is better than " + two + "<br>");
}

apples("Davoleo", "Matteo");

/**
 * This function returns a result by using the return statement
 * @param a (Is the first number in the sum)
 * @param b (Is the second number in the sum)
 * @returns {*} (Is the value returned, AKA the sum, AKA a + b)
 */
function sum(a, b)
{
    return a + b;
}

document.write("the meaning of life is: " + sum(12, 30) + "<br>");

/**
 * Functions that call other functions
 */
function first() {
    document.write("I am first brah<br>");
}
function second() {
    document.write("Me not<br>");
}

function callFunctions() {
    first();
    second();
}

callFunctions();

//Recursive call Example (Infinite loop)
function lol0() {
    document.write("0");
    lol1();
}

function lol1() {
    document.write(" 1 ");
    lol0();
}

lol0();

