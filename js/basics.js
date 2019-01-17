
$(function () {
    $("#text_box").blur(force_maiusc());
});

function force_maiusc() {
    var content = $("#text_box").val();
    $("#text_box").val(content.toUpperCase());
}

function set_yellow_background() {
    $("#eta").css("background-color", "yellow")
}

var test = "😪";
console.log(test[0], test[1], test[0] + test[1] + "\n");

console.log(test.charCodeAt(0), test.charCodeAt(1));
console.log("\u{D83C}\u{DF77}");
console.log("ciao".charCodeAt(0), "ciao".charCodeAt(1));