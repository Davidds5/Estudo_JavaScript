// AULA 02: UNION TYPES (|) E TYPE ALIAS NO TYPESCRIPT
// Objetivo: Criar tipos com valores permitidos (estilo Enum do Java)

// 1. Criando o Type com opções pré-definidas (Union Type)
type StatusAgendamento = "PENDENTE" | "CONFIRMADO" | "CANCELADO";

// 2. Interface usando o Type
interface AgendamentoComStatus {
    id: number;
    cliente: string;
    status: StatusAgendamento; // Só aceita um dos 3 status acima
}

// 3. Função que manipula o status
function atualizarStatus(agendamento: AgendamentoComStatus, novoStatus: StatusAgendamento): void {
    agendamento.status = novoStatus;
    console.log(`[BarberPro] Agendamento #${agendamento.id} do cliente ${agendamento.cliente} atualizado para: ${agendamento.status}`);
}

// 4. Teste Prático
const meuAgendamento: AgendamentoComStatus = {
    id: 1,
    cliente: "Wesley",
    status: "PENDENTE" // Aperte Ctrl + Espaço aqui para ver as opções!
};

atualizarStatus(meuAgendamento, "CONFIRMADO");

export {};
