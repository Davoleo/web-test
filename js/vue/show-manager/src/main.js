import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './firebase';
import {rtdbPlugin} from 'vuefire';

Vue.use(BootstrapVue);
Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
