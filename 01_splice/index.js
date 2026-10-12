const nomes = ['David', 'Luiz', 'Pedro', 'Gustavo'];
//               0        1        2          3

console.log('Nomes Normais: ', nomes)
const removidos = nomes.splice(2, 1);

console.log('Nomes removidos:', removidos)
console.log('Nomes:', nomes)



nomes.splice(2, 0, 'Ana')
console.log('Nomes adicionando Ana:', nomes)

nomes.splice(1, 1, 'Alvaro')
console.log('Removendo o index 1, e adicionando Alvaro: ', nomes)