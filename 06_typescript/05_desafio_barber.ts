type StatusAtendimento = "AGENDAMENTO" | "EM_CORTE" | "FINALIZADO" | "CANCELADO";

interface Agendamento {
    id: number,
    cliente: string,
    valor: number,
    status: StatusAtendimento
}

interface AgendamentoVip extends Agendamento {
    bebidasCortesia: string
    desconto?: number
}

function concluirAtendimento(agendamento: Agendamento): void {
    console.log(`${agendamento.cliente} - ${agendamento.status}`)
}

const meuCorteVIp: AgendamentoVip = {
    id: 1,
    cliente: 'Luiz',
    valor: 20.0,
    status: "AGENDAMENTO",
    bebidasCortesia: 'vinho'
}
concluirAtendimento(meuCorteVIp)

export { }