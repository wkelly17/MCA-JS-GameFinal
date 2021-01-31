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
const inventoryContainer = document.querySelector('.inventory');
const messageContainer = document.querySelector(
  '[data-role = messageFeedbackContainer]'
); // holds nav controls;
const navBtnsContainer = document.querySelector('#navBtnsContainer');
navBtnsContainer.innerHTML += navControls;
const navArrows = [...document.querySelectorAll('[data-role = "nav-arrow"]')];

let game = {
  gameContainer: gameContainer,
  roomContainer: roomContainer,
  navBtnsContainer: navBtnsContainer,
  navArrows: navArrows,
  inventoryContainer: inventoryContainer,
  messageContainer: messageContainer,

  // pieces of global game state;
  currentRoom: bedroom1,
  timer: null,

  //   game/non room methods;
  init: function () {
    // debugger;
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
