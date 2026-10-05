
//     indice      0        1           2
const alunos = ['Luis', 'Gustavo', 'Gabriel']

console.log()
const nomeGrande = "David Silva Santos"
const partido = nomeGrande.slice(0, 6);

console.log(partido)

const removido = alunos.shift();
console.log(removido);
console.log(alunos)


alunos[alunos.length] = 'Gustavo'
alunos.unshift('Marcos')
console.log(alunos)

// alunos[0] = 'Luiza';
// alunos[3] = 'Maria';
// alunos.push('Pedro')



// console.log(alunos[0])
// console.log(alunos[2])