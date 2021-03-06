import toggleArrows from '../utils/toggleArrows.js';
import navArrowsAreHidden from '../utils/navArrowsArePresent.js';
import flashLight from './flashlight.js';

export default function topDownDrawer(room, roomContainer) {
  // functions here

  if (!room.$nightStandDrawer.inspected) {
    return '';
  } else if (!navArrowsAreHidden()) {
    toggleArrows();
  }

  function topDownDrawerClass() {
    return `"${room.name}_topDownDrawer dVisible`;
  }

  //   @@ View under the bed
  let html = `
  <svg
id = "${room.name}_topDownDrawerClass"
class = "${topDownDrawerClass()}"
  xmlns="http://www.w3.org/2000/svg"
  width="444.76395"
  height="413.26767"
  viewBox="0 0 117.67713 109.34374"
  style = "margin: 0 auto">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-37.250774,-17.061487)">
	<g
		id="g79578">
	  <g
		  id="$lookingDownDrawerHandle"
		  transform="matrix(1,0,0,1.0807623,0,-10.208782)">
		 <rect
			 style="fill:#999999;fill-opacity:0.971774;stroke:none;stroke-width:15.7524"
			 id="rect6575"
			 width="4.187799"
			 height="6.3293004"
			 x="95.880005"
			 y="117.91882" />
		 <ellipse
			 style="fill:#999999;fill-opacity:0.971774;stroke:none;stroke-width:14.7492"
			 id="ellipse7282"
			 cx="97.764542"
			 cy="124.93643"
			 rx="6.9098678"
			 ry="1.4687973" />
	  </g>
	  <rect
		  style="fill:#b3b3b3;fill-opacity:0.971774;stroke:none;stroke-width:20.3806"
		  id="rect6567"
		  width="103.84914"
		  height="52.566921"
		  x="42.646389"
		  y="59.823441" />
	  <rect
		  style="fill:#999999;fill-opacity:0.971774;stroke:none;stroke-width:22.6924"
		  id="$lookingDownDrawerBotoom"
		  width="94.564598"
		  height="43.591114"
		  x="47.151764"
		  y="63.403473" />
	  <rect
		  style="fill:#b3b3b3;fill-opacity:0.971774;stroke:none;stroke-width:16.6052"
		  id="$lookingDownDrawerFront"
		  width="110.40773"
		  height="8.1599846"
		  x="42.039864"
		  y="112.04366" />
	  <rect
		  style="fill:#b3b3b3;fill-opacity:0.971774;stroke:none;stroke-width:12.8628"
		  id="$lookingDownSurface"
		  width="117.67713"
		  height="42.946392"
		  x="37.250774"
		  y="17.061487" />
	</g>
 </g>
</svg> 
<button class = 'closeZoomButton' data-selector = "closeDrawerZoomButton"> X </button>
${flashLight(room)}


<svg
id = '${room.name}_nightStandContents'
class = '${room.name}_nightStandContents'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="290.12033"
   height="145.17682"
   viewBox="0 0 76.761007 38.411367"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="ZoomedDrawerContents.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="2.3892506"
     inkscape:cx="158.66712"
     inkscape:cy="112.0395"
     inkscape:document-units="px"
     inkscape:current-layer="g1210"
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
     transform="translate(-47.882863,-76.094796)">
    <g
       id="g1210"
       transform="translate(-18.795151,8.8267407)">
		<g
		data-selector = "nightStandpencil"
         id="*pencil">
        <rect
           style="fill:#aa8800;stroke:none;stroke-width:0.264583"
           id="rect37"
           width="7.701869"
           height="29.142206"
           x="97.791878"
           y="-104.57833"
           ry="0.7340706"
           transform="rotate(90)" />
        <rect
           style="fill:#008000;stroke:none;stroke-width:0.115856"
           id="rect37-8"
           width="7.7018695"
           height="5.5877652"
           x="97.875145"
           y="-77.781013"
           ry="0"
           transform="rotate(90)" />
        <path
           style="fill:#ffd5d5;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="m 72.193244,105.57703 c -2.72637,0.42395 -3.80955,-0.41279 -5.51523,-3.56124 1.37854,-3.039797 1.8352,-4.680927 5.51523,-4.140637 v 7.701877"
           id="path54"
           sodipodi:nodetypes="cccc" />
        <path
           style="fill:#ac9393;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="m 104.04915,97.791893 8.25963,3.741057 -8.25963,3.96081 v -7.701867"
           id="path56" />
        <path
           style="fill:#000000;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="m 112.30878,101.53295 -5.02158,2.31765 0.48284,-1.44854 -0.96568,-1.35196 1.15882,-0.28971 -0.86912,-1.062247 0.67598,-0.28971 z"
           id="path62" />
      </g>
      <g
			id="*scissors"
			data-selector = "nightStandScissors"
         transform="translate(-66.766674,22.746244)">
        <g
           id="g1007">
          <g
             id="g995">
            <ellipse
               style="fill:#808080;fill-opacity:1;stroke:#cccccc;stroke-width:0.296906"
               id="path958"
               cx="211.53964"
               cy="-8.5894041"
               rx="2.5590761"
               ry="6.5666852"
               transform="rotate(21.931991)" />
            <path
               style="fill:#666666;stroke:none;stroke-width:0.302923px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
               d="m 200.8385,65.345943 7.46843,-19.700058 1.89876,-0.869122 -7.97476,21.148591 z"
               id="path975" />
            <ellipse
               style="fill:#ffffff;fill-opacity:1;stroke:#cccccc;stroke-width:0.234673"
               id="path958-0"
               cx="216.30595"
               cy="-56.295162"
               rx="1.8133991"
               ry="5.7892957"
               transform="matrix(0.82236815,0.56895573,-0.3820372,0.92414695,0,0)" />
          </g>
        </g>
        <g
           id="g1007-8"
           transform="matrix(-0.8450542,0,0,1,375.31131,0.02930369)">
          <g
             id="g995-5">
            <ellipse
               style="fill:#808080;fill-opacity:1;stroke:#cccccc;stroke-width:0.296906"
               id="path958-8"
               cx="211.53964"
               cy="-8.5894041"
               rx="2.5590761"
               ry="6.5666852"
               transform="rotate(21.931991)" />
            <path
               style="fill:#666666;stroke:none;stroke-width:0.302923px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
               d="m 200.8385,65.345943 7.46843,-19.700058 1.89876,-0.869122 -7.97476,21.148591 z"
               id="path975-3" />
            <ellipse
               style="fill:#ffffff;fill-opacity:1;stroke:#cccccc;stroke-width:0.234673"
               id="path958-0-0"
               cx="216.30595"
               cy="-56.295162"
               rx="1.8133991"
               ry="5.7892957"
               transform="matrix(0.82236815,0.56895573,-0.3820372,0.92414695,0,0)" />
          </g>
        </g>
      </g>
      <g
			id="$charger"
			data-selector = "nightStandChargingCord"
         transform="translate(-89.441839,-37.951748)">
        <path
           sodipodi:type="spiral"
           style="fill:none;fill-rule:evenodd;stroke:#f9f9f9;stroke-width:0.846667;stroke-miterlimit:4;stroke-dasharray:none"
           id="path1054"
           sodipodi:cx="189.00797"
           sodipodi:cy="118.10305"
           sodipodi:expansion="1"
           sodipodi:revolution="3.0410404"
           sodipodi:radius="10.626814"
           sodipodi:argument="-20.962351"
           sodipodi:t0="0"
           d="m 189.00797,118.10305 c -0.27115,-0.45029 0.4732,-0.58765 0.7484,-0.45065 0.74578,0.37124 0.62161,1.41374 0.1529,1.94747 -0.83841,0.95471 -2.34111,0.71779 -3.14653,-0.14486 -1.18199,-1.26597 -0.82023,-3.28229 0.44261,-4.3456 1.68316,-1.41722 4.22853,-0.92552 5.54466,0.74037 1.65621,2.09635 1.03235,5.17723 -1.03812,6.74373 -2.50761,1.89724 -6.12731,1.14005 -7.94279,-1.33588 -2.13948,-2.9178 -1.24833,-7.07826 1.63363,-9.14185 3.32734,-2.3825 8.02979,-1.35698 10.34092,1.93138 2.62605,3.73644 1.46588,8.98173 -2.22914,11.53998 -4.14526,2.86998 -9.93396,1.57498 -12.73905,-2.52689 -3.11418,-4.55386 -1.68421,-10.88641 2.82465,-13.93811 0.7525,-0.50931 1.5712,-0.91988 2.42888,-1.21982" />
        <g
           id="g1109"
           transform="rotate(180,192.73709,108.36759)">
          <rect
             style="fill:#ffd42a;fill-opacity:1;stroke:none;stroke-width:0.151887"
             id="rect1056-8"
             width="2.800498"
             height="2.6073606"
             x="192.77469"
             y="108.12661"
             ry="0.0063335658" />
          <path
             style="fill:none;stroke:#000000;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 192.77762,108.65222 2.86753,-0.0972"
             id="path1075" />
          <path
             style="fill:none;stroke:#000000;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 192.72901,109.13824 2.86753,-0.0972"
             id="path1075-2" />
          <path
             style="fill:none;stroke:#000000;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 192.82622,109.98878 2.86753,-0.0972"
             id="path1075-8" />
          <path
             style="fill:none;stroke:#000000;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 192.77762,110.4505 2.86753,-0.0972"
             id="path1075-5" />
        </g>
        <rect
           style="fill:#f2f2f2;fill-opacity:1;stroke:none;stroke-width:0.264583"
           id="rect1056"
           width="5.2147207"
           height="4.249032"
           x="184.95207"
           y="105.2198"
           ry="0.010321367" />
      </g>
		<g
		data-selector = "nightStandChapstick"
         id="$chapstick"
         transform="translate(-64.806494,6.8801414)">
        <rect
           style="fill:#5750ff;fill-opacity:1;stroke:none;stroke-width:0.237471"
           id="rect85"
           width="11.201993"
           height="28.391258"
           x="176.40657"
           y="66.118492"
           ry="3.186774" />
        <rect
           style="fill:#000094;fill-opacity:1;stroke:none;stroke-width:0.117701"
           id="rect85-9"
           width="11.201993"
           height="6.9747081"
           x="176.21342"
           y="61.654575"
           ry="1.6519952" />
        <ellipse
           style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.35259"
           id="path925"
           cx="182.15242"
           cy="80.265839"
           rx="3.1384897"
           ry="7.3875213" />
        <text
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:2.46179px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0615448"
           x="-87.650085"
           y="178.81648"
           id="text929"
           transform="matrix(0,-0.97832539,1.0221548,0,0,0)"><tspan
             x="-87.650085"
             y="178.81648"
             style="stroke-width:0.0615448"
             id="tspan931"
             sodipodi:role="line">chapstick</tspan></text>
      </g>
    </g>
  </g>
</svg>
  `;
  //   ! note that which items are rendered is determined within the SVG (e.g. flashlight itself)

  return (roomContainer.innerHTML = html);
}
