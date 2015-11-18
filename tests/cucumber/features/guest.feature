Feature: Guest views Home Page

  As a guest user
  I want to view a list of general posts
  So that they are enticed into signing up

  Background:
    Given I am a new user

  @focus
  Scenario: Title is no longer default
    When I navigate to "/"
    Then I should see the title "Freecycle Meteor"

  @focus
  Scenario: Guest user sees posts
    When I navigate to "/"
    Then I should see the posts "National Posts"
