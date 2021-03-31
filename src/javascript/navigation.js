import logoImageMain from '../assets/static/logo-bookmark-main.svg'
import logoImageAlt from '../assets/static/logo-bookmark-nav.svg'

const nav = document.querySelector('.nav')
const menu = document.querySelector('.menu')
const menuControl = document.querySelector('.menu__control')
const logo = document.querySelector('.main-logo__image')

function toggleMenu() {
	if (nav.classList.toggle('show')) {
		logo.src = logoImageAlt
	} else {
		logo.src = logoImageMain
	}

	menuControl.classList.toggle('animate')
	menuControl.classList.toggle('switch-color')
}

menu.addEventListener('click', toggleMenu)
