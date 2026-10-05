let segundosRestantes = 300;

console.log("💈 [BarberPro] Horário das 10:00 pré-reservado. Conclua em 5 minutos.");

const cronometroId = setInterval(() => {
    segundosRestantes--;

    const minutos = Math.floor(segundosRestantes / 60)
    const segundos = segundosRestantes % 60;
    const formatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    console.log(`⏳ Tempo restante para confirmar: ${formatado}`);

    if (segundosRestantes <= 0) {
        clearInterval(cronometroId);
        console.log("❌ [BarberPro] Tempo esgotado! A vaga foi liberada para outro cliente.");
    }
}, 1000)

function confirmaAgendamento() {
    clearInterval(cronometroId);
    console.log("✅ [BarberPro] Agendamento confirmado com sucesso com o barbeiro Wesley!");
}