export default function gameShelf(room) {
  // functions here

  function gameShelfClassNames() {
    if (room.$gameShelf.inspected) {
      return `${room.name}_gameShelf ${room.name}gameShelf-inspected`;
    } else {
      return `${room.name}_gameShelf`;
    }
  }
  // id = '${room.name}_gameShelf'
  // class = 'gameShelfClassNames()}'
  // class = '${room.name}_gameShelf'
  // data-selector = 'gameShelf'
  let html = `
  <svg
  id = '${room.name}_gameShelf'
  class = '${room.name}_gameShelf'
  xmlns="http://www.w3.org/2000/svg"
  width="236.78249"
  height="273.53934"
  viewBox="0 0 62.648702 72.373944"
  >
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-104.73689,-47.565205)">
	<g
		id="coffeeTable"
		transform="translate(-69.76285,-156.71072)"
		data-selector="coffeeTable">
	  <text
		  xml:space="preserve"
		  style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		  x="195.30725"
		  y="205.40677"
		  id="text2133"><tspan
			 sodipodi:role="line"
			 id="tspan2131"
			 x="195.30725"
			 y="205.40677"
			 style="stroke-width:0.264583" /></text>
	  <g
		  id="g2371"
		  transform="translate(-41.841186,8.5944063)">
		 <rect
			 style="fill:#552200;stroke-width:0.307327"
			 id="rect1250"
			 width="62.648697"
			 height="72.373947"
			 x="216.34093"
			 y="195.68152"
			 ry="2.9401915" />
		 <rect
			 style="fill:#290a0a;fill-opacity:1;stroke-width:0.318249"
			 id="rect1252"
			 width="58.577663"
			 height="15.379463"
			 x="218.15028"
			 y="203.37126"
			 ry="0" />
		 <rect
			 style="fill:#290a0a;fill-opacity:1;stroke-width:0.318249"
			 id="rect1252-9"
			 width="58.57766"
			 height="15.379463"
			 x="218.26335"
			 y="224.85727"
			 ry="0" />
		 <rect
			 style="fill:#290a0a;fill-opacity:1;stroke-width:0.318249"
			 id="rect1252-90"
			 width="58.57766"
			 height="15.379463"
			 x="218.26335"
			 y="247.70029"
			 ry="0" />
		 <g
			 id="g2138"
			 transform="translate(50.435608,39.353348)">
			<rect
				style="fill:#00004c;fill-opacity:1;stroke-width:0.301976"
				id="rect2125"
				width="35.282299"
				height="7.4635634"
				x="167.71468"
				y="171.93382" />
			<text
				xml:space="preserve"
				style="font-style:normal;font-weight:normal;font-size:6.74807px;line-height:1.25;font-family:sans-serif;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.168702"
				x="167.43845"
				y="178.8264"
				id="text2129"
				transform="scale(1.0063971,0.99364354)"><tspan
				  sodipodi:role="line"
				  id="tspan2127"
				  x="167.43845"
				  y="178.8264"
				  style="fill:#ffffff;stroke-width:0.168702">pictionary</tspan></text>
		 </g>
		 <g
			 id="g2329"
			 transform="translate(-13.230881,77.349625)">
			<rect
				style="fill:#107300;fill-opacity:1;stroke-width:0.277778"
				id="rect2125-8"
				width="29.854252"
				height="7.4635634"
				x="231.49423"
				y="178.26656" />
			<text
				xml:space="preserve"
				style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8.72844px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:0.218211"
				x="178.96994"
				y="240.13948"
				id="text2129-4"
				transform="scale(1.301747,0.76819844)"><tspan
				  sodipodi:role="line"
				  id="tspan2301"
				  x="178.96994"
				  y="240.13948"
				  style="fill:#f9f9f9;stroke-width:0.218211">Life</tspan></text>
		 </g>
		 <g
			 id="g2334"
			 transform="translate(54.96283,76.558045)">
			<rect
				style="fill:#000080;fill-opacity:1;stroke-width:0.187388"
				id="rect2125-8-9"
				width="14.697094"
				height="6.8993807"
				x="192.25397"
				y="179.05814" />
			<text
				xml:space="preserve"
				style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.74807px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:0.168702"
				x="191.10062"
				y="186.29919"
				id="text2129-4-4"
				transform="scale(1.0063971,0.99364356)"><tspan
				  sodipodi:role="line"
				  id="tspan2249"
				  x="191.10062"
				  y="186.29919">Uno</tspan></text>
		 </g>
		 <g
			 id="g2339"
			 transform="translate(49.870163,58.351487)">
			<rect
				style="fill:#d45500;fill-opacity:1;stroke-width:0.355658"
				id="rect2125-8-3"
				width="43.650536"
				height="8.3682375"
				x="168.39319"
				y="188.89645" />
			<text
				xml:space="preserve"
				style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.60367px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.140092"
				x="201.59868"
				y="162.8839"
				id="text2129-4-4-3"
				transform="scale(0.83572232,1.1965697)"><tspan
				  sodipodi:role="line"
				  id="tspan2299"
				  x="201.59868"
				  y="162.8839"
				  style="fill:#cccccc;stroke-width:0.140092">Oranges to Apples</tspan></text>
		 </g>
		 <g
			 id="g2169-7"
			 transform="translate(63.440271,54.280453)">
			<rect
				style="fill:#107300;fill-opacity:1;stroke-width:0.301976"
				id="rect2125-8-53"
				width="35.282299"
				height="7.4635634"
				x="167.71468"
				y="171.93382" />
			<text
				xml:space="preserve"
				style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.74807px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.168702"
				x="167.43845"
				y="178.8264"
				id="text2129-4-9"
				transform="scale(1.0063971,0.99364354)"><tspan
				  sodipodi:role="line"
				  id="tspan2164-0"
				  x="167.43845"
				  y="178.8264">Monopoly</tspan></text>
		 </g>
		 <g
			 id="g2138-3-5"
			 transform="translate(-31.437443,-29.175755)">
			<g
				id="g2169-8"
				transform="translate(55.185146,37.883249)">
			  <g
				  id="g2203"
				  transform="matrix(1,0,0,0.81818183,39.692568,84.297214)">
				 <rect
					 style="fill:#5f5f00;fill-opacity:1;stroke-width:0.301976"
					 id="rect2125-8-5"
					 width="35.282299"
					 height="7.4635634"
					 x="167.71468"
					 y="171.93382" />
				 <text
					 xml:space="preserve"
					 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.74807px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.168702"
					 x="167.43845"
					 y="179.05402"
					 id="text2129-4-6"
					 transform="scale(1.0063971,0.99364355)"><tspan
						sodipodi:role="line"
						id="tspan2198"
						x="167.43845"
						y="179.05402">RumiKub</tspan></text>
			  </g>
			</g>
		 </g>
	  </g>
	</g>
 </g>
</svg>
 `;
  return html;
}
