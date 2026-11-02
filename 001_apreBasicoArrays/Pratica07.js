const produtos = [
    { nome: 'Pomada Modeladora', categoria: 'cabelo' },
    { nome: 'Óleo Hidratante', categoria: 'barba' },
    { nome: 'Shampoo Anticaspa', categoria: 'cabelo' },
    { nome: 'Balm Pós-Barba', categoria: 'barba' }
];
const estoquePorCategoria = produtos.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
        acc[produto.categoria] = [];
    }

    acc[produto.categoria].push(produto.nome)

    return acc;
}, {})

console.log(estoquePorCategoria)
