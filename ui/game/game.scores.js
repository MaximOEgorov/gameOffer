
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

function updateScore(containerElement) {
    containerElement.innerHTML = '';
    let spanEl = document.createElement('span');
    spanEl.append('Catch:');
    containerElement.append(spanEl);
    spanEl = document.createElement('span');
    spanEl.append(data.score.caughtCount)
    containerElement.append(spanEl);
    spanEl = document.createElement('span');
    spanEl.append('Miss:');
    containerElement.append(spanEl);
    spanEl = document.createElement('span');
    spanEl.append(data.score.missCount);
    containerElement.append(spanEl);
}