//Create an array to hold the Memory Cards
var memoryCard = document.querySelectorAll('.card-image');
var memoryCards = [...memoryCard];

//Loop through the cards and add an event listener to each card
for (var i = 0; i < memoryCards.length; i++){
    memoryCards[i].addEventListener('click', rotateCard);
};

//Add the class rotateCard when a card is clicked
function rotateCard() {
  this.classList.add('rotateCard');
};

//Shuffle the cards on the Gameboard - remove the rotateCard class so cards are reset
var shuffleNumber = memoryCard.length;
function shuffleGameboard() {
    for (var i = 0; i < memoryCards.length; i++){
        var randomPosition = Math.floor(Math.random() * shuffleNumber);
        memoryCard[i].style.order = randomPosition;
        memoryCard[i].classList.remove('rotateCard');        
    };
};

document.body.onload = shuffleGameboard();