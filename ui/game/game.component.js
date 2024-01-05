import {Settings} from "./game.settings.js";
import {Grid} from "./grid/game.grid.js";
import {Scores} from "./game.scores.js";


export function Game () {
    const containerElement = document.createElement('div')

    Settings(containerElement);
    Grid(containerElement);
    Scores(containerElement);


    return containerElement;

}