const score= 69
const balance = new Number(102)
// finding the length of number
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 23.123456
console.log(otherNumber.toPrecision(3))

const hun = 1000000
console.log(hun.toLocaleString('en-IN'));

// ******Maths****** //

console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(5.8))
console.log(Math.max(2,4))
console.log(Math.min(2,4))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.2))

console.log(Math.random())
//for 1 to 10
console.log(Math.random()*10+1);
//for 11 to  20
const min= 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1))+min)