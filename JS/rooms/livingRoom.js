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
// import X from '../gameComponents/';
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
	${bookCase(livingRoom)}
  ${safe(livingRoom)}
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
