Feature: Shows dashboard
    Scenario: Menu buttons are visible
        Given I go to page '/dashboard/my-tasks'
        Then I should see button 'Nieuwe workflow'