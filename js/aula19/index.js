
//Objeto pronto(literal)
const pessoa1 = {
    nome: "Luiz",
    sobreNome: "Miranda",
    idade: 26,
    // criamos uma function dentro do objeto, que essa function e chamada como metodo
    fala() {
        console.log(`Meu nome e ${this.nome} e a minha idade e ${this.idade}`)
    },

    incrementarIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementarIdade();

pessoa1.fala();
