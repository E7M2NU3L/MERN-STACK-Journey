// creating ana array

// through the array literal 

const myarr = new Array("html", "css", "javascript");

const books = new Array("Harry potter", "Game of thrones", "Biomedical Instrumentation")
console.log(books[1])
console.log(books.slice(0,2))

const myFriends = new Array();
myFriends[0] = "Ranjith kumar";
myFriends[1] = "HArivansh";
myFriends[2] = "Jeevitha";
myFriends[3] = "Santhya";

console.log(myFriends)

// through square brackets

const family = ['Joshua B Arokiaraj', "Helan Victoria", "Mercy", "Suseela Mary"]
console.log(family)

const oldfriends = []

oldfriends[0] = "Harris Gowtham";
oldfriends[1] = "Sathish";
oldfriends[2] = "Nivashini";
oldfriends[3] = "Pavithra";

console.log(oldfriends)

const firstfriend = oldfriends[0];
console.log(firstfriend)

// iterating over an array

oldfriends.forEach(element => {
    console.log(element)
});

console.log("\nfamily members")
for(i = 0; i< family.length; i++){
    console.log(family[i]);
}

// array methods
books.push("Medical Imaging systems")
console.log(books)

books.pop()

books.unshift("Interstellar")
console.log(books)

books.shift()
console.log(books)

let book_index = books.indexOf("Game of thrones")
let unknown_index = books.indexOf("psychology")
console.log(book_index)
console.log(unknown_index)

let last_index = books.lastIndexOf("Game of thrones");
console.log(last_index);

var is_contains = books.includes("Game of thrones")
console.log(is_contains);

var reversed = books.reverse();
console.log(reversed);

// reduce method -> to return a single record within a 1000 record array
const produt_quantity = [12,30];

// reduce params = accumulator, currentvalue, currentindex, array
const ans = produt_quantity.reduce((accumulator, currentvalue, idx, array) => {
    return accumulator + currentvalue;
},0 // this is the accumulator initial value
)

console.log(ans);

// filter method

const ages = [10,22,24,35,43,50];

const minors = ages.find((value, idx) => {
    if(value <= 20){
        return idx+ " : "+ value;
    }
})

console.log(minors);

// find method

const agef = ages.filter((value, index, array) => {
    return value <= 30
})

console.log(agef)

// Coding Challenge-1

const numbers = new Array(1,2,3,4,5,6,7,8,9,10);

for(i = 0; i< numbers.length; i++){
    console.log(numbers[i])
}

//Coding Challenge -2

const stringArray = new Array("Arshiya", "Ranjith Kumar", "jeevitha", "Harivansh")

for(j = 0; j < stringArray.length; j++){
    console.log("This is string number: "+ stringArray.indexOf(stringArray[j]));
}

// Coding Challenge -3

function reverse_array(array){
    var reversed_array = array.reverse()
    console.log(reversed_array)
}

reverse_array(stringArray);

// Coding Challenge -4

function array_summer(array) {
    const total = array.reduce((acc, currentVal, idx, array) => {
        return acc +currentVal
    },0);
    return total;
} 

console.log(array_summer(ages))

// Coding Challenge -5

function array_averager(array) {
    const average = array.reduce((acc, value, index) => {
        return acc + value;
    },0)

    const answer =  average / array.length + "$";
    return answer.slice()
}

console.log(array_averager(ages));

// Coding challenge -6 

const array_test = [1,2,2,3,3,5,7,8,9,0,4,5,6,7]

function dup_remover(array) {
    const new_array = array.filter((value, index, origarray) => {
        return origarray.indexOf(value) === index;    
    })

    return new_array
}

console.log(dup_remover(array_test));

// Coding Challenge -7

var words = new Array("hi", "am", "oh", "Wow", "great");

function array_trim(array){
    const trimmed = array.filter((value, index, array) => {
        if (value.length < 3){
            return value
        }
    })
return trimmed
}

console.log(array_trim(words))