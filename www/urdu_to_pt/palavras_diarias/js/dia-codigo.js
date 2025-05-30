// Estado global
let diaAtual = 1;
let perguntaAtualIndex = 0;
let respostaFinalizada = false;
let palavraFormada = '';
let score = 0;
let respostasCorretas = 0;

// Inicialização
function inicializar() {
    const params = new URLSearchParams(window.location.search);
    const diaParam = params.get('dia');
    if (diaParam && diasConfig[diaParam]) {
        diaAtual = parseInt(diaParam);
    }
    
    atualizarTitulo();
    renderizarPergunta();
    atualizarScoreDisplay();
}

function atualizarTitulo() {
    const config = diasConfig[diaAtual];
    const tituloBorda = document.querySelector('.titulo-borda');
    tituloBorda.textContent = `Dia ${diaAtual}`;
}

function renderizarPergunta() {
    const config = diasConfig[diaAtual];
    const perguntaAtual = config.perguntas[perguntaAtualIndex];
    const container = document.getElementById('conteudoPergunta');
    const quadrado = document.querySelector('.quadrado');
    
    // Adiciona ou remove a classe com-imagens dependendo do tipo de pergunta
    if (perguntaAtual.tipo === tiposPergunta.IMAGEM) {
        quadrado.classList.add('com-imagens');
    } else {
        quadrado.classList.remove('com-imagens');
    }
    
    container.innerHTML = `
        <h1>${perguntaAtual.pergunta}</h1>
        ${gerarConteudoPergunta(perguntaAtual)}
        <p id="feedback"></p>
    `;

    respostaFinalizada = false;
    palavraFormada = '';
    document.getElementById('botaoProximo').style.display = 'none';

    // Inicializar handlers específicos
    if (perguntaAtual.tipo === tiposPergunta.IMAGEM_AREA) {
        inicializarAreaClicavel();
    }
}

function gerarConteudoPergunta(pergunta) {
    switch(pergunta.tipo) {
        case tiposPergunta.MULTIPLA_ESCOLHA:
        case tiposPergunta.MULTIPLA_ESCOLHA_AUDIO:
            return gerarMultiplaEscolha(pergunta);
        case tiposPergunta.IMAGEM:
            return gerarSelecaoImagem(pergunta);
        case tiposPergunta.IMAGEM_AREA:
            return gerarImagemArea(pergunta);
        case tiposPergunta.FORMAR_PALAVRA:
            return gerarFormacaoPalavra(pergunta);
        case tiposPergunta.TEXTO:
            return gerarEntradaTexto(pergunta);
        default:
            return '<p>Tipo de pergunta não suportado</p>';
    }
}

function gerarMultiplaEscolha(pergunta) {
    let html = '';
    
    if (pergunta.audioSrc) {
        html += `
            <div class="audio-container">
                <button class="audio-btn" onclick="playAudio('${pergunta.audioSrc}')">
                    ▶ Tocar Áudio
                    <div class="layer-green"></div>
                    <div class="layer-orange"></div>
                </button>
            </div>
        `;
    }

    const numOpcoes = pergunta.opcoes.length;
    const gridClass = numOpcoes === 3 ? 'grid-3' : 'grid-4';

    html += `
        <div class="botoes-container">
            <div class="botoes-grid ${gridClass}">
                ${pergunta.opcoes.map(opcao => 
                    `<button onclick="verificarResposta('${opcao}')">${opcao}</button>`
                ).join('')}
            </div>
        </div>
    `;

    return html;
}

function gerarSelecaoImagem(pergunta) {
    return `
        <div class="imagens-container">
            ${pergunta.imagens.map((img, index) => 
                `<img class="imagem-opcao" src="imagens/${img}" onclick="verificarRespostaImagem(${index})" alt="Opção ${index + 1}">`
            ).join('')}
        </div>
    `;
}

function gerarImagemArea(pergunta) {
    return `
        <div class="area-clicavel">
            <img class="imagem-area" src="imagens/${pergunta.imagem}" alt="Imagem clicável" id="imagemArea">
            <div id="areaFeedback" class="area-feedback"></div>
        </div>
    `;
}

