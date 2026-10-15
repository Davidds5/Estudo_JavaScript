async function cadastraAgendamento() {
    const url = 'https://jsonplaceholder.typicode.com/posts';


    const novoAgendamento = {
        cliente: 'Luiz',
        servico: 'Corte',
        valor: 45.00
    };


    try {
        console.log('Enviando dados para o servidor...');
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(novoAgendamento)
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao cadrasta. Status HTTP: ${resposta.status}`)
        }

        const dadosSalvos = await resposta.json();

        console.log('Agendamento cadastrado com sucesso!')
        console.log('Status HTTP: ', resposta.status)
        console.log('ID gerado no banco: ', dadosSalvos.id)
        console.log('Dados confirmados: ', dadosSalvos)
    } catch (erro) {
        console.log('Falha na requisicao: ', erro.message)
    }
}

cadastraAgendamento();