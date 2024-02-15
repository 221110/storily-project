const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
hamburger.addEventListener('click', () => {
    document.querySelector('.navbar-link').style.right = '0';
})

close.addEventListener('click', () => {
    document.querySelector('.navbar-link').style.right = '-100%';
})

document.querySelectorAll('.navbar-link-item').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.navbar-link').style.right = '-100%';
    })  
});