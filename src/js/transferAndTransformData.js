import { formatDateBRtoUS } from './dateTransformations.js';

export function transferAndTransformData() {
    // Captura dos dados da tabela brasileira
    const getValue = id => document.getElementById(id).value || '';

    // Usando a função auxiliar para obter valores ou retornar uma string vazia se não houver valor
    const numeroRegistro = getValue('numero-registro');
    const dataEmissao = getValue('data-emissao');
    const nomeRegistrado = getValue('nome-registrado');
    const sexo = getValue('sexo');
    const dataNascimento = getValue('data-nascimento');
    const horaNascimento = getValue('hora-nascimento');
    const localNascimento = getValue('local-nascimento');
    const cidadeEstadoNascimento = getValue('cidade-estado-nascimento');
    const nomePai = getValue('nome-pai');
    const nomeMae = getValue('nome-mae');
    const avosPaternos = getValue('avos-paternos');
    const avosMaternos = getValue('avos-maternos');
    const gemeos = getValue('gemeos');
    const nomeRegistroGemeos = getValue('nome-registro-gemeos');
    const dataRegistro = getValue('data-registro');
    const observacoes = getValue('observacoes');
    const notasRegistro = getValue('notas-registro');
    const tipoDocumento = getValue('tipo-documento');
    const numero = getValue('numero');
    const matricula = getValue('matricula');
    const cidadeEstadoRegistro = getValue('cidade-estado-registro');

    // Verificação e formatação de datas
    const formatValidDate = date => date ? formatDateBRtoUS(date) : '';

    // Preenchimento dos dados na tabela americana
    document.getElementById('registration-number').value = numeroRegistro;
    document.getElementById('issuance-date').value = formatValidDate(dataEmissao);
    document.getElementById('name').value = nomeRegistrado;
    document.getElementById('gender').value = sexo.toUpperCase();  // Garante que o sexo esteja em maiúsculas
    document.getElementById('date-time-birth').value = formatValidDate(dataNascimento) + (horaNascimento ? 'T' + horaNascimento : '');
    document.getElementById('place-birth-city-state').value = localNascimento + (cidadeEstadoNascimento ? ', ' + cidadeEstadoNascimento : '');
    document.getElementById('father').value = nomePai;
    document.getElementById('mother').value = nomeMae;
    document.getElementById('paternal-grandparents').value = avosPaternos;
    document.getElementById('maternal-grandparents').value = avosMaternos;
    document.getElementById('twins').value = gemeos === "Sim" ? "Yes" : "No";
    document.getElementById('name-registration-twins').value = nomeRegistroGemeos;
    document.getElementById('date-registration').value = formatValidDate(dataRegistro);
    document.getElementById('observations').value = observacoes;
    document.getElementById('registration-notes').value = notasRegistro;
    document.getElementById('document-type').value = tipoDocumento;
    document.getElementById('document-number').value = numero;
    document.getElementById('registration').value = matricula;
    document.getElementById('city-state-registration').value = cidadeEstadoRegistro;
}
