Vue.component("user-app", {
  template: `
    <button class="btn btn-outline-primary">
      {{item.name}} 
      {{item.name}} 
    </button>
  `,
  props: ['item']
});

Vue.component("user-li", {
  template: `
    <li>
        <button class="btn badge">
          {{item.name}} 
        </button>
    </li>
  `,
  props: ['item']
});

new Vue({
  el: '#app',
  template: `
    <div class="container">
      <user-app v-for="user in users"  v-bind:key="user.id" v-bind:item="user" ></user-app>      

      <br> <br>

      <ul>
        <user-li v-for="user in users"  v-bind:key="user.id" v-bind:item="user" ></user-li>        
      </ul>

      <ul>
        <li is="user-li" v-for="user in users"  v-bind:key="user.id" v-bind:item="user" ></li>
      </ul>

      <button class="btn btn-danger" v-on:click="users[0].name='EDITED'"> 1 SUCCESS! </button>
      <button class="btn btn-danger" v-on:click="users.push({id: 99, name: 'User99'})">2 SUCCESS! </button>
      <button class="btn btn-danger" v-on:click="users.reverse()">3 SUCCESS! </button>

      <button class="btn btn-danger" v-on:click="users = users.filter(el => el.id>2)">4 SUCCESS! </button>
      
      <!-- FAILURE -->
      <button class="btn btn-secondary" v-on:click="users[1] = {id: 88, name: 'User88'}">5 Failure ... </button> <br><br>
      <button class="btn btn-secondary" v-on:click="users.length=1">6 Failure ... </button> 

      <!-- SOLUZIONE -->
      <button class="btn btn-danger" v-on:click="$set(users, 1, {id: 88, name: 'User88'})">7a SUCCESS! </button>
      <button class="btn btn-danger" v-on:click="setValue">7b SUCCESS! </button>
      <button class="btn btn-danger" v-on:click="users.splice(1)">8 SUCCESS! </button> <br><br>

      <ul>
        <li v-for="n in filterEvenValues(users)">{{ n.name }}</li>        
      </ul>

      <p> PARAGRAPH 1 {{ users[0].surname }}</p>  
      <!-- <button class="btn btn-secondary" v-on:click="users[0].surname = 'Ferrari'">9 Failure </button> -->
      <button class="btn btn-danger" v-on:click="$set(users[0], 'surname', 'Ferrari')">9 SUCCESS! </button>
      <button class="btn btn-danger" v-on:click="users[0].surname = 'Tarzan'">10 YES! </button>

      <p> PARAGRAPH 2 {{ users[1].cogname }} - {{ users[1].eta }} </p>  
      <button class="btn btn-danger" v-on:click="assignTwoProps">11 THE END </button>
    

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
  },

  methods: {
    setValue: function()  {Vue.set(this.users, 1, {id: 88, name: 'User88'})},

    filterEvenValues: function (users) {
      return users.filter(function (user) {
        return user.id % 2 === 0;
      })
    },

    assignTwoProps: function () {
       let nuovo = Object.assign({}, this.users[1], {cogname: 'Ferrari', eta: 98} );
       Vue.set(this.users, 1, nuovo);
  
    }
  }
     
});
