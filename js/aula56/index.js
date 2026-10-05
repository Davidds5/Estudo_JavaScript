// =====================================================================
// AULA 56: Funções Geradoras (Generator Functions - function* / yield)
// Contexto Real: Emissor de Senhas VIP & Slots Sob Demanda no BarberPro
// =====================================================================

/**
 * 1. GERADOR BÁSICO: Entendendo a pausa (yield) e retomada (.next())
 */
function* geradorFasesAtendimento() {
  console.log('-> Iniciando atendimento...');
  yield '1. Recepção e café oferecido';

  console.log('-> Cliente acomodado na cadeira...');
  yield '2. Corte de cabelo realizado';

  console.log('-> Finalizando com toalha quente...');
  yield '3. Barba alinhada e pós-barba aplicado';

  return 'Atendimento 100% Concluído!';
}

const atendimento = geradorFasesAtendimento();

// A função NÃO executa tudo de uma vez. Ela pausa em cada `yield`.
console.log('--- TESTE 1: Controle Manual com .next() ---');
console.log(atendimento.next()); // { value: '1. Recepção...', done: false }
console.log(atendimento.next()); // { value: '2. Corte...', done: false }
console.log(atendimento.next()); // { value: '3. Barba...', done: false }
console.log(atendimento.next()); // { value: 'Atendimento Concluído!', done: true }

/**
 * 2. CASO REAL BARBERPRO: Gerador Infinito de Senhas VIP de Espera
 * Não ocupa memória com 10.000 números; gera sob demanda (Lazy Evaluation).
 */
function* geradorSenhasBarberPro(prefixo = 'VIP') {
  let numero = 1;
  while (true) {
    yield `${prefixo}-${String(numero).padStart(3, '0')}`;
    numero++;
  }
}

console.log('\n--- TESTE 2: Senhas Geradas Sob Demanda no BarberPro ---');
const filaBarbearia = geradorSenhasBarberPro('CORTE');

console.log('Cliente 1 chegou:', filaBarbearia.next().value); // CORTE-001
console.log('Cliente 2 chegou:', filaBarbearia.next().value); // CORTE-002
console.log('Cliente 3 chegou:', filaBarbearia.next().value); // CORTE-003
console.log('Cliente 4 chegou:', filaBarbearia.next().value); // CORTE-004
