interface ServicoBarbeiro {
    id: number,
    nome: string,
    preco: number,
    disponivel: boolean;
}

const corteDegrade: ServicoBarbeiro = {
    id: 1,
    nome: 'Luiz',
    preco: 45,
    disponivel: true
}


function aplicarDesconto(servico: ServicoBarbeiro, desconto: number): number {
    return servico.preco - desconto;

}


const valorFinal = aplicarDesconto(corteDegrade, 5)

console.log(valorFinal)

const catalogo: ServicoBarbeiro[] = [
    { id: 1, nome: "Degradê", preco: 45, disponivel: true },
    { id: 2, nome: "Barba Terapia", preco: 35, disponivel: true },
    { id: 3, nome: "Pezinho", preco: 15, disponivel: false }
];

catalogo.forEach((s) => {
    console.log(`[${s.nome}] custa ${s.preco}`)
})


interface Cliente {
    nome: string,
    telefone: string
};


interface Agendamento {
    id: number,
    cliente: Cliente,
    servico: ServicoBarbeiro,
    observacao?: string
}

const agendamentoDoDia: Agendamento = {
    id: 1,
    cliente: {
        nome: 'Luiz',
        telefone: '12345678'
    },
    servico: corteDegrade
};


console.log(`Cliente: ${agendamentoDoDia.cliente.nome}`);
console.log(`Serviço: ${agendamentoDoDia.servico.nome} (R$ ${agendamentoDoDia.servico.preco})`);

export {};
