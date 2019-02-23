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
document.write(people.length + "<br>");

//concat: returns a new concatenated array from 2 different arrays
let concatArray = initials.concat(people);
document.write(concatArray[11] + "<br>");
