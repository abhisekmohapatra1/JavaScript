// let date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())

let myCreatedDate = new Date(2024,11,20,2,3)
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toLocaleString())

let myDate = new Date("01-13-2024")
console.log(myDate.toLocaleString())

let myDateStamp = Date.now()
console.log(myDateStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getFullYear())