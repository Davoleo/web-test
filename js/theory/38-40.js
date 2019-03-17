/********************
 *  Coded By Davoleo
 ********************/

/**
 * document.forms: The array that stores the various forms on the html page
 * We get the length of the form zero (which means we get the number of elements the first form on the page stores)
 * @type {number}
 */
let formElements  = document.forms[0].length;
document.write("Form Elements: " + formElements + "<br>");

/**
 * We get the second element from the elements array of the form that has the name attribute of 'secondForm'
 * we store the name attribute in the variable 'animal'
 *
 * You can use the name attribute of a form or a form element instead of the array and the index of the element
 */
let animal = document.secondForm.elements[1].name;
document.write(animal + "<br>");

function validate() {
    if (document.secondForm.checkbox.checked)
        alert("the checkbox is checked");
    else
        alert("the checkbox is not checked");
}