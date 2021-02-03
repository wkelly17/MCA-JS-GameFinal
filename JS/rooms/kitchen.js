//@@=============== ROOMS AND FUNCTIONALITY IMPORTS  =============
import game from '../app.js';
import toggleNavArrows from '../utils/toggleArrows.js';
import navigate from '../utils/navigation.js';
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
  generalGameMessage,
} from './roomFunctions.js';
import defaultRoom from './defaultRoom.js';
import ceilingView from './defaultCeilingView.js';

//@@=============== DOM SVG IMPORTS  =============

// ceiling:
import ceilingFan from '../gameComponents/ceilingFan.js';
import ceilingVent from '../gameComponents/ceilingVent.js';

import door from '../gameComponents/door.js';
import door2 from '../gameComponents/door2.js';
import oven from '../gameComponents/oven.js';
import upperCabinets from '../gameComponents/cabinetsUpper.js';
import cabinets from '../gameComponents/cabinet.js';
import table from '../gameComponents/kitchenTable.js';
import coffeeStand from '../gameComponents/coffeeStand.js';
import cabinets2 from '../gameComponents/cabinets2.js';
import cabinetsUpper2 from '../gameComponents/cabinetsUpper2.js';
import dishwasher from '../gameComponents/dishwasher.js';
import fridge from '../gameComponents/fridge.js';
import trashcan from '../gameComponents/trashcan.js';
import lightSwitch from '../gameComponents/lightSwitch.js';
import breaker from '../gameComponents/breaker.js';
import keypad from '../gameComponents/kitchenKeypad.js';
import keypadZoom from '../gameComponents/kitchenKeypadZoomed.js';
import receptacle from '../gameComponents/receptacle.js';

