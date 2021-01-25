export default function printerStation(room) {
  // functions here

  function printerStationClassNames() {
    if (room.$printerStation.inspected) {
      return `${room.name}_printerStation ${room.name}printerStation-inspected`;
    } else {
      return `${room.name}_printerStation`;
    }
  }
  // class = 'printerStationClassNames()}'
  // data-selector = 'printerStation'
  let html = `
  <svg
  id = '${room.name}_printerStation'
  class = '${room.name}_printerStation'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="296.37527"
  height="325.22964"
  viewBox="0 0 78.415961 86.050344"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="printerOnStand.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="0.79247934"
	 inkscape:cx="-1.697288"
	 inkscape:cy="50.366919"
	 inkscape:document-units="px"
	 inkscape:current-layer="layer1"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 units="px"
	 inkscape:window-width="1440"
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
	 transform="translate(-48.247129,-46.625024)">
	<rect
		style="fill:#907712;fill-opacity:1;stroke:#000000;stroke-width:0.23959"
		id="rect4772"
		width="78.176369"
		height="6.6705179"
		x="48.366924"
		y="68.569328"
		ry="0.51168841" />
	<rect
		style="fill:#907712;fill-opacity:1;stroke:none;stroke-width:0.215162"
		id="rect4772-1"
		width="63.047718"
		height="6.6705184"
		x="-132.67537"
		y="116.16862"
		ry="0.51168841"
		transform="rotate(-90)" />
	<rect
		style="fill:#907712;fill-opacity:1;stroke:none;stroke-width:0.215162"
		id="rect4772-1-0"
		width="63.047718"
		height="6.6705189"
		x="-132.67537"
		y="53.658596"
		ry="0.51168841"
		transform="rotate(-90)" />
	<g
		id="g4723"
		transform="translate(-84.990713,-69.314072)">
	  <rect
		  style="opacity:1;fill:#808080;fill-opacity:1;stroke:none;stroke-width:0.687917;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77653"
		  width="36.889565"
		  height="22.618418"
		  x="140.55733"
		  y="116.3233"
		  ry="2.2917786" />
	  <rect
		  style="opacity:1;fill:#808080;fill-opacity:1;stroke:none;stroke-width:0.561682;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77659"
		  width="7.0539355"
		  height="11.542804"
		  x="155.61409"
		  y="134.02478"
		  ry="1.5278524" />
	  <rect
		  style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.395651;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77661"
		  width="12.184071"
		  height="19.02425"
		  x="152.83527"
		  y="122.90947"
		  ry="0" />
	  <rect
		  style="opacity:1;fill:#808080;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.712201;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77657"
		  width="36.741684"
		  height="10.663496"
		  x="140.87709"
		  y="116.2952"
		  ry="2.2865713" />
	  <g
		  id="g77677"
		  transform="matrix(0.47801311,0,0,0.51128367,78.683031,63.437621)">
		 <rect
			 style="opacity:1;fill:#7b7b7b;fill-opacity:1;stroke:none;stroke-width:0.388544;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect77663"
			 width="6.3510542"
			 height="5.613863"
			 x="131.3559"
			 y="126.06201" />
		 <g
			 id="g77671"
			 transform="matrix(0.5978006,0,0,0.53364336,59.912869,60.172831)">
			<ellipse
				style="opacity:1;fill:none;fill-opacity:1;stroke:#ef6a16;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path77665"
				cx="124.77924"
				cy="128.76347"
				rx="2.80708"
				ry="2.8523555" />
			<path
				style="fill:none;stroke:#ef6a16;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 124.73397,126.40916 -0.0453,2.3996"
				id="path77667" />
		 </g>
	  </g>
	</g>
 </g>
</svg>

 `;
  return html;
}
