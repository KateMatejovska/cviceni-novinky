const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = '#e9e9e9';

const newsEl = document.querySelector('.news');
newsEl.style.backgroundColor = 'white';
newsEl.style.maxWidth = '60 rem';

const hlavniNadpisEl = document.querySelector('h1');
hlavniNadpisEl.classList.add('news__title');
hlavniNadpisEl.textContent = 'Aktuální novinky';

const prvniZpravaEl = document.getElementById('zprava1');
prvniZpravaEl.classList.add('post--main');

const tretiZpravaEl = document.querySelector('#zprava3 img');
tretiZpravaEl.src = 'images/zprava3-novy.jpg';