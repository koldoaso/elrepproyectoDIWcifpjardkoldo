// navegador
const navegador = document.getElementById('navigator');
const noRes = document.createElement('p');
noRes.textContent = 'Sin resultados';
noRes.style.textAlign = 'center';
noRes.style.gridColumn = '1 / -1';
noRes.style.display = 'none';
const cardsContainer = document.getElementById('cards');
cardsContainer.appendChild(noRes);
navegador.addEventListener('input', () => {
    const cards = document.querySelectorAll('#cards .card');

    const filtro = navegador.value.toLowerCase();
    let coincidencias = false;

    cards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(filtro)) {
            card.style.display = ''; // mostrar card
            coincidencias = true;
        } else {
            card.style.display = 'none'; // ocultar card
        }
    });

    noRes.style.display = coincidencias ? 'none' : 'block';
});