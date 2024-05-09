// Função para converter de formato brasileiro para americano
export function formatDateBRtoUS(date) {
    const parts = date.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // yyyy-MM-dd
}