function verificaHorario(horario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (horario === '14:00') {
                reject('Horario Ocupado')
            } else {
                resolve({
                    horario: horario,
                    barbeiro: 'Wesley'
                })
            }
        }, 1000)
    })
}


function confirmaAgendamento(nomeCliente, dadosHorarios) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nomeCliente === "") {
                reject('Nome Cliente Obrigatorio')
            } else {
                resolve({
                    status: 'Confirmado',
                    protocolo: 'BARBER_99',
                    cliente: nomeCliente,
                    horario: dadosHorarios.horario
                })
            }
        }, 1000)
    })
}


async function solicitarCorte(nome, horario) {
    try {
        console.log('Verificando Horario...')
        const resultado = await verificaHorario(horario);
        console.log('Horario verificado com sucesso:', resultado.horario)

        console.log('Confirmando agendamento');
        const confirmando = await confirmaAgendamento(nome, resultado)
        console.log('Agendamento confirmado com sucesso:', confirmando.status)

    } catch (erro) {
        console.log(erro)
    }

}

solicitarCorte('', '10:00')