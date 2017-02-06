// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decresment(state,num){
      state.count = state.count - num
    }
  },
  actions: {
    increment (context) {
      return new Promise((resolve, reject) => {
      setTimeout(function() {
        context.commit('increment')
        resolve()
      }, 2000);
    })
  }
  },
  getters:{
    addCounts:state=>{
      return state.count + 100
    }
  }
})

store.commit('increment')
store.commit('increment')
console.log(store.state.count)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
