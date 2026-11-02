function buscaUsuario(id, callback) {
    setTimeout(function () {
        const usuario = { id: id, nome: 'David', cargo: 'Dev' }
        if (callback) callback(usuario);
    }, 2000)
}


buscaUsuario(1, function (dadosDoUsuario) {
    console.log(`Usuário encontrado: ${dadosDoUsuario.nome}`);
    console.log(`Cargo: ${dadosDoUsuario.cargo}`);
});