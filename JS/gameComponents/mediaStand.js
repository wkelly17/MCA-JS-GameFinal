export default function mediaStand(room) {
  // functions here

  function mediaStandClassNames() {
    if (room.$mediaStand.inspected) {
      return `${room.name}_mediaStand ${room.name}mediaStand-inspected`;
    } else {
      return `${room.name}_mediaStand`;
    }
  }
  // id = '${room.name}_mediaStand'
  // class = 'mediaStandClassNames()}'
  // class = '${room.name}_mediaStand'
  // data-selector = 'mediaStand'
  let mediaBase = `
  <svg
  id = '${room.name}_mediaStand'
  class = '${room.name}_mediaStand'
  xmlns="http://www.w3.org/2000/svg"
  width="296.14035"
  height="137.21863"
  viewBox="0 0 78.353806 36.305763">
	 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-90.603113,11.158866)">
	<g
		id="$MediaStandWhole">
	  <rect
		  style="opacity:1;fill:#5b5142;fill-opacity:1;stroke:#a3a3a3;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect73339"
		  width="78.089218"
		  height="36.04118"
		  x="90.735405"
		  y="-11.026574" />
	  <rect
		  style="opacity:1;fill:#3f382e;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.278082;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect73647"
		  width="22.135387"
		  height="10.252179"
		  x="118.27001"
		  y="-6.7053456" />
	  <rect
		  style="opacity:1;fill:#3f382e;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.296437;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect73647-6"
		  width="22.135387"
		  height="11.650203"
		  x="118.50303"
		  y="7.2748938" />
	  <g
		  id="$leftFixedHinges"
		  transform="translate(2.4530263,-28.554457)">
		 <g
			 id="$halfHingeLeft"
			 transform="rotate(180,88.233149,63.397382)">
			<g
				id="g73409-7-1"
				transform="matrix(0.62554256,0,0,1,32.835423,0)">
			  <rect
				  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73345-1-7"
				  width="3.8961198"
				  height="2.2263541"
				  x="83.791878"
				  y="80.401749" />
			</g>
			<g
				id="$flatheadScrew1-76-2" />
			<g
				id="$flatheadScrew1-7-7-1"
				transform="translate(2.6813371,-1.4833789)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-2-6-6"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-7-8-8"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-73-77-3"
				transform="translate(3.2974702,-0.68889133)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-0-91-0"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-5-3-5"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-4-9-5"
				transform="translate(2.7218722,0.09748917)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-3-5-0"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-2-8-4"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
		 </g>
		 <g
			 id="$halfHingeLeft-0"
			 transform="rotate(180,88.287487,53.065672)">
			<g
				id="g73409-7-1-2"
				transform="matrix(0.62554256,0,0,1,32.835423,0)">
			  <rect
				  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73345-1-7-2"
				  width="3.8961198"
				  height="2.2263541"
				  x="83.791878"
				  y="80.401749" />
			</g>
			<g
				id="$flatheadScrew1-76-2-5" />
			<g
				id="$flatheadScrew1-7-7-1-4"
				transform="translate(2.6813371,-1.4833789)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-2-6-6-4"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-7-8-8-6"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-73-77-3-3"
				transform="translate(3.2974702,-0.68889133)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-0-91-0-9"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-5-3-5-9"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-4-9-5-9"
				transform="translate(2.7218722,0.09748917)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-3-5-0-9"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-2-8-4-0"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
		 </g>
	  </g>
	  <g
		  id="$rightfixedHinges"
		  transform="matrix(1,0,0,0.99645977,10.532563,-29.984565)">
		 <g
			 id="$halfHingeLeft-4"
			 transform="translate(69.910968,-55.907396)">
			<g
				id="g73409-7-1-1"
				transform="matrix(0.62554256,0,0,1,32.835423,0)">
			  <rect
				  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73345-1-7-4"
				  width="3.8961198"
				  height="2.2263541"
				  x="83.791878"
				  y="80.401749" />
			</g>
			<g
				id="$flatheadScrew1-76-2-7" />
			<g
				id="$flatheadScrew1-7-7-1-8"
				transform="translate(2.6813371,-1.4833789)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-2-6-6-9"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-7-8-8-1"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-73-77-3-8"
				transform="translate(3.2974702,-0.68889133)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-0-91-0-6"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-5-3-5-7"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-4-9-5-1"
				transform="translate(2.7218722,0.09748917)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-3-5-0-2"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-2-8-4-3"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
		 </g>
		 <g
			 id="$halfHingeLeft-4-3"
			 transform="translate(69.937792,-35.207473)">
			<g
				id="g73409-7-1-1-8"
				transform="matrix(0.62554256,0,0,1,32.835423,0)">
			  <rect
				  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73345-1-7-4-2"
				  width="3.8961198"
				  height="2.2263541"
				  x="83.791878"
				  y="80.401749" />
			</g>
			<g
				id="$flatheadScrew1-76-2-7-3" />
			<g
				id="$flatheadScrew1-7-7-1-8-3"
				transform="translate(2.6813371,-1.4833789)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-2-6-6-9-4"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-7-8-8-1-1"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-73-77-3-8-5"
				transform="translate(3.2974702,-0.68889133)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-0-91-0-6-3"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-5-3-5-7-0"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-4-9-5-1-3"
				transform="translate(2.7218722,0.09748917)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-3-5-0-2-6"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-2-8-4-3-3"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
		 </g>
	  </g>
	  <rect
		  style="opacity:1;fill:#3f382e;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="$rightMediaInterior"
		  width="19.602413"
		  height="24.918322"
		  x="146.02461"
		  y="-6.5354385" />
	  <g
		  id="$leftMediaInterior"
		  transform="translate(8.6416073,-85.111217)">
		 <rect
			 style="opacity:1;fill:#3f382e;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect74561"
			 width="19.602413"
			 height="24.918322"
			 x="85.55291"
			 y="79.240265" />
		 <rect
			 style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.257995;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect74578"
			 width="19.270168"
			 height="1.3289772"
			 x="85.220665"
			 y="90.370445" />
	  </g>
	</g>
 </g>
</svg>
 `;

  function leftDoorClassNames() {
    if (room.$leftMediaDoor?.inspected) {
      return `${room.name}_leftMediaDoor ${room.name}leftMediaDoor-inspected`;
    } else {
      return `${room.name}_leftMediaDoor`;
    }
  }

  let leftDoor = `
<svg 
id = "leftMediaDoor"
class = "${leftDoorClassNames()}"
xmlns="http://www.w3.org/2000/svg" 
width="83.733315" 
height="102.90324" 
viewBox="0 0 22.154441 27.226482">
   <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-119.72266,8.6507561)">
      <g id="$mediaStandDoorLeft" transform="translate(33.897209,-86.734674)">
         <rect
            style="fill:#5b5142;fill-opacity:1;stroke:#000000;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            id="$mediaDoor" width="21.889858" height="26.961899" x="85.957741" y="78.216209" />
         <path id="$mediaDoorHandle"
            style="fill:#82542f;fill-opacity:1;stroke:none;stroke-width:0.103481;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m 105.13691,85.416954 h 0.30987 c 0.44383,3.612301 0.40218,6.921723 0,9.9981 h -0.30987 c -0.35074,-3.3327 -0.36474,-6.665399 0,-9.9981 z"
            sodipodi:nodetypes="ccccc" />
         <g id="$halfHingeRight" transform="rotate(180,85.5316,91.414048)">
            <g id="$halfMediaHinge">
               <g id="g73409-7-0" transform="matrix(0.31861024,0,0,1,57.094928,0)">
                  <rect
                     style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="rect73345-1-9" width="3.8961198" height="2.2263541" x="83.791878" y="80.401749" />
               </g>
               <g id="$flatheadScrew1-76-1">
                  <ellipse
                     style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="path73349-5-2" cx="84.144798" cy="82.221146" rx="0.16954157" ry="0.16302076" />
                  <rect
                     style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="rect73351-17-6" width="0.24909563" height="0.0470514" x="84.014427" y="82.19603" />
               </g>
               <g id="$flatheadScrew1-0-7-4" transform="translate(-0.03451307,-1.4995929)">
                  <ellipse
                     style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="path73349-8-3-4" cx="84.144798" cy="82.221146" rx="0.16954157" ry="0.16302076" />
                  <rect
                     style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="rect73351-1-22-1" width="0.24909563" height="0.0470514" x="84.014427" y="82.19603" />
               </g>
            </g>
         </g>
         <g id="$halfHingeRight-2" transform="rotate(180,85.555939,81.052338)">
            <g id="$halfMediaHinge-5">
               <g id="g73409-7-0-1" transform="matrix(0.31861024,0,0,1,57.094928,0)">
                  <rect
                     style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="rect73345-1-9-3" width="3.8961198" height="2.2263541" x="83.791878" y="80.401749" />
               </g>
               <g id="$flatheadScrew1-76-1-9">
                  <ellipse
                     style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="path73349-5-2-6" cx="84.144798" cy="82.221146" rx="0.16954157" ry="0.16302076" />
                  <rect
                     style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="rect73351-17-6-4" width="0.24909563" height="0.0470514" x="84.014427" y="82.19603" />
               </g>
               <g id="$flatheadScrew1-0-7-4-5" transform="translate(-0.03451307,-1.4995929)">
                  <ellipse
                     style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="path73349-8-3-4-6" cx="84.144798" cy="82.221146" rx="0.16954157" ry="0.16302076" />
                  <rect
                     style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                     id="rect73351-1-22-1-5" width="0.24909563" height="0.0470514" x="84.014427" y="82.19603" />
               </g>
            </g>
         </g>
      </g>
   </g>
</svg>
`;

  function rightDoorClassNames() {
    if (room.$rightMediaDoor?.inspected) {
      return `${room.name}_rightMediaDoor ${room.name}rightMediaDoor-inspected`;
    } else {
      return `${room.name}_rightMediaDoor`;
    }
  }
  let rightDoor = `
  <svg
  id = "mediaStandDoorRight"
  class = ${rightDoorClassNames()}
  xmlns="http://www.w3.org/2000/svg"
  width="83.733315"
  height="102.90323"
  viewBox="0 0 22.154441 27.22648">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-122.13938,3.0461481)">
	<g
		id="$mediaStandDoorRight"
		transform="translate(36.313935,-81.130066)">
	  <rect
		  style="fill:#5b5142;fill-opacity:1;stroke:#000000;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="$mediaDoor-0"
		  width="21.889858"
		  height="26.961899"
		  x="85.957741"
		  y="78.216209" />
	  <path
		  id="$mediaDoorHandle-2"
		  style="fill:#82542f;fill-opacity:1;stroke:none;stroke-width:0.103481;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 89.79104,85.416954 h 0.309867 c 0.443827,3.612301 0.402177,6.921723 0,9.9981 H 89.79104 c -0.35074,-3.3327 -0.36474,-6.665399 0,-9.9981 z"
		  sodipodi:nodetypes="ccccc" />
	  <g
		  id="$halfHingeRight-9"
		  transform="translate(22.686933,20.252663)">
		 <g
			 id="$halfMediaHinge-56">
			<g
				id="g73409-7-0-13"
				transform="matrix(0.31861024,0,0,1,57.094928,0)">
			  <rect
				  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73345-1-9-31"
				  width="3.8961198"
				  height="2.2263541"
				  x="83.791878"
				  y="80.401749" />
			</g>
			<g
				id="$flatheadScrew1-76-1-8">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-5-2-2"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-17-6-47"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-0-7-4-2"
				transform="translate(-0.03451307,-1.4995929)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-8-3-4-9"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-1-22-1-4"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
		 </g>
	  </g>
	  <g
		  id="$halfHingeRight-2-5"
		  transform="translate(22.73561,-0.31928449)">
		 <g
			 id="$halfMediaHinge-5-0">
			<g
				id="g73409-7-0-1-0"
				transform="matrix(0.31861024,0,0,1,57.094928,0)">
			  <rect
				  style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73345-1-9-3-9"
				  width="3.8961198"
				  height="2.2263541"
				  x="83.791878"
				  y="80.401749" />
			</g>
			<g
				id="$flatheadScrew1-76-1-9-5">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-5-2-6-7"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-17-6-4-4"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
			<g
				id="$flatheadScrew1-0-7-4-5-7"
				transform="translate(-0.03451307,-1.4995929)">
			  <ellipse
				  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.145074;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="path73349-8-3-4-6-4"
				  cx="84.144798"
				  cy="82.221146"
				  rx="0.16954157"
				  ry="0.16302076" />
			  <rect
				  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  id="rect73351-1-22-1-5-8"
				  width="0.24909563"
				  height="0.0470514"
				  x="84.014427"
				  y="82.19603" />
			</g>
		 </g>
	  </g>
	</g>
 </g>
</svg>
`;

  let html = mediaBase.concat(leftDoor).concat(rightDoor);
  return html;
}
