const grid = document.querySelector('.grid');
const result = document.querySelector('#result');

const cardArray = [{
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
];

cardArray.sort(() => 0.5 - Math.random());

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create a card board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for match
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'img/white.png');
        cards[optionTwoId].setAttribute('src', 'img/white.pn');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'img/blank.png');
        cards[optionTwoId].setAttribute('src', 'img/blank.png');
        alert('Sorry, try again')
    };
    cardsChosen = [];
    cardsChosenId = [];
    result.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
        result.textContent = "You found them all!";
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard();