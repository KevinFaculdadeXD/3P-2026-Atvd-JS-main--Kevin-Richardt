const paragrafoXD = document.getElementById('paragrafoFodaHellYeah');
const btnCorOwO = document.getElementById('btnCorOwO');
const btnFundoUwU = document.getElementById('btnFundoUwU');
const btnClaroEscuro = document.getElementById('btnClaroEscuro');
const corpo = document.body;

btnCorOwO.addEventListener('click', () => {
    const coresDaoras = ['#ff5733', '#33ff57', '#3357ff', '#f333ff'];
    const corRandom = coresDaoras[Math.floor(Math.random() * coresDaoras.length)];
    paragrafoXD.style.color = corRandom;
});

btnFundoUwU.addEventListener('click', () => {
    if (paragrafoXD.style.backgroundColor === 'yellow') {
        paragrafoXD.style.backgroundColor = 'transparent';
    } else {
        paragrafoXD.style.backgroundColor = 'yellow';
        paragrafoXD.style.padding = '10px';
        paragrafoXD.style.borderRadius = '5px';
    }
});

btnClaroEscuro.addEventListener('click', () => {
    corpo.classList.toggle('dark-mode');
    corpo.classList.toggle('light-mode');

    if (corpo.classList.contains('dark-mode')) {
        btnClaroEscuro.textContent = "Ativar Modo Claro";
    } else {
        btnClaroEscuro.textContent = "Ativar Modo Escuro";
    }
});