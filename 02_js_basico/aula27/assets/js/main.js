
// aqui nos buscamos o id form no formulario no index html
const form = document.querySelector('#form');


// aqui nos pegamos esse form e colocamos um obersado(escutador) de eventos, que vai escutar o evento
// de submit ou seja qual evento o formulario receber ele vai chamar a function abaixo
// o paramentro (e) recebe o evento
form.addEventListener('submit', function (e) {
    // aqui nos prevenimos o evento padrao do formulario que e de recarregar a pagina
    e.preventDefault();
    console.log('Evento evitado')

    // aqui nos pegamos o id peso e altura do formulario
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    // aqui nos convertemos o valor do input para numero
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //aqui nos verificamos se o peso e a altura sao validos
    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Invalida', false);
        return;
    }

    // aqui nos calculamos o imc e o nivel de imc
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} e vc esta com (${nivelImc})`;
    setResultado(msg, true);

});



function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    //limpando a div antes de adicionar um novo elemento
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = msg;

    p.classList.add(isValid ? 'paragrafo-resultado' : 'bad');
    resultado.appendChild(p)

}



function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2)
}


function getNivelImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return 'peso normal';
    }
    if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso'
    }
    if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1';

    }
    if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau 2';

    }
    if (imc >= 40) {
        return 'Obesidade grau 3';
    }

}


