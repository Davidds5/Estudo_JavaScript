const dev = {
    nome: 'David',
    idade: 25,
    canal: 'Clovin DEV',
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    },
    stack: ['Java', 'Spring Boot', 'JavaScript', 'Next.js']
};

const {
    nome: nomeNovo,
    nivel = 'Pleno',
    endereco,
    endereco: { cidade },
    ...resto
} = dev;

console.log(nomeNovo);
console.log(nivel);
console.log(cidade);
console.log(endereco);
console.log(resto);

