

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//  sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // console.log("tarun")
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){     // rest operator
    return num1
}

// console.log(calculateCartPrice(244, 483, 4543, 3463));
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.price} and price is ${anyobject.price}`)
}

// handleObject(user)

const myNewArray = [200, 399, 458, 854]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
