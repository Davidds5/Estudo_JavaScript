/**
 * Primitivos: (imutaveis) number, string, boolean, undefinid e o null
 * referencia (mutaveis) Arrays, Objetos, function
 */
let a = [1, 2, 3];
// nesse caso ele esta apenas copiando, nao esta apontando para o mesmo valor
let b = [...a]
let c = a;

console.log("Nao mudamos nada", a, b, c)
b.push("ola mundo")
console.log("Mudamos o b", a, b, c)
a.push("salve")
console.log("Mudamos o a", a, b, c)