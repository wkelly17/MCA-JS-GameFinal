export default function kitchenCabinet(room) {
  // functions here

  function kitchenCabinetClassNames() {
    if (room.$kitchenCabinet.inspected) {
      return `${room.name}_kitchenCabinet ${room.name}kitchenCabinet-inspected`;
    } else {
      return `${room.name}_kitchenCabinet`;
    }
  }

  function cabinetDoorClasses(num) {
    let picked = '$cabinetDoor'.concat(num);
    if (room[picked].inspected) {
      return `${room.name}_cabinetDoor${num} ${room.name}_lowerCabinetDoor-inspected`;
    } else {
      return `${room.name}_cabinetDoor${num}`;
    }
  }

  // class = 'kitchenCabinetClassNames()}'
  // data-selector = 'kitchenCabinet'
  let cabinet1 = `
  <svg
  id = '${room.name}_kitchenCabinet'
  class = '${room.name}_kitchenCabinet'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="220.17239"
   height="210.93871"
   viewBox="0 0 68.837282 55.810866"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetrySection.svg.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.76794631"
     inkscape:cx="40.530627"
     inkscape:cy="-94.664311"
     inkscape:document-units="px"
     inkscape:current-layer="g3059"
     inkscape:document-rotation="0"
     showgrid="false"
     units="px"
     inkscape:window-width="1440"
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
     transform="translate(-60.912937,-112.09339)">
    <g
       id="g3059"
       transform="translate(2.2754507,17.387206)">
      <g
         id="g3695"
         transform="translate(67.171034,-69.129226)">
        <rect
           style="fill:#665334;fill-opacity:1;stroke-width:0.264583"
           id="rect2469"
           width="21.003489"
           height="27.892632"
           x="15.549083"
           y="73.221275" />
        <ellipse
           style="fill:#c5c48e;fill-opacity:1;stroke-width:0.174461"
           id="path3049"
           cx="33.247597"
           cy="87.139153"
           rx="1.2602092"
           ry="1.3442231" />
      </g>
      <g
         id="g3823"
         transform="translate(-4.8234709,43.411238)">
        <rect
           style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
           id="rect2465"
           width="168.90173"
           height="38.466228"
           x="33.220837"
           y="0.349693" />
        <g
           id="g3741"
           transform="translate(3.6914373,-0.10076718)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1"
             width="21.003489"
             height="27.892632"
             x="40.133408"
             y="5.8884706" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676"
             width="24.917202"
             height="1.8457186"
             x="38.022743"
             y="12.144293" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0"
             width="24.917202"
             height="1.8457187"
             x="38.176548"
             y="23.218605" />
        </g>
        <g
           id="g3776"
           transform="translate(8.5620871,0.82209182)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1-9"
             width="21.003489"
             height="27.892632"
             x="78.355164"
             y="4.9656115" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-3"
             width="24.917202"
             height="1.8457187"
             x="76.244499"
             y="11.221433" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0-0"
             width="24.917202"
             height="1.8457187"
             x="76.3983"
             y="22.295744" />
        </g>
        <g
           id="g3781"
           transform="translate(17.81631,2.0525708)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1-5"
             width="21.003489"
             height="27.892632"
             x="112.19334"
             y="3.7351322" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-2"
             width="24.917202"
             height="1.8457187"
             x="110.08267"
             y="9.9909534" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0-3"
             width="24.917202"
             height="1.8457187"
             x="110.23648"
             y="21.065266" />
        </g>
        <g
           id="g3786"
           transform="translate(3.6914373,1.4373308)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1-8"
             width="21.003489"
             height="27.892632"
             x="169.41061"
             y="4.3503718" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-7"
             width="24.917202"
             height="1.8457187"
             x="167.29996"
             y="10.606193" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0-8"
             width="24.917202"
             height="1.8457187"
             x="167.45375"
             y="21.680506" />
        </g>
      </g>
      <g
         id="$wholeCabinetSection-7"
         transform="matrix(1.4421107,0,0,1.8127445,-3.9079262,-28.954473)">
        <g
           id="$cabinetSection-6">
          <g
             id="$counterFrame-7">
            <rect
               style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:none;stroke-width:0.47625;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67761-8"
               width="47.634338"
               height="30.78805"
               x="43.470104"
               y="68.217369"
               ry="0" />
            <rect
               style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.476981;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67763-9"
               width="47.71373"
               height="1.607507"
               x="43.370743"
               y="68.279655" />
          </g>
          <g
             id="$topDrawer1-2">
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67901-4"
               width="10.688569"
               height="4.1970816"
               x="46.001724"
               y="71.13932" />
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67903-0"
               width="8.8418522"
               height="2.7980545"
               x="47.064987"
               y="71.897263" />
            <path
               style="opacity:1;fill:#aa8800;fill-opacity:1;stroke:none;stroke-width:0.199622;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path67905-1"
               sodipodi:type="arc"
               sodipodi:cx="51.292606"
               sodipodi:cy="73.155792"
               sodipodi:rx="0.3467589"
               sodipodi:ry="0.34363821"
               sodipodi:start="0"
               sodipodi:end="6.270968"
               sodipodi:open="true"
               sodipodi:arc-type="arc"
               d="m 51.639365,73.155792 a 0.3467589,0.34363821 0 0 1 -0.3457,0.343637 0.3467589,0.34363821 0 0 1 -0.347811,-0.341538 0.3467589,0.34363821 0 0 1 0.343575,-0.345723 0.3467589,0.34363821 0 0 1 0.34991,0.339426" />
          </g>
          <g
             id="$cabinetInterior-2"
             transform="translate(-17.135051,0.39121116)">
            <rect
               style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.404504;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67765-7-3"
               width="11.019096"
               height="18.393833"
               x="63.257172"
               y="77.721344" />
            <rect
               style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262586;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect71948-25"
               width="10.763871"
               height="0.12559795"
               x="63.392986"
               y="85.76149" />
          </g>
          <g
             id="$cabinetInterior-8-5"
             transform="translate(-1.9498286,0.39841348)">
            <rect
               style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.404504;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67765-7-2-0"
               width="11.019096"
               height="18.393833"
               x="63.257172"
               y="77.721344" />
            <rect
               style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262586;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect71948-8-6"
               width="10.763871"
               height="0.12559795"
               x="63.392986"
               y="85.76149" />
          </g>
          <g
             id="$cabinetInterior-5-6"
             transform="translate(14.458465,0.32017123)">
            <rect
               style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.404504;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67765-7-1-8"
               width="11.019096"
               height="18.393833"
               x="63.257172"
               y="77.721344" />
            <rect
               style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262586;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect71948-2-4"
               width="10.763871"
               height="0.12559795"
               x="63.392986"
               y="85.76149" />
          </g>
          <g
             id="$topDrawer1-7-9"
             transform="translate(15.296987,0.09242459)">
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67901-9-8"
               width="10.688569"
               height="4.1970816"
               x="46.001724"
               y="71.13932" />
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67903-5-5"
               width="8.8418522"
               height="2.7980545"
               x="47.064987"
               y="71.897263" />
            <path
               style="opacity:1;fill:#aa8800;fill-opacity:1;stroke:none;stroke-width:0.199622;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path67905-6-0"
               sodipodi:type="arc"
               sodipodi:cx="51.292606"
               sodipodi:cy="73.155792"
               sodipodi:rx="0.3467589"
               sodipodi:ry="0.34363821"
               sodipodi:start="0"
               sodipodi:end="6.270968"
               sodipodi:open="true"
               sodipodi:arc-type="arc"
               d="m 51.639365,73.155792 a 0.3467589,0.34363821 0 0 1 -0.3457,0.343637 0.3467589,0.34363821 0 0 1 -0.347811,-0.341538 0.3467589,0.34363821 0 0 1 0.343575,-0.345723 0.3467589,0.34363821 0 0 1 0.34991,0.339426" />
          </g>
          <g
             id="$topDrawer1-3-1"
             transform="translate(31.715521,0.39867058)">
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67901-3-3"
               width="10.688569"
               height="4.1970816"
               x="46.001724"
               y="71.13932" />
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67903-9-6"
               width="8.8418522"
               height="2.7980545"
               x="47.064987"
               y="71.897263" />
            <path
               style="opacity:1;fill:#aa8800;fill-opacity:1;stroke:none;stroke-width:0.199622;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path67905-8-0"
               sodipodi:type="arc"
               sodipodi:cx="51.292606"
               sodipodi:cy="73.155792"
               sodipodi:rx="0.3467589"
               sodipodi:ry="0.34363821"
               sodipodi:start="0"
               sodipodi:end="6.270968"
               sodipodi:open="true"
               sodipodi:arc-type="arc"
               d="m 51.639365,73.155792 a 0.3467589,0.34363821 0 0 1 -0.3457,0.343637 0.3467589,0.34363821 0 0 1 -0.347811,-0.341538 0.3467589,0.34363821 0 0 1 0.343575,-0.345723 0.3467589,0.34363821 0 0 1 0.34991,0.339426" />
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>`;
  let cabinet2 = `
  <svg
  id = '${room.name}_kitchenCabinet2'
  class = '${room.name}_kitchenCabinet2'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="220.17239"
   height="210.93871"
   viewBox="0 0 68.837282 55.810866"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetrySection.svg.svg">
  <defs
     id="defs2936" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.76794631"
     inkscape:cx="40.530627"
     inkscape:cy="-94.664311"
     inkscape:document-units="px"
     inkscape:current-layer="g3059"
     inkscape:document-rotation="0"
     showgrid="false"
     units="px"
     inkscape:window-width="1440"
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
     transform="translate(-60.912937,-112.09339)">
    <g
       id="g3059"
       transform="translate(2.2754507,17.387206)">
      <g
         id="g3695"
         transform="translate(67.171034,-69.129226)">
        <rect
           style="fill:#665334;fill-opacity:1;stroke-width:0.264583"
           id="rect2469"
           width="21.003489"
           height="27.892632"
           x="15.549083"
           y="73.221275" />
        <ellipse
           style="fill:#c5c48e;fill-opacity:1;stroke-width:0.174461"
           id="path3049"
           cx="33.247597"
           cy="87.139153"
           rx="1.2602092"
           ry="1.3442231" />
      </g>
      <g
         id="g3823"
         transform="translate(-4.8234709,43.411238)">
        <rect
           style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
           id="rect2465"
           width="168.90173"
           height="38.466228"
           x="33.220837"
           y="0.349693" />
        <g
           id="g3741"
           transform="translate(3.6914373,-0.10076718)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1"
             width="21.003489"
             height="27.892632"
             x="40.133408"
             y="5.8884706" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676"
             width="24.917202"
             height="1.8457186"
             x="38.022743"
             y="12.144293" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0"
             width="24.917202"
             height="1.8457187"
             x="38.176548"
             y="23.218605" />
        </g>
        <g
           id="g3776"
           transform="translate(8.5620871,0.82209182)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1-9"
             width="21.003489"
             height="27.892632"
             x="78.355164"
             y="4.9656115" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-3"
             width="24.917202"
             height="1.8457187"
             x="76.244499"
             y="11.221433" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0-0"
             width="24.917202"
             height="1.8457187"
             x="76.3983"
             y="22.295744" />
        </g>
        <g
           id="g3781"
           transform="translate(17.81631,2.0525708)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1-5"
             width="21.003489"
             height="27.892632"
             x="112.19334"
             y="3.7351322" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-2"
             width="24.917202"
             height="1.8457187"
             x="110.08267"
             y="9.9909534" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0-3"
             width="24.917202"
             height="1.8457187"
             x="110.23648"
             y="21.065266" />
        </g>
        <g
           id="g3786"
           transform="translate(3.6914373,1.4373308)">
          <rect
             style="fill:#f5f2ec;fill-opacity:1;stroke-width:0.264583"
             id="rect2469-1-8"
             width="21.003489"
             height="27.892632"
             x="169.41061"
             y="4.3503718" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-7"
             width="24.917202"
             height="1.8457187"
             x="167.29996"
             y="10.606193" />
          <rect
             style="fill:#8d7248;fill-opacity:1;stroke-width:0.264583"
             id="rect3676-0-8"
             width="24.917202"
             height="1.8457187"
             x="167.45375"
             y="21.680506" />
        </g>
      </g>
      <g
         id="$wholeCabinetSection-7"
         transform="matrix(1.4421107,0,0,1.8127445,-3.9079262,-28.954473)">
        <g
           id="$cabinetSection-6">
          <g
             id="$counterFrame-7">
            <rect
               style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:none;stroke-width:0.47625;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67761-8"
               width="47.634338"
               height="30.78805"
               x="43.470104"
               y="68.217369"
               ry="0" />
            <rect
               style="opacity:1;fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.476981;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67763-9"
               width="47.71373"
               height="1.607507"
               x="43.370743"
               y="68.279655" />
          </g>
          <g
             id="$topDrawer1-2">
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67901-4"
               width="10.688569"
               height="4.1970816"
               x="46.001724"
               y="71.13932" />
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67903-0"
               width="8.8418522"
               height="2.7980545"
               x="47.064987"
               y="71.897263" />
            <path
               style="opacity:1;fill:#aa8800;fill-opacity:1;stroke:none;stroke-width:0.199622;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path67905-1"
               sodipodi:type="arc"
               sodipodi:cx="51.292606"
               sodipodi:cy="73.155792"
               sodipodi:rx="0.3467589"
               sodipodi:ry="0.34363821"
               sodipodi:start="0"
               sodipodi:end="6.270968"
               sodipodi:open="true"
               sodipodi:arc-type="arc"
               d="m 51.639365,73.155792 a 0.3467589,0.34363821 0 0 1 -0.3457,0.343637 0.3467589,0.34363821 0 0 1 -0.347811,-0.341538 0.3467589,0.34363821 0 0 1 0.343575,-0.345723 0.3467589,0.34363821 0 0 1 0.34991,0.339426" />
          </g>
          <g
             id="$cabinetInterior-2"
             transform="translate(-17.135051,0.39121116)">
            <rect
               style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.404504;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67765-7-3"
               width="11.019096"
               height="18.393833"
               x="63.257172"
               y="77.721344" />
            <rect
               style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262586;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect71948-25"
               width="10.763871"
               height="0.12559795"
               x="63.392986"
               y="85.76149" />
          </g>
          <g
             id="$cabinetInterior-8-5"
             transform="translate(-1.9498286,0.39841348)">
            <rect
               style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.404504;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67765-7-2-0"
               width="11.019096"
               height="18.393833"
               x="63.257172"
               y="77.721344" />
            <rect
               style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262586;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect71948-8-6"
               width="10.763871"
               height="0.12559795"
               x="63.392986"
               y="85.76149" />
          </g>
          <g
             id="$cabinetInterior-5-6"
             transform="translate(14.458465,0.32017123)">
            <rect
               style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.404504;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67765-7-1-8"
               width="11.019096"
               height="18.393833"
               x="63.257172"
               y="77.721344" />
            <rect
               style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:#cccccc;stroke-width:0.262586;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect71948-2-4"
               width="10.763871"
               height="0.12559795"
               x="63.392986"
               y="85.76149" />
          </g>
          <g
             id="$topDrawer1-7-9"
             transform="translate(15.296987,0.09242459)">
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67901-9-8"
               width="10.688569"
               height="4.1970816"
               x="46.001724"
               y="71.13932" />
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67903-5-5"
               width="8.8418522"
               height="2.7980545"
               x="47.064987"
               y="71.897263" />
            <path
               style="opacity:1;fill:#aa8800;fill-opacity:1;stroke:none;stroke-width:0.199622;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path67905-6-0"
               sodipodi:type="arc"
               sodipodi:cx="51.292606"
               sodipodi:cy="73.155792"
               sodipodi:rx="0.3467589"
               sodipodi:ry="0.34363821"
               sodipodi:start="0"
               sodipodi:end="6.270968"
               sodipodi:open="true"
               sodipodi:arc-type="arc"
               d="m 51.639365,73.155792 a 0.3467589,0.34363821 0 0 1 -0.3457,0.343637 0.3467589,0.34363821 0 0 1 -0.347811,-0.341538 0.3467589,0.34363821 0 0 1 0.343575,-0.345723 0.3467589,0.34363821 0 0 1 0.34991,0.339426" />
          </g>
          <g
             id="$topDrawer1-3-1"
             transform="translate(31.715521,0.39867058)">
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67901-3-3"
               width="10.688569"
               height="4.1970816"
               x="46.001724"
               y="71.13932" />
            <rect
               style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#e6e6e6;stroke-width:0.264583;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="rect67903-9-6"
               width="8.8418522"
               height="2.7980545"
               x="47.064987"
               y="71.897263" />
            <path
               style="opacity:1;fill:#aa8800;fill-opacity:1;stroke:none;stroke-width:0.199622;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path67905-8-0"
               sodipodi:type="arc"
               sodipodi:cx="51.292606"
               sodipodi:cy="73.155792"
               sodipodi:rx="0.3467589"
               sodipodi:ry="0.34363821"
               sodipodi:start="0"
               sodipodi:end="6.270968"
               sodipodi:open="true"
               sodipodi:arc-type="arc"
               d="m 51.639365,73.155792 a 0.3467589,0.34363821 0 0 1 -0.3457,0.343637 0.3467589,0.34363821 0 0 1 -0.347811,-0.341538 0.3467589,0.34363821 0 0 1 0.343575,-0.345723 0.3467589,0.34363821 0 0 1 0.34991,0.339426" />
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>`;

  let cabinetDoor1 = `
  <svg
  id = '${room.name}_cabinetDoor1'
  class = '${cabinetDoorClasses(1)}'
  data-selector = 'cabinetDoor1'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="65.104195"
   height="117.14441"
   viewBox="0 0 17.225485 30.994458"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetDoor.svg">
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
     inkscape:cx="139.74588"
     inkscape:cy="239.65113"
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
     transform="translate(-54.673614,-84.758974)">
    <g
       id="g3976"
       transform="matrix(0.86506448,0,0,0.87518243,-80.428521,1.0884093)">
      <rect
         style="fill:#f7f7f7;fill-opacity:1;stroke:#000000;stroke-width:0.287016;stroke-opacity:1"
         id="rect2469-6"
         width="19.625355"
         height="35.127838"
         x="156.31931"
         y="95.747078" />
      <ellipse
         style="fill:#9b9916;fill-opacity:1;stroke-width:0.189253"
         id="path3049-5"
         cx="172.85654"
         cy="113.27518"
         rx="1.1775211"
         ry="1.6929078" />
    </g>
  </g>
</svg>
  `;
  let cabinetDoor2 = `
  <svg
  id = '${room.name}_cabinetDoor2'
  class = '${cabinetDoorClasses(2)}'
  data-selector = 'cabinetDoor2'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="65.104195"
   height="117.14441"
   viewBox="0 0 17.225485 30.994458"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetDoor.svg">
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
     inkscape:cx="139.74588"
     inkscape:cy="239.65113"
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
     transform="translate(-54.673614,-84.758974)">
    <g
       id="g3976"
       transform="matrix(0.86506448,0,0,0.87518243,-80.428521,1.0884093)">
      <rect
         style="fill:#f7f7f7;fill-opacity:1;stroke:#000000;stroke-width:0.287016;stroke-opacity:1"
         id="rect2469-6"
         width="19.625355"
         height="35.127838"
         x="156.31931"
         y="95.747078" />
      <ellipse
         style="fill:#9b9916;fill-opacity:1;stroke-width:0.189253"
         id="path3049-5"
         cx="172.85654"
         cy="113.27518"
         rx="1.1775211"
         ry="1.6929078" />
    </g>
  </g>
</svg>
  `;
  let cabinetDoor3 = `
  <svg
  id = '${room.name}_cabinetDoor3'
  class = '${cabinetDoorClasses(3)}'
  data-selector = 'cabinetDoor3'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="65.104195"
   height="117.14441"
   viewBox="0 0 17.225485 30.994458"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetDoor.svg">
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
     inkscape:cx="139.74588"
     inkscape:cy="239.65113"
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
     transform="translate(-54.673614,-84.758974)">
    <g
       id="g3976"
       transform="matrix(0.86506448,0,0,0.87518243,-80.428521,1.0884093)">
      <rect
         style="fill:#f7f7f7;fill-opacity:1;stroke:#000000;stroke-width:0.287016;stroke-opacity:1"
         id="rect2469-6"
         width="19.625355"
         height="35.127838"
         x="156.31931"
         y="95.747078" />
      <ellipse
         style="fill:#9b9916;fill-opacity:1;stroke-width:0.189253"
         id="path3049-5"
         cx="172.85654"
         cy="113.27518"
         rx="1.1775211"
         ry="1.6929078" />
    </g>
  </g>
</svg>
  `;
  let cabinetDoor4 = `
  <svg
  id = '${room.name}_cabinetDoor4'
  class = '${cabinetDoorClasses(4)}'
  data-selector = 'cabinetDoor4'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="65.104195"
   height="117.14441"
   viewBox="0 0 17.225485 30.994458"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetDoor.svg">
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
     inkscape:cx="139.74588"
     inkscape:cy="239.65113"
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
     transform="translate(-54.673614,-84.758974)">
    <g
       id="g3976"
       transform="matrix(0.86506448,0,0,0.87518243,-80.428521,1.0884093)">
      <rect
         style="fill:#f7f7f7;fill-opacity:1;stroke:#000000;stroke-width:0.287016;stroke-opacity:1"
         id="rect2469-6"
         width="19.625355"
         height="35.127838"
         x="156.31931"
         y="95.747078" />
      <ellipse
         style="fill:#9b9916;fill-opacity:1;stroke-width:0.189253"
         id="path3049-5"
         cx="172.85654"
         cy="113.27518"
         rx="1.1775211"
         ry="1.6929078" />
    </g>
  </g>
</svg>
  `;
  let cabinetDoor5 = `
  <svg
  id = '${room.name}_cabinetDoor5'
  class = '${cabinetDoorClasses(5)}'
  data-selector = 'cabinetDoor5'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="65.104195"
   height="117.14441"
   viewBox="0 0 17.225485 30.994458"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetDoor.svg">
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
     inkscape:cx="139.74588"
     inkscape:cy="239.65113"
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
     transform="translate(-54.673614,-84.758974)">
    <g
       id="g3976"
       transform="matrix(0.86506448,0,0,0.87518243,-80.428521,1.0884093)">
      <rect
         style="fill:#f7f7f7;fill-opacity:1;stroke:#000000;stroke-width:0.287016;stroke-opacity:1"
         id="rect2469-6"
         width="19.625355"
         height="35.127838"
         x="156.31931"
         y="95.747078" />
      <ellipse
         style="fill:#9b9916;fill-opacity:1;stroke-width:0.189253"
         id="path3049-5"
         cx="172.85654"
         cy="113.27518"
         rx="1.1775211"
         ry="1.6929078" />
    </g>
  </g>
</svg>
  `;
  let cabinetDoor6 = `
  <svg
  id = '${room.name}_cabinetDoor6'
  class = '${cabinetDoorClasses(6)}'
  data-selector = 'cabinetDoor6'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="65.104195"
   height="117.14441"
   viewBox="0 0 17.225485 30.994458"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="cabinetDoor.svg">
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
     inkscape:cx="139.74588"
     inkscape:cy="239.65113"
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
     transform="translate(-54.673614,-84.758974)">
    <g
       id="g3976"
       transform="matrix(0.86506448,0,0,0.87518243,-80.428521,1.0884093)">
      <rect
         style="fill:#f7f7f7;fill-opacity:1;stroke:#000000;stroke-width:0.287016;stroke-opacity:1"
         id="rect2469-6"
         width="19.625355"
         height="35.127838"
         x="156.31931"
         y="95.747078" />
      <ellipse
         style="fill:#9b9916;fill-opacity:1;stroke-width:0.189253"
         id="path3049-5"
         cx="172.85654"
         cy="113.27518"
         rx="1.1775211"
         ry="1.6929078" />
    </g>
  </g>
</svg>
  `;

  let oliveOilBottle = `
  <svg
  id = '${room.name}_oliveOilBottle'
  class = '${room.name}_oliveOilBottle'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="22.133478"
  height="79.44828"
  viewBox="0 0 5.8561504 21.020691"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="oliveOilBottle.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.5965882"
	 inkscape:cx="11.883278"
	 inkscape:cy="5.4070309"
	 inkscape:document-units="px"
	 inkscape:current-layer="$pictureWhole"
	 inkscape:document-rotation="0"
	 showgrid="false"
	 units="px"
	 inkscape:window-width="792"
	 inkscape:window-height="847"
	 inkscape:window-x="664"
	 inkscape:window-y="25"
	 inkscape:window-maximized="0"
	 showguides="false">
	<inkscape:grid
		type="xygrid"
		id="grid8442"
		originx="-42.857063"
		originy="-45.235573" />
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
	 transform="translate(-80.10782,-62.297073)">
	<g
		id="$pictureWhole">
	  <g
		  id="$oliveOilBottle"
		  transform="translate(-52.87053,25.158003)">
		 <path
			 id="rect10935"
			 style="opacity:0.98;fill:#005100;fill-opacity:0.707602;stroke:none;stroke-width:0.0428908;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
			 d="m 133.26569,42.54191 c 2.27586,-1.482056 2.75016,-1.490873 5.56881,-0.164194 v 15.782046 h -5.85615 z"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 id="rect10938"
			 style="opacity:0.98;fill:#005100;fill-opacity:0.707602;stroke:none;stroke-width:0.0184736;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
			 d="m 134.70377,39.871318 h 1.90269 l 0.19338,1.843401 c -0.20413,-0.316915 -0.92834,-0.348679 -2.10934,0.0542 z"
			 sodipodi:nodetypes="ccccc" />
		 <path
			 style="fill:#b3b3b3;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 135.46574,39.895194 0.0387,-2.011199 0.30941,-0.464121 v 2.47532 z"
			 id="path10943" />
		 <path
			 style="opacity:0.98;fill:#b3b3b3;fill-opacity:0.707602;stroke:none;stroke-width:0.0798313;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
			 id="path10945"
			 sodipodi:type="arc"
			 sodipodi:cx="-58.485718"
			 sodipodi:cy="-117.18636"
			 sodipodi:rx="0.26813194"
			 sodipodi:ry="0.12466011"
			 sodipodi:start="0"
			 sodipodi:end="6.270968"
			 sodipodi:open="true"
			 sodipodi:arc-type="arc"
			 d="m -58.217586,-117.18636 a 0.26813194,0.12466011 0 0 1 -0.267313,0.12466 0.26813194,0.12466011 0 0 1 -0.268946,-0.1239 0.26813194,0.12466011 0 0 1 0.26567,-0.12542 0.26813194,0.12466011 0 0 1 0.270569,0.12313"
			 transform="matrix(-0.7756861,0.6311189,-0.77374483,-0.63349739,0,0)" />
	  </g>
	</g>
 </g>
</svg>

  `;

  function kitchenTowelNames() {
    if (!room.$ovenDoor?.inspected) {
      return `${room.name}_kitchenTowel`;
    } else {
      return `dNone`;
    }
  }
  let kitchenTowel = `
  <svg
  id = '${room.name}_kitchenTowel'
  class = '${kitchenTowelNames()}'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="36.46236"
  height="63.181995"
  viewBox="0 0 9.6473342 16.716903"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="kitchenTowel.svg">
 <defs
	 id="defs2936" />
 <sodipodi:namedview
	 id="base"
	 pagecolor="#ffffff"
	 bordercolor="#666666"
	 borderopacity="1.0"
	 inkscape:pageopacity="0.0"
	 inkscape:pageshadow="2"
	 inkscape:zoom="1.1981596"
	 inkscape:cx="-35.365024"
	 inkscape:cy="84.336897"
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
		originx="-66.086784"
		originy="-0.091131951" />
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
	 transform="translate(-103.3375,-17.152661)">
	<rect
		style="opacity:0.98;fill:#008080;fill-opacity:1;stroke:#999999;stroke-width:0.0375999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="$kitchenTowel"
		width="9.6097336"
		height="16.679304"
		x="103.3563"
		y="17.171461"
		ry="0.63571662" />
 </g>
</svg> 
  `;

  return cabinet1
    .concat(cabinet2)
    .concat(cabinetDoor1)
    .concat(cabinetDoor2)
    .concat(cabinetDoor3)
    .concat(cabinetDoor4)
    .concat(cabinetDoor5)
    .concat(cabinetDoor6)
    .concat(oliveOilBottle)
    .concat(kitchenTowel);
}
