const servicos = [
    { nome: 'Corte Degradê', valor: 35 },
    { nome: 'Barba Terapia', valor: 40 },
    { nome: 'Pezinho', valor: 15 },
    { nome: 'Sobrancelha', valor: 10 }
];

const valorTotal = servicos.reduce((acc, item) => {
    console.log(`Acc: ${acc} | Somando: ${item.valor}`)

    return acc + item.valor;
}, 0)

console.log(valorTotal)