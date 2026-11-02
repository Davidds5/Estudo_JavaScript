const clientesParaAviso = [
    { nome: 'David', horario: '10:00' },
    { nome: 'Wesley', horario: '10:45' },
    { nome: 'Carlos', horario: '11:30' }
];

clientesParaAviso.forEach((cliente, indice) => {
    console.log(`[Lembrete #${indice + 1}] Olá, ${cliente.nome}! Seu corte está agendado para às ${cliente.horario}.`);
})