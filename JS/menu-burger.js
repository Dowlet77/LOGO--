const body = document.body
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
menuIcon.addEventListener('click', function (e) {
    menuBody.classList.toggle('_active')
    menuIcon.classList.toggle('_active')
    body.classList.toggle('_lock')
})

