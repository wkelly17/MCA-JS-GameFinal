export default function closet(room) {
  // functions here

  function ClosetDoorRightClasses() {
    if (room.$closetDoorRight.inspected) {
      return `${room.name}_closetDoorRight ${room.name}_closetDoorRight-inspected`;
    } else {
      return `${room.name}_closetDoorRight`;
    }
  }
  function ClosetDoorLeftClasses() {
    if (room.$closetDoorLeft.inspected) {
      return `${room.name}_closetDoorLeft ${room.name}_closetDoorLeft-inspected`;
    } else {
      return `${room.name}_closetDoorLeft`;
    }
  }

  // id = '${room.name}thing'
  // class = '${ClosetClassNames()}
  let html = `<svg id='${room.name}_Closet' class='${
    room.name
  }_Closet' xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="323.01886" height="285.98398"
  viewBox="0 0 85.465415 75.666598" version="1.1" id="svg2942" inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="closet.svg">
  <defs id="defs2936">
	  <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 37.833299 : 1"
		  inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="85.465415 : 37.833299 : 1"
		  inkscape:persp3d-origin="42.732707 : 25.222199 : 1" id="perspective2971" />
  </defs>
  <sodipodi:namedview id="base" pagecolor="#787878" bordercolor="#666666" borderopacity="1.0"
	  inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.89465724" inkscape:cx="242.47238"
	  inkscape:cy="159.26684" inkscape:document-units="px" inkscape:current-layer="$Closet"
	  inkscape:document-rotation="0" showgrid="false" units="px" inkscape:window-width="1440"
	  inkscape:window-height="847" inkscape:window-x="0" inkscape:window-y="25" inkscape:window-maximized="0"
	  showguides="false" inkscape:snap-nodes="false">
	  <inkscape:grid type="xygrid" id="grid8442" originx="-19.391611" originy="-17.454884" />
  </sodipodi:namedview>
  <metadata id="metadata2939">
	  <rdf:RDF>
		  <cc:Work rdf:about="">
			  <dc:format>image/svg+xml</dc:format>
			  <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
			  <dc:title />
		  </cc:Work>
	  </rdf:RDF>
  </metadata>
  <g  inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1"
	  transform="translate(-56.642382,-34.516371)">
	  <g id="$Closet" transform="translate(-0.91308364,1.1739647)">
		  <rect style="fill:#000000;stroke:none;stroke-width:1.48167;fill-opacity:1" id="rect2408" width="77.884216"
			  height="71.258301" x="61.43684" y="37.47765" ry="0.73407066" />
		  <rect style="fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:1.01867" id="rect2987" width="79.628548"
			  height="2.8496673" x="60.454559" y="43.247635" ry="1.4248337" />
		  <path
		  data-selector = "clothes"
			  style="fill:#008000;stroke:#000000;stroke-width:0.370353px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 64.590254,47.470462 c 3.342775,3.511461 5.137352,0.967385 6.97192,-1.420281 l 6.245678,9.373905 -2.759719,5.113046 -4.066952,-6.249281 0.290496,17.32753 -7.84341,0.284048 -0.145247,-16.475343 -3.340713,5.965218 -1.597731,-6.533327 z"
			  id="path2993" sodipodi:nodetypes="ccccccccccc" />
		  <g id="$closetFrame" transform="translate(-0.1452498,-0.39132156)">
			  <path
			  data-selector = "clothes"
				  style="fill:#6c5d53;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="M 61.582089,109.08188 V 37.868972 L 58.094371,34.127779 57.83349,109.26152 Z" id="path9356" />
			  <path
				  style="fill:#6c5d53;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 58.094371,34.127779 84.786339,-0.260881 -3.41441,4.04746 -77.884211,-0.04539 -3.487718,-3.741193 v 0"
				  id="path9358" />
			  <path
				  style="fill:#6c5d53;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 142.88071,33.866898 -0.13044,75.003302 -3.28397,0.25707 V 37.914358 l 3.41441,-4.04746"
				  id="path9360" />
		  </g>
		  <path
			  style="fill:#787878;stroke:#000000;stroke-width:0.215804px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 67.126924,49.323746 v -4.666051 c -0.04155,-2.859662 0.571724,-2.18569 1.080835,-2.073801 l 0.216167,7.258302 z"
			  id="path2995" sodipodi:nodetypes="ccccc" />
		  <path
  data-selector = "clothes"
			  style="fill:#000080;stroke:#000000;stroke-width:0.370353px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 76.555176,47.440849 c 3.342775,3.511461 5.137352,0.967385 6.97192,-1.420281 l 6.245678,9.373905 -2.759719,5.113046 -4.066952,-6.249281 0.290496,17.327531 -7.843411,0.284047 -0.145247,-16.475343 -3.340712,5.965219 -1.597731,-6.533328 z"
			  id="path2993-5" sodipodi:nodetypes="ccccccccccc" />
		  <path
		  data-selector = "clothes"
			  style="fill:#550000;stroke:#000000;stroke-width:0.370353px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 87.873959,48.166413 c 3.342775,3.511461 5.137352,0.967385 6.97192,-1.420281 l 5.955451,21.273138 -3.63039,1.775456 -2.906054,-14.810924 0.290496,17.327526 -7.843411,0.28405 1.015654,-17.636242 -4.646726,14.38175 -2.758631,-2.325062 z"
			  id="path2993-58" sodipodi:nodetypes="ccccccccccc" />
		  <path
		  data-selector = "clothes"
			  style="fill:#000080;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 120.82456,48.724343 c 4.35338,1.30718 8.70676,0.5425 13.06013,-0.43534 l 2.75715,29.74809 c -1.35399,-0.72357 -5.243,1.69503 -6.23985,2.75714 l -0.14511,-27.13606 -4.35338,0.29022 c -0.0967,9.04535 0.38697,14.56564 0.29023,26.84583 -1.20927,-0.63851 -6.33659,-1.42979 -7.54586,-1.01578 z"
			  id="path3059" sodipodi:nodetypes="ccccccccc" />
		  <path
			  style="fill:#000080;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 95.860947,49.074524 c 4.353373,1.30718 8.706753,0.5425 13.060133,-0.43534 l 2.75714,29.74809 c -1.35398,-0.72357 -5.24299,1.69503 -6.23984,2.75714 l -0.14511,-27.13606 -4.35338,0.29022 c -0.0967,9.04535 0.38697,14.56564 0.29022,26.84583 -1.20927,-0.63851 -6.33658,-1.42979 -7.545852,-1.01578 z"
			  id="path3059-6" sodipodi:nodetypes="ccccccccc" />
		  <path
			  style="fill:#787878;stroke:#000000;stroke-width:0.215804px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 78.67244,50.575803 v -4.666051 c -0.04155,-2.859662 0.571724,-2.18569 1.080835,-2.073801 l 0.216167,7.258302 z"
			  id="path2995-2" sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#787878;stroke:#000000;stroke-width:0.215804px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 90.571674,50.635824 v -4.666051 c -0.04155,-2.859662 0.571724,-2.18569 1.080835,-2.073801 l 0.216167,7.258302 z"
			  id="path2995-0" sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#787878;stroke:#000000;stroke-width:0.215804px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 100.87467,49.526207 v -4.666051 c -0.0416,-2.859662 0.57172,-2.18569 1.08083,-2.073801 l 0.21617,7.258302 z"
			  id="path2995-9" sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#787878;stroke:#000000;stroke-width:0.215804px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 111.91195,49.867716 v -4.666051 c -0.0416,-2.859662 0.57173,-2.18569 1.08084,-2.073801 l 0.21617,7.258302 z"
			  id="path2995-4" sodipodi:nodetypes="ccccc" />
		  <path
			  style="fill:#483737;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 106.88951,47.828528 c 4.35337,1.30718 8.70675,0.5425 13.06013,-0.43534 l 2.75714,29.74809 c -1.35399,-0.72357 -5.24299,1.69503 -6.23984,2.75714 l -0.14512,-27.13606 -4.35337,0.29022 c -0.0967,9.04535 0.38696,14.56564 0.29022,26.84583 -1.20927,-0.63851 -6.33658,-1.42979 -7.54585,-1.01578 z"
			  id="path3059-1" sodipodi:nodetypes="ccccccccc" />
		  <path
			  style="fill:#787878;stroke:#000000;stroke-width:0.215804px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 126.70471,50.149203 v -4.666051 c -0.0416,-2.859662 0.57173,-2.18569 1.08084,-2.073801 l 0.21616,7.258302 z"
			  id="path2995-8" sodipodi:nodetypes="ccccc" />
		  <path
		  data-selector = "wireHanger" class = ${room.$wireHanger.found && 'dNone'}
			  style="fill:#787878;stroke:#000000;stroke-width:0.215804px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			  d="m 135.94811,49.620262 0.0178,-2.040009 0.026,-2.976514 c -0.0416,-2.859662 0.57173,-2.18569 1.08084,-2.073801 l 0.11734,5.180052 0.055,2.428722 z"
			  id="emptyHanger" sodipodi:nodetypes="ccccccc" />
		  <g class='${ClosetDoorLeftClasses()}' id="$closetDoorLeft" transform="matrix(1.0782371,0,0,1.0782371,19.604793,-7.5098992)">
			  <g id="g3168">
				  <rect
				  data-selector = "closetDoorLeft"
					  style="fill:#918a6f;fill-opacity:1;stroke:none; z-index: -1; stroke-width:0.147745;stroke-miterlimit:4;stroke-dasharray:none"
					  id="rect9088-1" width="33.528706" height="66.045692" x="-72.340363" y="41.850704"
					  transform="scale(-1,1)" />
				  <g id="$closetVentsLeft">
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="M 69.61164,44.833124 68.367884,46.847712 43.40979,46.74709 42.207487,44.631764 Z"
						  id="path9071-8" />
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="M 69.778187,49.215479 68.534428,51.230067 43.576346,51.129445 42.374034,49.014119 Z"
						  id="path9071-3-2" />
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="M 69.778187,54.507149 68.534428,56.521737 43.576346,56.421115 42.374034,54.305789 Z"
						  id="path9071-9-9" />
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="M 69.271716,59.269652 68.027957,61.28424 43.069863,61.183618 41.86756,59.068292 Z"
						  id="path9071-32-2" />
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="M 69.271716,64.561322 68.027957,66.575903 43.069863,66.475283 41.86756,64.359962 Z"
						  id="path9071-0-6" />
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="m 69.271726,69.553673 -1.243769,2.01458 -24.958094,-0.10062 -1.202303,-2.11533 z"
						  id="path9071-6-9" />
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="m 69.099321,75.142213 -1.243756,2.01459 -24.958078,-0.10062 -1.202302,-2.11533 z"
						  id="path9071-2-6" />
					  <path
						  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.03756px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
						  d="m 68.873063,79.904723 -1.210499,2.01458 -24.290752,-0.10062 -1.170153,-2.11532 z"
						  id="path9071-61-4" />
				  </g>
				  <path
					  style="fill:#ffdd55;fill-opacity:1;stroke:#800080;stroke-width:0.0130701;stroke-miterlimit:4;stroke-dasharray:none"
					  id="$closethandleLeft" sodipodi:type="arc" sodipodi:cx="-70.686386" sodipodi:cy="74.376556"
					  sodipodi:rx="1.1264311" sodipodi:ry="1.0788327" sodipodi:start="0" sodipodi:end="6.2709687"
					  sodipodi:arc-type="arc"
					  d="m -69.559955,74.376556 a 1.1264311,1.0788327 0 0 1 -1.122991,1.078828 1.1264311,1.0788327 0 0 1 -1.12985,-1.072238 1.1264311,1.0788327 0 0 1 1.116089,-1.085377 1.1264311,1.0788327 0 0 1 1.136668,1.065608"
					  sodipodi:open="true" transform="scale(-1,1)" />
			  </g>
		  </g>
		  <g  class = '${ClosetDoorRightClasses()}'  id="$closetDoorRight" transform="matrix(-1.2326684,0,0,1.0782371,187.10528,-7.5519324)">
			  <rect
			  data-selector = "closetDoorRight"
				  style="fill:#918a6f;fill-opacity:1;stroke:none;stroke-width:0.147745;stroke-miterlimit:4;stroke-dasharray:none"
				  id="rect9088-1-7" width="33.528706" height="66.045692" x="-72.340363" y="41.850704"
				  transform="scale(-1,1)" />
			  <g id="$closetVentsRight">
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="M 69.61164,44.833124 68.367884,46.847712 43.40979,46.74709 42.207487,44.631764 Z"
					  id="path9071-8-5" />
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="M 69.778187,49.215479 68.534428,51.230067 43.576346,51.129445 42.374034,49.014119 Z"
					  id="path9071-3-2-6" />
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="M 69.778187,54.507149 68.534428,56.521737 43.576346,56.421115 42.374034,54.305789 Z"
					  id="path9071-9-9-3" />
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="M 69.271716,59.269652 68.027957,61.28424 43.069863,61.183618 41.86756,59.068292 Z"
					  id="path9071-32-2-9" />
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="M 69.271716,64.561322 68.027957,66.575903 43.069863,66.475283 41.86756,64.359962 Z"
					  id="path9071-0-6-7" />
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="m 69.271726,69.553673 -1.243769,2.01458 -24.958094,-0.10062 -1.202303,-2.11533 z"
					  id="path9071-6-9-8" />
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.05171px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="m 69.099321,75.142213 -1.243756,2.01459 -24.958078,-0.10062 -1.202302,-2.11533 z"
					  id="path9071-2-6-7" />
				  <path
					  style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.03756px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
					  d="m 68.873063,79.904723 -1.210499,2.01458 -24.290752,-0.10062 -1.170153,-2.11532 z"
					  id="path9071-61-4-8" />
			  </g>
			  <path
				  style="fill:#ffdd55;fill-opacity:1;stroke:#800080;stroke-width:0.0130701;stroke-miterlimit:4;stroke-dasharray:none"
				  id="$closetHandleRight" sodipodi:type="arc" sodipodi:cx="-70.686386" sodipodi:cy="74.376556"
				  sodipodi:rx="1.1264311" sodipodi:ry="1.0788327" sodipodi:start="0" sodipodi:end="6.2709687"
				  sodipodi:arc-type="arc"
				  d="m -69.559955,74.376556 a 1.1264311,1.0788327 0 0 1 -1.122991,1.078828 1.1264311,1.0788327 0 0 1 -1.12985,-1.072238 1.1264311,1.0788327 0 0 1 1.116089,-1.085377 1.1264311,1.0788327 0 0 1 1.136668,1.065608"
				  sodipodi:open="true" transform="scale(-1,1)" />
		  </g>
	  </g>
  </g>
</svg>`;
  return html;
}
