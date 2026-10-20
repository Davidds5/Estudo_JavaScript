interface ErroCostumizadoApi {
    codigo: number;
    mensagem: string;
}
function extrairMensagemDeErro(erro: unknown): string {
    if (erro instanceof Error) {
        return `[Exceção JS]: ${erro.message}`;

    }

    if (typeof erro === 'string') {
        return `[Texto]: ${erro}`;
    }

    if (typeof erro === 'object' && erro !== null && 'mensagem' in erro) {
        return `[API]: ${(erro as ErroCostumizadoApi).mensagem}`;
    }

    return 'Erro desconhecido ao processa agendamento'
}

try {
    throw new Error('Falha na conexao com o banco')
} catch (e) {
    console.log(extrairMensagemDeErro(e))
}

try {
    throw 'Horario das 10:00 ja esta ocupado'
} catch (e) {
    console.log(extrairMensagemDeErro(e))
}

const erroBackend = { codigo: 400, mensagem: 'Saldo insuficiente para agendamento' }

console.log(extrairMensagemDeErro(erroBackend))
export { }