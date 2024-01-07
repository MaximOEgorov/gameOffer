
import {data, subscribe} from "../../data/game.data.js";

export function Scores (parentEl) {

    subscribe( ()=> {
        updateScore(scoreElement);
    })

    const containerElement = document.createElement('div');
    containerElement.classList.add('score')
    const scoreElement = document.createElement('p');
    updateScore(scoreElement);
    containerElement.appendChild((scoreElement));
    parentEl.appendChild(containerElement)
}

function updateScore(scoreEl) {
    scoreEl.innerHTML = '';
    scoreEl.append('Catch: '+data.score.caughtCount+'    Miss:'+data.score.missCount);
}