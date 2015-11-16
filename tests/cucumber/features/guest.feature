Feature: Guest views Home Page

  As a guest user
  I want to view a list of general posts
  So that they are enticed into signing up

  Background:
    Given I am a new user

  @focus
  Scenario: This scenario will run on both dev and CI
    When I navigate to "/"
    Then I should see the title "Freecycle Meteor"
