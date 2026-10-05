
/**
 * alert so gera um alerta em cima da tela
 * confirm gera um quadrado que retorna true ou false, true se for ok e false se for cancelar
 * prompt ultilizado para o usuario digitar
 */

// o prompt sempre ira retorna uma string
let numero1 = prompt("Informe o primeiro numero: ")
let numero2 = prompt("Informe o segundo numero: ")

numero1 = Number(numero1)
numero2 = Number(numero2)

const resultado = numero1 + numero2;

console.log(`O resultado da sua conta foi de ${resultado}`)
