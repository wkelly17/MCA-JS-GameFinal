export default function receptacle(room, num) {
  // functions here

  function receptacleClassNames() {
    if (room.$receptacle.open) {
      return `${room.name}_receptacle${num} ${room.name}-receptacle-inspected`;
    } else {
      return `${room.name}_receptacle${num}`;
    }
  }
  // class = 'receptacleClassNames()}'
  // data-selector = 'receptacle'

  //   p tag hidden behind receptacle
  let html = `
  <div class = 'receptacleHole'> </div>
  <p class = 'behindReceptacle1Message'>winner</p>
  <svg
  id = '${room.name}_receptacle'
  class = '${receptacleClassNames()}'
  data-selector = receptacle
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="42.940884"
  height="52.264278"
  viewBox="0 0 11.361443 13.828257"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="receptacleEmpty.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="0.65336773"
	 inkscape:cx="-172.33153"
	 inkscape:cy="173.16762"
	 inkscape:document-units="px"
	 inkscape:current-layer="layer1"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 units="px"
	 inkscape:window-width="1252"
	 inkscape:window-height="847"
	 inkscape:window-x="0"
	 inkscape:window-y="25"
	 inkscape:window-maximized="0" />
 <metadata
	 id="metadata2939">
	<rdf:RDF>
	  <cc:Work
		  rdf:about="">
		 <dc:format>image/svg+xml</dc:format>
		 <dc:type
			 rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
		 <dc:title></dc:title>
	  </cc:Work>
	</rdf:RDF>
 </metadata>
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-34.575516,-62.096562)">
	<g
		id="g2279"
		transform="translate(52.633806,-71.933909)">
	  <rect
		  style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#000000;stroke-width:0.082719;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect76876"
		  width="11.278724"
		  height="13.745539"
		  x="36.099117"
		  y="83.116684"
		  ry="1.573468"
		  transform="translate(-54.116048,50.955147)" />
	  <g
		  id="g2243"
		  transform="translate(-53.586881,50.955147)">
		 <ellipse
			 style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:1.17874;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path76878"
			 cx="41.339737"
			 cy="86.844292"
			 rx="2.2785301"
			 ry="2.3297524" />
		 <path
			 style="fill:none;stroke:#000000;stroke-width:0.206797px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 40.704101,85.351555 v 1.648368"
			 id="path76880" />
		 <path
			 style="fill:none;stroke:#000000;stroke-width:0.206797px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 41.904621,85.351555 -0.0343,1.508082"
			 id="path76882" />
		 <path
			 style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:2.0628;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path76884"
			 sodipodi:type="arc"
			 sodipodi:cx="-41.221012"
			 sodipodi:cy="-88.33522"
			 sodipodi:rx="0.84036487"
			 sodipodi:ry="0.94693589"
			 sodipodi:start="0"
			 sodipodi:end="3.1415927"
			 sodipodi:arc-type="slice"
			 d="m -40.380647,-88.33522 a 0.84036487,0.94693589 0 0 1 -0.420183,0.82007 0.84036487,0.94693589 0 0 1 -0.840365,0 0.84036487,0.94693589 0 0 1 -0.420182,-0.82007 h 0.840365 z"
			 transform="scale(-1)" />
	  </g>
	  <g
		  id="g2237"
		  transform="translate(-53.586881,50.955147)">
		 <ellipse
			 style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:1.17874;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path76878-9"
			 cx="41.321514"
			 cy="92.541252"
			 rx="2.2785301"
			 ry="2.3297524" />
		 <path
			 style="fill:none;stroke:#000000;stroke-width:0.206797px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 40.685874,91.048516 v 1.648368"
			 id="path76880-6" />
		 <path
			 style="fill:none;stroke:#000000;stroke-width:0.206797px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 41.886394,91.048516 -0.0343,1.508082"
			 id="path76882-7" />
		 <path
			 style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:2.0628;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path76884-9"
			 sodipodi:type="arc"
			 sodipodi:cx="-41.202789"
			 sodipodi:cy="-94.032181"
			 sodipodi:rx="0.84036487"
			 sodipodi:ry="0.94693589"
			 sodipodi:start="0"
			 sodipodi:end="3.1415927"
			 sodipodi:arc-type="slice"
			 d="m -40.362424,-94.032181 a 0.84036487,0.94693589 0 0 1 -0.420183,0.820071 0.84036487,0.94693589 0 0 1 -0.840365,0 0.84036487,0.94693589 0 0 1 -0.420182,-0.820071 h 0.840365 z"
			 transform="scale(-1)" />
	  </g>
	  <g
		  id="g2190">
		 <ellipse
			 style="fill:#999999;stroke:none;stroke-width:0.264583"
			 id="path1347"
			 cx="-16.616848"
			 cy="135.44383"
			 rx="0.57092243"
			 ry="0.55589819" />
		 <rect
			 style="fill:#4d4d4d;stroke:none;stroke-width:0.390919"
			 id="rect2186"
			 width="0.26251736"
			 height="0.74610204"
			 x="135.30009"
			 y="16.255352"
			 ry="0"
			 transform="rotate(90)" />
	  </g>
	  <g
		  id="g2190-6"
		  transform="translate(8.3948249,-0.18377035)">
		 <ellipse
			 style="fill:#999999;stroke:none;stroke-width:0.264583"
			 id="path1347-5"
			 cx="-16.616848"
			 cy="135.44383"
			 rx="0.57092243"
			 ry="0.55589819" />
		 <rect
			 style="fill:#4d4d4d;stroke:none;stroke-width:0.390919"
			 id="rect2186-3"
			 width="0.26251736"
			 height="0.74610204"
			 x="135.30009"
			 y="16.255352"
			 ry="0"
			 transform="rotate(90)" />
	  </g>
	  <g
		  id="g2190-2"
		  transform="translate(-0.03694373,11.126314)">
		 <ellipse
			 style="fill:#999999;stroke:none;stroke-width:0.264583"
			 id="path1347-1"
			 cx="-16.616848"
			 cy="135.44383"
			 rx="0.57092243"
			 ry="0.55589819" />
		 <rect
			 style="fill:#4d4d4d;stroke:none;stroke-width:0.390919"
			 id="rect2186-9"
			 width="0.26251736"
			 height="0.74610204"
			 x="135.30009"
			 y="16.255352"
			 ry="0"
			 transform="rotate(90)" />
	  </g>
	  <g
		  id="g2190-24"
		  transform="translate(8.7304177,11.210213)">
		 <ellipse
			 style="fill:#999999;stroke:none;stroke-width:0.264583"
			 id="path1347-58"
			 cx="-16.616848"
			 cy="135.44383"
			 rx="0.57092243"
			 ry="0.55589819" />
		 <rect
			 style="fill:#4d4d4d;stroke:none;stroke-width:0.390919"
			 id="rect2186-6"
			 width="0.26251736"
			 height="0.74610204"
			 x="135.30009"
			 y="16.255352"
			 ry="0"
			 transform="rotate(90)" />
	  </g>
	</g>
 </g>
</svg>
 `;

  return html;
}
