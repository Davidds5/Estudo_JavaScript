const filaEspera = ['Carlos', 'Marcos', 'Lucas'];

filaEspera.push('David')
console.log(filaEspera)

filaEspera.unshift('Roberto (VIP)')

const clienteAtendido = filaEspera.shift();

console.log('Primeiro da fila: ', clienteAtendido)

const ultimoCliente = filaEspera.pop();
console.log('Ultimo cliente foi embora: ', ultimoCliente)


const segundaFila = [...filaEspera]

segundaFila.push('Gustavo')
console.log(segundaFila)
console.log(filaEspera)


const nomeCliente = 'David Gabriel Clovin';
const partesDoNome = nomeCliente.split(' ');
console.log('Primeiro nome: ', partesDoNome[0])
console.log('Segundo nome: ', partesDoNome[1])
console.log('Terceiro nome: ', partesDoNome[2])
