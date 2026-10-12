async function carregarServicosBarbearia() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        console.log('Conectando no servidor...')
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Falha na requisicao. Codigo HTTP: ${resposta.status}`);
        }

        const listaClientes = await resposta.json();

        console.log('Dados recebidos com sucesso!')
        console.log(`Total de clientes recuperados: ${listaClientes.length}`) // sem ()
        console.log('Primeiro cliente: ', listaClientes[0].name);
    } catch (erro) {
        console.error('Erro na comunicacao com a API: ', erro.message)
    }
}

carregarServicosBarbearia()
