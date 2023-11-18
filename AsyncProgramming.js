// synchronous Programming

console.log("Hello")
// alert("How are you")
console.log("Good Bye")

// Asynchronous Programming

// 1. setTimeout

setTimeout(() => {
    console.log("Hello")
},5000)

const msg = () => {
    console.log("I Don't Care")
}
setTimeout(msg, 3000)

// 2. Callback Function

function sayHello(callbackfn){
    console.log("Hello");
    callbackfn();
}

// posts

const postData = [
    {
        title: "title 1",
        desc: "desc 1"
    },
    {
        title: "title 2",
        desc: "desc 2"
    },
    {
        title: "title 3",
        desc: "desc 3"
    },
    {
        title: "title 4",
        desc: "desc 4"
    }
]

// fetch all posts

function fetchPosts(){
    console.log("Post if Fetching");
    console.log(postData);
}

fetchPosts();

// create post

function createPosts(post, callback){
    setTimeout(() => {
        postData.push(post)
        callback();
    }, 5000)
}

createPosts({
    title: "title 5",
    desc: "desc 5"
}, function () {
    console.log("I am a callback and i will be caled after 5 seconds")
    fetchPosts();
})

// 3. Promise

const Userpromise = new Promise((resolve, reject) => {
    
// simple database fetching scenario
    let user = {
        name: "John",
        city: "Chennai"
    };
    const states = [true, false]
    let isFetched = states[Math.round(Math.random() * 2)];

// if the promise succeeded
    if (isFetched){
        resolve(user);
    }
    
// if the promise gets rejected
    else{
        reject("Error Fetching User, Try Again");
    }
})

Userpromise.then((value) => {
    // .then() is used to get the value from resolve function from promise
    console.log("Any value", value);
}).catch((error) => {
    console.log("Some error: "+error)
})

// function returning a promise

function getUser() {
    const promise = new Promise((resolve, reject) => {
        let user = {
            name: "John",
            city: "Chennai"
        };
        const states = [true, false]
        let isFetched = states[Math.round(Math.random() * 2)];

        if (isFetched){
        resolve(user);
        }    
        else{
        reject("Error Fetching User, Try Again");
        }
    });

    return promise;
}

const result = getUser().then((process) => {console.log(process)}).catch((error) => {
    console.log(error)
})
console.log(result);

// promise.aal() and promise.race()

// 1. Fetch all posts
// 2. fetch all comments associated with the post

const postPromise = new Promise ((resolve, reject) => {
    let postFetched = true;
    let post = {
        title: "title 1",
        desc: "Description 1"
    };

    if(postFetched){
        resolve(post);
    }
    else{
        reject("Error Fetching in posts");
    }
})

const commentPromise = new Promise ((resolve, reject) => {
    let postFetched = true;
    let comment = {
        user: "Candy",
        desc: "Excellenet Post"
    };

    if(postFetched){
        resolve(comment);
    }
    else{
        reject("Error fetcging in the Comment Data");
    }
})

Promise.all([postPromise, commentPromise]).then((allpromises) => {
    console.log(allpromises[0]);
    console.log(allpromises[1]);   
}).catch((error) => {
    console.log(error);
});

Promise.race([postPromise, commentPromise]).then((data) => {
console.log(data)
}).catch((err) => {
    console.log(err)
})

// Async Await

// async function returns a promise, use try and catch to handle succes and failures

const makeAPIRequest = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // resolve and reject
            let isFetched = true
            let user = {
                name: "Nikki",
                age: 25
            }
            if(isFetched){
                resolve(user);
            }
            else{
                reject("Error Fetching user");
            }
        }, 5000)
    })
}

async function fetcher() {
    try{
        const res = await makeAPIRequest();
        console.log(res);
    }
    catch(e){
        console.log(e)
    }
    }

fetcher();
