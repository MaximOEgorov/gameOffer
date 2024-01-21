import {settingsData} from "../../../../data/settings.data.js";
import {updateMaxMisses} from "../../../../data/game.data.js";
import {renderSelect} from "../ui/select.js";

export function setMissesEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Maximum misses');
    divElement.appendChild(pElement);

    const selectElement = renderSelect(settingsData.maxMisses);
    /*const optionsElement = settingsData.maxMisses.map(function (miss)  {
        const optionEl = document.createElement('option');
        optionEl.text = miss;
        return optionEl;
    });*/

    selectElement.addEventListener('change', function () {
        updateMaxMisses(selectElement.value);
    })

//    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}