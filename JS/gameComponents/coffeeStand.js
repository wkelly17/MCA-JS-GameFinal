export default function coffeeStand(room) {
  // functions here

  function coffeeStandClassNames() {
    if (room.$coffeeStand.inspected) {
      return `${room.name}_coffeeStand ${room.name}coffeeStand-inspected`;
    } else {
      return `${room.name}_coffeeStand`;
    }
  }
  // class = 'coffeeStandClassNames()}'
  // data-selector = 'coffeeStand'
  let coffeeStand = `
  <svg
  id = '${room.name}_coffeeStand'
  class = '${room.name}_coffeeStand'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="170.91568"
  height="130.66293"
  viewBox="0 0 62.683941 55.473317"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="coffeeStand.js.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="0.41841749"
	 inkscape:cx="-171.77801"
	 inkscape:cy="311.49175"
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
	 transform="translate(-26.49336,-71.566198)">
	<g
		id="g4309"
		transform="translate(-326.4406,192.45957)">
	  <rect
		  style="fill:#9c7e50;fill-opacity:1;stroke-width:0.264533"
		  id="rect4267"
		  width="62.683941"
		  height="6.0295949"
		  x="352.93396"
		  y="-120.89337" />
	  <rect
		  style="fill:#9c7e50;fill-opacity:1;stroke-width:0.207268"
		  id="rect4267-8"
		  width="51.251812"
		  height="4.5273223"
		  x="-116.81974"
		  y="-360.24341"
		  transform="matrix(-3.013695e-4,0.99999995,-0.99999992,-4.1047973e-4,0,0)" />
	  <rect
		  style="fill:#9c7e50;fill-opacity:1;stroke-width:0.207268"
		  id="rect4267-8-9"
		  width="51.251812"
		  height="4.5273223"
		  x="-117.14281"
		  y="-412.85153"
		  transform="matrix(-3.0136836e-4,0.99999995,-0.99999992,-4.1047988e-4,0,0)" />
	  <rect
		  style="fill:#9c7e50;fill-opacity:1;stroke-width:0.325207"
		  id="rect4267-8-0"
		  width="52.761154"
		  height="10.826606"
		  x="357.74713"
		  y="-92.290482"
		  transform="matrix(0.99994108,-0.01085542,0.00196458,0.99999807,0,0)" />
	</g>
 </g>
</svg>
 `;

  let coffeeMaker = ` 
<svg
id = '${room.name}_coffeeMaker'
class = '${room.name}_coffeeMaker'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="48.015759"
   height="57.435265"
   viewBox="0 0 12.704171 15.196414"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="$coffeeMaker.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="6.8578978"
     inkscape:cx="42.715069"
     inkscape:cy="31.713499"
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
       originx="-24.589385"
       originy="-40.879424" />
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
     transform="translate(-61.84013,-57.940941)">
    <rect
       style="opacity:1;fill:#808080;fill-opacity:1;stroke:none;stroke-width:0.217353;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="$coffeebackground"
       width="11.212317"
       height="15.17865"
       x="61.852039"
       y="57.958706"
       ry="0.68372303" />
    <path
       style="fill:#1a1a1a;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 63.649945,67.699669 h 6.359909 c 0.0416,1.229062 0.18434,3.665688 -0.489225,3.38962 l -5.091523,0.05132 c -1.303494,-0.627179 -1.081797,-2.221793 -0.779161,-3.44094 z"
       id="$coffee"
       sodipodi:nodetypes="ccccc" />
    <g
       id="$coffeePot">
      <path
         style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 64.31389,71.124235 5.486292,-5e-6 c 0.645752,-2.317872 0.624382,-3.85448 -1.083278,-5.24168 L 64.733226,65.8476 c -1.42917,1.758878 -1.781648,3.517757 -0.419336,5.276635 z"
         id="path67935"
         sodipodi:nodetypes="ccccc" />
      <path
         style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 69.590518,66.930888 2.061726,-0.03494 -0.0349,4.018622 -1.04833,-0.03494 v -2.93534 h -0.48923 z"
         id="path67941" />
      <path
         style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.238768;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path67945"
         sodipodi:type="arc"
         sodipodi:cx="-65.223511"
         sodipodi:cy="69.572525"
         sodipodi:rx="0.30250105"
         sodipodi:ry="2.1561272"
         sodipodi:start="0"
         sodipodi:end="6.270968"
         sodipodi:open="true"
         sodipodi:arc-type="arc"
         d="m -64.92101,69.572525 a 0.30250105,2.1561272 0 0 1 -0.301577,2.156117 0.30250105,2.1561272 0 0 1 -0.303419,-2.142946 0.30250105,2.1561272 0 0 1 0.299723,-2.169208 0.30250105,2.1561272 0 0 1 0.305251,2.129696"
         transform="matrix(0.04329373,-0.99906239,0.99996441,0.00843695,0,0)" />
    </g>
    <path
       style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path67947"
       sodipodi:type="arc"
       sodipodi:cx="66.808121"
       sodipodi:cy="65.734352"
       sodipodi:rx="0.26205352"
       sodipodi:ry="0.1079044"
       sodipodi:start="0"
       sodipodi:end="6.270968"
       sodipodi:open="true"
       sodipodi:arc-type="arc"
       d="m 67.070174,65.734352 a 0.26205352,0.1079044 0 0 1 -0.261253,0.107904 0.26205352,0.1079044 0 0 1 -0.262849,-0.107245 0.26205352,0.1079044 0 0 1 0.259648,-0.108559 0.26205352,0.1079044 0 0 1 0.264435,0.106582" />
    <g
       id="$coffeePotBase"
       transform="translate(-0.04431915,0.08728027)">
      <rect
         style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect67949"
         width="11.226346"
         height="2.1102154"
         x="61.882328"
         y="70.939865"
         ry="0.58866882" />
      <rect
         style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.302175;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect67951"
         width="1.2661291"
         height="13.547583"
         x="61.882328"
         y="57.940941"
         ry="0.48534954" />
      <rect
         style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.40113;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect67953"
         width="2.8283579"
         height="15.146859"
         x="71.715942"
         y="57.940945"
         ry="0.53268719" />
      <rect
         style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect67955"
         width="10.719893"
         height="1.8991939"
         x="61.84013"
         y="57.983147"
         ry="0.48534909" />
    </g>
    <rect
       style="opacity:1;fill:#808080;fill-opacity:1;stroke:none;stroke-width:0.219724;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="$CoffeeWaterFill"
       width="0.89564854"
       height="9.6282234"
       x="72.655212"
       y="59.644428"
       ry="0.53268826" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.811914,67.869401 0.59623,-0.0074"
       id="path67961" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.811914,66.811066 0.59623,-0.0074"
       id="path67961-9" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.777024,65.840715 0.59623,-0.0074"
       id="path67961-6" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.811914,64.958983 0.59623,-0.0074"
       id="path67961-7" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.811914,64.043363 0.59623,-0.0074"
       id="path67961-77" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.811914,63.106899 0.59623,-0.0074"
       id="path67961-63" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.811914,62.048566 0.59623,-0.0074"
       id="path67961-5" />
    <path
       style="fill:none;stroke:#000000;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 72.811914,60.990232 0.59623,-0.0074"
       id="path67961-3" />
    <text
       xml:space="preserve"
       style="font-size:0.364651px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';stroke-width:0.136744"
       x="68.139511"
       y="64.764633"
       id="text68022"
       transform="scale(1.0665252,0.93762435)"><tspan
         sodipodi:role="line"
         id="tspan68020"
         x="68.139511"
         y="64.764633"
         style="stroke-width:0.136744">max</tspan></text>
    <rect
       style="opacity:1;fill:#000080;fill-opacity:1;stroke:none;stroke-width:0.0559779;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect68024"
       width="1.0321084"
       height="4.7433066"
       x="72.584427"
       y="64.562386"
       ry="0" />
  </g>
</svg>
`;

  let blender = `
  <svg
  id = '${room.name}_blender'
  class = '${room.name}_blender'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="52.672722"
  height="83.162537"
  viewBox="0 0 13.936326 22.003421"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="blender.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="7.0203245"
	 inkscape:cx="37.425364"
	 inkscape:cy="42.300523"
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
		originx="-37.653282"
		originy="-48.228616" />
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
	 transform="translate(-74.904035,-65.290124)">
	<g
		id="$blenderWhole">
	  <path
		  id="$blenderBase"
		  style="fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.39519;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 77.68711,82.617439 c 3.35143,-0.722104 6.53712,-0.665364 9.5724,0.09833 1.49202,1.279657 1.39209,2.96555 1.58085,4.577778 H 75.90865 c 0.16561,-1.65712 -0.17645,-3.431193 1.77846,-4.676108 z"
		  sodipodi:nodetypes="ccccc" />
	  <rect
		  style="fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.498475;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect11678"
		  width="2.6479313"
		  height="1.6203758"
		  x="81.146271"
		  y="80.93145"
		  ry="0.47425631" />
	  <path
		  style="fill:none;stroke:#000000;stroke-width:0.498332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 78.15556,68.806263 c -1.3056,-0.116838 -2.83426,2.358427 -3.00202,5.067521 -0.0237,1.748064 1.24924,4.947738 3.26206,4.876118"
		  id="$blenderHandle"
		  sodipodi:nodetypes="ccc" />
	  <rect
		  style="fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.777807;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="$blenderPitcher"
		  width="8.8923063"
		  height="14.306733"
		  x="78.063599"
		  y="67.217537"
		  ry="0.96994537" />
	  <path
		  style="fill:#666666;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 81.18579,81.524271 -1.1066,-1.936546 1.38325,1.383247 -0.0395,-2.134153 0.63234,1.857504 0.67186,-1.659898 0.23713,1.659898 0.79043,-1.620377 -0.31617,1.738942 1.18564,-0.869471 -0.90899,1.659898 z"
		  id="$blenderBlade" />
	  <g
		  id="$blenderTop">
		 <path
			 style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 80.2271,67.66684 c -0.007,-0.740823 -0.11266,-2.458923 -0.0224,-2.222468 h 4.57963 c 0.15369,-0.161539 0.0308,1.520836 0.0449,2.289815"
			 id="path68694"
			 sodipodi:nodetypes="cccc" />
		 <rect
			 style="fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.482427;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect11688"
			 width="8.8225212"
			 height="1.9081787"
			 x="78.13932"
			 y="67.217857"
			 ry="0.5291667" />
	  </g>
	  <g
		  id="$blenderPower"
		  transform="translate(-29.129129,25.8181)">
		 <rect
			 style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.47625;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect11692"
			 width="3.8650365"
			 height="1.4588618"
			 x="106.7635"
			 y="56.93483"
			 ry="0.5291667" />
		 <text
			 xml:space="preserve"
			 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.1012px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.412948"
			 x="114.61804"
			 y="54.15456"
			 id="text11696"
			 transform="scale(0.93468811,1.0698756)"><tspan
				sodipodi:role="line"
				id="tspan11698"
				x="114.61804"
				y="54.15456">Power</tspan></text>
	  </g>
	  <g
		  id="g11703-8"
		  transform="translate(-23.842112,25.910839)">
		 <rect
			 style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.47625;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect11692-3"
			 width="3.8650365"
			 height="1.4588618"
			 x="106.7635"
			 y="56.93483"
			 ry="0.5291667" />
		 <text
			 xml:space="preserve"
			 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.1012px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.412948"
			 x="114.88155"
			 y="54.172268"
			 id="text11696-2"
			 transform="scale(0.93468811,1.0698756)"><tspan
				sodipodi:role="line"
				id="tspan11753"
				x="114.88155"
				y="54.172268">Pulse</tspan></text>
	  </g>
	  <g
		  id="g11703-4"
		  transform="translate(-29.125808,27.97266)">
		 <rect
			 style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.409493;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect11692-8"
			 width="2.7850997"
			 height="1.4967543"
			 x="106.7635"
			 y="56.93483"
			 ry="0.54291129" />
		 <text
			 xml:space="preserve"
			 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.670278px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.38806"
			 x="121.98572"
			 y="50.890717"
			 id="text11696-7"
			 transform="scale(0.87835533,1.1384914)"><tspan
				sodipodi:role="line"
				id="tspan11767"
				x="121.98572"
				y="50.890717"
				style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.670278px;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.38806">1 - Low</tspan></text>
	  </g>
	  <g
		  id="g11703-4-2"
		  transform="translate(-25.663958,27.955041)">
		 <rect
			 style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.409493;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect11692-8-3"
			 width="2.7850997"
			 height="1.4967543"
			 x="106.7635"
			 y="56.93483"
			 ry="0.54291129" />
		 <text
			 xml:space="preserve"
			 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.670278px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.38806"
			 x="121.98572"
			 y="50.890717"
			 id="text11696-7-3"
			 transform="scale(0.87835533,1.1384914)"><tspan
				sodipodi:role="line"
				id="tspan11817"
				x="121.98572"
				y="50.890717">2 - Med</tspan></text>
	  </g>
	  <g
		  id="g11703-4-21"
		  transform="translate(-22.151246,27.954377)">
		 <rect
			 style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.409493;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect11692-8-2"
			 width="2.7850997"
			 height="1.4967543"
			 x="106.7635"
			 y="56.93483"
			 ry="0.54291129" />
		 <text
			 xml:space="preserve"
			 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.670278px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.38806"
			 x="121.98572"
			 y="50.890717"
			 id="text11696-7-4"
			 transform="scale(0.87835533,1.1384914)"><tspan
				sodipodi:role="line"
				id="tspan11821"
				x="121.98572"
				y="50.890717">3 - High</tspan></text>
	  </g>
	</g>
 </g>
</svg>
`;

  let fruitBowl = `
  <svg
  id = '${room.name}_fruitBowl'
  class = '${room.name}_fruitBowl'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="107.25735"
  height="49.56274"
  viewBox="0 0 28.378511 13.113475"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="fruitBowl.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.5096991"
	 inkscape:cx="59.065747"
	 inkscape:cy="2.0103553"
	 inkscape:document-units="px"
	 inkscape:current-layer="$pictureWhole"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 units="px"
	 inkscape:window-width="776"
	 inkscape:window-height="847"
	 inkscape:window-x="664"
	 inkscape:window-y="25"
	 inkscape:window-maximized="0"
	 showguides="false">
	<inkscape:grid
		type="xygrid"
		id="grid8442"
		originx="-30.373363"
		originy="-46.13428" />
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
	 transform="translate(-67.624124,-63.195777)">
	<g
		id="$pictureWhole">
	  <g
		  id="$fruitBowl"
		  transform="translate(-37.979923,13.98233)">
		 <g
			 id="g11010"
			 style="fill:url(#meshgradient11012);fill-opacity:1"
			 transform="rotate(8.8561767,87.643306,19.932658)">
			<path
				id="path10955"
				style="opacity:0.98;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
				d="m 115.70997,50.210278 c 0,1.145512 -0.84375,2.320627 -1.48632,2.078612 -0.26835,-0.101069 -0.5148,-0.125945 -0.77956,-0.02269 -0.82053,0.320011 -1.51681,-1.149324 -1.52179,-2.04323 -0.006,-1.145488 1.3613,-2.174082 1.66112,-1.523446 0.12346,0.267926 0.17282,0.159461 0.47314,-0.128715 0.29701,-0.285006 1.55235,0.567285 1.56056,1.305033"
				sodipodi:nodetypes="csssssc" />
			<path
				style="fill:none;fill-opacity:1;stroke:#552200;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 113.75603,48.843087 c 0.005,-0.128376 -0.01,-0.258286 0,-0.386294 0.021,-0.273323 0.13972,-0.483074 0.35539,-0.648976 0.0762,-0.05863 0.13699,-0.09271 0.23178,-0.09271 0.11087,0 0.22381,0.01545 0.33994,0.01545 0.009,0 0.0558,-0.006 0.0618,0 0.004,0.0037 0,0.01029 0,0.01545"
				id="path10960" />
		 </g>
		 <g
			 id="g11010-4"
			 style="fill:url(#meshgradient11047);fill-opacity:1"
			 transform="matrix(1.1749972,-0.26767075,0.27495392,1.1438731,-35.220164,27.349009)">
			<path
				id="path10955-9"
				style="opacity:0.98;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
				d="m 115.70997,50.210278 c 0,1.145512 -0.84375,2.320627 -1.48632,2.078612 -0.26835,-0.101069 -0.5148,-0.125945 -0.77956,-0.02269 -0.82053,0.320011 -1.51681,-1.149324 -1.52179,-2.04323 -0.006,-1.145488 1.3613,-2.174082 1.66112,-1.523446 0.12346,0.267926 0.17282,0.159461 0.47314,-0.128715 0.29701,-0.285006 1.55235,0.567285 1.56056,1.305033"
				sodipodi:nodetypes="csssssc" />
			<path
				style="fill:none;fill-opacity:1;stroke:#552200;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 113.75603,48.843087 c 0.005,-0.128376 -0.01,-0.258286 0,-0.386294 0.021,-0.273323 0.13972,-0.483074 0.35539,-0.648976 0.0762,-0.05863 0.13699,-0.09271 0.23178,-0.09271 0.11087,0 0.22381,0.01545 0.33994,0.01545 0.009,0 0.0558,-0.006 0.0618,0 0.004,0.0037 0,0.01029 0,0.01545"
				id="path10960-4" />
		 </g>
		 <g
			 id="g11010-2"
			 style="fill:#00ff00;fill-opacity:1"
			 transform="matrix(1.1743077,0,0,1.1132181,-15.950849,-4.5672724)">
			<g
				id="g11111"
				transform="translate(-2.179975,2.4954977)">
			  <path
				  id="path10955-3"
				  style="opacity:0.98;fill:#00ff00;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
				  d="m 115.70997,50.210278 c 0,1.145512 -0.84375,2.320627 -1.48632,2.078612 -0.26835,-0.101069 -0.5148,-0.125945 -0.77956,-0.02269 -0.82053,0.320011 -1.51681,-1.149324 -1.52179,-2.04323 -0.006,-1.145488 1.3613,-2.174082 1.66112,-1.523446 0.12346,0.267926 0.17282,0.159461 0.47314,-0.128715 0.29701,-0.285006 1.55235,0.567285 1.56056,1.305033"
				  sodipodi:nodetypes="csssssc" />
			  <path
				  style="fill:none;fill-opacity:1;stroke:#552200;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 113.75603,48.843087 c 0.005,-0.128376 -0.01,-0.258286 0,-0.386294 0.021,-0.273323 0.13972,-0.483074 0.35539,-0.648976 0.0762,-0.05863 0.13699,-0.09271 0.23178,-0.09271 0.11087,0 0.22381,0.01545 0.33994,0.01545 0.009,0 0.0558,-0.006 0.0618,0 0.004,0.0037 0,0.01029 0,0.01545"
				  id="path10960-8" />
			</g>
		 </g>
		 <g
			 id="g11010-5"
			 style="fill:#ffff00;fill-opacity:1"
			 transform="matrix(1.185112,0,0,1.0754057,-11.776943,-4.480583)">
			<g
				id="g11115">
			  <path
				  id="path10955-2"
				  style="opacity:0.98;fill:#ffcc00;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
				  d="m 111.25082,53.678993 c 0.20685,1.12668 -0.41082,2.434841 -1.08653,2.312841 -0.28219,-0.05095 -0.52908,-0.03091 -0.77084,0.118457 -0.74926,0.462922 -1.69942,-0.856523 -1.86574,-1.734834 -0.21276,-1.125572 0.94632,-2.384165 1.3587,-1.798367 0.16981,0.241227 0.19878,0.125631 0.44212,-0.212039 0.24066,-0.333955 1.62927,0.277634 1.77057,1.001771"
				  sodipodi:nodetypes="csssssc" />
			  <path
				  style="fill:none;fill-opacity:1;stroke:#552200;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 109.08211,52.687123 c -0.0183,-0.127169 -0.0565,-0.252234 -0.0698,-0.379944 -0.0287,-0.272621 0.0502,-0.500363 0.23236,-0.702483 0.0644,-0.07143 0.11799,-0.115924 0.21122,-0.133041 0.10905,-0.02002 0.22293,-0.02522 0.33715,-0.04619 0.009,-0.0016 0.0538,-0.01598 0.0608,-0.01116 0.005,0.0029 0.002,0.01012 0.003,0.0152"
				  id="path10960-2" />
			</g>
		 </g>
		 <g
			 id="g11169"
			 transform="translate(-1.7798677,8.9497431)">
			<path
				style="fill:#ffcc00;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 121.5537,51.661508 c 3.25017,-0.778759 5.15373,-0.728903 7.24492,-3.362023 3.31652,-4.330422 1.85341,-5.368159 1.70469,-7.955209 -1.38644,4.349497 -4.96409,7.97227 -8.94961,11.317232 z"
				id="path11133"
				sodipodi:nodetypes="cccc" />
			<path
				style="fill:none;stroke:#554400;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				d="m 121.79047,51.566803 c 5.02101,-2.18101 8.18679,-5.650371 8.66549,-10.985764"
				id="path11135"
				sodipodi:nodetypes="cc" />
		 </g>
		 <g
			 id="g11169-4"
			 transform="matrix(1.1902542,-0.44212012,0.75120165,0.70052473,-56.873697,78.649423)">
			<path
				style="fill:#ffcc00;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 121.5537,51.661508 c 3.25017,-0.778759 5.15373,-0.728903 7.24492,-3.362023 3.31652,-4.330422 1.85341,-5.368159 1.70469,-7.955209 -1.38644,4.349497 -4.96409,7.97227 -8.94961,11.317232 z"
				id="path11133-6"
				sodipodi:nodetypes="cccc" />
			<path
				style="fill:none;stroke:#554400;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				d="m 121.79047,51.566803 c 5.02101,-2.18101 8.18679,-5.650371 8.66549,-10.985764"
				id="path11135-9"
				sodipodi:nodetypes="cc" />
		 </g>
		 <g
			 id="g11169-6"
			 transform="matrix(0.93446863,-0.34384079,0.35329565,0.86326753,-7.4059846,59.266978)">
			<path
				style="fill:#ffcc00;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 121.5537,51.661508 c 3.25017,-0.778759 5.15373,-0.728903 7.24492,-3.362023 3.31652,-4.330422 1.85341,-5.368159 1.70469,-7.955209 -1.38644,4.349497 -4.96409,7.97227 -8.94961,11.317232 z"
				id="path11133-4"
				sodipodi:nodetypes="cccc" />
			<path
				style="fill:none;stroke:#554400;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				d="m 121.79047,51.566803 c 5.02101,-2.18101 8.18679,-5.650371 8.66549,-10.985764"
				id="path11135-2"
				sodipodi:nodetypes="cc" />
		 </g>
		 <path
			 style="fill:#000080;stroke:#000000;stroke-width:0.253781px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 110.66991,62.088066 18.39568,0.111725 c 3.69357,-2.567138 4.28287,-5.275283 4.76546,-7.988275 l -28.08032,0.05586 c 0.46027,3.157957 2.57159,5.544513 4.91918,7.820688 z"
			 id="path10953"
			 sodipodi:nodetypes="ccccc" />
	  </g>
	</g>
 </g>
</svg>

`;

  let saltShaker = `
  <svg
  id = '${room.name}_saltShaker'
  class = '${room.name}_saltShaker'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="12.211822"
   height="22.038513"
   viewBox="0 0 3.2310448 5.8310232"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="saltShaker.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="2.0918193"
     inkscape:cx="0.12912578"
     inkscape:cy="0.73692278"
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
       originx="-44.320073"
       originy="-52.531511" />
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
     transform="translate(-81.570822,-69.593025)">
    <g
       id="$saltShaker"
       transform="matrix(0.49446693,0,0,0.49446693,31.248503,45.456639)">
      <rect
         style="opacity:0.634568;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.494422;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect11852"
         width="6.1442866"
         height="9.5577793"
         x="101.9659"
         y="51.007332"
         ry="0.73146272" />
      <path
         style="opacity:1;fill:#999999;fill-opacity:1;stroke:none;stroke-width:0.472735;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path11854"
         sodipodi:type="arc"
         sodipodi:cx="105.03805"
         sodipodi:cy="50.690365"
         sodipodi:rx="3.2672"
         sodipodi:ry="1.877421"
         sodipodi:start="0"
         sodipodi:end="6.270968"
         sodipodi:open="true"
         sodipodi:arc-type="arc"
         d="m 108.30525,50.690365 a 3.2672,1.877421 0 0 1 -3.25722,1.877412 3.2672,1.877421 0 0 1 -3.27712,-1.865944 3.2672,1.877421 0 0 1 3.2372,-1.88881 3.2672,1.877421 0 0 1 3.29689,1.854405" />
      <path
         style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.265466;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path11856"
         sodipodi:type="arc"
         sodipodi:cx="102.34269"
         sodipodi:cy="49.97401"
         sodipodi:rx="0.18022151"
         sodipodi:ry="0.17320891"
         sodipodi:start="0"
         sodipodi:end="6.270968"
         sodipodi:open="true"
         sodipodi:arc-type="arc"
         d="m 102.52291,49.97401 a 0.18022151,0.17320891 0 0 1 -0.17967,0.173209 0.18022151,0.17320891 0 0 1 -0.18077,-0.17215 0.18022151,0.17320891 0 0 1 0.17857,-0.17426 0.18022151,0.17320891 0 0 1 0.18186,0.171085" />
      <use
         id="use12121"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(-0.04388816,0.80537404)" />
      <use
         id="use12127"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(0.40924883,1.6148514)" />
      <use
         id="use12129"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.177832,1.915816)" />
      <use
         id="use12131"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.2223902,1.5236131)" />
      <use
         id="use12133"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(0.49955933,0.96097981)" />
      <use
         id="use12135"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(0.56294848,0.21273343)" />
      <use
         id="use12137"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.2304427,0.93116207)" />
      <use
         id="use12139"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.1995908,0.52126726)" />
      <use
         id="use12141"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(0.99646882,-0.06185605)" />
      <use
         id="use12143"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.446836,-0.78030157)" />
      <use
         id="use12145"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.5348357,-0.3189372)" />
      <use
         id="use12147"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.7603495,0.21581555)" />
      <use
         id="use12149"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.9693178,0.88489692)" />
      <use
         id="use12151"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.9660668,1.3605577)" />
      <use
         id="use12153"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(1.8042148,1.9928427)" />
      <use
         id="use12157"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.5842171,1.5595888)" />
      <use
         id="use12159"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.443999,1.1559955)" />
      <use
         id="use12161"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.8089822,0.71648076)" />
      <use
         id="use12163"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.4183661,0.21081816)" />
      <use
         id="use12165"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.9355301,-0.22534183)" />
      <use
         id="use12167"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.4349996,-0.38419939)" />
      <use
         id="use12169"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.3183195,-0.91048088)" />
      <use
         id="use12171"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(2.9175845,-0.71854718)" />
      <use
         id="use12173"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(3.5371454,-0.77358999)" />
      <use
         id="use12175"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(3.6097105,-0.30659905)" />
      <use
         id="use12177"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(3.2050678,0.28333381)" />
      <use
         id="use12179"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(3.1919883,1.1254405)" />
      <use
         id="use12181"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(3.8374395,0.78195748)" />
      <use
         id="use12183"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(3.3935473,1.8821015)" />
      <use
         id="use12185"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(3.9203277,1.5157497)" />
      <use
         id="use12187"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.1707697,1.9286807)" />
      <use
         id="use12189"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.3537923,1.1904537)" />
      <use
         id="use12191"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.8299246,1.723926)" />
      <use
         id="use12193"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(5.1293821,1.2320736)" />
      <use
         id="use12195"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.6863796,0.66512193)" />
      <use
         id="use12197"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(5.3030653,0.58550722)" />
      <use
         id="use12199"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.1867496,0.22703046)" />
      <use
         id="use12201"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.9336136,0.20232046)" />
      <use
         id="use12203"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.9436491,-0.44498652)" />
      <use
         id="use12205"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.4307757,-0.39817467)" />
      <use
         id="use12207"
         inkscape:spray-origin="#path11856"
         xlink:href="#path11856"
         x="0"
         y="0"
         width="100%"
         height="100%"
         transform="translate(4.082969,-0.63356521)" />
      <path
         style="fill:#ffffff;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 101.95895,52.404173 0.0248,7.334107 c 0.003,0.913847 0.55303,0.719708 0.94154,0.867209 l 4.31127,-0.04956 c 0.39779,-0.04224 0.81616,0.135077 0.91676,-0.966317 l -0.0495,-7.259775 c -2.08473,0.46207 -4.12606,0.403281 -6.14487,0.07434 z"
         id="path67211"
         sodipodi:nodetypes="ccccccc" />
    </g>
  </g>
</svg>
`;

  let pepperShaker = `
  <svg
  id = '${room.name}_pepperShaker'
  class = '${room.name}_pepperShaker'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="12.211822"
  height="22.038513"
  viewBox="0 0 3.2310448 5.8310232"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="pepperShaker.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="2.0918193"
	 inkscape:cx="28.225465"
	 inkscape:cy="29.922186"
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
		originx="-36.886252"
		originy="-44.809574" />
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
	 transform="translate(-74.136999,-61.87109)">
	<g
		id="$pepperShaker"
		transform="matrix(0.49446693,0,0,0.49446693,23.81468,37.734704)">
	  <rect
		  style="opacity:0.634568;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.494422;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect11852-2"
		  width="6.1442866"
		  height="9.5577793"
		  x="101.9659"
		  y="51.007332"
		  ry="0.73146272" />
	  <path
		  style="opacity:1;fill:#999999;fill-opacity:1;stroke:none;stroke-width:0.472735;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path11854-6"
		  sodipodi:type="arc"
		  sodipodi:cx="105.03805"
		  sodipodi:cy="50.690365"
		  sodipodi:rx="3.2672"
		  sodipodi:ry="1.877421"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 108.30525,50.690365 a 3.2672,1.877421 0 0 1 -3.25722,1.877412 3.2672,1.877421 0 0 1 -3.27712,-1.865944 3.2672,1.877421 0 0 1 3.2372,-1.88881 3.2672,1.877421 0 0 1 3.29689,1.854405" />
	  <path
		  style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.265466;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path11856-0"
		  sodipodi:type="arc"
		  sodipodi:cx="102.34269"
		  sodipodi:cy="49.97401"
		  sodipodi:rx="0.18022151"
		  sodipodi:ry="0.17320891"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 102.52291,49.97401 a 0.18022151,0.17320891 0 0 1 -0.17967,0.173209 0.18022151,0.17320891 0 0 1 -0.18077,-0.17215 0.18022151,0.17320891 0 0 1 0.17857,-0.17426 0.18022151,0.17320891 0 0 1 0.18186,0.171085" />
	  <use
		  id="use12121-0"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(-0.04388816,0.80537404)" />
	  <use
		  id="use12127-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(0.40924883,1.6148514)" />
	  <use
		  id="use12129-0"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.177832,1.915816)" />
	  <use
		  id="use12131-9"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.2223902,1.5236131)" />
	  <use
		  id="use12133-7"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(0.49955933,0.96097981)" />
	  <use
		  id="use12135-5"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(0.56294848,0.21273343)" />
	  <use
		  id="use12137-0"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.2304427,0.93116207)" />
	  <use
		  id="use12139-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.1995908,0.52126726)" />
	  <use
		  id="use12141-0"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(0.99646882,-0.06185605)" />
	  <use
		  id="use12143-2"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.446836,-0.78030157)" />
	  <use
		  id="use12145-6"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.5348357,-0.3189372)" />
	  <use
		  id="use12147-6"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.7603495,0.21581555)" />
	  <use
		  id="use12149-0"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.9693178,0.88489692)" />
	  <use
		  id="use12151-5"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.9660668,1.3605577)" />
	  <use
		  id="use12153-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(1.8042148,1.9928427)" />
	  <use
		  id="use12157-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.5842171,1.5595888)" />
	  <use
		  id="use12159-6"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.443999,1.1559955)" />
	  <use
		  id="use12161-9"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.8089822,0.71648076)" />
	  <use
		  id="use12163-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.4183661,0.21081816)" />
	  <use
		  id="use12165-7"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.9355301,-0.22534183)" />
	  <use
		  id="use12167-9"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.4349996,-0.38419939)" />
	  <use
		  id="use12169-1"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.3183195,-0.91048088)" />
	  <use
		  id="use12171-1"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(2.9175845,-0.71854718)" />
	  <use
		  id="use12173-2"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(3.5371454,-0.77358999)" />
	  <use
		  id="use12175-7"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(3.6097105,-0.30659905)" />
	  <use
		  id="use12177-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(3.2050678,0.28333381)" />
	  <use
		  id="use12179-2"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(3.1919883,1.1254405)" />
	  <use
		  id="use12181-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(3.8374395,0.78195748)" />
	  <use
		  id="use12183-7"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(3.3935473,1.8821015)" />
	  <use
		  id="use12185-3"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(3.9203277,1.5157497)" />
	  <use
		  id="use12187-8"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.1707697,1.9286807)" />
	  <use
		  id="use12189-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.3537923,1.1904537)" />
	  <use
		  id="use12191-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.8299246,1.723926)" />
	  <use
		  id="use12193-2"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(5.1293821,1.2320736)" />
	  <use
		  id="use12195-8"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.6863796,0.66512193)" />
	  <use
		  id="use12197-5"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(5.3030653,0.58550722)" />
	  <use
		  id="use12199-8"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.1867496,0.22703046)" />
	  <use
		  id="use12201-5"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.9336136,0.20232046)" />
	  <use
		  id="use12203-0"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.9436491,-0.44498652)" />
	  <use
		  id="use12205-4"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.4307757,-0.39817467)" />
	  <use
		  id="use12207-9"
		  inkscape:spray-origin="#path11856"
		  xlink:href="#path11856-0"
		  x="0"
		  y="0"
		  width="100%"
		  height="100%"
		  transform="translate(4.082969,-0.63356521)" />
	  <path
		  style="fill:#4d4d4d;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 101.95895,52.404173 0.0248,7.334107 c 0.003,0.913847 0.55303,0.719708 0.94154,0.867209 l 4.31127,-0.04956 c 0.39779,-0.04224 0.81616,0.135077 0.91676,-0.966317 l -0.0495,-7.259775 c -2.08473,0.46207 -4.12606,0.403281 -6.14487,0.07434 z"
		  id="path67211-3"
		  sodipodi:nodetypes="ccccccc" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.29335;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564"
		  sodipodi:type="arc"
		  sodipodi:cx="102.72858"
		  sodipodi:cy="59.46069"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 102.94186,59.46069 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-7"
		  sodipodi:type="arc"
		  sodipodi:cx="103.78691"
		  sodipodi:cy="59.989857"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 104.00019,59.989857 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21133,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-0"
		  sodipodi:type="arc"
		  sodipodi:cx="104.58066"
		  sodipodi:cy="59.989857"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 104.79394,59.989857 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-8"
		  sodipodi:type="arc"
		  sodipodi:cx="105.37441"
		  sodipodi:cy="59.989857"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 105.58769,59.989857 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21392,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-3"
		  sodipodi:type="arc"
		  sodipodi:cx="106.69733"
		  sodipodi:cy="59.725273"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 106.91061,59.725273 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-1"
		  sodipodi:type="arc"
		  sodipodi:cx="107.49108"
		  sodipodi:cy="59.196106"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 107.70436,59.196106 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-33"
		  sodipodi:type="arc"
		  sodipodi:cx="105.90358"
		  sodipodi:cy="58.931522"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 106.11686,58.931522 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21133,-0.240323 0.21328008,0.23887374 0 0 1 0.21521,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-4"
		  sodipodi:type="arc"
		  sodipodi:cx="104.31608"
		  sodipodi:cy="58.931522"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 104.52936,58.931522 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-39"
		  sodipodi:type="arc"
		  sodipodi:cx="103.25774"
		  sodipodi:cy="58.402355"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 103.47102,58.402355 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-9"
		  sodipodi:type="arc"
		  sodipodi:cx="102.72858"
		  sodipodi:cy="58.402355"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 102.94186,58.402355 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-5"
		  sodipodi:type="arc"
		  sodipodi:cx="104.31608"
		  sodipodi:cy="58.137772"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 104.52936,58.137772 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-46"
		  sodipodi:type="arc"
		  sodipodi:cx="105.10983"
		  sodipodi:cy="58.137772"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 105.32311,58.137772 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21392,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-6"
		  sodipodi:type="arc"
		  sodipodi:cx="106.43275"
		  sodipodi:cy="58.137772"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 106.64603,58.137772 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-00"
		  sodipodi:type="arc"
		  sodipodi:cx="107.22649"
		  sodipodi:cy="58.137772"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 107.43977,58.137772 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-17"
		  sodipodi:type="arc"
		  sodipodi:cx="107.49108"
		  sodipodi:cy="57.079441"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 107.70436,57.079441 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-81"
		  sodipodi:type="arc"
		  sodipodi:cx="106.43275"
		  sodipodi:cy="57.079441"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 106.64603,57.079441 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-84"
		  sodipodi:type="arc"
		  sodipodi:cx="104.84525"
		  sodipodi:cy="57.079441"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 105.05853,57.079441 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-07"
		  sodipodi:type="arc"
		  sodipodi:cx="103.25774"
		  sodipodi:cy="57.344021"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 103.47102,57.344021 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-47"
		  sodipodi:type="arc"
		  sodipodi:cx="102.464"
		  sodipodi:cy="56.550274"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 102.67728,56.550274 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-09"
		  sodipodi:type="arc"
		  sodipodi:cx="103.52233"
		  sodipodi:cy="56.28569"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 103.73561,56.28569 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240322 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-62"
		  sodipodi:type="arc"
		  sodipodi:cx="105.37441"
		  sodipodi:cy="56.28569"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 105.58769,56.28569 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240322 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-178"
		  sodipodi:type="arc"
		  sodipodi:cx="106.96191"
		  sodipodi:cy="56.021107"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 107.17519,56.021107 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-71"
		  sodipodi:type="arc"
		  sodipodi:cx="107.49108"
		  sodipodi:cy="55.49194"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 107.70436,55.49194 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21392,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-88"
		  sodipodi:type="arc"
		  sodipodi:cx="105.90358"
		  sodipodi:cy="55.227356"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 106.11686,55.227356 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21133,-0.240323 0.21328008,0.23887374 0 0 1 0.21521,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-44"
		  sodipodi:type="arc"
		  sodipodi:cx="104.31608"
		  sodipodi:cy="55.227356"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 104.52936,55.227356 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-70"
		  sodipodi:type="arc"
		  sodipodi:cx="103.25774"
		  sodipodi:cy="55.227356"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 103.47102,55.227356 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-2"
		  sodipodi:type="arc"
		  sodipodi:cx="102.464"
		  sodipodi:cy="54.169022"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 102.67728,54.169022 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-01"
		  sodipodi:type="arc"
		  sodipodi:cx="103.52233"
		  sodipodi:cy="54.433605"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 103.73561,54.433605 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-092"
		  sodipodi:type="arc"
		  sodipodi:cx="105.10983"
		  sodipodi:cy="54.433605"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 105.32311,54.433605 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-78"
		  sodipodi:type="arc"
		  sodipodi:cx="106.43275"
		  sodipodi:cy="54.169022"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 106.64603,54.169022 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238872 0.21328008,0.23887374 0 0 1 -0.21393,-0.237413 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235945" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-815"
		  sodipodi:type="arc"
		  sodipodi:cx="107.49108"
		  sodipodi:cy="53.904438"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 107.70436,53.904438 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21392,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	  <path
		  style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.293349;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path67564-66"
		  sodipodi:type="arc"
		  sodipodi:cx="107.22649"
		  sodipodi:cy="53.110691"
		  sodipodi:rx="0.21328008"
		  sodipodi:ry="0.23887374"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 107.43977,53.110691 a 0.21328008,0.23887374 0 0 1 -0.21263,0.238873 0.21328008,0.23887374 0 0 1 -0.21393,-0.237414 0.21328008,0.23887374 0 0 1 0.21132,-0.240323 0.21328008,0.23887374 0 0 1 0.21522,0.235946" />
	</g>
 </g>
</svg> 
  `;

  return coffeeStand
    .concat(coffeeMaker)
    .concat(blender)
    .concat(fruitBowl)
    .concat(saltShaker)
    .concat(pepperShaker);
}
