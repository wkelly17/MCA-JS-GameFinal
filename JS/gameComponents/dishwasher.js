export default function dishwasher(room) {
  // functions here

  function dishwasherClassNames() {
    if (room.$dishwasher.inspected) {
      return `${room.name}_dishwasher ${room.name}dishwasher-inspected`;
    } else {
      return `${room.name}_dishwasher`;
    }
  }
  // class = 'dishwasherClassNames()}'
  // data-selector = 'dishwasher'
  let dishwasher = `
  <svg
  id = '${room.name}_dishwasher'
  class = '${room.name}_dishwasher'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="191.08682"
   height="177.28987"
   viewBox="0 0 50.558391 46.907945"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="dishwasherInside.svg.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.52327659"
     inkscape:cx="194.18643"
     inkscape:cy="135.18193"
     inkscape:document-units="px"
     inkscape:current-layer="g73089"
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
     transform="translate(-36.368925,-64.088408)">
    <g
       id="g73089"
       transform="matrix(1.9275637,0,0,1.5217715,101.32021,23.113423)">
      <g
         id="g4557">
        <g
           id="g72825"
           transform="translate(-94.735207,4.9992847)">
          <rect
             style="opacity:1;fill:#fcfcfc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262936;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="rect72377"
             width="25.96623"
             height="30.56163"
             x="61.170624"
             y="22.058029" />
          <rect
             style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#cccccc;stroke-width:0.255426;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="rect72379-8"
             width="20.356018"
             height="21.269354"
             x="63.767673"
             y="27.68951" />
          <path
             style="fill:none;stroke:#cccccc;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="M 63.891662,33.513393 83.999699,33.405286"
             id="path72620" />
          <g
             id="g72736"
             transform="rotate(178.12404,68.731311,33.879982)">
            <rect
               style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect72727"
               width="1.6746025"
               height="2.9851608"
               x="68.258255"
               y="34.911819" />
            <ellipse
               style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path72729"
               cx="69.059151"
               cy="35.075638"
               rx="0.88159144"
               ry="0.53574967" />
            <path
               style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
               d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
               id="path72731" />
          </g>
          <path
             style="fill:#cccccc;stroke:#cccccc;stroke-width:0.153483px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="M 68.324078,33.405286 V 32.277527"
             id="path72622" />
          <g
             id="g72736-5"
             transform="rotate(178.12404,74.75311,33.924487)">
            <rect
               style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect72727-3"
               width="1.6746025"
               height="2.9851608"
               x="68.258255"
               y="34.911819" />
            <ellipse
               style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path72729-9"
               cx="69.059151"
               cy="35.075638"
               rx="0.88159144"
               ry="0.53574967" />
            <path
               style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
               d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
               id="path72731-7" />
          </g>
          <path
             style="fill:#cccccc;stroke:#cccccc;stroke-width:0.15619px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="M 80.540251,33.189072 V 32.20955"
             id="path72624" />
          <path
             style="fill:none;stroke:#cccccc;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="M 63.999769,42.863992 84.107806,42.755885"
             id="path72620-9" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668"
             cx="65.831535"
             cy="41.399609"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-4"
             cx="67.398643"
             cy="41.584042"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-46"
             cx="68.986671"
             cy="41.584038"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-8"
             cx="70.944"
             cy="41.510178"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-5"
             cx="73.049049"
             cy="41.399387"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-1"
             cx="75.080246"
             cy="41.399387"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-13"
             cx="77.406876"
             cy="41.584042"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-15"
             cx="79.511932"
             cy="41.399387"
             rx="0.2693283"
             ry="3.001087" />
          <ellipse
             style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72668-0"
             cx="81.912437"
             cy="41.584038"
             rx="0.2693283"
             ry="3.001087" />
          <g
             id="g72736-0"
             transform="matrix(0.77710909,0.0330413,0.02545295,-1.0087903,27.940954,65.670902)">
            <rect
               style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect72727-2"
               width="1.6746025"
               height="2.9851608"
               x="68.258255"
               y="34.911819" />
            <ellipse
               style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path72729-8"
               cx="69.059151"
               cy="35.075638"
               rx="0.88159144"
               ry="0.53574967" />
            <path
               style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
               d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
               id="path72731-4" />
          </g>
          <g
             id="g72736-4"
             transform="matrix(-0.69521529,0.03313906,-0.02277065,-1.0117753,114.32392,66.039148)">
            <rect
               style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect72727-35"
               width="1.6746025"
               height="2.9851608"
               x="68.258255"
               y="34.911819" />
            <ellipse
               style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path72729-2"
               cx="69.059151"
               cy="35.075638"
               rx="0.88159144"
               ry="0.53574967" />
            <path
               style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
               d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
               id="path72731-2" />
          </g>
          <path
             style="fill:#999999;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 71.154553,33.086866 c 0.654923,-0.231805 1.645657,-0.709562 2.905476,-0.563307 1.224803,-0.128155 2.197828,0.373591 2.668296,0.622603 1.231864,-0.118591 0.722229,-1.630626 0.0593,-2.549706 -1.917221,-0.906547 -3.537964,-1.179016 -5.455184,0.266831 -0.587337,0.741193 -1.082693,1.927102 -0.177885,2.223579 z"
             id="path72786"
             sodipodi:nodetypes="cccccc" />
          <ellipse
             style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#a3a3a3;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path72790"
             cx="73.896973"
             cy="32.953453"
             rx="3.0092447"
             ry="0.84496033" />
        </g>
      </g>
      <rect
         style="fill:#fcfcfc;fill-opacity:1;stroke:#cccccc;stroke-width:0.282223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect72379"
         width="22.275158"
         height="23.729034"
         x="-77.065369"
         y="31.823042" />
      <path
         id="rect72381"
         style="fill:#999999;fill-opacity:1;stroke:#cccccc;stroke-width:0.198908;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m -76.302292,34.159712 c 7.07343,-0.209365 14.11223,-0.302061 21.033901,0 v 0.611607 c -8.655501,0.473223 -14.929311,0.289382 -21.033901,0 z"
         sodipodi:nodetypes="ccccc" />
    </g>
  </g>
</svg>
`;

  let dishwasherDoor = `
  <svg
  id = '${room.name}_dishwasherDoor'
  class = '${room.name}_dishwasherDoor'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="164.33684"
  height="138.1026"
  viewBox="0 0 43.480791 36.539646"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="dishwasherDoor.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="0.52327659"
	 inkscape:cx="180.56299"
	 inkscape:cy="119.29315"
	 inkscape:document-units="px"
	 inkscape:current-layer="g73089"
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
	 transform="translate(-39.97346,-68.292315)">
	<g
		id="g73089"
		transform="matrix(1.9275637,0,0,1.5217715,101.32021,23.113423)">
	  <g
		  id="g4557"
		  transform="translate(34.100897,29.239128)">
		 <g
			 id="g72825"
			 transform="translate(-94.735207,4.9992847)">
			<rect
				style="opacity:1;fill:#fcfcfc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262936;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect72377"
				width="25.96623"
				height="30.56163"
				x="61.170624"
				y="22.058029" />
			<rect
				style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#cccccc;stroke-width:0.255426;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="rect72379-8"
				width="20.356018"
				height="21.269354"
				x="63.767673"
				y="27.68951" />
			<path
				style="fill:none;stroke:#cccccc;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="M 63.891662,33.513393 83.999699,33.405286"
				id="path72620" />
			<g
				id="g72736"
				transform="rotate(178.12404,68.731311,33.879982)">
			  <rect
				  style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect72727"
				  width="1.6746025"
				  height="2.9851608"
				  x="68.258255"
				  y="34.911819" />
			  <ellipse
				  style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path72729"
				  cx="69.059151"
				  cy="35.075638"
				  rx="0.88159144"
				  ry="0.53574967" />
			  <path
				  style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
				  id="path72731" />
			</g>
			<path
				style="fill:#cccccc;stroke:#cccccc;stroke-width:0.153483px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="M 68.324078,33.405286 V 32.277527"
				id="path72622" />
			<g
				id="g72736-5"
				transform="rotate(178.12404,74.75311,33.924487)">
			  <rect
				  style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect72727-3"
				  width="1.6746025"
				  height="2.9851608"
				  x="68.258255"
				  y="34.911819" />
			  <ellipse
				  style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path72729-9"
				  cx="69.059151"
				  cy="35.075638"
				  rx="0.88159144"
				  ry="0.53574967" />
			  <path
				  style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
				  id="path72731-7" />
			</g>
			<path
				style="fill:#cccccc;stroke:#cccccc;stroke-width:0.15619px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="M 80.540251,33.189072 V 32.20955"
				id="path72624" />
			<path
				style="fill:none;stroke:#cccccc;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="M 63.999769,42.863992 84.107806,42.755885"
				id="path72620-9" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668"
				cx="65.831535"
				cy="41.399609"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-4"
				cx="67.398643"
				cy="41.584042"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-46"
				cx="68.986671"
				cy="41.584038"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-8"
				cx="70.944"
				cy="41.510178"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-5"
				cx="73.049049"
				cy="41.399387"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-1"
				cx="75.080246"
				cy="41.399387"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-13"
				cx="77.406876"
				cy="41.584042"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-15"
				cx="79.511932"
				cy="41.399387"
				rx="0.2693283"
				ry="3.001087" />
			<ellipse
				style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72668-0"
				cx="81.912437"
				cy="41.584038"
				rx="0.2693283"
				ry="3.001087" />
			<g
				id="g72736-0"
				transform="matrix(0.77710909,0.0330413,0.02545295,-1.0087903,27.940954,65.670902)">
			  <rect
				  style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect72727-2"
				  width="1.6746025"
				  height="2.9851608"
				  x="68.258255"
				  y="34.911819" />
			  <ellipse
				  style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path72729-8"
				  cx="69.059151"
				  cy="35.075638"
				  rx="0.88159144"
				  ry="0.53574967" />
			  <path
				  style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
				  id="path72731-4" />
			</g>
			<g
				id="g72736-4"
				transform="matrix(-0.69521529,0.03313906,-0.02277065,-1.0117753,114.32392,66.039148)">
			  <rect
				  style="opacity:1;fill:#999999;fill-opacity:1;stroke:#999999;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect72727-35"
				  width="1.6746025"
				  height="2.9851608"
				  x="68.258255"
				  y="34.911819" />
			  <ellipse
				  style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#999999;stroke-width:0.248811;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path72729-2"
				  cx="69.059151"
				  cy="35.075638"
				  rx="0.88159144"
				  ry="0.53574967" />
			  <path
				  style="fill:none;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 69.896449,35.421484 c 0.164971,-0.03627 0.327607,-0.09707 0.473258,-0.145619 0.115382,-0.03846 0.315582,0 0.436853,0 0.02426,0 0.05565,-0.01717 0.07281,0 0.01717,0.01717 -0.01085,0.0511 0,0.07281 0.08226,0.164515 0.198688,0.370189 0.145618,0.582472 -0.03026,0.121044 -0.137583,0.165952 -0.182022,0.254831 -0.01085,0.0217 0.01085,0.0511 0,0.07281 -0.07574,0.151479 -0.116412,0.35664 -0.218427,0.509662 -0.114665,0.171997 -0.49993,0.400446 -0.655278,0.400446 -0.180919,0 0.007,-0.08682 0.0364,-0.145616 0.01934,-0.03866 0.0039,-0.113167 0.0364,-0.145618 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.0086,-0.0086 -0.0086,-0.02782 0,-0.0364 0.01214,-0.01214 0.09708,-0.02426 0.109215,-0.0364 0.03951,-0.03951 0.0096,-0.201147 0.0364,-0.254831 0.02601,-0.05201 0.07346,-0.182676 0.109212,-0.218427 0.0086,-0.0086 0.02782,0.0086 0.0364,0 0.01683,-0.01683 -0.01098,-0.08723 0,-0.109212 0.03095,-0.0619 0.07969,-0.122973 0.109215,-0.182023 0.03709,-0.07417 -0.0514,-0.0878 -0.07281,-0.109212 -0.04117,-0.04117 -0.04899,-0.194614 -0.07281,-0.218427 -0.04667,-0.04666 -0.229844,0.03069 -0.291235,0 -0.05685,-0.02843 -0.124246,-0.248491 -0.145619,-0.291234 z"
				  id="path72731-2" />
			</g>
			<path
				style="fill:#999999;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 71.154553,33.086866 c 0.654923,-0.231805 1.645657,-0.709562 2.905476,-0.563307 1.224803,-0.128155 2.197828,0.373591 2.668296,0.622603 1.231864,-0.118591 0.722229,-1.630626 0.0593,-2.549706 -1.917221,-0.906547 -3.537964,-1.179016 -5.455184,0.266831 -0.587337,0.741193 -1.082693,1.927102 -0.177885,2.223579 z"
				id="path72786"
				sodipodi:nodetypes="cccccc" />
			<ellipse
				style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#a3a3a3;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path72790"
				cx="73.896973"
				cy="32.953453"
				rx="3.0092447"
				ry="0.84496033" />
		 </g>
	  </g>
	  <rect
		  style="fill:#fcfcfc;fill-opacity:1;stroke:#cccccc;stroke-width:0.282223;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect72379"
		  width="22.275158"
		  height="23.729034"
		  x="-31.684944"
		  y="29.829466" />
	  <path
		  id="rect72381"
		  style="fill:#999999;fill-opacity:1;stroke:#cccccc;stroke-width:0.198908;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m -30.921868,32.166135 c 7.07343,-0.209365 14.11223,-0.302061 21.0339012,0 v 0.611607 c -8.6555012,0.473223 -14.9293112,0.289382 -21.0339012,0 z"
		  sodipodi:nodetypes="ccccc" />
	</g>
 </g>
</svg>

`;

  return dishwasher.concat(dishwasherDoor);
}
