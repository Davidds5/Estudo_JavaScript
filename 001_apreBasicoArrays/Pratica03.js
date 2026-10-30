const corteCabelo = ['Corte Degrade', 'Corte Social'];
const servicosBarbeiro = ['Barba Terapia', 'Barba Simples']

const comboConcat = corteCabelo.concat(servicosBarbeiro, 'Sobrancelha Navalhada')
console.log(comboConcat)


const menuCompleto = [
    ...corteCabelo,
    'Combo Especial',
    ...servicosBarbeiro,
    'sobrancelha'
]

console.log(menuCompleto)