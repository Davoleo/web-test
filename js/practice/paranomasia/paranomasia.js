/********************
 *  Coded By Davoleo
 ********************/

var circles = [];

function onKeyDown(event) {
    var max = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random() * max;

    var circle = new Path.Circle(randomPoint, 500);
    circle.fillColor = "red";
    circles.push(circle);
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.95);
    }
}