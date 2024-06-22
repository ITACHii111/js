

const user = {
    username: "tarun",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from DB")
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getUserDetails())

// console.log(this)

// const promise = new Promise()
// const date = new Date()                // new keyword is a consturctor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`welcome ${this.username}`)
    }
    
    return this                          // implicitly define hota h return
}

const userOne = new User("hitesh", 12, true)             // new creates an empty object also known as instance
const userTwo = new User("chaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
