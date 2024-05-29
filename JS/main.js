window.addEventListener('scroll', function () {
    const nav_2 = document.querySelector('.nav-2');
    const nav = document.querySelector('.nav-3');
    if (window.scrollY > 70) {
        nav.classList.add('active');
        nav_2.classList.add('active');
    } else {
        nav.classList.remove('active');
        nav_2.classList.remove('active');
    }
});


document.querySelector('.bars').addEventListener('click', function () {
    var nav4 = document.querySelector('.nav-4');
    var icon = document.querySelector('.bars i');

    nav4.classList.toggle('active');

    if (nav4.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});