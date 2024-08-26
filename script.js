    // Formulário
    function Submeter (){
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const email = document.getElementById('email').value;
        const jogador = document.getElementById('jogador').value;
        const agente = document.getElementById('agente').value;
        const ranking = document.getElementById('ranking').value;
        const mensagem = document.getElementById('mensagem');
    //Validação das informações do formulario
    
    mensagem.innerHTML = "";

    if (nome == "") {
        mensagem.innerHTML += `Por favor preencha seu nome.`;
    }

    if (idade == "") {
        mensagem.innerHTML += `<br> Por favor preencha sua idade.`;
    }

    if (email == "") {
        mensagem.innerHTML += `<br> Por favor preencha seu email.`;
    }

    if (jogador == "vazio") {
        mensagem.innerHTML += `<br> Por favor selecione seu jogador favorito.`;
    }

    if (agente == "vazio") {
        mensagem.innerHTML += `<br> Por favor selecione seu agente favorito.`;
    }

    if (ranking == "vazio") {
        mensagem.innerHTML += `<br> Por favor selecione seu ranking.`;
    }

    if (mensagem.innerHTML.length > 0) {
        return;
    }

    // Mensagem de confirmação
    const menssagem_confirmacao = document.createElement('div');
    menssagem_confirmacao.className = 'confirmation-message';
    menssagem_confirmacao.innerHTML = `
        <h2>Obrigado!</h2>
        <p>Seu e-mail: ${email}<br>Seu nome: ${nome}<br>Sua idade: ${idade}<br>Seu jogador favorito: ${jogador}<br>Seu agente favorito: ${agente}<br>Seu ranking: ${ranking}</p>
        `;

    const quadro_confirmacao = document.querySelector('.formulario-landpage');
    quadro_confirmacao.innerHTML = '';
    quadro_confirmacao.appendChild(menssagem_confirmacao);

    // document.getElementById('closeConfirmation').addEventListener('click', () => {
    //     document.getElementById('popup').style.display = 'none';
    // });
    };