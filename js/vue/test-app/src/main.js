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

new Vue({
  render: h => h(App),
}).$mount('#app');

console.log(Vue.version);
