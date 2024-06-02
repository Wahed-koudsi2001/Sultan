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

document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelector('.logos');
    const prev = document.querySelector('.icons-prev');
    const next = document.querySelector('.icons-next');
    const logoWidth = logos.querySelector('img').clientWidth;
    const totalLogos = logos.children.length;
    const visibleLogos = 4;
    let scrollAmount = 0;

    next.addEventListener('click', () => {
        if (scrollAmount <= -(totalLogos - visibleLogos) * logoWidth) {
            scrollAmount = 0;
        } else {
            scrollAmount -= logoWidth;
        }
        logos.style.transform = `translateX(${scrollAmount}px)`;
    });

    prev.addEventListener('click', () => {
        if (scrollAmount >= 0) {
            scrollAmount = -(totalLogos - visibleLogos) * logoWidth;
        } else {
            scrollAmount += logoWidth;
        }
        logos.style.transform = `translateX(${scrollAmount}px)`;
    });
});

const swiper = new Swiper('.mySwiper', {
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 5
        },
    },
    grabCursor: true,
    loop: true
});

const swiper2 = new Swiper('.mySwiper-2', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
    },
    grabCursor: true,
    loop: true
});

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    // Set a timeout to hide the preloader after 2 seconds
    setTimeout(function () {
        document.getElementById('preloader-active').style.display = 'none';
        document.body.classList.remove('no-scroll'); // Re-enable scrolling
    }, 2000); // 2000 milliseconds = 2 seconds
});