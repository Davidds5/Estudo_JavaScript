function formataDataAgendamento(data: Date | string): void {
    if (data instanceof Date) {
        console.log(data.toLocaleDateString('pt-BR'));
    } else { console.log(data); }

}

const date = formataDataAgendamento(new Date());
const letras = formataDataAgendamento("25/12/2026")

