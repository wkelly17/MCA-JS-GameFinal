export default function bookShelf(room) {
  // functions here

  // todo: nodes for books to give a random message; Room level fxn;

  function bookShelfClassNames() {
    if (room.$specialBook?.inspected) {
      return `${room.name}_bookShelf 
		${room.name}_bookShelf-inspected`;
    } else {
      return `${room.name}_bookShelf`;
    }
  }
  function specialBookClass() {
    if (room.$specialBook?.inspected) {
      return `${room.name}_bookShelf-inspectedBook`;
    } else return '';
  }
  // id = '${room.name}_bookShelf'
  // class = 'bookShelfClassNames()}'
  // class = '${room.name}_bookShelf'
  // data-selector = 'bookShelf'

  let html = `
  <svg
  id = '${room.name}_bookShelf'
  class = '${bookShelfClassNames()}'
  xmlns="http://www.w3.org/2000/svg"
  width="217.7345"
  height="253.75127"
  viewBox="0 0 57.608923 67.138358">

 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-107.72998,41.362389)">
	<g
		id="$bookShelf"
		transform="translate(-15.20276,-85.586713)">
	  <g
		  id="$bookCaseFrame"
		  transform="matrix(0.78662048,0,0,0.90274436,26.233461,10.833472)">
		 <rect
			 style="opacity:1;fill:#5b5142;fill-opacity:1;stroke:none;stroke-width:0.29657;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75241-3"
			 width="73.020317"
			 height="74.195496"
			 x="123.14569"
			 y="37.164062" />
		 <rect
			 style="opacity:1;fill:#786b57;fill-opacity:0.350806;stroke:none;stroke-width:0.265552;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="$bookCaseInset"
			 width="63.156319"
			 height="68.778221"
			 x="127.73773"
			 y="41.884926" />
		 <path
			 style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 127.78541,42.094016 -4.76063,-4.885912"
			 id="path75258" />
		 <path
			 style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			 d="m 190.80116,42.219296 5.26175,-5.136472"
			 id="path75260" />
	  </g>
	  <rect
		  style="opacity:1;fill:#3d362c;fill-opacity:1;stroke:#000000;stroke-width:0.676337;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75262"
		  width="49.980316"
		  height="14.349364"
		  x="126.4923"
		  y="49.56427" />
	  <rect
		  style="opacity:1;fill:#3d362c;fill-opacity:1;stroke:#000000;stroke-width:0.676336;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75262-7"
		  width="49.980316"
		  height="14.349364"
		  x="126.12486"
		  y="64.880547" />
	  <rect
		  style="opacity:1;fill:#3d362c;fill-opacity:1;stroke:#000000;stroke-width:0.676336;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75262-6"
		  width="49.980316"
		  height="14.349364"
		  x="126.04015"
		  y="80.077873" />
	  <rect
		  style="opacity:1;fill:#3d362c;fill-opacity:1;stroke:#000000;stroke-width:0.676336;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75262-9"
		  width="49.980316"
		  height="14.349364"
		  x="126.07336"
		  y="95.285278" />
	  <rect
		  style="opacity:1;fill:#008000;fill-opacity:1;stroke:none;stroke-width:0.701381;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="$book"
		  width="4.3160386"
		  height="13.879036"
		  x="-131.48784"
		  y="-62.186516"
		  transform="matrix(-0.99994038,-0.01091963,0.00950377,-0.99995484,0,0)" />
	  <g
		  id="$rowOfBooks">
		 <rect
			 style="opacity:1;fill:#000040;fill-opacity:1;stroke:none;stroke-width:0.701381;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-6"
			 width="4.3160386"
			 height="13.879037"
			 x="-136.09201"
			 y="-62.196289"
			 transform="matrix(-0.99994038,-0.01091963,0.00950377,-0.99995484,0,0)" />
		 <rect
			 style="opacity:1;fill:#2b0000;fill-opacity:1;stroke:none;stroke-width:0.701381;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-66"
			 width="4.3160386"
			 height="13.879037"
			 x="-140.88902"
			 y="-62.23267"
			 transform="matrix(-0.99994038,-0.01091963,0.00950377,-0.99995484,0,0)" />
		 <rect
			 style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.595405;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9"
			 width="3.110369"
			 height="13.878736"
			 x="-144.40408"
			 y="-61.670452"
			 transform="matrix(-0.9998852,-0.0151524,0.0068487,-0.99997655,0,0)" />
		 <rect
			 style="opacity:1;fill:#501616;fill-opacity:1;stroke:none;stroke-width:0.627512;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-3"
			 width="3.454839"
			 height="13.878812"
			 x="-148.52103"
			 y="-61.744034"
			 transform="matrix(-0.99990695,-0.0136416,0.00760731,-0.99997106,0,0)" />
		 <rect
			 style="opacity:1;fill:#803300;fill-opacity:1;stroke:none;stroke-width:0.587104;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-94"
			 width="3.0242529"
			 height="13.878717"
			 x="-152.20468"
			 y="-61.220219"
			 transform="matrix(-0.99987856,-0.01558386,0.00665904,-0.99997783,0,0)" />
		 <rect
			 style="opacity:1;fill:#999999;fill-opacity:1;stroke:none;stroke-width:0.811685;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-34"
			 width="5.7801218"
			 height="13.879535"
			 x="-158.88199"
			 y="-62.21159"
			 transform="matrix(-0.99996676,-0.00815373,0.01272751,-0.999919,0,0)" />
		 <rect
			 style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.793333;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9-1"
			 width="5.5217514"
			 height="13.879436"
			 x="-164.79961"
			 y="-62.011257"
			 transform="matrix(-0.99996357,-0.00853525,0.01215865,-0.99992608,0,0)" />
		 <rect
			 style="opacity:1;fill:#784421;fill-opacity:1;stroke:none;stroke-width:0.635285;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9-7"
			 width="3.5409575"
			 height="13.878832"
			 x="-168.58829"
			 y="-61.437538"
			 transform="matrix(-0.99991142,-0.01330983,0.00779696,-0.9999696,0,0)" />
		 <rect
			 style="opacity:1;fill:#7c916f;fill-opacity:1;stroke:none;stroke-width:0.857134;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9-5"
			 width="6.4454241"
			 height="13.879808"
			 x="-176.15088"
			 y="-62.486576"
			 transform="matrix(-0.99997327,-0.0073121,0.01419229,-0.99989928,0,0)" />
	  </g>
	  <g
		  id="$rowOfBooks-6"
		  transform="rotate(180,153.49961,64.353757)">
		 <rect
			 style="opacity:1;fill:#225500;fill-opacity:1;stroke:none;stroke-width:0.701381;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-6-1"
			 width="4.3160386"
			 height="13.879037"
			 x="-136.09201"
			 y="-62.196289"
			 transform="matrix(-0.99994038,-0.01091963,0.00950377,-0.99995484,0,0)" />
		 <rect
			 style="opacity:1;fill:#17280b;fill-opacity:1;stroke:none;stroke-width:0.701381;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-66-8"
			 width="4.3160386"
			 height="13.879037"
			 x="-140.88902"
			 y="-62.23267"
			 transform="matrix(-0.99994038,-0.01091963,0.00950377,-0.99995484,0,0)" />
		 <rect
			 style="opacity:1;fill:#abc837;fill-opacity:1;stroke:none;stroke-width:0.595405;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9-2"
			 class = '${specialBookClass()}'
			 data-selector = 'specialBook'
			 width="3.110369"
			 height="13.878736"
			 x="-144.40408"
			 y="-61.670452"
			 transform="matrix(-0.9998852,-0.0151524,0.0068487,-0.99997655,0,0)" />
		 <rect
			 style="opacity:1;fill:#668000;fill-opacity:1;stroke:none;stroke-width:0.627512;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-3-3"
			 width="3.454839"
			 height="13.878812"
			 x="-148.52103"
			 y="-61.744034"
			 transform="matrix(-0.99990695,-0.0136416,0.00760731,-0.99997106,0,0)" />
		 <rect
			 style="opacity:1;fill:#6c6753;fill-opacity:1;stroke:none;stroke-width:0.587104;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-94-4"
			 width="3.0242529"
			 height="13.878717"
			 x="-152.20468"
			 y="-61.220219"
			 transform="matrix(-0.99987856,-0.01558386,0.00665904,-0.99997783,0,0)" />
		 <rect
			 style="opacity:1;fill:#c8ab37;fill-opacity:1;stroke:none;stroke-width:0.811685;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-34-1"
			 width="5.7801218"
			 height="13.879535"
			 x="-158.88199"
			 y="-62.21159"
			 transform="matrix(-0.99996676,-0.00815373,0.01272751,-0.999919,0,0)" />
		 <rect
			 style="opacity:1;fill:#aa8800;fill-opacity:1;stroke:none;stroke-width:0.793333;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9-1-0"
			 width="5.5217514"
			 height="13.879436"
			 x="-164.79961"
			 y="-62.011257"
			 transform="matrix(-0.99996357,-0.00853525,0.01215865,-0.99992608,0,0)" />
		 <rect
			 style="opacity:1;fill:#917c6f;fill-opacity:1;stroke:none;stroke-width:0.635285;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9-7-1"
			 width="3.5409575"
			 height="13.878832"
			 x="-168.58829"
			 y="-61.437538"
			 transform="matrix(-0.99991142,-0.01330983,0.00779696,-0.9999696,0,0)" />
		 <rect
			 style="opacity:1;fill:#7c916f;fill-opacity:1;stroke:none;stroke-width:0.857134;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			 id="rect75345-9-5-3"
			 width="6.4454241"
			 height="13.879808"
			 x="-176.15088"
			 y="-62.486576"
			 transform="matrix(-0.99997327,-0.0073121,0.01419229,-0.99989928,0,0)" />
	  </g>
	  <rect
		  style="opacity:1;fill:#225500;fill-opacity:1;stroke:none;stroke-width:0.701381;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="$book-9"
		  width="4.3160386"
		  height="13.879037"
		  x="-131.49269"
		  y="-77.61039"
		  transform="matrix(-0.99994038,-0.01091963,0.00950377,-0.99995484,0,0)" />
	  <rect
		  style="fill:#917c6f;fill-opacity:1;stroke:none;stroke-width:0.474244;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-6-1-7"
		  width="1.9733198"
		  height="13.878541"
		  x="174.76422"
		  y="75.648781"
		  transform="matrix(0.99971475,0.02388339,-0.00434436,0.99999056,0,0)" />
	  <rect
		  style="fill:#28220b;fill-opacity:1;stroke:none;stroke-width:0.591664;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-66-8-1"
		  width="3.0714111"
		  height="13.878728"
		  x="171.53244"
		  y="77.102913"
		  transform="matrix(0.99988226,0.01534459,-0.0067629,0.99997713,0,0)" />
	  <rect
		  style="fill:#c8ab37;fill-opacity:1;stroke:none;stroke-width:0.680436;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-2-6"
		  width="4.062139"
		  height="13.878965"
		  x="167.02991"
		  y="77.709724"
		  transform="matrix(0.99993269,0.01160215,-0.00894467,0.99996,0,0)" />
	  <rect
		  style="fill:#c87137;fill-opacity:1;stroke:none;stroke-width:0.449288;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-3-3-6"
		  width="1.771096"
		  height="13.878515"
		  x="164.11014"
		  y="75.366829"
		  transform="matrix(0.99964588,0.02661038,-0.00389889,0.9999924,0,0)" />
	  <rect
		  style="fill:#aa4400;fill-opacity:1;stroke:none;stroke-width:0.587104;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-94-4-4"
		  width="3.0242529"
		  height="13.878717"
		  x="160.68002"
		  y="77.40847"
		  transform="matrix(0.99987856,0.01558386,-0.00665904,0.99997783,0,0)" />
	  <rect
		  style="fill:#483737;fill-opacity:1;stroke:none;stroke-width:0.605581;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-34-1-9"
		  width="3.217592"
		  height="13.878758"
		  x="156.89726"
		  y="77.703346"
		  transform="matrix(0.99989272,0.01464746,-0.00708483,0.9999749,0,0)" />
	  <rect
		  style="fill:#501616;fill-opacity:1;stroke:none;stroke-width:0.629043;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9"
		  width="3.471724"
		  height="13.878815"
		  x="153.11784"
		  y="78.011986"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#ff8080;fill-opacity:1;stroke:none;stroke-width:0.60155;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-7-1-8"
		  width="3.174896"
		  height="13.878749"
		  x="131.8237"
		  y="78.566032"
		  transform="matrix(0.99988982,0.01484444,-0.00699081,0.99997556,0,0)" />
	  <rect
		  style="fill:#800080;fill-opacity:1;stroke:none;stroke-width:0.652584;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-5-3-7"
		  width="3.7364273"
		  height="13.878881"
		  x="127.10815"
		  y="78.661812"
		  transform="matrix(0.99992045,0.01261354,-0.00822742,0.99996615,0,0)" />
	  <rect
		  style="fill:#006f6f;fill-opacity:1;stroke:none;stroke-width:0.629044;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-3"
		  width="3.471724"
		  height="13.878815"
		  x="149.26691"
		  y="77.849678"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#006100;fill-opacity:1;stroke:none;stroke-width:0.629044;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-2"
		  width="3.471724"
		  height="13.878815"
		  x="145.11566"
		  y="77.755119"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#808000;fill-opacity:1;stroke:none;stroke-width:0.629044;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-4"
		  width="3.471724"
		  height="13.878815"
		  x="141.26738"
		  y="77.807358"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#554400;fill-opacity:1;stroke:none;stroke-width:0.721719;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-1"
		  width="4.5699396"
		  height="13.879112"
		  x="135.74358"
		  y="78.789558"
		  transform="matrix(0.99994682,0.01031294,-0.01006287,0.99994937,0,0)" />
	  <rect
		  style="fill:#3d362c;fill-opacity:1;stroke:#000000;stroke-width:0.676336;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75262-6-4"
		  width="49.980316"
		  height="14.349364"
		  x="126.19895"
		  y="95.461433" />
	  <rect
		  style="fill:#225500;fill-opacity:1;stroke:none;stroke-width:0.474244;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-6-1-7-7"
		  width="1.9733198"
		  height="13.878541"
		  x="174.05653"
		  y="91.516998"
		  transform="matrix(0.99971475,0.02388339,-0.00434436,0.99999056,0,0)" />
	  <rect
		  style="fill:#28220b;fill-opacity:1;stroke:none;stroke-width:0.591664;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-66-8-1-6"
		  width="3.0714109"
		  height="13.878728"
		  x="170.8632"
		  y="92.964699"
		  transform="matrix(0.99988226,0.01534459,-0.0067629,0.99997713,0,0)" />
	  <rect
		  style="fill:#917c6f;fill-opacity:1;stroke:none;stroke-width:0.680437;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-2-6-7"
		  width="4.062139"
		  height="13.878966"
		  x="166.39528"
		  y="93.568878"
		  transform="matrix(0.99993269,0.01160215,-0.00894467,0.99996,0,0)" />
	  <rect
		  style="fill:#d4aa00;fill-opacity:1;stroke:none;stroke-width:0.449289;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-3-3-6-2"
		  width="1.771096"
		  height="13.878515"
		  x="163.39534"
		  y="91.237129"
		  transform="matrix(0.99964588,0.02661038,-0.00389889,0.9999924,0,0)" />
	  <rect
		  style="fill:#28220b;fill-opacity:1;stroke:none;stroke-width:0.587105;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-94-4-4-3"
		  width="3.0242529"
		  height="13.878717"
		  x="160.00914"
		  y="93.270432"
		  transform="matrix(0.99987856,0.01558386,-0.00665904,0.99997783,0,0)" />
	  <rect
		  style="fill:#d3bc5f;fill-opacity:1;stroke:none;stroke-width:0.605581;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-34-1-9-1"
		  width="3.217592"
		  height="13.878757"
		  x="156.23312"
		  y="93.564629"
		  transform="matrix(0.99989272,0.01464746,-0.00708483,0.9999749,0,0)" />
	  <rect
		  style="fill:#abc837;fill-opacity:1;stroke:none;stroke-width:0.629044;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-6"
		  width="3.471724"
		  height="13.878815"
		  x="152.4626"
		  y="93.872505"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#008c38;fill-opacity:1;stroke:none;stroke-width:0.601549;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-7-1-8-1"
		  width="3.1748958"
		  height="13.878749"
		  x="131.62132"
		  y="93.797104"
		  transform="matrix(0.99988982,0.01484444,-0.00699081,0.99997556,0,0)" />
	  <rect
		  style="fill:#550000;fill-opacity:1;stroke:none;stroke-width:0.652584;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-5-3-7-6"
		  width="3.7364275"
		  height="13.878882"
		  x="127.51611"
		  y="93.979179"
		  transform="matrix(0.99992045,0.01261354,-0.00822742,0.99996615,0,0)" />
	  <rect
		  style="fill:#550000;fill-opacity:1;stroke:none;stroke-width:0.629044;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-3-8"
		  width="3.471724"
		  height="13.878815"
		  x="148.61168"
		  y="93.710197"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#d35f5f;fill-opacity:1;stroke:none;stroke-width:0.629044;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-2-1"
		  width="3.471724"
		  height="13.878815"
		  x="144.46043"
		  y="93.615639"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#aa4400;fill-opacity:1;stroke:none;stroke-width:0.629044;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-4-4"
		  width="3.471724"
		  height="13.878815"
		  x="140.61214"
		  y="93.667885"
		  transform="matrix(0.99990785,0.01357525,-0.0076445,0.99997078,0,0)" />
	  <rect
		  style="fill:#693b1d;fill-opacity:1;stroke:none;stroke-width:0.72172;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		  id="rect75345-9-1-0-9-1-7"
		  width="4.5699396"
		  height="13.879112"
		  x="135.59114"
		  y="94.331337"
		  transform="matrix(0.99994682,0.01031294,-0.01006287,0.99994937,0,0)" />
	</g>
 </g>
</svg>

 `;
  return html;
}
