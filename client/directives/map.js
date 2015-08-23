import _ from 'lodash';

export default [ 'map', function(){

  var map;

  this.restrict = 'E';
  this.controllerAs = 'vm';
  this.bindToController = true;
  this.template = `<div ng-style="vm.style"></div>`;
  this.scope = { height:'@', width:'@', feed:'=', markers: '=', position: '@' };
  
  this.controller = /*@ngInject*/ function($scope){

    this.items = [];
    this.markers = [];

    $scope.$watchCollection('vm.feed', _.debounce((res) => {
        this.update(res);
    }, 500));

    this.style = { 
      width:this.height, 
      height:this.width, 
      position:this.position,
      float:'left',
      top: 0,
      left: 0
    };

    this.update = (res) => {

      let diff = _.difference(res, this.items);

      diff.forEach(item => {
        this.items.push(item);
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.lat, item.lng),
          map: map,
          animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
      })
    }
  }

  this.link = ($scope, $element, $attr) => { // Setup Map
    let el = $element[0].children[0];
    if (document.readyState === "complete") initialize(el);
    else google.maps.event.addDomListener(window, 'load', initialize(el));
  }
  

  function initialize(el) {
    var mapOptions = { center: new google.maps.LatLng(0,0), zoom: 1, mapTypeId: google.maps.MapTypeId.ROADMAP };
    map = new google.maps.Map(el, mapOptions);
  }

}]
