'use strict';

angular.module('app.addContact')

  .component('addContact', {
    templateUrl: 'add-contact/add-contact.template.html',
    controller: function addContactComponent(Contact, $location) {
      var self = this;
      self.contact = new Contact();

      self.submitForm = function () {
        self.contact.action = 'addContact';

        self.contact.$save(self.contact, function () {
          $location.url('contact-list');
        });
      }
    }
  });