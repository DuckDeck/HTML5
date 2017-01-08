import axios from 'axios'
import resultInfo from './resultInfo'
const movieInfo = {
    title:'我很好',
    img:'http://d.5857.com/xg_161228/001.jpg',
};

function getMovies(category) { 
    const url = "http://127.0.0.1:8080/v2/movie/" + category
    return new Promise(function(resolve,reject){
        axios.get(url).then(response=>{
            var res = response.data;
            if(res.title) {
                resolve(res)
            }
            else{
                reject(res)
            }
        })
    })
}

export default {
     movieInfo,
     getMovies,
}