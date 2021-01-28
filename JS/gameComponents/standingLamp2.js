export default function standingLamp2(room) {
  // functions here

  function standingLamp2ClassNames() {
    if (room.$standingLamp2.inspected) {
      return `${room.name}_standingLamp2 ${room.name}_standingLamp2-inspected`;
    } else {
      return `${room.name}_standingLamp2`;
    }
  }
  // id = '${room.name}_standingLamp2'
  // class = 'standingLamp2ClassNames()}'
  // class = '${room.name}_standingLamp2'
  // data-selector = 'standingLamp2'
  let html = `
	<svg 
	id = '${room.name}_standingLamp2'
	class = '${standingLamp2ClassNames()}'
	xmlns="http://www.w3.org/2000/svg" 
	width="102.49359" 
	height="319.89716" 
	viewBox="0 0 27.118097 84.639456">
	<g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-82.562987,-25.04785)">
		<g id="$floorLampWhole" transform="translate(-35.767307,1.2173226)">
			<ellipse
				style="opacity:1;fill:#b79e00;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path76451" cx="132.43747" cy="105.45693" rx="8.9022083" ry="3.0130553" />
			<rect
				style="opacity:1;fill:#b79e00;fill-opacity:1;stroke:none;stroke-width:1.44596;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect76455" width="2.7391412" height="61.439213" x="130.80028" y="43.009369" ry="1.2590003" />
			<path
				style="fill:#f2f2f2;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 133.944,38.621889 c 4.54489,-3.368243 10.36034,-3.94127 11.50439,-14.791362 l -27.1175,0.547828 c -0.0677,7.925158 5.64272,11.356205 12.05222,14.243534 z"
				id="path76457" sodipodi:nodetypes="ccccc" />
			<path
				data-selector = 'standingLamp2'
				style="fill:#b79e00;fill-opacity:1;stroke:none;stroke-width:0.263344px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 132.83748,44.45069 c 2.04032,-1.758449 2.54563,-4.729181 3.34146,-7.47047 l -8.84503,0.09703 c 0.7573,2.67849 1.3956,5.39055 3.93113,7.567487 z"
				id="path76459" sodipodi:nodetypes="ccccc" />
			<ellipse
				style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path76461" cx="134.11137" cy="40.292004" rx="0.34351259" ry="0.92950469" />
			<rect
				style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2.5471;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect76463" width="2.3439684" height="0.72743845" x="133.96991" y="39.887878" ry="0.36371922" />
		</g>
	</g>
 </svg>
  `;
  return html;
}
