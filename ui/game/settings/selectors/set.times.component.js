import {settingsData} from "../../../../data/settings.data.js";
import {data, updateGridSize, updateTimes} from "../../../../data/game.data.js";
import {renderSelect} from "../ui/select.js";

export function setTimesEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('ms after the catch');
    divElement.appendChild(pElement);

    const selectElement = renderSelect(settingsData.timeSet);
    /*const optionsElement = settingsData.timeSet.map(function (timeObj) {
        const optionEl = document.createElement('option');
        optionEl.text = timeObj.max + '-' + timeObj.min + ' ms';
        optionEl.value = timeObj.max + '-' + timeObj.min + ' ms';
        return optionEl;
    });*/

    selectElement.addEventListener('change', function () {
        const objValue = JSON.parse(select.value);
        const newDecreaseDeltaInMs = objValue.max;
        const newShowDeltaInMs = objValue.min;
        updateTimes(newDecreaseDeltaInMs, newShowDeltaInMs);
    })

//    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}