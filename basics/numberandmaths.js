const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) //decimal 

const other = 23.2455
console.log(other.toPrecision(2))

const kroos = 10000000
console.log(kroos.toLocaleString()) //american system


/*******Maths******** */

console.log(Math.PI)
console.log(Math.abs(-7))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)) // higher than 4
console.log(Math.floor(4.9)) //gives 4
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,5,678,9))

console.log(Math.random());
// genrates randow values between 0-9
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.ceil(Math.random()*(max-min+1))+min)