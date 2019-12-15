/********************
 *  Coded By Davoleo
 ********************/


/**
 * Statement: it ends with a ;
 * Multiple Statements are executed in the same order they are written
 * A statement is basically an instruction
 */
document.write("Hello, I'm Gianfranco!<br>");
document.write("And I really like eating rice.<br><br>");

//This is a single line comment, this comment extends for one line only, and it's introduced by //

/* this is a
   multiline
   comment

   it extends on multiple lines,
   it's introduced by /*
   and it's closed by /* but reversed (Example on line 21)
 */

/**
 * This is a multiline DOC comment, it can store links and variable types
 * it extends on multiple lines
 * it's surrounded by a nice frame
 * it's introduced by /**
 */

//---------------------------------------------------------------------------------
//Variables
/**
 * This is a variable, a kind of placeholder to store some kind of value
 *
 * - var is a keyword that introduces variables (localized to the closest function / can be called before declaration)
 * - let is a keywork that introduces variables (localized to the closest code block / cannot be called before declaration)
 * - xn is the identifier, it's the name of the variable, and it's used as placeholder for the value of the variable (It's case sensitive)
 * - = is the assignment operator, it assigns what's on the right to what is on the left (in this case it assigns 40 to the variable xn)
 *
 * @type {number}
 */
var xn = 40;
document.write(" this is a number stored in a variable: " + xn + "<br><br>");

/**
 * variables can store various type of data for instance number with decimal points or strings
 * @type {string}
 */
var sdlasti = "salmon";
var tuna = 3.9879877;

//These \ before " makes it so that javascript doesn't recognize " like the end of the string
var escapeCharacter = "John is coming and he's saying: \"I WANT SOME FOOD\"";
/**
 * escape characters
 *  \n
 *  \t
 *  \"
 *  \\
 */

//boolean type (can just be true or false)
var VF = true;
//no value, different from 0, empty variable
var ohNoes = null;

//You can concatenate strings together with numbers and other strings by using the + operator
var name = "Davoleo";
var age = 17;
document.write(name +  " is my nickname, I'm " + age + " years old");


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
function compareApples(one, two) {
    document.write("<br>" + one + " is better than " + two + "<br>");
}

compareApples("Davoleo", "Matteo");

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
function firstFunction() {
    document.write("I am first brah<br>");
}
function secondFunction() {
    document.write("Me not<br>");
}

function callFunctions() {
    firstFunction();
    secondFunction();
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


document.write("<br><br>" + "--------------------------------------------------------------------------------------" + "<br><br>");


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


document.write("<br><br> for loop");
//Loops
/**
 * The for Loop
 * keyword: for
 * statements: initialization; condition; increase_counter
 * body: the expression written in the body is going to be run the number of times stated in the statements inside ()
 */
for (let i = 0; i < 10; i++)
{
    document.write("<br>I hate Javascript. counter: " + i)
}

//-----------------------------------------------------------------------------
document.write("<br><br>while loop<br>");
let x = 1;

/**
 * The while loop
 * keyword: while
 * statement: condition
 * body: the expression written in the body is going to be run till the condition in () is false
 * the increment is done separately
 */
while (x < 10)
{
    document.write(x + "how do you like them apples? <br>");
    x++;
}

//-----------------------------------------------------------------------------
document.write("<br><br>do-while loop<br>");
let y = 5;

/**
 * The do-while loop
 * keywords: do & while
 * upside down while loop
 * first executes then checks conditions
 */
do {
    document.write(y + " alo! <br>");
    y++;
}while (y <=20);

