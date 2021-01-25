export default function television(room) {
  // functions here

  function televisionClassNames() {
    if (room.thing.inspected) {
      return `${room.name}_television ${room.name}_television-inspected`;
    } else {
      return `${room.name}_television`;
    }
  }
  // id = '${room.name}_television'
  // class = '${thingClassNames()}
  // class = '${room.name}_television
  // data-selector = 'television'
  let html = `
  <svg
  id = '${room.name}_television'
  class = '${room.name}_television'
  data-selector = 'television'
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 22.068774 11.805798">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-72.442631,-59.365783)">
	<g
		id="$tvWhole"
		transform="translate(7.4139058,15.123073)">
	  <rect
		  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect9885"
		  width="22.042315"
		  height="10.107486"
		  x="65.041954"
		  y="44.255939" />
	  <rect
		  style="fill:#333333;fill-opacity:1;stroke:#000000;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect9887"
		  width="19.758135"
		  height="7.823308"
		  x="66.069832"
		  y="45.127735" />
	  <path
		  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 67.040611,53.107128 0.856567,0.342628 -1.256297,2.398384 -1.256297,0.0571 z"
		  id="path9893" />
	  <path
		  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.25445px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 84.835988,53.082408 -0.788242,0.344355 1.156086,2.410476 1.156086,0.05739 z"
		  id="path9893-2" />
	  <path
		  style="fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.0132641;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path9912"
		  sodipodi:type="arc"
		  sodipodi:cx="86.538795"
		  sodipodi:cy="54.032337"
		  sodipodi:rx="0.16470993"
		  sodipodi:ry="0.13710517"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 86.703505,54.032337 a 0.16470993,0.13710517 0 0 1 -0.164206,0.137105 0.16470993,0.13710517 0 0 1 -0.16521,-0.136267 0.16470993,0.13710517 0 0 1 0.163197,-0.137937 0.16470993,0.13710517 0 0 1 0.166207,0.135424" />
	</g>
 </g>
</svg>
 `;
  return html;
}
