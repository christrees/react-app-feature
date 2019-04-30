Feature: Github Repo for ChrisTrees

    As a developer on ChrisTrees github page
    I want to search for react-repo
    Because I want to learn more about it

    Background:

        Given I am on the christrees github repo page

# CAUTION: Github does not like getting too many request too fast
#    Scenario: Performing a search for the react-app repo
#        When I enter "react-app" into the search box
#        And  I click the search button
#        Then I should see a list of search results

    Scenario Outline: Performing a search operation with passing test data as data table
        When I enter <searchItem> into the search box
        #And  I click the search button
        Then I should see a list of search results

        Examples:
        |searchItem|
        |"react-app"|
#        |"react-app-feature"|
