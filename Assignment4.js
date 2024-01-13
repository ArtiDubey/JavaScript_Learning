/*Game number - Create a game where you start with any random number.
Ask user to keep guessing the game number until user enters the correct value  */
let gamenumber = 50;
let usernumber = prompt("Guess correct number");

while (usernumber!=gamenumber){
  usernumber =  prompt("you enter wrong number,Guess again");


}
console.log("Congratulation you enter the correct number");
