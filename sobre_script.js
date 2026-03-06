const year = document.getElementById("year");

if(year){
year.textContent = new Date().getFullYear();
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(!prefersReduced && "IntersectionObserver" in window){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{threshold:0.12});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});

}
