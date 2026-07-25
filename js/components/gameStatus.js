export const createGameStatus = (statu, clas, onPlayAgain) => {
    const content = `
        <div id="game-status" class="overlay" style="display: flex;">
            <h1 class="statu-title ${clas}">${statu}</h1>
            <div>
                <button id="btn-play-again" class="game-btn">PLAY AGAIN</button>
            </div>
        </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.trim();
    const element = tempDiv.firstElementChild;

    element.querySelector('#btn-play-again').addEventListener('click', onPlayAgain);

    return element;
};