export default function table(room) {
  // functions here

  function tableClassNames() {
    if (room.$table.inspected) {
      return `${room.name}_table ${room.name}table-inspected`;
    } else {
      return `${room.name}_table`;
    }
  }
  // class = 'tableClassNames()}'
  // data-selector = 'table'
  let html = `
	  <svg
	  id = '${room.name}_table'
	  class = '${room.name}_table'
	  xmlns:dc="http://purl.org/dc/elements/1.1/"
	  xmlns:cc="http://creativecommons.org/ns#"
	  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	  xmlns:svg="http://www.w3.org/2000/svg"
	  xmlns="http://www.w3.org/2000/svg"
	  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
	  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	  width="224.11234"
	  height="129.69043"
	  viewBox="0 0 59.296394 34.313927"
	  version="1.1"
	  id="svg2942"
	  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
	  sodipodi:docname="kitchenTable.svg">
	 <defs
		 id="defs2936" />
	 <sodipodi:namedview
		 id="base"
		 pagecolor="#ffffff"
		 bordercolor="#666666"
		 borderopacity="1.0"
		 inkscape:pageopacity="0.0"
		 inkscape:pageshadow="2"
		 inkscape:zoom="2.8412049"
		 inkscape:cx="93.614695"
		 inkscape:cy="78.283837"
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
			originx="-55.829618"
			originy="15.434306" />
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
		 transform="translate(-93.080315,-1.6272229)">
		<g
			id="$kitchenTable">
		  <rect
			  style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.407768;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  id="rect72384"
			  width="59.296391"
			  height="8.9877529"
			  x="93.080315"
			  y="1.6272229" />
		  <path
			  id="rect72386"
			  style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  d="m 93.134708,9.5847305 h 2.0813 l -0.38875,26.2764715 h -1.69255 z"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  id="rect72386-4"
			  style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.263841;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  d="m 96.346208,9.3299005 h 2.0813 l -0.38875,26.1292305 h -1.69255 z"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  id="rect72386-6"
			  style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.252886;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  d="m 151.61549,8.9235085 h -1.90134 l 0.35513,26.2764815 h 1.54621 z"
			  sodipodi:nodetypes="ccccc" />
		  <path
			  id="rect72386-44"
			  style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.267481;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			  d="m 146.08856,9.0860655 h 2.0813 l -0.38874,26.8550855 h -1.69256 z"
			  sodipodi:nodetypes="ccccc" />
		</g>
	 </g>
	</svg>
	
	 `;
  let kitchenChair1 = `
<svg
id = '${room.name}_kitchenChair1'
class = '${room.name}_kitchenChair1'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="69.541214"
   height="150.07262"
   viewBox="0 0 18.399448 39.706714"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="kitchenChair.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="2.8412049"
     inkscape:cx="19.922526"
     inkscape:cy="66.585089"
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
       originx="-72.626752"
       originy="4.60975" />
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
     transform="translate(-109.87745,-12.451779)">
    <g
       id="$kitchenChair"
       transform="translate(11.930729,-52.637886)">
      <path
         style="fill:#483737;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 101.32301,65.089665 -0.11254,15.981091 h 15.08075 v 9.228516 l -18.344497,-0.112543 0.11255,-25.097064 z"
         id="path72416" />
      <path
         id="rect72386-6-0"
         style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.192636;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 116.34617,89.540755 h -1.90134 l 0.35514,15.247275 h 1.5462 z"
         sodipodi:nodetypes="ccccc" />
      <path
         id="rect72386-6-0-2"
         style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.217924;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 97.960863,89.176622 h 2.375287 l -0.443667,15.619758 h -1.93162 z"
         sodipodi:nodetypes="ccccc" />
    </g>
  </g>
</svg>

`;
  let kitchenChair2 = `
<svg
id = '${room.name}_kitchenChair2'
class = '${room.name}_kitchenChair2'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="69.541214"
   height="150.07262"
   viewBox="0 0 18.399448 39.706714"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="kitchenChair.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="2.8412049"
     inkscape:cx="19.922526"
     inkscape:cy="66.585089"
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
       originx="-72.626752"
       originy="4.60975" />
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
     transform="translate(-109.87745,-12.451779)">
    <g
       id="$kitchenChair"
       transform="translate(11.930729,-52.637886)">
      <path
         style="fill:#483737;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 101.32301,65.089665 -0.11254,15.981091 h 15.08075 v 9.228516 l -18.344497,-0.112543 0.11255,-25.097064 z"
         id="path72416" />
      <path
         id="rect72386-6-0"
         style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.192636;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 116.34617,89.540755 h -1.90134 l 0.35514,15.247275 h 1.5462 z"
         sodipodi:nodetypes="ccccc" />
      <path
         id="rect72386-6-0-2"
         style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.217924;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 97.960863,89.176622 h 2.375287 l -0.443667,15.619758 h -1.93162 z"
         sodipodi:nodetypes="ccccc" />
    </g>
  </g>
</svg>

`;

  return html.concat(kitchenChair1).concat(kitchenChair2);
}
