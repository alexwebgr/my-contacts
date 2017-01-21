'use strict';

angular.module('app.contactDetail')

  .component('contactDetail', {
    templateUrl: 'contact-detail/contact-detail.template.html',
    controller: function contactListComponent($routeParams, contactService) {
      var self = this;
      self.contact = contactService.query(function (res) {
        self.contact = res[$routeParams.contactId];
      });
    }
  });