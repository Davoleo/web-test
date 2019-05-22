/********************
 *  Coded By Davoleo
 ********************/

let pos = 0;

let box = document.getElementById("box");

function move() {
    if (pos >= 300)
    {
        clearInterval(t)
    }
    else {
        pos++;
        box.style.left = pos + "px";
        box.style.top = pos + "px";
    }
}

let t = setInterval(move, 50);