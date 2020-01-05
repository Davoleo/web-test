/********************
 *  Coded By Davoleo
 ********************/

//Add a listener on all the LIs inside the UL so that every new LI gets his event handler
$("ul").on("click", "li", function () {
    $(this).toggleClass("Done");
});

$('ul').on("click", "li > span", function (event) {
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });
    //Stops event propagation to the parent elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        let todo = $(this).val();
        if (todo !== "" && todo !== undefined) {
            $("ul").append("<li><span><i class='material-icons\'>remove</i></span> " + todo + "</li>");
            $(this).val("");
        }
    }
});

$("h1 .material-icons").click(function () {
    $("input[type='text']").fadeToggle();
});