/********************
 *  Coded By Davoleo
 ********************/

// click(callback function)
$("h1").click(function () {
    alert("h1 clicked");
});

$("button").click(function () {
    alert("button clicked");
    // 'this' is enclosed in the classic jQuery Selector because the method .css() needs to be applied on a jquery object not on a vanilla JS Object
    $(this).css("backgroundColor", "#e3b750");
    console.log("Button Clicked: " + this.textContent);
});

// keypress(callback function)
$("input").keypress(function (event) {
    //If the keycode pressed is equals to 13
    if (event.which === 13)
        alert("You pressed Enter");
});

// on(event, callback function)
// .on() applies the event listeners to all the element on the page AND ALL THE FUTURE ELEMENTS UNDER THE SAME SELECTOR
$('h1').on("click", function () {
    $(this).css("color", "#e35755");
});

$('input').on("keypress", function () {
    console.log("KeyPressed!");
});

$('button').on("mouseenter", function () {
    console.log("MOUSE ENTER!");
    $(this).css("font-weight", "bold");
});

$(`button`).on("mouseleave", function () {
    $(this).css("font-weight", "normal");
});


// -----------------------------------------------
// jQuery Effects
$("#start-fade").on("click", function () {

    //fadeOut/fadeIn/fadeToggle(milliseconds, callback function) - hides the selected elements from the page, the callback function is called when the fade is completed
    $('div').fadeToggle(1000, function () {
        console.log("FadeOut Complete!");
        //Removes the element from the DOM
        //$(this.remove());
    });

});

$("#start-slide").on("click", function () {

    //SlideDown/SlideToggle/SlideUp(milliseconds, callback function) - hides the selected elements from the page, the callback function is called when the slide is completed
    $('div').slideToggle(1000);
});