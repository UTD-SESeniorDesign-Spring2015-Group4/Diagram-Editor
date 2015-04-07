define([
  './Component'
], function(Component) {
  var ApplicationServer = Component.extend({
    defaults: {
      name: '',
      markup: '<g class="scalable"><path id="server-7-icon" fill="#333333" d="M-1037.4,691.9v270.5h349.9V691.9H-1037.4z M-723.2,926.6h-278.3v-199h278.3V926.6zM-878,828.1l-53.6,50l-19.4-17.9l34.5-32.1l-34.6-32.2l19.4-17.9L-878,828.1z M-782.9,852.4h-80.2v24.8h80.2V852.4z M-687.5,990.2h-351v87.9h351L-687.5,990.2L-687.5,990.2z M-1015.2,1053.5l15.5-38.6h18.7l-15.5,38.6H-1015.2z M-985,1053.5l15.5-38.6h18.7l-15.5,38.6H-985z M-954.7,1053.5l15.5-38.6h18.7l-15.5,38.6H-954.7z M-924.5,1053.5l15.5-38.6h18.7l-15.5,38.6H-924.5zM-875.7,1053.5h-18.7l15.5-38.6h18.7L-875.7,1053.5z M-729.2,1047c-7.1,0-12.8-5.8-12.8-12.8c0-7.1,5.8-12.8,12.8-12.8c7.1,0,12.8,5.8,12.8,12.8C-716.3,1041.3-722.1,1047-729.2,1047z"/></g>',
      type: 'client'
    }

  });

  return ApplicationServer;
});