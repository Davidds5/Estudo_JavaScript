let numero = Number(prompt("Digite um numero: "));

const numeroTitulo = document.getElementById("numero-id");
const texto = document.getElementById("texto")

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada do numero ${numero ** 0.5}</p>
                   <p>O numero e inteiro? ${Number.isInteger(numero)}
                   <p>E NaN?${Number.isNaN(numero)}</p>
                   <p>Arrendondando para cima: ${Math.ceil(numero)}</p>
                   <p>Arredondando para baixo: ${Math.floor(numero)}</p>
                   <p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
    ;


