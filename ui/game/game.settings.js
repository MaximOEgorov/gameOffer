import {setGridEl} from "./settings/set.grid.component.js";
import {setMissesEl} from "./settings/set.misses.component.js";

export function Settings(parentEl) {
    const containerElement = document.createElement('div');
    const settingsElement = document.createElement('div');
    settingsElement.classList.add('settings');
    setGridEl(settingsElement);
    setMissesEl(settingsElement);


    containerElement.appendChild((settingsElement));
    parentEl.appendChild(containerElement);

}