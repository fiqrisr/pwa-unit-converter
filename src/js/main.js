import { convertInput } from './converter.js';

const elements = {
    content: document.querySelector('#content'),
    sidenav: document.querySelector('.sidenav'),
    sidenavList: document.querySelectorAll('.sidenav li'),
    sidenavLink: document.querySelectorAll('.sidenav a'),
};

document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(elements.sidenav);

    elements.sidenavLink.forEach((elm) => {
        elm.addEventListener('click', (event) => {
            M.Sidenav.getInstance(elements.sidenav).close();

            loadPage(event.target.getAttribute('href').substr(1));
        });
    });
});

const loadPage = (page) => {
    if (page === '') page = 'home';

    fetch(`./pages/${page}.html`)
        .then((response) => response.text())
        .then((html) => {
            elements.content.innerHTML = html;

            window.inputList = document.querySelectorAll('input');
            convertInput(window.inputList);

            elements.sidenavList.forEach((elm) => {
                if (elm.querySelector('a').getAttribute('href').substr(1) === page)
                    elm.classList.add('active');
                else elm.classList.remove('active');
            });
        });
};

loadPage(window.location.hash.substr(1));
