

const promiseOne = new Promise(function(resolve, reject){
    // do an asyn task
    // DB calls, cryptography tasks, network calls

    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})                                                         // resolve is connected to .then


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "tarun", password: "tarun@1999"})
        }else{
            reject('ERROR: Something went Wrong')
        }
    }, 1000)
})


promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))          // default always executed


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javaScript", password: "tarun@1999"})
        }else{
            reject('ERROR: js went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()

const fetch = require('node-fetch');

// async function getAllUsers(){

//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()                 // also takes time to convert to json
//         console.log(data);
//     } catch(error){
//         console.log("E: ", error)
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))


