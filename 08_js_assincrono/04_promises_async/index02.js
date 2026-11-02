function buscaUsuarioEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'wesley@barber.com') {
                resolve({
                    id: 1,
                    email: 'wesley@barber.com',
                    nome: 'wesley',
                    senhaSalva: 123456
                });
            } else {
                reject('E-mail nao cadrastado no sistema')
            }

        }, 1000)
    });
}

function validarSenha(senhaDigitada, senhaSalva) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (senhaDigitada === senhaSalva) {
                resolve('TOKEN_JWT_GERADO_COM_SUCESSO_xyz123')
            } else {
                reject('Senha incorreta')
            }
        }, 1000)
    });
}

async function realizarLogin(email, senha) {
    try {
        console.log('1. Buscando usuario no Banco...')
        const usuario = await buscaUsuarioEmail(email);
        console.log(`Usuario encontrado com sucesso ${usuario.nome}`)

        console.log('2. Validando Senha')
        const token = await validarSenha(senha, usuario.senhaSalva);
        console.log(`-> Acesso liberado! Token ${token}`)

        console.log('Login efetuado com sucesso')


    } catch (erro) {
        console.log('Falha no login', erro)
    }

}


realizarLogin('wesley@barber.com', 1234567);