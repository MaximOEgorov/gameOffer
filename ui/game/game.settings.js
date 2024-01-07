import {setGridEl} from "./settings/set.grid.component.js";
import {setMissesEl} from "./settings/set.misses.component.js";
import {setWinEl} from "./settings/set.winpoints.component.js";
import {setTimesEl} from "./settings/set.times.component.js";
import {setMuteEl} from "./settings/set.mute.component.js";

export function Settings(parentEl) {
    const containerElement = document.createElement('div');
    const settingsElement = document.createElement('div');
    settingsElement.classList.add('settings');
    setGridEl(settingsElement);
    setWinEl(settingsElement);
    setTimesEl(settingsElement);
    setMissesEl(settingsElement);
    setMuteEl(settingsElement);

    containerElement.appendChild((settingsElement));
    parentEl.appendChild(containerElement);

}