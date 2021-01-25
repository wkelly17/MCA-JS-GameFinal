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
import lightSwitch from '../gameComponents/lightSwitch.js';
import desk from '../gameComponents/officeDesk.js'; //contains more than desk;
import window from '../gameComponents/window.js';

import whiteBoard from '../gameComponents/whiteBoard.js';
import floorLamp from '../gameComponents/standingLamp.js';
import printerStation from '../gameComponents/printerStation.js';
import lamp from '../gameComponents/lamp.js';
// import printerStand from '../gameComponents/printerStation.js';
// import chest from '../gameComponents/';
// import X from '../gameComponents/';
// import X from '../gameComponents/';
// import X from '../gameComponents/';

let study = {
  // @# CORE PIECES OF GLOBAL ROOM STATE;
  name: 'study',
  lightsAreOn: true,
  directionFacing: 'left',
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
    directionLeadsTo: 'left',
    roomLeadsTo: 'livingRoom',
    fxn: goToRoom,
  },
};

// Room Specific functions

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
	
	<p>I'M THE RIGHT! </p>
	`;
  return html;
};

study.leftHTML = function leftHTML() {
  let html = `
  ${defaultRoom}
  
	${printerStation(study)}
	${lamp(study)}
	<p>I'M THE Left! </p>
	
	`;
  return html;
};

study.backHTML = function backHTML() {
  let html = `
	${defaultRoom}
	${door(study)}

	<p>I'M THE back! </p>
	`;
  return html;
};

study.ceilingHTML = function backHTML() {
  let html = `
	${ceilingView}
	${ceilingVent(study)}
	<p>I'M THE ceiling!!! </p>
	`;
  return html;
};

export default study;
