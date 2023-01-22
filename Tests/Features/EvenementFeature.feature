Feature: Evenement

Scenario: VerwijderenWerkt
    Given evenement met titel Welkom bestaat
    When evenement met titel Welkom wordt verwijderd
    Then zijn er geen evenementen

Scenario: AanmakenWerkt
    Given evenement met titel Welkom bestaat
    When evenement met titel Hallo wordt aangemaakt
    Then bestaat er een evenement met titel Welkom
    And bestaat er een evenement met titel Hallo
    
