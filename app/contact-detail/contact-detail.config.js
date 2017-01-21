'use strict';

angular.module('app.contactDetail')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contact-list/:contactId', {
      template: '<contact-detail></contact-detail>'
    });
  }]);