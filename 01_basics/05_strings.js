const name = "tarun"
const repoCount = 4

// console.log(name + repoCount + " value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('tarunchandel')

// new string is an object 

// console.log(gameName[0])
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-12, 6)
console.log(anotherString)