Feature: Home tests

  Background: 
    Given I open the home page

  Scenario: Open home page
    Then header has text "Playwright"

  Scenario: Navigate from home to docs
    When I click header link with text "Docs"
    Then I navigate to the docs page
