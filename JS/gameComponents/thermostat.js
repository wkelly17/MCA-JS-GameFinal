export default function thermostat(room) {
  // functions here

  //   todo: zoom view puzzle on this later?

  function thermostatSwitchClassNames() {
    if (room.$thermostatSwitch.inspected) {
      return `${room.name}_Switch-Inspected`;
    } else {
      return '';
    }
  }
  // id = '${room.name}_thermostat'
  // class = 'thermostatClassNames()}'
  // class = '${room.name}_thermostat'
  // data-selector = 'thermostat'
  let html = `
  <svg
  id = '${room.name}_thermostat'
  class = '${room.name}_thermostat'
  xmlns="http://www.w3.org/2000/svg"
  width="54.121601"
  height="40.002922"
  viewBox="0 0 14.319674 10.584106">
 <g
	 inkscape:label="Layer 1"
	 inkscape:groupmode="layer"
	 id="layer1"
	 transform="translate(-144.39201,38.549352)">$couchLeftLeft=&quot;rect76132&quot;
	 id=&quot;rect76329&quot; /&gt;
 <g
  id="$thermostat"
  transform="translate(-34.603913,-108.90254)">
 <rect
	 style="opacity:1;fill:#ececec;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	 id="rect76756"
	 width="14.319674"
	 height="10.584106"
	 x="178.99593"
	 y="70.353188"
	 ry="1.990893" />
 <rect
	 style="opacity:1;fill:#008000;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	 id="rect76758"
	 width="6.9304786"
	 height="1.8048121"
	 x="180.4812"
	 y="71.975906"
	 ry="0" />
 <g
	 id="g76770">
	<path
		style="opacity:1;fill:#999999;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76760"
		sodipodi:type="arc"
		sodipodi:cx="-190.19687"
		sodipodi:cy="-72.894806"
		sodipodi:rx="1.2597688"
		sodipodi:ry="1.0879822"
		sodipodi:start="0"
		sodipodi:end="3.1169616"
		sodipodi:arc-type="slice"
		d="m -188.9371,-72.894806 a 1.2597688,1.0879822 0 0 1 -1.24425,1.0879 1.2597688,1.0879822 0 0 1 -1.27491,-1.061104 l 1.25939,-0.0268 z"
		transform="scale(-1)" />
	<path
		style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 189.59521,72.665759 0.544,-0.543992 0.45809,0.572622"
		id="path76766" />
 </g>
 <g
	 id="g76770-0"
	 transform="rotate(180,190.19657,73.066596)">
	<path
		style="opacity:1;fill:#999999;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		id="path76760-6"
		sodipodi:type="arc"
		sodipodi:cx="-190.19687"
		sodipodi:cy="-72.894806"
		sodipodi:rx="1.2597688"
		sodipodi:ry="1.0879822"
		sodipodi:start="0"
		sodipodi:end="3.1169616"
		sodipodi:arc-type="slice"
		d="m -188.9371,-72.894806 a 1.2597688,1.0879822 0 0 1 -1.24425,1.0879 1.2597688,1.0879822 0 0 1 -1.27491,-1.061104 l 1.25939,-0.0268 z"
		transform="scale(-1)" />
	<path
		style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
		d="m 189.59521,72.665759 0.544,-0.543992 0.45809,0.572622"
		id="path76766-7" />
 </g>
 <rect
	 style="opacity:1;fill:#999999;fill-opacity:1;stroke:none;stroke-width:1.50812;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	 id="rect76795"
	 width="5.9420404"
	 height="1.6606576"
	 x="185.8537"
	 y="78.180649"
	 ry="0.83032882" />
 <rect
 data-selector = "thermostatSwitch"
 class = ${thermostatSwitchClassNames()}
	 style="opacity:1;fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:1.79502;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	 id="rect76799"
	 width="3.0877852"
	 height="1.6866053"
	 x="185.88986"
	 y="78.154701"
	 ry="0.84330267" />
</g>
</g>
</svg>
 `;
  return html;
}
