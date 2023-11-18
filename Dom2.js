// form actiosn

const msg2 = document.querySelector(".actions")
const pName = document.querySelector(".pName")
const pPrice = document.querySelector(".pPrice")
const pQty = document.querySelector(".pQty")
const pDesc = document.querySelector(".pDesc")
const category = document.querySelector(".quantity")

// 1. onchange
pName.onchange = function(e) {
    console.log(e)
}

// 2. onSubmit

const form = document.querySelector("form")
form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Form has submitted")
    console.log(e);
    const name = pName.value
    const quantity = pQty.value
    const price = pPrice.value
    const desc = pDesc.value
    const pcategory = category.value
    
    const formDetails = {
        Username: name,
        ProdQty: quantity,
        ProdPrice : price,
        Description: desc,
        Category: pcategory
    }

    console.log(formDetails);
}

//2. OnReset

form.onreset = (e) => {
    e.preventDefault()
    console.log("Form has submitted")
    console.log(e);
    
    pName.value = ""
    pQty.value = ""
    pPrice.value = ""
    pDesc.value = ""
    category.value = ""

    const formRes = {
        Username: pName.value,
        ProdQty: pQty.value,
        ProdPrice : pPrice.value,
        Description: pDesc.value,
        Category: category.value
    }

    console.log(formRes);
}

// 3. onFocus

pName.onfocus = (e) => {
    console.log("the name element in the form is focused")
    msg2.textContent ="You are Typing...."
}

//4. onblur

pName.onblur = (e) => {
    msg2.textContent = "You Stopped Typing...."
}