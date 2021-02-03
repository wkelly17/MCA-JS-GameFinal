export default function fanSwitch(room) {
  // functions here

  function fanSwitchClassNames() {
    if (room.$fanSwitch?.inspected) {
      return `${room.name}_fanSwitch-inspected`;
    } else {
      return '';
    }
  }
  // class = 'fanSwitchClassNames()}'
  // data-selector = 'fanSwitch'
  let html = `
  <svg
  id = '${room.name}_fanSwitch'
  class = '${room.name}_fanSwitch'
	  xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
	  xmlns:dc="http://purl.org/dc/elements/1.1/"
	  xmlns:cc="http://creativecommons.org/ns#"
	  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	  xmlns:svg="http://www.w3.org/2000/svg"
	  xmlns="http://www.w3.org/2000/svg"
	  xmlns:xlink="http://www.w3.org/1999/xlink"
	  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
	  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	  width="36.525009"
	  height="49.477898"
	  viewBox="0 0 12.309742 18.382693"
	  version="1.1"
	  id="svg2942"
	  sodipodi:docname="fanSwitch.svg"
	  inkscape:version="1.0.1 (c497b03c, 2020-09-10)">
	 <sodipodi:namedview
		 pagecolor="#ffffff"
		 bordercolor="#666666"
		 borderopacity="1"
		 objecttolerance="10"
		 gridtolerance="10"
		 guidetolerance="10"
		 inkscape:pageopacity="0"
		 inkscape:pageshadow="2"
		 inkscape:window-width="1440"
		 inkscape:window-height="847"
		 id="namedview8887"
		 showgrid="false"
		 inkscape:zoom="2.948615"
		 inkscape:cx="11.282074"
		 inkscape:cy="81.630323"
		 inkscape:window-x="0"
		 inkscape:window-y="25"
		 inkscape:window-maximized="0"
		 inkscape:current-layer="g13721" />
	 <defs
		 id="defs2936">
		<linearGradient
			xlink:href="#linearGradient12155"
			id="linearGradient12157"
			x1="83.654335"
			y1="82.291618"
			x2="89.18454"
			y2="82.291618"
			gradientUnits="userSpaceOnUse"
			gradientTransform="matrix(2.2260591,0,0,2.1641621,-102.56557,-100.74525)" />
		<linearGradient
			id="linearGradient12155"
			osb:paint="solid"
			gradientTransform="matrix(0.00490061,0,0,0.00490061,120.39311,109.34478)">
		  <stop
			  style="stop-color:#e6ded6;stop-opacity:1;"
			  offset="0"
			  id="stop12153" />
		</linearGradient>
	 </defs>
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
		 id="layer1"
		 transform="translate(-150.86584,-49.123987)">
		<g
			id="g13721"
			transform="translate(67.211506,-19.031821)">
		  <rect
			  style="fill:#cfc2b3;fill-opacity:1;stroke:url(#linearGradient12157);stroke-width:0.0580731;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect11987"
			  width="12.251669"
			  height="18.324621"
			  x="83.683372"
			  y="68.184845"
			  ry="6.1509391e-14" />
		  <g
			  id="g12042"
			  transform="matrix(2.226059,0,0,2.164162,-102.0467,-100.39906)">
			 <g
				 id="g12035">
				<circle
					style="fill:#808080;fill-opacity:1;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none"
					id="path11991"
					cx="88.4804"
					cy="85.929138"
					r="0.31137386" />
				<g
					id="g12029"
					transform="matrix(0.78243543,0,0,0.84002605,19.247119,13.740889)">
				  <path
					  id="rect12009"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.0184443;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.435593,85.699191 h 0.09168 v 0 c 0.05434,0.130457 0.02571,0.387787 0,0.488364 v 0 h -0.09168 v 0 c -0.0194,-0.163191 -0.05542,-0.410659 0,-0.488364 z" />
				  <path
					  id="rect12009-0"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.016324;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.719996,85.908501 v 0.07181 0 c -0.08387,0.03483 -0.338269,0.06369 -0.488364,-10e-7 v 0 -0.07181 0 l 0.179386,-0.0325 c 0.105399,8.58e-4 0.211235,10e-4 0.308978,0.0325 z" />
				</g>
			 </g>
		  </g>
		  <g
			  id="g12042-2"
			  transform="matrix(2.226059,0,0,2.164162,-112.39908,-100.30884)">
			 <g
				 id="g12035-7">
				<circle
					style="fill:#808080;fill-opacity:1;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none"
					id="path11991-3"
					cx="88.4804"
					cy="85.929138"
					r="0.31137386" />
				<g
					id="g12029-1"
					transform="matrix(0.78243543,0,0,0.84002605,19.247119,13.740889)">
				  <path
					  id="rect12009-9"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.0184443;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.435593,85.699191 h 0.09168 v 0 c 0.05434,0.130457 0.02571,0.387787 0,0.488364 v 0 h -0.09168 v 0 c -0.0194,-0.163191 -0.05542,-0.410659 0,-0.488364 z" />
				  <path
					  id="rect12009-0-5"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.016324;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.719996,85.908501 v 0.07181 0 c -0.08387,0.03483 -0.338269,0.06369 -0.488364,-10e-7 v 0 -0.07181 0 l 0.179386,-0.0325 c 0.105399,8.58e-4 0.211235,10e-4 0.308978,0.0325 z" />
				</g>
			 </g>
		  </g>
		  <g
			  id="g12042-6"
			  transform="matrix(2.226059,0,0,2.164162,-112.39908,-116.90814)">
			 <g
				 id="g12035-4">
				<circle
					style="fill:#808080;fill-opacity:1;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none"
					id="path11991-5"
					cx="88.4804"
					cy="85.929138"
					r="0.31137386" />
				<g
					id="g12029-9"
					transform="matrix(0.78243543,0,0,0.84002605,19.247119,13.740889)">
				  <path
					  id="rect12009-08"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.0184443;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.435593,85.699191 h 0.09168 v 0 c 0.05434,0.130457 0.02571,0.387787 0,0.488364 v 0 h -0.09168 v 0 c -0.0194,-0.163191 -0.05542,-0.410659 0,-0.488364 z" />
				  <path
					  id="rect12009-0-6"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.016324;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.719996,85.908501 v 0.07181 0 c -0.08387,0.03483 -0.338269,0.06369 -0.488364,-10e-7 v 0 -0.07181 0 l 0.179386,-0.0325 c 0.105399,8.58e-4 0.211235,10e-4 0.308978,0.0325 z" />
				</g>
			 </g>
		  </g>
		  <g
			  id="g12042-9"
			  transform="matrix(2.226059,0,0,2.164162,-102.14812,-116.81293)">
			 <g
				 id="g12035-9">
				<circle
					style="fill:#808080;fill-opacity:1;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none"
					id="path11991-55"
					cx="88.4804"
					cy="85.929138"
					r="0.31137386" />
				<g
					id="g12029-6"
					transform="matrix(0.78243543,0,0,0.84002605,19.247119,13.740889)">
				  <path
					  id="rect12009-1"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.0184443;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.435593,85.699191 h 0.09168 v 0 c 0.05434,0.130457 0.02571,0.387787 0,0.488364 v 0 h -0.09168 v 0 c -0.0194,-0.163191 -0.05542,-0.410659 0,-0.488364 z" />
				  <path
					  id="rect12009-0-1"
					  style="fill:#000000;fill-opacity:1;stroke-width:0.016324;stroke-miterlimit:4;stroke-dasharray:none"
					  d="m 88.719996,85.908501 v 0.07181 0 c -0.08387,0.03483 -0.338269,0.06369 -0.488364,-10e-7 v 0 -0.07181 0 l 0.179386,-0.0325 c 0.105399,8.58e-4 0.211235,10e-4 0.308978,0.0325 z" />
				</g>
			 </g>
		  </g>
		  <g
		  data-selector = "fanSwitch"
		  id="*fanSwitchHitbox"
			  transform="matrix(2.226059,0,0,2.164162,-102.56557,-100.74525)">
			 <rect
				 style="mix-blend-mode:normal;fill:#E6DED6;fill-opacity:1;stroke:none;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				 id="rect12145"
				 width="2.6892388"
				 height="3.5296261"
				 x="84.963142"
				 y="80.383026"
				 ry="2.8421808e-14" />
			 <g
				 id="g12459"
				 transform="translate(-4.6671448,-1.7001742)">
				<rect
					style="fill:#b4b4b4;fill-opacity:1;stroke:#1a0202;stroke-width:0.079375;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					id="SwitchInset"
					width="0.40907159"
					height="1.1002616"
					x="90.813889"
					y="83.30954"
					ry="2.8421808e-14" />
				<g
					id="SwitchToggle" class=${fanSwitchClassNames()}>
				  <path
					  id="rect12436-4"
					  style="fill:#666666;fill-opacity:1;stroke:#1a0202;stroke-width:0.0507788;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					  d="M 90.869986,83.8777 H 91.1807 v 0 0.592833 0 h -0.310714 v 0 c 0.0059,-0.150633 0.0055,-0.350894 0,-0.592833 z" />
				  <rect
					  style="fill:#666666;fill-opacity:1;stroke:#1a0202;stroke-width:0.0264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					  id="rect12454"
					  width="0.31249306"
					  height="0.26112431"
					  x="90.868477"
					  y="84.458275"
					  ry="1.5313978e-14" />
				</g>
			 </g>
		  </g>
		</g>
	 </g>
  </svg>
  `;
  return html;
}
