'use strict';

angular.module('app.contactDetail')

  .component('contactDetail', {
    templateUrl: 'contact-detail/contact-detail.template.html',
    controller: function contactListComponent($routeParams, Contact) {
      var self = this;
      self.contact = Contact.get({contactId: $routeParams.contactId});
    }
  });