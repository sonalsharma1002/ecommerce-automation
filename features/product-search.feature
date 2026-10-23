
Feature: Product Catalog Filters

  @SHOP-CAT-01
  Scenario: Filter products by Electronics category
    Given the customer opens the e-commerce application
    When the customer clicks the Electronics category
    Then only Electronics products should be displayed

  @SHOP-CAT-02
  Scenario: Filter products by price range
    Given the customer opens the e-commerce application
    When the customer applies a price range from 50 to 150
    Then all displayed products should be within the selected price range


  @SHOP-CAT-03
  Scenario: Filter products by price range
    Given the customer opens the e-commerce application
    When the customer applies a price range from 50 to 150
    Then all displayed products should be within the selected price range


  @SHOP-CAT-04
  Scenario: Sort products by price from low to high
    Given the customer opens the e-commerce application
    When the customer sorts products by price from low to high
    Then products should be displayed in ascending price order
