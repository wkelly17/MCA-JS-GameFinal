//@@=============== ROOMS AND FUNCTIONALITY IMPORTS  =============
import game from '../app.js';
import bedroom1 from './bedroom1.js';
import kitchen from './kitchen.js';
import study from './study.js';
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

// back
import couch from '../gameComponents/couch.js';
// todo ? side table?

// ceiling:
import ceilingFan from '../gameComponents/ceilingFan.js';
import ceilingVent from '../gameComponents/ceilingVent.js';

import door from '../gameComponents/door.js';
import door2 from '../gameComponents/door2.js';
import door3 from '../gameComponents/door3.js';
import lightSwitch from '../gameComponents/lightSwitch.js';
import journal from '../gameComponents/journal.js';
// import X from '../gameComponents/';

let livingRoom = {
  // @# CORE PIECES OF GLOBAL ROOM STATE;
  name: 'livingRoom',
  lightsAreOn: true,
  directionFacing: 'front',
  returnFromCeiling: null,
  modalBlur: false,

  // @# CORE RENDERING METHODS
  hydrateDomElements: hydrateDomElements,
  render: render,

  // @# DOM ELEMENTS DEFINED BELOW
  //  NOTES; nodes plural used even for singluar items to query Select ALL on items that will be plural; nodes dynamically selected.  I like using the null placeholder here for visual reference;
  $blanket: {
    name: '$blanket',
    nodes: null,
    selector: '#Blanket',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    fxn: inspect,
  },
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
    open: true,
    fxn: goToRoom,
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

      game.roomContainer.innerHTML += journal(livingRoom);
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
        game.roomContainer.removeChild(child);
      });
    },
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
  $safe: {
    name: '$safe',
    nodes: null,
    selector: '[data-selector = "safe"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    open: true,
    isSolvedBy: 'x',
    lockedMessage: "It's a safe, but I can't get into it right now.",
    solvedMessage: 'You manage to open the safe',
    listenerType: 'click',
    fxn: interactLockedItem,
  },
};

// Room Specific functions

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
	
	<p>I'M THE RIGHT! </p>
	`;
  return html;
};

livingRoom.leftHTML = function leftHTML() {
  let html = `
	${defaultRoom}
	${standingLamp2(livingRoom)}
  ${safe(livingRoom)}
	${bookCase(livingRoom)}
  ${door3(livingRoom)}
	<p>I'M THE Left! </p>
	
	`;
  return html;
};

livingRoom.backHTML = function backHTML() {
  let html = `
	${defaultRoom}
	${couch(livingRoom)}
	${door2(livingRoom)}
	${lightSwitch(livingRoom)}

	<p>I'M THE back! </p>
	`;
  return html;
};

livingRoom.ceilingHTML = function backHTML() {
  let html = `
	${ceilingView}
	${ceilingVent(livingRoom)}
	${ceilingFan(livingRoom)}
	<p>I'M THE ceiling!!! </p>
	`;
  return html;
};

export default livingRoom;
