// =====================================================================
// AULA 55: Funções Recursivas (Recursion)
// Contexto Real: Algoritmo de Busca de Vagas no BarberPro
// =====================================================================

/**
 * 1. Exemplo Básico de Anatomia Recursiva: Contagem Regressiva
 */
function contagemRegressiva(numero) {
  // 🛑 CASO BASE (Condição de parada obrigatória)
  if (numero <= 0) {
    console.log('🚀 Fogo! Decolagem concluída.');
    return;
  }

  console.log(`Contagem: ${numero}...`);

  // 🔄 PASSO RECURSIVO (Chama a si mesma caminhando rumo ao caso base)
  contagemRegressiva(numero - 1);
}

console.log('--- 1. TESTE DA CONTAGEM REGRESSIVA ---');
contagemRegressiva(5);

/**
 * 2. Exemplo Real BarberPro: Busca Recursiva do Próximo Horário Disponível
 * A barbearia funciona das 09:00 até as 18:00.
 * O cliente quer agendar a partir das 09:00, mas vários horários já estão cheios.
 */
const horariosOcupados = [9, 10, 11, 12, 14, 15]; // Horas já reservadas no banco Neon

function encontrarProximaVaga(horarioAtual, ocupados, horarioFechamento = 18) {
  // CASO BASE 1: Ultrapassou o horário de expediente da barbearia
  if (horarioAtual >= horarioFechamento) {
    console.log(`⛔ Barbearia fechada! Não há mais vagas hoje.`);
    return null;
  }

  // CASO BASE 2: Horário atual está LIVRE (não está na lista de ocupados)
  if (!ocupados.includes(horarioAtual)) {
    console.log(`✅ Vaga encontrada com sucesso para às ${horarioAtual}:00!`);
    return `${horarioAtual}:00`;
  }

  // PASSO RECURSIVO: Horário ocupado! Avança 1 hora e tenta novamente
  console.log(`⏳ Horário ${horarioAtual}:00 ocupado. Buscando próximo slot...`);
  return encontrarProximaVaga(horarioAtual + 1, ocupados, horarioFechamento);
}

console.log('\n--- 2. BUSCA RECURSIVA NO BARBERPRO ---');
const proximoHorario = encontrarProximaVaga(9, horariosOcupados, 18);
console.log('Resultado final do agendamento:', proximoHorario);
