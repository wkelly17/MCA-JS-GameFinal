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
  //   id = '${room.name}_couch'
  //   class = '${room.name}_couch'
  let couchBase = `
  <svg
  id = '${room.name}_couchBase'
  class = '${room.name}_couchBase'
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
    inkscape:zoom="2.0435778"
    inkscape:cx="129.31435"
    inkscape:cy="129.84101"
    inkscape:document-units="px"
    inkscape:current-layer="$couchWhole"
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
       <dc:title />
     </cc:Work>
   </rdf:RDF>
 </metadata>
 <g
    inkscape:label="Layer 1"
    inkscape:groupmode="layer"
    id="layer1"
    transform="translate(-98.211056,46.820592)">
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
    transform="translate(64.316817,-19.074931)">
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
</svg> `;

  function middleCouchCushionClass() {
    if (room.$middleCouchCushion.inspected) {
      return `${room.name}_couchCushionInspected`;
    } else return '';
  }
  function sideCouchCushionClass(whichPillow, whichCushion) {
    if (whichPillow.inspected && whichCushion.inspected) {
      return `${room.name}_couchCushionInspected`;
    } else {
      return '';
    }
  }

  let couchCushions = `
  <svg
  class = '${room.name}_couchCushions'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="228.97031"
   height="107.84049"
   viewBox="0 0 60.581731 28.532798"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="couchCushions.svg">
  <defs
     id="defs2936">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : 0.70287268 : 1"
       inkscape:vp_y="0 : 1000 : 0"
       inkscape:vp_z="74.868174 : 0.70287268 : 1"
       inkscape:persp3d-origin="37.434087 : -8.5737694 : 1"
       id="perspective76394" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.3954665"
     inkscape:cx="71.288696"
     inkscape:cy="145.58079"
     inkscape:document-units="px"
     inkscape:current-layer="$couchWhole"
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
       originx="-69.081571"
       originy="51.917493" />
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
     transform="translate(-106.33226,34.85597)">
  
  <rect
  data-selector = 'middleCouchCushion'
     style="fill:#382509;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="$couchLegRight"
     width="3.2906032"
     height="5.4366484"
     x="81.656822"
     y="32.452667"
     ry="0.50074422" />
  <circle
     id="path76087"
     style="fill:#808000;stroke:#000000;stroke-width:0.264583"
     cx="19.12215"
     cy="38.63163"
     r="0.032468773" />
  <rect
     style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:0.926042;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="$couchBack"
     width="58.717255"
     height="26.533321"
     x="27.229557"
     y="-16.400444"
     ry="2.6680324" />
  <rect
     style="opacity:1;fill:#808000;fill-opacity:1;stroke:#000000;stroke-width:1.50813;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="rect76103-0"
     width="58.717255"
     height="26.533321"
     x="27.106716"
     y="6.9390535"
     ry="2.6680324" />
  <g
     id="$couchCushions"
     style="fill:#5d2e00;fill-opacity:1"
     transform="translate(65.075225,-66.285847)">
    <rect
    data-selector = 'sideCouchCushion'
    class = '${sideCouchCushionClass(
      room.$couchPillow1,
      room.$sideCouchCushion
    )}'
       style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect76120"
       width="17.443203"
       height="26.533321"
       x="42.011093"
       y="32.675293"
       ry="2.6680322" />
    <rect
    data-selector = 'middleCouchCushion'
    class = '${middleCouchCushionClass()}'
       style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect76122"
       width="23.339497"
       height="26.779001"
       x="60.19133"
       y="32.183937"
       ry="2.6680322" />
    <rect
    data-selector = 'sideCouchCushion2'
    class = '${sideCouchCushionClass(
      room.$couchPillow2,
      room.$sideCouchCushion2
    )}'
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
     x="82.998665"
     y="-1.905389"
     ry="2.6680324" />
  <rect
     style="opacity:1;fill:#5d2e00;fill-opacity:1;stroke:#000000;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="$couchArmrestLeft"
     width="9.8271561"
     height="18.917274"
     x="19.85918"
     y="-1.1683513"
     ry="2.6680324" />
</g>
</g>
</svg>
  `;

  function pillow1ClassNames() {
    if (room.$couchPillow1.inspected) {
      return `${room.name}_couchPillow-inspected 
      ${room.name}_couchPillow`;
    } else {
      return `${room.name}_couchPillow`;
    }
  }
  function pillow2ClassNames() {
    if (room.$couchPillow2.inspected) {
      return `${room.name}_couchPillow2 ${room.name}_couchPillow-inspected 
      `;
    } else {
      return `${room.name}_couchPillow2`;
    }
  }

  let couchPillows = `
<svg
id = '${room.name}_couchPillow'
class = '${pillow1ClassNames()}'
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
     transform="translate(-121.73699,24.616945)">
  <rect
  data-selector = 'couchPillow1'
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
class = '${pillow2ClassNames()}'
data-selector = 'couchPillow2'
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
     transform="translate(-121.73699,24.616945)">
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

  function keyClass() {
    if (
      room.$couchPillow2.inspected &&
      room.$sideCouchCushion2.inspected &&
      !room.$couchKey.found
    ) {
      return `dVisible ${room.name}_couchKey`;
    } else {
      return 'dNone';
    }
  }

  let key = `
