
function drawCard() {
    // Pick a random color deck
    const randomDeckIndex = Math.floor(Math.random() * entireDeck.length)
    // If entireDeck has 4 decks (length of 4), Math.random() * 4 gives us 
    // a number between 0-3.999..., then Math.floor rounds it down to 0, 1, 2, or 3

    const randomDeck = entireDeck[randomDeckIndex]
    // Uses that random number to pick one of your color decks
    // Like reaching into a shelf and picking either the black, blue, red, etc. deck
    
    // Get all card names from that color deck
    const cardNames = Object.keys(randomDeck)
    // Object.keys gives us an array of all the card names
    // If we picked the black deck, we'd get ["Death", "Fear", "Space", etc.]
    
    //Pick a random card from those names
    const randomCardIndex = Math.floor(Math.random() * cardNames.length)
    // Same process as before - get a random index based on how many cards are in this deck
    
    const randomCardName = cardNames[randomCardIndex]
    // Use that random index to pick one of the card names
    
    return {
        'Card': randomCardName.toUpperCase(),                // The name of the card
        'Color': deckColors[randomDeckIndex],   // The color of the card
        'Meaning': randomDeck[randomCardName]      // Look up this card's meaning
    }    
    
}





function threeCardSpreadWithDelay() {
    let cardPullArray = [] // an empty array assigned to variable to contain the pulled cards for color meaning assesment
    let firstCard = drawCard()
    console.log(firstCard)
    cardPullArray.push(firstCard) 

    setTimeout(() => {
        let secondCard = drawCard()
        if(secondCard === firstCard){ // initially a while loop, but it didnt work, if seems to be running perfect
            secondCard = drawCard()
        }
        console.log(secondCard)
        cardPullArray.push(secondCard) 
        
        setTimeout(() => {
            let thirdCard = drawCard()
            if(thirdCard === secondCard){
                thirdCard = drawCard()
            }
            console.log(thirdCard)
            cardPullArray.push(thirdCard)  

            let colorCounts = {} //create an empty object
            for(let card of cardPullArray){ //iterate over cardPullArray
                colorCounts[card.Color] = (colorCounts[card.Color] || 0) + 1 //card.Color gives color string from drawCard() return object, like "Black"
            }  //the OR operator is simplifying an if statement: if the left side returns undefined, then we get 0) + 1
            for(let color in colorCounts){
                if(colorCounts[color] > 1){
                    console.log(colorMeanings[color])
                }
            }   
        
        }, 3000)
    }, 3000)
}


function background(){
    const backgroundImage = document.createElement('img')
    backgroundImage.src = 'Images/Others/3rd+Round+Edits_046.jpg'
    const html = document.querySelector('html')
    html.appendChild(backgroundImage)
    backgroundImage.id = 'night-sky'
}

function enterButton(){

}



addEventListener("DOMContentLoaded", (event) => {




    background()





})



