import {Settings} from "./game.settings.js";
import {Grid} from "./grid/grid.component.js";
import {Scores} from "./game.scores.js";
import {Controls} from "./controls/game.controls.js";


export function Game () {
    const containerElement = document.createElement('div')
    containerElement.classList.add('main__div');

    Settings(containerElement);
    Controls(containerElement);
    Scores(containerElement);
    Grid(containerElement);


    return containerElement;

}