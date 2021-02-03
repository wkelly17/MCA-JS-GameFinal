export default function coffeeTable(room) {
  // functions here

  // function coffeeTableClassNames() {
  //   if (room.$coffeeTable.inspected) {
  //     return `${room.name}_coffeeTable ${room.name}coffeeTable-inspected`;
  //   } else {
  //     return `${room.name}_coffeeTable`;
  //   }
  // }
  // id = '${room.name}_coffeeTable'
  // class = 'coffeeTableClassNames()}'
  // class = '${room.name}_coffeeTable'
  // data-selector = 'coffeeTable'
  let html = `
  <svg
  id = '${room.name}_coffeeTable'
  class = '${room.name}_coffeeTable'
	xmlns="http://www.w3.org/2000/svg" 
	width="316.40305" 
	height="108.48103" 
	viewBox="0 0 83.714976 28.702271">
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-58.372328,-55.481113)">
	  <g id="coffeeTable" transform="translate(-69.76285,-156.71072)">
		  <rect style="fill:#552200;stroke-width:0.297846" id="rect996" width="83.714973" height="7.7906179"
			  x="128.13518" y="212.19183" />
		  <rect style="fill:#552200;stroke-width:0.297846" id="rect998" width="6.855968" height="22.141756" x="133.18694"
			  y="218.75235" />
		  <rect style="fill:#552200;stroke-width:0.306431" id="rect998-7" width="6.855968" height="23.436522"
			  x="200.84451" y="217.9323" />
		  <rect style="fill:#552200;stroke-width:0.269541" id="rect996-0" width="68.559685" height="7.7906179"
			  x="136.43449" y="229.20819" />
	  </g>
  </g>
</svg>
 `;

  function bookClassNames() {
    if (room.$bookSpine.found) {
      return `dNone`;
    } else {
      return `${room.name}_bookSpine`;
    }
  }

  let book = `
 <svg
   id = '${room.name}_bookSpine'
   class = '${bookClassNames()}'
   data-selector = 'bookSpine'
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   width="109.63715"
   height="24.67322"
   viewBox="0 0 29.008165 6.5281227">
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-122.69575,-77.248416)">
    <g
       id="g3885"
       transform="translate(-18.542002,-145.54144)">
      <rect
         style="fill:#502d16;stroke:none;stroke-width:0.315725"
         id="rect3311"
         width="29.008163"
         height="6.5281229"
         x="141.23775"
         y="222.78986" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:7.65049px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.191262"
         x="120.16231"
         y="273.03625"
         id="text3876"
         transform="scale(1.1972806,0.83522608)"><tspan
           sodipodi:role="line"
           id="tspan3874"
           x="120.16231"
           y="273.03625"
           style="stroke-width:0.191262">Ideas</tspan></text>
    </g>
  </g>
</svg>
 `;

  return html.concat(book);
}
