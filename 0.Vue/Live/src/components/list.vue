<template>
    <div>
        <div class="index">
            <h1>Vuex Demo</h1>
            <section>
                count:{{count}}
                <button type="" @click="add">+</button>
                <button type="" @click="minus" >-</button>
                <input type="text" name="" :value="count">
                <ul>
                    <li class="listli" v-for="i in count">{{i}}</li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                count:10
            }
        },
        methods:{
            add(){
                this.count++
            },
            minus(){
                this.count--
            },
        }
    }
</script>

<style>
.listli{
    padding: 4px;
    border: 1px solid red;
    margin: 2px;
}
</style>