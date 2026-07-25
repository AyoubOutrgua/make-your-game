import { restAliens, createAliens, resetMoveAliens } from "./moveAliens.js";
import { restLaser } from "./laser.js";
import { initPlayerPosition, createPlayer, resetPlayer } from "./movePlayer.js";
import { createBunker } from "./createBunker.js";
import { startScreen } from "./components/startScreen.js";
import { createPauseScreen } from "./components/pauseScreen.js";
import { createGameStatus } from "./components/gameStatus.js";
import { showDevelopment, showConclusion, showIntro } from "./components/history.js";

let score = 0;
let isPaused = false;
let isGameEnded = false; 
let totalGameTime = 0;  
let startTime = null;   
let isDevShown = false;

let scoreElement;

export const addScore = (points) => {
    score += points;
    if (scoreElement) scoreElement.innerText = score;

    if (score >= 500 && !isDevShown) {
        isDevShown = true;
        changeState(true);
        
        const container = document.getElementById('game-container');
        const devScreen = showDevelopment(() => {
            changeState(false);
        });
        container.append(devScreen);
    }
};

export const getPauseState = () => isPaused;

export const changeState = (state) => {
    isPaused = state;
    if (!isPaused) {
        startTime = null; 
    }
};

export const togglePause = () => {
    if (isGameEnded) return;
    
    isPaused = !isPaused;
    const container = document.getElementById('game-container');
    const existingPauseScreen = document.getElementById("pause-screen");

    if (isPaused) {
        if (!existingPauseScreen) {
            container.append(createPauseScreen(handlePause, restartGame));
        }
    } else {
        if (existingPauseScreen) existingPauseScreen.remove();
    }
};

export const handlePause = (e) => {
    if (e && e.type === "keydown" && e.key.toLowerCase() !== "p") return; 
    if (isGameEnded) return;

    togglePause(); 
    
    if (!isPaused) {
        startTime = null; 
        document.getElementById("game-board")?.focus();
    }
};

export const gameState = (statu, clas) => {
    isPaused = true;
    isGameEnded = true; 
    
    const container = document.getElementById('game-container');
    
    const gameStatusResult = clas === "you-win" ? 'win' : 'lose';
    
    const conclusionScreen = showConclusion(gameStatusResult, () => {
        const statusComponent = createGameStatus(statu, clas, restartGame);
        container.append(statusComponent);
    });
    
    container.append(conclusionScreen);
};

export const getGameTime = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    
    const delta = currentTime - startTime;
    startTime = currentTime;
    
    if (!isPaused) totalGameTime += delta;

    return totalGameTime;
};

export const updateTime = (time) => {
    const timerDisplay = document.getElementById('timer-display');
    if (!timerDisplay) return;

    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    timerDisplay.innerText = `${minutes}:${seconds}`;
};

export const checkTimeLimit = (time) => {
    if (time >= 90000 && !isGameEnded) {
        gameState("GAME OVER 'time-up'", "game-over");
    }
};

export const createLives = () => {
    const lives = document.getElementById('lives');
    if (!lives) return;

    lives.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const live = document.createElement('div');
        live.classList.add('live');
        lives.append(live);
    }
};

export function toggleView(onStart) {
    const container = document.getElementById('game-container');
    if (container) {
        container.append(startScreen(onStart));
    }
}

export const initGame = () => {
    scoreElement = document.querySelector(".score");
    score = 0;
    if (scoreElement) scoreElement.innerText = score;
    
    totalGameTime = 0;
    startTime = null;
    isGameEnded = false; 
    isPaused = false;
    
    createPlayer();
    createAliens();
    createLives();
    createBunker();
    initPlayerPosition();
};

export const restartGame = () => {
    document.getElementById("pause-screen")?.remove();
    document.getElementById("game-status")?.remove();

    restAliens();       
    restLaser();      
    resetMoveAliens();  
    resetPlayer();      
    
    const bunkerContainer = document.getElementById("bunker-container");
    if (bunkerContainer) bunkerContainer.innerHTML = "";

    isDevShown = false; 
    isGameEnded = false; 
    totalGameTime = 0;
    startTime = null; 

    initGame(); 
    changeState(true);

    const container = document.getElementById('game-container');
    const introScreen = showIntro(() => {
        changeState(false);
        document.getElementById("game-board")?.focus();
    });
    
    container.append(introScreen);
};