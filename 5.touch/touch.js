$(document).ready(function(){
    var el = document.getElementById('touch-box')
    Hammer(el).on('swipeleft',function(e){
        alert("tou swipe to left success")
    })
TouchEmulator();

var hammertime = Hammer(document.getElementById('pinchzoom'),{
    transform_always_block:true,
    transform_min_scale:0.5,
    drag_block_horizontal:true,
    drag_block_vertical:true,
    drag_min_distance:0
})
var img = document.getElementById('img')
var posX = 0,
posY = 0,
scale = 1,
last_scale,
rotation = 1,
last_rocation

hammertime.on('touch drag transform',function(e){
    alert(e)
    switch(e.type){
        case 'touch':
        last_scale = scale
        last_rocation = rotation
        last_posX = posX
        last_posY = posY
        break
        case 'drag':
        posX = last_posX + e.gesture.deltaX
        posY = last_posY + e.gesture.deltaY
        break
        case 'transform':
        rotation = last_rocation + e.gesture.rotation
        scale = Math.min(last_scale * e.gesture.scale,10)
        break
    }
var transform = "translate3d("+posX +"px,"+posY+"px,0)"+
"scale3d("+scale +","+scale +",0)"+
"rotate("+rotation +"deg)"
img.style.transform = transform
})

})