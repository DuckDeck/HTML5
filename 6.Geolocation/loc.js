$(document).ready(function(){
    if ('geolocation' in navigator) {
        alert('geolocation can use')
    }
    else{
        alert('geolocation can not use')
    }
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    },function(err){
        console.log(err)
    })
})