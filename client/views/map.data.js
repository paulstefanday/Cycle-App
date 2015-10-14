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
  { "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
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

export var types = [
  'Accident',
  'Close Call',
  'Verbal Abuse',
  'Horn Abuse'
]
