
var App = Vue.component("App", {
  template: `
    <div class="container">
      <p><strong>!!This html page refers to the FIRST main.js!!</strong></p>
      
      <ul>
	      <li v-for="user in users" v-bind:key="user.id">{{user.name}}</li>
      </ul>  
    </div>
    
  `,
  data() {
    return {
      users: [
        {
          id: 1,
          name: "User 1"
        },
        {
          id: 2,
          name: "User 2"
        },
        {
          id: 3,
          name: "User 3"
        }
      ]
    };
  }
});

new Vue({
  el: '#app'
});

