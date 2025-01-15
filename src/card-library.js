//Prism Oracle Guide


const redCards = {
    Anger: 'Acknowledge what you cannot control. Channel this immense energy into something helpful.',
    Pain: 'Never forget that after pain comes healing. Be gentle with yourself, take your time.',
    Passion: 'A fire in your belly, a drive inside your heart. Celebrate, love; embrace your desires.',
    Stop: 'Take a beat, and reflect. Maybe you just need to take a break. It\'s time to contemplate.',
    Strength: 'Power in the heart and in the mind, trust yourself and face your fears. You can overcome anything.',
}

const orangeCards = {
    Energy: "Tap into the momentum of something you have been working on. Pursue whatever calls you.",
    Frustration: " Despite your efforts, you keep hitting walls. Take a step back, and look at alternatives.",
    Happiness: 'Often we focus on when we are feeling bad, so take this time to cherish your joy. Feel its warmth.',
    Rejection: 'Try to reframe this pain. Whatever rejected you is not meant to be in your life.',
    Success: 'It\'s time to tap into the warmth of accomplishment. You have been working hard. Appreciate your growth.',
}

const yellowCards = {
    Caution: 'Try not to rush things. Listen to your inner voice, even if it\'s quiet.',
    Determination: 'Your goals are at hand. Keep climbing up to the summit, and don\'t be afraid to ask for help.',
    Illumination: 'A light in the darkness, fear and mystery leave you and you can now see the truth around you.',
    Hunger: "What are you hungry for? What do you need? Tap into your emotional and spiritual cravings.",
    Anxiety: 'Take a deep breath. You might feel overwhelmed but this panic paves the way to innovation',
}

const greenCards = {
    Abundance: 'Abundance comes in many forms, not just monetary. Celebrate the richness of love in your life with gratitude',
    Balance: 'Look at the areas of your life that need balancing, and appreciate the things that are balanced.',
    Growth: 'Embrace transformation in your life. Move forward towards your goals, and push through the pain.',
    Movement: 'It\'s time to take action. Push through the fears and anxiety, and proceed down your path.',
    Rest: 'It\'s time for you to take a break. Be kind to your body, pay attention to your needs.',
}

const blueCards = {
    Cleanse: 'Take a moment to attend to yourself and your space. Embrace the calm of a clean energy, and be kind to yourself.',
    Flow: 'It\'s time to ride the wave. You can\'t fight the current, so it\'s important you move with it. Don\'t worry.',
    Reflection: 'Take a look around you, think of how you got here. Introspection leads to enlightenment.',
    Sadness: 'Do not despair. Feel the weight of your emotions, and know that strength and light lie on the other side.',
    Trust: 'Start trusting yourself. All the answers you need are within you, just listen and open your heart.',
}

const purpleCards = {
    Creativity: 'We can all express ourselves, do not shy away from your inspirations. Embrace the magic, the spark.',
    Faith: 'Trust the universe to guide you, to nurture your soul. Embrace the forces that ebb and flow around you.',
    Intuition: 'Trust in the deep knowledge just beyond your awareness. Tap into your guiding light.',
    Magic: 'Magic is real. A moment of manifestation has arrived. Chase that brilliant spark.',
    Mystery: 'You don\'t need to have all the answers right now. The unknown will not hurt you, surrender to it.',
}

const pinkCards = {
    Comfort: 'It\'s time for some self care and comfort. Nourish your body and spirit. Whatever you do, do it with ease.',
    Disruption: 'A moment of shock is upon you, but with intensity comes innovation. Embrace the change before you.',
    Ideation: 'Nurture your ideas and projects. Focus on creating a safe space for yourself and your crafts.',
    Love: 'Notice the love that surrounds you, from partners, family, and friends. Practice sharing it with the world, and yourself.',
    Sweetness: 'Savor the precious little moments in your life. Enjoy the fruits and flavors of everything. Show appreciation.',
}

const whiteCards = {
    Consciousness: 'Feel and sense what surrounds you, and what is inside you. Surpass your ego, and tune in to your soul.',
    Ghost: 'Your past may be haunting you. Consider your repressions and unfinished business, pay attention to your emotions.',
    Isolation: 'It may feel lonely, but solitude can heal deep wounds. Take time to learn about yourself; pay attention.',
    Peace: 'Harmony surrounds you. Any turmoil you are experiencing is coming to an end. Meditate on this new tranquility.',
    Surrender: 'Do not resist. It might feel uncomfortable, but you can now free yourself from fighting and find new paths.',
}

const blackCards = {
    Confidence: 'You\'ve earned this moment of pride. Bask in it and carry it with you, but remember you\'re not invincible.',
    Death: 'Death brings great change. A phase or cycle in your life is coming to an end, and with it a new beginning.',
    Fear: 'Summon your courage and brave your fears. Cast aside your doubt and believe in your strength, the night is almost through.',
    Protection: 'Be mindful of your safety, in heart and mind. What makes you feel impervious? Shield yourself from darkness.',
    Space: 'You are not lost, your spirit can fill the emptiness around you. Space makes room for opportunity, use it: be bold.',
}


// const entireDeck = [blackCards, whiteCards, pinkCards, purpleCards, blueCards, greenCards, yellowCards, orangeCards, redCards]


// const entireDeck = [
//     redCards,
//     orangeCards,
//     yellowCards,
//     greenCards,
//     blueCards,
//     purpleCards,
//     pinkCards,
//     whiteCards,
//     blackCards,
// ]

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


