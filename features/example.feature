Feature: Playwright test
    Background: Playwright page
        Given I have a playwright page

    Scenario: Works
        Given I am on playwright.dev
        Then playwright test works