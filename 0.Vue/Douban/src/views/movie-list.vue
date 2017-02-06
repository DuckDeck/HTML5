<template>
   <div class="mainDiv">
       <section>
           <div >
               <span class="movieTitleSpan">{{category}}</span>
           </div>

         <scroll delegate-id="movieScroller"
            :on-refresh="refresh" on-infinite="loadmore" v-ref:
            class="moviesUl" v-cloak>
                <li v-for="movie in movies">
                    <a class="link">                    
                        <img :src="movie.images.large" class="movieImg" />
                        <div class="movieListtitle">
                            {{movie.title}}
                        </div>
                    </a>      
                </li>
 	      </scroll>
       </section>
       <spinner :show="loading" ></spinner>
   </div>
</template>
<script>
    import movieInfo from '../model/movieInfo'
    import Spinner  from '../components/spinner.vue'
    import Scroll from 'vue-scroller'
    export default{
        name:'index',
        components: {Spinner,Scroll},
        data(){
            return{
                category:"",
                movies:[],
                loading:true,
            }
        },
        mounted(){
             this.loadmore()      
        },
        methods:{
           loadmore:function(){
                var that = this
                movieInfo.getMovies('in_theaters?start='+that.movies.length).then(function(data){
                    that.movies = data.subjects //使用了Promiss this会丢失
                    that.loading = false
                    that.category = data.title
                },function(error){
                    console.log(data.msg)
                    that.loading = false
                })  
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
div.movieListtitle{
    font-size: 0.1rem;
}
</style>