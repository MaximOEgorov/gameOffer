
import {data} from "../../data/game.data.js";

export function Scores (parentEl) {
    const containerElement = document.createElement('div');
    const scoreElement = document.createElement('p');
    scoreElement.append('Текущий счет: Попал: '+data.score.missCount+'; Промахнулся:'+data.score.missCount);
    containerElement.appendChild((scoreElement));
    parentEl.appendChild(containerElement)
}