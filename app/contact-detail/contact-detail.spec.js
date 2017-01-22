'use strict';

describe('contactDetail', function() {

  beforeEach(module('app'));

  // Test the controller
  describe('contactDetailController', function() {
    var $httpBackend;
    var ctrl;
    var xyzPhoneData = {
      name: 'alex',
      email: 'email@alex-web.gr',
      job: 'job',
      location: 'london',
      tag: '',
      avatar: ''
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/xyz.json').respond(xyzPhoneData);

      $routeParams.contactId = 'xyz';

      ctrl = $componentController('contactDetail');
    }));

    it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.contact).toEqual({});

      $httpBackend.flush();
      expect(ctrl.contact).toEqual(xyzPhoneData);
    });

  });

});
