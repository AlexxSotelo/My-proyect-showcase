//Type Script animation
const div = document.querySelector(".text");
const texto = 'Explore my portfolio to see how I transform data into insights, and ideas into responsive, functional websites!.';

function efectTextTyping(element, texto, i = 0) {
    if (i < texto.length) { // Condición para detener la recursión
        element.textContent += texto[i];
        setTimeout(() => efectTextTyping(element, texto, i + 1), 100);
    }
}

efectTextTyping(div, texto);

//Menu display
const nav = document.querySelector('#nav');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
    nav.classList.add('visible');
})

close.addEventListener('click', () => {
    nav.classList.remove('visible');
})