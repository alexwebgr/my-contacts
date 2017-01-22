'use strict';

angular.module('app.addContact')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/add-contact', {
      template: '<add-contact></add-contact>'
    });
  }]);