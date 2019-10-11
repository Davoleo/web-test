/********************
 *  Coded By Davoleo
 ********************/

var App = Vue.component("App", {
    template: `
   <div class="container">
    <h1 v-once>{{ title }}</h1>
<!--    ^^ locks the element to the first render update -->
    <p><span v-bind:style="colorRed">5 + 3 = </span>{{ 5 + 3 }}</p>
<!--          ^^ Links the style rendering to the colorRed prop   -->
    <p><span v-bind:style="{color: color}">5 + 3 = </span>{{ 5 + 3 }}</p>
    <p>{{ user.firstName }} {{user.secondName}}</p>
    <p>{{user.getFullName()}}</p>
    <p><a :href="myUrl">Check out this website</a></p>
<!--    ^^ Brief form for v-bind:    -->
    <button class="btn btn-primary" :disabled="isDisabled">Click</button>
    <p>Is this button Disabled? {{isDisabled ? " Yes" : " No"}}</p>
    <p>Complete name all caps: {{user.getFullName().toUpperCase()}}</p>
   </div>
  `,
    data() {
        return {
            title: "Hello World!",
            color: "red",
            colorRed: "color: red",
            myUrl: "https://www.example.com",
            isDisabled: false,
            user: {
                firstName: "Mario",
                secondName: "Rossi",
                getFullName: function () {
                    return this.firstName + " " + this.secondName;
                }
            }
        };
    }
});

new Vue({
    el: "#vueContainer",
});