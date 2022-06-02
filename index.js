let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
}

function imgSlider (anything){
    document.querySelector('.pepsi').src = anything;
}
function changeBgColor (color){
    const lp = document.querySelector('.lp');
    lp.style.background = color;
}