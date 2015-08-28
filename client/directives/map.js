import _ from 'lodash';

class CustomMap {

  constructor() {
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.template = `<div ng-style="vm.style"></div>`;
    this.scope = { height:'@', width:'@', feed:'=', markers: '=', position: '@' };
    this.controller = /*@ngInject*/ function($scope){

      this.map;
      this.items = [];
      this.markers = [];
      this.style = { width:this.height, height:this.width, position:this.position, float:'left', top: 0, left: 0 };

      $scope.$watchCollection('vm.feed', _.debounce((res) => { this.update(res); }, 500));

      this.update = (res) => _.difference(res, this.items).forEach(item => {
        this.items.push(item);
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.latitude, item.longitude),
          map: this.map,
          animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
      })

    }
    
  }
  
  link($scope, $element, $attr) { 
    var mapOptions = { center: new google.maps.LatLng(0,0), zoom: 1, mapTypeId: google.maps.MapTypeId.ROADMAP };
    var el = $element[0].children[0];
    var init = el => $scope.vm.map = new google.maps.Map(el, mapOptions)

    if (document.readyState === "complete") init(el)
    else google.maps.event.addDomListener(window, 'load', init(el));
  }  

}

export default [ 'map', CustomMap ]
