document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

