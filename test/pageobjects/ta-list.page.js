import Page from './page'

class ListPage extends Page {

    /**
    * define elements
    */

    get listHeader () { return browser.element('h4'); }
    get fetchReposButton () { return browser.element('button.fetch-repos'); }
    get fetchReposList () { return browser.element('body'); }
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('List/')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    waitForListPageToLoad () {
      if(!this.listHeader.isVisible()){
        this.listHeader.waitForVisible(10000);
      }
    }
    getFetchReposButtonText () {
      return this.fetchReposButton.getText();
    }
    clickListButton () {
      this.fetchReposButton.click();
    }
    getReposList (message) {
      return this.fetchReposList.contains(message);
    }
}

export default new ListPage()
