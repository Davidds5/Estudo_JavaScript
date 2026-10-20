function calcularDesconto(preco: number, desconto: number | boolean): number {
    if (typeof desconto === 'number') {
        return preco - 10
    }

    if (desconto === true) {
        return preco - 5
    }
    return preco;
}

console.log(calcularDesconto(50, 10));   // 40  (tirou 10 reais)
console.log(calcularDesconto(50, true)); // 45  (primeira visita, tirou 5)
console.log(calcularDesconto(50, false));// 50  (sem desconto)


