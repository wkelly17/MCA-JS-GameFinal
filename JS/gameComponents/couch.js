export default function couch(room) {
  // functions here

  //   todo: under Couch hitbox

  function couchClassNames() {
    if (room.$couch.inspected) {
      return `${room.name}_couch ${room.name}couch-inspected`;
    } else {
      return `${room.name}_couch`;
    }
  }

  // class = 'couchClassNames()}'
  // data-selector = 'couch'
  let html = `
<svg
id = '${room.name}_couch'
class = '${room.name}_couch'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="282.96631"
   height="210.36794"
   viewBox="0 0 74.868174 55.659851"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="couchWhole.svg">
  <defs
     id="defs2936">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : 27.829926 : 1"
       inkscape:vp_y="0 : 1000 : 0"
       inkscape:vp_z="74.868174 : 27.829926 : 1"
       inkscape:persp3d-origin="37.434087 : 18.553284 : 1"
       id="perspective76394" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.1769632"
     inkscape:cx="54.45047"
     inkscape:cy="169.59918"
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
       originx="-60.960367"
       originy="63.882115" />
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
     transform="translate(-98.211056,46.820592)">$couchLeftLeft=&quot;rect76132&quot;
     id=&quot;rect76329&quot; /&gt;
  <g
   id="$couchWhole">
  <rect
     style="fill:#382509;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     width="3.2906032"
     height="5.4366484"
     x="106.32941"
     y="3.2108855"
     ry="0.50074422"
     id="rect76348" />
  <rect
     style="fill:#382509;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="$couchLegRight"
     width="3.2906032"
     height="5.4366484"
     x="160.91049"
     y="2.4955382"
     ry="0.50074422" />
  <circle
     id="path76087"
     style="fill:#808000;stroke:#000000;stroke-width:0.264583"
     cx="98.375816"
     cy="8.6745024"
     r="0.032468773" />
  <rect
     style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:0.926042;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="$couchBack"
     width="58.717255"
     height="26.533321"
     x="106.48322"
     y="-46.357571"
     ry="2.6680324" />
  <rect
     style="opacity:1;fill:#808000;fill-opacity:1;stroke:#000000;stroke-width:1.50813;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="rect76103-0"
     width="58.717255"
     height="26.533321"
     x="106.36038"
     y="-23.018074"
     ry="2.6680324" />
  <g
     id="$couchCushions"
     style="fill:#5d2e00;fill-opacity:1"
     transform="translate(64.349289,-55.693367)">
    <rect
       style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect76120"
       width="17.443203"
       height="26.533321"
       x="42.011093"
       y="32.675293"
       ry="2.6680322" />
    <rect
       style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect76122"
       width="23.339497"
       height="26.779001"
       x="60.19133"
       y="32.183937"
       ry="2.6680322" />
    <rect
       style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.57849;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect76124"
       width="16.63579"
       height="26.217268"
       x="84.413727"
       y="32.575474"
       ry="2.9352081" />
  </g>
  <rect
     style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="$couchArmrest"
     width="10.072835"
     height="19.162954"
     x="162.25233"
     y="-31.862516"
     ry="2.6680324" />
  <rect
     style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="$couchArmrestLeft"
     width="9.8271561"
     height="18.917274"
     x="99.112846"
     y="-31.125479"
     ry="2.6680324" />
</g>
</g>
</svg>

<svg
id = '${room.name}_couchPillow'
class = '${room.name}_couchPillow'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="77.059448"
   height="71.76107"
   viewBox="0 0 20.388647 18.986784"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="couchPillow.svg">
  <defs
     id="defs2936">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : -8.8431415 : 1"
       inkscape:vp_y="0 : 1000 : 0"
       inkscape:vp_z="74.868174 : -8.8431415 : 1"
       inkscape:persp3d-origin="37.434087 : -18.119784 : 1"
       id="perspective76394" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.1769632"
     inkscape:cx="-34.466437"
     inkscape:cy="85.679887"
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
       originx="-84.486301"
       originy="41.678468" />
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
     transform="translate(-121.73699,24.616945)">$couchLeftLeft=&quot;rect76132&quot;
     id=&quot;rect76329&quot; /&gt;
  <rect
   style="opacity:1;fill:#0a0938;fill-opacity:1;stroke:none;stroke-width:0.922668;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
   id="rect76236"
   width="16.156628"
   height="14.714817"
   x="109.34376"
   y="-66.112267"
   ry="0.30136475"
   transform="matrix(0.94141665,0.33724574,-0.36402469,0.9313893,0,0)" />
</g>
</svg>

<svg
id = '${room.name}_couchPillow2'
class = '${room.name}_couchPillow2'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="77.059448"
   height="71.76107"
   viewBox="0 0 20.388647 18.986784"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="couchPillow.svg">
  <defs
     id="defs2936">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : -8.8431415 : 1"
       inkscape:vp_y="0 : 1000 : 0"
       inkscape:vp_z="74.868174 : -8.8431415 : 1"
       inkscape:persp3d-origin="37.434087 : -18.119784 : 1"
       id="perspective76394" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.1769632"
     inkscape:cx="-34.466437"
     inkscape:cy="85.679887"
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
       originx="-84.486301"
       originy="41.678468" />
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
     transform="translate(-121.73699,24.616945)">$couchLeftLeft=&quot;rect76132&quot;
     id=&quot;rect76329&quot; /&gt;
  <rect
   style="opacity:1;fill-opacity:1;stroke:none;stroke-width:0.922668;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
   id="rect76236"
   width="16.156628"
   height="14.714817"
   x="109.34376"
   y="-66.112267"
   ry="0.30136475"
   transform="matrix(0.94141665,0.33724574,-0.36402469,0.9313893,0,0)" />
</g>
</svg>

 `;
  return html;
}
