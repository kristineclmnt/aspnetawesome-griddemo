Feature: Grid

    Background:
        Given the user opens the aspnetawesome site
        When the user filters the Grid to display "100" items

    Scenario Outline: Test Attempt #1
        Then the user searches for data in the Grid
            | Id   | Person    | Food         | Country       | Date      | Location   | Chef           |
            | 2029 | Elizabeth | Hot Beverage | Kitej         | 8/1/2011  | Tavern     | Hyperion Light |
            | 1831 | Marcus    | foodApple    | Goldshire     | 11/9/2017 | Restaurant | Hyperion Light |
            | 1935 | Scott     | Oat meal     | Elwynn Forest | 3/5/2019  | Diner      | Peter Gibbons  |
