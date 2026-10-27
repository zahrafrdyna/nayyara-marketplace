alert ("WELCOME TO MY STOREE!!")

const qtyplus= document.querySelector(".qty-plus");
const qtyvalue= document.querySelector(".qty-value");
const qtymin= document.querySelector(".qty-min")
const btnbuy= document.querySelector(".button-beli");
const cartValue = document.querySelector("#cart");

const btnbuys = document.querySelectorAll(".button-beli");
const qtyvalues = document.querySelectorAll(".qty-value");
const qtypluses = document.querySelectorAll (".qty-plus");
const qtyminuses = document.querySelectorAll (".qty-min");

qtypluses.forEach ((btn,i) => {
    btn.addEventListener("click",function (){
let jumlahBarang = parseInt(qtyvalues[i].value);
jumlahBarang=jumlahBarang +1;

qtyvalues[i].value = jumlahBarang;

    });
});


qtyminuses.forEach((btn,i)=>{
btn.addEventListener("click",function () {
let jumlahBarang = parseInt(qtyvalues[i].value);
jumlahBarang=jumlahBarang -1;

qtyvalues[i].value=jumlahBarang;
});
});

btnbuys.forEach((btn,i)=>{
    btn.addEventListener("click",function(){
        let jumlahBeli = parseInt(cartValue.textContent);
     jumlahBeli=jumlahBeli +parseInt(qtyvalues[i].value);

     cartValue.textContent = jumlahBeli;
    });
});


btnbuy.addEventListener("click",function(){
    let jumlahBeli = parseInt(cartValue.textcontent)
    jumlahBeli = jumlahBeli + parseInt(qtyvalue.value)

    cartValue.textContent = jumlahBeli
})