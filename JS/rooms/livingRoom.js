//@@=============== ROOMS AND FUNCTIONALITY IMPORTS  =============
import game from '../app.js';
import bedroom1 from './bedroom1.js';
import kitchen from './kitchen.js';
import study from './study.js';
import toggleNavArrows from '../utils/toggleArrows.js';
import {
  interactLockedItem,
  render,
  hydrateDomElements,
  notALockedItem,
  focusView,
  inspect,
  inspectNoAction,
  switchLights,
  addtoInventory,
  goToRoom,
  closeZoomView,
} from './roomFunctions.js';
import defaultRoom from './defaultRoom.js';
import ceilingView from './defaultCeilingView.js';

//@@=============== DOM SVG IMPORTS  =============
// import mediaStand from '../gameComponents/';
import coffeeTable from '../gameComponents/coffeeTable.js';
import mediaStand from '../gameComponents/mediaStand.js';
import television from '../gameComponents/tv.js';

// right
import gameShelf from '../gameComponents/gameShelf.js';
import standingLamp from '../gameComponents/standingLamp.js';
import thermostat from '../gameComponents/thermostat.js';

// left
import standingLamp2 from '../gameComponents/standingLamp2.js';
import bookCase from '../gameComponents/bookshelf.js';
import safe from '../gameComponents/safe.js';
import safeKeypadZoom from '../gameComponents/safeKeypadZoom.js';

// back
import couch from '../gameComponents/couch.js';
import fanSwitch from '../gameComponents/fanSwitch.js';

// ceiling:
import ceilingFan from '../gameComponents/ceilingFan.js';
import ceilingVent from '../gameComponents/ceilingVent.js';

import door from '../gameComponents/door.js';
import door2 from '../gameComponents/door2.js';
import door3 from '../gameComponents/door3.js';
import lightSwitch from '../gameComponents/lightSwitch.js';
import journal from '../gameComponents/journal.js';
import toggleArrows from '../utils/toggleArrows.js';
// import X from '../gameComponents/';

