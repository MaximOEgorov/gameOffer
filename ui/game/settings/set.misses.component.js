import {settingsData} from "../../../data/settings.data.js";

export function setMissesEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Maximum misses');
    divElement.appendChild(pElement);

    const selectElement = document.createElement('select');
    const optionsElement = settingsData.maxMisses.map(function (miss)  {
        const optionEl = document.createElement('option');
        optionEl.text = miss;
        return optionEl;
    });
    console.log(optionsElement);
    console.log(JSON.stringify(optionsElement));
    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}