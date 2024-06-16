//dates

let myDate = new Date()
console.log(myDate.toTimeString())
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let myCreateDate = new Date(2023,0,23)
let my = new Date("01-14-2024")
console.log(myCreateDate.toDateString())
console.log(myCreateDate.toLocaleString())
console.log(my.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(my.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)


newDate.toLocaleString('default',{
    weekday:"long"
})