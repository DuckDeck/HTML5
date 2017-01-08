
import index from './views/index.vue'
import movieList from './views/movie-list.vue'

export default[{
   path:'/',
   component:index,
   name:'name'
},{
   path:'/movie-list',
   component:movieList,
   name:'movie-list'
}]
