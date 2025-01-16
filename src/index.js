






const deckColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'White', 'Black']

const colorMeanings = {
    Red: 'Red Cards: You are experiencing a primordial energy; so fiery and strong that it cannot be ignored. It asks you to pause and register these powerful feelings. How can you best deal with this influx of energy?',
    Orange: 'Orange Cards: Tap into joy and playfulness right now. Orange is full of energy, which is invigorating but sometimes overstimulating. Are you excited, or is the energy too intense?',
    Yellow: 'Yellow Cards: You may need to take a look at the duality of a situation. Yellow can be double-sided, are you seeing both sides? Are you limiting yourself to a singular viewpoint?',
    Green: 'Green Cards: There is an opportunity for renewal, either through gratitude for abundance, movement on a new project, or rest. Let things unfold and grow.',
    Blue: 'Blue Cards: Honor this time of transition and change. All blue cards deal with the crossing of a threshold. Surrender to the flow, and accept change.',
    Purple: 'Purple Cards: You may be in the process of creating a deeper relationship with your intuition. Embrace this newfound energy, but stay grounded.',
    Pink: 'Pink Cards: Tenderness and love surround you, either for yourself or another. Gentleness and sensitivity are your strengths right now; share them.',
    White: 'White Cards: There is a sense of stillness for you to embrace. How can you manifest calm and tranquility in your life right now?',
    Black: 'Black Cards: This is an invitation to step into a new phase of your life. How can you create space for newness, or cultivate courage?',
}


const entireDeck = [];

fetch('http://localHost:3000/cards')
    .then(response => response.json())
    .then(data => {
        // Push each deck into entireDeck in the correct order
        entireDeck.push(data.redCards);
        entireDeck.push(data.orangeCards);
        entireDeck.push(data.yellowCards);
        entireDeck.push(data.greenCards);
        entireDeck.push(data.blueCards);
        entireDeck.push(data.purpleCards);
        entireDeck.push(data.pinkCards);
        entireDeck.push(data.whiteCards);
        entireDeck.push(data.blackCards);
    });


function drawCard() {
    
    const randomDeckIndex = Math.floor(Math.random() * entireDeck.length)
    const randomDeck = entireDeck[randomDeckIndex]
    const cardNames = Object.keys(randomDeck)
    const randomCardIndex = Math.floor(Math.random() * cardNames.length)
    const randomCardName = cardNames[randomCardIndex]
    
    return {
        'Card': randomCardName.toUpperCase(),      
        'Color': deckColors[randomDeckIndex],    
        'Meaning': randomDeck[randomCardName].meaning,
        'Image' : randomDeck[randomCardName].image  
    }    
    
}



let cardPullArray = [] 

function colorCounts(){
    let colorCounts = {} 
            for(let card of cardPullArray){ 
                colorCounts[card.Color] = (colorCounts[card.Color] || 0) + 1 
            }  
            for(let color in colorCounts){
                if(colorCounts[color] > 1){
                    console.log(colorMeanings[color])
                }
            }   
}


// function threeCardSpreadWithDelay() {
//     // let cardPullArray = [] 
//     let firstCard = drawCard()
//     console.log(firstCard)
//     cardPullArray.push(firstCard) 

//     setTimeout(() => {
//         let secondCard = drawCard()
//         if(secondCard === firstCard){ 
//             secondCard = drawCard()
//         }
//         console.log(secondCard)
//         cardPullArray.push(secondCard) 
        
//         setTimeout(() => {
//             let thirdCard = drawCard()
//             if(thirdCard === secondCard){
//                 thirdCard = drawCard()
//             }
//             console.log(thirdCard)
//             cardPullArray.push(thirdCard)  

//             colorCounts()
        
//         }, 3000)
//     }, 3000)
// }



function threeCardSpreadWithDelay() {
    let firstCard = drawCard();
    cardPullArray.push(firstCard);
    // Display first card
    displayCard(firstCard, 1); // Helper function to handle DOM updates

    setTimeout(() => {
        let secondCard = drawCard();
        if(secondCard === firstCard) {
            secondCard = drawCard();
        }
        cardPullArray.push(secondCard);
        displayCard(secondCard, 2);

        setTimeout(() => {
            let thirdCard = drawCard();
            if(thirdCard === secondCard) {
                thirdCard = drawCard();
            }
            cardPullArray.push(thirdCard);
            displayCard(thirdCard, 3);
            colorCounts();
        }, 3000);
    }, 3000);
}

// Helper function to handle displaying each card
function displayCard(card, position) {
    const cardContainer = document.querySelector(`#card-${position}`);
    const cardImage = cardContainer.querySelector('.card-image');
    const cardMeaning = cardContainer.querySelector('.card-meaning');
    const colorMeaning = cardContainer.querySelector('.color-meaning');

    // Update DOM elements
    cardImage.src = card.Image;
    cardMeaning.textContent = card.Meaning;
    colorMeaning.textContent = colorMeanings[card.Color];
    
    // Maybe add some animation classes
    cardContainer.classList.add('card-reveal');
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
        console.log('FUCK')
        prismTextElement.style.display = "none";
        enterTextElement.style.display = "none";
        buttonElement.style.display = "none"
        // landingCardSpread()
    })
}





addEventListener("DOMContentLoaded", (event) => {



    enterButton()
    background()





})



