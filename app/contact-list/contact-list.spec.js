'use strict';

describe('app.contactList module', function () {

  var $httpBackend;
  var ctrl;

  beforeEach(module('app'));

  beforeEach(inject(function($componentController, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/contacts.json')
      .respond([{name: 'alex'}, {name: 'john'}]);

    ctrl = $componentController('contactList');
  }));


  it('should have the correct properties defined ', function() {
    $httpBackend.flush();

    expect(ctrl.contacts).toBeDefined();
    expect(ctrl.contacts[0].name).toEqual('alex');
    expect(ctrl.contacts[1].name).toEqual('john');
  });
});