'use strict';

angular.module('app.contactList')

  .component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: function contactListComponent(Contact) {
      this.contacts = Contact.query();
    }
  });