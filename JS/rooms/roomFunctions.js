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
  // for (let i = 0; i < room.DOM_Elements.length; i++) {
  //   const object = room.DOM_Elements[i];
  //   if (object.found) {
  //     // !important to break out of loop since the room object NODES are moving to the invenotry and being re-assigned as an inventory node.  Otherwise on re-renders the node would drop it's handleInventory click function;
  //     return;
  //   } else {
  //     object.nodes = roomContainer.querySelectorAll(object.selector);
  //     object.nodes.forEach((node) => {
  //       node.addEventListener(object.listenerType, (event) => {
  //         object.fxn(event, object, room);
  //       });
  //     });
  //   }
  // }
}

// optional abstraction for room DOM item functions... I think would work well for booleans;

function gatherDomElements(room) {
  let keys = Object.keys(room).filter((key) => key.startsWith('$'));
  let domElements = [];
  keys.forEach((key) => domElements.push(room[key]));
  let filteredItems = domElements.filter((item) => !item.found);
  return filteredItems;
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
  } else if (!room.lightsAreOn) {
    roomContainer.classList.add('lightsOff');
  }
}

//@%=============== RENDER UTILS  =============

//@# ===============  ROOM ELEMENT SHARED FUNCTIONS =============

function inspectNoAction(event, { gameMessage, randomMessages }) {
  if (notALockedItem()) {
    return;
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  if (randomMessages) {
    let random = getRandomInt(randomMessages.length);
    return generalGameMessage(randomMessages[random]);
  } else {
    return generalGameMessage(gameMessage);
  }
}

function inspect(event, { name, inspected, specificView, ...rest }, room) {
  // clearing inventory item in use if trying to use an inv item
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
  { name, open, lockedMessage, solvingMessage, affectedNodes, ...rest },
  room
) {
  if (open) {
    inspect(
      event,
      { name, open, affectedNodes, lockedMessage, solvingMessage, ...rest },
      room
    );
  }
  if (game.inventory.itemInUse) {
    let selectedItem = game.inventory.itemInUse;
    if (selectedItem.solves == name) {
      //setting room dom object state;
      room[name].open = true;

      //styling Inventory Item;  Plural due to some objects having multiple nodes
      selectedItem.nodes.forEach((node) => {
        node.classList.add('inventoryItemUsed');
        node.classList.remove('inventoryGlow');
        node.removeEventListener('click', game.inventory.handleInventoryClick);
      });

      //setting message
      generalGameMessage(solvingMessage);

      //styling affectedNodes;
      if (affectedNodes) {
        affectedNodes.forEach((affectedNode) => {
          let DomSubnode = document.querySelector(affectedNode.selector);
          DomSubnode.classList.add(affectedNode.class);
        });
      }
      // option re-render to reflect updated state or proceed by setting the new open = !open.... and continue through the function;
      if (rest.triggersReRender) {
        room.render(game.roomContainer, room);
      }
      return;
    }
  }
  // return if you want person to click adn then click again;  Keep like so if you want to trigger something else; (preferred;) But open is passed in an not reflecting updated object state;
  else {
    if (lockedMessage && !open) {
      generalGameMessage(lockedMessage);
    }
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

  // no arrows in focus for navigating
  toggleArrows();

  //  A zoomed Modal will render due to inspected state having changed;
  render(game.roomContainer, room);
}

function addtoInventory(event, { name, ...rest }, room) {
  // rest use since only one Object has that prop instead of destructuring
  if (rest.bypassLockedItemChecker && rest.bypassLockedItemChecker == false) {
    return notALockedItem();
  }
  room[name].found = !room[name].found;
  room.render(game.roomContainer, room);
  //   render to remove
  game.inventory.items.push(room[name]);
  game.inventory.render(room[name]);
}

function goToRoom(
  event,
  {
    open,
    directionLeadsTo,
    roomLeadsTo,
    gameMessage,
    lockedMessage,
    solvedMessage,
    ...rest
  },
  room
) {
  if (!open && game.inventory.itemInUse) {
    interactLockedItem(event, { open, ...rest }, room);
    return; // try to open door
  } else if (!open) {
    generalGameMessage(lockedMessage);
  } else {
    generalGameMessage(solvedMessage);
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
  // only one of these in game at moment
  room[objectToChange][property] = !room[objectToChange][property];
  // closing specific zoomed view
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
  { gameMessageWhenInspecting, gameMessageWhenUninspecting, solvedMessage }
) {
  if (
    (!gameMessageWhenInspecting || !gameMessageWhenUninspecting) &&
    !solvedMessage
  ) {
    return;
  }
  // ? running message or replacing?
  let message = document.createElement('p');
  message.classList.add('messageEntry');
  if (solvedMessage) {
    message.textContent = solvedMessage;
    return game.messageContainer.prepend(message);
  } else if (inspected) {
    message.textContent = gameMessageWhenUninspecting;
  } else {
    message.textContent = gameMessageWhenInspecting;
  }
  return game.messageContainer.prepend(message);
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
  generalGameMessage,
};
