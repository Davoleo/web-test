/********************
 *  Coded By Davoleo
 ********************/

function customForEach(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

var colors = ["green", "orange", "yellow", "red"];

customForEach(colors, alert);

customForEach(colors, function (value) {
    console.log("*************");
    console.log(value);
    console.log("*************");
});

//Custom Array Method definition
Array.prototype.customForEach = function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

colors.customForEach(function (value) {
    console.log("sadjhaskd    " + value + "   awdkjsadhajshd");
});