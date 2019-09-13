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


//Random Practice

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

console.log("-----------------------");

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("-----------------------");

function factorial(num) {
    if (num > 0)
        return  num * factorial(num - 1);
    else
        return 1;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(0));
console.log(factorial(10));

console.log("-----------------------");

function kebabToSnake(kebabString) {
    while (kebabString.indexOf("-") > -1)
    {
        kebabString =  kebabString.replace("-", "_");
    }
    return kebabString;
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("bear-is-go-fast"));
console.log(kebabToSnake("feelblu"));