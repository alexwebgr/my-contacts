var Menu = function() {
  this.addContactBtn = function () {
    return element(by.css('[data-test=addContactBtn]'));
  };

  this.importContactsBtn = function () {
    return element(by.css('[data-test=importContactsBtn]'));
  };

  this.exportContactsBtn = function () {
    return element(by.css('[data-test=exportContactsBtn]'));
  };

  this.deleteContactsBtn = function () {
    return element(by.css('[data-test=deleteContactsBtn]'));
  };

};
module.exports = Menu;