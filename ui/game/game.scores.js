
import {data, subscribe} from "../../data/game.data.js";

export function Scores (parentEl) {

    subscribe( ()=> {
        updateScore(scoreElement);
    })

    const containerElement = document.createElement('div');
    const scoreElement = document.createElement('p');
    updateScore(scoreElement);
    containerElement.appendChild((scoreElement));
    parentEl.appendChild(containerElement)
}

function updateScore(scoreEl) {
    scoreEl.innerHTML = '';
    scoreEl.append('Текущий счет: Попал: '+data.score.caughtCount+'; Промахнулся:'+data.score.missCount);
}