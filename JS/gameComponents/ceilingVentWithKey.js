export default function ceilingVent(room) {
  // functions here

  function ceilingVentKeyClass() {
    if (room.$studyKey?.found) {
      return `dNone`;
    } else {
      return `${room.name}_studyKey`;
    }
  }
  // id = '${room.name}_ceilingVent'
  // class = '${thingClassNames()}
  // class = '${room.name}_ceilingVent
  // data-selector = 'ceilingVent'
  let html = `
  <svg
  id = '${room.name}_ceilingVent'
  class = '${room.name}_ceilingVent'
  xmlns="http://www.w3.org/2000/svg"
  width="169.89125"
  height="82.774994"
  viewBox="0 0 44.950398 21.900884"
  >
  <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-58.297289,-52.225746)">
	<g
		id="$ceilingVent"
		transform="translate(-56.448869,37.200307)">
	  <g
		  id="g9547"
		  transform="matrix(1.5997665,0,0,1.3120924,-81.383163,-4.2467212)">
		 <path
			 style="fill:#c5c500;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 141.46782,39.684214 -1.46905,-0.01526 6.2e-4,-0.66524 0.2219,-0.166094 -0.22127,-0.512996 0.27744,-0.276922 -0.20749,-0.429823 3.5e-4,-0.3742 0.27742,-0.263063 -0.41541,-0.388445 0.47172,-0.553923 -0.20728,-0.651572 0.38876,-0.76189 0.41578,3.86e-4 0.42914,0.527048 -7.6e-4,0.81769 z"
			 id="path9525"
			 sodipodi:nodetypes="ccccccccccccccccc" />
		 <rect
			 style="fill:#7d7d00;fill-opacity:1;stroke:none;stroke-width:0"
			 id="rect9527"
			 width="3.9498391"
			 height="0.12473175"
			 x="-39.220329"
			 y="141.11653"
			 ry="0"
			 transform="rotate(-89.946845)" />
	  </g>
	  <g
		  id="g9679">
		 <rect
			 style="fill:#cccccc;fill-opacity:1;stroke:#000000;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect10048"
			 width="44.70586"
			 height="21.874426"
			 x="114.97746"
			 y="15.038669" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 147.03965,33.223315 -16.81894,0.0788 0.957,1.093719 h 14.92793 z"
			 id="path10050-97-3-7"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 149.3754,17.623447 0.0788,16.818949 1.09372,-0.957006 V 18.557459 Z"
			 id="path10050-08"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 152.01722,17.520534 0.0788,16.818949 1.09372,-0.957006 V 18.454546 Z"
			 id="path10050-87"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 154.64301,17.417101 0.0788,16.818949 1.09372,-0.957006 V 18.351113 Z"
			 id="path10050-4"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 157.30084,17.72636 0.0788,16.81895 1.09372,-0.957006 V 18.660372 Z"
			 id="path10050-2"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 119.35719,18.043423 0.0788,16.818949 1.09372,-0.957006 V 18.977435 Z"
			 id="path10050"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 121.84227,17.832559 0.0788,16.818949 1.09372,-0.957006 V 18.766571 Z"
			 id="path10050-9"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 124.32734,17.973135 0.0788,16.818949 1.09372,-0.957006 V 18.907147 Z"
			 id="path10050-5"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 126.81242,17.902847 0.0788,16.818949 1.09372,-0.957006 V 18.836859 Z"
			 id="path10050-97"
			 sodipodi:nodetypes="ccccc" />
		 <rect
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.00396875;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect10192"
			 width="1.3229166"
			 height="15.875"
			 x="116.41667"
			 y="18.520834"
			 ry="0.88194448" />
		 <path
			 style="fill:#333333;fill-opacity:1;stroke:#333333;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 117.63762,31.748125 -2.68953,2.689527 0.23387,-1.344764 z"
			 id="path10196" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 146.52198,30.056956 -16.81894,0.0788 0.957,1.093719 h 14.92793 z"
			 id="path10050-97-3"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 146.52198,27.080394 -16.81894,0.0788 0.957,1.093719 h 14.92793 z"
			 id="path10050-97-3-0"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 146.52198,24.103833 -16.81894,0.0788 0.957,1.093719 h 14.92793 z"
			 id="path10050-97-3-07"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 145.99281,21.127267 -16.81894,0.0788 0.957,1.093719 h 14.92793 z"
			 id="path10050-97-3-8"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 145.99281,18.150706 -16.81894,0.0788 0.957,1.093719 h 14.92793 z"
			 id="path10050-97-3-87"
			 sodipodi:nodetypes="ccccc" />
		 <g
		 data-selector = "studyKey"
		 class = ${ceilingVentKeyClass()}
			 id="*ventKey">
			<g
				id="g9543"
				transform="matrix(0.81207453,0,0,0.47116194,26.674759,14.64628)">
			  <ellipse
				  style="fill:#c5c500;fill-opacity:1;stroke:#808080;stroke-width:0"
				  id="path9522"
				  cx="140.63777"
				  cy="40.556038"
				  rx="1.6801951"
				  ry="1.4022681"
				  transform="rotate(0.053155)" />
			  <path
				  style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  d="m 139.8207,41.295176 1.5374,0.01693 c -0.0595,0.350344 -0.36091,0.401115 -0.80801,0.51505 -0.48684,-0.165542 -0.83002,-0.21595 -0.72939,-0.531977 z"
				  id="path9529"
				  sodipodi:nodetypes="cccc" />
			</g>
			<g
				id="g9547-7"
				transform="matrix(1.1262074,0,0,0.34753787,-17.691417,17.766491)">
			  <path
				  style="fill:#c5c500;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 141.49176,39.115196 -1.50097,-0.01526 0.009,-0.09622 0.2219,-0.166094 -0.22127,-0.512996 0.13474,-0.346287 -0.0648,-0.360458 0.0432,-1.160339 0.10618,-0.401793 c -0.0449,-1.763883 0.36566,0.747508 -0.0305,-0.927715 l 0.5005,0.01404 0.41042,-0.05106 0.3467,-0.01639 -0.0167,0.895283 z"
				  id="path9525-4"
				  sodipodi:nodetypes="ccccccccccccccc" />
			  <rect
				  style="fill:#7d7d00;fill-opacity:1;stroke:none;stroke-width:0"
				  id="rect9527-9"
				  width="3.6394751"
				  height="0.12473174"
				  x="-38.920254"
				  y="141.11932"
				  ry="0"
				  transform="matrix(0.00100684,-0.99999949,0.99999963,8.5483197e-4,0,0)" />
			</g>
			<g
				id="g9547-7-3"
				transform="matrix(1.1262074,0,0,0.29663657,-17.685718,16.67268)">
			  <path
				  style="fill:#c5c500;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 141.46782,39.684214 -1.46905,-0.01526 6.2e-4,-0.66524 0.2219,-0.166094 -0.22127,-0.512996 0.27744,-0.276922 -0.20749,-0.429823 3.5e-4,-0.3742 0.27742,-0.263063 -0.41541,-0.388445 0.47172,-0.553923 -0.20728,-0.651572 0.38876,-0.76189 0.41578,3.86e-4 0.42914,0.527048 -7.6e-4,0.81769 z"
				  id="path9525-4-4"
				  sodipodi:nodetypes="ccccccccccccccccc" />
			  <rect
				  style="fill:#7d7d00;fill-opacity:1;stroke:none;stroke-width:0"
				  id="rect9527-9-6"
				  width="3.9498391"
				  height="0.12473175"
				  x="-39.220329"
				  y="141.11653"
				  ry="0"
				  transform="rotate(-89.946845)" />
			</g>
		 </g>
	  </g>
	  <g
		  id="g9543-1"
		  transform="matrix(1.2832328,0,0,1.4368559,-36.595552,-9.2007414)">
		 <ellipse
			 style="fill:#c5c500;fill-opacity:1;stroke:#808080;stroke-width:0"
			 id="path9522-3"
			 cx="140.63777"
			 cy="40.556038"
			 rx="1.6801951"
			 ry="1.4022681"
			 transform="rotate(0.053155)" />
		 <path
			 style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 d="m 139.8207,41.295176 1.5374,0.01693 c -0.0595,0.350344 -0.36091,0.401115 -0.80801,0.51505 -0.48684,-0.165542 -0.83002,-0.21595 -0.72939,-0.531977 z"
			 id="path9529-8"
			 sodipodi:nodetypes="cccc" />
	  </g>
	</g>
 </g>
</svg>`;

  return html;
}
