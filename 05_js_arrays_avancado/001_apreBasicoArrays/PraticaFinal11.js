const atendimentos = [

];

const totalPontosPixDobrados = atendimentos
    .filter(item => item.formaPagamento === 'pix')
    .map(item => item.pontos * 2)
    .reduce((acc, pontos) => acc + pontos, 0);

console.log(totalPontosPixDobrados)