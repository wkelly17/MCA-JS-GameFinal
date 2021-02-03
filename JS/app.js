/* todos

todo: Refine message box and add a random wrong message function...;
todo: hook up doors, and Plot puzzles;

todo: clean up css naming when I redo the artwork

todo:  develop Story line //puzzles
todo: timer functionality for game
todo: 

*/
//@#=============== IMPORTS  =============

import bedroom1 from './rooms/bedroom1.js';
import livingRoom from './rooms/livingRoom.js';
import kitchen from './rooms/kitchen.js';
import study from './rooms/study.js';
import navControls from './utils/navDefs.js';
import navigate from './utils/navigation.js';

//@#=============== DOM SKELETON ELEMENTS  =============
const gameContainer = document.querySelector('#gameContainer');
const roomContainer = document.querySelector('#RoomContainer');
const inventoryContainer = document.querySelector('.inventoryItemsContainer');
const messageContainer = document.querySelector(
  '[data-role = messageFeedbackContainer]'
); // holds nav controls;
const navBtnsContainer = document.querySelector('#navBtnsContainer');
navBtnsContainer.innerHTML += navControls;
const navArrows = [...document.querySelectorAll('[data-role = "nav-arrow"]')];
const timerContainer = document.querySelector('[data-role = "timerDisplay"]');
// todo: uncomment when ready  to make game official.
// let startingSceneNextButton = document.querySelector(
//   '[data-role = "startingSceneNextButton"]'
// );

// function showInstructions() {
//   roomContainer.innerHTML = ``;
//   let instructions = `
//   <div class="startingScene">
//             <p>
//             The goal of the game is to escape within the alloted time on the timer in the bottom right corner;  The arrows are the left, top, right, and bottom of the screen will cause you to look around the room.  You may also use your directional keys on your keyboard.  The items in the room are interactive to clicks.  As you interact, pay attention to the messages container on the right side (in blue).  Some items can be picked up.  These items will be moved to your inventory.  Click on items in your inventory to use them on other items in the room to solve the various puzzles that have you locked in this house. Pay attention, and be diligent, and you just might escape.
//             </p>
//               <button
//                 data-role="startingSceneNextButton"
//                 class="startingSceneNextButton"
//               >
//                 Start Game
//               </button>
//   `;
//   roomContainer.innerHTML = instructions;
//   // has changed dom nodes
//   startingSceneNextButton = document.querySelector(
//     '[data-role = "startingSceneNextButton"]'
//   );
//   startingSceneNextButton.addEventListener('click', game.init);
// }

// startingSceneNextButton.addEventListener('click', showInstructions);

