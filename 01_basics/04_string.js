const name = "Abhisek"
const repoCount = 50

// console.log(name + repoCount)
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const myName = new String('Abhisek')
// console.log(myName)
// console.log(myName[0])
// console.log(myName.__proto__);

// console.log(myName.length)
// console.log(myName.toUpperCase())
// console.log(myName.charAt(5))
// console.log(myName.indexOf('k'))

// const newString = myName.substring(0,5)
// console.log(newString)

// const anotherString = myName.slice(-4,-3)
// console.log(anotherString)


const name2 = "   Abhi&sek"

console.log(name2)
console.log(name2.trim())

console.log(name2.replace('&','-'))

console.log(name2.includes('Abhi'))
console.log(name2.includes('sjd'))

console.log(name2.split('&'))