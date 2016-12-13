// Random Quote Generator for Treehouse Project #1
// Global variables
var newQuote;
var getRQ;
var source;
var citation;
var year;
var previousQuote;
var counter = 0;
var picardCounter = 0;
var repeatCounter = 0;

var quotesShownArray = [];  // array for Stretch Goal of not repeating quotes until all have been displayed

function getRandomQuote() {
    // creates a random number ranging from 1 to the length of the quotes array
    var rando = Math.floor(Math.random() * quotes.length);
    // selects random quote from quotes array
    newQuote = quotes[rando].quote;

    while (repeatCounter) {
        if (newQuote === previousQuote) {
            rando = Math.floor(Math.random() * quotes.length);
            newQuote = quotes[rando].quote;
        } else {
            break;
        }
    }
    repeatCounter = 1;
    return newQuote;
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
    var getRQ = getRandomQuote();
    getObjectProps();
    changeBackgroundColor();
    picard();
    var template = '<p class="quote">' + getRQ + '</p>';
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
    quotesShownArray.push( newQuote );
    // sets variable to the previous shown quote
    previousQuote = quotesShownArray[quotesShownArray.length-2];
    //checks if new quote is different than the previous quote
    if (newQuote !== previousQuote) {
    getContainer.style.backgroundColor = color;
    console.log(color + '  ' + source);
    console.log(newQuote + '    ' + previousQuote);
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

function checkForRepeats() {
    //TODO: stretch goal function to not repeat quotes until all quotes have been shown, use console.log();
    if (repeatCounter) {
            if (quotesShownArray.includes(newQuote)) {
                // get new quote
                console.log('before: ' + newQuote);
                getRandomQuote();
                console.log('Wɘ Aᴙɘ ɘxqɘᴙiɘᴎↄiᴎg TɘↄHᴎiↄAl biꟻꟻiↄUlTiɘ﻿');
            } else {
                // adds the selected quote to an array
                quotesShownArray.push( newQuote );
                console.log('ELSE CLAUSE HERE TO PUSH TO ARRAY');
            }
    }
    repeatCounter += 1;
    previousQuote = quotesShownArray[quotesShownArray.length-2];
    console.log('Previous Quote: ' + previousQuote);
    console.log('New Quote: ' + newQuote);
}

// This do while loop runs once to load a random quote when the page is first loaded & push that value to an array
do {
    printQuote();
    console.log('Do While Loop, execute once only!');
} while (false);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