let game = {
  gameContainer: gameContainer,
  roomContainer: roomContainer,
  navBtnsContainer: navBtnsContainer,
  navArrows: navArrows,
  inventoryContainer: inventoryContainer,
  messageContainer: messageContainer,
  timerContainer: timerContainer,
  won: false,

  // pieces of global game state;
  currentRoom: kitchen,
  timerSeconds: 1200,
  runTimer: function runTimer() {
    let interval = setInterval(() => {
      let minutes = Math.floor(game.timerSeconds / 60);
      let seconds = game.timerSeconds % 60;
      timerContainer.textContent = `${minutes}:${
        seconds <= 9 ? '0' : ''
      }${seconds}`;
      game.timerSeconds--;
      if (game.timerSeconds < 0) {
        clearInterval(interval);
        game.endGame();
      } else if (game.won) {
        clearInterval(interval);
      }
    }, 1000);
    return interval;
  },
  endGame: function endGame() {
    document.body.removeEventListener('keyup', navigate);
    let gameOverScene = `<div class='gameOverScene'></div>`;
    game.roomContainer.innerHTML += gameOverScene;
    let gameOverMessage = document.createElement('p');
    gameOverMessage.textContent = 'Game Over';
    let restartBtn = document.createElement('button');
    restartBtn.textContent = 'Start Over';
    restartBtn.classList.add('startOverButton');
    restartBtn.addEventListener('click', () => location.reload());

    let gameOverNode = document.querySelector('.gameOverScene');
    setTimeout(() => {
      gameOverNode.classList.add('fadingOut');
      gameOverNode.appendChild(gameOverMessage);
      gameOverNode.appendChild(restartBtn);
    }, 900);
  },

  //   game/non room methods;
  init: function () {
    // hook up clickable navigation;
    game.navArrows.forEach((arrow) =>
      arrow.addEventListener('click', function (event) {
        navigate(event, game.currentRoom);
      })
    );
    //hook up arrow key navigation;
    document.body.addEventListener('keyup', (event) =>
      navigate(event, game.currentRoom)
    );
    // Add listener for clearing inventory glow;
    game.roomContainer.addEventListener(
      'click',
      game.inventory.clearInventoryGlow
    );

    //render first room
    game.currentRoom.render(game.roomContainer, game.currentRoom);

    // start time
    game.runTimer();
  },

  inventory: {
    // @# INVENTORY STATE
    itemInUse: false,
    items: [],

    //@# INVENTORY METHODS
    render: function ({
      name,
      imgSrc,
      altText,
      inventorySelector,
      triggerSpecificInventoryFunction,
      inventorySpecificFunction,
    }) {
      let img = document.createElement('img');
      img.src = imgSrc;
      img.alt = altText;
      img.title = name; //used to set current item as internal object instead of dom element since my objects have the obj state already;
      img.dataset.selector = inventorySelector;
      img.classList.add('dVisible');
      inventoryContainer.appendChild(img);
      game.inventory.hydrateInventory(
        triggerSpecificInventoryFunction,
        inventorySpecificFunction
      );
      console.log(game.inventory);
    },
    hydrateInventory: function (
      triggerSpecificInventoryFunction,
      inventorySpecificFunction
    ) {
      //preferable to just add event listener to last item;
      let newestItem = game.inventory.items[game.inventory.items.length - 1];
      // objects are reused and modified for inventory, hence qsa is used;
      newestItem.nodes = game.inventoryContainer.querySelectorAll(
        `[data-selector = "${newestItem.inventorySelector}"]`
      );
      newestItem.nodes.forEach((node) =>
        node.addEventListener('click', (event) =>
          game.inventory.handleInventoryClick(
            event,
            triggerSpecificInventoryFunction,
            inventorySpecificFunction
          )
        )
      );
      //? Legacy below; keeping in case
      //  game.inventory.items.forEach((item) => {
      //   item.nodes = game.inventoryContainer.querySelectorAll(item.selector);
      //   item.nodes.forEach((node) =>
      //     node.addEventListener('click', (event) =>
      //       game.inventory.handleInventoryClick(event)
      //     )
      //   );
      // });
    },
    handleInventoryClick: function (
      event,
      triggerSpecificInventoryFunction,
      inventorySpecificFunction
    ) {
      // debugger;

      if (!game.inventory.itemInUse) {
        if (triggerSpecificInventoryFunction) {
          inventorySpecificFunction();
        }
        event.target.classList.add('inventoryGlow');

        //setting item in use from inv;
        game.inventory.itemInUse = game.inventory.items.find(
          (item) => item.name == event.target.title
        );
      }
      // else if(event.target.parentElement == inventoryContainer) {
      // combine with other? don't allow inventory combining and just
      // }
      else {
        game.inventory.clearInventoryGlow(event);
      }
    },
    clearInventoryGlow: function (event) {
      // for flashlight
      if (event.target.classList.contains('page')) {
        return;
      }

      if (!game.inventory.itemInUse) {
        return;
      }
      game.inventory.items.map((item) =>
        item.nodes.forEach((node) => node.classList.remove('inventoryGlow'))
      );
      game.inventory.itemInUse = false;
      game.roomContainer.classList.remove('flashLightOn');
      console.log('no more glow;');
      return;
    },
  },
};

game.init();
// console.log(game);

//@#=============== EXPORTS  =============

export default game;
