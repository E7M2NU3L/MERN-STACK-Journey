// visibilities of variables and functions

let number = 100 // global scope

function findTotal() { // local scope
    // function scope
    const arr = [3,4,5,6]; 
    let total = 0;

    for (let i = 0; i< arr.length; i++){
        // block scope
        let msg = "The loop has run "+ i+ " times";
        total += arr[i];
    }
}

findTotal();