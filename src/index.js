






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



function elementCounts(){

    let elementCounts = {} 

            for(let card of cardPullArray){ 
                elementCounts[card.Element] = (elementCounts[card.Element] || 0) + 1 
            }  
            for(let element in elementCounts){
                if(elementCounts[element] > 1){
                    
                    return elementMeanings[element]
                    
                }
            }   
            

}



function mouseEnterArea() {
    const cardImages = document.querySelectorAll('[class$="-image"]')
    cardImages.forEach(img => {
      const textBelow = document.createElement('p')
      textBelow.textContent = '。°。°。°。°。°'
      textBelow.classList.add('text-below')
      img.parentElement.appendChild(textBelow)

    })
    
}



function cardBacks() {
  
    const cardOneBack = document.querySelector('#card-1-back');
    const cardTwoBack = document.querySelector('#card-2-back');
    const cardThreeBack = document.querySelector('#card-3-back');

    cardOneBack.classList.add('card-back')
    cardTwoBack.classList.add('card-back')
    cardThreeBack.classList.add('card-back')


    const cardOneBackImage = document.createElement('img')
    cardOneBackImage.src = "./Images/Cards/sacred-geometry-svg.svg"
    cardOneBack.appendChild(cardOneBackImage)
    

    const cardTwoBackImage = document.createElement('img')
    cardTwoBackImage.src = "./Images/Cards/sacred-geometry-svg.svg"
    cardTwoBack.appendChild(cardTwoBackImage)
    
    
    const cardThreeBackImage = document.createElement('img')
    cardThreeBackImage.src = "./Images/Cards/sacred-geometry-svg.svg"
    cardThreeBack.appendChild(cardThreeBackImage)

    mouseEnterArea()

}



function handleCardVanish(card){

    if(card === 'firstCard'){
        document.querySelector('#card-1-back').classList.add('card-vanish')
        
        
    }else if(card === 'secondCard'){
        document.querySelector('#card-2-back').classList.add('card-vanish')
        
        
    }
    else if(card === 'thirdCard'){
        document.querySelector('#card-3-back').classList.add('card-vanish')
        
        
    }
}



function threeCardSpread() {
    let firstCard, secondCard, thirdCard
    const invisibleButtonOne = document.querySelector('.invisible-button-card-1')
    const invisibleButtonTwo = document.querySelector('.invisible-button-card-2')
    const invisibleButtonThree = document.querySelector('.invisible-button-card-3')

    setTimeout(() => {
        invisibleButtonOne.addEventListener('click', () => {
            firstCard = drawCard()
            cardPullArray.push(firstCard)
            displayCard(firstCard, 1)
            handleCardVanish('firstCard')
            invisibleButtonOne.classList.add('button-vanish')

        }, { once: true })

        invisibleButtonTwo.addEventListener('click', () => {
            secondCard = drawCard()
            while (cardPullArray.some(card => card.Card === secondCard.Card)) {
                secondCard = drawCard()
            }
            cardPullArray.push(secondCard)
            handleCardVanish('secondCard')
            displayCard(secondCard, 2)
            invisibleButtonTwo.classList.add('button-vanish')

        }, { once: true })

        invisibleButtonThree.addEventListener('click', () => {
            thirdCard = drawCard()
            while (cardPullArray.some(card => card.Card === thirdCard.Card)) {
                thirdCard = drawCard()
            }
            cardPullArray.push(thirdCard)
            handleCardVanish('thirdCard')
            displayCard(thirdCard, 3)
            invisibleButtonThree.classList.add('button-vanish')
            
            elementCounts()
            submitForm()

        }, { once: true })
    }, 3000)
    cardHover()
}





