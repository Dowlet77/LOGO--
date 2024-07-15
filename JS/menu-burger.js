const body = document.body
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
menuIcon.addEventListener('click',function(e){
    body.classList.toggle('lock')
    menu.classList.toggle('menu-open')
    menuBody.classList.toggle('active')
})