function clicarLi(event){

    const idLi = event.target.id;
    const textoli = event.target.textContent;
    const novaMatricula = document.createElement('li');
    const botaoRemover = document.createElement('button');
    const novoRegistro = document.getElementById('registroList');

    novaMatricula.className = 'novaMatricula';
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('btn');
    botaoRemover.classList.add('btn-primary');
    botaoRemover.classList.add('btn-sm');

    novaMatricula.innerHTML = `<span>${textoli}</span>`;

    novaMatricula.appendChild(botaoRemover);

    novoRegistro.appendChild(novaMatricula);

    botaoRemover.addEventListener('click', function(){
        novoRegistro.removeChild(novaMatricula);
        novoRegistro.removeChild(botaoRemover);
        novoRegistro.removeChild(novoRegistro);
    });
}

function confirmacao(){
    const registro = document.getElementById('registroList');
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const cpf = document.getElementById('CPF');

    registro.children.length;

    if(registro.children.length < 10){
        alert("Voce precisa escolher 5 matérias");
    } else if(registro.children.length > 10) {
        alert(`Limite de matérias atingido. Remova ${registro.children.length/2 -5} matérias `);
    } else if(nome || sobrenome || CPF === '') {
        alert("Informe seus dados");
    } else {
        alert("Matricula concluída")
    }
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );