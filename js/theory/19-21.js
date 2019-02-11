/********************
 *  Coded By Davoleo
 ********************/

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