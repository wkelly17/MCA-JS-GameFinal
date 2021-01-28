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

  function keyClasses() {
    if (room.$underBedKey.found) {
      return `dNone`;
    } else {
      return `${room.name}_underBedKey`;
    }
  }

  let key = `
  <svg
  id = '${room.name}_underBedKey'
  class = '${keyClasses()}'
  data-selector = 'underBedKey'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="36.791157mm"
  height="12.066278mm"
  viewBox="0 0 36.791157 12.066279"
  version="1.1"
  id="svg2261"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="inventoryKey.svg">
 <defs
	 id="defs2255" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="2.3535765"
	 inkscape:cx="86.424869"
	 inkscape:cy="-0.69546193"
	 inkscape:document-units="mm"
	 inkscape:current-layer="windowKey"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 inkscape:window-width="1440"
	 inkscape:window-height="847"
	 inkscape:window-x="0"
	 inkscape:window-y="25"
	 inkscape:window-maximized="0" />
 <metadata
	 id="metadata2258">
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
	 transform="translate(-62.54778,-88.401327)">
	<g
		id="windowKey"
		style="display:inline"
		transform="matrix(0.79548291,0,0,0.65567065,75.65364,29.668093)">
	  <g
		  id="g3267"
		  transform="matrix(3.8563287,0,0,5.1689532,-85.260942,-373.84757)">
		 <path
			 id="path1574"
			 style="fill:#ffff00;fill-opacity:1;stroke:#ffff00;stroke-width:0.515076;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 d="m 24.488698,91.435609 a 1.522605,1.522605 0 0 1 1.517987,-1.522597 1.522605,1.522605 0 0 1 1.527194,1.513364 1.522605,1.522605 0 0 1 -1.508726,1.531776 1.522605,1.522605 0 0 1 -1.536344,-1.504073 l 1.522494,-0.01849 z" />
		 <path
			 sodipodi:type="spiral"
			 style="fill:none;fill-rule:evenodd;stroke:#f2f2f2;stroke-width:0.515076"
			 id="path1149"
			 sodipodi:cx="28.187864"
			 sodipodi:cy="91.590897"
			 sodipodi:expansion="1"
			 sodipodi:revolution="2.6178427"
			 sodipodi:radius="1.4911951"
			 sodipodi:argument="-9.0126333"
			 sodipodi:t0="0.50488001"
			 d="m 28.759713,91.101193 c 0.337052,0.309485 0.317854,0.847427 0.01048,1.169718 -0.369031,0.386944 -0.997301,0.360824 -1.370511,-0.0051 -0.436983,-0.428401 -0.403895,-1.147287 0.02059,-1.571304 0.487659,-0.487118 1.297347,-0.447034 1.772098,0.03613 0.537319,0.546844 0.490221,1.44746 -0.05167,1.972892 -0.102773,0.09965 -0.220174,0.184028 -0.34721,0.249994" />
		 <path
			 style="fill:#b4b108;fill-opacity:1;stroke:#b4b108;stroke-width:0.515076px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 id="path2229"
			 d="m 24.830218,92.360556 -4.866644,0.02848 -1.593755,-0.483817 1.337616,-1.109935 0.540738,0.597654 0.369978,-0.540736 0.483819,-0.02848 0.512277,0.483817 0.54074,-0.45536 0.626116,0.910719 0.313059,-0.967633 h 0.512279 1.451455 z" />
		 <path
			 style="fill:#b4b108;stroke:#b4b108;stroke-width:0.15431;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 d="m 26.748102,92.526306 0.588434,-0.675316 0.196145,0.278072 -0.574424,0.734902 z"
			 id="path2353" />
		 <path
			 style="fill:none;stroke:#b4b108;stroke-width:0.269557;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 d="m 27.037149,90.23964 0.619071,0.917985 -0.154767,0.229497 -0.619072,-0.897123 z"
			 id="path2916" />
	  </g>
	</g>
 </g>
</svg>
<div class = 'bedPost bedPostLeft'> </div>
<div class = 'bedPost bedPostRight'> </div>
  `;

  return (roomContainer.innerHTML = html.concat(key));
}
