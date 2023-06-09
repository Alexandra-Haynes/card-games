const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards(){
    return this.cards.length
  }

  pop(){
    return this.cards.shift() //takes of the first elem in the array
  }

  push(card){
    return this.cards.push(card) //add elem to the bottom of the array
  }

  shuffle() { 
    for(let i=this.numberOfCards -1; i>0; i--) {
      //new card

      const newIndex = Math.floor(Math.random() * (i + 1)); //random index before the card we are currently on
      const oldValue = this.cards[newIndex];
      //fliping the cards
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }

}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color(){
     return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }

  getHTML(){
    const cardDiv =document.createElement('div')
    cardDiv.innerText=this.suit
    cardDiv.classList.add('card', this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
  }
}

function freshDeck(){
    return SUITS.flatMap(suit =>{
        // flatMap: [[1,2], [3,4]] -> [1,2,3,4]
        return VALUES.map(value=> {
            return new Card(suit, value)
        })
    })
}