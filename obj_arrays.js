// Data Mutation
const arr = [1,2,3,4,5,6]

// push, pop, shift, unshift

arr.push(10)
arr.unshift(56)

console.log(arr)

// Array of objects

const students = [
    {name: "Emmanuel", age: 18, debt: false},
    {name: "B.R.Harivansh", age:19,debt: true},
    {name: "S.Ranjith Kumar", age: 18,debt: false}
]

// 1. ForEach Method

students.forEach((item) => {
    console.log("Name: "+item.name);
    console.log("Age: "+item.age);
})

// 2. map() method

const newStudents = students.map((user) => {
    return user.name;
})

newStudents.push("Jeevitha")
console.log(newStudents);

console.log(students)

// filter method

var non_debted = []
const debted = students.filter((student) => {
    if (student.debt === true){
        non_debted.push(student.name)
    }
    else{
        null
    }
})

console.log(non_debted)

// filter method

const products = [
    {name: "Orange", price:11},
    {name: "Banana", price:12},
    {name: "Dragon Fruit", price:151},
    {name: "Kiwi", price:167},
]

const sum = products.reduce(function(total, product){
    return total = product.price
},0)


console.log(sum)