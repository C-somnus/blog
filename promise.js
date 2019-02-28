// Iterator 遍利器
// .next() 放回一个对象{value: , done }
// Generator yield
[Symbol.iterator]
function* name() {
    var a = yield 2
    yield a+2
}
// 放回一个遍利器
// var a = name()
// a.next() {value: 2, done: false}
// a.next(3) {value: 5, done: false}
// a.next() {value: undefined, done: true}
function* name() {
    var a = yield 2
    yield* a+2
}

new Promise(function(resolve, reject){

}).then(function() {}, function () {

})

const RESOLVED = 'resolved'
const REJECTED = 'reject'
const PENDING = 'pending'

function MyPromise (fn) {
    if (typeof fn !== 'function') throw new TypeError('should be a function')
    this.state = PENDING
    this.value = null
    this.resolveCallBack = []
    this.rejectCallBack = []
    const that = this;
    function resolve (v) {
        if(that.state === PENDING) {
            that.state = RESOLVED
            that.value = v
            that.resolveCallBack.map(fn => {
                fn(v)
            })
        }
    }
    function reject (v) {
        if(that.state === PENDING) {
            that.state = REJECTED
            that.value = v
            that.rejectCallBack.map(fn => {
                fn(v)
            })
        }
    }
    try{
        fn(resolve, reject)
    }catch(e) {
        reject(e)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') onFulfilled = v => v
    if (typeof onRejected !== 'function') onRejected = v => {
        throw new TypeError()
    }
    const that = this
    if (that.state === PENDING) {
        that.resolveCallBack.push(onFulfilled)
        that.rejectCallBack.push(onRejected)
    }
    if (that.state === RESOLVED) {
        onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}