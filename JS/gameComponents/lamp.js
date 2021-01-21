export default function lamp(room) {
  // TOC OF INTERACTIVES
  // $wholeLamp
  // $lampBody

  // functions here
  function lampClassNames() {
    if (room.$lamp.inspected) {
      return `${room.name}_lamp lamp-inspected`;
    } else {
      return `${room.name}_lamp`;
    }
  }
  let html = `
  <svg
  id = "${room.name}_lamp"
  class = "${lampClassNames()}"
  data-selector = "lamp1"
  xmlns="http://www.w3.org/2000/svg"
  width="68.715302"
  height="108.34307"
  viewBox="0 0 18.180924 28.665771">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-48.399079,-38.590276)">
	<g
		id="$wholeLamp"
		transform="matrix(0.69505255,0,0,0.69505255,-6.2402282,4.6405851)">
	  <path
		  id="$lampBody"
		  style="fill:#6c5d53;fill-opacity:1;stroke:none;stroke-width:1.40847"
		  d="m 87.525455,66.038887 h 8.481622 c 1.996315,8.016164 2.274264,16.032329 0,24.048493 h -8.481622 c -2.425572,-8.016164 -1.60822,-16.032329 0,-24.048493 z"
		  sodipodi:nodetypes="ccccc" />
	  <rect
		  style="fill:#6c5d53;fill-opacity:1;stroke:none;stroke-width:2.32833"
		  id="rect7289"
		  width="2.5871949"
		  height="4.9020538"
		  x="90.687988"
		  y="62.092678"
		  ry="0" />
	  <rect
		  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:2.32833"
		  id="$lampSwitch"
		  width="2.0896664"
		  height="0.96446145"
		  x="93.070534"
		  y="63.547295"
		  ry="0.32148716" />
	  <path
		  style="fill:#e3dedb;fill-opacity:1;stroke:none;stroke-width:0.296246px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 91.981586,62.092678 -13.369822,0.16018 5.899305,-13.408075 14.414427,0.0933 5.843894,13.114005 z"
		  id="$lampShade"
		  sodipodi:nodetypes="cccccc" />
	</g>
 </g>
</svg>
 `;
  return html;
}
