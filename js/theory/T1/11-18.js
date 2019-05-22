/********************
 *  Coded By Davoleo
 ********************/

/**
 * Global / Local Variables
 * The "girl" variable is a global variable: It can be used inside a function and outside a function (In fact it's printed out two times on the doc)
 * The "sandwich" variable is a local variable: It can be called just inside the same code block it was initialized in (In fact it's printed just one time on the doc)
 * @type {string}
 */
let girl = " Ryuko ";

function print() {
    let sandwich = "panino";
    document.write(girl + "<br>");
    document.write(sandwich + "<br>");
}

print();

document.write(girl + "<br>");
//document.write(sandwich + "<br>");
// this wouldn't work ^^^

//--------------------------------------------------------------------------------------------------------------------

/*
Math Operators
a + b : Returns the sum of a and b
a - b : Returns the subtraction of a and b
a * b : Returns the multiplication of a and b
a / b : Returns the division of a and b
a % b : Returns the remainder of the division a / b (Modulus operator)
a++   : Increments a by one
a--   : Decrements a by one

Assignment Operators
v = 9 : Assigns the value on the right to the variable (v) on the left
v += 24 : Adds the value on the right to the value of variable on the left and saves the new v value
v -= 24 : Subtracts the value on the right to the value of variable on the left and saves the new v value
v *= 24 : Multiplies the value on the right to the value of variable on the left and saves the new v value
v /= 24 : Divides the value on the right to the value of variable on the left and saves the new v value
 */

document.write("<br>");

/**
 * Relational Operators:
 * ==       if stuff on the left is equal to stuff on the right it's true
 * ===      more strict version of ==
 * !=       if stuff on the left is not equal to stuff on the right it's true
 * > (=>)        if stuff on the left is more (or equals) than stuff on the right it outputs true
 * < (=<)       if stuff on the left is less (or equals) than stuff on the right it outputs true
 *
 */
let apples = 24;
let hotdogs = 37;

/**
 * The if statement:
 * If the boolean condition written in "()" is true it runs the codeblock inside "{}"
 * If theere's just one statement inside the body you can omit {}
 * if the boolean condition written in "()" is false it doesn't run the codeblock inside {} AND, if present it runs the code in the "else{}" code block
 */
if (apples < hotdogs) {
    document.write("The condition is true<br>");
}
else {
    document.write("The condition is false<br>")
}

document.write("<br>");


document.write("Apples is: " + apples + "<br><input type=\"button\" value=\"Switch Odd Even\" onclick=\"switchEvenOdd()\">");

function switchEvenOdd() {
    if (apples % 2 === 0)
    {
        apples++;
        alert("The apples variable is even - value: " + apples);
    }
    else
    {
        apples--;
        alert("The apples variable is odd - value: " + apples);
    }
}

document.write("<br><br>");

/**
 * Nested if statements
 */
let firstName = "Jack";
let lastName = "Black";

if (firstName === "Jack")
{
    if (lastName === "Black")
    {
        document.write("Welcome " + firstName + " " + lastName + "!<br>")
    }
    else
    {
        document.write("Welcome unknown person")
    }
}

document.write("<br><br>");

/**
 * Complex Conditions
 * Logic Operators
 *
 * &&       if both conditions on the left and on the right are true it returns true
 * ||       if both conditions on the left and on the right are false it returns false
 */
let first = "Jack";
let last = "Black";

if (first === "Jack" && last === "Black")
    document.write("Complex Conditions");

document.write("<br><br>");
/**
 * Switch Statement
 * @type {string}
 */
var girll = "Natalie";

switch (girll) {

    case "Natalie":
        document.write("you must like garden state");
        break;
    case "Ashley":
        document.write("oo");
        break;
    case "Ryuko":
        document.write("best gurl");
        break;
    default:
        document.write("meh, unexpected gurl");
}