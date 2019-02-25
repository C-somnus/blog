// 一切的对象都来自Object
Object.prototype.__proto__ === Null 

Function.prototype.__proto__ === Object.prototype

Function.__proto__ === Function.prototype

// prototype是函数的一个对象（即原型）在函数创建的时候产生 一开始只有一个属性constructor 值为自身的构造函数
