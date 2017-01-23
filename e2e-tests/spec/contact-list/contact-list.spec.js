'use strict';
var Menu = require('../../pageObjects/menu.po.js');

describe('contact list', function() {
  var menu = new Menu();

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/contact-list");
  });

  it('should have four buttons', function () {
    expect(menu.addContactBtn().isPresent()).toBe(true);
    expect(menu.importContactsBtn().isPresent()).toBe(true);
    expect(menu.exportContactsBtn().isPresent()).toBe(true);
    expect(menu.deleteContactsBtn().isPresent()).toBe(true);
  });
});
