
import { defineSupportCode } from 'cucumber';
import christreesGithubPage from '../pageobjects/christrees-github-search.page';
import loginPage from '../pageobjects/ta-login.page';
import listPage from '../pageobjects/ta-list.page';
import navObject from '../pageobjects/ta-nav.object';

defineSupportCode(function({ When }) {
  // *** belongs to christrees-github-search feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    christreesGithubPage.enterText(arg1);
    christreesGithubPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    christreesGithubPage.search();
  });

  // *** belongs to ta-loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)"$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });

  // *** belongs to navObject in the ta-list page feature
  When(/^I click the "([^"]*)" link$/, function(arg) {
    navObject.clickNavList();    
  });

  //When I click the button with <buttonText> text *** ta-list-repo feature
  When(/^I click the button with "([^"]*)" text$/, function(buttonText) {
    //ToDo: put in nav selector list code
    listPage.clickListButton(buttonText);
  });

});
