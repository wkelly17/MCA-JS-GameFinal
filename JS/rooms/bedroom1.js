//@@=============== ROOMS AND FUNCTIONALITY IMPORTS  =============
import game from '../app.js';
import livingRoom from './livingRoom.js';
import {
  interactLockedItem,
  render,
  hydrateDomElements,
  notALockedItem,
  focusView,
  inspect,
  inspectNoAction,
  closeZoomView,
  switchLights,
  addtoInventory,
  goToRoom,
} from './roomFunctions.js';
import defaultRoom from './defaultRoom.js';
import ceilingView from './defaultCeilingView.js';
import toggleNavArrows from '../utils/toggleArrows.js';

//@@=============== DOM SVG IMPORTS  =============
import bed from '../gameComponents/bed.js';
import bedUnderView from '../gameComponents/bed_underView.js';
import nightStand from '../gameComponents/nightstand.js';
import topDownDrawer from '../gameComponents/topDownDrawer.js';
import lamp from '../gameComponents/lamp.js';
import roomWindow from '../gameComponents/window.js';
import alexa from '../gameComponents/alexa.js';
import closet from '../gameComponents/closet.js';
import hamper from '../gameComponents/hamper.js';
import dresser from '../gameComponents/dresser.js';
import lightSwitch from '../gameComponents/lightSwitch.js';
import television from '../gameComponents/tv.js';
import ceilingFan from '../gameComponents/ceilingFan.js';
import ceilingVent from '../gameComponents/ceilingVent.js';
import door from '../gameComponents/door.js';
// import X from '../gameComponents/';

let bedroom1 = {
  // @# CORE PIECES OF GLOBAL ROOM STATE;
  name: 'bedroom1',
  lightsAreOn: true,
  directionFacing: 'front', //up for ceiling
  returnFromCeiling: null,
  modalBlur: false,
  specificViewActivated: false,

  // @# CORE RENDERING METHODS
  hydrateDomElements: hydrateDomElements,
  render: render,

  // @# DOM ELEMENTS DEFINED BELOW
  //  NOTES; nodes plural used even for singluar items to query Select ALL on items that will be plural; nodes dynamically selected.  I like using the null placeholder here for visual reference;

  $blanket: {
    name: '$blanket',
    nodes: null,
    selector: '[data-selector = "bed-blanket"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: 'You pull the covers back',
    gameMessageWhenUninspecting: 'You pull the covers up',
    fxn: inspect,
  },
  $bedUnderView: {
    name: '$bedUnderView',
    nodes: null,
    selector: '[data-selector = "underBedView"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: 'You peer under the bed',
    gameMessageWhenUninspecting: 'You climb out from under the bed',
    specificView: bedUnderView,
    fxn: inspect,
  },
  //todo:   needs styling
  $closeBedZoomButton: {
    name: '$closeBedZoomButton',
    nodes: null,
    selector: '[data-selector = "closeBedZoomButton"]',
    listenerType: 'click',
    objectToChange: '$bedUnderView',
    property: 'inspected',
    closingMessage: 'You crawl back out from under the bed.',
    fxn: closeZoomView,
  },
  //   todo: lamp, fix nightStand (got saved over), fir top down Drawer view; data selectors in svgs themselves;
  $nightStandDrawer: {
    name: '$nightStandDrawer',
    nodes: null,
    selector: '[data-selector = "nightStandDrawer"]',
    inspected: false,
    listenerType: 'click',
    gameMessageWhenInspecting: 'You open the nighstand',
    gameMessageWhenUninspecting: 'You close  the nightStand',
    specificView: topDownDrawer,
    fxn: inspect,
  },
  $closeTopDownDrawer: {
    name: '$closeTopDownDrawer',
    nodes: null,
    selector: '[data-selector = "closeDrawerZoomButton"]',
    listenerType: 'click',
    objectToChange: '$nightStandDrawer',
    property: 'inspected',
    closingMessage: 'You close the nightstand drawer.',
    fxn: closeZoomView,
  },
  $lamp: {
    name: '$lamp',
    nodes: null,
    selector: '[data-selector = "lamp1"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: 'You turn the lamp on',
    gameMessageWhenUninspecting: 'You turn the lamp off',
    fxn: inspect,
  },
  $flashLight: {
    name: '$flashLight',
    nodes: null,
    selector: '[data-selector = "flashLight"]',
    inventorySelector: 'flashLight',
    listenerType: 'click',
    found: false,
    // ???????? solves here
    solves: 'secretMessage',
    imgSrc: './Media/svgComponents/flashlight.svg',
    altText: 'flashLight',
    //  todo: toggle body classList specific use function
    triggerSpecificInventoryFunction: true,
    inventorySpecificFunction: function InventorySpecific() {
      debugger;
      if (game.roomContainer.classList.contains('flashLightOn')) {
        game.roomContainer.classList.remove('flashLightOn');
      } else {
        game.roomContainer.classList.add('flashLightOn');
      }
    },
    fxn: addtoInventory,
  },
  $underBedKey: {
    name: '$underBedKey',
    nodes: null,
    selector: '[data-selector = "underBedKey"]',
    inventorySelector: 'underBedKey',
    listenerType: 'click',
    found: false,
    // ???????? solves here
    solves: '$door',
    imgSrc: './Media/svgComponents/inventoryKey.svg',
    altText: 'key from under the bed',
    triggerSpecificInventoryFunction: false,
    fxn: addtoInventory,
  },
  $wireHanger: {
    name: '$wireHanger',
    nodes: null,
    selector: '[data-selector = "wireHanger"]',
    inventorySelector: 'wireHanger',
    listenerType: 'click',
    found: false,
    // ???????? solves here
    solves: 'ventKey',
    imgSrc: './Media/svgComponents/inventoryHanger.svg',
    altText: 'a Wire Hanger',
    triggerSpecificInventoryFunction: false,
    fxn: addtoInventory,
  },
  $alexa: {
    name: '$alexa',
    nodes: null,
    selector: '[data-selector = "alexa"]',
    inspected: false,
    listenerType: 'click',
    gameMessage: "Amexa says, 'I cannot help you with that'",
    fxn: inspectNoAction,
  },
  $closetDoorLeft: {
    name: '$closetDoorLeft',
    nodes: null,
    selector: '[data-selector = "closetDoorLeft"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: null,
    gameMessageWhenUninspecting: null,
    fxn: inspect,
  },
  $closetDoorRight: {
    name: '$closetDoorRight',
    nodes: null,
    selector: '[data-selector = "closetDoorRight"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: null,
    gameMessageWhenUninspecting: null,
    fxn: inspect,
  },
  $hamper: {
    name: '$hamper',
    nodes: null,
    selector: '[data-selector = "hamper"]',
    inspected: false,
    className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: null,
    gameMessageWhenUninspecting: null,
    gameMessage:
      "It's a hamper full of dirty clothes. What did you expect to find?",
    fxn: inspectNoAction,
    //  fxn: inspect,
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
  $television: {
    name: '$television',
    nodes: null,
    selector: '[data-selector = "television"]',
    // inspected: false,
    // className: 'inspected',
    listenerType: 'click',
    gameMessageWhenInspecting: null,
    gameMessageWhenUninspecting: null,
    gameMessage:
      'Nothing good on the TV anyway; Besides, I better figure out how to get out of here',
    fxn: inspectNoAction,
    //  fxn: inspect,
  },
  $door: {
    name: '$door',
    nodes: null,
    selector: '[data-selector = "door"]',
    listenerType: 'click',
    directionLeadsTo: 'front',
    roomLeadsTo: 'livingRoom',
    open: false,
    isSolvedBy: '$underBedKey',
    gameMessage: 'You feel the key catch in the lock and spring open',
    lockedMessage: "Hmm.. it's locked somehow",
    fxn: goToRoom,
  },

  //   !!!!!!!!!! bookmark !!!!!!!!!!!!
  //   !!!!!!!!!! OLD !!!!!!!!!!!!

  // $underBedKey: {
  //   name: '$underBedKey',
  //   nodes: null,
  //   selector: '[data-selector = "underBedKey"]',
  //   inventorySelector: 'underBedKey',
  //   listenerType: 'click',
  //   found: false,
  //   solves: '$door',
  //   imgSrc: './Media/SVG-Components/key.svg',
  //   altText: 'key',
  //   fxn: addtoInventory,
  // },

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
    bedroom1.modalBlur = false; //room1
    bedroom1.$keypad.inspected = false; //updating state;
    toggleNavArrows();
    bedroom1.render(game.roomContainer, bedroom1);
    //   call a re-render to reflect state
  } else {
    display.textContent += event.target.textContent;
    //  checkForSolved()    //doesn't exist yet;
  }
}

