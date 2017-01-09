<template>
    <div>
        <img src="" alt="">
        <div>
            
        </div>
        <spinner :show="loading" ></spinner>
    </div>
</template>
<script>
    import movieInfo from '../model/movieInfo'
    import Spinner  from '../components/spinner.vue'
    export default{
        name:'movieDetail',
        components: {Spinner},
        data(){
            return{
                movie:{},
                loading:true
            }
        },
        mounted(){
            
        },
       
    }
</script>
<style>