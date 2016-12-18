// Random Quote Generator for Treehouse Project #1
// Global variables
var newQuote;
var previousQuote;
var source;
var citation;
var year;
var media;
var youTube;
var link;
var picardCounter = 0;
var randomNumber;
var previousRN;

var quotesShownArray = [];  // array for Stretch Goal of not repeating quotes until all have been displayed

function getRandomQuote() {
    // creates a random number ranging from 1 to the length of the quotes array & if number repeats then loop for a new number until they don't match
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    // conditional makes it so the same quote index won't be picked twice
    } while (randomNumber === previousRN);
    previousRN = randomNumber;
    // selects random quote from quotes array
    newQuote = quotes[randomNumber].quote;
    checkQuoteForRepeat();
    return newQuote;
}

function checkQuoteForRepeat() {
    //function to check that quotes are not repeated in a cycle
    // if quote has been shown And not all quotes have been shown, get a new quote
    if (quotesShownArray.includes(newQuote) && quotesShownArray.length <= (quotes.length -1)) {
        getRandomQuote();
        // if all the quotes have been shown, empty the array & start over to not repeat quotes
    } else if (quotesShownArray.length === (quotes.length -1)) {
            quotesShownArray = [];
    } else {
        quotesShownArray.push(newQuote);
        // sets variable to the previous shown quote
        previousQuote = quotesShownArray[quotesShownArray.length-2];
    }
    return newQuote;
}

function getObjectProps() {
    /*for in loop searches through the objects to find matching
    quote & then grabs that objects properties
    for the template*/
    for (var key in quotes) {
        if (quotes[key].quote === newQuote){
            source = quotes[key].source;
            citation = quotes[key].citation;
            year = quotes[key].year;
            media = quotes[key].media;
            youTube = quotes[key].youTube;
            link = quotes[key].link;
        }
    }
}

function printQuote() {
    getRandomQuote();
    getObjectProps();
    changeBackgroundColor();
    picard();
    // var template = '<p class="quote">' + newQuote + '</p>';
    var $template = $('<p class="quote">' + newQuote + '</p>');
    $template += '<p class="source">' + source;

    /*if statements prevents properties that the object does
    not have from being added to template*/
    if (citation) {
        $template += '<span class="citation">' + citation + '</span>';
    }
    if (year) {
        $template += '<span class="year">' + year + '</span>';
    }
    if (media) {
        $template += '<span class="media">' + media + '</span>';
    }
    if (youTube) {
        $template += '<span class="youTube"><a href="' + youTube + '" target="_blank">' + link + '</a></span></p>';
    }
    // printQuote puts final HTML string to the page using:
    // var getQuoteBox = document.getElementById('quote-box');
    // getQuoteBox.innerHTML = $template;
    $('#quote-box').html($template);
}

function changeBackgroundColor() {
    // randomly selects a new background color when quote is changed
    red = Math.floor(Math.random() * 256+1);
    blue = Math.floor(Math.random() * 180+1);
    green = Math.floor(Math.random() * 256+1);
    var color = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.9 + ')';
    $('#bgColor').css('background-color', color);
    console.log('New Quote: ' + newQuote);
}

function picard() {
    //This function adds/removes a jpg to the page for the Picard quote.
    var $picardImg = $('<img>');
    if (newQuote === quotes[2].quote && picardCounter === 0) {
        $('#bgColor').append($picardImg);
        $picardImg.attr('src', 'img/hrus_ex_picards_4_lights_dd.jpg');
        picardCounter = 1;
    } else {
        $('img').remove();
        picardCounter = 0;
    }
}

//Timer to automatically refresh quotes
var interval = window.setInterval(printQuote, 6000);

$(document).ready(function(){
    printQuote();
});

// when user clicks on the button, the "printQuote" function is called
$('#loadQuote').on('click', printQuote);
