function meuScopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')


    const pessoas = [];

    function receberEvento(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const idade = form.querySelector('.idade')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')


        const Objetopessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        }
        pessoas.push(Objetopessoa);

        console.log(pessoas)

        resultado.innerHTML = `Nome: ${nome.value} | Sobrenome: ${sobrenome.value} |
        Idade: ${idade.value} | Peso: ${peso.value} | Altura: ${altura.value}`
    };

    form.addEventListener('submit', receberEvento)


}

meuScopo();



