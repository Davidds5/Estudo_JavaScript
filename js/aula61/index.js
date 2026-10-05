function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.depositar = function (valor) {
  if (valor < 0) {
    console.log(`Valor a ser deposita tem que ser maior que zero`)
    return;
  }
  this.saldo += valor;
  console.log(`Deposito de ${valor} | Saldo agora ${this.saldo}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);

ContaCorrente.prototype.constructor = ContaCorrente;

const cc = new ContaCorrente(1001, 222222, 500, 1000)
cc.depositar(200)
console.log(cc)