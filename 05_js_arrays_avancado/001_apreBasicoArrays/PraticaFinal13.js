const atendimentos = [
    { cliente: 'David', servico: 'Cabelo + Barba', valor: 65, vip: true, desconto: 0 },
    { cliente: 'Carlos', servico: 'Corte Degradê', valor: 35, vip: false, desconto: 5 },
    { cliente: 'Wesley', servico: 'Barba Terapia', valor: 40, vip: true, desconto: 0 },
    { cliente: 'Lucas', servico: 'Pezinho', valor: 15, vip: false, desconto: 0 }
];

let faturamentoTotal = 0
let totalVips = 0;
let totalDescontosAplicados = 0

atendimentos.forEach((atendimento, indice, listaCompleta) => {
    faturamentoTotal += atendimento.valor;

    if (atendimento.vip) {
        totalVips++;
    }
    if (atendimento.desconto > 0) {
        totalDescontosAplicados += atendimento.desconto;
        console.log(`Alerta: Desconto de R$ ${atendimento.desconto} concedido para ${atendimento.cliente}`)
    }

    const progresso = Math.round(((indice + 1) / listaCompleta.length) * 100);
    console.log(`[Processando ${indice + 1}/${listaCompleta.length} - ${progresso}%] Cliente: ${atendimento.cliente}`);

});
console.log('\n--- 📊 RELATÓRIO DO DIA ---');
console.log(`Faturamento Bruto: R$ ${faturamentoTotal}`);
console.log(`Total de VIPs atendidos: ${totalVips}`);
console.log(`Total em descontos: R$ ${totalDescontosAplicados}`);