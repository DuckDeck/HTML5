var aObject = {
    a:2
}
var myObject = Object.create(aObject)
for(var k in myObject){
    console.log('Found:' + k)
}

function Foo() {
    
}

var a = new Foo()
console.log(Object.getPrototypeOf(a) == Foo.prototype)
console.log(a.constructor == Foo)
console.log(Foo.prototype.constructor == Foo)




function Foo(who) {  
    this.me = who
}

Foo.prototype.identity = function(){
    return 'I am ' + this.me
}

function Bar(who) {
    Foo.call(this,who)
  }
  
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.speak = function () {  

    alert('Hello,' + this.identity() + '.')
}

var a1 = new Foo('a1')
console.log(a1.identity())
var b1 = new Bar('b1')
var b2 = new Bar('b2')
b1.speak()
b2.speak()


//let's see another style code which can fullfill the same feature
Fii = {
    init:function(who){
        this.me = who
    },
    identity:function(){
        return 'I am '+this.me
    }
}

Ber = Object.create(Fii)

Ber.speak = function(){
    alert('Hello, ' + this.identity() + '.')
}

var b3 = Object.create(Ber)
b3.init('b3')
var b4 = Object.create(Ber)
b4.init('b4')
// b3.speak()
// b4.speak()