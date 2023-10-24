Feature: Home tests

  Background: 
    Given I open the home page

  Scenario: Header contains links
    Then I see header has link with text "Playwright"
    And I see header has link with text "Docs"
    And I see header has link with text "API"
    And I see header has link with text "Community"

  Scenario: Footer contains links
    Then I see footer has link with text "Getting started"
    And I see footer has link with text "API reference"
    And I see footer has link with text "Stack Overflow"
    And I see footer has link with text "Discord"
    And I see footer has link with text "Twitter"
    And I see footer has link with text "GitHub"
    And I see footer has link with text "YouTube"
    And I see footer has link with text "Blog"

  Scenario: Navigate from home to docs
    When I click header link with text "Docs"
    Then I am redirected to the docs page
