'use strict';

angular.module('app.common.contact')

  .factory('Contact', Contact);

function Contact($resource) {
  return $resource('data/:contactId.json', {}, {
    query: {
      method: 'GET',
      params: {
        contactId: 'contacts',
        ts: new Date().getTime()
      },
      isArray: true
    },
    save: {
      method: 'GET',
      url: 'form.php',
      params: {
        ts: new Date().getTime()
      }
    }
  });

}