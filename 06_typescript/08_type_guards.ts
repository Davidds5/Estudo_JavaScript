interface PagamentoPix {
    chavePix: number,
    valor: number
}

interface PagamentoDinheiro {
    troco: number,
    valor: number
}

type FormaPagamento = PagamentoPix | PagamentoDinheiro;

function finalizarPagamento(pagamento: FormaPagamento): void {
    if ('chavePix' in pagamento) {
        console.log(`Gerar QR code para a chave: ${pagamento.chavePix}`)
    } else {
        console.log(`Receber em dinheiro, troco para: R$${pagamento.troco}`)
    }
}

finalizarPagamento({ chavePix: 1233454, valor: 10 })
finalizarPagamento({ troco: 1000, valor: 90000 })

export { }