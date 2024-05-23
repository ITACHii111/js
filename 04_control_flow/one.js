// if statement
const isUserLoggedIn = true

// if(2 == "2"){
//     console.log("executed")
// }

// if(2 === "2"){
//     console.log("hello world");
// }   === checks data type as well 

// const temp = 41

// if(temp < 50){
//     console.log("temp less then 50")
// } else{
//     console.log("temp greater then 50");
// }

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power ${power}`);
// }

// console.log(`user power ${power}`);

// const balance = 1000

// // if(balance > 500) console.log("test") // implicit scope

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900")
// } else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("allowed to buy courses");
}