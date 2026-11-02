let tentivas = 0;
let sucesso = false;

do {
    tentivas++;
    console.log(`Tentando processar pagamento no Strip... Tentativa ${tentivas}`);

    sucesso = Math.random() > 0.7
} while (!sucesso && tentivas < 3);


if (sucesso) {
    console.log("Pagamento aprovado!")
} else {
    console.log("Falha apos 3 tentativas. nodificar suporte")
}