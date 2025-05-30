// Configuração do tempo de espera (24 horas em milissegundos)
const TEMPO_ESPERA = 24 * 60 * 60 * 1000; // 24 horas

// Função para verificar se é a primeira vez que o usuário acessa
function verificarPrimeiroAcesso() {
    const primeiroAcesso = localStorage.getItem('primeiroAcesso');
    if (!primeiroAcesso) {
        localStorage.setItem('primeiroAcesso', Date.now().toString());
    }
    console.log('Primeiro acesso:', primeiroAcesso);
    return localStorage.getItem('primeiroAcesso');
}

// Função para calcular o tempo restante em milissegundos
function calcularTempoRestanteMS(numeroDia) {
    const primeiroAcesso = parseInt(verificarPrimeiroAcesso());
    const agora = Date.now();
    const tempoPassado = agora - primeiroAcesso;
    const tempoNecessario = (numeroDia - 1) * TEMPO_ESPERA;
    return Math.max(0, tempoNecessario - tempoPassado);
}

// Função para verificar se um dia específico está disponível
function isDiaDisponivel(numeroDia) {
    if (numeroDia === 1) return true;
    return calcularTempoRestanteMS(numeroDia) <= 0;
}

// Função para encontrar o próximo dia a ser desbloqueado
function encontrarProximoDia() {
    const dayBoxes = document.querySelectorAll('.day-box');
    for (let i = 0; i < dayBoxes.length; i++) {
        const numeroDia = i + 1;
        if (!isDiaDisponivel(numeroDia)) {
            return numeroDia;
        }
    }
    return null; // Todos os dias já estão desbloqueados
}

// Função para formatar número com zero à esquerda
function formatarNumero(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

// Função para formatar tempo restante
function formatarTempoRestante(tempoRestanteMS) {
    const horas = Math.floor(tempoRestanteMS / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestanteMS % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestanteMS % (1000 * 60)) / 1000);
    return `${formatarNumero(horas)}:${formatarNumero(minutos)}:${formatarNumero(segundos)}`;
}

// Função para atualizar o contador na navbar
function atualizarContadorProximoDia() {
    const proximoDia = encontrarProximoDia();
    const contadorElement = document.getElementById('proximoDiaContador');
    const proximoDiaElement = document.querySelector('.proximo-dia');
    
    if (!proximoDia || proximoDia === 1) {
        proximoDiaElement.style.display = 'none';
        return;
    }
    
    proximoDiaElement.style.display = 'flex';
    const tempoRestanteMS = calcularTempoRestanteMS(proximoDia);
    contadorElement.textContent = formatarTempoRestante(tempoRestanteMS);
}

// Função para atualizar a interface dos dias
function atualizarDiasDisponiveis() {
    const dayBoxes = document.querySelectorAll('.day-box');
    dayBoxes.forEach((box, index) => {
        const numeroDia = index + 1;
        const disponivel = isDiaDisponivel(numeroDia);
        
        // Remove o elemento de tempo restante se existir
        const tempoRestenteAntigo = box.querySelector('.tempo-restante');
        if (tempoRestenteAntigo) {
            tempoRestenteAntigo.remove();
        }
        
        if (!disponivel) {
            box.classList.add('locked');
            const tempoRestanteMS = calcularTempoRestanteMS(numeroDia);
            const diasRestantes = Math.ceil(tempoRestanteMS / TEMPO_ESPERA);
            const tempoFormatado = formatarTempoRestante(tempoRestanteMS);
            
            const mensagem = `Daqui a ${diasRestantes} dia${diasRestantes > 1 ? 's' : ''}`;
            const mensagemTooltip = `Daqui a ${diasRestantes} dia${diasRestantes > 1 ? 's' : ''} (${tempoFormatado})`;
            
            box.title = mensagemTooltip;
            
            // Adiciona o texto do tempo restante dentro da caixa
            const tempoRestante = document.createElement('div');
            tempoRestante.className = 'tempo-restante';
            tempoRestante.textContent = mensagem;
            box.appendChild(tempoRestante);
        } else {
            box.classList.remove('locked');
            box.removeAttribute('title');
        }
    });
    
    // Atualiza o contador na navbar
    atualizarContadorProximoDia();
}

// Inicializa o controle de dias quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    verificarPrimeiroAcesso();
    atualizarDiasDisponiveis();
    
    // Atualiza a cada segundo para o relógio digital
    setInterval(atualizarDiasDisponiveis, 1000);
}); 