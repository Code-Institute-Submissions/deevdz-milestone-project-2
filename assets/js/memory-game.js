
//Create an array to hold the Memory Cards
var memoryCard = document.querySelectorAll('.card-image');
var shuffleNumber = memoryCard.length;
console.log(shuffleNumber);
var memoryCards = [...memoryCard];

//Variables for card states
var rotatedCard = false;
var cardOne, cardTwo;
var disableGameBoard = false;

//Loop through the cards and add an event listener to each card
for (var i = 0; i < memoryCards.length; i++){
    memoryCards[i].addEventListener('click', rotateCard);
};

//Add the class rotateCard when a card is clicked
//Checking for values of clicked cards
function rotateCard() {
    if (disableGameBoard) return;
    console.log(disableGameBoard);
    this.classList.add('rotateCard');
    if (rotatedCard == false) {
        rotatedCard = true;
        cardOne = this;
        cardOne.classList.add('deactivate'); 
        return;
    }; 
    cardTwo = this;
    cardTwo.classList.add('deactivate'); 
    rotatedCard = false;
    matchedCards();
};

//Shuffle the cards on the Gameboard - remove the rotateCard class so cards are reset
function shuffleGameboard() {
    for (var i = 0; i < memoryCards.length; i++){
        var randomPosition = Math.floor(Math.random() * shuffleNumber);
        memoryCard[i].style.order = randomPosition;
        memoryCard[i].classList.remove('rotateCard', 'deactivate');        
    };
};

document.body.onload = shuffleGameboard();

//Checking if the cards are matching
function matchedCards() {
    //Testing Cards and outputing to conole
    var testCard1 = cardOne.dataset.cardimage;
    console.log(testCard1);
    var testCard2 = cardTwo.dataset.cardimage;
    console.log(testCard2);
    //If the cards match print Matched to Console
    if (cardOne.dataset.cardimage === cardTwo.dataset.cardimage) {
        console.log(rotatedCard);
        console.log("Matched");
        cardOne.classList.add('pair');
        cardTwo.classList.add('pair');
        var cardPairs = document.getElementsByClassName('pair');
        var pairAmount = cardPairs.length;
        console.log(pairAmount);
        //Checking for when game is complete
        if (pairAmount == shuffleNumber) {
            console.log('Winner Winner Chicken Dinner!')
        }
        return;
        }
    else {
        if (this === cardOne) return;
        disableGameBoard = true;
        console.log(rotatedCard);
        console.log("Not Matched");
        //Set Timeout for rotating two cards if the cards don't match remove classes
        setTimeout(function(){
            cardOne.classList.remove('rotateCard', 'deactivate'); 
            cardTwo.classList.remove('rotateCard', 'deactivate'); 
            //Reset the Gameboard for the next turn
            disableGameBoard = false;
        }, 1200);
    };
};
