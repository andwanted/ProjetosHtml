import { formatDate, formatDateBRtoUS } from './dataFormatting';
import { forceUppercaseAndLettersOnly } from './inputFormatting';
import { handleTwins } from './twinsHandling';

export function attachEvents() {
    document.addEventListener('DOMContentLoaded', function() {
        var nomeRegistrado = document.getElementById('nome-registrado');
        var sexo = document.getElementById('sexo');
        var dataEmissao = document.getElementById('data-emissao');
        var dataNascimento = document.getElementById('data-nascimento');
        var gemeosSelect = document.getElementById('gemeos');

        nomeRegistrado.addEventListener('input', function() {
            forceUppercaseAndLettersOnly(this);
        });

        sexo.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });

        dataEmissao.addEventListener('blur', function() {
            formatDate(this);
        });

        dataNascimento.addEventListener('blur', function() {
            formatDate(this);
        });

        gemeosSelect.addEventListener('change', function() {
            handleTwins(this);
        });
    });
}
