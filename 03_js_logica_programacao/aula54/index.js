function lavarPratos(inicio, fim) {
    if (inicio > fim) {
        console.log('Pia limpa ! Todos os pratos foram lavados')
        return;
    }

    console.log(`Lavando pratos ${inicio} de ${fim}...`)

    lavarPratos(inicio + 1, fim)
}

lavarPratos(1, 5    