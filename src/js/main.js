const elements = {
    content: document.querySelector('#content'),
    sidenav: document.querySelector('.sidenav'),
    sidenavList: document.querySelectorAll('.sidenav li'),
    sidenavLink: document.querySelectorAll('.sidenav a'),
    buttonCard: document.querySelectorAll('#home-content .card'),
    inputList: document.querySelectorAll('input'),
};

document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(elements.sidenav);

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
            elements.inputList = document.querySelectorAll('input');

            elements.sidenavList.forEach((elm) => {
                if (elm.querySelector('a').getAttribute('href').substr(1) === page)
                    elm.classList.add('active');
                else elm.classList.remove('active');
            });
        });
};

loadPage(window.location.hash.substr(1));
