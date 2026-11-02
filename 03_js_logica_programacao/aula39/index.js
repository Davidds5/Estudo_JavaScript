const itemTarefas = document.querySelectorAll('#lista-tarefas li')
for (let item of itemTarefas) {
    if (item.innerText.includes('academia')) {
        item.style.backgroundColor = '#28a745';
        item.style.color = '#FFFFFF';
        item.style.padding = '10px';
    } else {
        item.innerText = `✓ ${item.innerText}`
    }
}