Feature: Shows dashboard
    Scenario: Menu buttons are visible
        Given I am on '/dashboard/my-tasks'
        Then I should see button 'Nieuwe workflow'