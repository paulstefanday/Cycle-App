export var style = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  float:'left',
  top: 0,
  left: 0
};

export var colours = [
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#60dd8e" }
    ]
  },
  {
    "elementType": "geometry.stroke",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [ { "color": "#b2e5f4" } ]
  },
  { }
];



// var light = '#7ac6a2',
//     dark = '#53b184',
//     water = '#d3fbff',
//     weight = 2; //

// export var colours = [
//   {"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},
//   {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":dark}]},
//   {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
//   {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":light}]},
//   {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":light},{"weight":weight}]},
//   {"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"lightness":"-1"}]},
//   {"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"0"},{"saturation":"0"}]},
//   {"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},
//   {"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},
//   {"featureType":"landscape","elementType":"geometry","stylers":[{"color":light}]},
//   {"featureType":"poi","elementType":"geometry","stylers":[{"color":light}]},
//   {"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},
//   {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":dark},{"weight":weight}]},
//   {"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":dark},{"weight":weight}]},
//   {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":dark},{"weight":weight}]},
//   {"featureType":"road.local","elementType":"geometry","stylers":[{"color":dark},{"weight":weight}]},
//   {"featureType":"transit","elementType":"geometry","stylers":[{"color":dark},{"weight":weight}]},
//   {"featureType":"water","elementType":"geometry","stylers":[{"color":water}]}
// ]

// export var colours = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
// export var colours = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]


export var types = [
  'Crash',
  'Close Call',
  'Verbal Abuse',
  'Horn Abuse'
]
