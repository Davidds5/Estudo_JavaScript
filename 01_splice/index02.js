const servicos = [
    { nome: 'Corte', preco: 35 },
    { nome: 'Barba', preco: 25 },
    { nome: 'Sobrancelha', preco: 15 },
];

const totalCaixa = servicos.reduce((totaAcumulador, servicoAtual) => {
    return totaAcumulador + servicoAtual.preco
}, 0)
console.log(totalCaixa)