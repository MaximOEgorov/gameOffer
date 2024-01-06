import {data} from "../../../data/game.data.js";
import {Cell} from "./cell.component.js";

export function Grid (parentEl) {
    const containerElement = document.createElement('div')

    for (let y=0; y < data.settings.rowsCount; y++ ) {
        const  row= document.createElement('tr')
        containerElement.appendChild( row)

        for (let x =0; x < data.settings.columnsCount; x++) {
            const cell = Cell (x, y);
            row.appendChild(cell);
        }
    }

    parentEl.appendChild(containerElement);

}