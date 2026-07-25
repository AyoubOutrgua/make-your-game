# Make Your Game - History (Space Invaders Game)

A browser-based Space Invaders game built with vanilla JavaScript, HTML, and CSS. This project implements a classic arcade shooter with smooth 60 FPS performance using native DOM manipulation and the RequestAnimationFrame API, completely avoiding HTML Canvas.

## Description

This is a single-player implementation of the classic Space Invaders arcade game featuring an immersive **Sci-Fi Story Mode**. The player controls a spaceship at the bottom of the screen, defending against waves of descending alien invaders while taking cover behind destructible bunkers. The game features a dynamic narrative, a scoring system, a lives counter, and a time limit of 90 seconds.

## Technologies and Tools

- **HTML5** - Page structure and game elements
- **CSS3** - Styling, visual effects, and dynamic CSS Variables for theming
- **Vanilla JavaScript (ES6 Modules)** - Game logic, component-based UI, and mechanics
- **DOM API** - Dynamic element creation, mounting, and unmounting (No Frameworks)
- **RequestAnimationFrame** - Smooth 60 FPS game loop

## Installation

1. Clone the repository:
```bash
git clone https://learn.zone01oujda.ma/git/aoutrgua/make-your-game-history
cd make-your-game-history
```

Open `index.html` in a modern web browser (Chrome, Firefox, Safari, or Edge).

**Note:** The game uses ES6 modules, so you may need to run it through a local server if your browser restricts module loading from `file://` protocol.

## Usage

### Starting the Game
1. Open the game in your browser.
2. Click "PLAY SPACE INVADERS" on the start screen.
3. Read the Story Introduction and press `[ENTER]` to start your engines.
4. The game board will appear with your spaceship at the bottom.

### Controls
- **Arrow Left** (←) - Move spaceship left
- **Arrow Right** (→) - Move spaceship right
- **Spacebar** - Shoot laser
- **P** - Pause/Resume game
- **Enter** - Progress through Story Mode screens

### Pause Menu
When paused, you can:
- **Continue** - Resume the current game
- **Restart** - Start a new game from the beginning

### Game Objectives
- Progress through the interactive story by reaching score milestones.
- Destroy all alien invaders to win and unlock the good ending.
- Avoid getting hit by alien lasers (you have 3 lives).
- Survive for 90 seconds or less.
- Maximize your score by destroying aliens and the mystery UFO.

## Project Structure
```text
make-your-game/
├── index.html              # Main HTML file
├── style/
│   └── style.css          # Game styling & Story UI
├── assets/                # Game images
│   ├── red.png           # Red alien sprite
│   ├── yellow.png        # Yellow alien sprite
│   ├── green.png         # Green alien sprite
│   ├── extra.png         # Mystery UFO sprite
│   └── spaceinvaders.png # Favicon
└── js/                    # JavaScript modules
    ├── components/        # UI DOM Components
    │   ├── startScreen.js # Initial landing screen
    │   ├── gameScreen.js  # Main game board container
    │   ├── history.js     # Story mode overlays & logic
    │   ├── pauseScreen.js # Dynamic pause menu
    │   └── gameStatus.js  # Win/Loss condition screens
    ├── main.js           # Game initialization and main loop
    ├── gameControl.js    # Game state, time, and UI management
    ├── movePlayer.js     # Player movement logic
    ├── moveAliens.js     # Alien movement logic
    ├── laser.js          # Laser shooting and collision
    └── createBunker.js   # Bunker creation
```
## Main Features

### Dynamic Story Mode (New)
- **Three-Act Structure:** Features an Introduction (before gameplay), Development (triggered at a specific score milestone), and Conclusion (Win/Loss endings).
- **Flawless RTL Support:** The narrative is written in Arabic with seamless Right-to-Left (RTL) text direction. It perfectly integrates English technical terms and key bindings (like `[ENTER]`) without breaking the formatting.
- **Component-Based UI:** Story screens are dynamically mounted and unmounted from the DOM only when needed, keeping the element inspector clean and preventing CSS overrides.
- **Thematic Styling:** Uses CSS variables (`--theme-color`) to dynamically change the neon glow of the story boxes (Cyan for intro, Yellow for warnings, Green for victory, Red for defeat).
- **Performance Optimized:** Pauses the `requestAnimationFrame` loop seamlessly during story events to prevent frame drops, resetting the delta time upon resumption.

### Core Gameplay
- **60 FPS Performance** - Smooth animation using RequestAnimationFrame.
- **Player Movement** - Responsive keyboard controls for left/right movement.
- **Shooting Mechanics** - Player and alien laser firing with cooldown timers.
- **Collision Detection** - Laser-to-alien, laser-to-player, and laser-to-bunker collisions.
- **Alien Movement** - Grid-based alien formation with directional changes.
- **Mystery UFO** - Random UFO appearance with bonus points.
- **Destructible Bunkers** - Four bunkers that provide cover and take damage.

### Game UI
- **Score Display** - Real-time score tracking.
- **Lives Counter** - Visual representation of remaining lives.
- **Timer** - Countdown display showing elapsed game time (MM:SS format).
- **Dynamic Overlays** - Pause and Game Over screens generated on the fly.

### Game Mechanics
- **Cooldown System** - 600ms cooldown between player shots.
- **Alien Shooting** - Bottom-row aliens fire lasers at random intervals.
- **Laser Interactions** - Player and alien lasers can destroy each other.
- **Win Condition** - Destroy all 60 aliens.
- **Time Limit** - 90-second maximum game duration.
- **Responsive Scaling** - Game scales to fit different screen sizes.

## Team
- **AYYOUB OUTRGUA** (aoutrgua)
- **MOHAMED ELGHAMARI** (melghama)