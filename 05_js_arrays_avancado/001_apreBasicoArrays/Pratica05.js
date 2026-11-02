const servicos = [
    { id: 1, nome: 'Corte Degradê', preco: 40 },
    { id: 2, nome: 'Barboterapia', preco: 50 },
    { id: 3, nome: 'Sobrancelha', preco: 15 },
];

const nomesDoServico = servicos.map(servicos => servicos.nome)
console.log(nomesDoServico)


const precosFormatados = servicos.map(servicos => `R$ ${servicos.preco.toFixed(2).replace('.', ',')}`)
console.log('Precos formatados: ', precosFormatados)

const promocaoBlakFraud = servicos.map(servicos => ({
    ...servicos,
    preco: servicos.preco * 0.9,
    emPromocao: true
}));

console.log('Original intacto:', servicos[0].preco)

console.log('Com desconto: ', promocaoBlakFraud[0].preco)