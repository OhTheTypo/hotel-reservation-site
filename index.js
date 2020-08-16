const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')
const dates = document.getElementsByClassName('date')
const backToTopButton = document.getElementById('back-to-top')

menuButton.addEventListener('click', () => {
    menu.classList.toggle('visible')
})

for (const input of dates) {
    input.addEventListener('focusin', (e) => e.target.type = 'date')
    input.addEventListener('focusout', (e) => e.target.type = 'text')
}

backToTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0)
})
