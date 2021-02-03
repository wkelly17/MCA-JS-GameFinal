export default function desk(room) {
  // functions here

  let roomName = room.name;

  function deskClassNames() {
    if (room.$desk.inspected) {
      return `${room.name}_desk ${room.name}desk-inspected`;
    } else {
      return `${room.name}_desk`;
    }
  }
  function getClasses(standardClass, roomObj, className) {
    if (roomObj.inspected) {
      return `${standardClass} ${className}`;
    } else {
      return standardClass;
    }
  }

  // class = 'deskClassNames()}'
  // data-selector = 'desk'
  let desk = `
  <svg 

  id = '${room.name}_desk'
  class = '${room.name}_desk'
  xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="374.38214" height="147.20068"
  viewBox="0 0 99.055255 38.946839" version="1.1" id="svg2942" inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="officeDesk.svg">
  <defs id="defs2936">
	  <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 11.11692 : 1"
		  inkscape:vp_y="0 : 999.99976 : 0" inkscape:vp_z="74.868155 : 11.11692 : 1"
		  inkscape:persp3d-origin="37.434079 : 1.8402813 : 1" id="perspective76394" />
  </defs>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0"
	  inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="1.1178735" inkscape:cx="127.02309"
	  inkscape:cy="121.32833" inkscape:document-units="px" inkscape:current-layer="layer1"
	  inkscape:document-rotation="0" showgrid="false" units="px" inkscape:window-width="1440"
	  inkscape:window-height="847" inkscape:window-x="0" inkscape:window-y="25" inkscape:window-maximized="0"
	  showguides="false">
	  <inkscape:grid type="xygrid" id="grid8442" originx="-68.315551" originy="95.138401" />
  </sodipodi:namedview>
  <metadata id="metadata2939">
	  <rdf:RDF>
		  <cc:Work rdf:about="">
			  <dc:format>image/svg+xml</dc:format>
			  <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
			  <dc:title></dc:title>
		  </cc:Work>
	  </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-105.56623,78.076922)">
	  <g id="$officeDesk" transform="translate(71.129502,-148.68583)">
		  <rect
			  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.106574;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect77040-4" width="3.7968228" height="21.48814" x="41.430767" y="88.01432" ry="0" />
		  <rect
			  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect77040" width="3.7975633" height="21.186405" x="35.177429" y="88.14344" ry="0" />
		  <rect
			  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect77040-0" width="3.7975633" height="21.186405" x="119.9538" y="87.367699" ry="0" />
		  <rect
			  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect77040-3" width="3.7975633" height="21.186405" x="128.11899" y="87.16832" ry="0" />
		  <rect
			  style="opacity:1;fill:#9c7e50;fill-opacity:1;stroke:#000000;stroke-width:0.116076;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect77038" width="98.939178" height="18.05209" x="34.494766" y="70.666946" ry="1.5725769" />
	  </g>
  </g>
</svg>
 `;

  let officeChair = `
  <svg
  id = '${room.name}_officeChair'
  class = '${getClasses(
    roomName.concat('_officeChair'),
    room.$officeChair,
    'r20'
  )}'
  data-selector = "officeChair"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="116.48177"
  height="207.36305"
  viewBox="0 0 30.819132 54.8648"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="officeChair.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : 27.03488 : 1"
		inkscape:vp_y="0 : 999.99984 : 0"
		inkscape:vp_z="74.868161 : 27.03488 : 1"
		inkscape:persp3d-origin="37.434081 : 17.758239 : 1"
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
	 inkscape:cx="35.221811"
	 inkscape:cy="117.06176"
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
		originx="-96.157122"
		originy="89.33926" />
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
	 transform="translate(-133.4078,72.27777)">
	<g
		id="$officeChair">
	  <rect
		  style="fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.0944562;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77073"
		  width="30.724674"
		  height="10.504568"
		  x="133.45503"
		  y="-49.350155"
		  ry="5.252284" />
	  <rect
		  style="fill:#cccccc;fill-opacity:1;stroke:#000000;stroke-width:0.0858157;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77071-2"
		  width="3.1119597"
		  height="11.975529"
		  x="147.06911"
		  y="-40.490906"
		  ry="2.3744583" />
	  <rect
		  style="fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77071"
		  width="4.7409787"
		  height="11.955511"
		  x="146.24077"
		  y="-56.971264"
		  ry="2.3704894" />
	  <rect
		  style="fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77069"
		  width="21.437468"
		  height="17.31488"
		  x="137.99557"
		  y="-72.224854"
		  ry="5.3593669" />
	  <circle
		  style="fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77146-9"
		  cx="159.73547"
		  cy="-29.794573"
		  r="1.8052672" />
	  <rect
		  style="fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.0693026;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77071-9"
		  width="2.3039553"
		  height="10.549135"
		  x="28.404057"
		  y="-159.98045"
		  ry="2.0916388"
		  transform="matrix(0,-1,-1,0,0,0)" />
	  <circle
		  style="fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77146"
		  cx="148.77179"
		  cy="-19.271152"
		  r="1.8052672" />
	  <rect
		  style="fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.0644731;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77071-9-5"
		  width="2.3087769"
		  height="9.1110582"
		  x="147.46494"
		  y="20.068798"
		  ry="1.8065028"
		  transform="matrix(0.99999999,1.0325324e-4,2.3399455e-4,-0.99999997,0,0)" />
	  <circle
		  style="fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77146-2"
		  cx="137.98421"
		  cy="-29.090105"
		  r="1.8052672" />
	  <rect
		  style="fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.0672772;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77071-9-2"
		  width="2.3059809"
		  height="9.9327717"
		  x="27.99077"
		  y="-147.81984"
		  ry="1.9694289"
		  transform="matrix(0,-1,-1,0,0,0)" />
	</g>
 </g>
</svg>

 `;

  let computer = `
  <svg
  id = '${room.name}_computer'
  class = '${room.name}_computer'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="105.2025"
  height="76.406532"
  viewBox="0 0 27.834827 20.215893"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="computer.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -7.6140284 : 1"
		inkscape:vp_y="0 : 999.99988 : 0"
		inkscape:vp_z="74.868168 : -7.6140284 : 1"
		inkscape:persp3d-origin="37.434084 : -16.89067 : 1"
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
	 inkscape:cx="13.11732"
	 inkscape:cy="17.072718"
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
		originx="-95.144898"
		originy="60.636369" />
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
	 transform="translate(-132.39558,43.574867)">
	<g
		id="$computerWhole">
	  <rect
		  style="fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.0953595;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77196"
		  width="17.141142"
		  height="1.5848145"
		  x="137.4691"
		  y="-24.991468"
		  ry="0.79240727" />
	  <rect
		  style="fill:#1a1a1a;fill-opacity:1;stroke:#000000;stroke-width:0.0572288;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77196-6"
		  width="6.0286016"
		  height="1.6229452"
		  x="-30.751646"
		  y="-146.71376"
		  ry="0.81147259"
		  transform="rotate(90)" />
	  <rect
		  style="fill:#666666;fill-opacity:1;stroke:#000000;stroke-width:0.648758;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="$computerScreen"
		  width="27.186069"
		  height="14.06602"
		  x="132.71996"
		  y="-43.250488"
		  ry="1.2324382" />
	</g>
 </g>
</svg> 
  `;

  let mousePad = `
  <svg
  id = '${room.name}_mousePad'
  class = '${room.name}_mousePad'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="52.406246"
  height="43.610641"
  viewBox="0 0 13.865819 11.538648"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="computerMousePad.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -16.291274 : 1"
		inkscape:vp_y="0 : 999.9999 : 0"
		inkscape:vp_z="74.868169 : -16.291274 : 1"
		inkscape:persp3d-origin="37.434084 : -25.567916 : 1"
		id="perspective76394" />
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.2074371"
	 inkscape:cx="-91.991287"
	 inkscape:cy="-34.330176"
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
		originx="-104.44908"
		originy="53.603912" />
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
	 transform="translate(-141.69976,36.542407)">
	<rect
		style="fill:#afafff;fill-opacity:1;stroke:#000000;stroke-width:0.251883;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="$computerMousePad"
		width="13.613935"
		height="11.286766"
		x="141.8257"
		y="-36.416466"
		ry="1.2324371" />
 </g>
</svg> 
  `;

  let mouse = `
  <svg
  id = '${room.name}_mouse'
  class = '${room.name}_mouse'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="15.341948"
  height="23.776499"
  viewBox="0 0 4.0592236 6.290865"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="computerMouse.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -21.539058 : 1"
		inkscape:vp_y="0 : 999.99993 : 0"
		inkscape:vp_z="74.86817 : -21.539058 : 1"
		inkscape:persp3d-origin="37.434085 : -30.8157 : 1"
		id="perspective76394" />
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.2074371"
	 inkscape:cx="-109.91238"
	 inkscape:cy="-42.884291"
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
		originx="-109.1907"
		originy="51.340638" />
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
	 transform="translate(-146.44138,34.279131)">
	<g
		id="$computerMouse"
		transform="matrix(0.83630482,0,0,0.84715009,54.874631,-87.616835)">
	  <rect
		  style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:0.236031;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77233"
		  width="4.802156"
		  height="7.388773"
		  x="109.52048"
		  y="62.998482"
		  ry="2.7344279" />
	  <ellipse
		  style="opacity:1;fill:#999999;fill-opacity:1;stroke:#000000;stroke-width:0.236031;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77237"
		  cx="111.87126"
		  cy="64.930588"
		  rx="0.3426621"
		  ry="0.75937629" />
	  <path
		  style="fill:#666666;stroke:#000000;stroke-width:0.0247932;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 111.62346,65.406694 c 0.17687,-0.01617 0.35552,-0.03414 0.52697,-0.06668"
		  id="path77256" />
	  <path
		  style="fill:#666666;stroke:#000000;stroke-width:0.0247932;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 111.60345,64.573114 c 0.17686,-0.01617 0.35552,-0.03414 0.52697,-0.06668"
		  id="path77256-5" />
	  <path
		  style="fill:#666666;stroke:#000000;stroke-width:0.0247932;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 111.58394,64.839838 c 0.17686,-0.01617 0.35552,-0.03414 0.52697,-0.06668"
		  id="path77256-57" />
	  <path
		  style="fill:#666666;stroke:#000000;stroke-width:0.0247932;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 111.60345,65.095447 c 0.17686,-0.01617 0.35552,-0.03414 0.52697,-0.06668"
		  id="path77256-9" />
	  <path
		  style="fill:none;stroke:#000000;stroke-width:0.0247932;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 109.48968,66.045937 h 2.39166 v -0.320438"
		  id="path77289" />
	  <path
		  style="fill:none;stroke:#000000;stroke-width:0.0247932;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 111.82858,64.043212 -0.0351,-1.081471"
		  id="path77291" />
	  <path
		  style="fill:none;stroke:#000000;stroke-width:0.0247932;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 111.88134,66.045936 2.462,-0.02003"
		  id="path77295" />
	</g>
 </g>
</svg> 
  `;

  let bottomMug = `
  <svg
  id = '${room.name}_bottomMug'
  class = '${room.name}_bottomMug'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="31.238104"
  height="40.808399"
  viewBox="0 0 8.26508 10.79722"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="officeMugBottomLayer.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -17.032699 : 1"
		inkscape:vp_y="0 : 999.99977 : 0"
		inkscape:vp_z="74.868155 : -17.032699 : 1"
		inkscape:persp3d-origin="37.434079 : -26.309338 : 1"
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
	 inkscape:cx="-30.5242"
	 inkscape:cy="93.929134"
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
		originx="-112.95248"
		originy="80.202747" />
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
	 transform="translate(-150.20316,63.141266)">
	<path
		style="fill:#4d4d4d;stroke:none;stroke-width:0.261722px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 150.20316,-63.141266 v 10.79722 l 8.04759,-0.146902 0.21749,-9.842362 c -0.65464,1.954826 -7.22643,2.72759 -8.26508,-0.807956 z"
		id="$officeMugBottomLayer"
		sodipodi:nodetypes="ccccc" />
 </g>
</svg> 
  `;
  let upperMug = `
  <svg
  id = '${room.name}_upperMug'
  class = '${room.name}_upperMug'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="42.732258"
  height="41.07856"
  viewBox="0 0 11.306241 10.8687"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="officeMugTopLayer.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -16.961219 : 1"
		inkscape:vp_y="0 : 999.99977 : 0"
		inkscape:vp_z="74.868155 : -16.961219 : 1"
		inkscape:persp3d-origin="37.434079 : -26.237858 : 1"
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
	 inkscape:cx="-23.362448"
	 inkscape:cy="92.985465"
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
		originx="-111.0576"
		originy="79.953069" />
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
	 transform="translate(-148.30828,62.891587)">
	<g
		id="$officeMugTopLayer">
	  <ellipse
		  style="fill:#cccccc;fill-opacity:1;stroke:#4d4d4d;stroke-width:0.310121;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77310"
		  cx="152.64894"
		  cy="-60.707523"
		  rx="4.1856003"
		  ry="2.0290036" />
	  <path
		  style="fill:none;stroke:#4d4d4d;stroke-width:0.818174;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 156.41566,-59.506425 c 0,0 3.16718,1.145155 2.75406,3.006033 -0.4131,1.860873 -3.44258,4.151179 -3.44258,4.151179"
		  id="path77312" />
	</g>
 </g>
</svg> 
  `;

  let trashCan = `
<svg
id = '${room.name}_trashCan'
class = '${getClasses(
    roomName.concat('_trashCan'),
    room.$officeTrashCan,
    'd20'
  )}'
data-selector = "officeTrashCan"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="54.298973"
   height="81.829079"
   viewBox="0 0 14.366601 21.650607"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="officeTrashCan.svg">
  <defs
     id="defs2936">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : -6.1793123 : 1"
       inkscape:vp_y="0 : 999.99982 : 0"
       inkscape:vp_z="74.868159 : -6.1793123 : 1"
       inkscape:persp3d-origin="37.43408 : -15.455953 : 1"
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
     inkscape:cx="-20.446034"
     inkscape:cy="79.701754"
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
       originx="-110.8859"
       originy="79.454423" />
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
     transform="translate(-148.13658,62.392936)">
    <g
       id="$officeTrashCan"
       transform="translate(87.744622,-166.26232)">
      <rect
         style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.187866;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect77647"
         width="14.366601"
         height="18.33423"
         x="60.39196"
         y="107.18576"
         ry="2.291779" />
      <ellipse
         style="opacity:1;fill:#949494;fill-opacity:1;stroke:#000000;stroke-width:0.169901;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path77649"
         cx="67.473122"
         cy="108.46757"
         rx="6.9938684"
         ry="4.5132327" />
    </g>
  </g>
</svg>
`;

  let inkBottle = `
  <svg
  id = '${room.name}_inkBottle'
  class = '${room.name}_inkBottle'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="26.356255"
  height="29.926735"
  viewBox="0 0 6.9734246 7.918114"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="inkBottle.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -19.911805 : 1"
		inkscape:vp_y="0 : 999.99982 : 0"
		inkscape:vp_z="74.868159 : -19.911805 : 1"
		inkscape:persp3d-origin="37.43408 : -29.188446 : 1"
		id="perspective76394" />
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="3.8254119"
	 inkscape:cx="-22.48915"
	 inkscape:cy="48.056005"
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
		originx="-113.07701"
		originy="73.713866" />
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
	 transform="translate(-150.32769,56.65238)">
	<g
		id="$inkBottle"
		transform="translate(94.196668,-118.10301)">
	  <path
		  id="rect77552"
		  style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.116921;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 57.573752,63.435141 4.302591,-0.0024 c 0.283222,0.412999 0.741383,0.889405 0.886274,1.339072 0.481298,1.493704 0.189045,3.168165 0.244221,4.538471 h -6.811407 c 0.01216,-1.417467 -0.122221,-2.991797 0.450046,-4.432372 0.18092,-0.455431 0.615356,-1.018077 0.928275,-1.442788 z"
		  sodipodi:nodetypes="ccsccsc" />
	  <path
		  style="fill:#000080;stroke:#000000;stroke-width:0.116921px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 56.274727,69.271462 0.03933,-3.064018 0.314635,-1.146535 6.097671,0.02608 c 0.537871,1.21855 0.122137,1.071735 0.293361,1.693723 l -0.07866,2.490749 z"
		  id="path77596"
		  sodipodi:nodetypes="ccccccc" />
	  <rect
		  style="opacity:1;fill:#000080;fill-opacity:1;stroke:none;stroke-width:0.11987;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77607"
		  width="4.3715072"
		  height="1.4938369"
		  x="57.560501"
		  y="61.986301" />
	  <ellipse
		  style="opacity:1;fill:#000080;fill-opacity:1;stroke:none;stroke-width:0.147122;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77609"
		  cx="59.746254"
		  cy="62.106369"
		  rx="2.2547774"
		  ry="0.65573865" />
	</g>
 </g>
</svg>
`;

  let pencil = `
  <svg
  id = '${room.name}_pencil'
  class = '${room.name}_pencil'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="6.7379165"
  height="47.012897"
  viewBox="0 0 1.7827401 12.438827"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="pencil.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -15.391092 : 1"
		inkscape:vp_y="0 : 999.99981 : 0"
		inkscape:vp_z="74.868158 : -15.391092 : 1"
		inkscape:persp3d-origin="37.43408 : -24.667733 : 1"
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
	 inkscape:cx="-36.246097"
	 inkscape:cy="77.191521"
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
		originx="-114.46639"
		originy="75.774259" />
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
	 transform="translate(-151.71707,58.712774)">
	<g
		id="$pencil"
		transform="translate(98.666138,-102.24936)">
	  <rect
		  style="fill:#ffff00;fill-opacity:1;stroke:none;stroke-width:0.482101;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77314"
		  width="1.6685536"
		  height="8.2115583"
		  x="53.108624"
		  y="45.509384" />
	  <path
		  sodipodi:type="star"
		  style="fill:#baba45;fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77316"
		  sodipodi:sides="3"
		  sodipodi:cx="121.74322"
		  sodipodi:cy="50.978268"
		  sodipodi:r1="2.3240745"
		  sodipodi:r2="1.1620373"
		  sodipodi:arg1="0.99079355"
		  sodipodi:arg2="2.0379911"
		  inkscape:flatsided="false"
		  inkscape:rounded="0"
		  inkscape:randomized="0"
		  inkscape:transform-center-x="-0.070430353"
		  inkscape:transform-center-y="-0.45796671"
		  transform="matrix(0.37717128,-0.28195319,0.23561996,0.56429727,-4.0342992,50.57287)"
		  d="m 123.01687,52.922266 -1.79701,-0.906491 -1.79702,-0.90649 1.68355,-1.103016 1.68355,-1.103017 0.11347,2.009507 z" />
	  <path
		  style="fill:#4d4d4d;stroke:none;stroke-width:0.197849px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 53.825912,43.536586 0.49379,1.183903 -0.2843,-0.219869 -0.19453,0.186043 -0.11971,-0.11839 -0.14962,0.152216 -0.10475,-0.135304 z"
		  id="path77322" />
	  <rect
		  style="fill:#ef00b9;fill-opacity:1;stroke:none;stroke-width:0.0405344;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77328"
		  width="1.6169305"
		  height="1.7255297"
		  x="53.472546"
		  y="53.562588"
		  ry="0.79204631"
		  transform="matrix(0.99991964,0.01267707,-0.00631277,0.99998007,0,0)"
		  inkscape:transform-center-x="-0.02987281"
		  inkscape:transform-center-y="0.035582189" />
	  <rect
		  style="fill:#008000;fill-opacity:1;stroke:none;stroke-width:0.0385681;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77324"
		  width="1.6304744"
		  height="1.2470826"
		  x="53.134861"
		  y="53.687004" />
	</g>
 </g>
</svg>
`;

  let pen = `
  <svg
  id = '${room.name}_pen'
  class = '${room.name}_pen'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="6.2809334"
  height="42.865665"
  viewBox="0 0 1.66183 11.341539"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="pen.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : -16.488381 : 1"
		inkscape:vp_y="0 : 999.99984 : 0"
		inkscape:vp_z="74.868157 : -16.488381 : 1"
		inkscape:persp3d-origin="37.43408 : -25.765022 : 1"
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
	 inkscape:cx="-36.148042"
	 inkscape:cy="80.369889"
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
		originx="-114.44045"
		originy="76.615204" />
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
	 transform="translate(-151.69113,59.553717)">
	<g
		id="$pen"
		transform="translate(35.205256,-85.434663)">
	  <rect
		  style="fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77368"
		  width="0.6665197"
		  height="6.2550311"
		  x="117.02505"
		  y="26.746746"
		  ry="0.33325985" />
	  <path
		  style="fill:#000052;fill-opacity:1;stroke:#000000;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 117.36244,26.776002 c 0.1819,-0.019 0.25298,0.100516 0.30596,0.242658 l 0.0106,3.523816 -0.66467,0.03165 0.0105,-3.555468 c 0.0549,-0.138481 0.13719,-0.249653 0.33761,-0.242656 z"
		  id="path77385"
		  sodipodi:nodetypes="cccccc" />
	  <rect
		  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.0315213;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77328-8"
		  width="0.97781527"
		  height="1.7255079"
		  x="116.97927"
		  y="33.034515"
		  ry="0.48321909"
		  transform="matrix(0.99978025,0.02096301,-0.00381708,0.99999271,0,0)"
		  inkscape:transform-center-x="-0.01806429"
		  inkscape:transform-center-y="0.035584733" />
	  <g
		  id="g77366"
		  transform="matrix(1.0559118,0,0,1.2573618,-11.821945,-38.141709)">
		 <path
			 style="fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.0471914;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 d="m 121.58887,52.063716 1.45238,-0.01925 c 0.0639,-0.4612 -0.34139,-0.779437 -0.67778,-1.126222 -0.37244,0.385387 -0.83538,0.717877 -0.7746,1.145472 z"
			 id="path77362"
			 sodipodi:nodetypes="cccc" />
		 <ellipse
			 style="opacity:1;fill:#ececec;fill-opacity:1;stroke:#cccccc;stroke-width:0.0330066;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path77360"
			 cx="122.34982"
			 cy="51.112671"
			 rx="0.22773798"
			 ry="0.15335502" />
	  </g>
	  <rect
		  style="fill:#cccccc;fill-opacity:0.556452;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77355"
		  width="1.5747176"
		  height="7.7060657"
		  x="116.57298"
		  y="27.264191" />
	  <rect
		  style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.038568;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77324-4"
		  width="1.6304744"
		  height="1.2470826"
		  x="116.48587"
		  y="34.833668" />
	  <path
		  id="rect77420"
		  style="fill:#333333;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 117.2035,31.895393 h 0.14531 c 0.21209,0 0.46682,0.217536 0.38283,0.455486 -0.21732,0.615662 -0.26855,2.118447 0,2.67414 0.1098,0.227199 -0.17074,0.455485 -0.38283,0.455485 h -0.14531 c -0.21209,0 -0.47138,-0.219188 -0.38283,-0.455485 0.14449,-0.385637 0.23539,-2.012081 0,-2.67414 -0.0845,-0.237757 0.17074,-0.455486 0.38283,-0.455486 z"
		  sodipodi:nodetypes="sssssssss" />
	</g>
 </g>
</svg> 
  `;

  function paperClipClass() {
    if (room.$paperclip.found) {
      return 'dNone';
    } else {
      return `${room.name}_paperclip`;
    }
  }

  let paperclip = `
  <svg
  data-selector = "paperclip"
  id = '${room.name}_paperclip'
  class = '${paperClipClass()}'
  xmlns="http://www.w3.org/2000/svg"
  width="27.483053"
  height="6.7003956"
  viewBox="0 0 7.2715566 1.7728127"
  >
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-149.26281,55.610296)">
	<path
		style="fill:none;stroke:#333333;stroke-width:0.239448;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		d="m 155.3655,-54.469608 -5.00446,0.05503 c -0.26772,0.02505 -0.32614,0.03634 -0.36847,-0.295819 -0.0573,-0.186838 0.11858,-0.323269 0.50779,-0.288958 l 4.88678,-0.02156 c 0.67415,-0.12808 1.00008,0.120838 1.02648,0.344515 -0.061,0.420596 -0.12013,0.607345 -0.84562,0.617235 -1.92798,0.03224 -5.6761,0.124839 -5.78395,0.09671 -0.4814,-0.254848 -0.37584,-0.311045 -0.40112,-0.703186 0.0468,-0.452322 0.01,-0.691115 0.86454,-0.773847 l 5.14964,-0.05109"
		id="$paperclip"
		sodipodi:nodetypes="ccccccccccc" />
 </g>
</svg>

  
  `;

  function curtainLeft() {
    if (room.$curtainLeft.inspected) {
      return `${room.name}_curtainLeft-inspected`;
    } else {
      return ``;
    }
  }
  function curtainRight() {
    if (room.$curtainRight.inspected) {
      return `${room.name}_curtainRight-inspected`;
    } else {
      return ``;
    }
  }

  let curtains = `
<svg
id = '${room.name}_curtains'
class = '${room.name}_curtains'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="279.0155"
   height="349.01648"
   viewBox="0 0 73.822855 92.343944"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="officeCurtains.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.70496989"
     inkscape:cx="0.53022253"
     inkscape:cy="238.92138"
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
     transform="translate(-22.240595,-64.738064)">
    <g
       id="g4661">
      <g
         id="g77633"
         transform="translate(-76.466345,43.079678)">
		  <rect
		 
           style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.205496;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="rect77611"
           width="69.122498"
           height="3.133554"
           x="101.01102"
           y="23.040834"
           ry="0" />
        <ellipse
           style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path77613"
           cx="170.04138"
           cy="24.607613"
           rx="2.4884102"
           ry="2.6727369" />
        <ellipse
           style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path77613-2"
           cx="101.19535"
           cy="24.331123"
           rx="2.4884102"
           ry="2.6727369" />
      </g>
		<path
		data-selector = "curtainLeft"
		class = '${curtainLeft()}'
         style="fill:#000080;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 33.862277,68.754079 c -0.009,1.778008 -0.29363,3.501803 -0.29363,5.285313 0,3.077742 0.29363,6.006217 0.29363,9.102487 0,12.63877 -0.25063,25.309741 0.58726,37.878091 0.15957,2.39354 -0.51339,7.92983 0,9.98337 0.0531,0.21232 0.26267,0.3706 0.29362,0.58725 0.37485,2.62393 -0.26818,5.37541 -0.58725,7.92797 -0.14051,1.12407 0,2.39183 0,3.52355 0,1.71069 0.4122,3.93014 0,5.57894 -0.0531,0.21232 -0.25765,0.37137 -0.29363,0.58726 -0.11895,0.71367 0.17839,1.63546 0,2.34902 -0.25055,1.00221 -0.6472,2.46282 -0.29363,3.52355 0.16158,0.48475 0.12821,1.53224 0.58726,1.76177 1.07848,0.53924 10.46558,-1.13165 11.45151,-1.17452 3.481639,-0.15137 5.3295,0.96142 7.34072,-2.0554 0.121401,-0.1821 0.138869,-0.4325 0.293629,-0.58725 0.945991,-0.946 2.331561,-1.13959 2.93628,-2.34903 0.841102,-1.6822 0.293632,-10.5588 0.293632,-12.3324 0,-5.74551 0.273449,-11.58159 0,-17.32408 -0.171551,-3.6026 -1.208831,-7.55046 -0.880891,-11.15789 0.391089,-4.30199 1.8458,-8.37613 2.642661,-12.626032 0.24583,-1.311084 0.0826,-2.55121 0.293629,-3.81717 0.188659,-1.131972 0.493991,-1.430182 0.587259,-2.642658 0.254751,-3.311797 -0.53889,-4.556382 -0.880888,-7.634341 -0.200361,-1.803223 0,-3.758673 0,-5.578943 0,-3.62142 0,-7.242838 0,-10.864258"
         id="path4604" />
		<path
		data-selector = "curtainRight"
		class = '${curtainRight()}'
         style="fill:#000080;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 59.359384,68.575238 c 0.0326,9.723371 0.49029,19.470989 -0.88089,29.069231 -0.0969,0.678246 0.0682,1.373666 0,2.0554 0.12362,1.038531 -0.47703,1.944241 -0.58726,2.936271 -0.13943,1.25487 0.1566,2.56445 0,3.81717 -0.1332,1.06563 -0.45185,2.14672 -0.58725,3.22992 -0.20166,1.61323 0,3.36508 0,4.99169 0,3.22991 0,6.45983 0,9.68974 0,8.2216 0,16.4432 0,24.6648 0,1.23916 -0.69127,4.00679 0.29363,4.99169 0.13573,0.13573 0.7036,-0.0887 0.88088,0 1.65792,0.82896 2.91216,0.0898 4.40443,0.58725 0.54046,0.18016 1.09764,0.45443 1.76177,0.58726 1.72708,0.34542 3.91694,-0.554 5.57894,0 2.396501,0.79883 6.027611,0.32828 8.515231,-0.29363 0.582799,-0.1457 1.52424,0.26558 2.0554,0 0.93177,-0.46588 2.15663,-2.12623 2.64266,-2.93628 1.17447,-1.95746 1.78303,-4.86811 2.0554,-7.04709 0.10926,-0.87409 -0.124582,-1.77063 0,-2.64266 0.280181,-1.96123 1.030679,-3.85896 1.174509,-5.87257 0.7619,-10.66651 0.593932,-21.31483 0,-32.00552 -0.47412,-8.534214 0.984481,-17.842701 0.29363,-26.132928 -0.31573,-3.788786 -0.179218,-0.08003 -0.587248,-2.936288 -0.27913,-1.953903 0.0872,-3.968327 -0.293632,-5.87257 -0.234649,-1.173226 0.282501,-2.371276 -0.29363,-3.523543 -0.0748,-0.149568 -3.145019,0.587257 -4.404429,0.587257 -1.34648,0 0.30951,-0.0619 -1.468141,0.293629 -1.87862,0.375722 -4.011829,-0.07852 -5.872569,0.293628 -1.860471,0.372094 -3.683061,0.903673 -5.57895,1.174515 -1.166741,0.166677 -2.360991,0.09987 -3.523541,0.293628 -1.84466,0.307444 -3.69181,0.471783 -5.57894,0 z"
         id="path4606" />
    </g>
  </g>
</svg>
`;

  return desk
    .concat(officeChair)
    .concat(computer)
    .concat(mousePad)
    .concat(mouse)
    .concat(upperMug)
    .concat(pencil)
    .concat(pen)
    .concat(bottomMug)
    .concat(trashCan)
    .concat(inkBottle)
    .concat(curtains)
    .concat(paperclip);
}
