Feature: Playwright test

  Scenario: Open home page
    Given I open the home page
    Then header has text "Playwright"

  Scenario: Navigate from home to docs
    Given I open the home page
    When I click header link with text "Docs"
    Then I navigate to the docs page

  Scenario: Open docs page
    Given I open the docs page
    Then header has text "Playwright"

  Scenario: Navigate from docs to home
    Given I open the docs page
    When I click header link with text "Playwright"
    Then I navigate to the home page
