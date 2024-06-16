// array

const num = [1,2,3,4,5]

const hero = ["supes","homelander","speed"]
const arr2 = new Array(6,7,8,9,10,11,12)

// console.log(arr2[1])

// //methods
// arr2.push(2)
// console.log(arr2)
// arr2.pop()
// console.log(arr2)
// arr2.shift()
// console.log(arr2)
// arr2.shift()
// console.log(arr2)
//arr2.unshifts add to 1st index
//arr2.shift pop from 1st index

// console.log(arr2.includes(9)) //evaluates booelan values true and false
// console.log(arr2.indexOf(78)) // returns -1 if elemnt does not exist


// const newArr = arr2.join()  // string type
// console.log(typeof newArr)
// console.log(arr2)


//slicing,splice

console.log("A",arr2)

const myn1 = arr2.slice(1,3);
console.log(myn1)
console.log("B",arr2)

//splice
const myn2 = arr2.splice(1,3)
console.log("C",arr2)
console.log(myn2)
//SPLICE CHANGES THE ORIGINAL ARRAY