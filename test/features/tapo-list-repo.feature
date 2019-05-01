Feature: test app page object (tapo) check for list-repo
    As a user on the react-app list page
    I want to login
    Because I want to 

    Background:

        Given I am at the "http://demo.christrees.com/react-app/" page

    Scenario: Performing login operation with passing test data as data table
        Then I should see the "button.sign-in" element
        When I click on the element "button.sign-in"
        Then I should see the "button.sign-out" element
        Then I should see the "a.nav-list" element
        When I click on the element "a.nav-list"
        Then I should see the "button.fetch-repos" element
        When I click on the element "button.fetch-repos"
        Then I should see "https://github.com/christrees/react-app" somewhere on the page


        