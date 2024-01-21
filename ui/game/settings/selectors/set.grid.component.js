import {settingsData} from "../../../../data/settings.data.js";
import {updateGridSize} from "../../../../data/game.data.js";

export function setGridEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Grid size');
    divElement.appendChild(pElement);

    const selectElement = document.createElement('select');
    const optionsElement = settingsData.gridSize.map(function (size, index)  {
        const optionEl = document.createElement('option');
        optionEl.text = `${size.w} x ${size.h}`;
        optionEl.value = index;
        return optionEl;
    });

    selectElement.addEventListener('change', function (e) {
        let selectedIndex = e.currentTarget.value;
        const size = settingsData.gridSize[selectedIndex];

        updateGridSize(size.w, size.h);

    })

    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}