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