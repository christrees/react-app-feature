Feature: Performing a login

    As a user on the react-app login page
    I want to login
    Because I want to 

    Background:

        Given I am at the "http://demo.christrees.com/react-app/" page

    Scenario Outline: Performing login operation with passing test data as data table
        Then I should see the "button.sign-in" element
#        When I login with username and password <user> <password>
        When I click on the element "button.sign-in"
        Then I should see the "button.sign-out" element
        Then I should see the "a.nav-list" element
        

#        Examples:
#        |user| |password|
#        |"user@phptravels.com"| |"demouser"|
        
