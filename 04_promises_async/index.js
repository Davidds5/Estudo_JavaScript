function verificarEstoque(quantidadeDesejada) {
    const produtoEstoque = 5;
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (produtoEstoque >= quantidadeDesejada) {
                resolve({
                    status: 'liberado',
                    mensagem: 'Pomadas reservadas com sucesso!!'
                })
            } else {
                reject('Estoque insuficiente')
            }
        }, 1500)
    })
}

async function pegarEstoque() {
    const quantidade = 9;
    try {
        console.log('Verificando se a produto no estoque...')
        const resultado = await verificarEstoque(quantidade);

        console.log('Status da busca: ', resultado.status)
        console.log(resultado.mensagem)
    } catch (erro) {
        console.log(erro)
    }

}

pegarEstoque()