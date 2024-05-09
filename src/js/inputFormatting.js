export function formatInputDate() {
    document.addEventListener('DOMContentLoaded', function () {
        var inputs = document.querySelectorAll('.data-brasil');
        inputs.forEach(function(input) {
            input.addEventListener('input', function (e) {
                var valor = e.target.value;
                valor = valor.replace(/\D/g, ''); // Remover todos os caracteres que não sejam dígitos

                if (valor.length > 2) {
                    valor = valor.substring(0, 2) + '/' + valor.substring(2);
                }
                if (valor.length > 5) {
                    valor = valor.substring(0, 5) + '/' + valor.substring(5);
                }
                e.target.value = valor;
            });
        });
    });
}

export function forceUppercaseAndLettersOnly(input) {
    input.value = input.value.toUpperCase().replace(/[^a-zA-Z\s]/g, '');
}
