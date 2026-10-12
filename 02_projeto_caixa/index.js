// ================================================
// 💈 MINI PROJETO: CAIXA DA BARBEARIA - WESLEY'S
// Desafio: Usar filter, map e reduce para gerar
//          o relatório do dia!
// ================================================

const atendimentos = [
  { cliente: 'David', servico: 'Corte', preco: 35, pago: true },
  { cliente: 'Lucas', servico: 'Barba', preco: 25, pago: false },
  { cliente: 'Carlos', servico: 'Corte + Barba', preco: 55, pago: true },
  { cliente: 'Felipe', servico: 'Sobrancelha', preco: 15, pago: true },
  { cliente: 'Marcos', servico: 'Corte', preco: 35, pago: false },
];

// ---- DESAFIO 1: Quem ainda não pagou? ----
// Use o filter para pegar apenas quem pago === false
const inadimplentes = atendimentos.filter(servicos => servicos.pago === false)

console.log('❌ Pendências de pagamento:');
console.log(inadimplentes.map(a => a.cliente)); // deve exibir ['Lucas', 'Marcos']


// ---- DESAFIO 2: Relatório formatado ----
// Use o map para criar um novo array de strings formatadas
const relatorio = atendimentos.map(a => ({
  // esse aqui eu nao sei muito
})

);

console.log('\n📋 Relatório do dia:');
relatorio.forEach(linha => console.log(linha));


// ---- DESAFIO 3: Total da caixa (apenas pagos) ----
// Use filter + reduce para somar apenas quem pagou
const totalCaixa = atendimentos
  .filter(a => a.pago === true)
  .reduce((cofrinho, valor) => {
    return cofrinho + valor.preco
  }, 0)

console.log(`\n💰 Total em caixa: R$ ${totalCaixa.toFixed(2)}`); // deve ser R$ 105.00


// ================================================
// 🔥 EXTRAS — Mais exemplos práticos
// ================================================

const produtos = [
  { nome: 'Pomada', preco: 40, categoria: 'cabelo', estoque: 5 },
  { nome: 'Shampoo', preco: 28, categoria: 'cabelo', estoque: 0 },
  { nome: 'Navalha', preco: 85, categoria: 'barba', estoque: 3 },
  { nome: 'Pós-barba', preco: 55, categoria: 'barba', estoque: 0 },
  { nome: 'Cera', preco: 32, categoria: 'cabelo', estoque: 8 },
];

// ---- EXTRA 1: Apenas produtos de 'barba' com estoque disponível ----
const barbaDisponivel = produtos
  .filter(p => p.categoria === 'barba' && p.estoque > 0);

console.log('\n🪒 Produtos de barba em estoque:');
console.log(barbaDisponivel.map(p => p.nome));
// Deve exibir: ['Navalha']


// ---- EXTRA 2: Listar tudo formatado com alerta de estoque zerado ----
const listaFormatada = produtos.map(p =>
  `${p.estoque === 0 ? '🔴' : '🟢'} ${p.nome} - R$ ${p.preco.toFixed(2)} (Estoque: ${p.estoque})`
);

console.log('\n📦 Lista de produtos:');
listaFormatada.forEach(linha => console.log(linha));


// ---- EXTRA 3: Valor total do estoque (preco * quantidade de cada item) ----
const valorTotalEstoque = produtos.reduce((total, p) => {
  return total + (p.preco * p.estoque);
}, 0);

console.log(`\n🏦 Valor total em estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
// Deve ser: (40*5) + (28*0) + (85*3) + (55*0) + (32*8) = 200 + 0 + 255 + 0 + 256 = R$ 711.00
