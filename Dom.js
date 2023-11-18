// tree structure which represents the html document , it is an built in APi for our browsers

// DOM node -> individual part of the document in a DOM tree

console.log("javascript Connected")
console.log(document.body);
console.log(document.head);
console.log(document.title);

// select elements in the document body

console.log(document.body.children);
console.log(document.body.firstElementChild.innerHTML)
console.log(document.body.lastElementChild);
console.log(document.body.childElementCount);

// Dom selectors

// single selectors

const MainHeader = document.getElementById("title");
console.log(MainHeader)

const mainpara = document.querySelector(".para-prog");
console.log(mainpara)

// Multiple Selectors

const biggerHeaders = document.getElementsByTagName("h1");
console.log(biggerHeaders)

const paraClass = document.getElementsByClassName("para");
console.log(paraClass);

const formInput = document.getElementsByName("email");
console.log(formInput);

const paraquery = document.querySelectorAll(".para");
console.log(paraquery);

// changing element props

// 1. Maipulating Element style

const para = document.getElementById("select");

para.style.background = "linear-gradient(lightpink, lightcoral)"
para.style.margin = 0
para.style.padding = "20px"
para.style.fontFamily = "sans-serif"
para.style.color = "red"
para.style.letterSpacing = "5px"

const computedStyle = getComputedStyle(para).color;
console.log(computedStyle);

const listItems = document.getElementsByTagName("li");
console.log(listItems.length)

// spreading the html element into an array

const convertlists = [...listItems];
convertlists.forEach((element) => {
    console.log(element.innerHTML)
    element.style.color = "red"
    element.style.backgroundColor = "lightpink"
    element.style.listStyle = "none"
    element.style.margin = 0
    element.style.textAlign = "center"
    element.style.padding = "1.2rem"
    if (element.innerHTML === "Python"){
        element.style.textDecoration = "line-through"
    }
})

// Classlist method

//1. Classlist.add()

const h2Network = document.getElementById("Network");
h2Network.classList.add("error")

//2. classlist.remove()

h2Network.classList.remove("error")

// adding and removing contents

const coding = document.getElementById("coding");
coding.classList.add("code-explain")

coding.innerHTML = "<h1>What's Up Guys</h1>"

// Dom Events

//1. selecting the elements in the html

const mleave = document.querySelector(".mLeave")
const mout = document.querySelector(".mOut")
const mover = document.querySelector(".mOver")
const menter = document.querySelector(".mEnter")
const mup = document.querySelector(".mUp")
const mmove = document.querySelector(".mMove")
const mclick = document.querySelector(".mClick")
const moverclick = document.querySelector(".mOverClick")
const mwheel = document.querySelector(".mWheel")
const mdown = document.querySelector(".mDown")
const msg = document.querySelector(".msg");

// 2. add event listeners

mleave.addEventListener("mouseleave", () => {
    msg.textContent = "Yeah, the Mouse Has Left"
})

mout.addEventListener("mouseout", () => {
    msg.textContent = "The mouse is out of the button"
})

mup.addEventListener("mouseup", () => {
    msg.textContent = "The mouse has moved up to the button"
})

mover.addEventListener("mouseover", () => {
    msg.textContent = "The Mouse is over the button"
})

menter.addEventListener("mouseenter", () => {
    msg.textContent = "The mouse has entered the button"
})

mmove.addEventListener("mousemove", () => {
    msg.textContent = "The mouse is moving inside the button"
})

mclick.addEventListener("click", () => {
    msg.textContent = "You have clicked the button"
})

moverclick.addEventListener("dblclick", () => {
    msg.textContent = "The mouse got clicked when it is over the button"
})

mwheel.addEventListener("wheel", () => {
    msg.textContent = "Wheeling the Mouse"
})

mdown.addEventListener("mousedown", () => {
    msg.textContent = "The mouse gone down the button"
})

// keyboard actions

const bodyel = document.getElementById("content");
console.log(bodyel)
const h1 = document.getElementById("h1")
console.log(h1)

document.body.addEventListener('keydown' ,(e) => {
    h1.innerText = `You are pressing ${e.key}`
})

document.body.addEventListener("keyup", () => {
    h1.innerText = "You released the Key"
})

