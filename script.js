// ANO AUTOMÁTICO

const year = document.getElementById("year");

if(year){
year.textContent = new Date().getFullYear();
}


// FADE AO ROLAR

const fadeElements = document.querySelectorAll(".fadein");

if ("IntersectionObserver" in window){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{threshold:0.2});

fadeElements.forEach(el=>observer.observe(el));

}


// MENU MOBILE

const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("primary-nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("open");

});

}


// HERO SLIDER

const slider = document.querySelector(".hero-slider");

if(slider){

const images = [

"img/doce2.jpeg",
"img/mesa.png",
"img/salgado2.jpeg",
"img/doce4.jpeg",
"img/doce1.png",
"img/maionese.jpeg",
"img/doce3.jpeg",
"img/ultimodoce.jpeg",
"img/final1.jpeg",
"img/final2.jpeg",
"img/salgado.jpeg",
"img/mesas.png"

];

let current = 0;

function changeSlide(){

slider.classList.remove("active");

setTimeout(()=>{

slider.style.backgroundImage = `url(${images[current]})`;

slider.classList.add("active");

current++;

if(current >= images.length){
current = 0;
}

},400);

}

changeSlide();

setInterval(changeSlide,5000);

}

/* LIGHTBOX GALERIA */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".lightbox-close");

galleryImages.forEach(img => {

img.addEventListener("click", ()=>{

lightbox.classList.add("show");
lightboxImg.src = img.src;

});

});

closeLightbox.addEventListener("click", ()=>{

lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

if(e.target === lightbox){
lightbox.classList.remove("show");
}

});