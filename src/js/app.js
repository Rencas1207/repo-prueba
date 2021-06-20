const form = document.querySelector('.form');

form.addEventListener('submit', e => {
   e.preventDefault();
   location.href = '../formulario.html';
});