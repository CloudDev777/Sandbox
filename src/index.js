






const deckElements = ['Void', 'Light', 'Gravity', 'Time', 'Matter', 'Chaos', 'Harmony', 'Energy', 'Spirit']

const elementMeanings = {
    Void : 'Void Cards: The suit of potential and primordial emptiness. Void cards emerge when we face the unknown or when we need to embrace emptiness to allow new possibilities. They speak to the spaces between things, to absence and potential. These cards often appear when we need to let go or when something is gestating in darkness. In shadow, Void can represent nihilism or fear of emptiness.',
    Light : `Light Cards: The suit of illumination and revelation. When Light cards appear, they speak to moments of clarity, understanding, and truth-seeking. Light asks us about what we're beginning to see clearly, or what remains in shadow. These cards often appear when wisdom is dawning or when we need to look at something with greater clarity. In shadow, Light can represent harsh truths or blinding certainty.`,
    Gravity : 'Gravity Cards: The suit of attraction, connection, and inevitability. Gravity cards speak to the forces that pull us, whether toward people, ideas, or destinies. They appear when we need to examine what centers us, what we orbit around, and what orbits around us. These cards ask about our bonds, commitments, and the weights we carry. In shadow, Gravity can represent unhealthy attachments or being pulled off course.',
    Time : 'Time Cards: The suit of cycles, change, and eternal return. Time cards reveal our relationship with past, present, and future. They speak to timing, patience, and the rhythms of life. These cards appear when we need to examine our temporal relationship with events or when we need to understand cycles in our life. In shadow, Time can represent being stuck in the past or anxiety about the future.',
    Matter : 'Matter Cards: The suit of manifestation and physical reality. Matter cards ground us in the tangible world and speak to resources, bodies, and material concerns. They appear when we need to focus on practical matters or when something is ready to take physical form. In shadow, Matter can represent materialism or being trapped by physical limitations.',
    Chaos : 'Chaos Cards: The suit of transformation and creative destruction. Chaos cards appear during times of upheaval, breakthrough, and radical change. They speak to the beauty of disorder and the fertility of disruption. These cards emerge when old patterns are breaking down or when we need to embrace uncertainty. In shadow, Chaos can represent destructive impulses or fear of change.',
    Harmony : 'Harmony Cards: The suit of balance, resonance, and interconnection. Harmony cards reveal the patterns that connect all things and speak to integration, peace, and mutual understanding. They appear when we need to find balance or when disparate elements are coming together. In shadow, Harmony can represent forced equilibrium or denial of necessary conflict.',
    Energy : `Energy Cards: The suit of power, movement, and vital force. Energy cards speak to our drive, passion, and creative force. They appear when we need to examine our relationship with power or when we're channeling strong forces. These cards ask about how we direct our life force. In shadow, Energy can represent burnout or destructive power.`,
    Spirit : `Spirit Cards: The suit of consciousness, meaning, and transcendence. Spirit cards connect us to the larger patterns of existence and speak to our quest for meaning. They appear when we're wrestling with questions of purpose or when we're ready to expand our awareness. In shadow, Spirit can represent spiritual bypass or loss of groundedness.`,
}


const entireDeck = [];

fetch("http://localHost:3000/Card-Library")
    .then(response => response.json())
    .then(data => {
        
        entireDeck.push(data.voidCards);
        entireDeck.push(data.lightCards);
        entireDeck.push(data.gravityCards);
        entireDeck.push(data.timeCards);
        entireDeck.push(data.matterCards);
        entireDeck.push(data.chaosCards);
        entireDeck.push(data.harmonyCards);
        entireDeck.push(data.energyCards);
        entireDeck.push(data.spiritCards);
    });


