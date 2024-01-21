import {setGridEl} from "./settings/selectors/set.grid.component.js";
import {setMissesEl} from "./settings/selectors/set.misses.component.js";
import {setWinEl} from "./settings/selectors/set.winpoints.component.js";
import {setTimesEl} from "./settings/selectors/set.times.component.js";
import {setMuteEl} from "./settings/selectors/set.mute.component.js";

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