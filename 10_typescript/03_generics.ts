interface RespostaServidor<T> {
    sucesso: boolean,
    mensagem: string,
    dados: T
}


const respostaLogin: RespostaServidor<string> = {
    sucesso: true,
    mensagem: 'Login realizado',
    dados: 'token_1233'
}

interface Servico {
    nome: string,
    preco: number
}

const respostaCorte: RespostaServidor<Servico> = {
    sucesso: true,
    mensagem: 'Servico criado',
    dados: {
        nome: 'Barbara',
        preco: 20.00
    }

}

console.log(respostaLogin.dados)
console.log(respostaCorte.dados.nome)


function criarResposta<T>(mensagem: string, conteudo: T): RespostaServidor<T> {
    return {
        sucesso: true,
        mensagem: mensagem,
        dados: conteudo
    }
}

const resp1 = criarResposta('Deu bom', 'meu_token');

const resp2 = criarResposta('Salvo', { nome: 'Corte', preco: 40.0 })

console.log(resp2.dados)
console.log(resp1.dados)

export { }