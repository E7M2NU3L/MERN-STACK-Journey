console.log("Welcome to Objects in Javascript")

// Objects in Javascript
const person = new Object();

// adding props to the created object
person.name = "Emmanuel"
person.age = 19
person.race = "Indian"
person.education = "Biomedical Enginner"
person.gender = "male"
person.isMarried = false
person.cgpa = 8.62

console.log(person);

// another nethod

const friend = new Object({
    name: "Ranjith Kumar",
    age: 18,
    personMarried : false,
    education: "PhD in Orthopaedics"
})

console.log(friend)

// Object literal Syntax

const Game = {}; // to add props

Game.name = "GTA San Andreas"
Game.quality = "Excellent"
Game.backstory = 9.3
Game.genre = ["Adventure", "Gangster"]

const Nofap = {
    day: 7,
    triggers: "more",
    WinningChance: "100%"
};

console.log(Game);
console.log(Nofap);

// Accessing Object Properties

console.log(person.name);
console.log(person["age"]);

//Updating Records in a Object

person.name = "Ranjith Kumar"
person.age = 20

person["education"] = "B.E Eletrical Engineering"
console.log(person)

// Deleting the props in a Objet

delete person.age
console.log(person)

delete Game["name"]
console.log(Game);

// Adding methods to the objects

person.lastname = "Boss"

person.printFullName = () => {
    console.log(this)
    console.log(`${person.name} ${person.lastname} is my full name`)
}

person.printFullName()

// this keyword

Game.name = "GTA Vice City"

Game.getgameinfo = function() {
    console.log(`Game: ${this.name} in which the backstory is established at ${this.backstory} rating`)
}

Game.getgameinfo()

const cartoon = {
    name: "Dora",
    lastName: "Bujji",
    fullname: function() {
        console.log(this.name + this.lastName)
    },
    rating: 8.3,
    IsAdmin: true,
    status: false,

    checkStatus:  function() {
        if(this.status === false){
            delete this.IsAdmin
        }
        else{
            this.status = true,
            this.IsAdmin = true
        }
    }
}

// Iterating Over an Object

// 1. for in loop
for (let key in person){
    console.log(key);
} 

// 2. object.keys
const myKeys = Object.keys(person);
console.log(myKeys);

myKeys.forEach(element => {
    console.log(element)
});

// 3. object.values
const myValues = Object.values(person);
console.log(myValues);

// 4. object.entries
const myEntries = Object.entries(person);
console.log(myEntries);

myEntries.forEach(function(data){
    console.log(data[0]+ " : "+ data[1]);
})

myEntries.forEach(([key, value]) => {
    console.log(key+" : " +value)
})

// Coding Challenge -1

const User = new Object({
    name: "John",
    age: "30",
    Location: "New York"
})

User.printInfo = function(){
    console.log(`name: ${this.name}, age: ${this.age}`);
}

User.printInfo()
console.log(User);

// Coding Challenge -2

User.married = true

User.isMarried = function(){
    if(this.married === true){
        var status = "Married"
    }
    console.log(`${this.name} is ${status}`)
}

User.isMarried()

// Coding Challenge -3

User.keyvalprint = function() {
    const keys = Object.entries(User);

    keys.forEach((element, values) => {
        console.log(element+ ":"+ values)
    })
}

User.keyvalprint();