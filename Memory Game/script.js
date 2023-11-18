const cardArray = [
{
	name:'fries',
	img:'images/fries.png'
},
{
	name:'fries',
	img:'images/fries.png'
},
{
	name:'cheeseburger',
	img:'images/cheeseburger.png'
},
{
	name:'cheeseburger',
	img:'images/cheeseburger.png'
},
{
	name:'hotdog',
	img:'images/hotdog.png'
},
{
	name:'hotdog',
	img:'images/hotdog.png'
},
{
	name:'ice-cream',
	img:'images/ice-cream.png'
},
{
	name:'ice-cream',
	img:'images/ice-cream.png'
},
{
	name:'milkshake',
	img:'images/milkshake.png'
},
{
	name:'milkshake',
	img:'images/milkshake.png'
},
{
	name:'pizza',
	img:'images/pizza.png'
},
{
	name:'pizza',
	img:'images/pizza.png'
},
]

cardArray.sort(()=> 0.5 - Math.random())

const grid=document.querySelector('.grid');
let cardsChosen=[];
let cardsChosenId=[];
let cardsWon=0;
const score=document.querySelector('#Score');

function createBoard() {
	for(let i=0;i<cardArray.length;i++) {
		let card=document.createElement('img')
			card.setAttribute('src','images/blank.png');
			card.setAttribute('data-id',i);
			card.addEventListener('click',flipCard)
			grid.appendChild(card)
	}
}

function checkForMatch() {

	let cards=document.querySelectorAll('img');

	if(cardsChosenId[0]==cardsChosenId[1]) {
		alert("You clicked same card");
		cards[cardsChosenId[0]].setAttribute('src','images/blank.png');
	}

	else if(cardsChosen[0]===cardsChosen[1]) {
		alert("You found a match");
		cards[cardsChosenId[0]].setAttribute('src','images/white.png');
		cards[cardsChosenId[1]].setAttribute('src','images/white.png');
		cardsWon++
	}

	else {
		cards[cardsChosenId[0]].setAttribute('src','images/blank.png');
		cards[cardsChosenId[1]].setAttribute('src','images/blank.png');
		alert("Sorry, try again");
	}
	
	cardsChosen = [];
	cardsChosenId = [];
	score.textContent=cardsWon;
	if(cardsWon===cardArray.length/2)
		score.textContent='Congratulation! You found them All'
}

function flipCard() {
	let cardId=this.getAttribute('data-id');
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenId.push(cardId);
	this.setAttribute('src',cardArray[cardId].img);
	if(cardsChosen.length===2)
		setTimeout(checkForMatch,500);
}

createBoard();