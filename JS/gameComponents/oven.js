export default function oven(room) {
  // functions here

  function ovenClassNames() {
    if (room.$oven.inspected) {
      return `${room.name}_oven ${room.name}oven-inspected`;
    } else {
      return `${room.name}_oven`;
    }
  }

  // class = 'ovenClassNames()}'
  // data-selector = 'oven'
  let oven = `
<svg
id = '${room.name}_oven'
class = '${room.name}_oven'
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="180.74892"
   height="209.09369"
   viewBox="0 0 47.823157 55.322704"
   version="1.1"
   id="svg2942"
   inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
   sodipodi:docname="oven.svg">
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
     inkscape:cx="14.785405"
     inkscape:cy="147.18066"
     inkscape:document-units="px"
     inkscape:current-layer="$ovenWhole"
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
       originx="-47.51801"
       originy="7.70329" />
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
     transform="translate(-84.768737,-9.3582394)">
    <g
       id="$ovenWhole"
       transform="translate(-57.940124,-46.444055)">
      <rect
         style="fill:#333333;fill-opacity:1;stroke:none;stroke-width:0.00396875;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect10583-2"
         width="47.625"
         height="37.041668"
         x="142.875"
         y="74.083336" />
      <rect
         style="opacity:1;fill:#4d4d4d;fill-opacity:0.707602;stroke:#000000;stroke-width:0.422732;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
         id="rect11220-6"
         width="47.400421"
         height="6.2636414"
         x="142.92023"
         y="56.01366" />
      <rect
         style="fill:#808080;fill-opacity:1;stroke:none;stroke-width:0.00597838;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect10589-2"
         width="47.625"
         height="12.007466"
         x="142.875"
         y="62.075882" />
      <g
         id="g10681-4"
         transform="matrix(2.4732743,0,0,1.5203681,-214.66972,-38.440523)">
        <path
           style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.359419;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.991936"
           id="path10649-0"
           sodipodi:type="arc"
           sodipodi:cx="149.48959"
           sodipodi:cy="72.218147"
           sodipodi:rx="1.984442"
           sodipodi:ry="1.6536434"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 151.47404,72.218147 a 1.984442,1.6536434 0 0 1 -1.97839,1.653636 1.984442,1.6536434 0 0 1 -1.99046,-1.643534 1.984442,1.6536434 0 0 1 1.96622,-1.663676 1.984442,1.6536434 0 0 1 2.00248,1.633372" />
        <path
           sodipodi:type="spiral"
           style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.264583"
           id="path10673-3"
           sodipodi:cx="146.1828"
           sodipodi:cy="60.166451"
           sodipodi:expansion="1"
           sodipodi:revolution="3.1152327"
           sodipodi:radius="1.7330786"
           sodipodi:argument="-17.907557"
           sodipodi:t0="0.24408455"
           d="m 146.5404,59.940469 c 0.19407,0.200183 0.14265,0.525834 -0.0573,0.701152 -0.26574,0.232981 -0.6761,0.162672 -0.89302,-0.100591 -0.27246,-0.330664 -0.18294,-0.826745 0.14386,-1.084894 0.39529,-0.312242 0.9776,-0.203353 1.27677,0.187138 0.35221,0.459734 0.22385,1.12859 -0.23041,1.468635 -0.52408,0.392305 -1.27967,0.244419 -1.66051,-0.273684 -0.43248,-0.588356 -0.26502,-1.430812 0.31696,-1.852377 0.65258,-0.472708 1.582,-0.28566 2.04425,0.36023 0.51298,0.716779 0.30631,1.733223 -0.40351,2.23612 -0.30692,0.217447 -0.68399,0.32608 -1.05946,0.309478"
           transform="matrix(0.92483693,0,0,0.86673033,14.14483,20.082703)" />
      </g>
      <g
         id="g10681-0-1"
         transform="matrix(2.1925694,0,0,1.4763622,-151.37792,-35.623711)">
        <path
           style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.359419;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.991936"
           id="path10649-2-0"
           sodipodi:type="arc"
           sodipodi:cx="149.48959"
           sodipodi:cy="72.218147"
           sodipodi:rx="1.984442"
           sodipodi:ry="1.6536434"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 151.47404,72.218147 a 1.984442,1.6536434 0 0 1 -1.97839,1.653636 1.984442,1.6536434 0 0 1 -1.99046,-1.643534 1.984442,1.6536434 0 0 1 1.96622,-1.663676 1.984442,1.6536434 0 0 1 2.00248,1.633372" />
        <path
           sodipodi:type="spiral"
           style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.264583"
           id="path10673-6-2"
           sodipodi:cx="146.1828"
           sodipodi:cy="60.166451"
           sodipodi:expansion="1"
           sodipodi:revolution="3.1152327"
           sodipodi:radius="1.7330786"
           sodipodi:argument="-17.907557"
           sodipodi:t0="0.24408455"
           d="m 146.5404,59.940469 c 0.19407,0.200183 0.14265,0.525834 -0.0573,0.701152 -0.26574,0.232981 -0.6761,0.162672 -0.89302,-0.100591 -0.27246,-0.330664 -0.18294,-0.826745 0.14386,-1.084894 0.39529,-0.312242 0.9776,-0.203353 1.27677,0.187138 0.35221,0.459734 0.22385,1.12859 -0.23041,1.468635 -0.52408,0.392305 -1.27967,0.244419 -1.66051,-0.273684 -0.43248,-0.588356 -0.26502,-1.430812 0.31696,-1.852377 0.65258,-0.472708 1.582,-0.28566 2.04425,0.36023 0.51298,0.716779 0.30631,1.733223 -0.40351,2.23612 -0.30692,0.217447 -0.68399,0.32608 -1.05946,0.309478"
           transform="matrix(0.92483693,0,0,0.86673033,14.14483,20.082703)" />
      </g>
      <g
         id="g10681-2-1"
         transform="matrix(2.3936949,0,0,1.4763623,-202.7689,-41.667012)">
        <path
           style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.359419;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.991936"
           id="path10649-8-9"
           sodipodi:type="arc"
           sodipodi:cx="149.48959"
           sodipodi:cy="72.218147"
           sodipodi:rx="1.984442"
           sodipodi:ry="1.6536434"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 151.47404,72.218147 a 1.984442,1.6536434 0 0 1 -1.97839,1.653636 1.984442,1.6536434 0 0 1 -1.99046,-1.643534 1.984442,1.6536434 0 0 1 1.96622,-1.663676 1.984442,1.6536434 0 0 1 2.00248,1.633372" />
        <path
           sodipodi:type="spiral"
           style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.264583"
           id="path10673-7-8"
           sodipodi:cx="146.1828"
           sodipodi:cy="60.166451"
           sodipodi:expansion="1"
           sodipodi:revolution="3.1152327"
           sodipodi:radius="1.7330786"
           sodipodi:argument="-17.907557"
           sodipodi:t0="0.24408455"
           d="m 146.5404,59.940469 c 0.19407,0.200183 0.14265,0.525834 -0.0573,0.701152 -0.26574,0.232981 -0.6761,0.162672 -0.89302,-0.100591 -0.27246,-0.330664 -0.18294,-0.826745 0.14386,-1.084894 0.39529,-0.312242 0.9776,-0.203353 1.27677,0.187138 0.35221,0.459734 0.22385,1.12859 -0.23041,1.468635 -0.52408,0.392305 -1.27967,0.244419 -1.66051,-0.273684 -0.43248,-0.588356 -0.26502,-1.430812 0.31696,-1.852377 0.65258,-0.472708 1.582,-0.28566 2.04425,0.36023 0.51298,0.716779 0.30631,1.733223 -0.40351,2.23612 -0.30692,0.217447 -0.68399,0.32608 -1.05946,0.309478"
           transform="matrix(0.92483693,0,0,0.86673033,14.14483,20.082703)" />
      </g>
      <g
         id="g10681-24-0"
         transform="matrix(2.459854,0,0,1.4763623,-192.08505,-41.420478)">
        <path
           style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.359419;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.991936"
           id="path10649-6-8"
           sodipodi:type="arc"
           sodipodi:cx="149.48959"
           sodipodi:cy="72.218147"
           sodipodi:rx="1.984442"
           sodipodi:ry="1.6536434"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 151.47404,72.218147 a 1.984442,1.6536434 0 0 1 -1.97839,1.653636 1.984442,1.6536434 0 0 1 -1.99046,-1.643534 1.984442,1.6536434 0 0 1 1.96622,-1.663676 1.984442,1.6536434 0 0 1 2.00248,1.633372" />
        <path
           sodipodi:type="spiral"
           style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.264583"
           id="path10673-2-4"
           sodipodi:cx="146.1828"
           sodipodi:cy="60.166451"
           sodipodi:expansion="1"
           sodipodi:revolution="3.1152327"
           sodipodi:radius="1.7330786"
           sodipodi:argument="-17.907557"
           sodipodi:t0="0.24408455"
           d="m 146.5404,59.940469 c 0.19407,0.200183 0.14265,0.525834 -0.0573,0.701152 -0.26574,0.232981 -0.6761,0.162672 -0.89302,-0.100591 -0.27246,-0.330664 -0.18294,-0.826745 0.14386,-1.084894 0.39529,-0.312242 0.9776,-0.203353 1.27677,0.187138 0.35221,0.459734 0.22385,1.12859 -0.23041,1.468635 -0.52408,0.392305 -1.27967,0.244419 -1.66051,-0.273684 -0.43248,-0.588356 -0.26502,-1.430812 0.31696,-1.852377 0.65258,-0.472708 1.582,-0.28566 2.04425,0.36023 0.51298,0.716779 0.30631,1.733223 -0.40351,2.23612 -0.30692,0.217447 -0.68399,0.32608 -1.05946,0.309478"
           transform="matrix(0.92483693,0,0,0.86673033,14.14483,20.082703)" />
      </g>
      <g
         id="g11352-9"
         transform="translate(2.6458335)">
        <g
           id="g11310-4">
          <path
             style="opacity:0.98;fill:#e6e6e6;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11222-7"
             sodipodi:type="arc"
             sodipodi:cx="147.94475"
             sodipodi:cy="59.033188"
             sodipodi:rx="1.9125526"
             sodipodi:ry="1.937391"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.8573,59.033188 a 1.9125526,1.937391 0 0 1 -1.90671,1.937382 1.9125526,1.937391 0 0 1 -1.91836,-1.925547 1.9125526,1.937391 0 0 1 1.89499,-1.949145 1.9125526,1.937391 0 0 1 1.92994,1.913641" />
          <path
             style="opacity:0.98;fill:#f2f2f2;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0753816;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11227-17"
             sodipodi:type="arc"
             sodipodi:cx="147.94643"
             sodipodi:cy="58.90696"
             sodipodi:rx="1.2619727"
             sodipodi:ry="1.290266"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.2084,58.90696 a 1.2619727,1.290266 0 0 1 -1.25812,1.29026 1.2619727,1.290266 0 0 1 -1.2658,-1.282379 1.2619727,1.290266 0 0 1 1.25038,-1.298093 1.2619727,1.290266 0 0 1 1.27344,1.274448" />
          <path
             id="rect11224-21"
             style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0247066;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             d="m 147.73972,57.853151 0.39236,0.003 -0.009,1.209205 -0.39236,-0.003 z" />
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267"
             x="131.65515"
             y="64.466621"
             id="text11231-4"
             transform="scale(1.1198491,0.89297747)"><tspan
               sodipodi:role="line"
               id="tspan11229-5"
               x="131.65515"
               y="64.466621"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267">off</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.541545px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.203078"
             x="148.45575"
             y="-56.196999"
             id="text11231-5-9"
             transform="matrix(0.75245233,0.67032694,-0.65883262,0.74206261,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11251-5"
               x="148.45575"
               y="-56.196999"
               style="stroke-width:0.203078">hi</tspan><tspan
               sodipodi:role="line"
               id="tspan11253-25"
               x="148.45575"
               y="-55.520069"
               style="stroke-width:0.203078" /></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.497119px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.186419"
             x="123.14787"
             y="72.716583"
             id="text11231-5-6-36"
             transform="scale(1.1963499,0.83587587)"><tspan
               sodipodi:role="line"
               id="tspan11276-03"
               x="123.14787"
               y="72.716583"
               style="stroke-width:0.186419">med</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.411182px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.154193"
             x="47.063511"
             y="168.06491"
             id="text11231-5-6-6-57"
             transform="matrix(0.74907825,-0.84875216,0.66231228,0.58453309,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11296-6"
               x="47.063511"
               y="168.06491"
               style="stroke-width:0.154193">low</tspan></text>
        </g>
        <path
           style="opacity:0.98;fill:#4d4d4d;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11312-1"
           sodipodi:type="arc"
           sodipodi:cx="147.7094"
           sodipodi:cy="61.392357"
           sodipodi:rx="0.14501218"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.85441,61.392357 a 0.14501218,0.15081267 0 0 1 -0.14457,0.150812 0.14501218,0.15081267 0 0 1 -0.14545,-0.149891 0.14501218,0.15081267 0 0 1 0.14368,-0.151727 0.14501218,0.15081267 0 0 1 0.14633,0.148963" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11314-5"
           sodipodi:type="arc"
           sodipodi:cx="148.26051"
           sodipodi:cy="61.374954"
           sodipodi:rx="0.12761071"
           sodipodi:ry="0.13341121"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.38812,61.374954 a 0.12761071,0.13341121 0 0 1 -0.12722,0.133411 0.12761071,0.13341121 0 0 1 -0.128,-0.132596 0.12761071,0.13341121 0 0 1 0.12644,-0.13422 0.12761071,0.13341121 0 0 1 0.12877,0.131775" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-46"
           sodipodi:type="arc"
           sodipodi:cx="147.692"
           sodipodi:cy="61.856396"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.83121,61.856396 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151728 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-2-6"
           sodipodi:type="arc"
           sodipodi:cx="148.26138"
           sodipodi:cy="61.846344"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.40059,61.846344 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151727 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
      </g>
      <g
         id="g11352-6-4"
         transform="translate(9.2604164)">
        <g
           id="g11310-6-8">
          <path
             style="opacity:0.98;fill:#e6e6e6;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11222-2-6"
             sodipodi:type="arc"
             sodipodi:cx="147.94475"
             sodipodi:cy="59.033188"
             sodipodi:rx="1.9125526"
             sodipodi:ry="1.937391"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.8573,59.033188 a 1.9125526,1.937391 0 0 1 -1.90671,1.937382 1.9125526,1.937391 0 0 1 -1.91836,-1.925547 1.9125526,1.937391 0 0 1 1.89499,-1.949145 1.9125526,1.937391 0 0 1 1.92994,1.913641" />
          <path
             style="opacity:0.98;fill:#f2f2f2;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0753816;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11227-1-4"
             sodipodi:type="arc"
             sodipodi:cx="147.94643"
             sodipodi:cy="58.90696"
             sodipodi:rx="1.2619727"
             sodipodi:ry="1.290266"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.2084,58.90696 a 1.2619727,1.290266 0 0 1 -1.25812,1.29026 1.2619727,1.290266 0 0 1 -1.2658,-1.282379 1.2619727,1.290266 0 0 1 1.25038,-1.298093 1.2619727,1.290266 0 0 1 1.27344,1.274448" />
          <path
             id="rect11224-2-9"
             style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0247066;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             d="m 147.73972,57.853151 0.39236,0.003 -0.009,1.209205 -0.39236,-0.003 z" />
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267"
             x="131.65515"
             y="64.466621"
             id="text11231-1-8"
             transform="scale(1.1198491,0.89297747)"><tspan
               sodipodi:role="line"
               id="tspan11229-9-9"
               x="131.65515"
               y="64.466621"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267">off</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.541545px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.203078"
             x="148.45575"
             y="-56.196999"
             id="text11231-5-0-8"
             transform="matrix(0.75245233,0.67032694,-0.65883262,0.74206261,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11251-3-0"
               x="148.45575"
               y="-56.196999"
               style="stroke-width:0.203078">hi</tspan><tspan
               sodipodi:role="line"
               id="tspan11253-2-5"
               x="148.45575"
               y="-55.520069"
               style="stroke-width:0.203078" /></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.497119px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.186419"
             x="123.14787"
             y="72.716583"
             id="text11231-5-6-1-4"
             transform="scale(1.1963499,0.83587587)"><tspan
               sodipodi:role="line"
               id="tspan11276-0-7"
               x="123.14787"
               y="72.716583"
               style="stroke-width:0.186419">med</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.411182px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.154193"
             x="47.063511"
             y="168.06491"
             id="text11231-5-6-6-0-8"
             transform="matrix(0.74907825,-0.84875216,0.66231228,0.58453309,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11296-3-6"
               x="47.063511"
               y="168.06491"
               style="stroke-width:0.154193">low</tspan></text>
        </g>
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11312-9-8"
           sodipodi:type="arc"
           sodipodi:cx="147.7094"
           sodipodi:cy="61.392357"
           sodipodi:rx="0.14501218"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.85441,61.392357 a 0.14501218,0.15081267 0 0 1 -0.14457,0.150812 0.14501218,0.15081267 0 0 1 -0.14545,-0.149891 0.14501218,0.15081267 0 0 1 0.14368,-0.151727 0.14501218,0.15081267 0 0 1 0.14633,0.148963" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11314-6-5"
           sodipodi:type="arc"
           sodipodi:cx="148.26051"
           sodipodi:cy="61.374954"
           sodipodi:rx="0.12761071"
           sodipodi:ry="0.13341121"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.38812,61.374954 a 0.12761071,0.13341121 0 0 1 -0.12722,0.133411 0.12761071,0.13341121 0 0 1 -0.128,-0.132596 0.12761071,0.13341121 0 0 1 0.12644,-0.13422 0.12761071,0.13341121 0 0 1 0.12877,0.131775" />
        <path
           style="opacity:0.98;fill:#4d4d4d;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-6-5"
           sodipodi:type="arc"
           sodipodi:cx="147.692"
           sodipodi:cy="61.856396"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.83121,61.856396 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151728 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-2-7-1"
           sodipodi:type="arc"
           sodipodi:cx="148.26138"
           sodipodi:cy="61.846344"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.40059,61.846344 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151727 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
      </g>
      <g
         id="g11352-8-8"
         transform="translate(28.484918,-0.48554178)">
        <g
           id="g11310-7-0">
          <path
             style="opacity:0.98;fill:#e6e6e6;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11222-3-2"
             sodipodi:type="arc"
             sodipodi:cx="147.94475"
             sodipodi:cy="59.033188"
             sodipodi:rx="1.9125526"
             sodipodi:ry="1.937391"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.8573,59.033188 a 1.9125526,1.937391 0 0 1 -1.90671,1.937382 1.9125526,1.937391 0 0 1 -1.91836,-1.925547 1.9125526,1.937391 0 0 1 1.89499,-1.949145 1.9125526,1.937391 0 0 1 1.92994,1.913641" />
          <path
             style="opacity:0.98;fill:#f2f2f2;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0753816;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11227-6-1"
             sodipodi:type="arc"
             sodipodi:cx="147.94643"
             sodipodi:cy="58.90696"
             sodipodi:rx="1.2619727"
             sodipodi:ry="1.290266"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.2084,58.90696 a 1.2619727,1.290266 0 0 1 -1.25812,1.29026 1.2619727,1.290266 0 0 1 -1.2658,-1.282379 1.2619727,1.290266 0 0 1 1.25038,-1.298093 1.2619727,1.290266 0 0 1 1.27344,1.274448" />
          <path
             id="rect11224-7-0"
             style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0247066;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             d="m 147.73972,57.853151 0.39236,0.003 -0.009,1.209205 -0.39236,-0.003 z" />
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267"
             x="131.65515"
             y="64.466621"
             id="text11231-58-4"
             transform="scale(1.1198491,0.89297747)"><tspan
               sodipodi:role="line"
               id="tspan11229-8-0"
               x="131.65515"
               y="64.466621"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267">off</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.541545px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.203078"
             x="148.45575"
             y="-56.196999"
             id="text11231-5-04-9"
             transform="matrix(0.75245233,0.67032694,-0.65883262,0.74206261,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11251-32-8"
               x="148.45575"
               y="-56.196999"
               style="stroke-width:0.203078">hi</tspan><tspan
               sodipodi:role="line"
               id="tspan11253-7-9"
               x="148.45575"
               y="-55.520069"
               style="stroke-width:0.203078" /></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.497119px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.186419"
             x="123.14787"
             y="72.716583"
             id="text11231-5-6-3-5"
             transform="scale(1.1963499,0.83587587)"><tspan
               sodipodi:role="line"
               id="tspan11276-8-4"
               x="123.14787"
               y="72.716583"
               style="stroke-width:0.186419">med</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.411182px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.154193"
             x="47.063511"
             y="168.06491"
             id="text11231-5-6-6-4-0"
             transform="matrix(0.74907825,-0.84875216,0.66231228,0.58453309,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11296-38-9"
               x="47.063511"
               y="168.06491"
               style="stroke-width:0.154193">low</tspan></text>
        </g>
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11312-2-9"
           sodipodi:type="arc"
           sodipodi:cx="147.7094"
           sodipodi:cy="61.392357"
           sodipodi:rx="0.14501218"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.85441,61.392357 a 0.14501218,0.15081267 0 0 1 -0.14457,0.150812 0.14501218,0.15081267 0 0 1 -0.14545,-0.149891 0.14501218,0.15081267 0 0 1 0.14368,-0.151727 0.14501218,0.15081267 0 0 1 0.14633,0.148963" />
        <path
           style="opacity:0.98;fill:#333333;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11314-4-3"
           sodipodi:type="arc"
           sodipodi:cx="148.26051"
           sodipodi:cy="61.374954"
           sodipodi:rx="0.12761071"
           sodipodi:ry="0.13341121"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.38812,61.374954 a 0.12761071,0.13341121 0 0 1 -0.12722,0.133411 0.12761071,0.13341121 0 0 1 -0.128,-0.132596 0.12761071,0.13341121 0 0 1 0.12644,-0.13422 0.12761071,0.13341121 0 0 1 0.12877,0.131775" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-0-3"
           sodipodi:type="arc"
           sodipodi:cx="147.692"
           sodipodi:cy="61.856396"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.83121,61.856396 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151728 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-2-5-0"
           sodipodi:type="arc"
           sodipodi:cx="148.26138"
           sodipodi:cy="61.846344"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.40059,61.846344 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151727 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
      </g>
      <g
         id="g11352-7-0"
         transform="translate(34.844027,-0.51691895)">
        <g
           id="g11310-9-6">
          <path
             style="opacity:0.98;fill:#e6e6e6;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11222-27-1"
             sodipodi:type="arc"
             sodipodi:cx="147.94475"
             sodipodi:cy="59.033188"
             sodipodi:rx="1.9125526"
             sodipodi:ry="1.937391"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.8573,59.033188 a 1.9125526,1.937391 0 0 1 -1.90671,1.937382 1.9125526,1.937391 0 0 1 -1.91836,-1.925547 1.9125526,1.937391 0 0 1 1.89499,-1.949145 1.9125526,1.937391 0 0 1 1.92994,1.913641" />
          <path
             style="opacity:0.98;fill:#f2f2f2;fill-opacity:0.707602;stroke:#554400;stroke-width:0.0753816;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             id="path11227-9-9"
             sodipodi:type="arc"
             sodipodi:cx="147.94643"
             sodipodi:cy="58.90696"
             sodipodi:rx="1.2619727"
             sodipodi:ry="1.290266"
             sodipodi:start="0"
             sodipodi:end="6.270968"
             sodipodi:open="true"
             sodipodi:arc-type="arc"
             d="m 149.2084,58.90696 a 1.2619727,1.290266 0 0 1 -1.25812,1.29026 1.2619727,1.290266 0 0 1 -1.2658,-1.282379 1.2619727,1.290266 0 0 1 1.25038,-1.298093 1.2619727,1.290266 0 0 1 1.27344,1.274448" />
          <path
             id="rect11224-0-1"
             style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0247066;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
             d="m 147.73972,57.853151 0.39236,0.003 -0.009,1.209205 -0.39236,-0.003 z" />
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267"
             x="131.65515"
             y="64.466621"
             id="text11231-8-4"
             transform="scale(1.1198491,0.89297747)"><tspan
               sodipodi:role="line"
               id="tspan11229-6-2"
               x="131.65515"
               y="64.466621"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.630046px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.236267">off</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.541545px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.203078"
             x="148.45575"
             y="-56.196999"
             id="text11231-5-66-3"
             transform="matrix(0.75245233,0.67032694,-0.65883262,0.74206261,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11251-325-3"
               x="148.45575"
               y="-56.196999"
               style="stroke-width:0.203078">hi</tspan><tspan
               sodipodi:role="line"
               id="tspan11253-3-9"
               x="148.45575"
               y="-55.520069"
               style="stroke-width:0.203078" /></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.497119px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.186419"
             x="123.14787"
             y="72.716583"
             id="text11231-5-6-30-8"
             transform="scale(1.1963499,0.83587587)"><tspan
               sodipodi:role="line"
               id="tspan11276-7-4"
               x="123.14787"
               y="72.716583"
               style="stroke-width:0.186419">med</tspan></text>
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.411182px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.154193"
             x="47.063511"
             y="168.06491"
             id="text11231-5-6-6-5-2"
             transform="matrix(0.74907825,-0.84875216,0.66231228,0.58453309,0,0)"><tspan
               sodipodi:role="line"
               id="tspan11296-8-1"
               x="47.063511"
               y="168.06491"
               style="stroke-width:0.154193">low</tspan></text>
        </g>
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11312-3-0"
           sodipodi:type="arc"
           sodipodi:cx="147.7094"
           sodipodi:cy="61.392357"
           sodipodi:rx="0.14501218"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.85441,61.392357 a 0.14501218,0.15081267 0 0 1 -0.14457,0.150812 0.14501218,0.15081267 0 0 1 -0.14545,-0.149891 0.14501218,0.15081267 0 0 1 0.14368,-0.151727 0.14501218,0.15081267 0 0 1 0.14633,0.148963" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11314-3-3"
           sodipodi:type="arc"
           sodipodi:cx="148.26051"
           sodipodi:cy="61.374954"
           sodipodi:rx="0.12761071"
           sodipodi:ry="0.13341121"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.38812,61.374954 a 0.12761071,0.13341121 0 0 1 -0.12722,0.133411 0.12761071,0.13341121 0 0 1 -0.128,-0.132596 0.12761071,0.13341121 0 0 1 0.12644,-0.13422 0.12761071,0.13341121 0 0 1 0.12877,0.131775" />
        <path
           style="opacity:0.98;fill:#ffffff;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-4-2"
           sodipodi:type="arc"
           sodipodi:cx="147.692"
           sodipodi:cy="61.856396"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 147.83121,61.856396 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151728 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
        <path
           style="opacity:0.98;fill:#333333;fill-opacity:1;stroke:#554400;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.383041"
           id="path11316-2-8-8"
           sodipodi:type="arc"
           sodipodi:cx="148.26138"
           sodipodi:cy="61.846344"
           sodipodi:rx="0.13921168"
           sodipodi:ry="0.15081267"
           sodipodi:start="0"
           sodipodi:end="6.270968"
           sodipodi:open="true"
           sodipodi:arc-type="arc"
           d="m 148.40059,61.846344 a 0.13921168,0.15081267 0 0 1 -0.13878,0.150812 0.13921168,0.15081267 0 0 1 -0.13964,-0.149891 0.13921168,0.15081267 0 0 1 0.13794,-0.151727 0.13921168,0.15081267 0 0 1 0.14047,0.148964" />
      </g>
      <rect
         style="opacity:1;fill:#cccccc;fill-opacity:1;stroke:#999999;stroke-width:0.515507;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect71285"
         width="35.240086"
         height="22.129671"
         x="149.08638"
         y="80.688019" />
      <path
         style="opacity:1;fill:#ffff00;fill-opacity:1;stroke:none;stroke-width:0.409909;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path71287"
         sodipodi:type="arc"
         sodipodi:cx="154.75694"
         sodipodi:cy="81.191368"
         sodipodi:rx="4.0818472"
         sodipodi:ry="0.49009019"
         sodipodi:start="0"
         sodipodi:end="6.1741199"
         sodipodi:arc-type="slice"
         d="m 158.83879,81.191368 a 4.0818472,0.49009019 0 0 1 -3.97056,0.489908 4.0818472,0.49009019 0 0 1 -4.18707,-0.463195 4.0818472,0.49009019 0 0 1 3.74226,-0.515164 4.0818472,0.49009019 0 0 1 4.39112,0.435105 l -4.0576,0.05335 z" />
      <path
         style="opacity:1;fill:#ffff00;fill-opacity:1;stroke:none;stroke-width:0.409908;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path71287-9"
         sodipodi:type="arc"
         sodipodi:cx="178.25711"
         sodipodi:cy="81.270241"
         sodipodi:rx="4.0818472"
         sodipodi:ry="0.49009019"
         sodipodi:start="0"
         sodipodi:end="6.1741199"
         sodipodi:arc-type="slice"
         d="m 182.33896,81.270241 a 4.0818472,0.49009019 0 0 1 -3.97057,0.489908 4.0818472,0.49009019 0 0 1 -4.18706,-0.463196 4.0818472,0.49009019 0 0 1 3.74226,-0.515164 4.0818472,0.49009019 0 0 1 4.39111,0.435106 l -4.05759,0.05335 z" />
      <rect
         style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.54204;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect71304"
         width="35.498573"
         height="1.1456172"
         x="148.88492"
         y="87.399399" />
      <rect
         style="opacity:1;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.54204;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect71304-3"
         width="35.498573"
         height="1.1456172"
         x="148.73227"
         y="95.144989" />
    </g>
  </g>
</svg>
 `;
  function ovenDoorClassNames() {
    if (room.$ovenDoor.inspected) {
      return `${room.name}_ovenDoor ${room.name}_ovenDoor-inspected`;
    } else {
      return `${room.name}_ovenDoor`;
    }
  }

  let ovenDoor = `
  <svg
  id = '${room.name}_ovenDoor'
  class = '${room.name}_ovenDoor'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="152.013"
  height="101.57592"
  viewBox="0 0 40.220112 26.875295"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="ovenDoor.svg">
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
	 inkscape:cx="16.511314"
	 inkscape:cy="89.468888"
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
		originx="-52.361163"
		originy="1.2667072" />
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
	 transform="translate(-89.611885,-15.794822)">
	<g
		id="$ovenDoor"
		transform="translate(-57.442675,-61.099918)">
	  <path
		  id="$ovenHandle"
		  style="fill:#cccccc;fill-opacity:1;stroke:#333333;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 149.27313,77.807311 c 11.5794,-1.195424 23.74995,-1.237913 37.04166,0 v 1.154438 c -12.31622,0.558348 -25.22723,0.959557 -37.04166,0 z"
		  sodipodi:nodetypes="ccccc" />
	  <rect
		  style="fill:#808080;fill-opacity:1;stroke:#333333;stroke-width:3.31132;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect10585-6"
		  width="36.908787"
		  height="20.174185"
		  x="148.71022"
		  y="81.940193" />
	</g>
 </g>
</svg>
 `;

  let kettle = `
  <svg
  id = '${room.name}_kettle'
  class = '${room.name}_kettle'
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="41.914436"
  height="30.083569"
  viewBox="0 0 11.089863 7.9596109"
  version="1.1"
  id="svg2942"
  inkscape:version="1.0.1 (c497b03c, 2020-09-10)"
  sodipodi:docname="kettle.svg">
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
	 inkscape:cx="21.914713"
	 inkscape:cy="4.3450883"
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
		originx="-40.626495"
		originy="-56.667534" />
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
	 transform="translate(-77.877249,-73.729038)">
	<g
		id="$kettleWhole"
		transform="translate(-92.010915,22.037884)">
	  <path
		  style="fill:#b3b3b3;fill-opacity:1;stroke:#b4b4b3;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 171.93485,59.505883 6.77832,0.06518 c 1.10003,-0.434508 1.23202,-0.869016 1.49906,-1.303524 1.39591,-1.226529 -0.30964,-3.366271 -1.62941,-4.301629 -2.93163,-1.180731 -5.52493,-0.167567 -6.64797,0.325877 -2.87864,2.081477 -1.99938,3.989308 0,5.214096 z"
		  id="$kettleBody"
		  sodipodi:nodetypes="cccccc" />
	  <rect
		  style="opacity:0.98;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.0569977;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect10880"
		  width="1.7228358"
		  height="1.016253"
		  x="89.362053"
		  y="160.39404"
		  transform="matrix(0.74720832,-0.6645899,0.70001265,0.71413044,0,0)" />
	  <path
		  style="opacity:0.98;fill:#b3b3b3;fill-opacity:1;stroke:#000000;stroke-width:0.105833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path10886"
		  sodipodi:type="arc"
		  sodipodi:cx="70.612473"
		  sodipodi:cy="173.84341"
		  sodipodi:rx="0.47022387"
		  sodipodi:ry="0.55320454"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 71.082696,173.84341 a 0.47022387,0.55320454 0 0 1 -0.468787,0.55321 0.47022387,0.55320454 0 0 1 -0.471652,-0.54983 0.47022387,0.55320454 0 0 1 0.465907,-0.55656 0.47022387,0.55320454 0 0 1 0.474497,0.54643"
		  transform="rotate(-51.355526)"
		  inkscape:transform-center-x="0.027647141"
		  inkscape:transform-center-y="-1.2674098e-05" />
	  <path
		  style="fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.0529167;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  d="m 180.06809,53.854465 0.16596,0.276603 h 0.24894 l -0.16596,-0.608525 z"
		  id="path10888" />
	  <path
		  style="opacity:0.98;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="path10890"
		  sodipodi:type="arc"
		  sodipodi:cx="179.86707"
		  sodipodi:cy="53.37886"
		  sodipodi:rx="0.1482313"
		  sodipodi:ry="0.14042965"
		  sodipodi:start="0"
		  sodipodi:end="6.270968"
		  sodipodi:open="true"
		  sodipodi:arc-type="arc"
		  d="m 180.0153,53.37886 a 0.1482313,0.14042965 0 0 1 -0.14778,0.140429 0.1482313,0.14042965 0 0 1 -0.14868,-0.139571 0.1482313,0.14042965 0 0 1 0.14687,-0.141281 0.1482313,0.14042965 0 0 1 0.14958,0.138708" />
	  <path
		  style="fill:none;stroke:#000000;stroke-width:0.319375px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		  d="m 172.56807,53.843974 c -0.31993,-0.666424 1.76022,-2.065402 2.70013,-1.929941 1.10006,-0.08369 2.66006,1.150235 2.50014,1.63182"
		  id="$kettleHandle"
		  sodipodi:nodetypes="ccc" />
	  <g
		  id="$kettleTop">
		 <path
			 style="fill:#cccccc;fill-opacity:1;stroke:#999999;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 175.4296,53.376165 c -1.82045,0.240258 -2.57817,0.574398 -2.37259,1.13657 0.26777,0.550706 1.56218,0.778601 2.55728,0.667734 1.61303,-0.111756 2.20543,-0.272338 2.13107,-0.866634 -0.21103,-0.879883 -1.47994,-0.911221 -2.31576,-0.93767 z"
			 id="path10912"
			 sodipodi:nodetypes="ccccc" />
		 <rect
			 style="opacity:0.98;fill:#cccccc;fill-opacity:1;stroke:#999999;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect10916"
			 width="0.49839473"
			 height="1.1853712"
			 x="175.12514"
			 y="52.951073" />
		 <path
			 style="opacity:0.98;fill:#cccccc;fill-opacity:1;stroke:#999999;stroke-width:0.0529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="path10918"
			 sodipodi:type="arc"
			 sodipodi:cx="175.38109"
			 sodipodi:cy="52.816372"
			 sodipodi:rx="0.67350638"
			 sodipodi:ry="0.21552205"
			 sodipodi:start="0"
			 sodipodi:end="6.270968"
			 sodipodi:open="true"
			 sodipodi:arc-type="arc"
			 d="m 176.05459,52.816372 a 0.67350638,0.21552205 0 0 1 -0.67144,0.215521 0.67350638,0.21552205 0 0 1 -0.67556,-0.214205 0.67350638,0.21552205 0 0 1 0.66733,-0.216829 0.67350638,0.21552205 0 0 1 0.67962,0.21288" />
	  </g>
	</g>
 </g>
</svg>
 `;
  return oven.concat(ovenDoor).concat(kettle);
}
