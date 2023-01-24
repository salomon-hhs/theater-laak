Feature: ZaalFeature

Scenario: ZaalAanmaken
    Given zaal met toegankelijkheid false bestaat
    When zaal met toegankelijkheid true wordt toegevoegd
    Then bestaat er een zaal met toegankelijkheid true
    And bestaat er een zaal met toegankelijkheid true
