'use strict'

function multiply(input) { //这地方不好理解，这个方法返回一个Promise异步任务，里面有个函数，参数分别表示成功和失败。如果调用成功，就走到后面，不然走到fail里面
    return new Promise(function (resolve,reject) {
        console.log('calculating ' + input + ' x ' + input + '...')
        setTimeout(resolve,500,input*input)//这里表示0.5秒后执行成功函数，并且计算出两者和积
    })
}
function add(input) {
    return new Promise(function (resolve,reject) {
        console.log('calculating ' + input + ' + ' + input + '...')
        setTimeout(resolve,500,input+input)
    })
}

var p = new Promise(function (resolve,reject) {
    console.log('start new Promise...')
    resolve(123)
})

p.then(multiply) //p.then相当于调用 resolve方法
.then(add)
.then(multiply)
.then(function(result){
    console.log(result)
})