let livingRoom = {
  // @# CORE PIECES OF GLOBAL ROOM STATE;
  name: 'livingRoom',
  lightsAreOn: true,
  directionFacing: 'back',
  returnFromCeiling: null,
  modalBlur: false,

  // @# CORE RENDERING METHODS
  hydrateDomElements: hydrateDomElements,
  render: render,

  // @# DOM ELEMENTS DEFINED BELOW
  //  NOTES; nodes plural used even for singluar items to query Select ALL on items that will be plural; nodes dynamically selected.  I like using the null placeholder here for visual reference;

  $lightSwitch: {
    name: '$lightSwitch',
    nodes: null,
    selector: '#lightSwitchHitbox',
    lightsOff: false,
    audio: null,
    className: 'switched',
    listenerType: 'click',
    fxn: switchLights,
  },
  $door: {
    name: '$door',
    nodes: null,
    selector: '[data-selector = "door"]',
    listenerType: 'click',
    directionLeadsTo: 'right',
    roomLeadsTo: 'study',
    solvedMessage: 'You go to the office',
    open: true,
    fxn: goToRoom,
  },
  $door2: {
    name: '$door2',
    nodes: null,
    selector: '[data-selector = "door2"]',
    listenerType: 'click',
    directionLeadsTo: 'back',
    roomLeadsTo: 'bedroom1',
    solvedMessage: 'You go to the living room',
    open: true,
    fxn: goToRoom,
  },
  $door3: {
    name: '$door3',
    nodes: null,
    selector: '[data-selector = "door3"]',
    listenerType: 'click',
    directionLeadsTo: 'left',
    roomLeadsTo: 'kitchen',
    gameMessage: 'You feel the key catch in the lock and spring open',
    lockedMessage:
      "Hmm.. it's locked;  I need to figure out how to open it though.",
    solvedMessage: 'You go to the kitchen',
    isSolvedBy: '$couchKey',
    open: false,
    fxn: goToRoom,
  },
  $couchBack: {
    name: '$couchBack',
    nodes: null,
    selector: '[data-selector = "couchBack"]',
    // inspected: false,
    // className: 'inspected',
    listenerType: 'click',
    gameMessage: 'Fine fine leather..',
    fxn: inspectNoAction,
  },
  $mediaStandDoorLeft: {
    name: '$mediaStandDoorLeft',
    nodes: null,
    selector: '[data-selector = "mediaStandDoorLeft"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    fxn: inspect,
  },
  $mediaStandDoorRight: {
    name: '$mediaStandDoorRight',
    nodes: null,
    selector: '[data-selector = "mediaStandDoorRight"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    fxn: inspect,
  },
  $bookSpine: {
    name: '$bookSpine',
    nodes: null,
    selector: '[data-selector = "bookSpine"]',
    inventorySelector: 'bookSpine',
    listenerType: 'click',
    found: false,
    // ???????? solves here
    solves: '',
    imgSrc: './Media/svgComponents/bookSpine.svg',
    altText: 'a Book',
    triggerSpecificInventoryFunction: true,
    inventorySpecificFunction: function InventorySpecific() {
      debugger;
      if (
        //only adding 1 book;
        game.roomContainer.lastElementChild.dataset.selector !=
        'readableJournal'
      ) {
        game.roomContainer.innerHTML += journal(livingRoom);
        toggleNavArrows();
      }
      let pages = document.querySelectorAll('.page');
      let hiddenLetters = document.querySelectorAll('.hiddenLetter');
      let closeZoomButton = document.querySelector(
        '[data-selector = "closeZoomButton"]'
      );

      function revealMessage(event) {
        // debugger;
        let letter = event.target;
        if (game.roomContainer.classList.contains('flashLightOn')) {
          letter.classList.add('messageShown');
        } else {
          return;
        }
      }
      function hideMessage(event) {
        let letter = event.target;
        letter.classList.remove('messageShown');
      }

      function flipPage(event) {
        if (!event.target.classList.contains('flipped')) {
          event.target.classList.add('flipped');
          event.target.classList.remove('page-active');
          event.target.nextElementSibling?.classList.add('page-active');
        } else {
          // debugger;
          event.target.classList.remove('flipped');
          event.target.classList.add('unflipping');
          setTimeout(() => {
            event.target.classList.remove('unflipping');
          }, 600);
          event.target.classList.add('page-active');
          event.target.nextElementSibling.classList.remove('page-active');
        }
      }

      hiddenLetters.forEach((letter) =>
        letter.addEventListener('mouseover', revealMessage)
      );
      hiddenLetters.forEach((letter) =>
        letter.addEventListener('mouseout', hideMessage)
      );
      pages.forEach((page) => page.addEventListener('click', flipPage));

      closeZoomButton.addEventListener('click', () => {
        debugger;
        let child = document.querySelector(
          '[data-selector = "readableJournal"]'
        );
        toggleArrows();
        game.roomContainer.removeChild(child);
        game.currentRoom.render(game.roomContainer, game.currentRoom);
      });
    },
    fxn: addtoInventory,
  },
  $safeKeyCard: {
    name: '$safeKeyCard',
    nodes: null,
    selector: '[data-selector = "safeKeyCard"]',
    inventorySelector: 'safeKeyCard',
    listenerType: 'click',
    found: false,
    // ???????? solves here
    solves: '$kitchenKeypadCardSlot',
    imgSrc: './Media/svgComponents/safeKeyCard.svg',
    altText: 'keyCard from the safe',
    triggerSpecificInventoryFunction: false,
    fxn: addtoInventory,
  },
  $couchKey: {
    name: '$couchKey',
    nodes: null,
    selector: '[data-selector = "couchKey"]',
    inventorySelector: 'couchKey',
    listenerType: 'click',
    found: false,
    // ???????? solves here must match object name in other room;
    solves: '$door3', //to kitchen
    imgSrc: './Media/svgComponents/key2.svg',
    altText: 'keyCard from the safe',
    triggerSpecificInventoryFunction: false,
    fxn: addtoInventory,
  },
  $standingLamp: {
    name: '$standingLamp',
    nodes: null,
    selector: '[data-selector = "standingLamp"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    fxn: inspect,
  },
  $standingLamp2: {
    name: '$standingLamp2',
    nodes: null,
    selector: '[data-selector = "standingLamp2"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    fxn: inspect,
  },
  $specialBook: {
    name: '$specialBook',
    nodes: null,
    selector: '[data-selector = "specialBook"]',
    inspected: false,
    className: 'livingRoom_bookShelf-inspected',
    listenerType: 'click',
    fxn: inspect,
  },
  $thermostatSwitch: {
    name: '$thermostatSwitch',
    nodes: null,
    selector: '[data-selector = "thermostatSwitch"]',
    inspected: false,
    gameMessageWhenInspecting: 'You turn the air on.  That breeze feels nice',
    gameMessageWhenUninspecting:
      'You turn the air off.  It is too cold in here',
    listenerType: 'click',
    fxn: inspect,
  },
  $couchPillow1: {
    name: '$couchPillow1',
    nodes: null,
    selector: '[data-selector = "couchPillow1"]',
    inspected: false,
    gameMessageWhenInspecting: 'You pick up the couch pillow',
    gameMessageWhenUninspecting: 'You set down the couch pillow',
    listenerType: 'click',
    fxn: inspect,
  },
  $couchPillow2: {
    name: '$couchPillow2',
    nodes: null,
    selector: '[data-selector = "couchPillow2"]',
    inspected: false,
    gameMessageWhenInspecting: 'You pick up the couch pillow',
    gameMessageWhenUninspecting: 'You set down the couch pillow',
    listenerType: 'click',
    fxn: inspect,
  },
  $sideCouchCushion2: {
    name: '$sideCouchCushion2',
    nodes: null,
    selector: '[data-selector = "sideCouchCushion2"]',
    inspected: false,
    gameMessageWhenInspecting: null,
    gameMessageWhenUninspecting: null,
    listenerType: 'click',
    fxn: inspect,
  },
  $sideCouchCushion: {
    name: '$sideCouchCushion',
    nodes: null,
    selector: '[data-selector = "sideCouchCushion"]',
    inspected: false,
    gameMessageWhenInspecting: null,
    gameMessageWhenUninspecting: null,
    listenerType: 'click',
    fxn: inspect,
  },
  $middleCouchCushion: {
    name: '$middleCouchCushion',
    nodes: null,
    selector: '[data-selector = "middleCouchCushion"]',
    inspected: false,
    gameMessageWhenInspecting: 'You pick up the couch cushion',
    gameMessageWhenUninspecting: 'You set down the couch cushion',
    listenerType: 'click',
    fxn: inspect,
  },

  $safe: {
    name: '$safe',
    nodes: null,
    selector: '[data-selector = "safe"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    open: false,
    lockedMessage: "It's a safe, but I can't get into it right now.",
    solvedMessage: 'You open up the safe',
    solvingMessage: 'You hear the safe pop loose',
    listenerType: 'click',
    fxn: interactLockedItem,
  },
  $safeKeypad: {
    name: '$safeKeypad',
    nodes: null,
    selector: '[data-selector = "safeKeypad"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    // open: true,
    // ? What code for keypad?
    isSolvedBy: 'GRANDCANAL',
    lockedMessage: "It's a safe, but I can't get into it right now.",
    solvedMessage: 'You open up the safe',
    solvingMessage: 'You hear the safe pop loose',
    listenerType: 'click',
    fxn: focusView,
  },
  $keypadBtns: {
    name: '$keypadBtns',
    nodes: null,
    selector: '[data-selector = "safeKeypadBtn"]',
    listenerType: 'click',
    inspected: false,
    fxn: manageKeypad,
  },
  $fanSwitch: {
    name: '$fanSwitch',
    nodes: null,
    selector: '[data-selector = "fanSwitch"]',
    inspected: true,
    listenerType: 'click',
    fxn: inspect,
  },
};

