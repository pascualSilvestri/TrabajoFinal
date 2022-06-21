/* Variables */
const img = document.querySelectorAll(".img");
const  btn_cerrar = document.querySelector("#btn-cerrar");
const btn_atras = document.querySelector("#btn-atras");
const btn_adelante = document.querySelector("#btn-adelante");
const contPrincipal = document.querySelector("#contenedor-principal");
const imgActiva = document.querySelector(".img-interna");

let indiceImg = 0;

/* Abrir */

const abrir = (e) => {
    imgActiva.src = e.target.src;
    contPrincipal.style.display = "flex";
    indiceImg = Array.from(img).indexOf(e.target);
};

img.forEach(img => img.addEventListener("click", abrir));

/* Salir */
btn_cerrar.addEventListener("click", () => {
    contPrincipal.style.display = "none";
})


/* Adelante */
const adelantar = () => {
    if(indiceImg === img.length - 1){
        indiceImg = -1;
    }
    imgActiva.src = img[indiceImg + 1].src;
    indiceImg++;
};

btn_adelante.addEventListener("click", adelantar);


/* Atras */
const atrazar = () => {
    if(indiceImg === 0){
        indiceImg = img.length;
    }
    imgActiva.src = img[indiceImg - 1].src;
    indiceImg--;
};

btn_atras.addEventListener("click", atrazar);




/* Video */

const video = document.querySelectorAll("#videos-entregas");
const btnCer = document.querySelector("#btn-cer");
const btnAtr = document.querySelector("#btn-atr");
const btnAde = document.querySelector("#btn-ade");
const principal = document.querySelector(".principal");
const videoActivo = document.querySelector(".video-act");
let indiceVideo = 0;


/* Abrir */

const abre = (e) => {
    videoActivo.src = e.target.src;
    principal.style.display = "flex";
    indiceVideo = Array.from(img).indexOf(e.target);
};

video.forEach(video => video.addEventListener("click", abre));
/* Cerrar */


/* Adelante */


/* atras */