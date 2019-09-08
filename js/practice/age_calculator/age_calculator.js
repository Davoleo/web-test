/********************
 *  Coded By Davoleo
 ********************/

let age = prompt("How old are you?");

let days = 0;
let hours = 0;

while (age > 0)
{
    if (age % 4 == 0)
    {
        days += 366;
        hours += 366 * 24;
    }
    else
    {
        days += 365;
        hours += 365 * 24;
    }
    age--;
}

alert("You lived about " + days + " days");
alert("You lived about " + hours + " hours");