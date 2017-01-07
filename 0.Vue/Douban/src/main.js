import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './app.vue';
import routes from './router.js'
Vue.use(VueRouter)

var router = new VueRouter({routes})

new Vue({router,render:h=>h(app)}).$mount('#app')
