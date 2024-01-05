

export function Settings (parentEl) {
    const containerElement = document.createElement('div');

    const settingsElement = document.createElement('div');
    settingsElement.append("Настройки игры");

    containerElement.appendChild((settingsElement));



    parentEl.appendChild(containerElement);

}