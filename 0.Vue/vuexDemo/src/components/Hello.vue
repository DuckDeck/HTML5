<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
     
    </ul>
    <h2>Ecosystem</h2>
    <ul>
     
    </ul>
    <div>
      {{count}}
    </div>
    <div>
      <button type="" @click="addCount">123123123 </button>
    </div>
    <div>
      <button type="" @click="minusCount">decresment </button>
    </div>

     <div>
      <button type="" @click="asyncminusCount">asyncminusCount </button>
    </div>
    
  </div>
</template>

<script>
import Vuex from 'vuex'

import { mapState } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:{
    
  },
  computed:{
    count(){
      return this.$store.getters.addCounts
    }
  },
  methods:{
    addCount(){
      this.$store.commit('increment')
    },
    minusCount(){
      this.$store.commit('decresment',20)
    },
    asyncminusCount(){
      this.$store.dispatch('increment').then(this.minusCount())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
