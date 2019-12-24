/********************
 *  Coded By Davoleo
 ********************/

//Select DOM elements with jQuery
//$() allows you to select elements in the same way document.querySelector would
//.css("property", "value") allows you to manipulate the style of an element

$("h1").css("color", "gold");

var style = {
    color: "#009922",
    backgroundColor: "#125df1",
    border: "#adfc12 2px solid"
};

$("#adorable").css(style);

//You can also use css to an array of elements
$("li").css("color", "aqua");

$("a").css("font-size", "40px");

$("li").css({
   fontSize: "5rem",
    border: "3px dashed purple",
    backgroundColor: "rgba(89, 45, 20, 0.5)"
});

$("img").css("width", "200px");

//.text()
//Returns the text content inside of an element/array of elements
$("ul").text();
//Changes the text to the parametere
$("li:first-of-type").text("NEW TEXT!!!!!!!!");

//.html()
//Returns the html content selected by the $
$("ul").html();
//Changes the html of the selected element with the parameter
$("h1").html(" <h1>jQUERY DEMO LUL</h1>");

//.attr()
//Returns an attribute of the content selected by $
$("img").attr("src");
//Changes the attribute of an element selected with $
$("a").attr("href", "https://davoleo.github.io");

//.val() - returns the value of the input
$("input").val();
// sets the value to an input
$("input").val("DEETH");

//They work exactly like vanilla JS classList methods
$("h1").addClass("Correct");
$("h1").removeClass("Correct");
$("li").last().addClass("Done");
$("a").toggleClass("Wrong");
