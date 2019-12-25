
var App = Vue.component("App", {
  template: `
    <div class="container">
    <table>
      <tbody>
        <tr v-for="(utente, index) of utenti" :key="index">
          <td>{{index}}</td>
          <td>{{utente.nome}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    
    <table>
      <tbody>
        <tr v-for="(property, index) in utenti[1]" :key="index">
          <td>{{index}}</td>
          <td>{{property}}</td>
        </tr>
      </tbody>
    </table>

    <br>
    
    <table>
      <tbody>
        <tr v-for="(property, key) in utenti[1]" :key="key">
          <td>{{key}}</td>
          <td>{{property}}</td>
        </tr>
      </tbody>
    </table>

    <br>
    
    <table>
      <tbody>
        <tr v-for="(property, key, index) in utenti[1]" :key="key">
          <td>{{index}}</td>
          <td>{{key}}</td>          
          <td>{{property}}</td>
        </tr>
      </tbody>
    </table>

    <br>

    <div class="yellow" v-for="numero in 10" :key="numero">{{numero}}</div>

    <template v-for="conta in 5">
	    <p class="blue" :key="conta">{{conta}}</p>
    </template>


    <ul>
	    <li v-for="utente in utenti" v-if="utente.livello==2">{{utente.nome}}</li>
    </ul>

    </div>

  `,
  data() {
    return {
      utenti: [
        {
          nome: "Utente 1",
          email:"a@a.com",
          livello: 2
        },
        {
          nome: "Utente 2",
          email:"b@b.com",
          livello: 1
        },
        {
          nome: "Utente 3",
          email:"c@c.com",
          livello: 2
        }
      ]
    };
  }
});

new Vue({
  el: '#app'
});

