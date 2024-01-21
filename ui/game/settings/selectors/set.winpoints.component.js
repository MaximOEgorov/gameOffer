import {settingsData} from "../../../../data/settings.data.js";
import {updatePointsToWin} from "../../../../data/game.data.js";
import {renderSelect} from "../ui/select.js";

export function setWinEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('Points to win');
    divElement.appendChild(pElement);

    const selectElement = renderSelect(settingsData.winPoints);
/*
    const optionsElement = settingsData.winPoints.map(function (win)  {
        const optionEl = document.createElement('option');
        optionEl.text = win+' pts';
        optionEl.value = win;
        return optionEl;
    });
*/

    selectElement.addEventListener('change', function () {
        updatePointsToWin(selectElement.value);
    })

//    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}