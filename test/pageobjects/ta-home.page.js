import Page from './page'

class HomePage extends Page {

    /**
    * define elements
    */

    get listNav ()     { return browser.element('a.nav-list'); }
    get signOut ()     { return browser.element('button.sign-out'); }
    get versionInfo () { return browser.element('div.ct-ra-version'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('reactapp/')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    waitForHomePageToLoad () {
      if(!this.listNav.isVisible()){
        this.listNav.waitForVisible(3000);
      }
    }

    getListNavText(){
      return this.listNav.getText();
    }
}

export default new HomePage()
