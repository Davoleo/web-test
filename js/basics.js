//////////////////////////////////
//      Coded by Davoleo        //
//////////////////////////////////
$(function () {
    $("#surname").blur(format_text_box)
});

function format_text_box() {
    var name = $("#name").val();
    var surname = $("#surname").val();
    
    if (isUpperCaseString(name))
    {
        $("#surname").val(surname.toUpperCase());
    }
    else if (isUpperCaseChar(name[0]))
    {
        //Strings in Javascript are read-only!
        //surname[0] = "Z"
        // ^^^ this would NOT work
        surname = capitalize(surname);
    }
    else
    {
        if (isLowerCaseString(name))
            surname = capitalize(surname);
    }
}

function capitalize(string) {
    var firstChar = string[0].toUpperCase();
    var remainingString = string.toString().substring(1).toLowerCase();
    return firstChar + remainingString;
}

function isLowerCaseString(string) {
    return string === string.toString().toLowerCase()
}

function isUpperCaseChar(char) {
    return String(char) === String(char).toUpperCase();
}

function isUpperCaseString(string) {
    return string === string.toString().toUpperCase();
}

function showDate() {
    document.getElementById('demo').innerHTML = Date();
}

function set_yellow_background() {
    $("#eta").css("background-color", "yellow");
}

var test = "😪";
console.log(test[0], test[1], test[0] + test[1] + "\n");

console.log(test.charCodeAt(0), test.charCodeAt(1));
console.log("\u{D83C}\u{DF77}");
console.log("ciao".charCodeAt(0), "ciao".charCodeAt(1));