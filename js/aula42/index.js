const usuarios = ['David', null, 'Luiz', undefined, 'Ana', 'Carlos'];

for (let usuario of usuarios) {
    if (!usuario) {
        continue;
    }

    console.log(`Enviando notificacao para: ${usuario.toUpperCase()}`)
}