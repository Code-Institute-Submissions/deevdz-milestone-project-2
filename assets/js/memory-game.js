//Create an array to hold the Memory Cards and calculate number of cards for shuffle function
var memoryCard = document.querySelectorAll('.card-image');
var shuffleNumber = memoryCard.length;
var memoryCards = [...memoryCard];

//Variables for card and delay states
var rotatedCard = false;
var cardOne, cardTwo;
var delay = 800;

//Variable to count number of player moves
var moves = 0;
var noOfMoves = document.querySelector('.no-of-moves');

//Loop through the cards and add an event listener to each card
for (var i = 0; i < memoryCards.length; i++){
    memoryCards[i].addEventListener('click', rotateCard);
};

//Shuffle the cards on the Gameboard - remove the classes so cards are reset, reset the moves to 0
function shuffleGameboard() {
    for (var i = 0; i < memoryCards.length; i++){
        var randomPosition = Math.floor(Math.random() * shuffleNumber);
        memoryCard[i].style.order = randomPosition;
        memoryCard[i].classList.remove('rotateCard', 'deactivate', 'pair'); 
        moves = 0;
        noOfMoves.innerHTML = moves;
    };
};

//Add the class rotateCard when a card is clicked
//Checking for values of clicked cards
function rotateCard() {
    var deactivatedCards = document.getElementsByClassName('deactivate');
    //Checking for double click on card and more than two cards clicked
    if (deactivatedCards.length >= 2 ) {
        return false;
    }
    else {
        this.classList.add('rotateCard')
    };
    if (rotatedCard == false) {
        rotatedCard = true;
        cardOne = this;
        cardOne.classList.add('deactivate'); 
    }
    else {
        cardTwo = this;
        cardTwo.classList.add('deactivate'); 
        rotatedCard = false;
        playingGame();
    };
};

//Check if the cards are matching
function playingGame() {
    //Count the number of cards that are rotated
    var rotatedCards = document.getElementsByClassName('rotateCard');
    var cardMoves = rotatedCards.length;
    if (cardMoves % 2 == 0) {
        countNoOfMoves();
        //If the cards match add new class to matched cards
        if (cardOne.dataset.cardimage === cardTwo.dataset.cardimage) {
            matchingCards();
            }
        else {
            unmatchedCards();
        };
    };
};

//Matching Cards have the class pair added to both cards
//Count the number of cards with the class pair, if these equal the number of cards then display winning Modal Box with number of moves
function matchingCards() {
    cardOne.classList.add('pair');
    cardTwo.classList.add('pair');
    cardOne.classList.remove('deactivate');
    cardTwo.classList.remove('deactivate');    
    var cardPairs = document.getElementsByClassName('pair');
    var pairAmount = cardPairs.length;
    if (pairAmount == shuffleNumber) {
            setTimeout(function(){
            modal.style.display = 'block';
            document.getElementById('winning-moves').innerHTML = moves;
        }, 500);
    };
};

function unmatchedCards(){
    if (this === cardOne) {
        return;
    }
    //Set Timeout for rotating two cards if the cards don't match remove classes
    setTimeout(function(){
        cardOne.classList.remove('rotateCard', 'deactivate'); 
        cardTwo.classList.remove('rotateCard', 'deactivate'); 
    }, delay);
};

// Moves Counter
function countNoOfMoves(){
    moves++;
    noOfMoves.innerHTML = moves;
}

//Code for the Modal Box
// Get the modal
var modal = document.getElementById('winningModalBox');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';   
    }
};

//Play Again Button - reset Gameboard and close Modal Box
function playAgain () {
    shuffleGameboard();
    modal.style.display = 'none';
}

//On loading the page shuffle the cards
document.body.onload = shuffleGameboard();