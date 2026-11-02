type MetodoDePagamento = 'PIX' | 'CARTAO' | 'DINHEIRO';


interface Pagamento {
    id: number,
    cliente: string,
    valor: number,
    formaPagamento: MetodoDePagamento
}

const pagamentoDoCorte: Pagamento = {
    id: 1,
    cliente: 'Luiz',
    valor: 50.00,
    formaPagamento: "PIX"
};


function processaCobranca(pagamento: Pagamento): void {
    console.log(`Recebendo R$${pagamento.valor} do cliente ${pagamento.cliente} via ${pagamento.formaPagamento}`)

}



processaCobranca(pagamentoDoCorte)
export { }