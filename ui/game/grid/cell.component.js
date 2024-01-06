import {CatchOffer, data, OFFER_STATUSES} from "../../../data/game.data.js";

export  function Cell(x, y) {
    const cellEl = document.createElement('td')

    if (x === data.coords.current.x && y === data.coords.current.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/offer.svg'
        offerEl.addEventListener('click', CatchOffer)
        cellEl.append(offerEl)
    }

    if (data.status === OFFER_STATUSES.missed && x === data.coords.previous.x && y === data.coords.previous.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/missed.svg';
        cellEl.append(offerEl)
    }

    if (data.status === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/caught.svg';
        cellEl.append(offerEl)
    }

    return cellEl;
}