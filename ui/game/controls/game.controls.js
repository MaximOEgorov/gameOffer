import {ctrlStartStop, subscribe} from "../../../data/game.data.js";


export function Controls(parentEl) {

    const containerElement = document.createElement('div');
    const startElement = document.createElement('button');
    startElement.append('Start/Pause');
    startElement.addEventListener('click', ctrlStartStop);

    containerElement.appendChild(startElement);
    parentEl.appendChild(containerElement);

}