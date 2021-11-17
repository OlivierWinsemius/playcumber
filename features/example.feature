Feature: Playwright test
    Background: Playwright page
        Given I have a playwright page

    Scenario: Works
        Given I navigate to playwright.dev
        Then playwright test works