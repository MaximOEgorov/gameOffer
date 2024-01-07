import {settingsData} from "../../../data/settings.data.js";

export function setWinEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Points to win');
    divElement.appendChild(pElement);

    const selectElement = document.createElement('select');
    const optionsElement = settingsData.winPoints.map(function (win)  {
        const optionEl = document.createElement('option');
        optionEl.text = win+' pts';
        optionEl.value = win;
        return optionEl;
    });
    console.log(optionsElement);
    console.log(JSON.stringify(optionsElement));
    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}