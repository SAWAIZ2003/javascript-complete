//const singleton = new object()
const kroos = {}
kroos.id = "sniper"
kroos.name = "toni"
kroos.Loggedin = false
// console.log(kroos)

const vini = {
     email : "some@gmail.com",
     fullname : {
         userfullname:{
            fisrtname : "toni",
            lastname : "kroos"
         }
     }
}

// console.log(vini.fullname.userfullname.fisrtname)
const obj1 = {1: "a",2 : "b"}
const obj2 = {3: "a" , 4 : "b"}
const obj4 = {5: "k" , 6: "l"}
// const obj3 = {obj1,obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
console.log(obj3)


const benzema = [
    {
        id : 1,
        email : "pep@gmail.com"
    },
    {
        id : 1,
        email : "pep@gmail.com"
    },
    {
        id : 1,
        email : "pep@gmail.com"
    },
    {
        id : 1,
        email : "pep@gmail.com"
    },
    
]

benzema[1].email

console.log(Object.keys(kroos))
console.log(Object.values(kroos))
