'use strict';

angular.module('app.contactList')

  .component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: function contactListComponent(Contact) {
      var self = this;
      self.contacts = Contact.query();
    }
  });