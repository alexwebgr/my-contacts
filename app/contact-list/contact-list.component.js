'use strict';

angular.module('app.contactList')

  .component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: function contactListComponent(contactService) {
      this.contacts = contactService.query();
    }
  });