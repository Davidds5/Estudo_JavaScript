interface Agendamento {
    id: number,
    cliente: string,
    servico: string,
    valor: number
    data: Date | string;
}

type NovoAgengamento = Omit<Agendamento, 'id'>;

type AtualizarAgendamento = Partial<Omit<Agendamento, 'id'>>;

type StatusAgendamento