Feature: Shows dashboard
    Background: Dashboard world
        Given I have a dashboard page

    Scenario: Menu buttons are visible
        Given I am on '/dashboard/my-tasks'
        Then I should see button 'Nieuwe workflow'