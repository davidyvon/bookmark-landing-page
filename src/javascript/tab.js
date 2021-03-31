const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach((tabEl) => {
	tabEl.addEventListener('click', () => {
		const target = document.querySelector(tabEl.dataset.tabTarget)

		tabs.forEach((tab) => tab.classList.remove('active'))
		tabContents.forEach((tabContent) => tabContent.classList.remove('active'))

		tabEl.classList.add('active')
		target.classList.add('active')
	})
})
