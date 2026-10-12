const clientes = [
    { nome: 'David', plano: 'vip' },
    { nome: 'Lucas', plano: 'comum' },
    { nome: 'Wesley', plano: 'vip' },
    { nome: 'Carlos', plano: 'comum' },
];


const filtrar = clientes.reduce((acc, clientes) => {
    if (clientes.plano === 'vip') {
        acc.vip.push(clientes.nome)
    } else {
        acc.comum.push(clientes.nome)
    }
    return acc;
}, { vip: [], comum: [] })

console.log(filtrar)