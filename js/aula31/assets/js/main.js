const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemana(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'domingo';
        case 1:
            return 'segunda-feira';
        case 2:
            return 'terça-feira';
        case 3:
            return 'quarta-feira';
        case 4:
            return 'quinta-feira';
        case 5:
            return 'sexta-feira';
        case 6:
            return 'sábado';
        default:
            return '';
    }
}

function getMes(mes) {
    switch (mes) {
        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'março';
        case 3:
            return 'abril';
        case 4:
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        case 11:
            return 'dezembro';
        default:
            return '';
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : '0' + num;
}

h1.innerHTML = getDiaSemana(data.getDay()) + ', ' + zeroAEsquerda(data.getDate()) + ' de ' + getMes(data.getMonth()) + ' de ' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
