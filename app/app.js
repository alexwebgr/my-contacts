'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngResource',
  'ui.router',
  'app.contactList',
  'app.contactDetail',
  'app.addContact',
  'app.common',
  'app.common.contact'
])
.config(function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contact-list'});
});