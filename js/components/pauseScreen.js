export const createPauseScreen = (onContinue, onRestart) => {
    const content = `
        <div id="pause-screen" class="overlay" style="display: flex;">
            <h1 class="pause-title">PAUSED</h1>
            <div>
                <button id="btn-continue" class="game-btn">▶ CONTINUE</button>
                <button id="btn-restart" class="game-btn secondary">↻ RESTART</button>
            </div>
        </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.trim();
    const element = tempDiv.firstElementChild;

    element.querySelector('#btn-continue').addEventListener('click', onContinue);
    element.querySelector('#btn-restart').addEventListener('click', onRestart);

    return element;
};