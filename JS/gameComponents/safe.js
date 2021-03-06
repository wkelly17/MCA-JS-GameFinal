export default function safe(room) {
  // functions here

  function safeClassNames() {
    if (room.$safe.inspected) {
      return `${room.name}_safeExterior  y180`;
    } else {
      return `${room.name}_safeExterior`;
    }
  }
  // id = '${room.name}_safe'
  // class = 'safeClassNames()}'
  // class = '${room.name}_safe'
  // data-selector = 'safe'

  let safeKeyCard;

  if (!room.$safeKeyCard.found) {
    safeKeyCard = `
 <svg
 id = '${room.name}_safeKeyCard'
 class = '${room.name}_safeKeyCard'
 data-selector = "safeKeyCard"
	 xmlns:dc="http://purl.org/dc/elements/1.1/"
	 xmlns:cc="http://creativecommons.org/ns#"
	 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	 xmlns:svg="http://www.w3.org/2000/svg"
	 xmlns="http://www.w3.org/2000/svg"
	 xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
	 xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	 width="20.884804"
	 height="13.069747"
	 viewBox="0 0 5.5257712 3.4580372"
	 version="1.1"
	 id="svg2942"
	 inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
	 sodipodi:docname="safeKeyCard.svg">
	<defs
		id="defs2936" />
	<sodipodi:namedview
		id="base"
		pagecolor="#ffffff"
		bordercolor="#666666"
		borderopacity="1.0"
		inkscape:pageopacity="0.0"
		inkscape:pageshadow="2"
		inkscape:zoom="0.32240092"
		inkscape:cx="10.442402"
		inkscape:cy="6.5348743"
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
		transform="translate(-115.14646,-161.20963)">
	  <g
		  id="g6029"
		  transform="translate(18.999074,13.957333)">
		 <rect
			 style="fill:#1310bf;fill-opacity:1;stroke:#000000;stroke-width:0.0326276"
			 id="rect5453"
			 width="3.3999746"
			 height="5.4781656"
			 x="-151.17589"
			 y="95.422157"
			 ry="0.20160756"
			 transform="rotate(-90.287586)" />
		 <rect
			 style="fill:#1a1a1a;stroke:#000000;stroke-width:0.0379305"
			 id="rect5455"
			 width="0.37184733"
			 height="5.4518714"
			 x="-148.62311"
			 y="95.434959"
			 ry="0"
			 transform="rotate(-90.287586)" />
		 <text
			 xml:space="preserve"
			 style="font-style:normal;font-weight:normal;font-size:2.86946px;line-height:1.25;font-family:sans-serif;fill:#bad5bc;fill-opacity:1;stroke:none;stroke-width:0.0717366"
			 x="147.15353"
			 y="98.50563"
			 id="text5459"
			 transform="scale(0.65424037,1.5284902)"><tspan
				sodipodi:role="line"
				id="tspan5457"
				x="147.15353"
				y="98.50563"
				style="fill:#bad5bc;fill-opacity:1;stroke-width:0.0717366"><tspan
	 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.956494px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#bad5bc;fill-opacity:1;stroke-width:0.0717366"
	 id="tspan5461">7193 0078 1303</tspan> </tspan></text>
	  </g>
	</g>
 </svg>
 `;
  } else {
    safeKeyCard = '';
  }

  let safe = `
  <svg
  id = '${room.name}_safe'
  class = '${safeClassNames()}'
  data-selector = 'safe'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="133.61182"
  height="112.18351"
  viewBox="0 0 35.351462 29.681888"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="wallSafeExterior.svg">
 <defs
	 id="defs2936">
	<inkscape:perspective
		sodipodi:type="inkscape:persp3d"
		inkscape:vp_x="0 : 1.8519631 : 1"
		inkscape:vp_y="0 : 1000 : 0"
		inkscape:vp_z="74.868174 : 1.8519631 : 1"
		inkscape:persp3d-origin="37.434087 : -7.4246799 : 1"
		id="perspective76394" />
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.5482699"
	 inkscape:cx="-34.909384"
	 inkscape:cy="53.485719"
	 inkscape:document-units="px"
	 inkscape:current-layer="SafeWhole"
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
		originx="-101.80869"
		originy="59.948443" />
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
	 transform="translate(-139.05938,42.886922)">
 <g
  id="SafeWhole"
  transform="translate(42.708332,-88.158506)">
 <rect
	 style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.75856;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	 id="rect75975"
	 width="35.351463"
	 height="29.681889"
	 x="96.351051"
	 y="45.271584"
	 ry="2.668035" />
 <g
	 id="$safeWheel">
	<ellipse
		style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:#666666;stroke-width:0.835243;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path75977-7"
		cx="114.11593"
		cy="60.836411"
		rx="8.9666796"
		ry="9.1523504" />
	<ellipse
		style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:#666666;stroke-width:0.360718;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path75977"
		cx="114.02311"
		cy="60.372231"
		rx="3.9123323"
		ry="3.9123325" />
	<ellipse
		style="opacity:1;fill:#6b6b6b;fill-opacity:1;stroke:none;stroke-width:0.896829;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76002"
		cx="157.80165"
		cy="-108.29399"
		rx="0.79947436"
		ry="5.6574082"
		transform="matrix(0.39575081,0.91835794,-0.51487405,0.85726584,0,0)" />
	<ellipse
		style="opacity:1;fill:#6b6b6b;fill-opacity:1;stroke:none;stroke-width:0.896829;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76002-3"
		cx="133.90747"
		cy="-158.00665"
		rx="0.79947436"
		ry="5.6574082"
		transform="matrix(-0.11606593,0.99324151,-0.87433993,0.485314,0,0)" />
	<ellipse
		style="opacity:1;fill:#6b6b6b;fill-opacity:1;stroke:none;stroke-width:0.896829;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76002-3-4"
		cx="-50.016563"
		cy="-102.86781"
		rx="0.79947436"
		ry="5.6574082"
		transform="matrix(-0.9894377,0.14495874,-0.69507316,-0.71893901,0,0)" />
	<ellipse
		style="opacity:1;fill:#6b6b6b;fill-opacity:1;stroke:none;stroke-width:0.848802;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76002-3-8"
		cx="137.87074"
		cy="-8.8972273"
		rx="0.77754384"
		ry="5.2106333"
		transform="matrix(0.82476364,0.56547762,-0.01832268,0.99983213,0,0)" />
	<ellipse
		style="opacity:1;fill:#6b6b6b;fill-opacity:1;stroke:none;stroke-width:0.896829;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76002-3-44"
		cx="134.38602"
		cy="-139.23708"
		rx="0.79947436"
		ry="5.6574082"
		transform="matrix(-0.11606593,0.99324151,-0.87433993,0.485314,0,0)" />
	<ellipse
		style="opacity:1;fill:#6b6b6b;fill-opacity:1;stroke:none;stroke-width:0.896829;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76002-3-81"
		cx="8.1445665"
		cy="114.52847"
		rx="0.79947436"
		ry="5.6574082"
		transform="matrix(0.91820535,-0.39610471,0.85746422,0.51454359,0,0)" />
	<ellipse
		style="opacity:1;fill:#6b6b6b;fill-opacity:1;stroke:none;stroke-width:0.896829;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76002-3-6"
		cx="-117.38699"
		cy="-8.2879114"
		rx="0.79947436"
		ry="5.6574082"
		transform="matrix(-0.92935755,-0.3691809,-0.24248151,-0.97015603,0,0)" />
 </g>
</g>
</g>
</svg>

<svg
id = '${room.name}_safeInterior'
class = '${room.name}_safeInterior'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="158.6299"
   height="123.55737"
   viewBox="0 0 43.029163 32.691221"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="wallSafeInterior.svg">
  <defs
     id="defs2936">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : 4.8612976 : 1"
       inkscape:vp_y="0 : 999.99995 : 0"
       inkscape:vp_z="74.868174 : 4.8612976 : 1"
       inkscape:persp3d-origin="37.434087 : -4.4153449 : 1"
       id="perspective76394" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.5482699"
     inkscape:cx="-22.057958"
     inkscape:cy="73.282058"
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
       originx="-98.408417"
       originy="65.18622" />
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
     transform="translate(-135.65911,48.124704)">$couchLeftLeft=&quot;rect76132&quot;
     id=&quot;rect76329&quot; /&gt;
  <g
   id="$safeInterior"
   transform="matrix(0.88373044,0,0,0.89248458,99.143537,-105.93235)">
  <rect
     style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:1.81251;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="rect76684-2"
     width="48.690369"
     height="36.629452"
     x="41.319805"
     y="64.771591"
     ry="3.2173331" />
  <rect
     style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="rect76684"
     width="40.649757"
     height="30.375643"
     x="45.116756"
     y="67.898491"
     ry="2.6680322" />
</g>
</g>
</svg>
 `;

  let safeKeypad = `
<svg
id = '${room.name}_safeKeypad'
class = '${room.name}_safeKeypad'
data-selector = "safeKeypad"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="24.364271"
   height="24.784346"
   viewBox="0 0 6.4463803 6.5575248"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="wallSafeKeypad.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.32240092"
     inkscape:cx="12.182136"
     inkscape:cy="12.392172"
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
     transform="translate(-88.424853,-144.88791)">
    <g
       id="g5171"
       transform="translate(-46.937909,94.837111)">
      <rect
         style="fill:#333333;stroke-width:0.79375"
         id="rect3977"
         width="6.4463801"
         height="6.5575247"
         x="135.36276"
         y="50.050797" />
      <rect
         style="fill:#008080;stroke-width:0.54532"
         id="rect3994"
         width="5.4431086"
         height="0.89721566"
         x="135.85844"
         y="50.595062" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.0307381;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589"
         width="0.61646903"
         height="0.64024061"
         x="135.44427"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-9"
         width="0.61646903"
         height="0.64024061"
         x="136.0795"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-8"
         width="0.61646903"
         height="0.64024061"
         x="136.71472"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-3"
         width="0.61646903"
         height="0.64024061"
         x="137.34995"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-0"
         width="0.61646903"
         height="0.64024061"
         x="137.98517"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-90"
         width="0.61646903"
         height="0.64024061"
         x="138.62039"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-7"
         width="0.61646903"
         height="0.64024061"
         x="139.25562"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-6"
         width="0.61646903"
         height="0.64024061"
         x="139.89084"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-83"
         width="0.61646903"
         height="0.64024061"
         x="140.52606"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-86"
         width="0.61646903"
         height="0.64024061"
         x="141.16129"
         y="53.199398" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-2"
         width="0.61646903"
         height="0.64024061"
         x="135.80522"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-9-4"
         width="0.61646903"
         height="0.64024061"
         x="136.44044"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-8-8"
         width="0.61646903"
         height="0.64024061"
         x="137.07567"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-3-3"
         width="0.61646903"
         height="0.64024061"
         x="137.71089"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-0-5"
         width="0.61646903"
         height="0.64024061"
         x="138.34612"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-90-0"
         width="0.61646903"
         height="0.64024061"
         x="138.98134"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-7-0"
         width="0.61646903"
         height="0.64024061"
         x="139.61656"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-6-6"
         width="0.61646903"
         height="0.64024061"
         x="140.25179"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-83-7"
         width="0.61646903"
         height="0.64024061"
         x="140.88701"
         y="54.29528" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-29"
         width="0.61646903"
         height="0.64024061"
         x="136.05688"
         y="55.292118" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-9-0"
         width="0.61646903"
         height="0.64024061"
         x="136.69211"
         y="55.292118" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-8-9"
         width="0.61646903"
         height="0.64024061"
         x="137.3511"
         y="55.292118" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-3-8"
         width="0.61646903"
         height="0.64024061"
         x="138.0101"
         y="55.292118" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-0-0"
         width="0.61646903"
         height="0.64024061"
         x="138.69287"
         y="55.292118" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-90-5"
         width="0.61646903"
         height="0.64024061"
         x="139.39941"
         y="55.292118" />
      <rect
         style="fill:#e6e6e6;stroke:#000000;stroke-width:0.030738;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4589-7-3"
         width="0.61646903"
         height="0.64024061"
         x="140.13588"
         y="55.292118" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.702052px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0175513;stroke-opacity:1"
         x="120.70338"
         y="60.239502"
         id="text4000"
         transform="scale(1.1222435,0.89107218)"><tspan
           sodipodi:role="line"
           id="tspan4973"
           x="120.70338"
           y="60.239502"
           style="stroke-width:0.0175513">Q</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="139.55928"
         y="52.702988"
         id="text4000-5-0"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4977"
           x="139.55928"
           y="52.702988">E</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="140.2142"
         y="52.679695"
         id="text4000-5-6"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4979"
           x="140.2142"
           y="52.679695">R</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.665112px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0166277;stroke-opacity:1"
         x="146.80571"
         y="50.606609"
         id="text4000-5-2"
         transform="scale(0.94102004,1.0626766)"><tspan
           sodipodi:role="line"
           id="tspan4981"
           x="146.80571"
           y="50.606609"
           style="stroke-width:0.0166277">T</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.582105px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0145526;stroke-opacity:1"
         x="121.68331"
         y="61.171455"
         id="text4000-5-9"
         transform="scale(1.1399909,0.87719997)"><tspan
           sodipodi:role="line"
           id="tspan4983"
           x="121.68331"
           y="61.171455"
           style="stroke-width:0.0145526">Y</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="142.20326"
         y="52.679691"
         id="text4000-5-3"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4985"
           x="142.20326"
           y="52.679691">U</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="142.95522"
         y="52.726288"
         id="text4000-5-1"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4987"
           x="142.95522"
           y="52.726288">I</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="143.37933"
         y="52.703674"
         id="text4000-5-1-8"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4989"
           x="143.37933"
           y="52.703674">O</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="144.08279"
         y="52.703678"
         id="text4000-5-1-0"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4991"
           x="144.08279"
           y="52.703678">P</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="138.91612"
         y="54.777039"
         id="text4000-5-1-3"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan5077"
           x="138.91612"
           y="54.777039">Z</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.651759px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0162939;stroke-opacity:1"
         x="133.88597"
         y="54.597168"
         id="text4000-5"
         transform="scale(1.0161422,0.98411423)"><tspan
           sodipodi:role="line"
           id="tspan4975"
           x="133.88597"
           y="54.597168"
           style="stroke-width:0.0162939">W</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="138.62503"
         y="53.775303"
         id="text4000-5-1-3-9"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4955"
           x="138.62503"
           y="53.775303">A</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="139.27997"
         y="53.752007"
         id="text4000-5-1-3-7"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4957"
           x="139.27997"
           y="53.752007">S</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="139.93491"
         y="53.775299"
         id="text4000-5-1-3-97"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4959"
           x="139.93491"
           y="53.775299">D</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="140.61409"
         y="53.798599"
         id="text4000-5-1-3-1"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4961"
           x="140.61409"
           y="53.798599">F</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="141.14772"
         y="53.775303"
         id="text4000-5-1-3-6"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4963"
           x="141.14772"
           y="53.775303">G</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="141.87543"
         y="53.775303"
         id="text4000-5-1-3-5"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4965"
           x="141.87543"
           y="53.775303">H</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="142.6274"
         y="53.798599"
         id="text4000-5-1-3-2"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4967"
           x="142.6274"
           y="53.798599">J</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="143.11253"
         y="53.775303"
         id="text4000-5-1-3-8"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4969"
           x="143.11253"
           y="53.775303">K</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="143.84024"
         y="53.775303"
         id="text4000-5-1-3-79"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan4971"
           x="143.84024"
           y="53.775303">L</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="139.57104"
         y="54.777039"
         id="text4000-5-1-3-56"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan5079"
           x="139.57104"
           y="54.777039">X</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="140.20172"
         y="54.777042"
         id="text4000-5-1-3-56-2"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan5081"
           x="140.20172"
           y="54.777042">C</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="140.80814"
         y="54.753742"
         id="text4000-5-1-3-56-8"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan5083"
           x="140.80814"
           y="54.753742">V</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="141.48734"
         y="54.753746"
         id="text4000-5-1-3-56-5"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan5085"
           x="141.48734"
           y="54.753746">B</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="142.19078"
         y="54.800335"
         id="text4000-5-1-3-56-3"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan5087"
           x="142.19078"
           y="54.800335">N</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.756748px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0189186;stroke-opacity:1"
         x="142.99756"
         y="54.753742"
         id="text4000-5-1-3-56-32"
         transform="scale(0.98000189,1.0204062)"><tspan
           sodipodi:role="line"
           id="tspan5089"
           x="142.99756"
           y="54.753742">M</tspan></text>
    </g>
  </g>
</svg>
`;

  return safeKeyCard.concat(safeKeypad).concat(safe);
}
