Memory Game - Interactive Frontend Project
======================================

Create a matching memory card game for children.

A dashboard with an even number of playing cards. Cards are flipped two at a time to make a matching pair. If the cards don't match they return to their initial state. Only when all cards are matched will the player win the game.

Game Requirements
-----------------------------------------
* Only two cards can be rotated per turn (these need to be two separate cards, one card selected twice does not count as a turn).
* If cards match then the cards stay rotated.
* If cards don't match then cards rotate to initial state.
* Need to be able to shuffle card positions on page reload/on clicking of game restart button.
* When player wins a modal box displays on screen congratulating the winner and giving them the option to replay the level, move onto next level or return to home screen.

Considerations and Game Requirements
-----------------------------------------
**1. Design/Layout of the Game**

Using HTML & CSS create a game grid.

**2. Turning/Flipping the Cards**

Look at matched cards & what happens.

Look at unmatched cards & what happens.

Things to consider:
* Double clicking the same card
* Speed of the cards rotating
* Locking board when two cards have rotated to start new turn
* Matching cards stay rotated
* Unmatched cards rotate back to initial state

**3. Winning Game**

All cards are rotated displaying matching images.

This triggers a modal box to open and display congratulations message and buttons with option to return to the winning gameboard (by clicking (x)), play again button, move to next level where available or return to home screen.

**4. Shuffling Cards**

An ability to shuffle the positions of the cards is an integeral part of the game. Card positions should reshuffle on page load, if the restart button is clicked or the play again button is clicked.

**5. Counting player moves**

Count the number of moves a player makes and display moves on screen. Only when two cards have rotated will it be considered that a move has occurred.


UX
-----------------------------------------
As this game is targeted at children it is important that the colours and imagery is bright and appealing.

Design was kept consitent with the use of a set colour palette and the location of features on screen.

**Each level:**
* informs the player of which level they are currently playing
* a link to the homepage through the home icon
* the number of moves a player has made
* a restart the game button
* a gameboard displaying a different no of cards to match
* a different background image and different card images to keep the player interested.

[Link to initial gameboard design](wireframes/Initial-design-idea.png)


Features
-----------------------------------------

**Different Levels** - 
Offer the user the opportunity to challenge themselves by offering different numbers of tiles to match at different levels. 


**Card Animations on Rotate** - 
Added animations to the cards when they rotate to add some interactive features to the game.


**Congratulations Modal Box on Winning Game** - 
A popup modal box that congratulates the player on winning the game. It provides the user with details on how many moves it took them to win the game, options to play the level again and a button to move onto the next level where available. 






Future Features
-----------------
* Add timer functionality - a given amount of time for the player to solve the game.
* Add more animation to matched and unmatched cards


Technologies Used
-----------------------------------------
This website uses 
1. HTML
2. CSS & SCSS
3. Javascript
4. [Bootstrap v4.1.3](https://getbootstrap.com/)
5. [Font Awesome](https://fontawesome.com/)
6. [Google Fonts](https://fonts.google.com/)


Testing
-----------------------------------------

The site has been tested across multiple browsers and devices including Chrome, Firefox and Internet Explorer. As this site is using the bootstrap framework I am confident that it is responsive. I have checked that all links are working and going to the correct location.


Deployment
-----------------------------------------
Deployment and source control was carried out via GitHub. The repository location is as follows:[https://github.com/deevdz/milestone-project-2/](https://github.com/deevdz/milestone-project-2/)

Game has been deployed using GitHub Pages and can be found at this [location](https://deevdz.github.io/milestone-project-2/index.html).


Credits
-----------------------------------------
**Code:**

* Use of Spread Operator - [https://davidwalsh.name/spread-operator](https://davidwalsh.name/spread-operator)
* Using Order for Shuffling Cards - [https://www.w3schools.com/cssref/css3_pr_order.asp](https://www.w3schools.com/cssref/css3_pr_order.asp)
* Ability to store custom data for card shuffle - [https://www.w3schools.com/tags/att_global_data.asp](https://www.w3schools.com/tags/att_global_data.asp)
* Modal Box References - [https://www.w3schools.com/howto/howto_css_modals.asp](https://www.w3schools.com/howto/howto_css_modals.asp) and [https://codepen.io/joshuaward/pen/jYZXGo](https://codepen.io/joshuaward/pen/jYZXGo)

**Media:**

Images for the game were both self designed and sourced from [https://www.vecteezy.com](https://www.vecteezy.com) and [https://www.freepik.com](https://www.freepik.com)

**Acknowledgements:**
The following tutorials were used for reference and guidance:

[https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)

[https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)

[https://medium.freecodecamp.org/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae](https://medium.freecodecamp.org/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae)



**Contact**

Created by [Deirdre van der Zee](mailto:deirdrevanderzee@gmail.com).