const toggleBtn = document.querySelector('.navBar__toggleBtn');
const menu = document.querySelector('.navBar__menu');
const icon = document.querySelector('.navBar__icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});