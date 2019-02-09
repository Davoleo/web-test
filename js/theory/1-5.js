/********************
 *  Coded By Davoleo
 ********************/
/**
 * Statement: it ends with a ;
 * Multiple Statements are executed in the same order they are written
 * A statement is basically an instruction
 */
document.write("Hello, I'm Gianfranco!<br>");
document.write("And I really like eating rice.<br><br>");

//This is a single line comment, this comment extends for one line only, and it's introduced by //

/* this is a
   multiline
   comment

   it extends on multiple lines,
   it's introduced by /*
   and it's closed by /* but reversed (Example on line 21)
 */

/**
 * This is a multiline DOC comment, it can store links and variable types
 * it extends on multiple lines
 * it's surrounded by a nice frame
 * it's introduced by /**
 */

//---------------------------------------------------------------------------------
//Variables
/**
 * This is a variable, a kind of placeholder to store some kind of value
 *
 * - var is a keyword that introduces variables (localized to the closest function / can be called before declaration)
 * - let is a keywork that introduces variables (localized to the closest code block / cannot be called before declaration)
 * - x is the identifier, it's the name of the variable, and it's used as placeholder for the value of the variable (It's case sensitive)
 * - = is the assignment operator, it assigns what's on the right to what is on the left (in this case it assigns 40 to the variable x)
 *
 * @type {number}
 */
var x = 40;
document.write(" this is a number stored in a variable: " + x + "<br><br>");

/**
 * variables can store various type of data for instance number with decimal points or strings
 * @type {string}
 */
var sdlasti = "salmon";
var tuna = 3.9879877;

//These \ before " makes it so that javascript doesn't recognize " like the end of the string
var escapeCharacter = "John is coming and he's saying: \"I WANT SOME FOOD\"";
/**
 * escape characters
 *  \n
 *  \t
 *  \"
 *  \\
 */

//boolean type (can just be true or false)
var VF = true;
//no value, different from 0, empty variable
var ohNoes = null;

//You can concatenate strings together with numbers and other strings by using the + operator
var name = "Davoleo";
var age = 17;
document.write(name +  " is my nickname, I'm " + age + " years old");