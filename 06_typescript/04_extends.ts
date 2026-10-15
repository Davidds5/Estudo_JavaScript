interface Usuario {
    id: number,
    nome: string,
    email: string
}



interface Barbeiro extends Usuario {
    especialidade: string,
    comissao: number
}

const wesley: Barbeiro = {
    id: 1,
    nome: 'Wesley',
    email: 'wesheliGmail.com',
    especialidade: 'Degrade Navalhado',
    comissao: 50.0
};

console.log(`${wesley.nome} - Especialista em: ${wesley.especialidade}`);

export { }