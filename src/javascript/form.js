const form = document.querySelector('.contact-form__input-container')
const email = document.querySelector('.contact-form__input')
const errorMessage = document.querySelector('.contact-form__error-message')

email.addEventListener('keyup', () => {
	if (email.validity.typeMismatch) {
		form.classList.add('invalid')
		errorMessage.style.display = 'flex'
	} else {
		email.setCustomValidity('')
		errorMessage.style.display = 'none'
	}
})
