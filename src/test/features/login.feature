Feature: User Authentication tests

Background:
    Given user navigates to the application
    And user click on the login link

Scenario: Login should be success
    Given user enter the username as "Hari02"
    And user enter the password as "0209.Hari*"
    When user click on the login button
    Then Login should be success

Scenario: Login should not be success
    Given user enter the username as "Hari02"
    And user enter the password as ""
    When user click on the login button    
    Then Login should fails