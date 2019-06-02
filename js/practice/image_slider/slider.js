/********************
 *  Coded By Davoleo
 ********************/

let images = [
    "../../../resources/img/coding.jpg",
    "../../../resources/img/excuse_me_wtf.jpg",
    "../../../resources/img/HDD.png",
    "../../../resources/img/info.png",
    "../../../resources/img/meme_pooh.jpg",
    "../../../resources/img/question_mark.png",
    "../../../resources/img/SSD.png",
    "../../../resources/img/SSD_M2.png"
];
let index = 0;
let slider = document.getElementById("slider");

function prev() {
    index--;
    if (index < 0)
        index = images.length - 1;
    slider.src = images[index];
}

function next() {
    index++;
    if (index >= images.length)
        index = 0;
    slider.src = images[index];
}


//TODO it's ofc broken af
function switchLockedDims() {
    let checkbox = document.getElementById("lockCheck");

    if (checkbox.checked)
    {
        checkbox.checked = false;
        slider.removeAttribute("width");
        slider.removeAttribute("height");
    }
    else
    {
        checkbox.checked = true;
        slider.setAttribute("width", "200");
        slider.setAttribute("height", "200");
    }

}
