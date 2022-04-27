// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);    
    //debugger;
}


const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for (let i=0 ; i<gifts.length ; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }
    return gifts;
}
wrapGifts(gifts);*/


const messages = [];
function writeCards(stringName,eventName){
    for (let i=0 ; i<stringName.length ; i++){
    messages[i] = `Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`
    }
    return messages
}
//writeCards(["Charlie","Samip","Ali"],"birthday");


function countDown(randomNumber){
    while (randomNumber >= 0){
        console.log(randomNumber);
        randomNumber--
    }
    return 
}
//countDown(10)