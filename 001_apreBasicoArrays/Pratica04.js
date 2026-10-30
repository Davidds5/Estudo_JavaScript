const agendamentos = [
    { id: 1, cliente: 'David', servico: 'Degradê Navalhado', valor: 45, status: 'CONCLUIDO' },
    { id: 2, cliente: 'Carlos', servico: 'Barboterapia', valor: 60, status: 'PENDENTE' },
    { id: 3, cliente: 'Lucas', servico: 'Corte Simples', valor: 30, status: 'CANCELADO' },
    { id: 4, cliente: 'Roberto', servico: 'Combo VIP', valor: 90, status: 'CONCLUIDO' },
    { id: 5, cliente: 'Felipe', servico: 'Sobrancelha', valor: 20, status: 'PENDENTE' },
];

const concluidos = agendamentos.filter(agendamentos => agendamentos.status === 'CONCLUIDO')
console.log(concluidos)

const servicoPremiun = agendamentos.filter(agendamentos => agendamentos.valor >= 50)
console.log('Servicos Vip: ', servicoPremiun)

const comecaCom = agendamentos.filter(agendamentos => agendamentos.cliente.startsWith('C'))
console.log('Clientes que comeca com C: ', comecaCom)