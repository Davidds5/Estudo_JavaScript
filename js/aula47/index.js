const minhaConta = (function () {
    let saldo = 100;

    function verSaldo() {
        console.log(`Saldo atual: ${saldo}`)
    }
    function depositar(valor) {
        saldo += valor;
        console.log(`Valor depositado ${valor}`)
    }
    return { verSaldo, depositar }
})()

minhaConta.verSaldo()
minhaConta.depositar(100)
minhaConta.verSaldo()