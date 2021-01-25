import game from '../app.js'; //mostly for Room Container
import toggleArrows from '../utils/toggleArrows.js';
import navigateRooms from '../utils/navigateRooms.js';

//@#=============== CORE ROOM RENDERING LOGIC =============

function render(roomContainer, room, specificView) {
  if (room.specificViewActivated) {
    specificView = room.specificViewActivated;
  }
  roomContainer.innerHTML = chooseViewFxn(room, specificView, roomContainer);
  checkForModalBlur(roomContainer, room);
  checkLights(roomContainer, room);
  hydrateDomElements(roomContainer, room);
}

function hydrateDomElements(roomContainer, room) {
  room.DOM_Elements = gatherDomElements(room);
  room.DOM_Elements.forEach((element) => {
    element.nodes = roomContainer.querySelectorAll(element.selector);
    element.nodes.forEach((node) => {
      node.addEventListener(element.listenerType, (event) => {
        element.fxn(event, element, room);
      });
    });
  });
}

// optional abstraction for room DOM item functions... I think would work well for booleans;

function gatherDomElements(room) {
  let keys = Object.keys(room).filter((key) => key.startsWith('$'));
  let domElements = [];
  keys.forEach((key) => domElements.push(room[key]));
  return domElements;
}

function chooseViewFxn(room, specificView, roomContainer) {
  // Will be used for zoomed in scenes perhaps?
  if (specificView) {
    return specificView(room, roomContainer);
  }
  switch (room.directionFacing) {
    case 'front':
      return room.frontHTML();
    case 'right':
      return room.rightHTML();
    case 'left':
      return room.leftHTML();
    case 'back':
      return room.backHTML();
    case 'up':
      return room.ceilingHTML();
    default:
      break;
  }
}

//@#=============== CORE ROOM RENDERING  =============

//@%=============== RENDER UTILS  =============

function checkForModalBlur(roomContainer, room) {
  if (room.modalBlur) {
    roomContainer.innerHTML += `<div class="modal-blur"></div> `;
  }
}

function checkLights(roomContainer, room) {
  if (room.lightsAreOn) {
    roomContainer.classList.remove('lightsOff');
  }
}

//@%=============== RENDER UTILS  =============

//@# ===============  ROOM ELEMENT SHARED FUNCTIONS =============

function inspectNoAction(event, { gameMessage }) {
  if (notALockedItem()) {
    return;
  }
  generalGameMessage(gameMessage);
}

function inspect(event, { name, inspected, specificView, ...rest }, room) {
  // debugger;
  if (notALockedItem()) {
    return;
  }
  room[name].inspected = !room[name].inspected;
  inspectMessage(inspected, { ...rest });
  if (specificView) {
    room.specificViewActivated = specificView;
    room.render(game.roomContainer, room, specificView);
  } else {
    room.render(game.roomContainer, room);
  }
}

function switchLights(event, { name, audio, ...rest }, room) {
  if (notALockedItem()) {
    return;
  }
  // debugger;
  //   Room state change
  room.lightsAreOn = !room.lightsAreOn;

  //   Object property state change
  room[name].lightsOff = !room[name].lightsOff;

  let lightsAreOff = room.lightsAreOn == false;
  lightsAreOff
    ? game.roomContainer.classList.add('lightsOff')
    : game.roomContainer.classList.remove('lightsOff');

  room.render(game.roomContainer, room);
}

function interactLockedItem(
  event,
  { name, type, open, solvedMessage, affectedNodes, ...rest },
  room
) {
  // debugger;
  if (game.inventory.itemInUse) {
    let selectedItem = game.inventory.itemInUse;

    if (selectedItem.solves == name) {
      debugger;
      //setting room dom object state;
      room[name].open = true;

      //styling INventory Item;  Plural due to some objects having multiple nodes
      selectedItem.nodes.forEach((node) => {
        node.classList.add('inventoryItemUsed');
        node.classList.remove('inventoryGlow');
        node.removeEventListener('click', game.inventory.handleInventoryClick);
      });

      //setting message
      game.messageContainer.textContent = room[name].solvedMessage;

      //styling affectedNodes;
      if (affectedNodes) {
        affectedNodes.forEach((affectedNode) => {
          let DomSubnode = document.querySelector(affectedNode.selector);
          DomSubnode.classList.add(affectedNode.class);
        });
      }

      return;
      // re-render to reflect updated state or proceed by setting the new open = !open.... and continue through the function;
    }
  }
  // return if you want person to click adn then click again;  Keep like so if you want to trigger something else; (preferred;) But open is passed in an not reflecting updated object state;
  if (open) {
    //   Probably some sort of additional logic if it's already open.. trigger a zoomed or other view? (event.target.cll.toggle(open) or zoom view or ?)
    //   Triger a re-render to new view or just add an item to inventory or ?... need to see;
    //if causes re-render... break and re-render in if.. some next.  else add to Inventory obj.addsToInventory?. prop?
    console.log('i am opened!');
  } else {
    game.messageContainer.textContent = "I can't seem to get into that now";
  }
}

