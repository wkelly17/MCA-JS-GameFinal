export default function keypad(room) {
  // functions here

  function getKeypadClassNames() {
    if (room.$keypad?.inspected && room.modalBlur) {
      return `${room.name}_keypadZoomed`;
    } else {
      return 'dNone';
    }
  }
  function displayNames() {
    if (room.$keypad?.solved) {
      return `${room.name}_display correct`;
    } else if (
      room.$kitchenKeypadCardSlot?.open &&
      room.$trippedBreaker.inspected
    ) {
      return `${room.name}_displayActivated ${room.name}_display`;
    } else {
      return `${room.name}_display`;
    }
  }
  //   open means more solved here
  function cardSlotClasses() {
    if (room.$kitchenKeypadCardSlot?.open) {
      return `${room.name}_cardSlotFilled`;
    } else {
      return '';
    }
  }

  // class = 'keypadClassNames()}'
  // data-selector = 'keypad'
  let html = `
	<div id="Zoomedkeypad" class = ${getKeypadClassNames()}>
	<p class='${displayNames()}'></p>
	<div class="${room.name} keypad-controls">
	  <div class="${room.name} keypad-buttons">
		 <button data-selector = 'kitchenKeypadBtn' value = '1'
		 class="${room.name} keypadButton"> 1 <br> ABC </button>
	  
		 <button value = '2' data-selector = 'kitchenKeypadBtn'
		 class="${room.name} keypadButton">2 <br> DEF </button>
		 
	  <button value = '3' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton">3 <br> GHI </button>
		
	  <button  value = '4' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton">4 <br> JKL </button>
		 
	  <button value = '5' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton">5 <br> MNO </button>
		 
	  <button value = '6' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton">6 <br> PQR </button>
	  
		 <button value = '7' data-selector = 'kitchenKeypadBtn' class="${
       room.name
     } keypadButton">7 <br> STU </button>
		 
	  <button value = '8' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton">8 <br> VWX </button>
		 
	  <button value = '9' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton">9 <br> YZ </button>
		 
	  <button value = '0' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton"> 0 </button>
	  
	  <button data-fxn = 'submit' data-selector = 'kitchenKeypadBtn' class="${
      room.name
    } keypadButton">Sub</button>

	 <button data-selector = 'kitchenKeypadBtn' data-fxn = 'delete'
	 class="${room.name} keypadButton"> Del </button>
    
		 </div>
		 <div class="card-slot" data-selector = 'kitchenKeypadCardSlot'></div>
		 <button data-selector = 'kitchenKeypadBtn' data-fxn ='close'>X</button>
		 <div class = '${cardSlotClasses()}'> </div>
	</div>
 </div>
  `;
  return html;
}
