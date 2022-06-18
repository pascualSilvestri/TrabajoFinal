let img = document.querySelectorAll(".img");
let img2 = document.querySelectorAll(".img-entregas");
for(let i = 0 ; i < img.length ; i++){
     img2[i].addEventListener("click", function(){
     img2[i].classList.toggle("activar");
     });
}

for(let i = 0 ; i < img.length ; i++){
    img[i].addEventListener("click", function(){
    img[i].classList.toggle("activar2");
    });
}