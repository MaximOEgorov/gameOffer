import {settingsData} from "../../../data/settings.data.js";

export function setGridEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Grid size');
    divElement.appendChild(pElement);

    const selectElement = document.createElement('select');
    const optionsElement = settingsData.gridSize.map(function (size)  {
        const optionEl = document.createElement('option');
        optionEl.text = size;
        return optionEl;
    });
    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}