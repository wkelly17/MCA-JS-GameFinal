//@@=============== ROOMS AND FUNCTIONALITY IMPORTS  =============
import game from '../app.js';
import bedroom1 from './bedroom1.js';
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
import ceilingVentWithKey from '../gameComponents/ceilingVentWithKey.js';

import door from '../gameComponents/door.js';
import lightSwitch from '../gameComponents/lightSwitch.js';
import desk from '../gameComponents/officeDesk.js'; //contains more than desk;
import window from '../gameComponents/window.js';

import whiteBoard from '../gameComponents/whiteBoard.js';
import floorLamp from '../gameComponents/standingLamp.js';
import printerStation from '../gameComponents/printerStation.js';
import lamp from '../gameComponents/lamp.js';
import sideWallWindow from '../gameComponents/studySideWallWindow.js';
import fanSwitch from '../gameComponents/fanSwitch.js';
// import printerStand from '../gameComponents/printerStation.js';
// import chest from '../gameComponents/';
// import X from '../gameComponents/';
// import X from '../gameComponents/';
// import X from '../gameComponents/';

let study = {
  // @# CORE PIECES OF GLOBAL ROOM STATE;
  name: 'study',
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
  //   todo: change door leads to here
  $door: {
    name: '$door',
    nodes: null,
    selector: '[data-selector = "door"]',
    listenerType: 'click',
    directionLeadsTo: 'left',
    roomLeadsTo: 'livingRoom',
    open: true,
    fxn: goToRoom,
  },
  $curtainLeft: {
    name: '$curtainLeft',
    nodes: null,
    selector: '[data-selector = "curtainLeft"]',
    inspected: false,
    listenerType: 'click',
    fxn: inspect,
  },
  $curtainRight: {
    name: '$curtainRight',
    nodes: null,
    selector: '[data-selector = "curtainRight"]',
    inspected: false,
    listenerType: 'click',
    fxn: inspect,
  },
  $lamp: {
    name: '$lamp',
    nodes: null,
    selector: '[data-selector = "lamp"]',
    inspected: false,
    listenerType: 'click',
    fxn: inspect,
  },
  $standingLamp: {
    name: '$standingLamp',
    nodes: null,
    selector: '[data-selector = "standingLamp"]',
    inspected: false,
    listenerType: 'click',
    fxn: inspect,
  },
  $rightWallCurtain: {
    name: '$rightWallCurtain',
    nodes: null,
    selector: '[data-selector = "rightWallCurtain"]',
    listenerType: 'click',
    gameMessage: "I can't reach that from this side of the room",
    fxn: inspectNoAction,
  },
  $leftWallCurtain: {
    name: '$leftWallCurtain',
    nodes: null,
    selector: '[data-selector = "leftWallCurtain"]',
    listenerType: 'click',
    gameMessage: "I can't reach that from this side of the room",
    fxn: inspectNoAction,
  },
  $lightSwitch: {
    name: '$lightSwitch',
    nodes: null,
    selector: '[data-selector = "lightSwitch"]',
    lightsOff: false,
    audio: null,
    listenerType: 'click',
    fxn: switchLights,
  },
  $fanSwitch: {
    name: '$fanSwitch',
    nodes: null,
    selector: '[data-selector = "fanSwitch"]',
    inspected: false,
    listenerType: 'click',
    fxn: inspect,
  },
  $paperclip: {
    name: '$paperclip',
    nodes: null,
    selector: '[data-selector = "paperclip"]',
    inventorySelector: 'paperclip',
    listenerType: 'click',
    found: false,
    // ???????? solves here
    solves: '$kitchenReceptacle',
    imgSrc: './Media/svgComponents/paperclip.svg',
    altText: 'A paperclip.  Could be handy for something',
    triggerSpecificInventoryFunction: false,
    fxn: addtoInventory,
  },
  $studyKey: {
    name: '$studyKey',
    nodes: null,
    selector: '[data-selector = "studyKey"]',
    inventorySelector: 'studyKey',
    listenerType: 'click',
    found: false,
    // ???????? solves here
    solves: '$breakerBoxDoor',
    bypassLockedItemChecker: true,
    imgSrc: './Media/svgComponents/key3.svg',
    altText: 'A key I snagged from the air vent',
    fxn: addVentKeyToInventory,
  },
  $safe: {
    name: '$safe',
    nodes: null,
    selector: '[data-selector = "safe"]',
    inspected: false,
    //  subnodes are affected when the main node is solved;
    affectedNodes: [],
    open: false,
    isSolvedBy: 'x',
    lockedMessage: "It's a safe, but I can't get into it right now.",
    solvedMessage: 'You manage to open the safe',
    listenerType: 'click',
    fxn: interactLockedItem,
  },
};

// Room Specific functions

function addVentKeyToInventory(event, props, room) {
  debugger;
  let unreachableMessage = "I can't quite reach that";
  let wrongInventoryMessage = "That does't do anything";
  console.log(game.inventory);
  if (!game.inventory.itemInUse || study.$fanSwitch.inspected) {
    generalGameMessage(unreachableMessage);
    return false; //must be accessed via an item
  } else if (game.inventory.itemInUse.name != '$wireHanger') {
    game.inventory.clearInventoryGlow(event);
    generalGameMessage(wrongInventoryMessage);
    return false;
  } else {
    let selectedItem = game.inventory.itemInUse;
    selectedItem.nodes.forEach((node) => {
      node.classList.add('inventoryItemUsed');
      node.classList.remove('inventoryGlow');
      node.removeEventListener('click', game.inventory.handleInventoryClick);
    });
    // 2nd;  removes item from use;  Must clear dom node first
    game.inventory.clearInventoryGlow(event);
    return addtoInventory(event, props, room);
  }
}

//@# --------  ROOM HTML VIEWS; ------------

study.frontHTML = function frontHTML() {
  let html = `
  ${defaultRoom}
  ${window(study)}
  ${desk(study)}

	`;

  return html;
};

study.rightHTML = function () {
  let html = `
	${defaultRoom}
  ${whiteBoard(study)}
  ${floorLamp(study)}
  ${sideWallWindow(study)}
	
	<p>I'M THE RIGHT! </p>
	`;
  return html;
};

study.leftHTML = function leftHTML() {
  let html = `
  ${defaultRoom}
  
	${printerStation(study)}
	${lamp(study)}
	${lightSwitch(study)}
	<p>I'M THE Left! </p>
	
	`;
  return html;
};

study.backHTML = function backHTML() {
  let html = `
	${defaultRoom}
	${door(study)}
	${fanSwitch(study)}

	<p>I'M THE back! </p>
	`;
  return html;
};

study.ceilingHTML = function backHTML() {
  let html = `
  ${ceilingView}
	${ceilingVentWithKey(study)}
  ${ceilingFan(study)}
	<p>I'M THE ceiling!!! </p>
	`;
  return html;
};

export default study;
