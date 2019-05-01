
import { defineSupportCode } from 'cucumber';
import isVisable from '../support/check/isVisible'
import isContainedInDOM from '../support/check/isContainedInDOM'
import christreesGithubPage from '../pageobjects/christrees-github-search.page';
import homePage from '../pageobjects/ta-home.page';
import listPage from '../pageobjects/ta-list.page';
import navBar from '../pageobjects/ta-nav.object';

defineSupportCode(function({ Then }) {
  // *** belongs to Yahoo serch feature
  Then(/^I should see a list of search results$/, function() {
    christreesGithubPage.isSearched().should.be.true;
  });

  // *** belongs to ta-loging  feature
  Then(/^I should see a navigation link "([^"]*)"$/, function(message) {
    homePage.getNavListText().should.equal(message);
  });

  //Then I should see a button with <buttonText> text *** ta-list-repo feature
  Then(/^I should see a button with "([^"]*)" text$/, function(message) {
    listPage.getFetchReposButtonText().should.equal(message);
  });

  //Then I should see <repoText> in the repo-list text *** ta-list-repo feature
  Then(/^I should see "([^"]*)" in the repo-list text$/, function(message) {
    listPage.getReposList(message);
  });

  //Generics
  Then(/^I should see the "([^"]*)" element$/, function(element) {
    isVisable(element);
  });

  Then(/^I should see "([^"]*)" somewhere on the page$/, function(arg) {
    isContainedInDOM(arg);
  });

});
 