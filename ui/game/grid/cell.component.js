import {data} from "../../../data/game.data.js";

export  function Cell(x, y) {
    const cellEl = document.createElement('td')

    if (x === data.coords.current.x && y === data.coords.current.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/offer.svg'
        cellEl.append(offerEl)
    }

    if ( x === data.coords.previous.x && y === data.coords.previous.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/'
        cellEl.append(offerEl)
    }
    return cellEl;
}