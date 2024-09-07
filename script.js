const div = document.querySelector(".text");
const texto = 'Explore my portfolio to see how I transform data into insights, and ideas into responsive, functional websites!.';

function efectTextTyping(element, texto, i = 0) {
    if (i < texto.length) { // Condición para detener la recursión
        element.textContent += texto[i];
        setTimeout(() => efectTextTyping(element, texto, i + 1), 100);
    }
}

efectTextTyping(div, texto);