import Page from './page'
import navBar from './ta-nav.object'

class HomePage extends Page {

    /**
    * define elements
    */


    /**
     * define or overwrite page methods
     */
    open () {
        super.open('reactapp/')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    waitForHomePageToLoad () {
      if(!navBar.getNavList.isVisible()){
        navBar.getNavList.waitForVisible(3000);
      }
    }

    getNavListText () {
      return navBar.getNavList.getText();
    }
}

export default new HomePage()
