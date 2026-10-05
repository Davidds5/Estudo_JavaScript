const servicosVendidos = [
  'Corte de Cabelo',
  'Barba',
  'Corte de Cabelo',
  'Corte de Cabelo',
  'Barba',
  'Corte de Cabelo',
  'Barba',
];

const contagem = servicosVendidos.reduce((total, servico) => {
  total[servico] = (total[servico] || 0) + 1;
  return total;
}, {});

console.log(contagem);