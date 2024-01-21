import {selectMuteMode, toggleMute} from "../../../../data/game.data.js";

export function setMuteEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Mute mode');
    divElement.appendChild(pElement);

    const labelElement = document.createElement('label');
    labelElement.classList.add('switch')
    divElement.appendChild(labelElement)

    const chkElement = document.createElement('input');
    chkElement.type = 'checkbox';
    chkElement.checked = selectMuteMode();
    labelElement.appendChild(chkElement);

    const spanElement = document.createElement('span');
    spanElement.classList.add('slider');
    spanElement.addEventListener('click', toggleMute);
    labelElement.appendChild(spanElement)

}