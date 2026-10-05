const tarefas = ['planejar', 'codar', 'testar'];
const [itemRemovido] = tarefas.splice(2, 0);

tarefas.splice(0, 0, itemRemovido)
console.log(tarefas)