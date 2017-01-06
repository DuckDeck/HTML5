import Vue from 'vue'
import VueResourse from 'vue-resource'
import VueRouter from 'vue-router'

import App from './app.vue';
import home from './components/home.vue'

Vue.use(VueResourse)
Vue.use(VueRouter)


const routes = [{path:'/',component:App},{path:'/home',component:home}]
var router = new VueRouter({routes})

const app = new Vue({router,render:h=>h(App)}).$mount('#app')
