const url = 'https://jsonplaceholder.typicode.com/posts';

async function buscaPorId(id) {
    try {
        console.log(`Buscando post ${id}`);
        const resposta = await fetch(`${url}/${id}`);

        if (!resposta.ok) {
            throw new Error(`Error ${resposta.status}: Post nao encotrado.`)
        }

        const post = await resposta.json();
        console.log('Post encotrado')
        console.log(`Titulo`, post.title)
    } catch (erro) {
        console.log('Falha na busca: ', erro.message)
    }
}

async function deletePorId(id) {
    try {
        console.log('Excluindo Post ', id, '...');
        const resposta = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        if (!resposta.ok) {
            throw new Error(`Error ${resposta.status}: Falha ao excluir`)
        }

        console.log(`Post ${id} excluido com sucesso! Status HTTP: ${resposta.status}`)
    }
    catch (erro) {
        console.log(erro.message)
    }


}


async function rodar() {
    await buscaPorId(1);
    await deletePorId(1);
}

rodar()