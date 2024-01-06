import {CatchOffer, data, GAME_STATUSES, OFFER_STATUSES, subscribe} from "../../../data/game.data.js";

export function Cell(x, y) {
    subscribe(() => {
        updateCell(x, y, cellEl);
    })

    const cellEl = document.createElement('td')
    updateCell(x, y, cellEl);
    return cellEl;
}

function updateCell(x, y, cellEl) {
    if (data.gameStatus === GAME_STATUSES.started) {
        cellEl.innerHTML = '';
        if (x === data.coords.current.x && y === data.coords.current.y) {
            const offerEl = document.createElement('img');
            offerEl.src = 'assets/images/offer.svg'
            offerEl.addEventListener('click', CatchOffer)
            cellEl.append(offerEl)
        }

        if (data.offerStatus === OFFER_STATUSES.missed && x === data.coords.previous.x && y === data.coords.previous.y) {
            const offerEl = document.createElement('img');
            offerEl.src = 'assets/images/missed.svg';
            cellEl.append(offerEl)
        }

        if (data.offerStatus === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
            const offerEl = document.createElement('img');
            offerEl.src = 'assets/images/caught.svg';
            cellEl.append(offerEl)
        }
    }
}