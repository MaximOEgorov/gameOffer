import {ctrlStartStop, data, GAME_STATUSES, subscribe} from "../../../data/game.data.js";


export function Controls(parentEl) {
    subscribe(() => {
        updateControl(startElement);
    })

    const containerElement = document.createElement('div');
    const startElement = document.createElement('button');

    updateControl(startElement);

    startElement.addEventListener('click', ctrlStartStop);

    containerElement.appendChild(startElement);
    parentEl.appendChild(containerElement);

}

function updateControl (startElement) {
    startElement.innerHTML = '';
    if (data.gameStatus === GAME_STATUSES.default) {
        startElement.append('Start/Pause');
    } else if (data.gameStatus === GAME_STATUSES.started) {
        startElement.append('Pause');
    } else if (data.gameStatus === GAME_STATUSES.paused) {
        startElement.append('Go on');
    } else if (data.gameStatus === GAME_STATUSES.win || data.gameStatus === GAME_STATUSES.lose) {
        startElement.append('Play again');
    }
}