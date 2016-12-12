// Random Quote Generator for Treehouse Project #1
var getQuote;
var getRQ;
var source;
var citation;
var year;
var quoteShown;
var getCurrentQuote;
var counter =0;


var quotesShownArray = [];  // array for Stretch Goal of not repeating quotes until all have been displayed

function getRandomQuote() {
    // selects random quote from quotes array
    var rando = Math.floor(Math.random() * quotes.length);
    // adds the selected quote to an array
    var quoteShown = quotesShownArray.push( quotes[rando].quote );
    // checkForRepeats(); stopping point here
    getQuote = quotes[rando].quote;
    return getQuote;
}
function getObjectProps() {
    /*for in loop searches through the objects to find matching
    quote & then grabs that objects properties
    for the template*/
    for (var key in quotes){
        if (quotes[key].quote === getQuote){
            source = quotes[key].source;
            citation = quotes[key].citation;
            year = quotes[key].year;
        }
    }
}


function printQuote() {
    var getRQ = getRandomQuote();
    getObjectProps();
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
    changeBackgroundColor();
    // checkForRepeats();

}

function changeBackgroundColor() {
    /*if new quote is different from current quote
    then background-color is changed*/
    red = Math.floor(Math.random() * 256+1);
    blue = Math.floor(Math.random() * 180+1);
    green = Math.floor(Math.random() * 256+1);
    var color = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.9 + ')';
    var getContainer = document.getElementById('bgColor');
    getCurrentQuote = quotesShownArray[quotesShownArray.length-2];
    if (getQuote !== getCurrentQuote) {
    getContainer.style.backgroundColor = color;
    }
    console.log('New: ' + getQuote);
    console.log('Previous: ' + getCurrentQuote);
    picard();
}

function picard() {
    // if conditional to addd/remove picard jpg
    if (getQuote === quotes[2].quote && counter === 0) {
        var getPicard = document.getElementById('picard');
        var pic = document.createElement('img');
        pic.setAttribute('src', 'img/hrus_ex_picards_4_lights_dd.jpg');
        getPicard.appendChild(pic);
        counter = 1;
    }
    if (getQuote != quotes[2].quote && counter === 1) {
        var getPicard = document.getElementById('picard');
        getPicard.firstChild.remove();
        counter = 0;
    }
}

function checkForRepeats() {
    //TODO: stretch goal function to not repeat quotes until all quotes have been shown, use console.log();
    // This function should: as each quote is added to quotesArray
    // check to see if that quote is already in the quotesArray
    // if (quoteShown is in quotesArray)
    // do not push it to quotesArray
    // get another random quote
    var counter = 0;
    // for (var idx=0;idx<quotesShownArray.length;idx++) {
    //     if (getQuote is in quotesShownArray){
    //         getRandomQuote();
    //      }
    // }
     console.log('new quote: ' + getQuote);
     console.log('current quote: ' + getCurrentQuote);
}

// This do while loop runs once to load a random quote when the page is first loaded
do {
    printQuote();
} while (false);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
