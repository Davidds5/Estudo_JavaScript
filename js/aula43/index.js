let tentativas = 0;

const maxTentativas = 10;

const checarPix = setInterval(() => {
    tentativas++;
    console.log(`[Tentativa ${tentativas}] verificando status de pagamento Pix...`)

    const pagamentoFeito = (tentativas === 4);

    if (pagamentoFeito) {
        console.log('Pagamento confirmado! Liberando acesso ao plano pro...')
        clearInterval(checarPix);
    } else if (tentativas >= maxTentativas) {
        console.log('Tempo esgotado ')

    }


}, 3000)