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
    <hr>
    
    <!--    v-if only renders the element if the passed boolean is true -->
    <div v-if="buttonEnabled">
        <button class="btn btn-primary">Remove File</button>    
    </div>
    <div v-else>
        User doesn't have permissions to remove files
    </div>
    <hr>
    
<!--  When using a template instead of a div to sorround controls, only the content of the container will be rendered  -->
    <template v-if="buttonEnabled">
        <button class="btn btn-dark">Remove File</button>    
    </template>
    <template v-else>
        User doesn't have permissions to remove files
    </template>
    <hr>
    
<!--  If | Else If | Else  -->
    <template v-if="type === 'A'">
        A
    </template>
    <template v-else-if="type === 'B'">
        B
    </template>
    <template v-else-if="type === 'C'">
        C
    </template>
    <template v-else>
        Not A/B/C
    </template>
    <hr>

<!-- Form Example -->
<!-- View doesn't re-render the input control automatically to make everything as lightweight as possible, if you want controls to render again you need to differentiate them by using a key -->
    <form>
        <div class="form-group">
            <template v-if="loginType === 'username'">
                <label>Username</label>
                <input key="username" class="form-control" placeholder="Enter your username">                           
            </template>
            <template v-else>
                <label>E-mail</label>
                <input key="email" class="form-control" placeholder="Enter your e-mail address">            
            </template>
        </div>    
    </form>
    <button v-on:click="byUsername()" class="btn btn-primary">By Username</button>
    <button v-on:click="byEmail()" class="btn btn-primary">By E-mail</button>
    <hr>

<!--    Lightweight alternative to v-if (v-show) -->
    <button v-show="antistress" class="btn btn-danger">Panic Button</button>
    
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
            },
            buttonEnabled: true,
            type: "B",
            loginType: "username",
            byUsername() {
                this.loginType = "username"
            },
            byEmail() {
                this.loginType = "email"
            },
            antistress: true
        };
    }
});

new Vue({
    el: "#vueContainer",
});