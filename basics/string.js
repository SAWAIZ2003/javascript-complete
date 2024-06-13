const name = "lionel messi"
const goals  = 91

//string interpolaration
console.log( "god of football ${name} scored ${goals} goals in 2012/2013" )

const gameName =  new String('kolo muani') //javascript objects
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('k'))

//slcing
const slice = gameName.substring(0,5)
console.log(slice)

//negatibve slicing
const anotherstring = gameName.slice(-8,4)
console.log(anotherstring)

const spaces = "  Randal Kuolo Muani  "
console.log(spaces.length)
console.log(spaces)
console.log(spaces.trim())

const url = "https://sawaiz.com/lionel%20messi"

console.log(url.replace('%20','-'))


//evaluates boolean values
console.log(url.includes('benzema'))


console.log(gameName.split('-'))