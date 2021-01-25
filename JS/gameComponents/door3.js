export default function door3(room) {
  // functions here

  function door3ClassNames() {
    if (room.$door3 && room.$door3.open) {
      return `${room.name}_door3 doorOpen`;
    } else {
      return `${room.name}_door3`;
    }
  }
  // id = '${room.name}_door'
  // class = '${doorClassNames()}'
  // class = '${room.name}_door'
  // data-selector = 'door'
  let html = `
  <svg
  id = '${room.name}_door3'
  class = '${room.name}_door3'
  data-selector = 'door3'
  xmlns="http://www.w3.org/2000/svg"
  width="138.36726"
  height="222.61232"
  viewBox="0 0 36.609673 58.89951">
 <g
	 id="g79368">
	<g
		id="layer1"
		transform="translate(-104.24003,-73.771042)">
	  <g
		  id="DoorTotal"
		  transform="translate(-27.322637,24.75761)">
		 <rect
			 style="fill:#000000;stroke-width:0.254519"
			 id="doorBackground"
			 width="36.569317"
			 height="58.89085"
			 x="131.82295"
			 y="48.802158"
			 ry="0" />
		 <g
			 id="Door"
			 transform="translate(40.121847,-0.59883354)">
			<rect
				style="fill:#552200;stroke-width:0.254519"
				id="rect28"
				width="36.569317"
				height="58.89085"
				x="91.660751"
				y="49.39233"
				ry="0" />
			<ellipse
				style="fill:#d4aa00;stroke-width:0.120996"
				id="path30"
				cx="123.27248"
				cy="81.18309"
				rx="1.5826097"
				ry="1.7408705" />
			<ellipse
				style="fill:#d4aa00;stroke:#000000;stroke-width:0.0937491"
				id="path30-8"
				cx="123.25031"
				cy="81.182152"
				rx="1.2262247"
				ry="1.3488472" />
			<path
				id="rect47"
				style="fill:#4d4d4d;stroke:#4d4d4d;stroke-width:0.131916"
				d="m 123.1358,80.875703 c 0.0971,-0.133808 0.11364,-0.122169 0.21388,0.0067 -0.0609,0.214814 -0.0154,0.456313 0.0165,0.65571 -0.0768,0.140308 -0.15364,0.09543 -0.23045,0.01345 0.0864,-0.227555 0.0679,-0.448371 0,-0.675926 z" />
		 </g>
	  </g>
	</g>
	<ellipse
		style="fill:#ffd42a;fill-opacity:1;stroke:#d4aa00;stroke-width:0.529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path79357"
		cx="31.751751"
		cy="27.358061"
		rx="1.3669266"
		ry="1.3864541" />
 </g>
</svg>
<div class = '${room.name}_doorBackground3 doorBackground'> </div>
 `;
  return html;
}
