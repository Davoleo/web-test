/********************
 *  Coded By Davoleo
 ********************/

let age = prompt("How old are you?");
const AGE = age;

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

if( AGE < 0)
    alert("Error! this is an impossible age!");
else if (AGE % Math.sqrt(AGE) === 0)
{
    alert("Perfect Square");
}
else if (AGE < 18)
{
    alert("You can't drive");
}
else if (AGE == 21)
{
    alert("Happy 21st Birthday");
}
else if (AGE % 2 !== 0)
{
    alert("Your age is odd");
}
else
{
    alert("You can drive");
}