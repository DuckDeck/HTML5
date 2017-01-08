<template>
   <div class="mainDiv">
       <section>
           <div >
               <span class="movieTitleSpan">{{category}}</span>
           </div>
         <ul class="moviesUl" v-cloak>
            <li v-for="movie in movies">
                <a class="link">                    
                    <img :src="movie.images.large" class="movieImg" />
                    <div class="movietitle">
                        {{movie.title}}
                    </div>
                </a>      
            </li>
 	      </ul>
       </section>
       <spinner :show="loading" ></spinner>
   </div>
</template>
<script>
    import movieInfo from '../model/movieInfo'
    import Spinner  from '../components/spinner.vue'
    export default{
        name:'index',
        components: {Spinner},
        data(){
            return{
                category:"",
                movies:[],
                loading:true,
            }
        },
        mounted(){
            var that = this
            movieInfo.getMovies('in_theaters?start='+that.movies.length).then(function(data){
                that.movies = data.subjects //使用了Promiss this会丢失
                that.loading = false
                that.category = data.title
            },function(error){
                console.log(data.msg)
                that.loading = false
            })         
        },
        methods:{
           
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
span.movieTitleSpan{
    font-size: 0.4rem;
}
ul.moviesUl li{
    width: 33%;
    display: inline-block;

}
a.link .movieImg{
   width: 2.86rem;
   padding: 0rem 0.2rem;
   padding-top: 0.2rem;
   height: 4rem;
}
div.movietitle{
    font-size: 0.1rem;
}
</style>