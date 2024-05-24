// for loop 

// for (let i = 0; i < 10; i++) {
//     if(i == 5) console.log("5 is best number")
//     //console.log(i)
// }

// console.log(i);

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`inner loop value ${j} and outer loop ${i}`)
//         console.log(i + ' * ' + j + ' = ' + i * j);
//     }
    
// }

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${index}`);
    
}