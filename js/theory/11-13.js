/********************
 *  Coded By Davoleo
 ********************/

/**
 * Global / Local Variables
 * The "girl" variable is a global variable: It can be used inside a function and outside a function (In fact it's printed out two times on the doc)
 * The "sandwich" variable is a local variable: It can be called just inside the same code block it was initialized in (In fact it's printed just one time on the doc)
 * @type {string}
 */
var girl = " Ryuko ";

function print() {
    var sandwich = "panino";
    document.write(girl + "<br>");
    document.write(sandwich + "<br>");
}

print();

document.write(girl + "<br>");
document.write(sandwich + "<br>");

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