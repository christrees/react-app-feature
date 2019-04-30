import Page from './page'

class NavObject extends Page {

    /**
    * define elements
    */

    get navBar () { return browser.element('ul.nav-bar'); }
    get navLinkList () { return browser.element('a.nav-list'); }

    /**
     * define or overwrite page methods
     */

    waitForNavBarToLoad () {
      if(!this.navLinkList.isVisible()){
        this.navLinkList.waitForVisible(10000);
      }
    }
    getNavLinkList () {
      return this.navLinkList();
    }
    clickNavList () {
      this.navLinkList.click();
    }

}

export default new NavObject()
