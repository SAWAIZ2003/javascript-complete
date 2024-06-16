const german = ["tonikroos","ilkayGundogan","mauelneuer"]
const france = ["mbappe","griezmann","giroud"]

// german.push(france)
// console.log(german[3][2])
// const allteam = german.concat(france)
// console.log(allteam)

const combined = [...france, ...german]
console.log(combined)

const unique = [1,2,3,4,[5,6,7],8,[9,10,[11,12]]]
const  randal_kolo_muani = unique.flat(Infinity)
console.log(randal_kolo_muani)

console.log(Array.isArray("manuelneuer"))
console.log(Array.from("maneulneur"))

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c))