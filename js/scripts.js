$(document).ready(function() {
  $(".form-spot").submit(function(event){
    event.preventDefault();

    var cardDecks = [];
    var cardSuits = ["spades", "clubs", "hearts", "diamonds"];
    var cardRanks = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];

    // var cardDecks = cardRanks.map(function(Decks) {
    // return (decks + "of" + suits)
    // });
    // alert(cardDecks);
    var cardCreator = function(){
      cardSuits.forEach(function(suit){
        console.log(suit);
        cardRanks.forEach(function(rank){
          cardDecks.push(rank + " of " + suit);
        });
      });
      cardDecks.forEach(function(xx){
        $(".result").append("<li>" + xx + "</li>")
      });
    };
    cardCreator();
  });
});
