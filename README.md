I have midterms this month. This is one of many projects I'm making to study.

# That's Not My Element!

An element-focused chemistry practice game loosely based on the game "That's Not My Neighbor".\
This is a game built purely in static HTML/CSS/JS. No Node, no Flask, not even a single API. I was honestly a little surprised by the quality I could achieve with them, considering that they aren't exactly what one thinks of when they hear "game development language".\
Needless to say, the functionality of this project was more simple than expected. Much more difficult was the visuals and animations. I wanted it to appear as much like as a game as possible. Visual design probably took ~50-60% of the time I spent on this project.

## Gameplay

The gameplay is outlined in the "rules" page displayed before the real game. Nonetheless, here is an overview:\
A humanoid sillhouette representing an "element" will appear in the window before the player.\
The player will be provided with its "I.D. page", which contains the following:\
* Atomic Number
* Family
* Metal/Nonmetal/Metalloid
* Number of Valence Electrons
* Ground State Energy Level (n)
* Charge
* Reactivity Pattern (Gains Electrons/Loses Electrons/Either/Inert)
* Shorthand Electron Configuration

The player's task is to determine whether the element presented before them is a "real" element, or an "imposter" element attempting to disguise itself.\
This is done by checking and verifying the eight properties listed above.\
A full-sized periodic table is displayed after clicking the miniature one "hanging from the wall" on the right side of the screen, which can be used for reference.\
If the element is an "imposter" element, one property out of the eight will be incorrect to that element. In this case, the player should press the red "x" button to send it away.\
Contrarily, if all info seems correct, the player should instead click the green check button to let it pass.\
If the player incorrectly reports a "real" element or validates an "imposter" element, a game over will ensue.\
The game also keeps both current score (which will reset when the website is closed) and high score (saved on localstorage, so it will persist even when the tab is closed).

## Demo

The demo link can be found [here.](https://fluffy-sfogliatella-5528a0.netlify.app/main)

