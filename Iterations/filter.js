// const coding = ["js" , "ruby" , "java", "python","cpp"]

// const values = coding.forEach((item)  => {
//      console.log(item)
//      return item;
// })

// console.log(values)

const values = [1,2,3,4,5,6,7,8,9,10]

//filter operations

// const n = values.filter(  (i) => {
//     return i>3
// } ) 
// console.log(n)

// const n = []

// values.forEach( (num) => {
//      if(num>4){
//          n.push(num)
//      }
// })

// console.log(n)

// const books = books.filter( (j) => bk.genre === 'History')
//  books = books.filter ( (j) => {
     
// })
// console.log(books)
const num = [1,2,3,4,5,6,7,8,9,10]
const up = num.map( (j) => j+10)

// console.log(up)

//chaining
const k = num.map((j) => j*10).map( (i) => i+10).filter((l) => l>40)

// console.log(k)
const my = [1,2,3,4]
// const total = my.reduce( function (acc,curr){
//     console.log(acc: ${acc} & curr: ${curr})
//      return acc+curr
// },0)

const total = my.reduce( (acc,curr) => acc+curr ,0)


// console.log(total)
const cart = [
    {
         item: "js",
         price: 3499    
    },

    {
      item: "java",
      price: 3399    
    },

   {
    item: "cpp",
    price: 3299    
   },
]

const pri = cart.reduce ( (acc,item) => item.price+acc ,0)
console.log(pri)