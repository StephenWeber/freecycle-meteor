// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

  var url = require('url');

  this.Given(/^I am a new user$/, function () {
    server.call('reset'); // server is a connection to the mirror
  });

  this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
    client.url(url.resolve(process.env.ROOT_URL, relativePath));
  });

  this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
    client.waitForExist('title');
    expect(client.getTitle()).toEqual(expectedTitle);
  });

  this.Then(/^I should see the posts "([^"]*)"$/, function (expectedPostsTitle) {
    client.waitForExist('.post-type *');
    client.waitForVisible('.post-type *');
    expect(client.getText('.post-type')).toEqual(expectedPostsTitle);
  });

};