function gerarFormacaoPalavra(pergunta) {
    return `
        <div class="letras-container">
            ${pergunta.letras.map(letra => 
                `<button class="letra" onclick="adicionarLetra('${letra}', this)">${letra}</button>`
            ).join('')}
        </div>
        <div class="espacos-container">
            ${Array(pergunta.respostaCorreta.length).fill().map(() => 
                `<span class="letra-espaco"></span>`
            ).join('')}
        </div>
        <div class="botoes-controle">
            <button onclick="verificarPalavraFormada()">Verificar</button>
            <button onclick="limparPalavra()">Limpar</button>
        </div>
    `;
}

function gerarEntradaTexto(pergunta) {
    return `
        <input type="text" class="texto-input" id="respostaTexto" placeholder="Digite sua resposta">
        <div class="botoes-controle">
            <button onclick="verificarRespostaTexto()">Verificar</button>
        </div>
    `;
}
function sair() {
    // const config = diasConfig[diaAtual-1] || diasConfig[diaAtual];
    // if (config.aoAcabarDia.voltarPara) {
        // const voltarPara = new URL(config.aoAcabarDia.voltarPara, window.location.href);
        // voltarPara.searchParams.append('score', score);
        // window.location.href = voltarPara.toString();
    // } else {
        window.location.href = 'dias.html';
    // }
}

// Atualiza o score na interface
function atualizarScoreDisplay() {
    document.getElementById('scoreDisplay').textContent = score;
}

// Funções de verificação de resposta
function verificarResposta(resposta) {
    if (respostaFinalizada) return;

    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    const feedback = document.getElementById('feedback');
    const botaoClicado = event.target;

    if (resposta === perguntaAtual.respostaCorreta) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        botaoClicado.classList.add('botao-correto');
        respostasCorretas++;
        score += Math.pow(2, respostasCorretas);
        atualizarScoreDisplay();
    } else {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
            <span>Incorreto! A resposta correta é "${perguntaAtual.respostaCorreta}".</span>
        </div>`;
        botaoClicado.classList.add('botao-incorreto');
    }

    finalizarResposta();
}

function verificarRespostaImagem(index) {
    if (respostaFinalizada) return;

    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    const feedback = document.getElementById('feedback');
    const imagens = document.querySelectorAll('img');

    if (index === perguntaAtual.respostaCorretaIndex) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        imagens[index].style.boxShadow = '0 0 15px 8px rgba(0, 255, 0, 0.4)';
        respostasCorretas++;
        score += Math.pow(2, respostasCorretas);
        atualizarScoreDisplay();
    } else {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
            <span>Incorreto!</span>
        </div>`;
        imagens[index].style.boxShadow = '0 0 15px 8px rgba(255, 0, 0, 0.4)';
        imagens[perguntaAtual.respostaCorretaIndex].style.boxShadow = '0 0 15px 8px rgba(0, 255, 0, 0.4)';
    }

    finalizarResposta();
    desabilitarImagens();
}

function verificarAreaClicavel(event) {
    if (respostaFinalizada) return;

    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    const imagem = event.target;
    const rect = imagem.getBoundingClientRect();
    
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const area = perguntaAtual.areaCorreta;
    const feedback = document.getElementById('feedback');
    const areaFeedback = document.getElementById('areaFeedback');

    const feedbackLeft = (area.xMin / 100) * rect.width;
    const feedbackTop = (area.yMin / 100) * rect.height;
    const feedbackWidth = ((area.xMax - area.xMin) / 100) * rect.width;
    const feedbackHeight = ((area.yMax - area.yMin) / 100) * rect.height;

    areaFeedback.style.left = `${feedbackLeft}px`;
    areaFeedback.style.top = `${feedbackTop}px`;
    areaFeedback.style.width = `${feedbackWidth}px`;
    areaFeedback.style.height = `${feedbackHeight}px`;

    if (x >= area.xMin && x <= area.xMax && y >= area.yMin && y <= area.yMax) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        areaFeedback.className = 'area-feedback correta';
        respostasCorretas++;
        score += Math.pow(2, respostasCorretas);
        atualizarScoreDisplay();
    } else {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
            <span>Incorreto! Esta era a área correta.</span>
        </div>`;
        areaFeedback.className = 'area-feedback correta';
        imagem.style.pointerEvents = 'none';
    }
    
    finalizarResposta();
}

function verificarPalavraFormada() {
    if (respostaFinalizada) return;

    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    const feedback = document.getElementById('feedback');

    if (palavraFormada.length < perguntaAtual.respostaCorreta.length) {
        feedback.textContent = "Por favor, complete todas as letras primeiro!";
        return;
    }

    if (palavraFormada === perguntaAtual.respostaCorreta) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        respostasCorretas++;
        score += Math.pow(2, respostasCorretas);
        atualizarScoreDisplay();
    } else {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
            <span>Incorreto! A resposta correta é "${perguntaAtual.respostaCorreta}".</span>
        </div>`;
    }

    finalizarResposta();
    desabilitarBotoes();
}

