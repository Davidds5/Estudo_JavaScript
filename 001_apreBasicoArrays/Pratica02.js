const barbeiros = ['Wesley(dono)', 'Carlos', 'Pedro', 'Lucas'];

const removidos = barbeiros.splice(2, 1);

console.log('Quem saiu: ', removidos)
console.log('Equipe atual: ', barbeiros)


barbeiros.splice(1, 0, 'Marcos')
console.log('Com Marcos Inserido: ', barbeiros)



barbeiros.splice(2, 1, 'David');

console.log('Equipe final: ', barbeiros)