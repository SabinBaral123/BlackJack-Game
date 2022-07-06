let player = {
    name: "Sabin",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
console.log(playerEl)
playerEl.textContent =player.name + " : $" + player.chips
console
function getRandomCard() {
    // math.random generates number from 0.000 -0.999 which is multiply by 13 which 
    // creates number from 0.000- 12.99 and then 1 is added and number between 1 to 13.999 is created.
    // Math.floor creates only the  whole number withot after point value i.e 13.999 is treated as 13
    let randomCard = Math.floor(Math.random() * 13) + 1


    if (randomCard > 10) {
        return 10
    }
    else if (randomCard === 1) {
        return 11
    }
    else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.innerText = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "

    }
    sumEl.innerText = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a card?"

    }
    else if (sum === 21) {
        message = "Wohoo! You got a BackJack."
        hasBlackJack = true
    }
    else {
        message = "You're out of the game."
        isAlive = false
    }

    messageEl.innerText = message
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {


        let card = getRandomCard()

        sum += card
        cards.push(card)

        renderGame()
    }


}

