import Vue from 'vue'
import App from './App.vue'

//Used in the global component registration
//import upperFirst from 'lodash/upperFirst'
//import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false;

/*
//Global Component registration for big Vue.js Apps
//Gets a list of all the components that start with "TestApp" and finish with .js or .vue
const requireComponent = require.context(
    './components', false, /TestApp[A-Z]\w+\.(vue|js)$/
);

//Registers all the components inside of requireComponents as global
requireComponent.keys().forEach(
    fileName => {
      const componentConfig = requireComponent(fileName);
      const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));

      //Global definition of a component (component can be used anywhere)
      Vue.component(componentName, componentConfig.default || componentConfig)
    }
);
*/

//The errorCaptured function is a function that can be overriden on various levels and allows to customize error handling
Vue.config.errorHandler = function (err, vm, info) {
  alert(err + '#' + vm + '#' + info);
}

//Global filters
Vue.filter(
    'upper',
    function (value) {
      return value.toUpperCase();
    }
)

new Vue({
  render: h => h(App),
  //Hook Functions
  beforeCreate() {
    alert("beforeCreate");
  },
  //After the creation of the instance and after the event listeners have started
  created() {
    alert('created');
  },
  //Before component rendering
  beforeMount() {
    alert('beforeMount');
  },
  //Right after component rendering
  mounted() {
    alert('mounted');
  },
  //Before DOM update
  beforeUpdate() {
    alert('beforeUpdate');
  },
  //after DOM update
  updated() {
    alert('updated');
  },
  //before Component destruction when Vue removes it from the DOM
  beforeDestroy() {
    alert('beforeDestroy');
  },
  //after Component destruction when Vue removes it from the DOM
  destroyed() {
    alert('destroyed');
  }
}).$mount('#app');

console.log(Vue.version);