function drawCard() {
    
    const randomDeckIndex = Math.floor(Math.random() * entireDeck.length)
    const randomDeck = entireDeck[randomDeckIndex]
    const cardNames = Object.keys(randomDeck)
    const randomCardIndex = Math.floor(Math.random() * cardNames.length)
    const randomCardName = cardNames[randomCardIndex]
    
    return {
        'Card': randomCardName.toUpperCase(),      
        'Element': deckElements[randomDeckIndex],    
        'Meaning': randomDeck[randomCardName].meaning,
        'Image' : randomDeck[randomCardName].image  
    }    
    
}



let cardPullArray = [] 


function colorCounts(){
    let colorCounts = {} 
            for(let card of cardPullArray){ 
                colorCounts[card.Element] = (colorCounts[card.Element] || 0) + 1 
            }  
            for(let color in colorCounts){
                if(colorCounts[color] > 1){
                    return elementMeanings[color]
                    
                }
            }   
}





function threeCardSpread() {
    const cardOneReveal = document.querySelector(".card-1-back")
    const cardTwoReveal = document.querySelector(".card-2-back")
    const cardThreeReveal = document.querySelector(".card-3-back")
    

    let firstCard
    let secondCard
    let thirdCard

    cardOneReveal.addEventListener("mouseenter", () =>{
        firstCard = drawCard()
        cardPullArray.push(firstCard)
        displayCard(firstCard, 1)
        console.log(firstCard)

    }, {once: true})
    cardTwoReveal.addEventListener("mouseenter", () => {
        
        secondCard = drawCard()
        if (secondCard === firstCard){
            secondCard = drawCard()
        }
        cardPullArray.push(secondCard)
        displayCard(secondCard, 2)
        console.log(secondCard)

    }, {once: true})
    cardThreeReveal.addEventListener("mouseenter", () => {
        thirdCard = drawCard()
       
        if(thirdCard === secondCard, firstCard){
            thirdCard = drawCard()
        }
        
        cardPullArray.push(thirdCard)
        displayCard(thirdCard, 3)
        console.log(thirdCard)
        colorCounts()
        
    
    }, {once: true})
    
}







function displayCard(card, position) {
    const cardImageContainer = document.querySelector(`.card-${position}-image`);
    const meaningContainer = document.querySelector(`.card-${position}-meaning`)
    const elementContainer = document.querySelector('.color-meaning')
   
    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(card.Image)}`
    cardImageContainer.src = svgDataUrl
    meaningContainer.textContent = card.Element + " : " + card.Card + " - " + card.Meaning;
    elementContainer.textContent = colorCounts();
}





function testSpecificCard() {
    const cardOneReveal = document.querySelector(".card-1-back")
    
    fetch("http://localHost:3000/Card-Library")
        .then(response => response.json())
        .then(data => {
            // Wait for the deck to be loaded
            cardOneReveal.addEventListener("mouseenter", () => {
                const firstCard = {
                    'Card': 'NGC 7049 - THE DARK EYE',
                    'Element': 'Void',
                    'Meaning': data.voidCards['NGC 7049 - The Dark Eye'].meaning,
                    'Image': data.voidCards['NGC 7049 - The Dark Eye'].image
                }
                
                cardPullArray.push(firstCard)
                displayCard(firstCard, 1)
                console.log(firstCard)
            }, {once: true})
        });
}



function background(){
    const backgroundImage = document.createElement('img')
    backgroundImage.src = 'Images/Others/_BB18312.jpg'
    const html = document.querySelector('html')
    html.appendChild(backgroundImage)
    backgroundImage.id = 'night-sky'
}

function enterButton(){
    const buttonElement = document.querySelector('#enter-button')
    const enterTextElement = document.querySelector('#enter');
    const prismTextElement = document.querySelector('.tessellation-container');
    enterTextElement.style.cursor = 'pointer'
    buttonElement.addEventListener('click', () => {
        prismTextElement.style.display = "none";
        enterTextElement.style.display = "none";
        buttonElement.style.display = "none"
        // landingCardSpread()
    })
}





document.addEventListener("DOMContentLoaded", () => {

    threeCardSpread()
    enterButton()
    background()
    //testSpecificCard()


})



