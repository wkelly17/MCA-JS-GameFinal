export default function dryEraseBoard(room) {
  // functions here

  function dryEraseBoardClassNames() {
    if (room.$dryEraseBoard.inspected) {
      return `${room.name}_dryEraseBoard ${room.name}dryEraseBoard-inspected`;
    } else {
      return `${room.name}_dryEraseBoard`;
    }
  }
  // class = 'dryEraseBoardClassNames()}'
  // data-selector = 'dryEraseBoard'
  let dryEraseBoard = `
  <svg
  id = '${room.name}_dryEraseBoard'
  class = '${room.name}_dryEraseBoard'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="174.59157"
  height="125.74188"
  viewBox="0 0 46.194017 33.269202"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="dryEraseBoard.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : 5.4392813 : 1"
		inkscape:vp_y="0 : 999.99985 : 0"
		inkscape:vp_z="74.868167 : 5.4392813 : 1"
		inkscape:persp3d-origin="37.434084 : -3.8373596 : 1"
		id="perspective76394" />
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="2.236773"
	 inkscape:cx="39.124041"
	 inkscape:cy="77.31162"
	 inkscape:document-units="px"
	 inkscape:current-layer="layer1"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 units="px"
	 inkscape:window-width="1440"
	 inkscape:window-height="847"
	 inkscape:window-x="0"
	 inkscape:window-y="25"
	 inkscape:window-maximized="0"
	 showguides="false">
	<inkscape:grid
		type="xygrid"
		id="grid8442"
		originx="-93.350341"
		originy="75.39169" />
 </sodipodi:namedview>
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
	 transform="translate(-130.60102,58.330195)">
	<rect
		style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#49420c;stroke-width:0.687917;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="$dryEraseBoard"
		width="45.5061"
		height="32.581287"
		x="130.94498"
		y="-57.986237"
		ry="2.2917783" />
 </g>
</svg>
 `;

  let expoMarker = `
  <svg
  id = '${room.name}_expoMarker'
  class = '${room.name}_expoMarker'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="15.189962"
  height="63.653839"
  viewBox="0 0 4.0190102 16.841742"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="expoMarker.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -10.988178 : 1"
		inkscape:vp_y="0 : 999.99981 : 0"
		inkscape:vp_z="74.868157 : -10.988178 : 1"
		inkscape:persp3d-origin="37.43408 : -20.264817 : 1"
		id="perspective76394" />
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.9721201"
	 inkscape:cx="-35.601353"
	 inkscape:cy="104.89857"
	 inkscape:document-units="px"
	 inkscape:current-layer="layer1"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 units="px"
	 inkscape:window-width="1440"
	 inkscape:window-height="847"
	 inkscape:window-x="0"
	 inkscape:window-y="25"
	 inkscape:window-maximized="0"
	 showguides="false">
	<inkscape:grid
		type="xygrid"
		id="grid8442"
		originx="-114.29581"
		originy="83.10508" />
 </sodipodi:namedview>
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
	 transform="translate(-151.54649,66.043595)">
	<g
		id="$expoMarker"
		transform="matrix(0.82392615,0,0,0.99999982,122.61834,-103.79982)">
	  <rect
		  style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#115a17;stroke-width:0.79375;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77685"
		  width="3.5639846"
		  height="12.998061"
		  x="35.884289"
		  y="41.203041"
		  ry="1.430528" />
	  <path
		  style="fill:#115a17;fill-opacity:1;stroke:none;stroke-width:0.381647px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 36.928939,37.785392 1.142045,-0.02916 c 1.006071,0.301387 0.757135,0.515275 0.930557,0.816663 l 0.972856,0.08749 c 0.106565,1.058432 -0.416788,2.091551 -1.438131,2.916655 l -1.691925,-0.02916 c -1.820673,-0.805486 -1.658893,-1.943845 -1.734219,-2.974986 0.907472,0.05126 0.797986,-0.0027 1.142047,-0.02917 0.131698,-0.285146 0.1225,-0.618876 0.67677,-0.758332 z"
		  id="path77690"
		  sodipodi:nodetypes="ccccccccc" />
	  <text
		  xml:space="preserve"
		  style="font-size:1.72724px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';fill:#115a17;fill-opacity:1;stroke-width:0.647712"
		  x="53.375732"
		  y="-31.104448"
		  id="text77709"
		  transform="matrix(-0.00669847,0.83417579,-1.1987108,-0.00962571,0,0)"><tspan
			 sodipodi:role="line"
			 id="tspan77707"
			 x="53.375732"
			 y="-31.104448"
			 style="fill:#115a17;fill-opacity:1;stroke-width:0.647712">NEXPO</tspan></text>
	</g>
 </g>
</svg>
`;

  let eraser = `
  <svg
  id = '${room.name}_eraser'
  class = '${room.name}_eraser'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="24.955893"
  height="41.231472"
  viewBox="0 0 6.602913 10.909159"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="dryEraser.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -16.920762 : 1"
		inkscape:vp_y="0 : 999.99986 : 0"
		inkscape:vp_z="74.868168 : -16.920762 : 1"
		inkscape:persp3d-origin="37.434084 : -26.197403 : 1"
		id="perspective76394" />
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="2.236773"
	 inkscape:cx="-54.43074"
	 inkscape:cy="24.723342"
	 inkscape:document-units="px"
	 inkscape:current-layer="layer1"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 units="px"
	 inkscape:window-width="1440"
	 inkscape:window-height="847"
	 inkscape:window-x="0"
	 inkscape:window-y="25"
	 inkscape:window-maximized="0"
	 showguides="false">
	<inkscape:grid
		type="xygrid"
		id="grid8442"
		originx="-113.01699"
		originy="62.660593" />
 </sodipodi:namedview>
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
	 transform="translate(-150.26767,45.599094)">
	<rect
		style="opacity:1;fill:#1e1e1e;fill-opacity:1;stroke:none;stroke-width:0.171881;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="rect77681"
		width="6.6029129"
		height="10.90916"
		x="150.26767"
		y="-45.599094"
		ry="0.95368588" />
 </g>
</svg>

 
  `;

  return dryEraseBoard.concat(expoMarker).concat(eraser);
}
