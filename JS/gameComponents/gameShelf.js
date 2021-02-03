export default function gameShelf(room) {
  // functions here

  function gameShelfClassNames() {
    if (room.$gameShelf.inspected) {
      return `${room.name}_gameShelf ${room.name}gameShelf-inspected`;
    } else {
      return `${room.name}_gameShelf`;
    }
  }
  // id = '${room.name}_gameShelf'
  // class = 'gameShelfClassNames()}'
  // class = '${room.name}_gameShelf'
  // data-selector = 'gameShelf'
  let html = `
  <svg
  id = '${room.name}_gameShelf'
  class = '${room.name}_gameShelf'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="236.78249"
  height="273.53934"
  viewBox="0 0 62.648702 72.373944"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="gameShelf.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.1221706"
	 inkscape:cx="111.38914"
	 inkscape:cy="189.04338"
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
	 showguides="false"
	 inkscape:snap-nodes="false" />
 <metadata
	 id="metadata2939">
	<rdf:RDF>
	  <cc:Work
		  rdf:about="">
		 <dc:format>image/svg+xml</dc:format>
		 <dc:type
			 rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
		 <dc:title />
	  </cc:Work>
	</rdf:RDF>
 </metadata>
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-104.02956,-47.565205)">
	<g
		id="g1526">
	  <rect
		  style="fill:#552200;stroke-width:0.307327"
		  id="rect1250"
		  width="62.648697"
		  height="72.373947"
		  x="104.02956"
		  y="47.565205"
		  ry="2.9401915" />
	  <rect
		  style="fill:#290a0a;fill-opacity:1;stroke-width:0.318249"
		  id="rect1252"
		  width="58.577663"
		  height="15.379463"
		  x="106.54626"
		  y="55.25494"
		  ry="0" />
	  <rect
		  style="fill:#290a0a;fill-opacity:1;stroke-width:0.318249"
		  id="rect1252-6"
		  width="58.57766"
		  height="15.379463"
		  x="106.09923"
		  y="75.713753"
		  ry="0" />
	  <rect
		  style="fill:#290a0a;fill-opacity:1;stroke-width:0.318249"
		  id="rect1252-8"
		  width="58.57766"
		  height="15.379463"
		  x="106.09923"
		  y="98.112679"
		  ry="0" />
	</g>
	<rect
		style="fill:#ffd42a;stroke:#f9f9f9;stroke-width:0.0307204"
		id="rect1528"
		width="33.712013"
		height="7.5406394"
		x="106.57079"
		y="56.558643" />
	<text
		xml:space="preserve"
		style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:8.5139px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.63854"
		x="129.47299"
		y="56.907024"
		id="text1532-5"
		transform="scale(0.89859153,1.1128527)"><tspan
		  sodipodi:role="line"
		  id="tspan1557"
		  x="129.47299"
		  y="56.907024">LIfe</tspan></text>
	<rect
		style="fill:#000080;stroke:#f9f9f9;stroke-width:0.0271608"
		id="rect1528-1"
		width="33.715572"
		height="5.8937521"
		x="106.50558"
		y="63.99641" />
	<rect
		style="fill:#b70000;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.0262945"
		id="rect1528-1-4-0"
		width="31.594435"
		height="5.8946185"
		x="105.91571"
		y="78.098389" />
	<rect
		style="fill:#483737;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.0280302"
		id="rect1528-1-4-0-2"
		width="28.056028"
		height="7.5433302"
		x="106.38811"
		y="83.286377" />
	<text
		xml:space="preserve"
		style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		x="221.2113"
		y="85.289711"
		id="text2310"><tspan
		  sodipodi:role="line"
		  id="tspan2308"
		  x="221.2113"
		  y="85.289711"
		  style="stroke-width:0.264583" /></text>
	<text
		xml:space="preserve"
		style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.73003000000000018px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#e6e6e6;fill-opacity:1;stroke:none;stroke-width:0.50475;"
		x="120.1451"
		y="63.163872"
		id="text1532-5-6"
		transform="scale(0.91707732,1.0904206)"><tspan
		  sodipodi:role="line"
		  id="tspan1579"
		  x="120.1451"
		  y="63.163872">Monopoly</tspan></text>
	<text
		xml:space="preserve"
		style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.73001999999999967px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.504751;"
		x="117.52901"
		y="76.146515"
		id="text1532-5-6-5"
		transform="scale(0.91707732,1.0904206)"><tspan
		  sodipodi:role="line"
		  id="tspan1579-3"
		  x="117.52901"
		  y="76.146515"
		  style="stroke-width:0.504751;fill:#ffffff;fill-opacity:1;">Escape</tspan></text>
	<text
		xml:space="preserve"
		style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.73001999999999967px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#c6c6c6;fill-opacity:1;stroke:none;stroke-width:0.504751;"
		x="121.18219"
		y="82.03511"
		id="text1532-5-6-5-6"
		transform="scale(0.91707732,1.0904206)"><tspan
		  sodipodi:role="line"
		  id="tspan1579-3-0"
		  x="121.18219"
		  y="82.03511"
		  style="stroke-width:0.504751;fill:#c6c6c6;fill-opacity:1;">BunkO</tspan></text>
	<text
		xml:space="preserve"
		style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		x="149.53474"
		y="87.175934"
		id="text2314"><tspan
		  sodipodi:role="line"
		  id="tspan2312"
		  x="149.53474"
		  y="87.175934"
		  style="stroke-width:0.264583"></tspan></text>
	<g
		id="g2395"
		transform="translate(28.764936,-1.6504471)">
	  <rect
		  style="fill:#808000;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.0280302"
		  id="rect1528-1-4-0-2-3"
		  width="28.05603"
		  height="7.5433302"
		  x="107.68491"
		  y="107.21786" />
	  <text
		  xml:space="preserve"
		  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.73002px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.504751"
		  x="118.29181"
		  y="104.23321"
		  id="text1532-5-6-5-6-0-4"
		  transform="scale(0.91707732,1.0904206)"><tspan
			 sodipodi:role="line"
			 id="tspan1655"
			 x="118.29181"
			 y="104.23321">Scrabble</tspan></text>
	</g>
	<g
		id="g2390"
		transform="translate(0.47155633,-22.634704)">
	  <rect
		  style="fill:#d45500;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.0280302"
		  id="rect1528-1-4-0-2-3-2"
		  width="28.05603"
		  height="7.5433302"
		  x="135.27095"
		  y="106.74632" />
	  <text
		  xml:space="preserve"
		  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.38485px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.403863"
		  x="152.74727"
		  y="101.16546"
		  id="text1532-5-6-5-6-0-4-4"
		  transform="scale(0.90089073,1.1100125)"><tspan
			 sodipodi:role="line"
			 id="tspan2380"
			 x="152.74727"
			 y="101.16546">pictiOnary</tspan></text>
	</g>
	<g
		id="g2385"
		transform="translate(-26.642932,22.634704)">
	  <rect
		  style="fill:#00ce29;fill-opacity:1;stroke:#f9f9f9;stroke-width:0.0262945"
		  id="rect1528-1-4"
		  width="31.594435"
		  height="5.8946185"
		  x="132.44073"
		  y="84.757797" />
	  <text
		  xml:space="preserve"
		  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.12359px;line-height:1.25;font-family:'American Typewriter';-inkscape-font-specification:'American Typewriter, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.459269"
		  x="138.8634"
		  y="86.803696"
		  id="text1532-5-6-5-6-0"
		  transform="scale(0.96835245,1.0326818)"><tspan
			 sodipodi:role="line"
			 id="tspan1635"
			 x="138.8634"
			 y="86.803696"
			 style="stroke-width:0.459269">rumiKuub</tspan></text>
	</g>
 </g>
</svg>`;
  return html;
}
