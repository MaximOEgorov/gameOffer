import {Settings} from "./game.settings.js";
import {Grid} from "./grid/game.grid.js";
import {Scores} from "./game.scores.js";
import {Controls} from "./controls/game.controls.js";


export function Game () {
    const containerElement = document.createElement('div')

    Settings(containerElement);
    Controls(containerElement);
    Grid(containerElement);
    Scores(containerElement);


    return containerElement;

}