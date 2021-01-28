export default function sideWindowWall(room) {
  // functions here

  function sideWindowWallClassNames() {
    if (room.$sideWindowWall.inspected) {
      return `${room.name}_sideWindowWall ${room.name}sideWindowWall-inspected`;
    } else {
      return `${room.name}_sideWindowWall`;
    }
  }
  // class = 'sideWindowWallClassNames()}'
  // data-selector = 'sideWindowWall'
  let sideWindow = `
  <svg
  id = '${room.name}_sideWindow'
  class = '${room.name}_sideWindow'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="117.3538"
  height="196.10579"
  viewBox="0 0 31.049861 51.886324"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="studySideWallWindow.svg">
 <defs
	 id="defs2936">
	<clipPath
		clipPathUnits="userSpaceOnUse"
		id="clipPath2162">
	  <g
		  id="g2170"
		  transform="matrix(0.86973963,0.43317544,-0.49908873,0.90437582,-51.571116,-46.542574)">
		 <g
			 id="g2168">
			<path
				style="fill:none;stroke:#cccccc;stroke-width:1.45099;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				d="M 25.082873,49.689585 24.391265,93.314802 43.756309,83.918601 43.410504,49.689586 Z"
				id="path2164"
				sodipodi:nodetypes="ccccc"
				inkscape:original-d="M 25.082873,49.689585 24.391265,93.314802 43.756309,83.918601 43.410504,49.689586 Z" />
			<path
				style="fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				d="m 48.412479,80.061972 -0.50813,5.949558 -25.287395,12.527949 -3.586435,-2.064892 c 9.277785,-5.894974 20.606263,-9.881005 29.38196,-16.412615 z"
				id="path2166"
				sodipodi:nodetypes="ccccc"
				inkscape:original-d="m 48.412479,80.061972 -0.50813,5.949558 -25.287395,12.527949 -3.586435,-2.064892 c 9.277785,-5.894974 20.606263,-9.881005 29.38196,-16.412615 z" />
		 </g>
	  </g>
	</clipPath>
 </defs>
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="2.5082913"
	 inkscape:cx="62.415959"
	 inkscape:cy="116.42789"
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
	 transform="translate(-99.519405,-35.369864)">
	<path
		style="fill:#000080;stroke:#000000;stroke-width:0.142394px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 81.598734,99.024105 c -0.005,0.954065 -0.1585,1.879035 -0.1585,2.836055 0,1.65149 0.1585,3.22289 0.1585,4.88432 0,6.78186 -0.13529,13.581 0.31699,20.32508 0.0861,1.28435 -0.27712,4.25508 0,5.35699 0.0287,0.11393 0.14178,0.19886 0.15849,0.31512 0.20234,1.40798 -0.14476,2.8844 -0.31698,4.25408 -0.0758,0.60317 0,1.28344 0,1.89071 0,0.91794 0.22249,2.10888 0,2.99362 -0.0287,0.11392 -0.13908,0.19927 -0.1585,0.31511 -0.0642,0.38296 0.0963,0.87757 0,1.26047 -0.13524,0.53778 -0.34935,1.32153 -0.1585,1.8907 0.0872,0.26012 0.0692,0.82219 0.317,0.94536 0.58214,0.28935 5.6491,-0.60724 6.18129,-0.63024 1.87932,-0.0812 2.87676,0.51589 3.96237,-1.10291 0.0655,-0.0977 0.075,-0.23208 0.1585,-0.31512 0.51062,-0.50761 1.25853,-0.61149 1.58494,-1.26046 0.45401,-0.90266 0.1585,-5.66577 0.1585,-6.61747 0,-3.083 0.1476,-6.21459 0,-9.29596 -0.0926,-1.93313 -0.6525,-4.05152 -0.47549,-5.98724 0.2111,-2.30841 0.99633,-4.49456 1.42645,-6.77502 0.1327,-0.70352 0.0446,-1.36896 0.1585,-2.04826 0.10184,-0.60741 0.26665,-0.76743 0.31699,-1.41803 0.13751,-1.77709 -0.29088,-2.44492 -0.47549,-4.09653 -0.10814,-0.96759 0,-2.01687 0,-2.99361 0,-1.94323 0,-3.886452 0,-5.829675"
		id="path4604-8" />
	<path
		style="fill:#000080;stroke:#000000;stroke-width:0.126801px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 55.807887,79.07198 c 0.014,5.18001 0.21138,10.372941 -0.37978,15.486291 -0.0418,0.361327 0.0294,0.731805 0,1.09499 0.0533,0.553267 -0.20566,1.035775 -0.25319,1.564272 -0.0601,0.668515 0.0675,1.366176 0,2.033553 -0.0574,0.5677 -0.1948,1.143634 -0.25318,1.720694 -0.0869,0.85943 0,1.79271 0,2.65927 0,1.7207 0,3.44139 0,5.16209 0,4.37997 0,8.75992 0,13.13989 0,0.66014 -0.29803,2.13457 0.12659,2.65926 0.0585,0.0723 0.30335,-0.0472 0.37978,0 0.71478,0.44162 1.25552,0.0478 1.89888,0.31285 0.23301,0.096 0.47323,0.24209 0.75955,0.31285 0.7446,0.18403 1.68871,-0.29514 2.40525,0 1.0332,0.42557 2.59869,0.17489 3.67117,-0.15642 0.25126,-0.0776 0.65715,0.14149 0.88615,0 0.40171,-0.2482 0.92979,-1.13273 1.13933,-1.56427 0.50634,-1.04282 0.76872,-2.59343 0.88614,-3.75426 0.0471,-0.46566 -0.0537,-0.94328 0,-1.40784 0.12079,-1.04483 0.44436,-2.05581 0.50637,-3.12855 0.32848,-5.68246 0.25606,-11.35522 0,-17.050555 -0.20441,-4.546509 0.42444,-9.505497 0.12659,-13.922019 -0.13612,-2.01843 -0.0773,-0.04264 -0.25318,-1.564271 -0.12034,-1.04092 0.0376,-2.114081 -0.12661,-3.128543 -0.10115,-0.625023 0.12181,-1.263271 -0.12659,-1.877126 -0.0323,-0.07969 -1.35591,0.312853 -1.89888,0.312853 -0.58051,0 0.13344,-0.03298 -0.63296,0.156428 -0.80993,0.200161 -1.72962,-0.04184 -2.53184,0.156426 -0.8021,0.19823 -1.58788,0.481421 -2.40525,0.62571 -0.50302,0.08879 -1.0179,0.0532 -1.51911,0.156427 -0.79529,0.163786 -1.59165,0.251336 -2.40525,0 z"
		id="path4606-3" />
	<g
		id="g2353"
		transform="translate(-1.1603185,14.662206)">
	  <g
		  id="g1954-8"
		  transform="translate(89.054794,5.72654)">
		 <g
			 id="g2191"
			 transform="translate(-5.7376879,-32.131052)">
			<g
				id="g1994-6"
				transform="translate(0,0.45901503)">
			  <path
				  style="fill:none;stroke:#cccccc;stroke-width:1.45099;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				  d="M 25.082873,49.689585 24.391265,93.314802 43.756309,83.918601 43.410504,49.689586 Z"
				  id="path5410-5"
				  sodipodi:nodetypes="ccccc"
				  inkscape:original-d="M 25.082873,49.689585 24.391265,93.314802 43.756309,83.918601 43.410504,49.689586 Z" />
			  <path
				  style="fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				  d="m 48.412479,80.061972 -0.50813,5.949558 -25.287395,12.527949 -3.586435,-2.064892 c 9.277785,-5.894974 20.606263,-9.881005 29.38196,-16.412615 z"
				  id="path1033-7"
				  sodipodi:nodetypes="ccccc"
				  inkscape:original-d="m 48.412479,80.061972 -0.50813,5.949558 -25.287395,12.527949 -3.586435,-2.064892 c 9.277785,-5.894974 20.606263,-9.881005 29.38196,-16.412615 z" />
			</g>
		 </g>
	  </g>
	  <g
		  id="g77633-9"
		  transform="matrix(0.41932258,0,0,0.74667895,59.289675,4.5357965)">
		 <rect
			 style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.205496;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect77611-3"
			 width="69.122498"
			 height="3.133554"
			 x="101.01102"
			 y="23.040834"
			 ry="0" />
		 <ellipse
			 style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path77613-8"
			 cx="170.04138"
			 cy="24.607613"
			 rx="2.4884102"
			 ry="2.6727369" />
		 <ellipse
			 style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path77613-2-0"
			 cx="101.19535"
			 cy="24.331123"
			 rx="2.4884102"
			 ry="2.6727369" />
	  </g>
	</g>
 </g>
</svg>
 `;

  function leftCurtainClassNames() {
    if (room.$curtainLeft?.inspected) {
      return `${room.name}_leftCurtain 
		${room.name}_leftCurtain-inspected`;
    } else {
      return `${room.name}_leftCurtain`;
    }
  }

  let leftCurtain = `
  <svg
  id = '${room.name}_leftCurtain'
  class = '${leftCurtainClassNames()}'
  data-selector = 'leftWallCurtain'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="53.046883"
  height="183.30396"
  viewBox="0 0 14.035322 48.499172"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="studySideWallLeftCurtain.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="0.32205155"
	 inkscape:cx="-561.69382"
	 inkscape:cy="413.47085"
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
	 transform="translate(-105.93849,-38.769173)">
	<g
		id="g77633-9"
		transform="matrix(0.41932258,0,0,0.74667895,-93.016301,54.298519)">
	  <rect
		  style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.205496;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77611-3"
		  width="69.122498"
		  height="3.133554"
		  x="101.01102"
		  y="23.040834"
		  ry="0" />
	  <ellipse
		  style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77613-8"
		  cx="170.04138"
		  cy="24.607613"
		  rx="2.4884102"
		  ry="2.6727369" />
	  <ellipse
		  style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77613-2-0"
		  cx="101.19535"
		  cy="24.331123"
		  rx="2.4884102"
		  ry="2.6727369" />
	</g>
	<path
		style="fill:#000080;stroke:#000000;stroke-width:0.142394px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 106.24541,39.872083 c -0.005,0.954065 -0.1585,1.879039 -0.1585,2.836057 0,1.651491 0.1585,3.222887 0.1585,4.88432 0,6.781861 -0.13529,13.580999 0.31699,20.325076 0.0861,1.28435 -0.27712,4.25508 0,5.35699 0.0287,0.11393 0.14178,0.19886 0.15849,0.31512 0.20234,1.40798 -0.14476,2.8844 -0.31698,4.25408 -0.0758,0.60317 0,1.28344 0,1.89071 0,0.91794 0.22249,2.10888 0,2.99362 -0.0287,0.11392 -0.13908,0.19927 -0.1585,0.31511 -0.0642,0.38296 0.0963,0.87757 0,1.26047 -0.13524,0.53778 -0.34935,1.32153 -0.1585,1.8907 0.0872,0.26012 0.0692,0.82219 0.317,0.94536 0.58214,0.28935 5.6491,-0.60724 6.18129,-0.63024 1.87932,-0.0812 2.87676,0.51589 3.96237,-1.10291 0.0655,-0.0977 0.075,-0.23208 0.1585,-0.31512 0.51062,-0.50761 1.25853,-0.61149 1.58494,-1.26046 0.45401,-0.90266 0.1585,-5.66577 0.1585,-6.61747 0,-3.083 0.1476,-6.21459 0,-9.29596 -0.0926,-1.933129 -0.6525,-4.05152 -0.47549,-5.987234 0.2111,-2.308415 0.99633,-4.494563 1.42645,-6.775025 0.1327,-0.703518 0.0446,-1.368959 0.1585,-2.048264 0.10184,-0.607406 0.26665,-0.767423 0.31699,-1.418027 0.13751,-1.777085 -0.29088,-2.444918 -0.47549,-4.096526 -0.10814,-0.967595 0,-2.016874 0,-2.993616 0,-1.943224 0,-3.886448 0,-5.829671"
		id="path4604-8" />
	<path
		style="fill:#000080;stroke:#000000;stroke-width:0.126801px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 55.807887,79.07198 c 0.014,5.18001 0.21138,10.372941 -0.37978,15.486291 -0.0418,0.361327 0.0294,0.731805 0,1.09499 0.0533,0.553267 -0.20566,1.035775 -0.25319,1.564272 -0.0601,0.668515 0.0675,1.366176 0,2.033553 -0.0574,0.5677 -0.1948,1.143634 -0.25318,1.720694 -0.0869,0.85943 0,1.79271 0,2.65927 0,1.7207 0,3.44139 0,5.16209 0,4.37997 0,8.75992 0,13.13989 0,0.66014 -0.29803,2.13457 0.12659,2.65926 0.0585,0.0723 0.30335,-0.0472 0.37978,0 0.71478,0.44162 1.25552,0.0478 1.89888,0.31285 0.23301,0.096 0.47323,0.24209 0.75955,0.31285 0.7446,0.18403 1.68871,-0.29514 2.40525,0 1.0332,0.42557 2.59869,0.17489 3.67117,-0.15642 0.25126,-0.0776 0.65715,0.14149 0.88615,0 0.40171,-0.2482 0.92979,-1.13273 1.13933,-1.56427 0.50634,-1.04282 0.76872,-2.59343 0.88614,-3.75426 0.0471,-0.46566 -0.0537,-0.94328 0,-1.40784 0.12079,-1.04483 0.44436,-2.05581 0.50637,-3.12855 0.32848,-5.68246 0.25606,-11.35522 0,-17.050555 -0.20441,-4.546509 0.42444,-9.505497 0.12659,-13.922019 -0.13612,-2.01843 -0.0773,-0.04264 -0.25318,-1.564271 -0.12034,-1.04092 0.0376,-2.114081 -0.12661,-3.128543 -0.10115,-0.625023 0.12181,-1.263271 -0.12659,-1.877126 -0.0323,-0.07969 -1.35591,0.312853 -1.89888,0.312853 -0.58051,0 0.13344,-0.03298 -0.63296,0.156428 -0.80993,0.200161 -1.72962,-0.04184 -2.53184,0.156426 -0.8021,0.19823 -1.58788,0.481421 -2.40525,0.62571 -0.50302,0.08879 -1.0179,0.0532 -1.51911,0.156427 -0.79529,0.163786 -1.59165,0.251336 -2.40525,0 z"
		id="path4606-3" />
 </g>
</svg>

 `;
  function rightCurtainClassNames() {
    if (room.$curtainRight?.inspected) {
      return `${room.name}_rightCurtain ${room.name}_rightCurtain-inspected`;
    } else {
      return `${room.name}_rightCurtain`;
    }
  }

  let rightCurtain = `
  <svg
  id = '${room.name}_rightWallCurtain'
  class = '${rightCurtainClassNames()}'
  data-selector = 'rightWallCurtain'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="49.543121"
  height="181.10762"
  viewBox="0 0 13.108285 47.918058"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="studySideWallRightCurtainl.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="0.32205155"
	 inkscape:cx="-53.081658"
	 inkscape:cy="406.47579"
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
	 transform="translate(-105.69257,-40.619949)">
	<g
		id="g77633-9"
		transform="matrix(0.41932258,0,0,0.74667895,-93.016301,54.298519)">
	  <rect
		  style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.205496;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect77611-3"
		  width="69.122498"
		  height="3.133554"
		  x="101.01102"
		  y="23.040834"
		  ry="0" />
	  <ellipse
		  style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77613-8"
		  cx="170.04138"
		  cy="24.607613"
		  rx="2.4884102"
		  ry="2.6727369" />
	  <ellipse
		  style="opacity:1;fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path77613-2-0"
		  cx="101.19535"
		  cy="24.331123"
		  rx="2.4884102"
		  ry="2.6727369" />
	</g>
	<path
		style="fill:#000080;stroke:#000000;stroke-width:0.142394px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m -49.850204,72.734317 c -0.0049,0.954065 -0.158495,1.879039 -0.158495,2.836057 0,1.651491 0.158495,3.222887 0.158495,4.88432 0,6.781861 -0.135285,13.580999 0.316991,20.325076 0.08613,1.28435 -0.277117,4.25508 0,5.35699 0.02866,0.11393 0.141784,0.19886 0.15849,0.31512 0.202337,1.40798 -0.144758,2.8844 -0.316985,4.25408 -0.07584,0.60317 0,1.28344 0,1.89071 0,0.91794 0.222497,2.10888 0,2.99362 -0.02866,0.11392 -0.139075,0.19927 -0.158496,0.31511 -0.06421,0.38296 0.09629,0.87757 0,1.26047 -0.135242,0.53778 -0.349345,1.32153 -0.158495,1.8907 0.08722,0.26012 0.06921,0.82219 0.316991,0.94536 0.582141,0.28935 5.649109,-0.60724 6.181294,-0.63024 1.879319,-0.0812 2.876756,0.51589 3.962372,-1.10291 0.06553,-0.0977 0.07495,-0.23208 0.158495,-0.31512 0.510627,-0.50761 1.25853,-0.61149 1.584946,-1.26046 0.454007,-0.90266 0.158495,-5.66577 0.158495,-6.61747 0,-3.083 0.147602,-6.21459 0,-9.29596 -0.0926,-1.933129 -0.652502,-4.05152 -0.475487,-5.987234 0.211103,-2.308415 0.996325,-4.494563 1.426454,-6.775025 0.132695,-0.703518 0.04458,-1.368959 0.158496,-2.048264 0.101839,-0.607406 0.266646,-0.767423 0.316991,-1.418027 0.137509,-1.777085 -0.290883,-2.444918 -0.475487,-4.096526 -0.108147,-0.967595 0,-2.016874 0,-2.993616 0,-1.943224 0,-3.886448 0,-5.829671"
		id="path4604-8" />
	<path
		style="fill:#000080;stroke:#000000;stroke-width:0.126801px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 106.74435,42.101966 c 0.014,5.18001 0.21138,10.372941 -0.37978,15.486291 -0.0418,0.361327 0.0294,0.731805 0,1.09499 0.0533,0.553267 -0.20566,1.035775 -0.25319,1.564272 -0.0601,0.668515 0.0675,1.366176 0,2.033553 -0.0574,0.5677 -0.1948,1.143637 -0.25318,1.720699 -0.0869,0.85943 0,1.792707 0,2.659265 0,1.720697 0,3.441392 0,5.162092 0,4.37997 0,8.75992 0,13.13989 0,0.66014 -0.29803,2.13457 0.12659,2.65926 0.0585,0.0723 0.30335,-0.0472 0.37978,0 0.71478,0.44162 1.25552,0.0478 1.89888,0.31285 0.23301,0.096 0.47323,0.24209 0.75955,0.31285 0.7446,0.18403 1.68871,-0.29514 2.40525,0 1.0332,0.42557 2.59869,0.17489 3.67117,-0.15642 0.25126,-0.0776 0.65715,0.14149 0.88615,0 0.40171,-0.2482 0.92979,-1.13273 1.13933,-1.56427 0.50634,-1.04282 0.76872,-2.59343 0.88614,-3.75426 0.0471,-0.46566 -0.0537,-0.94328 0,-1.40784 0.12079,-1.04483 0.44436,-2.05581 0.50637,-3.12855 0.32848,-5.68246 0.25606,-11.35522 0,-17.050557 -0.20441,-4.546509 0.42444,-9.505497 0.12659,-13.922019 -0.13612,-2.01843 -0.0773,-0.04264 -0.25318,-1.564271 -0.12034,-1.04092 0.0376,-2.114081 -0.12661,-3.128543 -0.10115,-0.625023 0.12181,-1.263271 -0.12659,-1.877126 -0.0323,-0.07969 -1.35591,0.312853 -1.89888,0.312853 -0.58051,0 0.13344,-0.03298 -0.63296,0.156428 -0.80993,0.200161 -1.72962,-0.04184 -2.53184,0.156426 -0.8021,0.19823 -1.58788,0.481421 -2.40525,0.62571 -0.50302,0.08879 -1.0179,0.0532 -1.51911,0.156427 -0.79529,0.163786 -1.59165,0.251336 -2.40525,0 z"
		id="path4606-3" />
 </g>
</svg>
<img src = './Media/imgs/outDoors.jpg' alt = 'windowBackground' class = 'studyWindowBackground' style = "clip-path: polygon(0 0, 75% 0, 75% 68%, 0% 100%); height: 180px; width: 90px; z-index: -1; pointer-events: none;
"/>
 `;

  return sideWindow.concat(leftCurtain).concat(rightCurtain);
}
