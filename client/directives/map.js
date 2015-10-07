import _ from 'lodash';

class CustomMap {

  constructor() {
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.template = `
        <map ng-style="vm.style" zoom="3" styles="{{vm.colours}}"
          center="{{ vm.center.latitude }}, {{vm.center.longitude}}"
          draggable="true"
          dragging-cursor="move"
          disable-default-u-i="true">

          <marker animation="DROP" ng-repeat="marker in vm.markers" position="{{ marker.latitude }}, {{marker.longitude}}"></marker>

        </map>
    `;

    // <bicycling-layer></bicycling-layer>

    this.scope = { height:'@', width:'@', markers: '=', position: '@', center: '=' };

    this.controller = /*@ngInject*/ function($scope){

      this.center = { latitude: -33.87, longitude: 151.2 }; // Sydney

      this.style = { width:this.height, height:this.width, position:this.position, float:'left', top: 0, left: 0 };

      this.colours = [ { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#60dd8e" } ] },{ "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#b2e5f4" } ] },{ } ];

    }

  }

  link($scope, $element, $attr) { }

}

export default [ 'customMap', CustomMap ]


//http://ngmap.github.io/drawings.html#
//https://rawgit.com/allenhwkim/angularjs-google-maps/master/build/docs/ngMap.map.html
