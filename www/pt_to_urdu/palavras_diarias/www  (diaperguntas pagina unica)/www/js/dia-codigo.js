// Estado global
let diaAtual = 1;
let perguntaAtualIndex = 0;
let respostaFinalizada = false;
let palavraFormada = '';
let score = 0;
let respostasCorretas = 0;

// Sons de feedback
const somAcerto = new Audio('sons/acerto.wav');
const somErro = new Audio('sons/erro.wav');

// Função para tocar som de feedback
function tocarSomFeedback(correto) {
    if (correto) {
        somAcerto.currentTime = 0;
        somAcerto.play();
    } else {
        somErro.currentTime = 0;
        somErro.play();
    }
}

// Inicialização
function inicializar() {
    const params = new URLSearchParams(window.location.search);
    const diaParam = params.get('dia');
    if (diaParam && diasConfig[diaParam]) {
        diaAtual = parseInt(diaParam);
    }
    
    // Reinicia as variáveis globais
    score = 0;
    respostasCorretas = 0;
    perguntaAtualIndex = 0;
    palavraFormada = '';
    respostaFinalizada = false;
    
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
        <h1 class="${perguntaAtual.classeExtra || ''}">${perguntaAtual.pergunta}</h1>
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
            const numLetras = pergunta.respostaCorreta.replace(/\s+/g, '').length;
            let espacos;
            
            if (pergunta.respostaCorreta === 'گل لالہ' && pergunta.pergunta.includes('urdu')) {
                // Cria dois grupos de traços: 2 para گل e 4 para لالہ
                espacos = [
                    { valor: '', classe: '' },
                    { valor: '', classe: '' },
                    { valor: '', classe: 'espaco-urdu' },
                    { valor: '', classe: '' },
                    { valor: '', classe: '' },
                    { valor: '', classe: '' },
                    { valor: '', classe: '' }
                ];
            } else {
                // Para outras palavras, mantém a lógica original
                espacos = Array(numLetras + (pergunta.respostaCorreta === 'برف' ? 1 : 0))
                    .fill({ valor: '', classe: '' });
            }
            
            const classeLetra = pergunta.classeExtra ? `letra ${pergunta.classeExtra}` : 'letra';
            
            // Embaralha as letras se for pergunta em português
            let letrasParaMostrar = [...pergunta.letras];
            if (pergunta.pergunta.includes('em português') || pergunta.pergunta.includes('para o português')) {
                letrasParaMostrar = shuffleArray([...pergunta.letras]);
            }
            
            return `
                <div class="palavra-container">
                    <div class="letras-container">
                        ${letrasParaMostrar.map(letra => `
                            <button class="${classeLetra}" onclick="adicionarLetra('${letra}', this)">${letra}</button>
                        `).join('')}
                    </div>
                    <div class="espacos-container">
                        ${espacos.map(espaco => `
                            <div class="letra-espaco ${espaco.classe}">${espaco.valor}</div>
                        `).join('')}
                    </div>
                    <div class="botoes-verificar-container">
                        <button class="botao-verificar" onclick="verificarPalavraFormada()">Verificar</button>
                        <button class="botao-verificar" onclick="limparPalavra()">Limpar</button>
                    </div>
                </div>
            `;
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
    const correto = resposta === perguntaAtual.respostaCorreta;

    tocarSomFeedback(correto);

    if (correto) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        botaoClicado.classList.add('botao-correto');
        respostasCorretas++;
        score += 20;
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
    const correto = index === perguntaAtual.respostaCorretaIndex;

    tocarSomFeedback(correto);

    if (correto) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        imagens[index].style.boxShadow = '0 0 15px 8px rgba(0, 255, 0, 0.4)';
        respostasCorretas++;
        score += 20;
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

    const correto = x >= area.xMin && x <= area.xMax && y >= area.yMin && y <= area.yMax;
    
    tocarSomFeedback(correto);

    if (correto) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        areaFeedback.className = 'area-feedback correta';
        respostasCorretas++;
        score += 20;
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
    
    // Verifica se todas as letras foram preenchidas
    const respostaEsperada = perguntaAtual.respostaCorreta;
    const letrasEsperadas = respostaEsperada.replace(/\s+/g, '').length;
    
    if (palavraFormada.length < letrasEsperadas) {
        feedback.textContent = "Por favor, complete todas as letras primeiro!";
        return;
    }

    // Para palavras com espaço automático, insere o espaço na posição correta
    let palavraParaComparar = palavraFormada;
    if (perguntaAtual.espacoAutomatico) {
        const palavras = respostaEsperada.split(' ');
        let palavraAtual = '';
        let posicao = 0;
        let palavraFormadaComEspaco = '';
        let letrasPorPalavra = palavras.map(p => p.length);
        let posicaoAtual = 0;
        
        for (let tamanho of letrasPorPalavra) {
            if (posicaoAtual + tamanho <= palavraFormada.length) {
                palavraFormadaComEspaco += palavraFormada.substr(posicaoAtual, tamanho);
                if (posicaoAtual + tamanho < palavraFormada.length) {
                    palavraFormadaComEspaco += ' ';
                }
                posicaoAtual += tamanho;
            }
        }
        palavraParaComparar = palavraFormadaComEspaco;
    }

    const correto = palavraParaComparar.toLowerCase() === perguntaAtual.respostaCorreta.toLowerCase();
    
    tocarSomFeedback(correto);

    if (correto) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        respostasCorretas++;
        score += 20;
        atualizarScoreDisplay();
    } else {
        // Verifica se é uma pergunta de formar palavra em urdu
        if (perguntaAtual.pergunta.includes("em urdu") && perguntaAtual.tipo === tiposPergunta.FORMAR_PALAVRA) {
            let letrasUrdu;
            // Se for o dia 8 (Tulipa), mostra as letras com espaço extra entre os dois ل
            if (diaAtual === 8) {
                letrasUrdu = "ہ ل ا ل\u2003ل گ";
            } else if (diaAtual === 18) {
                letrasUrdu = "ہ ل ا ل ل گ";
            } else {
                // Para os outros dias, mostra na ordem dos botões (invertida)
                letrasUrdu = perguntaAtual.letras.slice().reverse().join(' ');
            }
            feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
                <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
                <span>Incorreto! A resposta correta é "<span class="feedback-urdu">${letrasUrdu}</span>".</span>
            </div>`;
        } else if (perguntaAtual.pergunta.includes("para o urdu") && perguntaAtual.tipo === tiposPergunta.FORMAR_PALAVRA) {
            let letrasUrdu;
            // Se for o dia 8 (Tulipa), mostra as letras com espaço extra entre os dois ل
            if (diaAtual === 8) {
                letrasUrdu = "ہ ل ا ل\u2003ل گ";
            } else if (diaAtual === 18) {
                letrasUrdu = "ہ ل ا ل ل گ";
            } else {
                // Para os outros dias, mostra na ordem dos botões (invertida)
                letrasUrdu = perguntaAtual.letras.slice().reverse().join(' ');
            }
            feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
                <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
                <span>Incorreto! A resposta correta é "<span class="feedback-urdu">${letrasUrdu}</span>".</span>
            </div>`;
        } else {
            feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
                <img src="imagens/errado.gif" alt="Incorreto" style="height: 24px; width: auto;">
                <span>Incorreto! A resposta correta é "${perguntaAtual.respostaCorreta}".</span>
            </div>`;
        }
    }

    finalizarResposta();
    desabilitarBotoes();
}

function verificarRespostaTexto() {
    if (respostaFinalizada) return;

    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    const resposta = document.getElementById('respostaTexto').value;
    const feedback = document.getElementById('feedback');
    const correto = resposta === perguntaAtual.respostaCorreta;

    tocarSomFeedback(correto);

    if (correto) {
        feedback.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;">
            <span>Correto!</span>
            <img src="imagens/conffeti.gif" alt="Correto" style="height: 40px; width: auto;">
        </div>`;
        respostasCorretas++;
        score += 20;
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
    if (respostaFinalizada) return;

    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    const respostaCorreta = perguntaAtual.respostaCorreta;
    const letrasEsperadas = respostaCorreta.replace(/\s+/g, '').length;
    
    // Sempre adiciona a letra no final da sequência
    if (palavraFormada.length < letrasEsperadas) {
        palavraFormada += letra;
        botao.disabled = true;
        atualizarEspacos();
    }
}

function atualizarEspacos() {
    const espacos = document.querySelectorAll('.letra-espaco');
    const perguntaAtual = diasConfig[diaAtual].perguntas[perguntaAtualIndex];
    
    // Limpa todos os espaços primeiro
    espacos.forEach(espaco => {
        espaco.textContent = '';
    });
    
    // Se for a palavra گل لالہ em urdu
    if (perguntaAtual.respostaCorreta === 'گل لالہ' && perguntaAtual.pergunta.includes('urdu')) {
        // Adiciona as letras com espaço após a segunda letra
        for (let i = 0; i < palavraFormada.length; i++) {
            if (i < 2) {
                espacos[i].textContent = palavraFormada[i];
            } else {
                // Pula o espaço (índice 2) e continua preenchendo
                espacos[i + 1].textContent = palavraFormada[i];
            }
        }
    } else {
        // Para outras palavras, mantém o comportamento normal
        for (let i = 0; i < palavraFormada.length; i++) {
            espacos[i].textContent = palavraFormada[i];
        }
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
        
        // Garante que o score não ultrapasse 100
        score = Math.min(score, 100);
        voltarPara.searchParams.append('score', score);
        
        if (config.aoAcabarDia.irParaDia) {
            diaAtual = config.aoAcabarDia.irParaDia;
            perguntaAtualIndex = 0;
            score = 0; // Reinicia o score para o novo dia
            respostasCorretas = 0; // Reinicia o contador de respostas corretas
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

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function criarBotoesLetras() {
    const botoesContainer = document.getElementById('botoes-letras');
    botoesContainer.innerHTML = '';
    
    // Se a pergunta é para formar palavra em português, embaralha as letras
    if (perguntaAtual.pergunta.includes('para o português') || perguntaAtual.pergunta.includes('em português')) {
        const letrasEmbaralhadas = shuffleArray([...perguntaAtual.letras]);
        perguntaAtual.letras = letrasEmbaralhadas;
    }
    // Se for para formar em urdu, mantém a ordem original
    
    perguntaAtual.letras.forEach((letra, index) => {
        const botao = document.createElement('button');
        botao.textContent = letra;
        botao.classList.add('letra-botao');
        botao.onclick = () => adicionarLetra(letra, index);
        botoesContainer.appendChild(botao);
    });
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', inicializar);
