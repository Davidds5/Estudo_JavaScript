/**
 * entre 0 - 11 - fala bom dia
 * entre 12 - 17 - fala boa tarde
 * entre 18 - 23 - Boa noite
 * 
 */

// if e obrigatorio e unico
// o else if e op e pode ter varios
// o else e op e unico e ele fica sempre no final, depois dele acaba o codigo
// assim que o javaScript ver a condicao vdd ele ignora o restto
const numero = 7;
if (numero >= 0 && numero <= 5) {
    console.log("Numero esta entre 0 e 5")
} else if (numero >= 6 && numero <= 8) {
    console.log('numero esta entre 6 e 8')
}


console.log('... tudo aqui sera exbido so que estara fora do if')