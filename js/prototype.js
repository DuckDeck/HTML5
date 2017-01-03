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
