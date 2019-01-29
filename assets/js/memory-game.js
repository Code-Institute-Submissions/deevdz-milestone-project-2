//Toggle the class rotateCard when a card is clicked
function rotateCard() {
  this.classList.toggle('rotateCard');
}

//Create an array to hold the Memory Cards
var memoryCard = document.querySelectorAll('.card-image');
var memoryCards = [...memoryCard];

//Loop through the cards and add an event listener to each card
for (var i = 0; i < memoryCards.length; i++){
   memoryCards[i].addEventListener('click', rotateCard);
};