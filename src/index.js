// Importações de funções de outros arquivos
import { formatDateBRtoUS } from './js/dataFormatting.js';
import { forceUppercaseAndLettersOnly, formatInputDate } from './js/inputFormatting.js';
import { handleTwins } from './js/twinsHandling.js';
import { transferAndTransformData } from './js/transferAndTransformData.js';
import { salvarDados as dataSaving } from './js/dataSaving.js';

// Esperar até que todo o conteúdo da página tenha sido carregado
document.addEventListener('DOMContentLoaded', function () {
    initApp(); // Inicializa a aplicação
    attachEventHandlers(); // Anexa os manipuladores de evento
});

function initApp() {
    // Inicializações podem ser feitas aqui
    console.log('Aplicação inicializada');
}

function attachEventHandlers() {
    // Eventos para formatar input de datas
    const dateInputs = document.querySelectorAll('.data-brasil');
    dateInputs.forEach(input => {
        input.addEventListener('input', formatInputDate); // Usando função já definida, se aplicável
    });

    // Manipulação de eventos de inputs específicos
    document.getElementById('nome-registrado').addEventListener('input', function() {
        forceUppercaseAndLettersOnly(this);
    });

    document.getElementById('sexo').addEventListener('input', function() {
        this.value = this.value.toUpperCase();
    });

    document.getElementById('data-emissao').addEventListener('blur', function() {
        formatDateBRtoUS(this);
    });

    document.getElementById('data-nascimento').addEventListener('blur', function() {
        formatDateBRtoUS(this);
    });

    document.getElementById('gemeos').addEventListener('change', function() {
        handleTwins(this);
    });

    // Botões e suas ações
    document.getElementById('fillButton').addEventListener('click', transferAndTransformData);
    document.getElementById('saveButton').addEventListener('click', dataSaving);
}