<svg
data-selector = 'couchKey'
id = '${room.name}_couchKey'
class = '${keyClass()}'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="6.89698mm"
   height="5.356892mm"
   viewBox="0 0 42.896981 15.356892"
   version="1.1"
   id="svg2261"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="key2.svg">
  <defs
     id="defs2255">
    <inkscape:path-effect
       effect="powerclip"
       id="path-effect6696"
       is_visible="true"
       lpeversion="1"
       inverse="true"
       flatten="false"
       hide_clip="false"
       message="Use fill-rule evenodd on &lt;b&gt;fill and stroke&lt;/b&gt; dialog if no flatten result after convert clip to paths." />
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath6692">
      <path
         style="display:none;fill:none;stroke:#000000;stroke-width:0.269156px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 16.994229,60.11312 0.05739,7.878409 c 1.186759,-1.14874 2.526398,-1.937697 2.984165,-4.802078 -0.667835,-2.608867 -1.763946,-3.257883 -3.041555,-3.076331 z"
         id="path6694"
         sodipodi:nodetypes="cccc" />
      <path
         id="lpe_path-effect6696"
         style="fill:none;stroke:#000000;stroke-width:0.269156px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         class="powerclip"
         d="M 4.3861909,52.001024 H 26.257062 V 75.888823 H 4.3861909 Z m 12.6080381,8.112096 0.05739,7.878409 c 1.186759,-1.14874 2.526398,-1.937697 2.984165,-4.802078 -0.667835,-2.608867 -1.763946,-3.257883 -3.041555,-3.076331 z" />
    </clipPath>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="2.1819621"
     inkscape:cx="76.98585"
     inkscape:cy="7.8131226"
     inkscape:document-units="mm"
     inkscape:current-layer="windowKey"
     inkscape:document-rotation="0"
     showgrid="false"
     inkscape:window-width="1440"
     inkscape:window-height="847"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="0" />
  <metadata
     id="metadata2258">
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
     transform="translate(-50.151325,-90.445047)">
    <g
       id="windowKey"
       style="display:inline"
       transform="matrix(0.79548291,0,0,0.65567065,75.65364,29.668093)">
      <g
         id="g3267"
         transform="matrix(3.8563287,0,0,5.1689532,-70.374422,-393.42765)">
        <path
           id="path1574"
           style="fill:#ffff00;fill-opacity:1;stroke:#ffff00;stroke-width:0.515076;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 24.488698,91.435609 a 1.522605,1.522605 0 0 1 1.517987,-1.522597 1.522605,1.522605 0 0 1 1.527194,1.513364 1.522605,1.522605 0 0 1 -1.508726,1.531776 1.522605,1.522605 0 0 1 -1.536344,-1.504073 l 1.522494,-0.01849 z" />
        <path
           sodipodi:type="spiral"
           style="fill:none;fill-rule:evenodd;stroke:#f2f2f2;stroke-width:0.515076"
           id="path1149"
           sodipodi:cx="28.187864"
           sodipodi:cy="91.590897"
           sodipodi:expansion="1"
           sodipodi:revolution="2.6178427"
           sodipodi:radius="1.4911951"
           sodipodi:argument="-9.0126333"
           sodipodi:t0="0.50488001"
           d="m 28.759713,91.101193 c 0.337052,0.309485 0.317854,0.847427 0.01048,1.169718 -0.369031,0.386944 -0.997301,0.360824 -1.370511,-0.0051 -0.436983,-0.428401 -0.403895,-1.147287 0.02059,-1.571304 0.487659,-0.487118 1.297347,-0.447034 1.772098,0.03613 0.537319,0.546844 0.490221,1.44746 -0.05167,1.972892 -0.102773,0.09965 -0.220174,0.184028 -0.34721,0.249994" />
        
        <path
           style="fill:#ffff00;stroke:#ffff00;stroke-width:0.15431;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 26.748102,92.526306 0.588434,-0.675316 0.196145,0.278072 -0.574424,0.734902 z"
           id="path2353" />
        <path
           style="fill:none;stroke:#ffff00;stroke-width:0.269557;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 27.037149,90.23964 0.619071,0.917985 -0.154767,0.229497 -0.619072,-0.897123 z"
           id="path2916" />
      </g>
      <g
         id="g6704"
         transform="matrix(1.6864915,0,0,1.6864915,-13.983054,-3.4374088)">
        <path
           style="fill:#b3b3b3;stroke:none;stroke-width:1.09907"
           id="path6121"
           clip-path="url(#clipPath6692)"
           inkscape:path-effect="#path-effect6696"
           sodipodi:type="arc"
           sodipodi:cx="15.321627"
           sodipodi:cy="63.944923"
           sodipodi:rx="5.9354358"
           sodipodi:ry="6.9438996"
           d="m 21.257062,63.944923 a 5.9354358,6.9438996 0 0 1 -5.935435,6.9439 5.9354358,6.9438996 0 0 1 -5.9354361,-6.9439 5.9354358,6.9438996 0 0 1 5.9354361,-6.943899 5.9354358,6.9438996 0 0 1 5.935435,6.943899 z" />
        <path
           style="fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.366357px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="M 11.094946,60.850328 H 4.9321737 L 4.1212827,61.93251 2.8238569,60.751947 1.3642532,63.309832 0.06682735,60.948708 -1.636044,60.850328 l -0.729802,2.262744 -1.8650496,-2.262744 -2.7570296,1.082181 -3.7300988,1.377323 2.6759403,3.443306 c 2.6623041,0.04203 3.8544276,0.272848 6.2438616,-0.29514 1.24246501,0.143834 2.72960029,0.169392 3.9733661,0.295141 l 3.5679211,-0.09838 3.081386,-0.09838 2.7570299,-0.688662 z"
           id="path6700"
           sodipodi:nodetypes="cccccccccccccccccc" />
      </g>
    </g>
  </g>
</svg>
`;

  return couchBase.concat(key).concat(couchCushions).concat(couchPillows);
}
