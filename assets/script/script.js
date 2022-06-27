function abrirmenu() {
    let nav = document.getElementById('nav');

    if(nav.classList.contains('open-menu') == true) {
        nav.classList.remove('open-menu');
    } else {
        nav.classList.add('open-menu');
    }
}

