export default function journal(room) {
  // functions here

  function journalClassNames() {
    if (room.$journal.inspected) {
      return `${room.name}_journal 
${room.name}_journal-inspected`;
    } else {
      return `${room.name}_journal`;
    }
  }
  // class = 'journalClassNames()}'
  // data-selector = 'journal'
  let html = `
  
<div class="book" data-selector = 'readableJournal' >
<div class="modal-blur"></div>
      <div class="page journalCover page-active">I'm the front of the book</div>
      <div class="page blank">Blank white page</div>
      <div class="page">
        <span class="hidden">
          Lo<span class="hiddenLetter">r</span>em ipsum dol<span
            class="hiddenLetter"
            >o</span
          >r sit amet conse<span class="hiddenLetter">c</span>tetur adipisicing
          elit. Place<span class="hiddenLetter">a</span>t, quidem.
        </span>
      </div>
      <div class="page">2</div>
		<div class="page journalBack"></div>
		<button class = 'closeZoomButton' data-selector = "closeZoomButton"> X </button>
	 </div>
	
 `;
  return html;
}
