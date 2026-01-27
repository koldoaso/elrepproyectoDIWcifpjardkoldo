fetch('../cards-Data/cards-info.json').then (
    response => response.json()
).then (
    cardsData => {
        console.log(cardsData);
        const cards = document.getElementById('cards');

        cardsData.forEach( card => {
            const title = card.title;
            const info = card.info;
            const imagen = card.imagen;

            const carta = document.createElement('div');
            carta.classList.add('card');
            cards.appendChild(carta)
            const innerCard = document.createElement('div');
            innerCard.classList.add('card-inner');
            carta.appendChild(innerCard);
            const frontCard = document.createElement('div')
            frontCard.classList.add('card-front')
            const backCard = document.createElement('div')
            backCard.classList.add('card-back');
            let titulo = document.createElement('h3');
            titulo.textContent = title;
            let infor = document.createElement('p');
            infor.textContent = info;
            frontCard.append(titulo, infor);
            innerCard.appendChild(frontCard);
            let imag = document.createElement('img');
            imag.src = `../images/${imagen}`;
            imag.alt = "Imagen de la: " + titulo.textContent;
            backCard.appendChild(imag);
            innerCard.appendChild(backCard);
        });
    }
)
// ESTRUCTURA DE LAS CARTAS
                // <div class="card">
                //     <div class="card-inner">
                //         <div class="card-front">
                //             <h3>Theraphosa blondi</h3>
                //             <p>La tarántula gigante de Goliat es la más grande del mundo. Puede alcanzar hasta 30 cm de
                //                 envergadura y pesar más de 170 gramos. Habita en selvas húmedas de Suramérica y se
                //                 alimenta principalmente de insectos y pequeños vertebrados.</p>
                //         </div>
                //         <div class="card-back">
                //             <img src="../images/theraphosa-blondi.webp" alt="Theraphosa blondi">
                //         </div>
                //     </div>
                // </div>