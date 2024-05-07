// Função para adicionar o h1 após a cor de fundo ficar vermelha
function adicionarMensagem() {
    // Cria um novo elemento h1
    var h1 = document.createElement("h1");
    // Define o texto do h1
    h1.textContent = "Mãe, nós te amamos muito!";
    // Adiciona uma classe ao h1 para estilização
    h1.classList.add("mensagem-mae");
    // Adiciona o h1 ao corpo da página
    document.body.appendChild(h1);
  }
  
  // Função para agendar a adição da mensagem após a mudança de cor de fundo
  function agendarMensagem() {
    // Espera 4 segundos (2 segundos da mudança de cor e mais 2 segundos adicionais)
    setTimeout(adicionarMensagem, 5500);
  }
  
  // Chama a função para agendar a adição da mensagem
  agendarMensagem();
  