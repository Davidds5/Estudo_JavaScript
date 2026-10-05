// 1. Variável declarada FORA da função (escopo global)
var canal = 'Clovin DEV';

console.log('1. Fora antes da função:', canal); // Clovin DEV

function alterarNome() {
    // 2. Variável declarada DENTRO da função (escopo local da função)
    var canal = 'Outro Canal';
    console.log('2. Dentro da função:', canal); // Outro Canal
}

// Executa a função
alterarNome();

// 3. Verificando o valor fora da função após a execução
console.log('3. Fora depois da função:', canal); // Clovin DEV (continua intacto!)
