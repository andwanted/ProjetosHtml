export function handleTwins(select) {
    var field = document.getElementById('nome-registro-gemeos');
    if (select.value === "Sim") {
        field.disabled = false;
    } else {
        field.disabled = true;
        field.value = '';
    }
}
