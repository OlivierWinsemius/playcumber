Feature: Docs tests

  Background: 
    Given I open the docs page

  Scenario: Header contains links
    Then header has link with text "Playwright"
    And header has link with text "Docs"
    And header has link with text "API"
    And header has link with text "Community"

  Scenario: Footer contains links
    Then footer has link with text "Getting started"
    And footer has link with text "API reference"
    And footer has link with text "Stack Overflow"
    And footer has link with text "Discord"
    And footer has link with text "Twitter"
    And footer has link with text "GitHub"
    And footer has link with text "YouTube"
    And footer has link with text "Blog"

  Scenario: Navigate from docs to home
    When I click header link with text "Playwright"
    Then I navigate to the home page
