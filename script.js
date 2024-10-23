
const navbar = document.getElementById('navbar')
const closeMenu = document.getElementById('close')
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    navbar.classList.add('active')
})
closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active')
})

window.addEventListener('scroll', skillsactive)


const header = document.getElementById('header')
const HeaderActive = () => {
    if (window.scrollY >100) {
        header.classList.add('active')
    }else {
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', HeaderActive)
