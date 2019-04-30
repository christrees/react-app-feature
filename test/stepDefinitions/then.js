
import { defineSupportCode } from 'cucumber';
import christreesGithubPage from '../pageobjects/christrees-github-search.page';
import homePage from '../pageobjects/ta-home.page';
import listPage from '../pageobjects/ta-list.page';

defineSupportCode(function({ Then }) {
  // *** belongs to Yahoo serch feature
  Then(/^I should see a list of search results$/, function() {
    christreesGithubPage.isSearched().should.be.true;
  });

  // *** belongs to ta-loging  feature
  Then(/^I should see a navigation link "([^"]*)"$/, function(message) {
    homePage.getListNavText().should.equal(message);
  });

  //Then I should see a button with <buttonText> text *** ta-list-repo feature
  Then(/^I should see a button with "([^"]*)" text$/, function(message) {
    listPage.getFetchReposButtonText().should.equal(message);
  });

  //Then I should see <repoText> in the repo-list text *** ta-list-repo feature
  Then(/^I should see "([^"]*)" in the repo-list text$/, function(message) {
    listPage.getReposList(message);
  });
});
