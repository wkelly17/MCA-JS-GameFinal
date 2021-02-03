export default function roomWindow(room) {
  // functions here

  function NAMEClassNames() {
    if (room.thing.inspected) {
      return `${room.name}_thing ${room.name}_thing-inspected`;
    } else {
      return `${room.name}_thing`;
    }
  }
  function windowBackground() {
    if (room.name == 'study') {
      return './Media/imgs/outDoors.jpg';
    } else {
      return './Media/imgs/outDoors.jpg';
    }
  }

  // id = '${room.name}thing'
  // class = '${thingClassNames()}
  // data-selector = 'THING'
  let html = `
  <svg
  id = '${room.name}_roomWindow'
  class = '${room.name}_roomWindow'
  xmlns="http://www.w3.org/2000/svg"
  width="287.05875"
  height="168.93637"
  viewBox="0 0 75.950962 44.697749">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-57.304868,-39.722727)">
	<g
		id="$window">
	  <rect
		  style="fill:#e6e6e6;fill-opacity:1;stroke:#ac9d93;stroke-width:0.0286372;stroke-miterlimit:4;stroke-dasharray:none"
		  id="rect8583"
		  width="53.707226"
		  height="41.921219"
		  x="68.15271"
		  y="39.737045"
		  ry="0.15151413" />
	  <g
		  id="g8581"
		  style="fill:#f2f2f2"
		  transform="matrix(0.04353758,0,0,0.04353758,90.433936,58.020445)">
		 <rect
			 style="fill:#f2f2f2;fill-opacity:1;stroke:#ac9d93;stroke-width:0.0208447;stroke-miterlimit:4;stroke-dasharray:none"
			 id="rect8513"
			 width="47.788406"
			 height="34.556023"
			 x="48.2099"
			 y="34.059067"
			 ry="0.14119136" />
			 
		 <rect
			 style="fill:#999999;fill-opacity:1;stroke:#ac9d93;stroke-width:0.0154606;stroke-miterlimit:4;stroke-dasharray:none"
			 id="rect8515"
			 width="1.2919899"
			 height="34.227097"
			 x="70.957962"
			 y="34.124489"
			 ry="0.13804267" />
		 <rect
			 style="fill:#b3b3b3;fill-opacity:1;stroke:#ac9d93;stroke-width:0.0159098;stroke-miterlimit:4;stroke-dasharray:none"
			 id="rect8515-2"
			 width="0.98838258"
			 height="47.378723"
			 x="-53.028507"
			 y="48.539639"
			 ry="0.19108504"
			 transform="matrix(0.00631828,-0.99998004,0.99997866,0.0065325,0,0)" />
	  </g>
	  <path
		  id="$windowSill"
		  style="fill:#e6e6e6;fill-opacity:1;stroke:#ac9d93;stroke-width:0.0294917;stroke-miterlimit:4;stroke-dasharray:none"
		  d="m 57.330821,79.602662 75.898149,-0.102026 -3.11609,4.905093 H 60.197628 Z"
		  sodipodi:nodetypes="ccccc" />
	  
	  <rect
		  style="fill:#999999;fill-opacity:1;stroke:#ac9d93;stroke-width:0.0304202;stroke-miterlimit:4;stroke-dasharray:none"
		  id="$windowCrossbar"
		  width="1.0141153"
		  height="46.075737"
		  x="-62.256123"
		  y="71.435448"
		  ry="0.20088369"
		  transform="matrix(-0.01174767,-0.99993099,0.99997793,-0.00664304,0,0)" />
	</g>
 </g>
</svg>
<img class = '${
    room.name
  }_windowImage' src = '${windowBackground()}' alt = "outdoor Scenery" />
<div class = "${room.name}_windowCrossBar"> </div>
<div class = "${room.name}_windowVertBar"> </div>
 `;
  return html;
}
