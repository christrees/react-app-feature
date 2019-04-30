Feature: Performing a login

    As a user on the react-app login page
    I want to login
    Because I want to 

    Background:

        Given I am at the "http://demo.christrees.com/react-app/" page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password>
#        Then I should see the version message "v0.0.4"
        Then I should see a navigation link "List" 

        Examples:
        |user| |password|
        |"user@phptravels.com"| |"demouser"|
        
