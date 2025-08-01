// Navaigation Bar
let menuBtn = document.getElementById('menu-btn');
let menuClose = document.getElementById('menu-close');

menuBtn.addEventListener('click', function() {
    document.querySelector('.navigation').classList.add('active');
});
menuClose.addEventListener('click', function() {
    document.querySelector('.navigation').classList.remove('active');
});



     