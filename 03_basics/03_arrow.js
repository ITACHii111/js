const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }            // this is not used in function but in object


// chai()

// const chai = function() {
//     let usename = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let usename = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => (num1+num2)
// without using {} we can make a implicit return using ()

const addTwo = () => ({username: "tarun"})

console.log(addTwo(3,  4))