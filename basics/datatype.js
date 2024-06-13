//primitive
//7 types : string , Number , BBolean , null, undefined , symbol , BigInt

const score = 100
const scoreValue = 100.3

const isloggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const  anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34565435766543748393n




//reference (non primitive)
//array , objects , function

const heros = ["batman","superman","spiderman"]
 let myObj = {
     name: "sawaiz",
     age: 22,
}

//function
const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof id)



//stack (primitive) , heap (non-primitive)
let myName = "sawaiz"
let anothername = myName
anothername = "tonikroos"
console.log(anothername)
console.log(myName)


//heap memory allocation using reference
let user = {
    email : "sawaizkhan2003@gmail.com",
    upi : "62677@sbi",
}

let usertwo = user
usertwo.email="mk4914@srmsit.edu.in"
console.log(user.email)
console.log(usertwo.email)