// Room Specific functions
function manageKeypad(event, obj, room) {
  if (notALockedItem()) {
    return;
  }

  //room for abstraction;
  let display = document.querySelector('.safeKeypad-display');
  let btnPressed = event.target;
  if (btnPressed.dataset.fxn == 'close') {
    livingRoom.modalBlur = false; //room1
    livingRoom.$safeKeypad.inspected = false; //updating state;
    toggleNavArrows();
    livingRoom.render(game.roomContainer, livingRoom);
    //   call a re-render to reflect state
  } else if (btnPressed.dataset.fxn == 'submit') {
    if (display.textContent == livingRoom.$safeKeypad.isSolvedBy) {
      livingRoom.$safe.open = true;
      livingRoom.modalBlur = false;
      display.classList.add('correct');
      toggleNavArrows();
      setTimeout(() => {
        livingRoom.render(game.roomContainer, livingRoom);
      }, 400);
    } else {
      display.textContent = '';
      display.classList.add('error');
      setTimeout(() => {
        display.classList.remove('error');
      }, 400);
    }
  } else {
    display.textContent += event.target.textContent;
    //  checkForSolved()    //doesn't exist yet;
  }
}

//@# --------  ROOM HTML VIEWS; ------------

livingRoom.frontHTML = function frontHTML() {
  let html = `
  ${defaultRoom}
  ${coffeeTable(livingRoom)}
  ${mediaStand(livingRoom)}
  ${television(livingRoom)}
	`;

  return html;
};

livingRoom.rightHTML = function () {
  let html = `
	${defaultRoom}
	${gameShelf(livingRoom)}
	${standingLamp(livingRoom)}
	${thermostat(livingRoom)}
	${door(livingRoom)}
	`;
  return html;
};

livingRoom.leftHTML = function leftHTML() {
  let html = `
	${defaultRoom}
	${standingLamp2(livingRoom)}
  ${safe(livingRoom)}
  ${safeKeypadZoom(livingRoom)}
	${bookCase(livingRoom)}
  ${door3(livingRoom)}

  `;

  return html;
};

livingRoom.backHTML = function backHTML() {
  let html = `
	${defaultRoom}
	${couch(livingRoom)}
	${door2(livingRoom)}
	${lightSwitch(livingRoom)}
	${fanSwitch(livingRoom)}
	`;
  return html;
};

livingRoom.ceilingHTML = function backHTML() {
  let html = `
	${ceilingView}
	${ceilingVent(livingRoom)}
	${ceilingFan(livingRoom)}
	`;
  return html;
};

export default livingRoom;
