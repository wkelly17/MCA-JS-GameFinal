export default function trashCan(room) {
  // functions here

  function trashCanClassNames() {
    if (room.$trashCan.inspected) {
      return `${room.name}_trashCan ${room.name}trashCan-inspected`;
    } else {
      return `${room.name}_trashCan`;
    }
  }
  // class = 'trashCanClassNames()}'
  // data-selector = 'trashCan'
  let html = `
  <svg
  id = '${room.name}_trashCan'
  class = '${room.name}_trashCan'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="78.111336"
  height="117.51712"
  viewBox="0 0 20.66696 31.093071"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="trashcan_kitchen.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="2.8631786"
	 inkscape:cx="49.399652"
	 inkscape:cy="40.267993"
	 inkscape:document-units="px"
	 inkscape:current-layer="g68076"
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
		originx="-34.804931"
		originy="-42.292607" />
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
	 transform="translate(-72.055682,-59.354118)">
	<g
		id="g68076"
		transform="translate(-26.197082,-19.925691)">
	  <g
		  id="$trashcanWhole">
		 <rect
			 style="opacity:1;fill:#808080;fill-opacity:1;stroke:none;stroke-width:0.0466721;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="$trashcanBody"
			 width="19.428595"
			 height="28.493008"
			 x="99.011795"
			 y="81.879875"
			 ry="1.3115468" />
		 <path
			 style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="$trashcanLid"
			 sodipodi:type="arc"
			 sodipodi:cx="108.58624"
			 sodipodi:cy="82.329033"
			 sodipodi:rx="10.333479"
			 sodipodi:ry="3.0492234"
			 sodipodi:start="0"
			 sodipodi:end="6.270968"
			 sodipodi:open="true"
			 sodipodi:arc-type="arc"
			 d="m 118.91972,82.329033 a 10.333479,3.0492234 0 0 1 -10.30192,3.049209 10.333479,3.0492234 0 0 1 -10.364843,-3.030583 10.333479,3.0492234 0 0 1 10.238603,-3.067722 10.333479,3.0492234 0 0 1 10.42739,3.011844" />
		 <rect
			 style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="$trashcanPedal"
			 width="9.317071"
			 height="2.2022169"
			 x="103.84299"
			 y="106.89223"
			 ry="1.1011084" />
	  </g>
	</g>
 </g>
</svg>
 `;
  return html;
}
