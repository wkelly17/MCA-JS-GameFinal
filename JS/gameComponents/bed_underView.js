import toggleArrows from '../utils/toggleArrows.js';
import navArrowsAreHidden from '../utils/navArrowsArePresent.js';

export default function bedUnderView(room, roomContainer) {
  // functions here

  if (!room.$bedUnderView.inspected) {
    return '';
  } else if (!navArrowsAreHidden()) {
    toggleArrows();
  }

  function bedUnderViewClass() {
    return `"${room.name}_bedUnderViewZoome dVisible`;
  }

  //   @@ View under the bed
  let html = `
  <svg
  id = "${room.name}_bedUnderView"
  class = "${bedUnderViewClass()}"
  width="900"
  height="600"
  viewBox="0 0 240.71991 161.71234"
>
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-29.625527,14.11838)">
	<g
		id="$underBedWhole"
		transform="matrix(3.3488025,0,0,3.3488025,-340.92949,-345.25578)">
	  <rect
		  id="frontWallBackground"
		  class = "frontWallSVG"
		  width="71.88237"
		  height="13.254487"
		  x="110.65299"
		  y="98.882332"
		  ry="0" />
	  <rect
		  style="stroke-width:0.0790083"
		  id="$Floor"
		  class = "floorSVG"
		  width="71.882385"
		  height="35.035114"
		  x="110.65299"
		  y="112.13682" />
	  <rect
		  style="fill:#552200;fill-opacity:1;stroke:#000000;stroke-width:0.0577094;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
		  id="$bedPostLeft"
		  width="6.8856082"
		  height="22.290426"
		  x="113.15005"
		  y="99.280121" />
	  <rect
		  style="fill:#552200;fill-opacity:1;stroke:#000000;stroke-width:0.0577094;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
		  id="$bedPostRight"
		  width="6.8856082"
		  height="22.290426"
		  x="171.84393"
		  y="99.582138" />
	  <path
		  id="$zoomedBedBlanket"
		  style="fill:#999999;fill-opacity:1;stroke:#000000;stroke-width:0.00987229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
		  d="m 116.05542,99.27484 c 0,0 2.35953,-5.7e-4 6.15451,-0.0017 1.77125,-4.33e-4 3.73099,0.04585 6.03284,0.04534 1.91864,-4.33e-4 4.12061,-0.03148 6.27874,-0.04836 2.72171,-0.02127 4.29593,0.11365 6.40169,0.113108 2.02758,-4.34e-4 5.32185,-0.03222 7.38531,-0.03279 2.06475,-4.34e-4 3.8836,-0.0635 5.9099,-0.06405 2.10576,-5.42e-4 4.66358,0.07197 6.64759,0.07143 2.16728,-5.48e-4 2.90036,-0.04329 4.80205,-0.06405 2.9166,-0.03182 4.38455,-0.0011 6.15579,-0.0017 3.79499,-0.0011 6.1558,-0.0017 6.1558,-0.0017 0,0 -0.0269,0.170544 -0.0667,0.423107 -0.0205,0.124594 -0.0436,0.269285 -0.0679,0.423205 -0.0218,0.13612 -0.41372,0.24835 -0.4355,0.39184 -0.0231,0.14339 -0.0461,0.28689 -0.0667,0.42311 -0.0243,0.15393 -0.0474,0.29862 -0.0679,0.42321 -0.0397,0.25256 -0.0666,0.42311 -0.0666,0.42311 -2.93756,-0.003 -2.26213,-0.032 -3.61171,-0.0489 -1.06506,-0.0132 -2.43899,-0.0245 -3.80524,-0.0332 -1.397,-0.009 -2.78375,-0.0152 -3.82317,-0.0185 -1.08428,-0.003 -4.3461,0.0829 -5.85589,0.0744 -1.35855,-0.008 -3.74628,-0.0689 -5.68286,-0.0763 -0.57931,-0.002 -3.05419,0.0261 -5.53291,0.0539 -2.45693,0.0275 -4.91771,0.0545 -5.53803,0.0509 -0.83692,-0.005 -2.23905,-0.0315 -3.65144,-0.0583 -1.38162,-0.0262 -2.77222,-0.0526 -3.65144,-0.0588 -1.06121,-0.007 -3.49123,0.10613 -4.59217,0.0964 -1.01251,-0.009 -4.646,-0.0572 -5.67645,-0.0682 -1.88916,-0.02 -4.16794,0.0623 -6.12119,0.0326 l -4.00389,0.0616 c 0,0 0.0269,-0.17 0.0654,-0.4218 0.0192,-0.12427 0.0423,-0.26842 0.0654,-0.42191 0.0218,-0.13578 0.0436,-0.27885 0.0654,-0.42191 0.0218,-0.14306 0.0436,-0.28613 0.0654,-0.4218 0.0243,-0.153488 0.0461,-0.297638 0.0666,-0.421907 0.0384,-0.251799 0.0654,-0.4218 0.0654,-0.4218"
		  sodipodi:nodetypes="cccsssssssscccccccccccccccccccccsccc" />
	</g>
 </g>
</svg>
<button class = 'closeZoomButton' data-selector = "closeBedZoomButton"> X </button>
 `;

  return (roomContainer.innerHTML = html);
}