function notALockedItem() {
  if (game.inventory.itemInUse) {
    game.inventory.clearInventoryGlow();
    game.messageContainer.textContent = "Hmm.. that doesn't work";
    return true;
  }
}

function focusView(event, { name, inspected, ...rest }, room) {
  if (notALockedItem()) {
    return;
  }
  // activate room modal blur;
  room.modalBlur = true;
  // update inspected status to true
  room[name].inspected = true;

  //  A zoomed Modal will render due to inspected state having changed;
  render(game.roomContainer, room);
}

function addtoInventory(event, { objName, ...rest }, room) {
  debugger;
  if (notALockedItem()) {
    return;
  }
  room[objName].found = !room[objName].found;
  room.render(game.roomContainer, room);
  //   render to remove
  game.inventory.items.push(room[objName]);
  game.inventory.render(room[objName]);
}

function goToRoom(event, { open, directionLeadsTo, roomLeadsTo, gameMessage }) {
  if (!open && game.inventory.itemInUse) {
    return; // try to open door
  } else {
    generalGameMessage(gameMessage);
    let pickedRoom = navigateRooms(roomLeadsTo);
    game.currentRoom = pickedRoom;
    game.currentRoom.directionFacing = directionLeadsTo;

    //@# door styling
    event.target.ownerSVGElement.classList.add('doorOpen');
    setTimeout(() => {
      event.target.ownerSVGElement.classList.remove('doorOpen');
    }, 1200);
    setTimeout(() => {
      pickedRoom.render(game.roomContainer, pickedRoom);
    }, 1300);
  }
}

function closeZoomView(
  event,
  { objectToChange, property, closingMessage },
  room
) {
  // debugger;
  room[objectToChange][property] = !room[objectToChange][property];
  // clsoing specific zoomed view
  room.specificViewActivated = false;
  // message
  generalGameMessage(closingMessage);
  // arrows
  toggleArrows();
  room.render(game.roomContainer, room);
}

//@# ===============  ROOM ELEMENT SHARED FUNCTIONS =============

//@#=============== UTILS FOR DOM ELEMENTS NOT NEEDED BY ROOMS DIRECTLY  =============
// UTILs NO EXPORT
function inspectMessage(
  inspected,
  { gameMessageWhenInspecting, gameMessageWhenUninspecting }
) {
  if (!gameMessageWhenInspecting || !gameMessageWhenUninspecting) {
    return;
  }
  // ? running message or replacing?
  let message = document.createElement('p');
  message.classList.add('messageEntry');
  if (inspected) {
    message.textContent = gameMessageWhenUninspecting;
  } else {
    message.textContent = gameMessageWhenInspecting;
  }
  game.messageContainer.prepend(message);
}

function generalGameMessage(message) {
  let entry = document.createElement('p');
  entry.classList.add('messageEntry');
  entry.textContent = message;
  game.messageContainer.prepend(entry);
}

//?  ADD TO Inventory directly function?

//@#=============== UTILS FOR DOM ELEMENTS NOT NEEDED BY ROOMS DIRECTLY  =============

//@#=============== EXPORTS  =============

export {
  render,
  hydrateDomElements,
  gatherDomElements,
  chooseViewFxn,
  inspectNoAction,
  inspect,
  switchLights,
  interactLockedItem,
  notALockedItem,
  focusView,
  addtoInventory,
  goToRoom,
  closeZoomView,
};
