// =========================
// Typing Effect
// =========================

const text = [
"Frontend Developer",
"HTML | CSS | JavaScript",
"Always Learning 🚀"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){

count = 0;

}

currentText = text[count];

letter = currentText.slice(0, ++index);

const heading = document.querySelector(".hero-text h2");

if(heading){

heading.textContent = letter;

}

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type,1200);

}else{

setTimeout(type,90);

}

})();
// =========================
// Scroll To Top
// =========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =========================
// Reveal Animation
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(50px)";

sec.style.transition=".8s";

observer.observe(sec);

});