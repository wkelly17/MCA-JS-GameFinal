import bedroom1 from '../rooms/bedroom1.js';
import kitchen from '../rooms/kitchen.js';
import livingRoom from '../rooms/livingRoom.js';
import study from '../rooms/study.js';

export default function navigateRooms(direction) {
  debugger;
  switch (direction) {
    case 'bedroom1':
      return bedroom1;
      break;
    case 'kitchen':
      return kitchen;
      break;
    case 'livingRoom':
      return livingRoom;
      break;
    case 'study':
      return study;
      break;
    default:
      break;
  }
}
