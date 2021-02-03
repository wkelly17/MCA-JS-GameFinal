export default function safeKeypadZoom(room) {
  // functions here

  function safeKeypadZoomClassNames() {
    if (room.$safeKeypad.inspected && room.modalBlur) {
      return `${room.name}_safeKeypadZoom ${room.name} dVisible`;
    } else {
      return `${room.name}_safeKeypadZoom dNone `;
    }
  }
  // class = 'safeKeypadZoomClassNames()}'
  // data-selector = 'safeKeypadZoom'
  let html = `
  <div class="${safeKeypadZoomClassNames()}" data-selector = 'safeKeypadZoom'>
  <p class="safeKeypad-display"></p>
  <div class="safeKeypad-buttonsContainer">
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">Q</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">W</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">E</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">R</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">T</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">Y</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">U</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">I</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">O</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">P</button>
    <div class="w100"></div>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">A</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">S</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">D</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">F</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">G</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">H</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">J</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">K</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">L</button>
    <div class="w100"></div>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">Z</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">X</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">C</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">V</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">B</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">N</button>
    <button data-selector = "safeKeypadBtn" class="safeKeypad-button">M</button>
  </div>
  <button data-selector = "safeKeypadBtn" class="submitEntry" data-fxn = "submit" >Submit</button>
  <button data-selector = "safeKeypadBtn" class = 'closeSafeKeypadBtn' data-fxn = "close"> X </button>
</div>
 `;
  return html;
}
