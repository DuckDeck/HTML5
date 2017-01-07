<template>
   <div class="mainDiv">
       <ul class="moviesUl" v-cloak>
            <li v-for="movie in movies">
                <a class="link">                    
                    <img :src="getUserImg()" class="movieImg" />
                </a>      
            </li>
 	</ul>
   </div>
</template>
<script>
    import movieInfo from '../components/movieInfo'
    import resultInfo from '../components/resultInfo'
    export default{
        name:'index',
        data(){
            return{
                movies:[],
            }
        },
        mounted(){
            this.movies.push(movieInfo)
            this.movies.push(movieInfo)
            this.movies.push(movieInfo)
            this.movies.push(movieInfo)
            this.movies.push(movieInfo)
            this.movies.push(movieInfo)
        },
        methods:{
            getUserImg(){
                return 'http://d.5857.com/xg_161228/001.jpg'
            }
        }
    }
</script>
<style>
div.mainDiv{

    max-width: 750px;
    min-width: 320px;
    background: #eee;
    margin: 0px auto;
    margin-top: 0.2rem;
    padding-bottom: 0.2rem;
}
ul.moviesUl{
    list-style: none;
}
ul.moviesUl li{
    width: 33%;
    display: inline-block;

}
a.link .movieImg{
   width: 90%;
   padding: 0rem 0.2rem;
   padding-top: 0.2rem;
}
</style>