async function cadastraNoServidor(endpoint, dadosParaSalvar) {
    const urlBase = 'https://jsonplaceholder.typicode.com';

    try {
        const resposta = await fetch(`${urlBase}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosParaSalvar)
        });

        if (!resposta.ok) {
            throw new Error(`Error ${resposta.status}: Falha ao salvar no servidor`)
        }

        return await resposta.json();
    } catch (erro) {
        console.log('Error no servidor', erro.message)
        throw erro;
    }

}

async function executar() {
    try {
        console.log('Cadrastando primeiro cliente')
        const client1 = await cadastraNoServidor('posts', {
            cliente: 'Luiz',
            servico: 'barba',
            preco: 20.0
        });
        console.log('Salvo com sucesso: ', client1.id, client1)


        console.log('Cadrastando primeiro cliente')
        const client2 = await cadastraNoServidor('posts', {
            cliente: 'David',
            servico: 'Cabelo',
            preco: 25.0
        });
        console.log('Salvo com sucesso: ', client2.id, client2)

    } catch (erro) {
        console.log('Falha geral no fluxo')
    }

}

executar()