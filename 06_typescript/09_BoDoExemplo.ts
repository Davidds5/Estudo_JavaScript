interface SucessoAgendamento {
    tipo: 'sucesso',
    horario: string
}

interface ErroHorarioOcupado {
    tipo: 'horario_ocupado'
    sugestoes: string[];
}

interface ErroServidor {
    tipo: 'erro_servidor';
    codigoHttp: number;
}

type RespostaAgendamento = SucessoAgendamento | ErroHorarioOcupado | ErroServidor;

function processaResposta(res: RespostaAgendamento) {
    switch (res.tipo) {
        case 'sucesso':
            console.log(`Agendamento para: ${res.horario}`)

            break;
        case 'horario_ocupado':
            console.log(`Ocupado! Horarios livres: ${res.sugestoes}`)
            break;

        case 'erro_servidor':
            console.log(`Erro ${res.codigoHttp} no backend`)
    }
}

// Testando os 3 casos:
processaResposta({ tipo: 'sucesso', horario: '14:30' });
processaResposta({ tipo: 'horario_ocupado', sugestoes: ['15:00', '16:30'] });
processaResposta({ tipo: 'erro_servidor', codigoHttp: 500 });
