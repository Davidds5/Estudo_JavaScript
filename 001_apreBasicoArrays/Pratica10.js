const produtos = [
    { nome: 'Pomada Matte', quantidade: 12 },
    { nome: 'Óleo para Barba', quantidade: 3 }, // 👈 este é o menor!
    { nome: 'Lâmina Derby', quantidade: 50 },
    { nome: 'Shampoo Mentol', quantidade: 8 }
];

const menorQuantidade = produtos.reduce((menor, item) => {
    if (item.quantidade < menor.quantidade) {
        return item
    }
    return menor;
}, produtos[0])

console.log(menorQuantidade)