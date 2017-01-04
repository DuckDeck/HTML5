import Vue from 'vue'
import VueResourse from 'vue-resource'
import VueRouter from 'vue-router'

import App from './app.vue';
import home from './components/home/vue'

Vue.use(VueResourse)
Vue.use(VueRouter)

var app = Vue.extend(App)
var router = new VueRouter()

router.map({
    '/home':{
        component:home
    }
})

router.redirect({
    '/':'home'
})

router.start(app,'#app');
window.router = router;