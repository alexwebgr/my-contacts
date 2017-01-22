'use strict';

angular.module('app.addContact')

  .component('addContact', {
    templateUrl: 'add-contact/add-contact.template.html',
    controller: function addContactComponent($scope, Contact, $location) {
      $scope.contact = new Contact();

      $scope.submitForm = function () {
        $scope.contact.action = 'addContact';

        $scope.contact.$save($scope.contact, function () {
          $location.url('contact-list');
        });
      }
    }
  });