elements = {
    content: document.querySelector('#content'),
    sidenav: document.querySelector('.sidenav'),
    sidenavLink: document.querySelectorAll('.sidenav a'),
    buttonCard: document.querySelectorAll('#home-content .card'),
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    elements.sidenavLink.forEach((elm) => {
        elm.addEventListener('click', (event) => {
            M.Sidenav.getInstance(elements.sidenav).close();
            page = event.target.getAttribute('href').substr(1);
            loadPage(page);
        });
    });
});

const loadPage = (page) => {
    if (page === '') page = 'home';

    fetch(`./pages/${page}.html`)
        .then((response) => response.text())
        .then((html) => {
            elements.content.innerHTML = html;
        });
};

loadPage(window.location.hash.substr(1));
