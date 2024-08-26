// Formulário
function Submeter() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const jogador = document.getElementById('jogador').value;
    const agente = document.getElementById('agente').value;
    const ranking = document.getElementById('ranking').value;
    const mensagem = document.getElementById('modalMensagem');

    // Validação das informações do formulário
    mensagem.innerHTML = "";

    if (nome === "") {
        mensagem.innerHTML += `Por favor preencha seu nome.<br>`;
    }

    if (idade === "") {
        mensagem.innerHTML += `Por favor preencha sua idade.<br>`;
    }

    if (email === "") {
        mensagem.innerHTML += `Por favor preencha seu email.<br>`;
    }

    if (jogador === "vazio") {
        mensagem.innerHTML += `Por favor selecione seu jogador favorito.<br>`;
    }

    if (agente === "vazio") {
        mensagem.innerHTML += `Por favor selecione seu agente favorito.<br>`;
    }

    if (ranking === "vazio") {
        mensagem.innerHTML += `Por favor selecione seu ranking.<br>`;
    }

    if (mensagem.innerHTML.length > 0) {
        document.getElementById('validationModal').style.display = 'block';
        return;
    }

    // Mensagem de confirmação
    const mensagem_confirmacao = document.createElement('div');
    mensagem_confirmacao.className = 'confirmation-message';
    mensagem_confirmacao.innerHTML = `
        <h2>Obrigado!</h2>
        <p>Seu e-mail: ${email}</p>
        <p>Seu nome: ${nome}<p>Sua idade: ${idade}</p>
        <p>Seu jogador favorito: ${jogador}</p>
        <p>Seu agente favorito: ${agente}</p>
        <p>Seu ranking: ${ranking}</p>
    `;

    const quadro_confirmacao = document.querySelector('.formulario-landpage');
    quadro_confirmacao.innerHTML = '';
    quadro_confirmacao.appendChild(mensagem_confirmacao);
}

window.onload = function() {
    // Fechar o modal 
    document.querySelector('.modal-content .close').addEventListener('click', function() {
        document.getElementById('validationModal').style.display = 'none';
    });

    // Fechar o modal ao clicar fora da área do modal
    window.onclick = function(event) {
        const modal = document.getElementById('validationModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};


