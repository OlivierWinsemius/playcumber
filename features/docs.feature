Feature: Docs tests

  Background: 
    Given I open the docs page

  Scenario: Open docs page
    Then header has text "Playwright"
    And header has text "Docs"

  Scenario: Navigate from docs to home
    When I click header link with text "Playwright"
    Then I navigate to the home page
