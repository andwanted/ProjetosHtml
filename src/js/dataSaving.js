// Exporta a função salvarDados
export async function salvarDados() {
    let dados = [];
    let camposNaoEncontrados = [];

    // Lista de IDs dos campos e seus respectivos rótulos para capturar os dados corretamente e na ordem desejada
    const fields = [
        { id: 'registration-number', label: 'REGISTRATION NUMBER OF ALIVE BIRTH'},    
        { id: 'issuance-date', label: 'ISSUANCE DATE' },
        { id: 'name', label: 'NAME' },
        { id: 'gender', label: 'GENDER' },
        { id: 'date-time-birth', label: 'DATE AND TIME OF BIRTH' },
        { id: 'place-birth-city-state', label: 'PLACE OF BIRTH, CITY AND STATE' },
        { id: 'father', label: 'FATHER' },
        { id: 'mother', label: 'MOTHER' },
        { id: 'paternal-grandparents', label: 'PATERNAL GRANDPARENTS' },
        { id: 'maternal-grandparents', label: 'MATERNAL GRANDPARENTS' },
        { id: 'twins', label: 'TWINS' },
        { id: 'name-registration-twins', label: 'NAME AND REGISTRATION OF TWINS' },
        { id: 'date-registration', label: 'DATE OF REGISTRATION' },
        { id: 'registration-notes', label: 'REGISTRATION NOTES' },
        { id: 'document-type', label: 'DOCUMENT TYPE' },
        { id: 'number', label: 'DOCUMENT NUMBER' },
        { id: 'registration', label: 'REGISTRATION' },
        { id: 'city-state-registration', label: 'CITY AND STATE OF REGISTRATION' },
        { id: 'observations', label: 'OBSERVATIONS' },
        { id: 'social-security-card', label: 'SOCIAL SECURITY CARD' },
        { id: 'notes-amendments', label: 'NOTES AMENDMENTS TO ADD' },
        { id: 'city-state-birth', label: 'CITY AND STATE OF BIRTH' }
    ];

    // Iterar sobre a lista de IDs e labels para capturar os valores dos inputs
    fields.forEach(({ id, label }) => {
        const input = document.getElementById(id);
        if (input) {
            let value = input.value.trim() || 'empty'; // Usar 'empty' se o campo estiver vazio
            dados.push(`${label}: ${value}`);
        } else {
            camposNaoEncontrados.push(label); // Adicionar ao array de campos não encontrados
        }
    });

    const conteudo = dados.join('\n');

    try {
        const handle = await window.showSaveFilePicker({
            suggestedName: 'input.txt',
            types: [{description: 'Text Files', accept: {'text/plain': ['.txt']}}],
        });
        const writable = await handle.createWritable();
        await writable.write(conteudo);
        await writable.close();
        alert('Dados salvos com sucesso!');
    } catch (err) {
        console.error('Erro ao salvar o arquivo:', err);
    }

    // Emitir um alerta se houver campos não encontrados
    if (camposNaoEncontrados.length > 0) {
        alert('Campos não encontrados: ' + camposNaoEncontrados.join(', '));
    }
}
