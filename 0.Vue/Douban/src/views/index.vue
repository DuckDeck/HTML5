<template>
   <div class="mainDiv">
       <section>
           <div class="movieCatDiv">
               <span >{{category1}}</span>
               <router-link :show="!loading" tag="span" :to="{name: 'movie-list'}" class="more">更多>
               </router-link>
           </div>
         <ul class="moviesUl" v-cloak>
            <li v-for="movie in movies1">
                <router-link class="link" :to="{ name: 'movie-detail', query: { movieid: 123 }}" >                    
                    <img :src="movie.images.large" class="movieImg" />
                    <div class="movietitle">
                        {{movie.title}}
                    </div>
                </router-link>     
            </li>
 	      </ul>
       </section>
       <section>
           <div class="movieCatDiv" >
               <span >{{category2}}</span>
               <router-link tag="span" :to="{name: 'movie-list'}" class="more">更多>
               </router-link>
           </div>
         <ul class="moviesUl" v-cloak>
            <li v-for="movie in movies2">
                <router-link class="link" :to="{ name: 'movie-detail', params: { movieId: 11}}" >                    
                    <img :src="movie.images.large" class="movieImg" />
                    <div class="movietitle">
                        {{movie.title}}
                    </div>
                </router-link>      
            </li>
 	      </ul>
       </section>
       <spinner :show="loading" ></spinner>
   </div>
</template>
<script>
    import movieInfo from '../model/movieInfo'
    import resultInfo from '../model/resultInfo'
    import Spinner  from '../components/spinner.vue'
    let s = Object.create(resultInfo)
    s.init(2,'1111',[123])
    console.log(s.code)
    export default{
        name:'index',
        components: {Spinner},
        data(){
            return{
                category1:"",
                category2:"",
                movies1:[],
                movies2:[],
                loading:true,
            }
        },
        mounted(){
            var that = this
            movieInfo.getMovies('in_theaters').then(function(data){
                that.movies1 = data.subjects //使用了Promiss this会丢失
                that.loading = false
                that.category1 = data.title
            },function(error){
                console.log(data.msg)
                that.loading = false
            })

             movieInfo.getMovies('coming_soon').then(function(data){
                that.movies2 = data.subjects //使用了Promiss this会丢失
                that.loading = false
                that.category2 = data.title
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
div.movieCatDiv{
    font-size: 0.4rem
}
ul.moviesUl li{
    width: 33%;
    display: inline-block;

}
div.movietitle{
    font-size: 0.3rem
}
a.link{
    color: #ddd;
    text-decoration: none;
}
a.link .movieImg{
   width: 2.86rem;
   padding: 0rem 0.2rem;
   padding-top: 0.2rem;
   height: 4rem;
}
.more{
    float: right;
    padding-right: 0.3rem;
}
</style>