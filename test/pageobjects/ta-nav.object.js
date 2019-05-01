

class NavObject {

    /**
    * define elements
    */

    get navBar () { return browser.element('ul.nav-bar'); }
    get navList () { return browser.element('a.nav-list'); }
    get signIn ()     { return browser.element('button.sign-in'); }
    get signOut ()     { return browser.element('button.sign-out'); }
    get versionInfo () { return browser.element('div.ct-ra-version'); }

    /**
     * define or overwrite page methods
     */

    waitForNavBarToLoad () {
      if(!this.navLinkList.isVisible()){
        this.navLinkList.waitForVisible(10000);
      }
    }
    getNavList () {
      return this.navList();
    }
    clickNavList () {
      this.navList.click();
    }

}

export default new NavObject()
