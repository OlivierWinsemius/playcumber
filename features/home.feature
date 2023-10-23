Feature: Home tests

  Background: 
    Given I open the home page

  Scenario: Header contains links
    Then header has link with text "Playwright"
    And header has link with text "Docs"
    And header has link with text "API"
    And header has link with text "Community"

  Scenario: Navigate from home to docs
    When I click header link with text "Docs"
    Then I navigate to the docs page
