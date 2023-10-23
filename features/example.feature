Feature: Playwright test

  Scenario: Works
    Given I open playwright.dev
    Then Title has text "Playwright"
