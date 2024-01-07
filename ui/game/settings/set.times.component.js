import {settingsData} from "../../../data/settings.data.js";

export function setTimesEl(parentEl) {
    const divElement = document.createElement('div');
    divElement.classList.add('subsettings');
    parentEl.appendChild(divElement);

    const pElement = document.createElement('p');
    pElement.append('ms after the catch');
    divElement.appendChild(pElement);

    const selectElement = document.createElement('select');
    const optionsElement = settingsData.timeSet.map(function (timeObj)  {
        const optionEl = document.createElement('option');
        optionEl.text = timeObj.max+'-'+timeObj.min+' ms';
        optionEl.value = timeObj.max+'-'+timeObj.min+' ms';
        return optionEl;
    });
    console.log(optionsElement);
    console.log(JSON.stringify(optionsElement));
    selectElement.append(...optionsElement);
    divElement.appendChild(selectElement);
}