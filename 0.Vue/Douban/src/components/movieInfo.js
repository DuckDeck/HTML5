import axios from 'axios'
import resultInfo from './resultInfo'
const movieInfo = {
    title:'我很好',
    img:'http://d.5857.com/xg_161228/001.jpg'
};

function getMovies(category) { 
    const url = "https://api.douban.com/v2/movie/" + category
    return new Promise(function(resolve,reject){
        axios.get(url).then(response=>{
            var res = response.data;
            if(res.rtn == 0) {
                resolve(res)
            }
            else{
                reject()
            }
        })
    })
}

export default {
     movieInfo
}