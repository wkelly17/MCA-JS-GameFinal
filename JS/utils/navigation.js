export default function navigate(event, currentRoom) {
  console.log(event);

  let roomContainer = document.querySelector('#RoomContainer');
  let navArrows = [...document.querySelectorAll('[data-role = "nav-arrow"]')];

  if (!navArrows) {
    return; //navArrows are toggled off for zoomed in views;  This will leave the key event listener intact while bailing early instead of removing and re-adding event listener;
  }

  let direction;
  if (event.type == 'click') {
    direction = event.target.dataset.direction;
  } else {
    direction = event.key;
  }

  let leftArrow = navArrows[0];
  let rightArrow = navArrows[1];
  let upArrow = navArrows[2];
  let downArrow = navArrows[3];

  switch (direction) {
    case 'right':
      goRight();
      break;
    case 'ArrowRight':
      if (rightArrow.classList.contains('dNone')) {
        break;
      }
      goRight();
      break;
    case 'left':
      goLeft();
      break;
    case 'ArrowLeft':
      if (leftArrow.classList.contains('dNone')) {
        break;
      }
      goLeft();
      break;
    case 'up':
      lookUp();
      break;
    case 'ArrowUp':
      if (upArrow.classList.contains('dNone')) {
        break;
      }
      lookUp();
      break;
    case 'down':
      lookDown();
      break;
    case 'ArrowDown':
      if (!downArrow.classList.contains('displayed')) {
        break;
      }
      lookDown();
      break;
    default:
      break;
  }

  function goRight() {
    console.log('goingRight');
    switch (currentRoom.directionFacing) {
      case 'front':
        currentRoom.directionFacing = 'right';
        break;
      case 'right':
        currentRoom.directionFacing = 'back';
        break;
      case 'back':
        currentRoom.directionFacing = 'left';
        break;
      case 'left':
        currentRoom.directionFacing = 'front';
        break;
      default:
        break;
    }
    currentRoom.render(roomContainer, currentRoom);
  }

  function goLeft() {
    switch (currentRoom.directionFacing) {
      case 'front':
        currentRoom.directionFacing = 'left';
        break;
      case 'left':
        currentRoom.directionFacing = 'back';
        break;
      case 'back':
        currentRoom.directionFacing = 'right';
        break;
      case 'right':
        currentRoom.directionFacing = 'front';
        break;
      default:
        break;
    }
    currentRoom.render(roomContainer, currentRoom);
  }

  function lookUp() {
    currentRoom.returnFromCeiling = currentRoom.directionFacing;
    currentRoom.directionFacing = 'up';
    currentRoom.render(roomContainer, currentRoom);
    toggleArrows();
  }

  function lookDown() {
    currentRoom.directionFacing = currentRoom.returnFromCeiling;
    currentRoom.render(roomContainer, currentRoom);
    toggleArrows();
  }

  function toggleArrows() {
    leftArrow.classList.toggle('dNone');
    rightArrow.classList.toggle('dNone');
    upArrow.classList.toggle('dNone');
    downArrow.classList.toggle('displayed');
  }
}
