// Math Object

// Absolte

const vector_1 = [1,0,-2,5]

const sub_vector_1 = [2,3,5,4]
const sub_vector_2 = [4,3,5,4]

var norm_sub_1 = []

num_1 = []
den_1 = []

for (i = 0; i<vector_1.length; i++){
    num_1.push(vector_1[i] * sub_vector_1[i])
    den_1.push(Math.pow(sub_vector_1[i], 2))
}

console.log(den_1)

var den_hold = []

den_1.reduce((acc, currVal) => {
    let store = acc+currVal
    den_hold.push(Math.sqrt(store))
},0)

const floor = Math.floor(5.9)
console.log(floor)

const ceil = Math.ceil(8.1)
console.log(ceil)

const obs = Math.abs(-89.32)
console.log(obs)

const round = Math.round(8.1)
console.log(round)

const min = Math.max(9,10)
console.log(min)

const random = Math.random();
console.log(random);

const random1 = Math.random() * (89-23 +1) + 23;
console.log(Math.floor(random1))

// Coding challenge-1

const find_maximum = (num1, num2) => {
    return Math.max(num1, num2);
}

const find_minimum = (num1, num2) => {
    return Math.min(num1, num2);
}

console.log(find_maximum(3,7))
console.log(find_minimum(3,9))

// Coding challenge-2

const find_avreage = (num1, num2) => {
    if (Number(num1) && Number(num2)){
        return Math.floor((num1 + num2) / 2);
    }
    else{
        console.log("please provide a number")
    }
}

console.log(find_avreage(9.276536573, 7.2073853762))


// Coding Challenge-3

const return_random = (num1, num2) => {
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);

    if(num1 == num2){
        console.log("entering a same range to generate a random number returns 0");
        console.log("give a proper range")
    }

    else{
        return Math.round(Math.random() * (max - min +1) +min)
    }
}

console.log(return_random(10,20))

// Coding achellenge -4

const guess = (input) => {
    if (input == Math.floor(Math.random())){
        console.log("Correct")
    }

    else{
        console.log("Try Again")
    }
} 