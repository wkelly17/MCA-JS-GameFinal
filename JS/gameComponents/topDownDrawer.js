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
  `;
  //   ! note that which items are rendered is determined within the SVG (e.g. flashlight itself)

  return (roomContainer.innerHTML = html);
}
