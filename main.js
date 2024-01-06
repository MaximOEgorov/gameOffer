import {Game} from "./ui/game/game.component.js";
import {subscribe} from "./data/game.data.js";

subscribe(renderApp);

const gameEl = Game();

function renderApp () {
    document.body.innerHTML = "";
    document.body.append(gameEl);
}

renderApp();