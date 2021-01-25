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
} from './roomFunctions.js';
import defaultRoom from './defaultRoom.js';
import ceilingView from './defaultCeilingView.js';

//@@=============== DOM SVG IMPORTS  =============

// ceiling:
import ceilingFan from '../gameComponents/ceilingFan.js';
import ceilingVent from '../gameComponents/ceilingVent.js';

import door from '../gameComponents/door.js';
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
// import X from '../gameComponents/';
// import X from '../gameComponents/';

let kitchen = {
  // @# CORE PIECES OF GLOBAL ROOM STATE;
  name: 'kitchen',
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
  //   todo: change door leads to here
  $door: {
    name: '$door',
    nodes: null,
    selector: '#Door',
    listenerType: 'click',
    directionLeadsTo: 'right',
    roomLeadsTo: 'livingRoom',
    open: true,
    fxn: goToRoom,
  },
};

// Room Specific functions

//@# --------  ROOM HTML VIEWS; ------------

kitchen.frontHTML = function frontHTML() {
  let html = `
  ${defaultRoom}
  ${oven(kitchen)}
  ${upperCabinets(kitchen)}
  ${cabinets(kitchen)}



	`;

  return html;
};

kitchen.rightHTML = function () {
  let html = `
	${defaultRoom}
	${table(kitchen)}
	${coffeeStand(kitchen)}
	
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
