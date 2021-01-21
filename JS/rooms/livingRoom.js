//@@=============== ROOMS AND FUNCTIONALITY IMPORTS  =============
import game from '../app.js';
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
} from './roomFunctions.js';
import defaultRoom from './defaultRoom.js';
import ceilingView from './defaultCeilingView.js';

//@@=============== DOM SVG IMPORTS  =============
// import bedSVG from '../game-components/bed.js';

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
  $lightSwitch1: {
    name: '$lightSwitch1',
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
    selector: '#Door',
    listenerType: 'click',
    directionLeadsTo: 'front',
    roomLeadsTo: 'livingRoom',
    fxn: goToRoom,
  },
  $key: {
    objName: '$key',
    nodes: null,
    selector: '[data-selector = "room1$key"]',
    inventorySelector: 'room1$key',
    listenerType: 'click',
    found: false,
    solves: '$filingCabinet',
    imgSrc: './Media/SVG-Components/key.svg',
    altText: 'key',
    fxn: addtoInventory,
  },
  $filingCabinet: {
    name: '$filingCabinet',
    nodes: null,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [
      {
        selector: '.filingCabinetLock',
        class: 'rotatedLock',
      },
    ],
    selector: '#filingCabinet',
    listenerType: 'click',
    open: false,
    isSolvedBy: 'key',
    solvedMessage:
      'You feel the key catch and give it a turn;  The drawer pops open',
    fxn: interactLockedItem,
  },
  $keypad: {
    name: '$keypad',
    nodes: null,
    selector: '#keypad',
    listenerType: 'click',
    inspected: false,
    fxn: focusView,
  },
  $keypadBtns: {
    name: '$keypadBtns',
    nodes: null,
    selector: '[data-role = "keypadElement"]',
    listenerType: 'click',
    inspected: false,
    fxn: manageKeypad,
  },
};

// Will abstract out if needed in more than one room;
function manageKeypad(event, obj, room) {
  debugger;

  //   Can make card slot a puzzle...
  if (notALockedItem()) {
    return;
  }

  //room for abstraction;
  let display = document.querySelector('.display');
  let btnPressed = event.target;
  if (btnPressed.dataset.fxn == 'close') {
    livingRoom.modalBlur = false; //room1
    livingRoom.$keypad.inspected = false; //updating state;
    toggleNavArrows();
    livingRoom.render(game.roomContainer, livingRoom);
    //   call a re-render to reflect state
  } else {
    display.textContent += event.target.textContent;
    //  checkForSolved()    //doesn't exist yet;
  }
}

//@# --------  ROOM HTML VIEWS; ------------

livingRoom.frontHTML = function frontHTML() {
  let html = `
  ${defaultRoom}

	`;
  //   ${bedSVG(livingRoom)}
  return html;
};

livingRoom.rightHTML = function () {
  let html = `
	${defaultRoom}
	<p>I'M THE RIGHT! </p>
	`;
  return html;
};

livingRoom.leftHTML = function leftHTML() {
  let html = `
	${defaultRoom}

	<p>I'M THE Left! </p>
	
	`;
  return html;
};

livingRoom.backHTML = function backHTML() {
  let html = `
	${defaultRoom}

	<p>I'M THE back! </p>
	`;
  return html;
};

livingRoom.ceilingHTML = function backHTML() {
  let html = `
	${ceilingView}
	<p>I'M THE ceiling!!! </p>
	`;
  return html;
};

export default livingRoom;
