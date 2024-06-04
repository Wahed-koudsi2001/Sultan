document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelector('.bars');
    const sidebar = document.getElementById('sidebar');

    bars.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        bars.classList.toggle('active');

    });
});

