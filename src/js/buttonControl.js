import { transferAndTransformData } from './dataFunctions.js';

document.addEventListener('DOMContentLoaded', function() {
    const fillButton = document.getElementById('fillButton');
    fillButton.addEventListener('click', function() {
        transferAndTransformData();
    });
});
