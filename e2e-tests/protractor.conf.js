//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  suites: {
    contactList: 'spec/contact-list/*.spec.js',
    addContact: 'spec/add-contact/*.spec.js'
  },

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://my-contacts.local/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
