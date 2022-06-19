let img = document.querySelectorAll(".img");
let img2 = document.querySelectorAll(".img-entregas");
for(let i = 0 ; i < img.length ; i++){
     img2[i].addEventListener("click", function(){
     img2[i].classList.toggle("activar");
     img[i].classList.toggle("activar2");
     });
}

let video = document.querySelectorAll(".videos-entregas");
let video2 = document.querySelectorAll(".videos");
for(let i = 0 ; i < img.length ; i++){
     video2[i].addEventListener("click", function(){
     video2[i].classList.toggle("activar");
     video[i].classList.toggle("activar2");
     });
}