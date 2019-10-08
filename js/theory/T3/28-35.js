/********************
 *  Coded By Davoleo
 ********************/

/**
 * Arrays, a list of items linked to a single variable
 * Inits the array with the items already in it
 * Arrays can contain any kind of data
 * @type {string[]}
 */
let people = ["Davoleo", "ItHurtsLikeHell", "PierKnight", "EpicSquid", "Coded", "HellFirePVP"];

let emptyArray1 = [];
let emptyArray2 = new Array();  //Uncommon

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

//LENGTH: returns the number of elements of an array
document.write(people.length + "<br><br>");

//CONCAT: returns a new concatenated array from 2 different arrays
let concatArray = initials.concat(people);
document.write(concatArray[11] + "<br><br>");

//JOIN: takes all the items of an array and converts them into a string
let joinedArray = people.join(" - ");
document.write(joinedArray  + "<br><br>");

//POP: removes the last element from an array
let poppedArray = people.slice();
document.write("Array Lenght: " +  people.length + "<br>");
poppedArray.pop();
document.write("Array Lenght: " + poppedArray.length + "<br><br>");

//REVERSE: reverses the order of the item in the array
document.write(people.reverse() + "<br>");
document.write(people.reverse() + "<br><br>");

//PUSH: adds an item at the end of the array
let pushedArray = people.slice();
document.write(pushedArray + "<br>");
pushedArray.push("GianPiero");
document.write(pushedArray + "<br><br>");
//^ To restore the original array

//UNSHIFT: adds an item at the beginnin of the array
let shiftedArray = people.slice();
shiftedArray.unshift("Jesus");
document.write(shiftedArray + "<br>");
//SHIFT: removes an item from the beginning of the array
shiftedArray.shift();
document.write(shiftedArray + "<br><br>");

//SORT: sorts the elements of the array in alphabetical order
let sortedArray = people.slice();
document.write(sortedArray + "<br>");
sortedArray.sort();
document.write(sortedArray + "<br><br>");

//INDEXOF: returns the index of the first occurrence of the item you pass as argument : if it doesn't find any item it'll return -1
document.write(people + "<br>");
document.write(people.indexOf("Davoleo") + "<br>");    //0
document.write(people.indexOf("EpicSquid") + "<br>");  //3

document.write(people.indexOf("Mcjty") + "<br><br>");      //-1

//SLICE: copies a portion of an array - lower bound (inclusive) - upper bound (exclusive)
var stossoTeam = people.slice(0, 3);
document.write("Stosso Team: " + stossoTeam + "<br><br>");

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

//When the whole page is loaded
window.onload = () => ("JESUS likes you");

// Iterating over arrays ------------------------
for (var i = 0; i < people.length; i++) {
    document.write(people[i] + "<br/>");
}
document.write("<br/>");

people.forEach(value => {
    document.write(value + "<br/>");
});
document.write("<br/>");