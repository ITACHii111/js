//const tinderUser = new Object()

const tinderUser = {}

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tarun",
            lastname: "chandel"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}        // spread operator
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 2,
        email: "c@gmail.com"
    }
]

// console.log(users[1].email)

// destructuring in objects


const course = {
    coursename: "jsInHindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = ({company}) => {

// }                desturcture in react example

// navbar(company = "hitesh")


// concepts of API (apna kaam kisi aur ke sar par dalna)

// {
//     "name": "tarun",
//     "courseName": "js in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

