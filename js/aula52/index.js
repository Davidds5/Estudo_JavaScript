const texto = 'barbeiro'

let i = 0;

const timerId = setInterval(() => {
    console.log(texto[i])
    i++;
    if (i >= texto.length) {
        clearInterval(timerId)
        console.log('Digitacao concluida')
    }
}, 300)