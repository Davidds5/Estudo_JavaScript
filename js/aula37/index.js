const usuarioApi = {
    nome: 'David Silva',
    cargo: 'Dev full Stack',
    empresa: 'Accenture'
}

for (let chave in usuarioApi) {
    console.log(`${chave} : ${usuarioApi[chave]}`)
}
// for in -> ler indice ou chaves de objetos