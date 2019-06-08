/********************
 *  Coded By Davoleo
 ********************/

//DIFFERENT KINDS OF VARIABLES

//let creates a variable with a scope restricted to the nearest code block
let strictVar = 10;

//const creates a final variable (AKA Constant) that cannot change in time
const constant = "banana";

//let creates a global variable also accessible out of the code block which it's declared in
var glovalVar = true;

//It's undefined but doesn't output an error
document.write("global var: " + test + "<br><br>");
//Outputs an error
//alert(test2);
if (true)
{
    var test = "EHEHEEHHEEH";
    let test2 = 12930;
}
//---------------------------------------------------------------------------------------------
//TEMPLATE LITERALS
//You can use this syntax to insert variables into strings
//the variable is enclosed into this structure ${varIdentifier}
//Note: backticks (`) are not an optional, template literals NEED to be enclosed into backticks
let name = "Davoleo";
let greetings = `Greetings ${name}!`;
document.write(greetings + "<br><br>");
//---------------------------------------------------------------------------------------------
//FOR ... IN ... loops
//This loop should be used to iterate over objects fields, NOT over iterable objects (like Arrays or Lists)

let obj = {a: 1, b: 2, c:3};
for (let prop in obj)
    document.write(prop);
document.write("<br>");

//FOR ... OF ... loops
//This loop should be used to iterate over iterable objects like arrays and lists

let list = ['h', 'j', 'f'];
for (let char of list)
    document.write(char);
document.write("<br><br>");

//---------------------------------------------------------------------------------------------
//NEW FUNCTIONS SYNTAX

//old version
function addOld(x, y) {
    let sum = x + y;
    console.log(sum);
}

//const functionName = (param1, param2) => {function body}
//if the function has no params put an empty pair of brackets
//if the body of the function consists of one statement you can omit curly braces
//new version
const addNew = (x, y) => {
    let sum = x + y;
    console.log(sum);
};
const greet = x => "Welcome " + x;

list.forEach(el => console.log(el));

//---------------------------------------------------------------------------------------------
//DEAFAULT PARAMETERS
//You can assign default value to a function parameter
function addABC(a, b = 3, c = 111) {
    return a + b + c;
}