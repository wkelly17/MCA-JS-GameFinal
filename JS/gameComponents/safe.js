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
  let html = `
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
  return html;
}
