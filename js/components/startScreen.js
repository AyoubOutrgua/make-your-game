export const startScreen = (onStart) => {
    const content = `
            <section id="start-screen">
            <header>
                <h2>
                    <span class="space-txt">SPACE</span>
                    <span class="invaders-txt">INVADERS</span>
                </h2>
            </header>

            <div class="score-legend">
                <div class="score-row">
                    <img src="assets/red.png" alt="Invaders 1" class="pixel-art">
                    <span>= 10 PTS</span>
                </div>
                <div class="score-row">
                    <img src="assets/yellow.png" alt="Invaders 2" class="pixel-art">
                    <span>= 20 PTS</span>
                </div>
                <div class="score-row">
                    <img src="assets/green.png" alt="Invaders 3" class="pixel-art">
                    <span>= 30 PTS</span>
                </div>
                <div class="score-row">
                    <img src="assets/extra.png" alt="Invaders 4" class="pixel-art">
                    <span>= <span class="mystery-points">?? PTS</span></span>
                </div>

                <div class="play-action">
                    <p>PLAY SPACE INVADERS</p>
                </div>
            </div>
        </section>
    `

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.trim();
    const sectionElement = tempDiv.firstElementChild;

    const playBtn = sectionElement.querySelector('.play-action p');
    
    playBtn.addEventListener('click', () => {
        sectionElement.remove();
        
        if (onStart) onStart();
    });

    return sectionElement;

}