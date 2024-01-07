import {data, subscribe} from "../../../data/game.data.js";
import {Cell} from "./cell.component.js";

export function Grid (parentEl) {
    subscribe(() => {
        updateGrid(data.settings.rowsCount, data.settings.columnsCount, containerElement);
    })

    const containerElement = document.createElement('div')
    containerElement.classList.add('grid');
    updateGrid(data.settings.rowsCount, data.settings.columnsCount, containerElement);
    parentEl.appendChild(containerElement);
}

function updateGrid (rowsCount, columnsCount, parentEl) {
    parentEl.innerHTML = '';
    for (let y=0; y < rowsCount; y++ ) {
        const  row= document.createElement('tr')
        parentEl.appendChild( row)

        for (let x =0; x < columnsCount; x++) {
            let cell = Cell (x, y);
            row.appendChild(cell);
        }
    }
}