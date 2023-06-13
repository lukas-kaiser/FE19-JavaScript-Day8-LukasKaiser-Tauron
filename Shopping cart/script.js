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
let totalElement = document.getElementById("total");
let minus = document.getElementsByClassName("minus");
let plus = document.getElementsByClassName("plus");
let num = document.getElementsByClassName("num");

let cart = [];

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click",function() {
       if (cart.find((value) => value.name == products[i].name)){
        products[i].quantity++;
       }else{
        cart.push(products[i]);
    }
    checkout.innerHTML = "";
        for (let cartItem of cart) {
            checkout.innerHTML +=`
            <div class="cartItem">
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <p>${cartItem.name}</p>
            <p>${cartItem.price} €</p>
            <p>Quantity: <span class="minus">-</span> <span class="num">${cartItem.quantity}</span> <span class="plus">+</span></p>
            </div>
            `;
            for (let i = 0; i < plus.length; i++) {
                plus[i].addEventListener("click",function() {
               cart[i].quantity++;
               num[i].innerHTML = cart[i].quantity;
               console.table(cart);
               sumCart();
            })
            minus[i].addEventListener("click",function() {
                if (cart[i].quantity == 1){
                 cart.splice(i, 1);
                 checkout.innerHTML = "";
                 for (let cartItem of cart) {
                    checkout.innerHTML +=`
                    <div class="cartItem">
                    <img src="${cartItem.image}" alt="${cartItem.name}">
                    <p>${cartItem.name}</p>
                    <p>${cartItem.price} €</p>
                    <p>Quantity: <span class="minus">-</span> <span class="num">${cartItem.quantity}</span> <span class="plus">+</span></p>
                    </div>
                    `;};
                }else{
                 cart[i].quantity--;
                num[i].innerHTML = cart[i].quantity;}
                console.table(cart);
                sumCart();
                 }
                )
            };
            sumCart();
        }
    })
}
function sumCart(){
    let total = 0;
    for (let cartItem of cart) {
        total = total + (cartItem.price * cartItem.quantity);        
    }
    totalElement.innerHTML = `Total: ${total} €`;
        };

