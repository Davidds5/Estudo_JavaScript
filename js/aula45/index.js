function validadorIdade(idadeMinima) {
    return function (usuario) {
        if (usuario.idade < idadeMinima) {
            return `entrada negada para ${usuario.nome}! Idade minima ${idadeMinima} anos`
        }

        return 'Entrada liberada para: ' + usuario.nome

    }
}

const permitirMaiorDeIdade = validadorIdade(18);
const permitirEntradaBalada = validadorIdade(21);

console.log(permitirEntradaBalada({ nome: 'Luiz', idade: 12 }));
console.log(permitirMaiorDeIdade({ nome: 'David', idade: 20 }));