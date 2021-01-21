export default function ceilingVent(room) {
  // functions here

  function ceilingVentClassNames() {
    if (room.$ceilingVent.inspected) {
      return `${room.name}_ceilingVent ${room.name}ceilingVent-inspected`;
    } else {
      return `${room.name}_ceilingVent`;
    }
  }
  // id = '${room.name}_ceilingVent'
  // class = '${thingClassNames()}
  // class = '${room.name}_ceilingVent
  // data-selector = 'ceilingVent'
  let html = `
  <svg 
  id = '${room.name}_ceilingVent'
  class = '${room.name}_ceilingVent'
  xmlns="http://www.w3.org/2000/svg" 
  width="169.89125" 
  height="82.774994"
  viewBox="0 0 44.950398 21.900884"
  >
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-57.024544,-52.989393)">
	  <g id="$ceilingVent" transform="translate(-57.721614,37.963954)">
		  <rect
			  style="fill:#cccccc;fill-opacity:1;stroke:#000000;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect10048" width="44.70586" height="21.874426" x="114.97746" y="15.038669" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 119.35719,18.043423 0.0788,16.818949 1.09372,-0.957006 V 18.977435 Z" id="path10050"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 121.84227,17.832559 0.0788,16.818949 1.09372,-0.957006 V 18.766571 Z" id="path10050-9"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 124.32734,17.973135 0.0788,16.818949 1.09372,-0.957006 V 18.907147 Z" id="path10050-5"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 126.81242,17.902847 0.0788,16.818949 1.09372,-0.957006 V 18.836859 Z" id="path10050-97"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 149.3754,17.623447 0.0788,16.818949 1.09372,-0.957006 V 18.557459 Z" id="path10050-08"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 152.01722,17.520534 0.0788,16.818949 1.09372,-0.957006 V 18.454546 Z" id="path10050-87"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 154.64301,17.417101 0.0788,16.818949 1.09372,-0.957006 V 18.351113 Z" id="path10050-4"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 157.30084,17.72636 0.0788,16.81895 1.09372,-0.957006 V 18.660372 Z" id="path10050-2"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 146.52198,30.056956 -16.81894,0.0788 0.957,1.093719 h 14.92793 z" id="path10050-97-3"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 146.52198,27.080394 -16.81894,0.0788 0.957,1.093719 h 14.92793 z" id="path10050-97-3-0"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 146.52198,24.103833 -16.81894,0.0788 0.957,1.093719 h 14.92793 z" id="path10050-97-3-07"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 145.99281,21.127267 -16.81894,0.0788 0.957,1.093719 h 14.92793 z" id="path10050-97-3-8"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 145.99281,18.150706 -16.81894,0.0788 0.957,1.093719 h 14.92793 z" id="path10050-97-3-87"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 147.03965,33.223315 -16.81894,0.0788 0.957,1.093719 h 14.92793 z" id="path10050-97-3-7"
			  sodipodi:nodetypes="ccccc" />
		  <rect
			  style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.00396875;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect10192" width="1.3229166" height="15.875" x="116.41667" y="18.520834" ry="0.88194448" />
		  <path
			  style="fill:#333333;fill-opacity:1;stroke:#333333;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 117.63762,31.748125 -2.68953,2.689527 0.23387,-1.344764 z" id="path10196" />
	  </g>
  </g>
</svg>
 `;
  return html;
}
