
import Page from './page';

class ChrisTreesGithubPage extends Page  {
  /**
  * define elements
  */

  get searchInput()   { return browser.element('.header-search-input'); }
  get searchButton()  { return browser.element(''); }
  get resultsList()   { return browser.element('.repo-list'); }

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://github.com/christrees')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearElement();
    this.searchInput.setValue(item+'\n');
    
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForVisible(1000);
    return this.resultsList.isVisible();
  }
}

export default new ChrisTreesGithubPage();
