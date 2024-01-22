let menu = document.querySelectorAll('#menu-icon');
let navlist = document.querySelectorAll('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}