function displayCard(card, position) {
    const cardImageContainer = document.querySelector(`.card-${position}-image`);
    const meaningContainer = document.querySelector(`.card-${position}-meaning`)
    const elementContainer = document.querySelector('.color-meaning')
    const cardNumberContainer = document.querySelector(`.card-number-${position}`)

    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(card.Image)}`
    
    cardImageContainer.src = svgDataUrl
    meaningContainer.textContent = card.Element + " : " + card.Card + " - " + card.Meaning;
    elementContainer.textContent = elementCounts();
    cardNumberContainer.textContent = `CARD ${position}`

    
    cardMeaningHover(card, position)
    
}




function cardHover() {
    const containers = document.querySelectorAll('.spread-container')
    setTimeout(() => {
        containers.forEach(container => {
            const card = container.querySelector('[class^="card-"]')
            const img = container.querySelector('[class$="-image"]')
            
            container.addEventListener('mouseover', () => {
            card.style.transform = "scale(1.1)"
            if(img) img.style.transform = "scale(1.1)"
            })
            
            container.addEventListener('mouseout', () => {
            card.style.transform = "scale(1)"
            if(img) img.style.transform = "scale(1)"
            })
        })
    }, 1000)    
}



function cardMeaningHover(card, position){

        const meaningBlock = document.querySelector(`.card-${position}-meaning`)

        meaningBlock.addEventListener('mouseover', () => {
            colorElementObject = {
                Void: "#191970",
                Light: "#ffe5b4",
                Gravity: "#483c8b",
                Time: "#8fbc8f",
                Matter: "#8b4413",
                Chaos: "#8b0000",
                Harmony: "#8b7b8b",
                Energy: "#ff8c00",
                Spirit: "#4b0082"
            }
            const color = colorElementObject[card.Element];
            meaningBlock.style.backgroundColor = color;
            meaningBlock.style.backgroundColor = `${color}80` 
            meaningBlock.style.padding = "10px"
            
            
            elementText(card, colorElementObject)
            
        })
        meaningBlock.addEventListener('mouseout', () => {
            meaningBlock.style.backgroundColor = "transparent";
            meaningBlock.style.padding = "0px"
        });
}



function elementText(card, colorElementObject){
    const elementBlock = document.querySelector('.color-meaning')
    const color = colorElementObject[card.Element]

    elementBlock.addEventListener('mouseover', () => {
        elementBlock.style.backgroundColor = color;
        elementBlock.style.backgroundColor = `${color}80` 
        elementBlock.style.padding = "10px"
        elementBlock.classList.add('elementColors')
    })
    elementBlock.addEventListener('mouseout', () => {
        elementBlock.style.padding = "0px"
        elementBlock.style.backgroundColor = "transparent"
    })
    
}



function background(){
    const backgroundImage = document.createElement('img')
    backgroundImage.src = 'Images/Others/BB18312.jpg'
    const body = document.querySelector('body')
    body.appendChild(backgroundImage)
    backgroundImage.id = 'night-sky'
}



function enterButton() {
    const buttonElement = document.querySelector('#enter-button')
    const enterTextElement = document.querySelector('#enter')
    const prismTextElement = document.querySelector('.tessellation-container')
    // const textElements = document.querySelectorAll('.text-line')
    
    enterTextElement.style.cursor = 'pointer'
    
    buttonElement.addEventListener('click', () => {
      
      prismTextElement.style.transition = 'opacity 0.5s ease'
      enterTextElement.style.transition = 'opacity 0.5s ease'
      
      prismTextElement.style.opacity = '0'
      enterTextElement.style.opacity = '0'
      
      setTimeout(() => {
        prismTextElement.style.display = 'none'
        enterTextElement.style.display = "none"
        buttonElement.style.display = "none"
      }, 500)
    })
}




function submitForm(){

    const form = document.getElementById('screenshotForm');
    const formContainer = document.querySelector('.form-container')    
    formContainer.classList.add('form-visible')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const filename = document.getElementById('filename').value;
        const fullFilename = `${filename}.png`

        html2canvas(document.body, {
            backgroundColor: null,
            useCORS: true,
            allowTaint: true,  
            foreignObjectRendering: true,  
            scale: 1,
            logging: true,
            
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = fullFilename;
            link.href = canvas.toDataURL();
            link.click();
           });
        form.reset()
    })
   
}







document.addEventListener("DOMContentLoaded", () => {
    
    cardBacks()
    threeCardSpread()
    enterButton()
    background()
    
    
    

})





