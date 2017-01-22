'use strict';

describe('app.addContact module', function () {

  var $httpBackend;
  var $location;
  var ctrl;

  beforeEach(module('app'));

  beforeEach(inject(function($componentController, _$httpBackend_, _$location_) {
    $location = _$location_;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('form.php')
      .respond({success: true, "message": "file created"});

    ctrl = $componentController('addContact');
    spyOn(ctrl.contact, '$save');
    spyOn($location, 'url');
  }));


  it('should have the correct properties defined ', function() {
    expect(ctrl.contact).toBeDefined();
  });

  it('should have the correct properties defined ', function() {

    ctrl.submitForm();
    expect(ctrl.contact.action).toBe('addContact');
    expect(ctrl.contact.$save).toHaveBeenCalled();
  });
});