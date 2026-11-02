const servicos = [
    { nome: 'Pezinho', valor: 15 },
    { nome: 'Corte Degradê', valor: 35 },
    { nome: 'Combo Completo', valor: 85 },
    { nome: 'Barba Terapia', valor: 40 }
];

const servicoMaisCaro = servicos.reduce((maior, item) => {
    if (item.valor > maior.valor) {
        return item;
    }
    return maior;
}, servicos[0]);

console.log(servicoMaisCaro)