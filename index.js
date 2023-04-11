// Code your solutions in this file
// function writeCards( namesArray, event ) {
//     let thankYouCards = []
//     for ( let i = 0; i < namesArray.length; i++) {
//         thankYouCards.push(  Thank you, ${namesArray[i]}, for the wonderful ${event} gift! )

//         }
//         return thankYouCards
//     }
    
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
    
// }

// const gifts = ["teddy", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bowl!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts)

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
        
    }

    return thankYouCards
}

function countDown(numbers) {
    for (let i = numbers; i > -1; i--) {
        console.log(i)
        
    }
    return numbers
}






// for (let age = 4; age > -1; age--) {
//     console.log(`I'm ${age} yrs old`)
    
// }
