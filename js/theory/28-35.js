/********************
 *  Coded By Davoleo
 ********************/

/**
 * Arrays, a list of items linked to a single variable
 * Inits the array with the items already in it
 * @type {string[]}
 */
let people = ["Davoleo", "ItHurtsLikeHell", "PierKnight", "EpicSquid", "Coded", "HellFirePVP"];

//Inits an empty array of a specific size
let initials = new Array(6);
initials[0] = 'D';
initials[1] = 'I';
initials[2] = 'P';
initials[3] = 'E';
initials[4] = 'C';
initials[5] = 'H';

//Inits an empty array of an undefined size
let ids = [];
ids[0] = 3;
ids[0] = NaN;
ids[0] = NaN;
ids[0] = 12;
ids[0] = 6;
ids[0] = 59;


//prints out the element of the arrays stored with index between []
document.write(people[0] + "<br><br>");

//length: returns the number of elements of an array
document.write(people.length + "<br><br>");

//concat: returns a new concatenated array from 2 different arrays
let concatArray = initials.concat(people);
document.write(concatArray[11] + "<br><br>");

//join: takes all the items of an array and converts them into a string
let joinedArray = people.join(" - ");
document.write(joinedArray  + "<br><br>");

//pop: removes the last element from an array
let poppedArray = people;
document.write("Array Lenght: " +  people.length + "<br>");
poppedArray.pop();
document.write("Array Lenght: " + poppedArray.length + "<br><br>");

//reverse: reverses the order of the item in the array
document.write(people.reverse() + "<br>");
document.write(people.reverse() + "<br><br>");

//push: adds an item at the end of the array
let pushedArray = people;
document.write(pushedArray + "<br>");
pushedArray.push("GianPiero");
document.write(pushedArray + "<br><br>");
//^ To restore the original array

//sort: sorts the elements of the array in alphabetical order
let sortedArray = people;
document.write(sortedArray + "<br>");
sortedArray.sort();
document.write(sortedArray + "<br><br>");

//Prompts --------------------------------------------------

let name = prompt("Enter your name: ", "");
document.write("Hello " + name + "!<br>");

let faveFoods = new Array(3);

for (i = 0; i < 3; i++)
{
    faveFoods[i] = prompt("Enter fave food (" + i + " of 3)", "");
}
document.write("Favourite foods: " + faveFoods + "<br><br>");

//Associative Arrays --------------------------------------
var associativeArray = [];
associativeArray["color"] = "green";
associativeArray["food"] = "pizza";
document.write( "Food = " + associativeArray["food"] + "<br><br>");
