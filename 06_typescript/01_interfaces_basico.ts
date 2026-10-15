// AULA 01: INTERFACES, FUNÇÕES E COMPOSIÇÃO NO TYPESCRIPT

// 1. Interface Simples
interface ServicoBarbeiro {
    id: number;
    nome: string;
    preco: number;
    disponivel: boolean;
}

// 2. Objeto tipado usando a interface
const corteDegrade: ServicoBarbeiro = {
    id: 1,
    nome: 'Luiz',
    preco: 45,
    disponivel: true
};

// 3. Função tipada (parâmetro e retorno : number)
function aplicarDesconto(servico: ServicoBarbeiro, desconto: number): number {
    return servico.preco - desconto;
}

const valorFinal = aplicarDesconto(corteDegrade, 5);
console.log('Valor com desconto:', valorFinal);

// 4. Array de objetos tipados (ServicoBarbeiro[])
const catalogo: ServicoBarbeiro[] = [
    { id: 1, nome: "Degradê", preco: 45, disponivel: true },
    { id: 2, nome: "Barba Terapia", preco: 35, disponivel: true },
    { id: 3, nome: "Pezinho", preco: 15, disponivel: false }
];

catalogo.forEach((s) => {
    console.log(`[${s.nome}] custa R$ ${s.preco}`);
});

// 5. Composição de Interfaces e Campos Opcionais (?)
interface Cliente {
    nome: string;
    telefone: string;
}

interface Agendamento {
    id: number;
    cliente: Cliente;          // Objeto aninhado
    servico: ServicoBarbeiro;  // Interface aninhada
    observacao?: string;       // Campo opcional com ?
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
