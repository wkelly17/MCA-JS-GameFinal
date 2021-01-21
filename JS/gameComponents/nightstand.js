export default function nightStand(room) {
  // functions here

  function nightStandClassNames() {
    if (room.$nightStand.inspected) {
      return `${room.name}_nightStand ${room.name}_nightStand-inspected`;
    } else {
      return `${room.name}_nightStand`;
    }
  }
  // id = '${room.name}thing'
  // class = '${thingClassNames()}
  // data-selector = 'THING'
  let html = `
  <svg 
  id = '${room.name}thing'
  class = ${room.name}_nightStand
  xmlns="http://www.w3.org/2000/svg"
  width="118.02872"
  height="148.22025"
  viewBox="0 0 31.228433 39.216607">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-146.87757,-87.078223)">
	<g
		id="nightstand!"
		transform="translate(8.9880275,15.797812)">
	  <rect
		  style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:1.77833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect79388"
		  width="27.242851"
		  height="38.154076"
		  x="140.13089"
		  y="72.342941" />
	  <rect
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:1.17664;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect79388-8"
		  width="23.562754"
		  height="19.311974"
		  x="141.8259"
		  y="89.117844" />
	  <g
		  id="nightStandDrawer!"
		  data-selector = 'nightStandDrawer'>
		 <rect
			 style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.561485;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="nightStandDrawerWhole!"
			 width="21.207491"
			 height="4.8859892"
			 x="143.07715"
			 y="74.839066" />
		 <ellipse
			 style="opacity:1;fill:#ffff00;fill-opacity:1;stroke:none;stroke-width:0.622805;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="nightStandHandle!"
			 cx="153.9753"
			 cy="77.215027"
			 rx="0.89508349"
			 ry="0.90823132" />
	  </g>
	  <rect
		  style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:1.27;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect79422"
		  width="31.228432"
		  height="1.6436018"
		  x="137.88954"
		  y="71.280411" />
	</g>
 </g>
</svg>
 `;
  return html;
}
