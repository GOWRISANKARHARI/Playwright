Feature: User Authentication tests

Background:
    Given user navigates to the application
    And user click on the login link

Scenario: Add to the cart should be success
    Given user enter the username as "<username>"
    And user enter the password as "<password>"
    When user click on the login button
    Then user search the book "<book>"
    And user add the book to cart
    And user can view the book carted

Examples:
| username   | password     | book          |
| Hari01     | 0209.Hari*   | roomies       |
| Hari02     | 0209.Hari*   |Rot & Ruin|