// ECA -> European Computer Manufacturers Association

// Array Destructuring

let array_1 = [1,2,3,4,5]
const [num1, num2, num3, ...num4] = array_1
console.log(num4);

let obj = [
    {username: "Emmanuel", password: "12345678"},
    {username: "Ranjith Kumar", password: "Otavade"},
    {username: "Harivansh", password: "basketballs"},
    {username: "Nishok", password: "Mallus_forever"}
]

const {obj1, ...objs}  = obj;
console.log(objs)

// object destructuring

const objects = {
    firstName: "Emmanuel",
    lastName: "Lothbrok",
    Age: 19,
    College: "MIT",
    Course: "Data Science and Artificial Intelligence"
}

const {firstName: myName, lastName: mylastname, Address = "Chennai", ...other_props} = objects

console.log(myName);
console.log(mylastname);
console.log(Address);
console.log(other_props);

// Parameter Destructuring

const userObj = {
    firstName: "John Wick",
    age: 19
}

function getuser(user) {
    console.log("First Name: "+ user.firstName);
    console.log("Age: "+ user.age);
}

getuser(userObj);

function newgetter({firstName, age}) {
    console.log("First Name: "+ firstName);
    console.log("Age: "+ age);
}

newgetter(userObj);

// rest parameters

function addNumbers(...numbers){
    console.log(numbers);
}

addNumbers(1,2,3,4,5,6,7,8);

const rest_print = (a,b,...other) => {
    console.log(other);
}

rest_print(10,20,"hello", "how", "are","you")

const findMax = (a,b,...rest) => {
    console.log(Math.max(a,b,...rest));
}

findMax(1,2,3,4,5,6,7,2,22,3,132,4564,55668,578567,8,78)

// array functions

const carObj = {
    name: "Emmanuel",
    Age: 19,
    getName : function() {
        console.log(this.name)
    }
}

const result = carObj.getName()
console.log(result);


function simple(a,b){
    console.log(arguments)
}

simple(10,20)

const simple2 = (a,b) => {
    console.log(arguments)
}

try{
    simple2(10,20)
}
catch{
    console.log(Error);
}

function Person(name){
    this.name = name;
}

const ben = new Person("Emmanuel")
console.log(ben);

const Person2 = (name) => {
    this.name = name
}

try{
    const ben2 = new Person2("Ranjith")
}
catch(err){
    console.log(err);
}
finally{
    console.log("Thank you");
}

const add3 = (a,b) => {
    return a+b;
}

console.log(add3(100,200));

let months = ["jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

months.forEach((elements) => {
    for(i=0; i <numbers.length; i++){
        if (numbers[i % 2 == 0]){
            console.log(elements);
        }
        else{
            console.log('')
        }
    }
})

const userData = {
    name: "Arshiya",
    Age: 20
}

const UserInfo = user => ({name: user.name, Age: user.Age});
console.log(UserInfo(userData));

// Destructuring Objects

function displayUser(user) {
    return `${user.name} and ${user.Age}`
}

const user = displayUser(userData);
console.log(user)

const displayuser = user => ({name: `${user.name} loosu`, Age: user.Age})

console.log(displayuser(userData))

const display1 = ([name, Age] = ["John", 50]) => `${name} amd ${Age}`;
console.log(display1())

// Spread Operator

// 1. expand strings
console.log(...'Welcome')

//2.expand arrays
const array1 = [1,2,3,4,5,6,7,8,9]
console.log(...array1);
console.log(...months);


//3. combine arrays

const a = [1,2,3,4];
const b = [5,6,7,8];

const new_arr = a.concat(b);
console.log(new_arr);

console.log([...a, ...b])

//4. copying an array

const originalArray = ["Ranjith", "Ben", "Joe", "Kimmy"]
originalArray.push("Emmanuel") // Mutation

console.log(originalArray)

// copying through the slice method

const originalArray2 = ["Ranjith", "Ben", "Joe", "Kimmy"]

const newArr = [...originalArray2, "Emmanuel"]
console.log(newArr);

// 5. spread objects

const userDetails = {
    name: "Ben Affleck",
    Age: 45,
    Movies: ["Batman vs Superman", "Justice League"]
}

const userMore = {
    Marital_Status: "Married",
    NetWorth: "200 Million"
}

const newObj2 = Object.assign({}, userDetails, userMore)
console.log(newObj2)

console.log({...userDetails, ...userMore})