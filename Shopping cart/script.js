let products = [{
    image: "images/flute.jpg",
    name: "Flute",
    price: 26,
    quantity: 1
},{
    image: "images/guitar.jpg",
    name: "Guitar",
    price: 149,
    quantity: 1
},{
    image: "images/piano.jpg",
    name: "Piano",
    price: 4898,
    quantity: 1
}];

let content = document.getElementById("content");

for (let instrument of products) {
    content.innerHTML +=`
    <img src="${instrument.image}" alt="${instrument.name}">
    <p>${instrument.name}</p>
    <p>${instrument.price} €</p>
    <input type="submit" value="Add to cart" class="addButton">
    <hr>
    `
}
let addButton = document.getElementsByClassName("addButton");
let checkout = document.getElementById("checkout");
let cart = [];

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click",function() {
       if (cart.find((value) => value.name == products[i].name)){
        cart[i].quantity++;
        console.table(cart);
       }else{
        cart.push(products[i]);
        console.table(cart);
    }
    checkout.innerHTML = "";
        for (let cartItem of cart) {
            checkout.innerHTML +=`
            <div class="cartItem">
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <p>${cartItem.name}</p>
            <p>${cartItem.price} €</p>
            <p>Quanity: ${cartItem.quantity}</p>
            </div>
            `
        }
    })
    
}
