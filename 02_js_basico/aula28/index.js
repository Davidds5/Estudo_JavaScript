// O objeto Date é uma função construtora no JavaScript para lidar com datas e horas.
// Semelhante ao java.time (como LocalDateTime ou Instant) no Java.

// 1. Criando uma data com a hora atual (Semelhante a Instant.now() no Java)
const dataAtual = new Date();
console.log('Data Atual:', dataAtual.toString());

// 2. Criando uma data específica passando os parâmetros:
// Sintaxe: new Date(ano, mes, dia, hora, minuto, segundo, ms)
// ATENÇÃO: O mês começa em 0 (Janeiro = 0, Dezembro = 11), igual ao clássico java.util.Calendar!
const dataEspecifica = new Date(2026, 7, 10, 23, 40, 0); // 10 de Agosto de 2026 (Agosto é index 7)
console.log('Data específica:', dataEspecifica.toString());

// 3. Criando uma data a partir de uma String formatada (Sintaxe comum de API)
const dataString = new Date('2026-08-10T23:40:00Z'); // Formato ISO 8601
console.log('Data de String ISO:', dataString.toString());

// 4. Métodos para obter partes individuais da data (Semelhante ao getDayOfMonth(), getMonth() no Java)
console.log('Dia do mês:', dataAtual.getDate());
console.log('Mês (0-11):', dataAtual.getMonth()); // Lembre-se: Janeiro é 0
console.log('Ano:', dataAtual.getFullYear());
console.log('Dia da semana (0-6):', dataAtual.getDay()); // 0 = Domingo, 6 = Sábado
console.log('Horas:', dataAtual.getHours());
console.log('Minutos:', dataAtual.getMinutes());
console.log('Segundos:', dataAtual.getSeconds());
console.log('Milisegundos desde a época Unix:', dataAtual.getTime()); // Semelhante a System.currentTimeMillis()