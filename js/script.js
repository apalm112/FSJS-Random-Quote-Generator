// Random Quote Generator for Treehouse Project #1
// Global variables
var newQuote;
var previousQuote;
var source;
var citation;
var year;
var picardCounter = 0;

var quotesShownArray = [];  // array for Stretch Goal of not repeating quotes until all have been displayed

function getRandomQuote() {
    // creates a random number ranging from 1 to the length of the quotes array
    var randomNumber = Math.floor(Math.random() * quotes.length);
    // selects random quote from quotes array
    newQuote = quotes[randomNumber].quote;
//    quotesShownArray.push( newQuote );
    // sets variable to the previous shown quote
    previousQuote = quotesShownArray[quotesShownArray.length-2];
    return newQuote;
}

function checkForRepeats() {
    // function tracks quotesShownArray & whether or not a quote has been displayed
    if (quotesShownArray.includes(newQuote) !== true) {
        quotesShownArray.push( newQuote );
        previousQuote = quotesShownArray[quotesShownArray.length-2];
    } else {
        // sets variable to the previous shown quote
        previousQuote = quotesShownArray[quotesShownArray.length-2];
    }
}

function getObjectProps() {
    /*for in loop searches through the objects to find matching
    quote & then grabs that objects properties
    for the template*/
    for (var key in quotes){
        if (quotes[key].quote === newQuote){
            source = quotes[key].source;
            citation = quotes[key].citation;
            year = quotes[key].year;
        }
    }
}

function printQuote() {
    newQuote = getRandomQuote();
    checkForRepeats();
    getObjectProps();
    changeBackgroundColor();
    picard();
    // randomizer();
    var template = '<p class="quote">' + newQuote + '</p>';
    template += '<p class="source">' + source;
    /*if statement prevents properties that the object does
    not have from being added to template*/
    if (citation){
        template += '<span class="citation">' + citation + '</span>';
    }
    if (year) {
    template += '<span class="year">' + year + '</span></p>';
    }
    // printQuote puts final HTML string to the page using:
    var getQuoteBox = document.getElementById('quote-box');
    getQuoteBox.innerHTML = template;
}

function changeBackgroundColor() {
    /*if new quote is different from current quote
    then background-color is changed*/
    red = Math.floor(Math.random() * 256+1);
    blue = Math.floor(Math.random() * 180+1);
    green = Math.floor(Math.random() * 256+1);
    var color = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.9 + ')';
    var getContainer = document.getElementById('bgColor');
    console.log(color);
    //checks if new quote is different than the previous quote
    if (newQuote !== previousQuote) {
    getContainer.style.backgroundColor = color;
    }
}

function picard() {
    //This function adds/removes a jpg to the page for the Picard quote.
    // if conditional to addd picard jpg
    if (newQuote === quotes[2].quote && picardCounter === 0) {
        var getPicard = document.getElementById('picard');
        var pic = document.createElement('img');
        pic.setAttribute('src', 'img/hrus_ex_picards_4_lights_dd.jpg');
        getPicard.appendChild(pic);
        picardCounter = 1;
    }
    // if conditional to remove picard jpg when quote changes
    if (newQuote != quotes[2].quote && picardCounter === 1) {
        var getPicard = document.getElementById('picard');
        getPicard.firstChild.remove();
        picardCounter = 0;
    }
}

function randomizer() {
    // function randomly mixes up the objects properties
    do {
        var randomNumber = Math.floor(Math.random() * quotes.length);
        // selects random quote from quotes array
        newQuote = quotes[randomNumber].quote;
    } while (newQuote === previousQuote);
}

// This do while loop runs once to load a random quote when the page is first loaded & push that value to an array
do {
    printQuote();
} while (false);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
