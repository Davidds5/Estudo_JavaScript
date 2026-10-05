const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log('evento foi enviado')

    const inputTest = form.querySelector('#input-test-1');
    const paragrafo = document.querySelector('p');

    paragrafo.textContent = inputTest.value;

});
