// const kloop = new Object()
// const kloop = {}
// kloop.id = "123abc"
// kloop.name = "sammy"
// kloop.isLoggedIn = false

// const regular = {
//     email : "xyz@gmail.com",
//     full : {
//     complete : {
//      username: "sawaiz",
//      lastname : "khan",
//        } 
//     }
// }

// console.log(regular.full.complete)

const mySym = Symbol("key1")

const camavinga = {
    name  :  "antoinnegriezmann",
    age   :   34,
    [mySym] : "mykey1",    //[mysym] is symbol , mysym is just string
    location :  "paris",
    email : "camavinga@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Monday"]
}

// console.log(camavinga["name"])
// console.log(camavinga[mySym])
      //or
// console.log(camavinga.email)

//manipulating values of object
camavinga.email = "mk4914@srmist.edu.in"
// Object.freeze(camavinga)  //does not allow to further change the value
camavinga.email = "google.com"
// console.log(camavinga)


camavinga.greeting = function(){
    console.log("hello")
}

camavinga.greetingtwo = function(){
     console.log(`hello.js,${this.name}`) //string interpolaration,backtix notation
}
console.log(camavinga.greeting())
console.log(camavinga.greetingtwo())
