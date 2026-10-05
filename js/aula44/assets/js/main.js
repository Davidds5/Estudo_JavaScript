function relogio() {
    function criarHoraDosSegundos(segundos) {

        // aqui e segundo * 1000 por que sera millesegundos?
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });

    }
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;


    function iniciaRelogio() {

        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criarHoraDosSegundos(segundos)
        }, 1000)
    }




}