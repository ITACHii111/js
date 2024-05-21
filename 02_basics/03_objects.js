// singleton

// object literals
// Object.create()

const mySym = Symbol("key1")

const jsUser = {
    name: "Tarun",
    age: 25,
    location: "Bhopal",
    "full name": "tarun chandel",
    [mySym]: "mykey1",
    email: "tarun@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySym])

// console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello jsUser")
}

console.log(jsUser.greetings)

jsUser.greetingsTwo = function(){
    console.log(`hello jsUser, ${this.name}`)
}

console.log(jsUser.greetingsTwo())