//@# --------  ROOM HTML VIEWS; ------------

bedroom1.frontHTML = function frontHTML() {
  //item inside nightStand too...

  let html = `
  ${defaultRoom}
  ${bed(bedroom1)}
  ${bedUnderView(bedroom1)}
  ${nightStand(bedroom1)}
  ${topDownDrawer(bedroom1)}
  ${lamp(bedroom1)}

  <p class = 'huge'> I'm the front' </p>

	`;
  // ${underBed(bedroom1)}
  // ${nightStand(bedroom1)}
  // ${topDownDrawer(bedroom1)}
  // ${lamp(bedroom1)}
  return html;
};

bedroom1.rightHTML = function () {
  let html = `
	${defaultRoom}
  ${roomWindow(bedroom1)}
  ${alexa(bedroom1)}
  <p class = 'huge'> I'm the right' </p>

	`;
  // ${alexa(bedroom1)}
  // ${glassWindow(bedroom1)}

  return html;
};

bedroom1.leftHTML = function leftHTML() {
  let html = `
	${defaultRoom}
	${closet(bedroom1)}
	${hamper(bedroom1)}
	<p class = 'huge'> I'm the left </p>
	
	`;
  // ${closet(bedroom1)}
  // ${hamper(bedroom1)}
  return html;
};

bedroom1.backHTML = function backHTML() {
  let html = `
	${defaultRoom}
	${dresser(bedroom1)}
	${lightSwitch(bedroom1)}
	${television(bedroom1)}
	${door(bedroom1)}
	<p class = 'huge'> I'm the back </p>
	`;
  // ${dresser(bedroom1)}
  // ${lightSwitch(bedroom1)}
  // ${tv(bedroom1)}

  return html;
};

bedroom1.ceilingHTML = function backHTML() {
  let html = `
	${ceilingView}

	${ceilingVent(bedroom1)}
	${ceilingFan(bedroom1)}

	<p class = 'huge'> I'm the ceiling </p>
	`;
  // ${ceilingFan(bedroom1)}
  // ${ceilingVent(bedroom1)}

  return html;
};

export default bedroom1;
