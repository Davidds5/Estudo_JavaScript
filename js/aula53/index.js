const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();

}

function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criarBtnApagar(li)

}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value)
    }
})

function criarBtnApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar';
    botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', (e) => {
    const ev = e.target;

    if (ev.classList.contains('apagar')) {
        ev.parentElement.remove();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTerfas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTerfas.push(tarefaTexto);
    }

    const tarefasJSon =
        JSON.stringify(listaDeTerfas);
    localStorage.setItem('tarefas', tarefasJSon)
}