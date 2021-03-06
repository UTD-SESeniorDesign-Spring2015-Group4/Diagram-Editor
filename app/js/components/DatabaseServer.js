/**
 * Represents a Database Server in a network topology.
 * Subclass of Component.
 */
define([
	'./Component'
], function (Component) {

	// Represents a Database Server in a network topology.
	return Component.extend({
		defaults: {
			type: 'DatabaseServer',
			name: '',

			// Text field content is left to be filled in by the parent class's
			// initialize() function.
			template: _.template(
				[
					'<text class="type" text-anchor="middle" font-size="15" x="51" y="0"><%= type %></text>',
					'<g class="scalable">',
					'<path transform="translate(0, 50)" id="server-4-icon" fill="#333333" d="M717.3,140.9H242.7v118.9h474.6L717.3,140.9L717.3,140.9z M274.5,226.6l20.7-52.2h25.1l-20.7,52.2H274.5z M315.2,226.6l20.7-52.2H361l-20.7,52.2H315.2z M356.1,226.6l20.7-52.2h25.1L381,226.6H356.1z M396.8,226.6l20.7-52.2h25.1l-20.7,52.2H396.8z M463,226.6h-25.1l20.7-52.2h25.1L463,226.6z M661,217.9c-9.7,0-17.4-7.7-17.4-17.4s7.7-17.4,17.4-17.4s17.4,7.7,17.4,17.4C678.4,210,670.6,217.9,661,217.9z M691.2,109.5H270.1L353.2-0.1h254L691.2,109.5zM717.3,291.1H242.7V410h474.6L717.3,291.1L717.3,291.1z M274.5,376.8l20.7-52.2h25.1l-20.7,52.2H274.5z M315.2,376.8l20.7-52.2H361l-20.7,52.2H315.2z M356.1,376.8l20.7-52.2h25.1L381,376.8H356.1z M396.8,376.8l20.7-52.2h25.1l-20.7,52.2H396.8z M463,376.8h-25.1l20.7-52.2h25.1L463,376.8z M661,368.1c-9.7,0-17.4-7.7-17.4-17.4c0-9.7,7.7-17.4,17.4-17.4s17.4,7.7,17.4,17.4C678.4,360.3,670.6,368.1,661,368.1z M717.3,441.2H242.7v118.9h474.6L717.3,441.2L717.3,441.2z M274.5,526.7l20.7-52.2h25.1l-20.7,52.2H274.5z M315.2,526.7l20.7-52.2H361l-20.7,52.2H315.2z M356.1,526.7l20.7-52.2h25.1L381,526.7H356.1z M396.8,526.7l20.7-52.2h25.1l-20.7,52.2H396.8z M463,526.7h-25.1l20.7-52.2h25.1L463,526.7z M661,518.2c-9.7,0-17.4-7.7-17.4-17.4c0-9.7,7.7-17.4,17.4-17.4s17.4,7.7,17.4,17.4C678.4,510.2,670.6,518.2,661,518.2z"/>',
					'<rect transform="translate(0, 50)" x="242.7" y="-0.1" fill="rgba(0, 0, 0, 0)" width="474.6" height="560.1"/>', // Invisible rectangle to allow the component to be clicked where it should be blank.
					'</g>',
					'<text class="name" text-anchor="middle" font-size="15" x="51" y="80"><%= name %></text>'
				].join('')
			),

			// All fill attributes are set explicitly so the color of components
			// can be easily changed externally.
			attrs: {
				path: {
					fill: "#333333"
				},
				text: {
					fill: "#333333"
				}
			},

			// The icon to be displayed when the component is in the Palette.
			paletteIcon: 'img/databaseserver_palette.svg'
		}
	});
});
