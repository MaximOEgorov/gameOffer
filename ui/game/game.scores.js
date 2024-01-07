
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
    let spanEl = document.createElement('span');
    spanEl.append('Catch:');
    scoreEl.append(spanEl);
    spanEl = document.createElement('span');
    spanEl.append(data.score.caughtCount)
    scoreEl.append(spanEl);
    spanEl = document.createElement('span');
    spanEl.append('Miss:');
    scoreEl.append(spanEl);
    spanEl = document.createElement('span');
    spanEl.append(data.score.missCount);
    scoreEl.append(spanEl);
}