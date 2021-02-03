export default function dresser(room) {
  // functions here

  function NAMEClassNames() {
    if (room.$dresser.inspected) {
      return `${room.name}_dresser ${room.name}_dresser-inspected`;
    } else {
      return `${room.name}_dresser`;
    }
  }
  // id = '${room.name}_dresser'
  // class = '${thingClassNames()}
  // class = '${room.name}_dresser
  // data-selector = 'dresser'
  let html = `
  <svg
  id = '${room.name}_dresser'
  class = '${room.name}_dresser'
  data-selector = "clothesDresser"
  xmlns="http://www.w3.org/2000/svg"
  width="172.45032"
  height="205.39964"
  viewBox="0 0 45.627485 54.345325">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-64.805153,-43.524997)">
	<g
		id="$Closet"
		transform="translate(-0.91308364,1.1739647)">
	  <g
		  id="$dresserWhole"
		  transform="translate(13.647943,-13.295811)">
		 <rect
			 style="fill:#999999;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="$dresserBody"
			 width="45.601025"
			 height="54.318867"
			 x="52.083523"
			 y="55.660072" />
		 <g
			 id="$dresserDrawers">
			<rect
				style="fill:#cccccc;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect9553"
				width="37.478241"
				height="9.7093897"
				x="55.926083"
				y="95.540382" />
			<rect
				style="fill:#cccccc;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect9553-7"
				width="37.478241"
				height="9.7093906"
				x="55.911587"
				y="83.136559" />
			<rect
				style="fill:#cccccc;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect9553-7-9"
				width="37.478241"
				height="9.7093906"
				x="55.722195"
				y="71.407707" />
			<rect
				style="fill:#cccccc;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect9553-7-4"
				width="37.478241"
				height="9.7093906"
				x="55.581406"
				y="59.615643" />
		 </g>
		 <g
			 id="$dresserHandles">
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591"
				sodipodi:type="arc"
				sodipodi:cx="62.279579"
				sodipodi:cy="64.2743"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 63.498574,64.2743 a 1.2189952,1.2189952 0 0 1 -1.215272,1.218989 1.2189952,1.2189952 0 0 1 -1.222695,-1.211543 1.2189952,1.2189952 0 0 1 1.207803,-1.22639 1.2189952,1.2189952 0 0 1 1.230073,1.204051" />
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591-7"
				sodipodi:type="arc"
				sodipodi:cx="85.108032"
				sodipodi:cy="64.385117"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 86.327027,64.385117 a 1.2189952,1.2189952 0 0 1 -1.215272,1.218989 1.2189952,1.2189952 0 0 1 -1.222695,-1.211543 1.2189952,1.2189952 0 0 1 1.207803,-1.22639 1.2189952,1.2189952 0 0 1 1.230073,1.204051" />
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591-1"
				sodipodi:type="arc"
				sodipodi:cx="85.772942"
				sodipodi:cy="76.464249"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 86.991937,76.464249 a 1.2189952,1.2189952 0 0 1 -1.215272,1.218989 1.2189952,1.2189952 0 0 1 -1.222696,-1.211543 1.2189952,1.2189952 0 0 1 1.207803,-1.22639 1.2189952,1.2189952 0 0 1 1.230074,1.204051" />
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591-3"
				sodipodi:type="arc"
				sodipodi:cx="62.057941"
				sodipodi:cy="76.353432"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 63.276937,76.353432 a 1.2189952,1.2189952 0 0 1 -1.215272,1.218989 1.2189952,1.2189952 0 0 1 -1.222696,-1.211543 1.2189952,1.2189952 0 0 1 1.207803,-1.22639 1.2189952,1.2189952 0 0 1 1.230074,1.204051" />
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591-8"
				sodipodi:type="arc"
				sodipodi:cx="62.057941"
				sodipodi:cy="88.100113"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 63.276937,88.100113 a 1.2189952,1.2189952 0 0 1 -1.215272,1.218989 1.2189952,1.2189952 0 0 1 -1.222696,-1.211543 1.2189952,1.2189952 0 0 1 1.207803,-1.22639 1.2189952,1.2189952 0 0 1 1.230074,1.204051" />
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591-5"
				sodipodi:type="arc"
				sodipodi:cx="85.772942"
				sodipodi:cy="88.543381"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 86.991937,88.543381 a 1.2189952,1.2189952 0 0 1 -1.215272,1.218989 1.2189952,1.2189952 0 0 1 -1.222696,-1.211543 1.2189952,1.2189952 0 0 1 1.207803,-1.22639 1.2189952,1.2189952 0 0 1 1.230074,1.204051" />
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591-0"
				sodipodi:type="arc"
				sodipodi:cx="86.548668"
				sodipodi:cy="100.73334"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 87.767663,100.73334 a 1.2189952,1.2189952 0 0 1 -1.215272,1.21899 1.2189952,1.2189952 0 0 1 -1.222696,-1.21155 1.2189952,1.2189952 0 0 1 1.207803,-1.226387 1.2189952,1.2189952 0 0 1 1.230074,1.204047" />
			<path
				style="fill:#ffffff;fill-opacity:1;stroke:#c1ae76;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path9591-4"
				sodipodi:type="arc"
				sodipodi:cx="61.503853"
				sodipodi:cy="101.28742"
				sodipodi:rx="1.2189952"
				sodipodi:ry="1.2189952"
				sodipodi:start="0"
				sodipodi:end="6.270968"
				sodipodi:open="true"
				sodipodi:arc-type="arc"
				d="m 62.722848,101.28742 a 1.2189952,1.2189952 0 0 1 -1.215272,1.21899 1.2189952,1.2189952 0 0 1 -1.222696,-1.21154 1.2189952,1.2189952 0 0 1 1.207803,-1.22639 1.2189952,1.2189952 0 0 1 1.230074,1.20405" />
		 </g>
	  </g>
	</g>
 </g>
</svg>
 `;
  return html;
}
