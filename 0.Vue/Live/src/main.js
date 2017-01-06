import Vue from 'vue'
import VueResourse from 'vue-resource'
import VueRouter from 'vue-router'

import App from './app.vue';
import home from './components/home.vue'
import list from './components/list.vue'
import live from './components/live.vue'
Vue.use(VueResourse)
Vue.use(VueRouter)


const routes = [{path:'/',component:home},{path:'/list',component:list},{path:'/live',component:live}]
var router = new VueRouter({routes})

const app = new Vue({router,render:h=>h(App)}).$mount('#app')
