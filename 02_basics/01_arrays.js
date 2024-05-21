// arrays

const myArr = [0, 1, 2, 3, 4, 5]
// js arrays are resizable and can contain mixed datatypes

// console.log(myArr[3]);

const myHeros = ["shaktiman", "nagraj"]
const myArr2 = new Array(1,2,3,4)


// methods in array

// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// const newArr = myArr.join();
// console.log(myArr)
// console.log(typeof newArr)
// console.log(newArr[1])
// join converts the array to string


// slice , splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);