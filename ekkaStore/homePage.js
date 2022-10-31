let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
window.addEventListener("scroll",()=>{
    if(window.scrollY >200){
        mybutton.classList.add("active");
    }else{
        mybutton.classList.remove("active")
    }
})
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Active bg filter
// document.querySelector('.')

var head = document.getElementById("nav");
var nav = document.getElementById("con2").style;
window.onscroll=()=>{
    if(window.pageYOffset > head.offsetHeight){
        nav.position="fixed"
        nav.top="0"
    }else{
        nav.position=""
        nav.top=""
    }
}
const drop = document.getElementById("drop");
const ClickDrop =()=>{
    drop.style.display="block"
    drop.style.backgroundColor="pink"
    drop.style.transition="2s"
}
const MoveClick=()=>{
drop.style.display="none"
    drop.style.backgroundColor="pink"
}

const sli1 = document.getElementById("slide-1")
const sli2 = document.getElementById("slide-2")
const sli3 = document.getElementById("slide-3")
    const change1=()=>{
        sli1.style.display="block";
        sli2.style.display="none";
        sli3.style.display="none";
    }
    const change2=()=>{
        sli2.style.display="block";
        sli1.style.display="none";
        sli3.style.display="none";
    }
    const change3=()=>{
        sli3.style.display="block";
        sli1.style.display="none";
        sli2.style.display="none";
    }

    