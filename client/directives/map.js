import _ from 'lodash';

export default [ 'map', function(){

  var map;

  return {
    restrict: 'E',
    controllerAs: 'vm',
    bindToController: true,
    template: `<div ng-style="vm.style"></div>`,
    scope: { height:'=', width:'=', feed:'=', markers: '=' },
    controller: /*@ngInject*/ controller,
    link: ($scope, $element, $attr) => { // Setup Map
      let el = $element[0].children[0];
      if (document.readyState === "complete") initialize(el);
      else google.maps.event.addDomListener(window, 'load', initialize(el));
    }
  };
  

  function initialize(el) {
    var mapOptions = { center: new google.maps.LatLng(0,0), zoom: 1, mapTypeId: google.maps.MapTypeId.ROADMAP };
    map = new google.maps.Map(el, mapOptions);
  }


  function controller($scope){

    this.items = [];
    this.markers = [];

    $scope.$watchCollection('vm.feed', _.debounce((res) => {
        this.update(res);
    }, 500));

    this.style = { 
      width:this.height.toString()+'px', 
      height:this.width.toString()+'px', 
      float:'left' 
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



}]
