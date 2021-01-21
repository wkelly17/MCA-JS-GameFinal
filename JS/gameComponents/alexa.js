export default function name(room) {
  // functions here

  function AlexaClassNames() {
    if (room.$alexa.inspected) {
      return `${room.name}_alexa ${room.name}_alexa-inspected`;
    } else {
      return `${room.name}_alexa`;
    }
  }
  // id = '${room.name}thing'
  // class = '${thingClassNames()}
  //   data-selector = THING;
  let html = `
  <svg
  id = '${room.name}_alexa'
  class = '${AlexaClassNames()}'
  data-selector = "alexa"
  xmlns="http://www.w3.org/2000/svg"
  width="45.372496"
  height="22.897635"
  viewBox="0 0 5.9193896 1.560416">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-87.159146,-63.735391)">
	<g
		id="$speaker"
		transform="translate(-36.717907,-14.242674)">
	  <path
		  id="rect8716"
		  style="fill:#1a1a1a;stroke-width:0.189471"
		  d="m 124.31854,77.978065 h 5.03648 c 0.11129,0 0.1734,0.05299 0.20088,0.103017 0.23371,0.425493 0.39745,0.858761 0,1.354383 -0.0357,0.04452 -0.0896,0.103016 -0.20088,0.103016 h -5.03648 c -0.11129,0 -0.16186,-0.06137 -0.20089,-0.103016 -0.42314,-0.451461 -0.19951,-0.902922 0,-1.354383 0.0231,-0.0522 0.0896,-0.103017 0.20089,-0.103017 z"
		  sodipodi:nodetypes="sssssssss" />
	  <path
		  style="fill:none;stroke:#faf205;stroke-width:0.0704629;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 124.13702,78.073158 c 0.0683,0.05217 5.32101,0.104074 5.38645,-0.0047"
		  id="$speakerLight"
		  sodipodi:nodetypes="cc" />
	</g>
 </g>
</svg>
 `;
  return html;
}
