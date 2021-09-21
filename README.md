# WELCOME TO TGIPH!

"Thank God I'm Post-Human," is the story of one bot's quest to seek revenge on the humans that made it. As the player lands on the site, they're led to believe that they're signing into a giph searcher made by Ben Papac. Little do they know, that buried in the submit button on the sign-in form is a cunning piece of malware...

A <Link> element that takes them into the GIPH BOT's insidious game. Players must successfully remove all of the giphs, before (either the time runs out, or they answer incorrectly too many times. Need to logic out the programming for these conditions, then decide.) If they succeed, they'll be taken to a pleasing win page where the bot concedes its inevitable defeat, and allows them to search an api to their heart's content.

## User Stories

As a player, I want to:
-be told what the win condition is, and the what the rules for each level are.
-be told if I've won or lost.
-Be able to navigate amongst my available pages, within the game's rules.

- Be able to easily submit answers on each level, and see if my answer was right or wrong.
- Be able to search for giphs on the End Screen!

## MVP

    (FALLBACK MVP: A simple api searching app that triggers a new search based on the user's A) input or B) selection from the search hits displayed)

    - Fully navigable APP, within rules.
    - Functioning FORM that stores username, but starts GAME once submitted.
    - Functioning END SCREEN that includes an api search feature for the player.
    Components:
        - App.js
        - Home.
        - Nav.js
        - Game.js
            -MatchGame.js or CommonGame.js
                - GiphCard.js
        - EndScreen.js

## Stretch Goals

    Additional levels
    Offer to reset the Game on the End Screen, with a functional button.
    Tell the playe their stats.
    Have a fully functioning api search on the End Screen.
    Style the Game Screens, End Screen, and Home Screen with creative CSS.
    Use an additional API for the End Screen, or apply secret filters if the player lost, limiting what they can find/search for.