let kitchen = {
  // @# CORE PIECES OF GLOBAL ROOM STATE;
  name: 'kitchen',
  lightsAreOn: true,
  directionFacing: 'front',
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
  //   todo: change door leads to here to an ending scene
  $kitchenDoor: {
    name: '$kitchenDoor',
    nodes: null,
    selector: '[data-selector = "door"]',
    listenerType: 'click',
    open: false,
    fxn: endGame,
  },
  $door2: {
    name: '$door2',
    nodes: null,
    selector: '[data-selector = "door2"]',
    listenerType: 'click',
    directionLeadsTo: 'right',
    roomLeadsTo: 'livingRoom',
    open: true,
    fxn: goToRoom,
  },
  $breakerDoor: {
    name: '$breakerDoor',
    nodes: null,
    selector: '[data-selector = "breakerDoor"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    open: false,
    isSolvedBy: '$studyKey',
    lockedMessage: 'The breakers are locked.',
    solvedMessage: 'You insert the key and twist.  You feel the box open',
    listenerType: 'click',
    fxn: interactLockedItem,
  },
  $receptacle: {
    name: '$receptacle',
    nodes: null,
    selector: '[data-selector = "receptacle"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    // todo: change back to false
    open: true,
    isSolvedBy: '$paperclip',
    lockedMessage: "It's a receptacle",
    solvedMessage:
      'You use the paperclip to remove the screws from the receptacle and pry the cover off',
    listenerType: 'click',
    triggersReRender: true,
    fxn: interactLockedItem,
  },
  $kitchenKeypadCardSlot: {
    name: '$kitchenKeypadCardSlot',
    nodes: null,
    selector: '[data-selector = "kitchenKeypadCardSlot"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    open: false,
    isSolvedBy: '$safeKeyCard',
    lockedMessage: 'Some sort of slot',
    solvedMessage: 'You insert the key card and hear a beep come from the pad',
    listenerType: 'click',
    fxn: insertKeyCard,
  },
  $trippedBreaker: {
    name: '$trippedBreaker',
    nodes: null,
    selector: '[data-selector = "trippedBreaker"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You flip the breaker on',
    gameMessageWhenUninspecting: 'You flip the breaker off',
    fxn: inspect,
  },
  $uppercabinetDoor1: {
    name: '$uppercabinetDoor1',
    nodes: null,
    selector: '[data-selector = "uppercabinetDoor1"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $uppercabinetDoor2: {
    name: '$uppercabinetDoor2',
    nodes: null,
    selector: '[data-selector = "uppercabinetDoor2"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $uppercabinetDoor3: {
    name: '$uppercabinetDoor3',
    nodes: null,
    selector: '[data-selector = "uppercabinetDoor3"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $uppercabinetDoor4: {
    name: '$uppercabinetDoor4',
    nodes: null,
    selector: '[data-selector = "uppercabinetDoor4"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $uppercabinetSet2Door1: {
    name: '$uppercabinetSet2Door1',
    nodes: null,
    selector: '[data-selector = "uppercabinetSet2Door1"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $uppercabinetSet2Door2: {
    name: '$uppercabinetSet2Door2',
    nodes: null,
    selector: '[data-selector = "uppercabinetSet2Door2"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $uppercabinetSet2Door3: {
    name: '$uppercabinetSet2Door3',
    nodes: null,
    selector: '[data-selector = "uppercabinetSet2Door3"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $uppercabinetSet2Door4: {
    name: '$uppercabinetSet2Door4',
    nodes: null,
    selector: '[data-selector = "uppercabinetSet2Door4"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetDoor1: {
    name: '$cabinetDoor1',
    nodes: null,
    selector: '[data-selector = "cabinetDoor1"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetDoor2: {
    name: '$cabinetDoor2',
    nodes: null,
    selector: '[data-selector = "cabinetDoor2"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetDoor3: {
    name: '$cabinetDoor3',
    nodes: null,
    selector: '[data-selector = "cabinetDoor3"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetDoor4: {
    name: '$cabinetDoor4',
    nodes: null,
    selector: '[data-selector = "cabinetDoor4"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetDoor5: {
    name: '$cabinetDoor5',
    nodes: null,
    selector: '[data-selector = "cabinetDoor5"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetDoor6: {
    name: '$cabinetDoor6',
    nodes: null,
    selector: '[data-selector = "cabinetDoor6"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetSet2Door1: {
    name: '$cabinetSet2Door1',
    nodes: null,
    selector: '[data-selector = "cabinetSet2Door1"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetSet2Door2: {
    name: '$cabinetSet2Door2',
    nodes: null,
    selector: '[data-selector = "cabinetSet2Door2"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetSet2Door3: {
    name: '$cabinetSet2Door3',
    nodes: null,
    selector: '[data-selector = "cabinetSet2Door3"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetSet2Door4: {
    name: '$cabinetSet2Door4',
    nodes: null,
    selector: '[data-selector = "cabinetSet2Door4"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetSet2Door5: {
    name: '$cabinetSet2Door5',
    nodes: null,
    selector: '[data-selector = "cabinetSet2Door5"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $cabinetSet2Door6: {
    name: '$cabinetSet2Door6',
    nodes: null,
    selector: '[data-selector = "cabinetSet2Door6"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the cabinet',
    gameMessageWhenUninspecting: 'You close the cabinet',
    fxn: inspect,
  },
  $keypad: {
    name: '$keypad',
    nodes: null,
    selector: '[data-selector = "keypad"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    // ? What code for keypad?
    isSolvedBy: '9444666633777',
    solved: false,
    solvedMessage: 'You hear the magnetic lock click open',
    listenerType: 'click',
    fxn: focusView,
  },
  $keypadBtns: {
    name: '$keypadBtns',
    nodes: null,
    selector: '[data-selector = "kitchenKeypadBtn"]',
    listenerType: 'click',
    inspected: false,
    fxn: manageKeypad,
  },
  $ovenDoor: {
    name: '$ovenDoor',
    nodes: null,
    selector: '[data-selector = "ovenDoor"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: 'You pull the covers back',
    gameMessageWhenUninspecting: 'You pull the covers up',
    fxn: inspect,
  },
  $fridgeDoor: {
    name: '$fridgeDoor',
    nodes: null,
    selector: '[data-selector = "fridgeDoor"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the fridge',
    gameMessageWhenUninspecting: 'You close the fridge',
    fxn: inspect,
  },
  $freezerDoor: {
    name: '$freezerDoor',
    nodes: null,
    selector: '[data-selector = "freezerDoor"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the freezer',
    gameMessageWhenUninspecting: 'You close the freezer',
    fxn: inspect,
  },
};

