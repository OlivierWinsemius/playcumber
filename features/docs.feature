Feature: Docs tests

  Background: 
    Given I open the docs page

  Scenario: Header contains links
    Then header has link with text "Playwright"
    And header has link with text "Docs"
    And header has link with text "API"
    And header has link with text "Community"

  Scenario: Navigate from docs to home
    When I click header link with text "Playwright"
    Then I navigate to the home page
