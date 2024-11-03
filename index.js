//War Card Game
console.log("Let's Play War!");
/* I did a class for the players to hold individule information for each*/
class player{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    announce(){
        console.log(`${this.name} has a score of ${this.score}`);
    }
}
let player1 = new player("Player 1", 55);
player1.announce();
//Player A Player B
class card{
    constructor(suit, type, value){
        this.suit = suit;
        this.type = type;
        this.value = value;
}
    describe(){
        console.log(`${this.type} ${this.suit}`)
    }
}
let queenHearts = new card("Hearts ♥", "Queen", 12);
queenHearts.describe();



//Suit variables. This is how I added cards to my class. I have 52 cards
//Diamond ♦
/** I used class because I can hide the value of the card. I'm going to 
 * use the value to compare to serve points to the correct player
 * 
 */
let twoDiamonds = new card("Diamonds ♦", "2 of ", 2);
let threeDiamonds = new card("Diamonds ♦", "3 of ", 3);
let fourDiamonds = new card("Diamonds ♦", "4 of ", 4);
let fiveDiamonds = new card("Diamonds ♦", "5 of ", 5);
let sixDiamonds = new card("Diamonds ♦", "6 of ", 6);
let sevenDiamonds = new card("Diamonds ♦", "7 of ", 7);
let eightDiamonds = new card("Diamonds ♦", "8 of ", 8);
let nineDiamonds = new card("Diamonds ♦", "9 of ", 9);
let tenDiamonds = new card("Diamonds ♦", "10 of ", 10);
let jackDiamonds = new card("Diamonds ♦", "Jack of ", 11);
let queenDiamonds = new card("Diamonds ♦", "Queen of ", 12);
let kingDiamonds = new card("Diamonds ♦", "King of ", 13);
let aceDiamonds = new card("Diamonds ♦", "Ace of ", 1);

let twoHearts = new card("Hearts ♥", "2 of ", 2);
let threeHearts = new card("Hearts ♥", "3 of ", 3);
let fourHearts = new card("Hearts ♥", "4 of ", 4);
let fiveHearts = new card("Hearts ♥", "5 of ", 5);
let sixHearts = new card("Hearts ♥", "6 of ", 6);
let sevenHearts = new card("Hearts ♥", "7 of ", 7);
let eightHearts = new card("Hearts ♥", "8 of ", 8);
let nineHearts = new card("Hearts ♥", "9 of ", 9);
let tenHearts = new card("Hearts ♥", "10 of ", 10);
let jackHearts = new card("Hearts ♥", "Jack of ", 11);
let queeenHearts = new card("Hearts ♥", "Queen of ", 12);
let kingHearts = new card("Hearts ♥", "King of ", 13);
let aceHearts = new card("Hearts ♥", "Ace of ", 1);

let twoClubs = new card("Clubs ♣", "2 of ", 2);
let threeClubs = new card("Clubs ♣", "3 of ", 3);
let fourClubs = new card("Clubs ♣", "4 of ", 4);
let fiveClubs = new card("Clubs ♣", "5 of ", 5);
let sixClubs = new card("Clubs ♣", "6 of ", 6);
let sevenClubs = new card("Clubs ♣", "7 of ", 7);
let eightClubs = new card("Clubs ♣", "8 of ", 8);
let nineClubs = new card("Clubs ♣", "9 of ", 9);
let tenClubs = new card("Clubs ♣", "10 of ", 10);
let jackClubs = new card("Clubs ♣", "Jack of ", 11);
let queenClubs = new card("Clubs ♣", "Queen of ", 12);
let kingClubs = new card("Clubs ♣", "King of ", 13);
let aceClubs = new card("Clubs ♣", "Ace of ", 1);

let twoSpades = new card("Spades♠", "2 of ", 2);
let threeSpades = new card("Spades♠", "3 of ", 3);
let fourSpades = new card("Spades♠", "4 of ", 4);
let fiveSpades = new card("Spades♠", "5 of ", 5);
let sixSpades = new card("Spades♠", "6 of ", 6);
let sevenSpades = new card("Spades♠", "7 of ", 7);
let eightSpades = new card("Spades♠", "8 of ", 8);
let nineSpades = new card("Spades♠", "9 of ", 9);
let tenSpades = new card("Spades♠", "10 of ", 10);
let jackSpades = new card("Spades♠", "Jack of ", 11);
let queenSpades = new card("Spades♠", "Queen of ", 12);
let kingSpades = new card("Spades♠", "King of ", 13);
let aceSpades = new card("Spades♠", "Ace of ", 1);
// This is my array. I made one so I could randomize the cards.
let deck =  [twoDiamonds,twoClubs,twoHearts,twoSpades,
    threeClubs,threeDiamonds,threeHearts,threeSpades,
    fourClubs,fourDiamonds,fourHearts,fourSpades,
    fiveClubs, fiveDiamonds, fiveHearts, fiveSpades,
    sixClubs,sixDiamonds,sixHearts,sixSpades,
    sevenClubs,sevenDiamonds,sevenHearts,sevenSpades,
    eightClubs, eightDiamonds, eightHearts, eightSpades,
    nineClubs, nineDiamonds, nineHearts, nineSpades,
    tenClubs, tenDiamonds, tenHearts, tenSpades,
    jackClubs, jackDiamonds, jackHearts, jackSpades,
    queenClubs, queeenHearts,queenDiamonds,queenSpades,
    kingClubs, kingDiamonds, kingHearts, kingSpades,
    aceClubs, aceDiamonds, aceHearts, aceSpades];
/*This is my function that picks a random card. I used the math.random 
and floor to pick the card. I remember hearing about that in another 
coding project I did on udemy and decided to apply it hear and
 I did a google for a refresher, to figure out the code for it again. 
 the idea is that we assign a random number to a position in the deck to pick
 a random card. Then I return the randomCard with it's class description.*/
  function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
  }
  
  let randomCard = getRandomCard();
  console.log(randomCard.describe());

/* Now I need to remove the randomCard out of the array, 
so it's not picked again, I found the filter() method to do so
here is an example I found I'm going to base my code off of
        const numbers = [1, 2, 3, 4, 5]; (This will be my deck array)

            / / Remove the element with value 3
        const newNumbers = (I will be using deck)numbers.filter(num => num !== 3);
(I replaced 3 with randomCard)
    console.log(newNumbers); // [1, 2, 4, 5]

*/

let nextRound = deck.filter(num => num !== randomCard);
/*class round{
    constructor(turn, player, randomCard, score){
        this.player = player;
        this.turn = turn;
        this.randomCard = randomCard;
        this.score = score;
    }
    declare(){
       console.log(`It's round ${this.turn} Player2 your card is ${this.randomCard}`);
    }
}
 let round2 = new round(2, Deena, randomCard, 3);
 console.log(round2.declare());*/
 //This part is not working, saying Deena is undefined.
 //So I will move on to the for loop
 let i=0
 for (let i = 0; i == 26; i++) {
    console.log("Round" + i);
  }
