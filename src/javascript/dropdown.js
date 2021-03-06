const buttons = document.querySelectorAll('.dropdown__control')

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		button.classList.toggle('active')

		const content = button.nextElementSibling

		if (content.style.maxHeight) {
			content.style.maxHeight = null
		} else {
			content.style.maxHeight = `${content.scrollHeight}px`
		}
	})
})
