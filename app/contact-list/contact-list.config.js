'use strict';

angular.module('app.contactList')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contact-list', {
      template: '<contact-list></contact-list>'
    });
  }]);