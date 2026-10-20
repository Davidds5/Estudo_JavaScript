interface Servico {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    duracaoMinutos: number;
    ativo: boolean;
}

type CriarServicoDTO = Omit<Servico, 'id' | 'ativo'>;

type AtualizarServicoDTO = Partial<Omit<Servico, 'id'>>;

type CardVitrineDTO = Pick<Servico, 'nome' | 'preco' | 'duracaoMinutos'>;

const novoServico: CriarServicoDTO = {
    nome: 'Luiz',
    descricao: 'Ze ruela',
    preco: 40.00,
    duracaoMinutos: 20
}


const reajuste: AtualizarServicoDTO = {
    preco: 50.00,
    duracaoMinutos: 15
}

const vitrine: CardVitrineDTO = {
    nome: 'Corte Degrade',
    preco: 50.00,
    duracaoMinutos: 45
};


function atualizarServico(original: Servico, alteracao: AtualizarServicoDTO): Servico {
    return { ...original, ...alteracao }
}


const servicoNoBanco: Servico = { id: 1, ativo: true, ...novoServico }
const servicoAtualizar = atualizarServico(servicoNoBanco, reajuste)



console.log('Vitrine do Cliente (Pick): ', vitrine)
console.log('Servico Atualizado o Banco: ', servicoAtualizar)






