/********************
 *  Coded By Davoleo
 ********************/

var squaresNum = 6;
var colors = [];
var goal;

var squares = document.querySelectorAll(".Square");
var colorDisplay = document.getElementById("color-text");
var resultMessage = document.getElementById("click-result");
var h1 = document.querySelector("h1");
var refreshButton = document.querySelector("#refresh");
var modeButtons = document.getElementsByClassName("Mode");

init();

//Setup Listeners
function init() {

    //GameMode Logic
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {

            modeButtons[0].classList.remove("Selected");
            modeButtons[1].classList.remove("Selected");
            this.classList.add("Selected");
            squaresNum = this.textContent === "Easy" ? 3 : 6;

            refreshColors();
        })
    }

    //Setup the squares
    squares.forEach(function (square) {

        //add event listeners to the square divs
        square.addEventListener("click", function () {
            //grab the color of the clicked square
            var clickedColor = this.style.backgroundColor;

            //compare the color to the goal
            if (clickedColor === goal) {
                resultMessage.textContent = "Correct!";
                resultMessage.style.color = "#33FF33";
                winColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                refreshButton.textContent = "Play Again?"
            }
            else {
                this.style.backgroundColor = "#232323";
                resultMessage.textContent = "Wrong";
                resultMessage.style.color = "#FF3333";
            }

        })
    });

    refreshColors();
}

function winColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function chooseColor() {
    var pick = Math.floor((Math.random() * colors.length));
    return colors[pick];
}

function setupRandomColors(length) {

    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(generateColor());
    }

    return arr;
}

function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

//refresh button
refreshButton.addEventListener("click", refreshColors);

function refreshColors() {
    h1.style.backgroundColor = "steelblue";
    this.textContent = "Refresh Colors";
    resultMessage.textContent = "";
    //generate new colors
    colors = setupRandomColors(squaresNum);
    //choose a new goal color
    goal = chooseColor();
    //change the colorDisplay to display the new color
    colorDisplay.textContent = goal;
    //change the colors of the square
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
}