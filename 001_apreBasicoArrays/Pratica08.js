const funcionarios = [
    { nome: 'David', cargo: 'dev' },
    { nome: 'Carlos', cargo: 'design' },
    { nome: 'Wesley', cargo: 'dev' },
    { nome: 'Lucas', cargo: 'design' }
];

const porCargo = funcionarios.reduce((acc, item) => {
    console.log(acc, item)
    if (!acc[item.cargo]) {
        acc[item.cargo] = []
    }
    acc[item.cargo].push(item.nome);
    return acc;

}, {})


console.log(porCargo)