// Função para formatar a data para o formato dd/MM/aaaa
export function formatDate(input) {
    var date = input.value.trim();
    if (!date) return;

    var parts = date.split('/').reverse();
    if (parts.length === 3) {
        var formattedDate = new Date(parts.join('-') + 'T00:00:00Z');
        if (!isNaN(formattedDate.getTime())) {
            input.value = ('0' + formattedDate.getUTCDate()).slice(-2) + '/' +
                          ('0' + (formattedDate.getUTCMonth() + 1)).slice(-2) + '/' +
                          formattedDate.getUTCFullYear();
        } else {
            alert("Data inválida. Por favor, use o formato dd/MM/aaaa.");
            input.value = '';
        }
    } else {
        alert("Por favor, insira a data no formato dd/MM/aaaa.");
        input.value = '';
    }
}

// Função para converter a data do formato brasileiro para o formato americano
export function formatDateBRtoUS(date) {
    const parts = date.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // yyyy-MM-dd
}
