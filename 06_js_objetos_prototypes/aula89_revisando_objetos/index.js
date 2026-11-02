const barbeiro = {
    nome: 'Luiz',
    especialidade: 'Degrade',
    cortesHoje: 0,

    realizarCorte() {
        this.cortesHoje++;
        return `✂️ ${this.nome} realizou mais um corte! Total hoje: ${this.cortesHoje}`;
    }

};

console.log(barbeiro.nome)
