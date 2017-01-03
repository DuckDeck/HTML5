'use strict'
var strPrimitive = "I am a string"
console.log("typeof strPrimitive :" + typeof strPrimitive)
console.log(strPrimitive instanceof String)
console.log('------------------------------')
var strObject = new String('I am a string')
console.log("typeof strPrimitive :" + typeof strObject)
console.log(strObject instanceof String)

console.log(strPrimitive.length)
console.log(strObject.length)

console.log(strPrimitive.charAt(3))
console.log(strObject.charAt(3))


var arr = ['foo',44,'bar']
arr['3'] = 'baz'
console.log(arr)


var myObj = {a:2}

var des = Object.getOwnPropertyDescriptor(myObj,'a')
console.log(des)

//我们也可以使用 Object.defineProperty(..) 来添加一个新属性或者修改一个已有属性(如果它是 configurable)并对特性进行设置
Object.defineProperty(myObj,'b',{
    value:122,
    writable:false,
    configurable:false,//Configurable,只要属性是可配置的，就可以使用 defineProperty(..) 方法来修改属性描述符:
    enumerable:true
})
console.log(myObj.b)
//myObj.b = 111 // can not work but not throw exception
//when use strict, it will raise a erro 'Uncaught 
//TypeError: Cannot assign to read only property 'b' of object '#<Object>'
console.log(myObj.b)

// Object.defineProperty(myObj,'b',{
//      value:11,
//     writable:false,
//     configurable:true,
//     enumerable:true
// })


Object.preventExtensions(myObj)
// myObj.c = 3
// console.log(myObj.c)
//error can not extension

var getsetObj = {
    get a(){
        return this._a_
    },
    set a(val){
        this._a_ = val * 2
    }
}

getsetObj.a = 10
console.log(getsetObj.a)
console.log('property in object:')
console.log('a' in getsetObj)
console.log('_a_' in getsetObj)
console.log('b' in getsetObj)
console.log(getsetObj.hasOwnProperty('a'))
console.log(getsetObj.hasOwnProperty('_a_')) //also true
console.log(getsetObj.hasOwnProperty('b'))