function verificarRespostaTexto() {
    if (respostaFinalizada) return;

    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    const resposta = document.getElementById('respostaTexto').value;
    const feedback = document.getElementById('feedback');

    if (resposta === perguntaAtual.respostaCorreta) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        respostasCorretas++;
        score += Math.pow(2, respostasCorretas);
        atualizarScoreDisplay();
    } else {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
            <span>Incorreto! A resposta correta é "${perguntaAtual.respostaCorreta}".</span>
        </div>`;
    }

    finalizarResposta();
    document.getElementById('respostaTexto').disabled = true;
}

// Funções auxiliares
function playAudio(src) {
    new Audio(src).play();
}

function adicionarLetra(letra, botao) {
    if (respostaFinalizada || palavraFormada.length >= diasConfig[diaAtual].perguntas[perguntaAtualIndex].respostaCorreta.length) return;

    palavraFormada += letra;
    botao.disabled = true;
    atualizarEspacos();
}

function atualizarEspacos() {
    const espacos = document.querySelectorAll('.letra-espaco');
    for (let i = 0; i < espacos.length; i++) {
        espacos[i].textContent = palavraFormada[i] || '';
    }
}

function limparPalavra() {
    if (respostaFinalizada) return;

    palavraFormada = '';
    atualizarEspacos();
    document.querySelectorAll('.letra').forEach(botao => botao.disabled = false);
}

function inicializarAreaClicavel() {
    const imagem = document.getElementById('imagemArea');
    if (imagem) {
        // Espera a imagem carregar para garantir dimensões corretas
        imagem.onload = () => {
            imagem.addEventListener('click', verificarAreaClicavel);
        };
        // Adiciona o listener mesmo se a imagem já estiver carregada
        if (imagem.complete) {
            imagem.addEventListener('click', verificarAreaClicavel);
        }
    }
}

function finalizarResposta() {
    respostaFinalizada = true;
    document.getElementById('botaoProximo').style.display = 'flex';
}

function desabilitarBotoes() {
    document.querySelectorAll('button.letra').forEach(botao => {
        botao.disabled = true;
    });
}

function desabilitarImagens() {
    document.querySelectorAll('img').forEach(img => {
        img.style.pointerEvents = 'none';
    });
}

function proximaPergunta() {
    perguntaAtualIndex++;
    const config = diasConfig[diaAtual];
    
    if (perguntaAtualIndex >= config.perguntas.length) {
        // Fim do dia atual
        const voltarPara = new URL(config.aoAcabarDia.voltarPara, window.location.href);
        voltarPara.searchParams.append('score', score);
        
        if (config.aoAcabarDia.irParaDia) {
            diaAtual = config.aoAcabarDia.irParaDia;
            perguntaAtualIndex = 0;
            atualizarTitulo();
        } else {
            window.location.href = voltarPara.toString();
            return;
        }
    }
    
    renderizarPergunta();
}

function mostrarModal() {
    document.getElementById('modalSair').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modalSair').style.display = 'none';
}

function confirmarSair() {
    sair()
}

// Fechar modal se clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modalSair');
    if (event.target == modal) {
        fecharModal();
    }
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', inicializar);
