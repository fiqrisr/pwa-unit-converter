const elements = {
    content: document.querySelector('#content'),
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    loadPage('home');
});

const loadPage = (page) => {
    fetch(`./pages/${page}.html`)
        .then((response) => response.text())
        .then((html) => {
            elements.content.innerHTML = html;
        });
};
