let  menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}