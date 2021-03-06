export default function bed(room) {
  function blanketClass() {
    if (room.$blanket.inspected) {
      return `${room.name}_blanket blanket-inspected`;
    } else {
      return `${room.name}_blanket`;
    }
  }

  function pillowClasses() {
    if (room.$bedPillow.inspected) {
      return 'u2';
    } else {
      return ``;
    }
  }

  let html = `
  <svg
	id= 'bedWhole'
	class= '${room.name}_bedWhole'
   width="260.43201"
   height="100.54708"
   viewBox="0 0 68.905971 26.603082">
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-115.47577,-55.427885)">
    <g
       id="g3901"
       transform="translate(-8.7714128,-31.84441)">
      <g
         id="g7257"
         transform="translate(12.395886,-30.165995)">
        <rect
           style="fill:#552200;fill-opacity:1;stroke:#000000;stroke-width:0.0264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect7106"
           width="3.4938884"
           height="9.2338476"
           x="114.60972"
           y="134.7943" />
        <use
           x="0"
           y="0"
           xlink:href="#rect7106"
           id="use7108"
           transform="translate(60.893483,-0.4991269)"
           width="100%"
           height="100%" />
        <rect
           style="fill:#f2f2f2;fill-opacity:1;stroke:#000000;stroke-width:0.0264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect7112"
           width="66.134315"
           height="5.2408328"
           x="112.80269"
           y="123.62402" />
        <rect
           style="fill:#552200;fill-opacity:1;stroke:#000000;stroke-width:0.021002;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect7110"
           width="68.884964"
           height="8.4906139"
           x="111.86179"
           y="127.80379" />
        <path
           id="bedPillow"
           data-selector = "bedPillow"
           class= "${pillowClasses()}"
           style="fill:#f2f2f2;fill-opacity:1;stroke:#000000;stroke-width:0.0239608;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 114.45253,118.01199 c 0.52898,-0.29116 0.76949,-0.38638 1.21979,-0.43455 0.28922,-0.0317 0.86002,-0.0794 1.45494,-0.11326 0.62113,0.13353 1.0431,0.26869 1.65749,0.34094 0.62189,0.0734 1.24228,0.1182 1.86193,0.14228 0.62113,0.0241 1.24227,0.0252 1.86489,0.012 0.61891,-0.0131 1.23929,-0.0427 1.86417,-0.08 0.61664,-0.0372 1.23629,-0.0843 1.86267,-0.13244 0.61439,-0.0481 0.94114,0.0727 1.56902,0.0245 0.5065,-0.0383 1.14161,0.26642 1.14161,1.03406 0,1.37808 0.31863,1.16947 0.22722,2.25471 -0.11621,1.37966 -0.76934,2.3392 -0.76934,2.3392 l -1.0214,0.42786 h -1.60791 -1.60792 -1.60866 -1.60865 -1.60793 -1.60791 -1.60792 -1.60791 -1.60866 c -0.12963,-0.24188 -0.37164,-0.0339 -0.27798,-0.8242 0.0397,-0.33823 -0.0217,-1.11974 0,-1.64294 0.0165,-0.41593 0.11389,-0.96759 0.28247,-1.62762 0.11314,-0.44439 0.43382,-1.11427 0.58667,-1.19855 l 0.94932,-0.5221"
           sodipodi:nodetypes="scscccssssscccccccccccccccc" />
        <path
			  id="bedBlanket"
			  data-selector = 'bed-blanket'
			  class = "${blanketClass()}"
           style="fill:#999999;fill-opacity:1;stroke:#000000;stroke-width:0.0189094;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 125.91032,117.47708 c 0,0 2.06197,-0.003 5.37839,-0.007 1.54788,-0.002 3.26048,0.19258 5.27206,0.19031 1.67669,-0.002 3.60098,-0.13226 5.48695,-0.20309 2.37849,-0.0893 3.75419,0.47713 5.5944,0.47485 1.77189,-0.002 4.65073,-0.13535 6.45398,-0.13763 1.80437,-0.002 3.39385,-0.2666 5.16461,-0.26887 1.84022,-0.002 4.07549,0.30213 5.80929,0.29986 1.89397,-0.002 2.53461,-0.18182 4.19648,-0.26888 2.5488,-0.13353 3.83163,-0.005 5.37951,-0.006 3.31642,-0.004 4.75406,0.0722 4.75406,0.0722 0,0 0.42705,0.6378 0.39238,1.69809 -0.0179,0.52308 -0.004,1.98039 -0.11904,1.69855 -0.019,0.57142 -0.12701,1.12078 -0.14604,1.7232 -0.0201,0.60198 -0.0403,1.2044 -0.0582,1.77628 -0.0213,0.6462 -0.0415,1.25365 -0.0594,1.77672 -0.0347,1.06029 -0.0582,1.77628 -0.0582,1.77628 -2.56711,-0.0119 -1.97686,-0.13453 -3.15625,-0.20522 -0.93074,-0.0556 -2.13142,-0.10307 -3.32536,-0.13955 -1.22084,-0.0374 -2.43271,-0.0639 -3.34106,-0.0775 -0.94755,-0.0142 -3.79802,0.34795 -5.11742,0.31238 -1.18723,-0.0324 -3.27385,-0.28913 -4.96622,-0.32014 -0.50625,-0.009 -2.66903,0.10945 -4.83517,0.2262 -2.1471,0.11537 -4.29756,0.22893 -4.83966,0.21388 -0.73138,-0.0201 -1.95669,-0.13225 -3.19096,-0.24489 -1.20739,-0.10991 -2.42263,-0.22073 -3.19097,-0.24672 -0.92738,-0.031 -3.05097,0.44555 -4.01308,0.4045 -0.88481,-0.0383 -4.06011,-0.24033 -4.96061,-0.28639 -1.65093,-0.0839 -3.64234,0.26177 -5.34927,0.13681 l -3.49898,0.25858 c 0,0 0.0235,-0.7137 0.0572,-1.7708 0.0168,-0.52171 0.0369,-1.12687 0.0571,-1.77126 0.019,-0.57004 0.0381,-1.17065 0.0571,-1.77125 0.0191,-0.6006 0.0381,-1.2012 0.0571,-1.7708 0.0213,-0.64438 0.0403,-1.24955 0.0582,-1.77125 0.0336,-1.0571 0.0571,-1.7708 0.0571,-1.7708"
           sodipodi:nodetypes="cccsssssssscccccccccccccccccccccsccc" />
      </g>
      <rect
         style="fill:none;fill-opacity:0.971774;stroke:none;stroke-width:2.26126"
         id="underBedHitbox"
         data-selector = "underBedView"
         class = 'bedroom1_bedUnderView'
         width="57.769047"
         height="6.7038579"
         x="130.3528"
         y="105.85477"
         ry="0" />
    </g>
  </g>
</svg>
  `;
  return html;
}
