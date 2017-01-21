'use strict';

angular.module('app.common.contact')

  .service('contactService', contactService);

function contactService($resource) {
  return $resource('data/58088826100000e9232b75b0.json');
}