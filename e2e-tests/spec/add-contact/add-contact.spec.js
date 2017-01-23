'use strict';
var Menu = require('../../pageObjects/menu.po.js');
var AddContact = require('./add-contact.po.js');

describe('Add contact', function() {
  var menu = new Menu();
  var page = new AddContact();

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');

    expect(browser.getLocationAbsUrl()).toMatch("/contact-list");
  });

  describe('it should add new contact', function () {
    it('should navigate to the form', function () {
      menu.addContactBtn().click();

      expect(browser.getLocationAbsUrl()).toMatch("/add-contact");
      expect(page.form().isPresent()).toBe(true);
    });

    it('should fill out the form', function () {
      page.nameField().sendKeys('alex');
      page.emailField().sendKeys('alex@web.gr');
      page.jobField().sendKeys('developer');
      page.locationField().sendKeys('london');
      page.tagField().sendKeys('friends');
      page.submitButton().click();

      expect(browser.getLocationAbsUrl()).toMatch("/contact-list");
    });

    it('should verify that new contact was added', function () {
      expect(page.getAvatar().getAttribute('src')).toBe('http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png');
      expect(page.getName().getText()).toBe('alex');
      expect(page.getEmail().getText()).toBe('alex@web.gr');
    });
  })
});
