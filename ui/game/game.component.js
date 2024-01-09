import {Settings} from "./game.settings.js";
import {Grid} from "./grid/grid.component.js";
import {Scores} from "./game.scores.js";
import {Controls} from "./controls/game.controls.js";
import {Win} from "./winlose/win.component.js";
import {Lose} from "./winlose/lose.component.js";


export function Game () {
    const containerElement = document.createElement('div')
    containerElement.classList.add('main__div');

    Settings(containerElement);
    Controls(containerElement);
    Scores(containerElement);
    Grid(containerElement);
    Win(containerElement);
    Lose(containerElement);


    return containerElement;

}