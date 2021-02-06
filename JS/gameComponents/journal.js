export default function journal(room) {
  // functions here
  // class = 'journalClassNames()}'
  // data-selector = 'journal'
  let html = `
<div class="book" data-selector = 'readableJournal' >
<div class="modal-blur"></div>
      <div class="page journalCover page-active" style = "font-size: 44px; text-align: center; color: white;">Musings</div>
      <div class="page blank"></div>
      <div class="page">
          <span class="hiddenLetter">G</span>ood things come those who wait... At least that it what they say.  I for one, have neve<span
            class="hiddenLetter"
            >r</span> enjoyed waiting...Perh<span
            class="hiddenLetter"
            >a</span>ps that is what led me to my life of dark<span
            class="hiddenLetter"
            >n</span>ess and crime.
      </div>
      <div class="page"> I never asked for these car<span
      class="hiddenLetter"
      >d</span>s I was dealt.  <span
      class="hiddenLetter"
      >C</span>ould <span
      class="hiddenLetter"
      >a</span>nyone really blame me after all? Abandoned at a young age... Left to fend for my self on the street...
      </div>
      <div class="page"> 
      <span
      class="hiddenLetter"
      >N</span>ow there is no going back.   I'm in too deep and my h<span
      class="hiddenLetter"
      >a</span>nds are too dirty. But I try.. I try to simply live <span
      class="hiddenLetter"
      >l</span>ife and enjoy.  Unfortunately my my tastes are too expensive now.  Is there any hope?
      </div>
		<div class="page journalBack"></div>
		<button class = 'closeZoomButton' data-selector = "closeZoomButton"> X </button>
	 </div>
	
 `;
  return html;
}
