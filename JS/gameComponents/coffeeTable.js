export default function coffeeTable(room) {
  // functions here

  function coffeeTableClassNames() {
    if (room.$coffeeTable.inspected) {
      return `${room.name}_coffeeTable ${room.name}coffeeTable-inspected`;
    } else {
      return `${room.name}_coffeeTable`;
    }
  }
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
  return html;
}
