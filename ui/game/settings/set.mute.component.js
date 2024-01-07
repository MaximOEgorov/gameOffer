import {settingsData} from "../../../data/settings.data.js";

export function setMuteEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Mute mode');
    divElement.appendChild(pElement);

    const inputElement = document.createElement('input');
    inputElement.classList.add('switch')
    inputElement.type = 'checkbox'
    inputElement.checked = settingsData.muteMode;
    const spanElement =document.createElement('span');
    spanElement.classList.add('toggle');
    divElement.appendChild(inputElement);
    divElement.appendChild(spanElement);
}