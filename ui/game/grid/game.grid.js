import {data} from "../../../data/game.data.js";

export function Grid (parentEl) {
    const containerElement = document.createElement('div')

    for (let y=0; y < data.settings.rowsCount; y++ ) {
        const  row= document.createElement('tr')
        containerElement.appendChild( row)

        for (let x =0; x < data.settings.columnsCount; x++) {
            const cell = document.createElement('td')
            cell.append(y + ' - ' + x)
            row.appendChild(cell)
        }
    }

    parentEl.appendChild(containerElement);

}