const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')
const dates = document.getElementsByClassName('date')

menuButton.addEventListener('click', (e) => {
    menu.classList.toggle('visible')
})

for (const input of dates) {
    input.addEventListener('focusin', (e) => e.target.type = 'date')
    input.addEventListener('focusout', (e) => e.target.type = 'text')
}
