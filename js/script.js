//-------------Menu mobile------------

let mobileButton = document.getElementsByClassName("icon-menu")[0];
let dropMobile = document.getElementsByClassName("drop-mobile")[0];
let closeMobile = document.querySelectorAll(".drop-mobile .icon-close")[0];

//Quando clicar no "X" o menu some.

closeMobile.onclick = function () {
    dropMobile.style.display = "none";
}

//Quando clicar nas "Hamburguer Menu Bar" o menu mobile aparece.

mobileButton.onclick = function () {
    dropMobile.style.display = "block";
}

//--------Lightbox desenvolvido com Vanilla JS---------

let close = document.querySelectorAll(".lightbox .icon-close")[0];
let lightbox = document.getElementsByClassName("lightbox")[0];
let lightboxImg = document.querySelectorAll(".lightbox img")[0];
let product = document.getElementsByClassName("product");

//Quando clicar no "X" o lighbox some.

close.onclick = function () {
    lightbox.style.display = "none";
}

//Quando clicar em qualquer produto, ele abre o Lightbox com a respectiva imagem.

for (let i = 0; i < product.length; i++) {
    product[i].onclick = (function (indiceDoElemento) {
        return function () {
            let titleVal = this.nextElementSibling.textContent;
            let title = lightbox.children[0].children[1].children[1].children[0];
            let priceVal = this.nextElementSibling.nextElementSibling.textContent;
            let price = lightbox.children[0].children[1].children[1].children[7];
            let effectVal = this.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
            let effect = lightbox.children[0].children[1].children[1].children[2];
            effect.innerText = effectVal;
            price.innerText = priceVal;
            title.innerText = titleVal;
            lightboxImg.src = this.src;
            lightbox.style.display = "block";
        }
    }(i));
}

$(document).ready(function () {
   $.getJSON(
       "potions.json",
       function(data){
           var d = data.potions;
           var potions = $(".product");
           console.log(d);
           for( let i = 0; i < potions.length; i++){
               $(".name").eq(i).text(d[i + 1].name);
               $(".price").eq(i).text(d[i + 1].price);
           }
       }
   )
    
});