// Room Specific functions
function manageKeypad(event, obj, room) {
  // todo: breaker turned on;
  //todo: keycard inserted;

  // @# Can't use wrong inventory item on keypad
  if (notALockedItem()) {
    return;
  }

  // @# Exiting out before bail out below
  let display = document.querySelector('.kitchen_display');
  let btnPressed = event.target;
  if (btnPressed.dataset.fxn == 'close') {
    kitchen.modalBlur = false; //room1
    kitchen.$keypad.inspected = false; //updating state;
    toggleNavArrows();
    kitchen.render(game.roomContainer, kitchen);
    //   call a re-render to reflect state
  }

  // todo; Early bail out if conditions not Met; Just uncomment
  // if (
  //   !kitchen.$trippedBreaker.inspected ||
  //   !kitchen.$kitchenKeypadCardSlot.inspected
  // ) {
  //   return;
  // }

  //@# deleting on keypad
  else if (btnPressed.dataset.fxn == 'delete') {
    display.textContent = display.textContent.slice(0, -1);
  } else if (btnPressed.dataset.fxn == 'submit') {
    if (display.textContent == kitchen.$keypad.isSolvedBy) {
      // @# correct entries
      kitchen.$keypad.solved = true;
      kitchen.$kitchenDoor.open = true;
      kitchen.modalBlur = false;
      generalGameMessage(kitchen.$keypad.solvedMessage);
      display.classList.add('correct');
      setTimeout(() => {
        kitchen.render(game.roomContainer, kitchen);
      }, 400);
    } else {
      // @# incorrect entries
      display.textContent = '';
      display.classList.add('error');
      setTimeout(() => {
        display.classList.remove('error');
      }, 400);
    }
  } else {
    display.textContent += event.target.value;
  }
}

function insertKeyCard(event) {
  // extra function here for the needed re-rerender on a zoomed in view;
  interactLockedItem(event, kitchen.$kitchenKeypadCardSlot, kitchen);
  kitchen.render(game.roomContainer, kitchen);
}

function endGame() {
  debugger;
  document.body.removeEventListener('keyup', navigate);
  game.won = true;
  let gameOverScene = `<div class='gameOverScene'></div>`;
  game.roomContainer.innerHTML += gameOverScene;
  let gameOverMessage = document.createElement('p');
  gameOverMessage.textContent = `Congratulations... You manageed to make it out with ${game.timerSeconds} seconds left...  Until we meet again.  Signore G`;
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
}

//@# --------  ROOM HTML VIEWS; ------------

kitchen.frontHTML = function frontHTML() {
  let html = `
  ${defaultRoom}
  ${oven(kitchen)}
  ${upperCabinets(kitchen)}
  ${receptacle(kitchen, '1')}
  ${cabinets(kitchen)}
	`;

  return html;
};

kitchen.rightHTML = function () {
  let html = `
	${defaultRoom}
	${table(kitchen)}
  ${coffeeStand(kitchen)}
  ${breaker(kitchen)}
  ${door2(kitchen)}

	
	<p>I'M THE RIGHT! </p>
	`;
  return html;
};

kitchen.leftHTML = function leftHTML() {
  let html = `
	${defaultRoom}
	${cabinets2(kitchen)}
	${cabinetsUpper2(kitchen)}
  ${dishwasher(kitchen)}

  
	<p>I'M THE Left! </p>
	
	`;
  return html;
};

kitchen.backHTML = function backHTML() {
  let html = `
	${defaultRoom}
	${fridge(kitchen)}
	${trashcan(kitchen)}
	${lightSwitch(kitchen)}
	${door(kitchen)}
	${keypad(kitchen)}
	${keypadZoom(kitchen)}


	<p>I'M THE back! </p>
	`;
  return html;
};

kitchen.ceilingHTML = function backHTML() {
  let html = `
	${ceilingView}
	${ceilingVent(kitchen)}
	<p>I'M THE ceiling!!! </p>
	`;
  return html;
};

export default kitchen;
