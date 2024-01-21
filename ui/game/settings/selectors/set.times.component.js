import {settingsData} from "../../../../data/settings.data.js";
import {data, updateGridSize, updateTimes} from "../../../../data/game.data.js";

export function setTimesEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('ms after the catch');
    divElement.appendChild(pElement);

    const selectElement = document.createElement('select');
    const optionsElement = settingsData.timeSet.map(function (timeObj) {
        const optionEl = document.createElement('option');
        optionEl.text = timeObj.max + '-' + timeObj.min + ' ms';
        optionEl.value = timeObj.max + '-' + timeObj.min + ' ms';
        return optionEl;
    });

    selectElement.addEventListener('change', function () {
        let newTimes = this.value.split(' ')[0];

        let [newDecreaseDeltaInMs, newShowDeltaInMs] = newTimes.split('-');
        if (Number(newDecreaseDeltaInMs) !== data.settings.decreaseDeltaInMs || Number(newShowDeltaInMs) !== data.settings.showDeltaInMs) {
            updateTimes(Number(newDecreaseDeltaInMs), Number(newShowDeltaInMs));
        }
    })

    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}