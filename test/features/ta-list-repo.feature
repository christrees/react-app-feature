Feature: Repolist christrees github repos via github API

    As a user on the react-app list page
    I want to login
    Because I want to 

    Background:

        Given I am at the "http://demo.christrees.com/react-app/" page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password>
#        Then I should see the version message "v0.0.4"
        Then I should see a navigation link <link>
        When I click the <link> link
        Then I should see a button with <buttonText> text
        When I click the button with <buttonText> text
#        Then I should see <repoText> in the repo-list text

        Examples:
        |user| |password| |link| |buttonText| |repoText|
        |"user@phptravels.com"| |"demouser"| |"List"| |"Fetch christrees github repos"| |"https://github.com/christrees/react-app"|
        
