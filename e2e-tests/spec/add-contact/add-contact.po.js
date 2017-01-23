var AddContact = function() {
  this.form = function () {
    return element(by.css('[data-test=addContactForm]'));
  };

  this.nameField = function () {
    return element(by.css('[name=name]'));
  };

  this.emailField = function () {
    return element(by.css('[name=email]'));
  };

  this.jobField = function () {
    return element(by.css('[name=job]'));
  };

  this.locationField = function () {
    return element(by.css('[name=location]'));
  };

  this.tagField = function () {
    return element(by.css('[name=tag]'));
  };

  this.submitButton = function () {
    return element(by.css('[type=submit]'));
  };

  this.getAvatar = function () {
    return element.all(by.css('[data-test=contactAvatar]')).last();
  };

  this.getName = function () {
    return element.all(by.css('[data-test=contactName]')).last();
  };

  this.getEmail = function () {
    return element.all(by.css('[data-test=contactEmail]')).last();
  };
};
module.exports = AddContact;