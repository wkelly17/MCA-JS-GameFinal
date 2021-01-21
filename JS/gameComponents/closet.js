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
  let html = `
  <svg 
  id = '${room.name}_Closet'
  class = '${room.name}_Closet'
  xmlns="http://www.w3.org/2000/svg" height="285.98398"
  viewBox="0 0 85.465415 75.666598">
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-56.642382,-34.516371)">
	  <g id="$Closet" transform="translate(-0.91308364,1.1739647)">
		  <g 
		  class = '${ClosetDoorLeftClasses()}'
		  transform="matrix(1.0782371,0,0,1.0782371,19.588671,-7.6473314)">
			  <rect
			  id="$closetDoorLeft" data-selector = "closetDoorLeft"
				  style="fill:#918a6f;fill-opacity:1;stroke:none;stroke-width:0.147745;stroke-miterlimit:4;stroke-dasharray:none"
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
		  <g 
		  class = '${ClosetDoorRightClasses()}' 
		  transform="matrix(-1.2326684,0,0,1.0782371,187.16294,-7.6019451)">
			  <rect
			  id="$closetDoorRight" data-selector = "closetDoorRight" 
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
		  <g id="$closetFrame" transform="translate(-0.1452498,-0.39132156)">
			  <path
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
	  </g>
  </g>
</svg>
 `;
  return html;
}
