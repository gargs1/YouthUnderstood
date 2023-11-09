// random msg generator

var msgButton = $(".generator");
//links button from HTML
var message = $(".message");
//links container we will append to

msgButton.on("click", randomMsg);
//event listener!! so when the buttons cicked, the function randomMsg is called

var scholarsRock = ["You are smart", "I am proud of you", "You're not alone.", "It will get better", "You are amazing", "You are beautiful", "Your smile is contagious.", "Everyone deserves someone like you!", "You are strong.", "You are appreciated", "You are loved", "You make a difference", "You're a gift to those around you", "Everyone deserves someone like you!", "You are brave", "You got this!"]
//random messages to choose from

 function randomMsg () {
  var randomDecimal = Math.random() 
  var randomNum = randomDecimal * scholarsRock.length;
  var rounded = Math.floor(randomNum);
  var randMsg = scholarsRock[rounded];
//this code ⬆️⬆️⬆️ all randomly selects an element from the array
   //this code ⤵️ is a simpler way to write the exact same thing as the lines above
    // var randomNum = Math.random() * scholarsRock.length;
    // var randMsg = scholarsRock[Math.floor(randomNum)];
   
//next, we want take the random message that was generated, randMsg, and have it be displayed on the screen
   message.text(`${randMsg}`);
 }
