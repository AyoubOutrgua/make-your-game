export const gameScreen = () => {
    const content = `
        <section id="screen">
            <div class="game-info">
                <div>
                    <span class="info-text">Score:</span>
                    <span class="score">0</span>
                </div>
                <div>
                    <span class="info-text" id="timer-display">00:00</span>
                </div>
                <div class="lives-section">
                    <span class="info-text">Lives:</span>
                    <div id="lives"></div>
                </div>
            </div>
            <div id="game-board">
                <div id="aliens-grid"></div>
                <div id="bunker-container"></div>
                <div id="player-section"></div>
            </div>
        </section>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.trim();
    return tempDiv.firstElementChild;
}