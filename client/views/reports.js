import { colours, types } from './map.data';

export default /*@ngInject*/ function ($scope, $http, SweetAlert) {

  this.colours = colours
  this.types = types

  this.edit = record => {
    this.editing = record
    window.scroll(0, 0)
  }

  this.update = () => {
    $http.put(`/api/v1/activity/me/${this.editing.id}`, this.editing).then(res => {
      SweetAlert.swal("Record updated!", "Detailed saved successfully", "success")
      this.editing = false
    })
  }

  this.delete = () => {
    $http.delete(`/api/v1/activity/me/${this.editing.id}`).then(res => {
      SweetAlert.swal("Record removed", "Detailed deleted successfully", "success")
      this.reports = this.reports.filter(item => item.id !== this.editing.id)
      this.editing = false
    })
  }

  $http.get('/api/v1/activity/me').then(res => this.reports = res.data)

}


