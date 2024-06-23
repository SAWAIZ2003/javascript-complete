const userEmail = []

if(userEmail){
     console.log("got email")
}
else {
    console.log("don't have user email")
}

/** falsy values  */
// false , 0 , -0 , BigInt 0n , "",null,undefined, Nan

/*** truthy values ***/
// "0" , 'false' , " " , [] , {} , function(){}\

// if (userEmail.length === 0) {
//     console.log("empty array")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
   console.log("empty")
}

// if(emptyObj.length === 0){
//     console.log("empty")
//  }

 // Object.keys(emptyObj) is same as array

 //Mullish Coalescing operator(??): null undefined
 // only for null and undefined
 let val1;
// //  val1 = 5 ?? 10
// //  val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 20 ?? 30  // 20 will be printed
console.log(val1);

// ternary operator

// conditon ? true : false

const  randal =  500
randal >= 89 ? console.log("less than 80") : console.log("great")