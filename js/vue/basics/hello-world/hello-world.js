var app = new Vue({
    el: "#vue_container",
    data: {
        title: "Hello World"
    },
    //template: "<button> {{title}} </button>"
    //^^ Replaces the vue controlled element with this template
});

document.getElementById("greetings").addEventListener("click", function () {
    app.title = "HOW YOU DARE TO CLICK ME!"
});