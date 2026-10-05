/** 
 * tipos primitivos
 */

const nome = "Luis"; // string
const nome1 = 'Luiz';//string
const nome3 = `Luiz`;//string
const number = 10.29//number
const number2 = 10;//number
const booleano = false // boolean
let nomeAluno; // undefined = nao precisa aponta para local nenhum na memoria;
let sobreNome = null // nao precisa aponta para local nenhum na memoria;

const a = [1, 2];
const b = a;

b.push(3)
console.log(a, b)

const pessoa = { nome: "David" }
const outraPessoa = { ...pessoa }
outraPessoa.nome = "gustavo"
console.log(pessoa.nome)
console.log(outraPessoa.nome)