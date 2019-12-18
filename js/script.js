/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// create an array to store five object literals
let quotes = [
  {
    quote: "I'm going to make an offer he can't refuse",
    source: "The Godfather",
    citation: "Parmount Pictures",
    year: "1972",

  },

  {
    quote: "You talking to me?",
    source: "Taxi Driver",
    citation: "Columbia Pictures",
    year: "1976",
  },

  {
    quote: "Show me the money!",
    source: "Jerry Maguire",
    citation: "Sony Pictures",
    year: "1996",
  },

  {
    quote: "I'll be back",
    source: "The Terminator",
    citation: "Orion Pictures",
    year: "1984",
  },

  {
    quote: "Here's Johnny",
    source: "The Shining",
    citation: "Warner Bros",
    year: "1980",
  }
];
// prints quotes to the console
console.log(quotes);

//create a function that produces a random color every time the user clicks random quote
function randomRGB(){
  return Math.floor(Math.random() * 256);
}

// create a function to get a random quote
function getRandomQuote(){
  let num = quotes[Math.floor(Math.random() * quotes.length)];
  return num;
  }
  //print the random quote to the console
  console.log(getRandomQuote());

//create a function to print the quote on screen when the user clicks next quote
function printQuote(){

  let red = randomRGB();
  let blue = randomRGB();
  let green = randomRGB();
  let rgbColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
  

  let randomQuote = getRandomQuote();
  let printQ = '<p class = "quote">' + randomQuote.quote + '</p>';
  printQ += '<p class ="source">' + randomQuote.source;
  if(randomQuote.citation){
    printQ += '<span class = "citation">' + randomQuote.citation + '</span>';
  }
  if(randomQuote.year){
    printQ += '<span class ="year">' + randomQuote.year + '</span>';
  }
  printQ += '</p>';

  //change the color
  document.body.style.backgroundColor = rgbColor;

  document.getElementById('quote-box').innerHTML = printQ;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);