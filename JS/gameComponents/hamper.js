export default function hamper(room) {
  // functions here

  //   function hamperClassNames() {
  //     if (room.thing.inspected) {
  //       return `${room.name}_hamper ${room.name}_hamper-inspected`;
  //     } else {
  //       return `${room.name}_hamper`;
  //     }
  //   }
  // id = '${room.name}thing'
  // class = '${thingClassNames()}
  // data-selector = 'THING'
  let html = `
  <svg
  id = '${room.name}_hamper'
  class = '${room.name}_hamper'
  data-selector = "hamper"
  xmlns="http://www.w3.org/2000/svg"
  width="82.355095"
  height="120.90647"
  viewBox="0 0 21.789788 31.989839"
  version="1.1">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-82.923036,-55.044797)">
	<g
		id="$hamper"
		transform="translate(-0.91308364,1.1739647)">
	  <g
		  id="g9470"
		  transform="translate(27.779984,-24.055968)">
		 <path
			 id="rect9448"
			 style="fill:#6c5301;fill-opacity:1;stroke:#800080;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none"
			 d="m 56.090065,79.271194 c 1.842955,1.661892 19.050911,1.140676 21.732311,0 V 109.90341 H 56.090065 Z"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:none;stroke:#c1ae76;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 56.090065,79.271195 c 7.073475,-1.876923 14.367095,-1.332241 21.732312,0"
			 id="path9451"
			 sodipodi:nodetypes="cc" />
		 <path
			 style="mix-blend-mode:normal;fill:#000080;stroke:none;stroke-width:0.280055px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 57.37065,79.810681 -0.396081,2.420495 1.548315,0.322732 0.360074,-2.420493 c 1.536314,0.690424 3.072628,0.366219 4.608942,0.4841 l 0.144028,-2.420496 c -2.014896,0.133815 -3.994939,0.163073 -6.193263,0.847174 z"
			 id="path9455"
			 sodipodi:nodetypes="cccccccc" />
		 <path
			 style="fill:#cccccc;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 63.44495,80.54844 5.761175,-0.25205 0.28806,-2.052421 h -5.8692 z"
			 id="path9457" />
		 <path
			 style="fill:#008000;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 69.458178,78.243969 c 2.664543,0.175304 5.329086,0.622828 7.993629,1.08022 -0.787818,0.38659 -2.324485,0.679315 -8.245682,0.972201 z"
			 id="path9459"
			 sodipodi:nodetypes="cccc" />
	  </g>
	</g>
 </g>
</svg>
 `;
  return html;
}
