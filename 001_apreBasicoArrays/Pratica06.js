const agendamentos = [
    { id: 1, cliente: 'David', status: 'PENDENTE' },
    { id: 2, cliente: 'Lucas', status: 'PENDENTE' }, // Queremos mudar SÓ esse!
    { id: 3, cliente: 'Marcos', status: 'PENDENTE' },
];

const idParaConcluir = 2;

const agendamentosAtualizado = agendamentos.map(agendamentos => {
    if (agendamentos.id === idParaConcluir) {
        return {
            ...agendamentos,
            status: 'CONCLUIDO'
        };
    }
    return agendamentos;
})

console.log(agendamentosAtualizado)


const alunos = [
    { nome: 'Carlos', checkIns: 25 },
    { nome: 'Roberto', checkIns: 8 },
    { nome: 'David', checkIns: 32 }
];

const alunosComCategoria = alunos.map(aluno => ({
    ...aluno,
    categoria: aluno.checkIns >= 20 ? 'OURO/VIP' : 'PADRAO'
}))
console.log(alunosComCategoria)