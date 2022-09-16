const botaoMenu = document.querySelector('.nav-menu')
const menu = document.querySelector('.menu-laterel-mobile')
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const botaoMenu2 = document.querySelector('.nav-menu-fechar')
const menu2 = document.querySelector('.menu-laterel-mobile')
botaoMenu2.addEventListener('click', () => {
    menu2.classList.toggle('menu-lateral--ativo')
})