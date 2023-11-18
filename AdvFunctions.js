// visibilities of variables and functions

let number = 100 // global scope

function findTotal() { // local scope
    // function scope
    const arr = [3,4,5,6]; 
    let total = 0;

    for (let i = 0; i< arr.length; i++){
        // block scope
        let msg = "The loop has run "+ i+ " times";
        console.log(total += arr[i]);
        console.log(msg);
    }
}

findTotal();

// global scope

let user = {
    name: "Ben",
    age: 20
}

function getuserInfo(){
    console.log(`${user.name} and ${user.age}`)
}

getuserInfo();

function changeuserInfo(){
    user.name = 'John',
    user.age = 25
}

changeuserInfo();
getuserInfo();

// block scope

let age = 30;

if (age > 30){
    let msg = "you are old enough" // block scope
    console.log(msg)
}

// function scope

const myFunction = () => {
    let x = "hello";
    console.log(x);
}

myFunction();

// Lexical scope

const func1 = () => {
    let msg = "this is from the function1"
    console.log(msg)
    function func2(){
        msg1 = "this is from the function2"
        console.log(msg)
        console.log(msg1)
        function func3(){
            console.log(msg)
            console.log(msg1)
        }
        func3();
    }
    func2();
}

func1()

// first class function vs higher order function
// Higher Order Functions
//1. functions returning function

const addTwoNums = () => {
    return function(a,b){
        return a + b
    }
}

const answer = addTwoNums();
console.log(answer(2,2))

console.log(addTwoNums()(3,6));

//2. assign function to a variable

function sayHi(){
    console.log("Hi Ranjith");
}

const result = sayHi;
result();

// 3. Store function in an array

function sayHello(){
    console.log("Hello Harivansh");
}

function sayhowru(){
    console.log("How are You");
}

const funcholders = [sayHello, sayhowru];

funcholders[0]();
funcholders[1]();

// Higher Order Function-> Callback Functions , a function that has been passed into another function as an argument

// reduce, find, filter, map

const nums = [1,2,3,4,5]

nums.find((num, index, array) => {
    console.log(num);
})

nums.reduce((prev, current, currentIdx) => {
    console.log(prev);
    return prev + current
},0)

// function used in another function

const calcbill = (qty, price) =>{
    return qty * price;
}

const displaybill = (callback) => {
    console.log(callback);
}

displaybill(calcbill(10,2))

// function returning a function

function add2nums(a){
    return function(b){
        console.log("its called");
        return a + b;
    }
}

const firstfunc = add2nums(10);
const secondfunc = firstfunc(20);

console.log(secondfunc);

console.log(add2nums(20)(4));


const addnum2 = a => {
    return b => a+b
}

console.log(addnum2(2)(1))

// Immediately invoked function expression

function logHello(){
    console.log("Hello");
}

logHello();

(function() {
    console.log("Hello")
})();

(() => {
    console.log("Hello Again")
})();
