// Função para adicionar a mensagem, a figurinha da cartinha e a cartinha modal após a mudança de cor de fundo
function adicionarMensagem() {
    // Cria um novo elemento h1 para representar a mensagem para a mãe
    var h1 = document.createElement("h1");
    h1.textContent = "Mãe, nós te amamos muito!";
    h1.classList.add("mensagem-mae");
    document.body.appendChild(h1);

    // Cria um novo elemento div para representar a figurinha da cartinha
    var cartinhaIcon = document.createElement("div");
    cartinhaIcon.classList.add("cartinha-icon");
    cartinhaIcon.textContent = "💌";
    cartinhaIcon.onclick = toggleCartinha;
    document.body.appendChild(cartinhaIcon);

    // Cria um novo elemento div para representar o modal da cartinha
    var cartinhaModal = document.createElement("div");
    cartinhaModal.classList.add("cartinha-modal");
    cartinhaModal.id = "cartinha-modal";
    cartinhaModal.style.display = "none"; // Inicialmente oculto
    document.body.appendChild(cartinhaModal);

    // Adiciona conteúdo ao modal da cartinha (conteúdo da carta)
    var cartinhaContent = document.createElement("div");
    cartinhaContent.classList.add("cartinha-content");
    cartinhaModal.appendChild(cartinhaContent);

    var closeButton = document.createElement("span");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "×";
    closeButton.onclick = toggleCartinha;
    cartinhaContent.appendChild(closeButton);

    var cartaTitle = document.createElement("h2");
    cartaTitle.textContent = "Mãe,";
    cartinhaContent.appendChild(cartaTitle);

    var cartaText = document.createElement("p");
    cartaText.innerHTML = "Quero expressar o quanto você é especial em nossas vidas e a gratidão que sentimos por te termos como mãe. És o melhor que poderíamos ter, uma luz nos momentos de escuridão, a esperança nos dias difíceis, és amor a cada dia. Te amo mais do que tudo neste mundo. Mesmo que expressássemos todas as palavras positivas existentes, ainda assim não seria suficiente para descrever o quanto significas para nós. Mais uma vez, nosso amor ultrapassa os limites do universo! ❤ <br><br>Ass: Biel e Ana";
    cartinhaContent.appendChild(cartaText);
    
    
    // Adiciona uma classe para iniciar a animação de aparição
    setTimeout(function() {
        cartinhaModal.style.display = "block";
        cartinhaModal.classList.add("fade-in");
    }, 4000); // Atraso de 5 segundos para aguardar a exibição da frase
}

// Função para agendar a adição da mensagem e da figurinha após a mudança de cor de fundo
function agendarMensagem() {
    // Espera 4 segundos (2 segundos da mudança de cor e mais 2 segundos adicionais)
    setTimeout(adicionarMensagem, 5500);
}

// Chama a função para agendar a adição da mensagem e da figurinha
agendarMensagem();

// Função para alternar a visibilidade do modal da cartinha
function toggleCartinha() {
    var modal = document.getElementById('cartinha-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}