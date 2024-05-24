// reduce method

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log(`value of acc is ${acc} and currVal is ${currVal}`);
//     return acc+currVal
// }, 0)

// const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 450
    },
    {
        itemName: "mobile course",
        price: 1500
    },
    {
        itemName: "data science course",
        price: 2000
    }
]

const myTotal = shoppingCart.reduce( (acc, item) => acc+item.price, 0)

console.log(myTotal);