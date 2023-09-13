Feature: Grid

    Background:
        Given the user opens the aspnetawesome site
        When the user filters the Grid to display "100" items

    Scenario Outline: Test Attempt #1
        Then the user searches for data in the Grid
            | Id   | Person    | Food         | Country       | Date       | Location   | Chef            |
            | 2029 | Jessica   | Soup         | Goldshire     | 3/15/2018  | University | Pepper Tomato   |
            | 1831 | Dolores   | Banana       | La Croisette  | 10/11/2011 | Restaurant | Tom Smykowski   |
            | 1935 | Mary      | Hot Beverage | Jisina        | 2/5/2012   | University | Demeter Harvest |
