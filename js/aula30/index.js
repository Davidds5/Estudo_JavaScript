const mensagemSobreCor = {
    vermelho: 'cor favorita vermelho',
    azul: 'cor favorita azul',
    verde: 'cor favorita verde',
}

const cor = 'vermelho';
console.log(mensagemSobreCor[cor] || 'Cor nao encontrada');