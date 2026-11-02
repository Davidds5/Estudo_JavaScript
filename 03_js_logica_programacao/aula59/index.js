const servicos = [
  { nome: 'corte simples', preco: 25 },
  { nome: 'barba completa', preco: 35 },
  { nome: 'combo vip', preco: 55 }
];

const servicosMaiusculo = servicos.map(servico => servico.nome.toLocaleUpperCase());
console.log(servicosMaiusculo);

const servicoReajuste = servicos.map(servico => ({ ...servico, preco: servico.preco * 1.2 }));
console.log(servicoReajuste);