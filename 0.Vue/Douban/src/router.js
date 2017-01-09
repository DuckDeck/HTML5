
import index from './views/index.vue'
import movieList from './views/movie-list.vue'
import swiper from './views/swiper.vue'
import movieDetail from './views/movie-detail.vue'
export default[{
   path:'/',
   component:index,
   name:'name'
},
{
   path:'/index',
   component:index,
   name:'name'
},
{
   path:'/movie-list',
   component:movieList,
   name:'movie-list'
},{
   path:'/swiper',
   component:swiper,
   name:'movie-list'
},{
   path:'/movieDetail/:movieId',
   component:movieDetail,
   name:'movie-detail'
}]
