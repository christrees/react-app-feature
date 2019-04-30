
import { defineSupportCode } from 'cucumber';
import christreesGithubPage from '../pageobjects/christrees-github-search.page';
import loginPage from '../pageobjects/ta-login.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Yahoo serch feature
  Given(/^I am on the christrees github repo page$/, function() {
    christreesGithubPage.open();
    browser.getTitle().should.equal('christrees · GitHub');
  });

  // *** belongs to ta-loging  feature
  Given(/^I am at the "([^"]*)" page$/, function(url) {
    loginPage.open(url);     // navigating to login page
  });

});
